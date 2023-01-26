const { httpError } = require('../helpers/handleError')
const userModel = require('../models/users')

const getItems = async (req, res) => {
    try {
        const listAll = await userModel.find({})
        res.send({ data: listAll })
    } catch (e) {
        httpError(res, e)
    }
}

const getItem = (req, res) => {

}

const createItem = async (req, res) => {
    try {
        const { name, age, email } = req.body
        const resDetail = await userModel.create({
            name, age, email
        })
        res.send({ data: resDetail })
    } catch (e) {
        httpError(res, e)
    }
}


const updateItem = (req, res) => {
    try{
        let userId=req.params.id;
        let update=req.body;
        userModel.findByIdAndUpdate(userId,update,(err,userUpdated)=>{
            if(err) res.status(500).send({'msg':`error al actualizar usuario ${err}`})
            if(update.body)res.status(500).send({'msg':`error, no puede cambiar su email ${err}`})
            res.status(200).send({'msg':userUpdated})
        })
    }
    catch(e){
        console.log(e)
    }
}

const deleteItem = (req, res) => {

}

module.exports = { getItem, getItems, deleteItem, createItem, updateItem }