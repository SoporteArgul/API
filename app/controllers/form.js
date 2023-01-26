const formModel=require('../models/form')
const { httpError } = require("../helpers/handleError")

const createForm= async (req,res)=>{
    try{
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
            pico_de_inytectora,
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
            pico_de_inytectora,
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
        })
        res.send(formDetail)
    }catch(e){
        res.send({data:{},
        status:false}),
        httpError(res,e)

    }

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

module.exports={createForm,getForm,getFormById}