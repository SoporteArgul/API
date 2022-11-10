const mongoose=require('mongoose')

const ItemScheme= new mongoose.Schema({
    numero_de_operacion:{
        type:String
    },
    codigo_de_producto:{
        type:String
    },
    numero_de_inyectora:{
        type:String
    },
    numero_de_molde:{
        type:String
    },
    tiempo_de_ciclo:{
        type:String
    },
    materia_prima:{
        type:String
    }

},
{
    timestamps:true,
    versionKey:false
})

module.exports= mongoose.model('items',ItemScheme)