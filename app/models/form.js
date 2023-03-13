const mongoose = require('mongoose')
const prohibirComas=require('../helpers/notComas')


const formModel = new mongoose.Schema({

    //informacion del archivo almacenado
    nombre_archivo: {
        type: String,
        minLength:[1,"Al menos debe contener un caracter"],
        maxlength: [150, "El maximo de caracteres es 150!"],
        required: [true, "El nombre del archivo es necesario!"],
        validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          }
        
    },
    fecha_y_hora: {
        type: String,
        minLength:[1,"Al menos debe contener un caracter"],
        maxlength: [150, "El maximo de caracteres es 150!"],
        required: [true, "La fecha del archivo es necesaria!"],
  
    },
    comentario: {
        type: String,
        validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
        minLength:[1,"Al menos debe contener un caracter"],
        maxlength: [150, "El maximo de caracteres es 150!"],


    },

    //informacion de la orden de produccion
    numero_de_lote: {
        type: String,
        validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
        minLength:[1,"Al menos debe contener un caracter"],
        maxlength: [150, "El maximo de caracteres es 150!"],

    },
    numero_operacion: {
        type: String,
        validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
        minLength:[1,"Al menos debe contener un caracter"],
        maxlength: [150, "El maximo de caracteres es 150!"],
  
    },
    codigo_producto: {
        type: String,
        validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
        minLength:[1,"Al menos debe contener un caracter"],
        maxlength: [150, "El maximo de caracteres es 150!"],

    },
    materia_prima0: [{
      codigo:{
        type: String,
        validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
        maxlength: [150, "El maximo de caracteres es 150!"],
   
      },
      nombre_material:{
        type: String,
        validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
        maxlength: [150, "El maximo de caracteres es 150!"],
 
      }  
    }],
    materia_prima1: [{
        codigo:{
          type: String,
          validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },

          maxlength: [150, "El maximo de caracteres es 150!"],

        },
        nombre_material:{
          type: String,
          validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
 
          maxlength: [150, "El maximo de caracteres es 150!"],

        }  
      }],
    materia_prima2: [{
        codigo:{
          type: String,
          validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
          maxlength: [150, "El maximo de caracteres es 150!"]
        },
        nombre_material:{
          type: String,
          validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
          maxlength: [150, "El maximo de caracteres es 150!"]
        }  
      }],
    materia_prima3: [{
        codigo:{
          type: String,
          validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
          maxlength: [150, "El maximo de caracteres es 150!"]
        },
        nombre_material:{
          type: String,
          validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
          minLength:[1,"Al menos debe contener un caracter"],
          maxlength: [150, "El maximo de caracteres es 150!"],
    
        }  
      }],
    materia_prima4: [{
        codigo:{
          type: String,
          validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
          minLength:[1,"Al menos debe contener un caracter"],
          maxlength: [150, "El maximo de caracteres es 150!"],
          
        },
        nombre_material:{
          type: String,
          validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
          minLength:[1,"Al menos debe contener un caracter"],
          maxlength: [150, "El maximo de caracteres es 150!"],
          
        }  
      }],
    materia_prima5: [{
        codigo:{
          type: String,
          validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
          minLength:[1,"Al menos debe contener un caracter"],
          maxlength: [150, "El maximo de caracteres es 150!"],
          
        },
        nombre_material:{
          type: String,
          validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
          minLength:[1,"Al menos debe contener un caracter"],
          maxlength: [150, "El maximo de caracteres es 150!"],
         
        }  
      }],
    numero_inyectora: {
        type: String,
        validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
        minLength:[1,"Al menos debe contener un caracter"],
        maxlength: [150, "El maximo de caracteres es 150!"]
    },
    numero_molde: {
        type: String,
        validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
        minLength:[1,"Al menos debe contener un caracter"],
        maxlength: [150, "El maximo de caracteres es 150!"]
    },
    tiempo_ciclo: {
        type: String,
        validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
        minLength:[1,"Al menos debe contener un caracter"],
        maxlength: [150, "El maximo de caracteres es 150!"]
    },
    aditivo: {
        type: String,
        validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
        minLength:[1,"Al menos debe contener un caracter"],
        maxlength: [150, "El maximo de caracteres es 150!"],
        
    },
    registrado_por: {
        type: String,
        validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
        minLength:[1,"Al menos debe contener un caracter"],
        maxlength: [150, "El maximo de caracteres es 150!"]
    },

