const { httpError } = require('../helpers/handleError')
const { encrypt, compare } = require('../helpers/handleBcrypt')
const { tokenSign } = require('../helpers/generateToken')
const userModel = require('../models/users')
const { sendConfirmationEmail }=require('../services/auth.js')
const {  validationResult } = require('express-validator');

//Login!
const loginCtrl = async (req, res) => {
    try {
        const { email, password } = req.body

        const user = await userModel.findOne({ email })
        
        if (user.status != "Active") {
            return res.status(401).send({
              message: "Pending Account. Please Verify Your Email!",
            });
          }
        if (!user) {
            res.status(404)
            res.send({ error: 'Usuario o contrasena incorrectos' })
        }

        const checkPassword = await compare(password, user.password) //Contraseña!
        const tokenSession = await tokenSign(user) 

        if (checkPassword) { //TODO Contraseña es correcta!
            res.send({
                data: user,
                tokenSession
            })
            return
        }

        if (!checkPassword) {
            res.status(409)
            res.send({
                error: 'Invalid password'
            })
            return
        }

    } catch (e) {
        httpError(res, e)
    }
}

// Registramos usuario!
const registerCtrl = async (req, res) => {
    try {
        const validationErrors = validationResult(req);
        if (!validationErrors.isEmpty()) {
            return res.status(400);
        }
        // Datos que envias desde el front (postman)
        const { email, password, password2, name,age,role } = req.body
        
        const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let token = '';
        for (let i = 0; i < 25; i++) {
            token += characters[Math.floor(Math.random() * characters.length )];
        }

        if (password==password2){
            const uppercase = /[A-Z]+/;
            const lowercase = /[a-z]+/;
            const digit = /[0-9]+/;
            const special = /[\W]+/;

            if(!uppercase(password) && !lowercase(password) && !digit(password) && !special(password) && password.length < 8) {
                throw new Error('The password must be at least 8 characters long and contain uppercase and lowercase letters, digits and special characters.');
            }
             const passwordHash = await encrypt(password) // (123456)<--- Encriptando!!
             
             const registerUser = await userModel.create({
                    email,
                    name,
                    password: passwordHash,
                    age,
                    confirmationCode:token,
                    role
                })
         
                try{
                    let confirmationCode=token 
                    sendConfirmationEmail(
                        name,
                        email,
                        confirmationCode) 
                    }catch(e){
                            console.log(e)
                 }
                
      
             res.send({ data: registerUser,
                        info: "User was registered successfully! Please check your email"})
        }else{
            res.send("las contrasenas no coinciden!")
        }
       
       
             
       } catch (e) {
        httpError(res, e)
    }
}



module.exports = { loginCtrl, registerCtrl }