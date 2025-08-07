const mongoose = require ('mongoose')
const userSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true,
        minlenght: 3,
        maxlenght: 20,       
    },
    apellido:{
        type: String,
        required: true,
        minlenght: 3,
        maxlenght: 20,
    },
    correo:{
        type: String,
        required: true,
        minlenght: 5,
        maxlenght: 30,
    },
    password:{
        type: String,
        required: true,
        minlenght: 4,
        maxlenght: 20
    }
},{
    timestamps:true,
    versionKey:false
})

exports.userModel = mongoose.model('user', userSchema)

/*
{
"nombre":"Carlos",
"apellido":"Martinez"
"correo": carlos@gmail.com
"contraseña": 
}
*/