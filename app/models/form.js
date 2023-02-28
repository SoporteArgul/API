const mongoose=require('mongoose')

const formModel=new mongoose.Schema({
    
    nombre_formulario:{
        type:String
    },
    numero_operacion:{
        type:String
    },
    numero_producto:{
        type:String
    },
    materia_prima0:{
        type:String
    },
    materia_prima1:{
        type:String
    },
    materia_prima2:{
        type:String
    },
    materia_prima3:{
        type:String
    },
    materia_prima4:{
        type:String
    },
    materia_prima5:{
        type:String
    },
    numero_inyectora:{
        type:String
    },
    numero_molde:{
        type:String
    },
    tiempo_ciclo:{
        type:String
    },
    aditivo:{
        type:String
    },
    registrado_por:{
        type:String
    },
 //Dispositivos utilizados
     pico_de_inyectora:{
        type:String
        // estandar:{type:String},
        // estandar_con_filtro:{type:String},
        // diametro_boquilla:{type:String}
    },
     microgel_0:{
        type:String
    },
     microgel_1:{
        type:String
    },
     regoplas:{
        type:String
    },
     robot:{
        type:String
    },
     otro:{
        type:String
    },
 //Temperaturas del proceso
     temp_plato_fijo:{
        type:String
    },
     temp_plato_movil:{
        type:String
    },
     temp_masa_fundida:{
        type:String
    },
     tablero_colada_caliente:{
        type:String
        // controlador_1:{type:String},
        // controlador_2:{type:String},
        // controlador_3:{type:String},
        // controlador_4:{type:String},
        // controlador_5:{type:String},
        // controlador_6:{type:String},
        // controlador_7:{type:String},
        // controlador_8:{type:String},
        // controlador_9:{type:String},
        // controlador_10:{type:String},
        // controlador_11:{type:String},
        // controlador_12:{type:String},
        // controlador_13:{type:String},
        // controlador_14:{type:String},
        // controlador_15:{type:String},
        // controlador_16:{type:String},
        // controlador_17:{type:String},
        // controlador_18:{type:String},
        // controlador_19:{type:String},
        // controlador_20:{type:String},
        // controlador_21:{type:String},
        // controlador_22:{type:String},
        // controlador_23:{type:String},
        // controlador_24:{type:String},
        // controlador_25:{type:String},
        // controlador_26:{type:String},
        // controlador_27:{type:String},
        // controlador_28:{type:String},
        // controlador_29:{type:String},
        // controlador_30:{type:String},
        // controlador_31:{type:String},
        // controlador_32:{type:String},
        // controlador_33:{type:String},
        // controlador_34:{type:String},
        // controlador_35:{type:String},
        // controlador_36:{type:String},
        // controlador_37:{type:String},
        // controlador_38:{type:String},
        // controlador_39:{type:String},
        // controlador_40:{type:String},
        // controlador_41:{type:String},
        // controlador_42:{type:String},
        // controlador_43:{type:String},
        // controlador_44:{type:String},
        // controlador_45:{type:String},
        // controlador_46:{type:String},
        // controlador_47:{type:String},
        // controlador_48:{type:String},
        // controlador_49:{type:String},
        // controlador_50:{type:String},
        // controlador_51:{type:String},
        // controlador_52:{type:String},
        // controlador_53:{type:String},
        // controlador_54:{type:String},
        // controlador_55:{type:String},
        // controlador_56:{type:String},
        // controlador_57:{type:String},
        // controlador_58:{type:String},
        // controlador_59:{type:String},
        // controlador_60:{type:String},

    },
     temp_horno:{
        type:String
        // zona_1:{type:String},
        // zona_2:{type:String},
        // zona_3:{type:String},
        // zona_4:{type:String},
        // zona_5:{type:String},
        // zona_6:{type:String},
        // zona_7:{type:String},
        // zona_8:{type:String}

    },
 //Parametros del proceso
     tpo_ciclo_optimo:{
        type:String
    },
     tpo_ciclo_actual:{
        type:String
    },
     tpo_inyeccion:{
        type:String
    },
     tpo_extrusor:{
        type:String
    },
     tpo_enfriamiento:{
        type:String
    },
     cojin:{
        type:String
    },
     pico_presion:{
        type:String
    },
     punto_transferencia:{
        type:String
    },
     fuerza_cierre:{
        type:String
    },
     tamano_dosific:{
        type:String
    },
     contrapresion:{
        type:String
    },
     presion_empaque:{
        type:String
    },
     tpo_retencion:{
        type:String
    },
     tipo_expulsion:{
        type:String
    },
 //Cavidades habilitadas en produccion
     cavidades:{
        type:String
    },
     observaciones:{
        type:String
    },
    hora: {
        type: String
    }
},
    {
        versionKey: false
    })
module.exports=mongoose.model('form',formModel)