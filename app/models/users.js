const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');

const UserScheme = new mongoose.Schema({
    name: {
        type: String,
        required:[true,'El nombre es requerido'],
        maxLength: 50
    },
    legajo:{
        type: String,
        required:[true,'El legajo es requerido'],
        maxLength: 5
    },
    email: {
        type: String,
        unique:true,
        required:[true],
        maxLength: 100
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
        default: 'Tecnicos',
        required: [true]
    },
    hora: {
        type: String
    }
    },
    {
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