//Dispositivos utilizados
    pico_de_inyectora: [{
        estandar: {
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"],
            maxlength: [150, "El maximo de caracteres es 150!"]
        },
        estandar_con_filtro: {
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"],
            maxlength: [150, "El maximo de caracteres es 150!"]
        },
        diametro_boquilla: {
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"],
            maxlength: [150, "El maximo de caracteres es 150!"]
        }
    }],
    microgel_0: {
        type: String,
        validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
        minLength:[1,"Al menos debe contener un caracter"],
        maxlength: [150, "El maximo de caracteres es 150!"]
    },
    microgel_1: {
        type: String,
        validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
        minLength:[1,"Al menos debe contener un caracter"],
        maxlength: [150, "El maximo de caracteres es 150!"]
    },
    regoplas: {
        type: String,
        validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
        minLength:[1,"Al menos debe contener un caracter"],
        maxlength: [150, "El maximo de caracteres es 150!"]
    },
    robot: {
        type: String,
        validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
        minLength:[1,"Al menos debe contener un caracter"],
        maxlength: [150, "El maximo de caracteres es 150!"]
    },
    otro: {
        type: String,
        validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
        minLength:[1,"Al menos debe contener un caracter"],
        maxlength: [150, "El maximo de caracteres es 150!"]
    },

