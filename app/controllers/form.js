const formModel=require('../models/form')
const { httpError } = require("../helpers/handleError")

const createForm= async (req,res)=>{
    try {
        var today = new Date();
        var now = today.toLocaleString();
    const {
            //informacion de la orden de produccion
            nombre_formulario,
            numero_operacion,
            numero_producto,
            materia_prima0,
            materia_prima1,
            materia_prima2,
            materia_prima3,
            materia_prima4,
            materia_prima5,
            numero_inyectora,
            numero_molde,
            tiempo_ciclo,
            aditivo,
            registrado_por,
            //Dispositivos utilizados
            pico_de_inyectora,
            microgel_0,
            microgel_1,
            regoplas,
            robot,
            otro,
            //Temperaturas del proceso
            temp_plato_fijo,
            temp_plato_movil,
            temp_masa_fundida,
            tablero_colada_caliente,
            temp_horno,
            //Parametros del proceso
            tpo_ciclo_optimo,
            tpo_ciclo_actual,
            tpo_inyeccion,
            tpo_extrusor,
            tpo_enfriamiento,
            cojin,
            pico_presion,
            punto_transferencia,
            fuerza_cierre,
            tamano_dosific,
            contrapresion,
            presion_empaque,
            tpo_retencion,
            tipo_expulsion,
            //Cavidades habilitadas en produccion
            cavidades,
        observaciones
            }=req.body


        const formDetail = await formModel.create({
            //informacion de la orden de produccion
            nombre_formulario,
            numero_operacion,
            numero_producto,
            materia_prima0,
            materia_prima1,
            materia_prima2,
            materia_prima3,
            materia_prima4,
            materia_prima5,
            numero_inyectora,
            numero_molde,
            tiempo_ciclo,
            aditivo,
            registrado_por,
        //Dispositivos utilizados
            pico_de_inyectora,
            microgel_0,
            microgel_1,
            regoplas,
            robot,
            otro,
        //Temperaturas del proceso
            temp_plato_fijo,
            temp_plato_movil,
            temp_masa_fundida,
            tablero_colada_caliente,
            temp_horno,
        //Parametros del proceso
            tpo_ciclo_optimo,
            tpo_ciclo_actual,
            tpo_inyeccion,
            tpo_extrusor,
            tpo_enfriamiento,
            cojin,
            pico_presion,
            punto_transferencia,
            fuerza_cierre,
            tamano_dosific,
            contrapresion,
            presion_empaque,
            tpo_retencion,
            tipo_expulsion,
        //Cavidades habilitadas en produccion
            cavidades,
            observaciones,
            hora: now
        })
        // res.send(formDetail)
        return res.status(200).send("Formulario enviado con exito!")
    }catch(e){
        res.send({data:{},
        status:false}),
        httpError(res,e)
    }

}

const getFilter= async (req,res)=>{
    try{
    let match={}
    const keyword=req.query.keyword
    
    if (req.query.keyword){
        match.$or=[
            {materia_prima0:new RegExp(req.query.keyword,"i")},
            {materia_prima1:new RegExp(req.query.keyword,"i")},
            {materia_prima2:new RegExp(req.query.keyword,"i")},
            {materia_prima3:new RegExp(req.query.keyword,"i")},
            {materia_prima4:new RegExp(req.query.keyword,"i")},
            {materia_prima5:new RegExp(req.query.keyword,"i")}, 
        ]
        
    }
    const response=await formModel.aggregate([{$match:match}])
    res.send(response)
    }catch(e){}
}

const getForm= async (req,res)=>{
    try{
        const listAll=await formModel.find({})
        res.send(listAll)
    }catch(e){
        httpError(res,e)
    }
}

const getFormById=async (req,res)=>{
    try{
       const nombre_formulario=req.body
       const listOne=await formModel.findOne({
         nombre_formulario
        })
        res.send(listOne)
    }catch(e){
        httpError(res,e)
    }
}

module.exports={createForm,getForm,getFormById,getFilter}