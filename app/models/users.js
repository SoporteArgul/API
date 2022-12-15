const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');

let rolesValidos = {
    values: ["ADMIN", "USER"],
    message: '{VALUE} no es un role válido'
}

const UserScheme = new mongoose.Schema({
    name: {
        type: String,
        required:[true,'El nombre es requerido']
    },
    age: {
        type: Number,
        required:[true]
    },
    email: {
        type: String,
        unique:true,
        required:[true]
    },
    password: {
        type: String,
        required:[true]
    },
    status: {
        type: String, 
        enum: ['Pending', 'Active'],
        default: 'Pending'
    },
    confirmationCode: { 
        type: String, 
        unique: true 
    },
    role: {
        type: String,
        default: 'USER',
        required: [true]
    }
    },
    {
        timestamps: true,
        versionKey: false
    })

UserScheme.methods.toJSON = function() {
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;
    return userObject;
    }

UserScheme.plugin(uniqueValidator, {
    message: '{PATH} debe de ser único'
})

module.exports = mongoose.model('users', UserScheme)