//Temperaturas del proceso
    temp_plato_fijo: {
        type: String,
        validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
        minLength:[1,"Al menos debe contener un caracter"],
        maxlength: [150, "El maximo de caracteres es 150!"]
    },
    temp_plato_movil: {
        type: String,
        validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
        minLength:[1,"Al menos debe contener un caracter"],
        maxlength: [150, "El maximo de caracteres es 150!"]
    },
    temp_masa_fundida: {
        type: String,
        validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
        minLength:[1,"Al menos debe contener un caracter"],
        maxlength: [150, "El maximo de caracteres es 150!"]
    },
    tablero_colada_caliente: [{
        controlador_1: {
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"],
            maxlength: [150, "El maximo de caracteres es 150!"]
        },
        controlador_2: {
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"],
            maxlength: [150, "El maximo de caracteres es 150!"]
        },
        controlador_3: {
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"],
            maxlength: [150, "El maximo de caracteres es 150!"]
        },
        controlador_4: {
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"],
            maxlength: [150, "El maximo de caracteres es 150!"]
        },
        controlador_5: {
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"],
            maxlength: [150, "El maximo de caracteres es 150!"]
        },
        controlador_6: {
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"],
            maxlength: [150, "El maximo de caracteres es 150!"]
        },
        controlador_7: {
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"],
            maxlength: [150, "El maximo de caracteres es 150!"]
        },
        controlador_8: {
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"],
            maxlength: [150, "El maximo de caracteres es 150!"]
        },
        controlador_9: {
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"],
            maxlength: [150, "El maximo de caracteres es 150!"]
        },
        controlador_10: {
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"],
            maxlength: [150, "El maximo de caracteres es 150!"]
        },
        controlador_11: {
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"],
            maxlength: [150, "El maximo de caracteres es 150!"]
        },
        controlador_12: {
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"],
            maxlength: [150, "El maximo de caracteres es 150!"]
        },
        controlador_13: {
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"],
            maxlength: [150, "El maximo de caracteres es 150!"]
        },
        controlador_14: {
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"],
            maxlength: [150, "El maximo de caracteres es 150!"]
        },
        controlador_15: {
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"],
            maxlength: [150, "El maximo de caracteres es 150!"]
        },
        controlador_16: {
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"],
            maxlength: [150, "El maximo de caracteres es 150!"]
        },
        controlador_17: {
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"],
            maxlength: [150, "El maximo de caracteres es 150!"]
        },
        controlador_18: {
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"],
            maxlength: [150, "El maximo de caracteres es 150!"]
        },
        controlador_19: {
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"],
            maxlength: [150, "El maximo de caracteres es 150!"]
        },
        controlador_20: {
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"],
            maxlength: [150, "El maximo de caracteres es 150!"]
        },
        controlador_21: {
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"],
            maxlength: [150, "El maximo de caracteres es 150!"]
        },
        controlador_22: {
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"],
            maxlength: [150, "El maximo de caracteres es 150!"]
        },
        controlador_23: {
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"],
            maxlength: [150, "El maximo de caracteres es 150!"]
        },
        controlador_24: {
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"],
            maxlength: [150, "El maximo de caracteres es 150!"]
        },
        controlador_25: {
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"],
            maxlength: [150, "El maximo de caracteres es 150!"]
        },
        controlador_26: {
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"],
            maxlength: [150, "El maximo de caracteres es 150!"]
        },
        controlador_27: {
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"],
            maxlength: [150, "El maximo de caracteres es 150!"]
        },
        controlador_28: {
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"],
            maxlength: [150, "El maximo de caracteres es 150!"]
        },
        controlador_29: {
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"],
            maxlength: [150, "El maximo de caracteres es 150!"]
        },
        controlador_30: {
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"],
            maxlength: [150, "El maximo de caracteres es 150!"]
        },
        controlador_31: {
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"],
            maxlength: [150, "El maximo de caracteres es 150!"]
        },
        controlador_32: {
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"],
            maxlength: [150, "El maximo de caracteres es 150!"]
        },
        controlador_33: {
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"],
            maxlength: [150, "El maximo de caracteres es 150!"]
        },
        controlador_34: {
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"],
            maxlength: [150, "El maximo de caracteres es 150!"]
        },
        controlador_35: {
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"],
            maxlength: [150, "El maximo de caracteres es 150!"]
        },
        controlador_36: {
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"],
            maxlength: [150, "El maximo de caracteres es 150!"]
        },
        controlador_37: {
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"],
            maxlength: [150, "El maximo de caracteres es 150!"]
        },
        controlador_38: {
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"],
            maxlength: [150, "El maximo de caracteres es 150!"]
        },
        controlador_39: {
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"],
            maxlength: [150, "El maximo de caracteres es 150!"]
        },
        controlador_40: {
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"],
            maxlength: [150, "El maximo de caracteres es 150!"]
        },
        controlador_41: {
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"],
            maxlength: [150, "El maximo de caracteres es 150!"]
        },
        controlador_42: {
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"],
            maxlength: [150, "El maximo de caracteres es 150!"]
        },
        controlador_43: {
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"],
            maxlength: [150, "El maximo de caracteres es 150!"]
        },
        controlador_44: {
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"],
            maxlength: [150, "El maximo de caracteres es 150!"]
        },
        controlador_45: {
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"],
            maxlength: [150, "El maximo de caracteres es 150!"]
        },
        controlador_46: {
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"],
            maxlength: [150, "El maximo de caracteres es 150!"]
        },
        controlador_47: {
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"],
            maxlength: [150, "El maximo de caracteres es 150!"]
        },
        controlador_48: {
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"],
            maxlength: [150, "El maximo de caracteres es 150!"]
        },
        controlador_49: {
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"],
            maxlength: [150, "El maximo de caracteres es 150!"]
        },
        controlador_50: {
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"],
            maxlength: [150, "El maximo de caracteres es 150!"]
        },
        controlador_51: {
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"],
            maxlength: [150, "El maximo de caracteres es 150!"]
        },
        controlador_52: {
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"],
            maxlength: [150, "El maximo de caracteres es 150!"]
        },
        controlador_53: {
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"],
            maxlength: [150, "El maximo de caracteres es 150!"]
        },
        controlador_54: {
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"],
            maxlength: [150, "El maximo de caracteres es 150!"]
        },
        controlador_55: {
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"],
            maxlength: [150, "El maximo de caracteres es 150!"]
        },
        controlador_56: {
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"],
            maxlength: [150, "El maximo de caracteres es 150!"]
        },
        controlador_57: {
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"],
            maxlength: [150, "El maximo de caracteres es 150!"]
        },
        controlador_58: {
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"],
            maxlength: [150, "El maximo de caracteres es 150!"]
        },
        controlador_59: {
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"],
            maxlength: [150, "El maximo de caracteres es 150!"]
        },
        controlador_60: {
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"],
            maxlength: [150, "El maximo de caracteres es 150!"]
        },
    }],
    temp_horno: [{
        zona_1: {
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"],
            maxlength: [150, "El maximo de caracteres es 150!"]
        },
        zona_2: {
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"],
            maxlength: [150, "El maximo de caracteres es 150!"]
        },
        zona_3: {
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"],
            maxlength: [150, "El maximo de caracteres es 150!"]
        },
        zona_4: {
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"],
            maxlength: [150, "El maximo de caracteres es 150!"]
        },
        zona_5: {
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"],
            maxlength: [150, "El maximo de caracteres es 150!"]
        },
        zona_6: {
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"],
            maxlength: [150, "El maximo de caracteres es 150!"]
        },
        zona_7: {
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"],
            maxlength: [150, "El maximo de caracteres es 150!"]
        },
        zona_8: {
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"],
            maxlength: [150, "El maximo de caracteres es 150!"]
        }
    }],

    //Parametros del proceso
    tpo_ciclo_optimo: {
        type: String,
        validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
        minLength:[1,"Al menos debe contener un caracter"],
        maxlength: [150, "El maximo de caracteres es 150!"]
    },
    tpo_ciclo_actual: {
        type: String,
        validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
        minLength:[1,"Al menos debe contener un caracter"],
        maxlength: [150, "El maximo de caracteres es 150!"]
    },
    tpo_inyeccion: {
        type: String,
        validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
        minLength:[1,"Al menos debe contener un caracter"],
        maxlength: [150, "El maximo de caracteres es 150!"]
    },
    tpo_extrusor: {
        type: String,
        validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
        minLength:[1,"Al menos debe contener un caracter"],
        maxlength: [150, "El maximo de caracteres es 150!"]
    },
    tpo_enfriamiento: {
        type: String,
        validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
        minLength:[1,"Al menos debe contener un caracter"],
        maxlength: [150, "El maximo de caracteres es 150!"]
    },
    cojin: {
        type: String,
        validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
        minLength:[1,"Al menos debe contener un caracter"],
        maxlength: [150, "El maximo de caracteres es 150!"]
    },
    pico_presion: {
        type: String,
        validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
        minLength:[1,"Al menos debe contener un caracter"],
        maxlength: [150, "El maximo de caracteres es 150!"]
    },
    punto_transferencia: {
        type: String,
        validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
        minLength:[1,"Al menos debe contener un caracter"],
        maxlength: [150, "El maximo de caracteres es 150!"]
    },
    fuerza_cierre: {
        type: String,
        validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
        minLength:[1,"Al menos debe contener un caracter"],
        maxlength: [150, "El maximo de caracteres es 150!"]
    },
    tamano_dosific: {
        type: String,
        validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
        minLength:[1,"Al menos debe contener un caracter"],
        maxlength: [150, "El maximo de caracteres es 150!"]
    },
    contrapresion: {
        type: String,
        validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
        minLength:[1,"Al menos debe contener un caracter"],
        maxlength: [150, "El maximo de caracteres es 150!"]
    },
    presion_empaque: {
        type: String,
        validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
        minLength:[1,"Al menos debe contener un caracter"],
        maxlength: [150, "El maximo de caracteres es 150!"]
    },
    tpo_retencion: {
        type: String,
        validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
        minLength:[1,"Al menos debe contener un caracter"],
        maxlength: [150, "El maximo de caracteres es 150!"]
    },
    tipo_expulsion: {
        type: String,
        validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
        minLength:[1,"Al menos debe contener un caracter"],
        maxlength: [150, "El maximo de caracteres es 150!"]
    },

