const mongoose = require('mongoose')
const creacionProductoSchema = mongoose.Schema({
    Imagen:{
        type:String,
        required:true
    },
    Descripcion:{
        type:String,
        required:true
    },
    referencia:{
        type:String,
        required:true
    },
    Marca:{
        type:String,
        required:true
    },
    Talla:{
        enum:["XS","S","M","L","XL"]
    },
    Tipo:{
        enum:["integrales", "abatibles", "cross", "abiertos", "multipropositos"]
    },
    Color:{
        type:String,
        required:true
    },
    Precio:{
        type:Number,
        required:true
    }
})

const creacionProducto = mongoose.model('creacionProducto', creacionProductoSchema)
module.exports = creacionProducto

//Imagen:
//Descripcion: Casco SHAFT PRO SHPRO 610 DV EVO Bluer Planet
//referencia:SF610DV
//Marca: SHAFT
//Talla: S, L, XL
//Tipo:integrales
//Color:Azul, Naranja, Morado
//Precio:586000
