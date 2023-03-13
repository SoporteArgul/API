const formModel = require('../models/form')
const { httpError } = require("../helpers/handleError");
const { findByIdAndDelete } = require('../models/form');
const multer=require('multer')
const sharp = require('sharp');
const QrCode=require('qrcode')


const createForm = async (req, res) => {
    try {
        var today = new Date();
        var now = today.toLocaleString();
        const {
            //informacion del archivo almacenado
            comentario,
            //informacion de la orden de produccion
            numero_de_lote,numero_operacion,codigo_producto,materia_prima0,materia_prima1,materia_prima2,materia_prima3,materia_prima4,materia_prima5,numero_inyectora,numero_molde,tiempo_ciclo,aditivo,registrado_por,
            //Dispositivos utilizados
            pico_de_inyectora,microgel_0,microgel_1,regoplas,robot,otro,
            //Temperaturas del proceso
            temp_plato_fijo,temp_plato_movil,temp_masa_fundida,tablero_colada_caliente,temp_horno,
            //Parametros del proceso
            tpo_ciclo_optimo,tpo_ciclo_actual,tpo_inyeccion,tpo_extrusor,tpo_enfriamiento,cojin,pico_presion,punto_transferencia,fuerza_cierre,tamano_dosific,contrapresion,presion_empaque,tpo_retencion,tipo_expulsion,
            //Cavidades habilitadas en produccion
            cavidades,observaciones
        } = req.body
        
        console.log(req.body)
        // const nameId=numero_producto.concat('.',numero_inyectora,'.','00000001')
        // console.log(nameId)
        // const qrText = `https://argul-test:3001/app/v1/form/${nameId}`
        // console.log(qrText)
        // const options = {
        //     margin:2,
        //     small:true
           
        //   };
        // await QrCode.toDataURL(qrText,options ,(err, url) => {
            
        //     if (err) throw err;
        //     sharp(Buffer.from(url.split(',')[1], 'base64'))
        //     .toBuffer((err, buffer) => {
        //         if (err) throw err;
        //         const base64 = buffer.toString('base64')
        
       
        nombre=numero_molde.concat(codigo_producto,numero_de_lote)
        url=`http://argul-test:3001/app/v1/${nombre}`
        console.log(nombre)
        const formDetail =  formModel.create({
            //informacion del achivo almacenado
            nombre_archivo:nombre,comentario,fecha_y_hora:now,
            //informacion de la orden de produccion
            numero_de_lote,numero_operacion,codigo_producto,materia_prima0,materia_prima1,materia_prima2,materia_prima3,materia_prima4,materia_prima5,numero_inyectora,numero_molde,tiempo_ciclo,aditivo,registrado_por,
            //Dispositivos utilizados
            pico_de_inyectora,microgel_0,microgel_1,regoplas,robot,otro,
            //Temperaturas del proceso
            temp_plato_fijo,temp_plato_movil,temp_masa_fundida,tablero_colada_caliente,temp_horno,
            //Parametros del proceso
            tpo_ciclo_optimo,tpo_ciclo_actual,tpo_inyeccion,tpo_extrusor,tpo_enfriamiento,cojin,pico_presion,punto_transferencia,fuerza_cierre,tamano_dosific,contrapresion,presion_empaque,tpo_retencion,tipo_expulsion,
            //Cavidades habilitadas en produccion
            cavidades,observaciones,image:"1",url:url
        })
    // })})

        return res.status(200).send("Formulario enviado con exito!")
    } catch (e) {
        res.send({
            data: {},
            status: false
        }),
            httpError(res, e)
    }

}

const getFilter = async (req, res) => {
    try {
        let match = {}
        const keyword = req.query.keyword

        if (req.query.keyword) {
            match.$or = [
                { numero_producto: new RegExp(req.query.keyword,"i") },
                { materia_prima0: new RegExp(req.query.keyword, "i") },
                { materia_prima1: new RegExp(req.query.keyword, "i") },
                { materia_prima2: new RegExp(req.query.keyword, "i") },
                { materia_prima3: new RegExp(req.query.keyword, "i") },
                { materia_prima4: new RegExp(req.query.keyword, "i") },
                { materia_prima5: new RegExp(req.query.keyword, "i") },
            ]

        }
        const response = await formModel.aggregate([{ $match: match }])
        res.send(response)
    } catch (e) { }
}

const getForm = async (req, res) => {
    try {
        const listAll = await formModel.find({})
        res.send(listAll)
    } catch (e) {
        httpError(res, e)
    }
}

const getFormById = async (req, res) => {
    try {
        const id= req.params.id
        const listOne = await formModel.findById({
           _id:id
        })
        res.send(listOne)
    } catch (e) {
        httpError(res, e)
    }
}

const updateForm = (req, res) => {
    try{
        let formId=req.params.id;
        let update=req.body;
        formModel.findByIdAndUpdate(formId,update,(err,formUpdated)=>{
            if(err) res.status(500).send({'msg':`Error al actualizar formulario ${err}`})
            if(update.body)res.status(500).send({'msg':`Error, no se pudo actualizar los cambios ${err}`})
            res.status(200).send({'msg':formUpdated})
        })
    }
    catch(e){
        console.log(e)
    }
}

const deleteForm= async (req,res)=>{
    try{
        const id=req.params
        const deleted = await formModel.findByIdAndDelete(id)
        res.send('Formulario Eliminado con exito!')
    }catch(e){
        httpError(res, e)
    }
}
module.exports = { createForm, getForm, getFormById, getFilter, updateForm }