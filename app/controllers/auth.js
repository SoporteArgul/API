const { httpError } = require('../helpers/handleError')
const { encrypt, compare } = require('../helpers/handleBcrypt')
const { tokenSign } = require('../helpers/generateToken')
const userModel = require('../models/users')
const { sendConfirmationEmail }=require('../services/auth.js')
const {  validationResult } = require('express-validator');
const multer  = require('multer')


//Login!
const loginCtrl = async (req, res) => {
    try {
        const { email, password } = req.body

        const user = await userModel.findOne({ email })
        
        // if (user.status != "Active") {
        //     return res.status(401).send({
        //       message: "Pending Account. Please Verify Your Email!",
        //     });
        //   }
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

        // if (!checkPassword) {
        //     res.status(409)
        //     res.send({
        //         error: 'Invalid password'
        //     })
        //     return
        // }

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
        const { email, password, password2, name, legajo } = req.body
        const uppercase = /[A-Z]+/;
        const lowercase = /[a-z]+/;
        const digit = /[0-9]+/;
        const special = /[\W]+/;
        const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let token = '';
        
        console.log(req.body)
        
        for (let i = 0; i < 25; i++) {
            token += characters[Math.floor(Math.random() * characters.length )];
        }
            
        // if(!uppercase(password) && !lowercase(password) && !digit(password) && !special(password) && password.length < 8) {
        //     res.send('The password must be at least 8 characters long and contain uppercase and lowercase letters, digits and special characters.');
        // }

        if (password==password2){
            
            const passwordHash = await encrypt(password) 
            const registerUser = await userModel.create({
                    email,
                    name,
                    password: passwordHash,
                    legajo,
                    confirmationCode:token,
                })
         
                // try{
                //     let confirmationCode=token 
                //     // sendConfirmationEmail(
                //     //     name,
                //     //     email,
                //     //     confirmationCode) 
                //     }catch(e){
                //             console.log(e)
                //  }
                
      
             res.send({ data: registerUser,
                        info: "User was registered successfully! Please check your email"})
        }else{
            res.status(204).send("las contraseñas no coinciden!")
        }
       
       
             
       } catch (e) {
        console.log(e)
        httpError(res, e)
    }
}



module.exports = { loginCtrl, registerCtrl }