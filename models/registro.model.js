const mongoose = require('mongoose');

const registroSchema = mongoose.Schema({

  nombre: { 
    type: String, 
    required: true 
},
  apellido: { 
    type: String, 
    required: true
},
  correo: { 
    type: String, 
    required: true, 
    unique: true 
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

const registroModel = mongoose.model('registro', registroSchema);
module.exports = registroModel;

// {
//   "nombre":""
//   "apellido":""
//   "correo": ""
//   "password": ""
// }