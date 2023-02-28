const { httpError } = require("../helpers/handleError")
const itemModel =require("../models/items")

const getItems=async (req,res)=>{
    try{
        const listAll=await itemModel.find({})
        res.send(listAll)
        
    }catch(e){
        httpError(res,e)
    }
}

const getItemsById=(req,res)=>{
    
}


const postItems=async (req,res)=>{
    try{
        const {numero_de_operacion,
               codigo_de_producto,
               numero_de_inyectora,
               numero_de_molde,
               tiempo_de_ciclo,
               materia_prima,
               descripcion_material }=req.body

        console.log(req.body)

        const resDetail=await itemModel.create({
            numero_de_operacion,
            codigo_de_producto,
            numero_de_inyectora,
            numero_de_molde,
            tiempo_de_ciclo,
            materia_prima,
            descripcion_material
        })
        res.send({resDetail})
        
    }catch(e){
        res.send({data:{},
        status:false})
        httpError(res,e)
    }
}

const putItems=(req,res)=>{

}

const deleteItems=(req,res)=>{

}


module.exports={
    getItems,
    getItemsById,
    postItems,
    putItems,
    deleteItems
}