//Cavidades habilitadas en produccion
    cavidades: [{
        cavidad_1: {
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"],
            maxlength: [150, "El maximo de caracteres es 150!"],
        },
        cavidad_2: {
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"],
            maxlength: [150, "El maximo de caracteres es 150!"],
        },
        cavidad_3: {
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"],
            maxlength: [150, "El maximo de caracteres es 150!"],
        },
        cavidad_4: {
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"],
            maxlength: [150, "El maximo de caracteres es 150!"],
        },
        cavidad_5: { 
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"], 
            maxlength: [150, "El maximo de caracteres es 150!"], },
        cavidad_6: { 
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"], 
            maxlength: [150, "El maximo de caracteres es 150!"], },
        cavidad_7: { 
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"], 
            maxlength: [150, "El maximo de caracteres es 150!"], },
        cavidad_8: { 
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"], 
            maxlength: [150, "El maximo de caracteres es 150!"], },
        cavidad_9: { 
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"], 
            maxlength: [150, "El maximo de caracteres es 150!"], },
        cavidad_10: { 
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"], 
            maxlength: [150, "El maximo de caracteres es 150!"], },
        cavidad_11: { 
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"], 
            maxlength: [150, "El maximo de caracteres es 150!"], },
        cavidad_12: { 
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"], 
            maxlength: [150, "El maximo de caracteres es 150!"], },
        cavidad_13: { 
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"], 
            maxlength: [150, "El maximo de caracteres es 150!"], },
        cavidad_14: { 
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"], 
            maxlength: [150, "El maximo de caracteres es 150!"], },
        cavidad_15: { 
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"], 
            maxlength: [150, "El maximo de caracteres es 150!"], },
        cavidad_16: { 
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"], 
            maxlength: [150, "El maximo de caracteres es 150!"], },
        cavidad_17: { 
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"], 
            maxlength: [150, "El maximo de caracteres es 150!"], },
        cavidad_18: { 
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"], 
            maxlength: [150, "El maximo de caracteres es 150!"], },
        cavidad_19: { 
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"], 
            maxlength: [150, "El maximo de caracteres es 150!"], },
        cavidad_20: { 
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"], 
            maxlength: [150, "El maximo de caracteres es 150!"], },
        cavidad_21: { 
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"], 
            maxlength: [150, "El maximo de caracteres es 150!"], },
        cavidad_22: { 
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"], 
            maxlength: [150, "El maximo de caracteres es 150!"], },
        cavidad_23: { 
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"],
            maxlength: [150, "El maximo de caracteres es 150!"], },
        cavidad_24: { 
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"], 
            maxlength: [150, "El maximo de caracteres es 150!"], },
        cavidad_25: { 
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"], 
            maxlength: [150, "El maximo de caracteres es 150!"], },
        cavidad_26: { 
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"], 
            maxlength: [150, "El maximo de caracteres es 150!"], },
        cavidad_27: { 
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"], 
            maxlength: [150, "El maximo de caracteres es 150!"], },
        cavidad_28: { 
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"], 
            maxlength: [150, "El maximo de caracteres es 150!"], },
        cavidad_29: { 
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"], 
            maxlength: [150, "El maximo de caracteres es 150!"], },
        cavidad_30: { 
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"], 
            maxlength: [150, "El maximo de caracteres es 150!"], },
        cavidad_31: { 
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"], 
            maxlength: [150, "El maximo de caracteres es 150!"], },
        cavidad_32: { 
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"], 
            maxlength: [150, "El maximo de caracteres es 150!"], },
        cavidad_33: { 
            type: String,
            validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
            minLength:[1,"Al menos debe contener un caracter"], 
            maxlength: [150, "El maximo de caracteres es 150!"], }
         }],
    image: {
        type: String,
        validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
        minLength:[1,"Al menos debe contener un caracter"],
        maxlength: [150, "El maximo de caracteres es 150!"],
    },
    observaciones: {
        type: String,
        validate: {
            validator: prohibirComas,
            message: props => `${props.value} no debe contener comas!`
          },
        minLength:[1,"Al menos debe contener un caracter"],
        maxlength: [150, "El maximo de caracteres es 150!"]
    },
    url: {
      type: String,
      validate: {
          validator: prohibirComas,
          message: props => `${props.value} no debe contener comas!`
        },
      minLength:[1,"Al menos debe contener un caracter"],
      maxlength: [150, "El maximo de caracteres es 150!"]
  },

},
    {
        versionKey: false
    })
module.exports = mongoose.model('form', formModel)





