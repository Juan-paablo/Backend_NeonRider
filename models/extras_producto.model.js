const mongoose = require('mongoose')

const extras_productoSchema = mongoose.Schema({
    colorVisor: {
        type: String,
        required: true,
        maxlength: 150
    },
    acabado: {
        type: String,
        required: true,
        maxlength: 150
    },
    visorInterno: {
        type: String,
        required: true,
        maxlength: 150
    },
    colorSpoiler: {
        type: String,
        required: true,
        maxlength: 150
    },
    colorTapizado: {
        type: String,
        required: true,
        maxlength: 150
    },
    colorCamaras :{
        type: String,
        required: true,
        maxlength: 150
    }
},{
    timestamps: true,
    versionkey: false
})

exports.extrasModel = mongoose.model('extra', extras_productoSchema)

/*
{
    "colorVisor" : "Iridium Dorado Humo Claro",
    "acabado" : "Mate",
    "visorInterno" : "Humo",
    "colorSpoiler" : "Naranja",
    "colorTapizado" : "Gris / Rojo",
    "colorCamaras" : "Azul"
}
*/