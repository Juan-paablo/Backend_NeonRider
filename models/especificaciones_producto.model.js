const mongoose = require('mongoose')

const especificaciones_productoSchema = mongoose.Schema({
    tipo: {
        type: String,
        required: true,
        maxlength: 150
    },
    norma: {
        type: String,
        required: true,
        maxlength: 150
    },
    coraza: {
        type: String,
        required: true,
        maxlength: 150
    },
    interior: {
        type: String,
        required: true,
        maxlength: 150
    },
    acolchado: {
        type: String,
        required: true,
        maxlength: 150
    },
    antiempanante :{
        type: String,
        required: true,
        maxlength: 150
    },
    pinlock : {
        type: String,
        required: true,
        maxlength: 150
    },
    sisRetencion: {
        type: String,
        required: true,
        maxlength: 150
    },
    peso : { 
        type: String,
        required: true,
        maxlength: 150
    },
    ventilacion : {
        type: String,
        required: true,
        maxlength: 150
    },
    material : {
        type: String,
        required: true,
        maxlength: 150
    },
    dobleVisor : {
        type: String,
        required: true,
        maxlength: 150
    },
    prepIntercom : {
        type: String,
        required: true,
        maxlength: 150
    }
},{
    timestamps: true,
    versionkey: false
})

exports.especificacionesModel = mongoose.model('especificacione', especificaciones_productoSchema)

/*
{
    "tipo" : "Integral",
    "norma" : "ECE R22-06",
    "coraza" : "1 TAMAÑO DE CORAZA",
    "interior" : "DESMONTABLE Y LAVABLE",
    "acolchado" : "Diseñado con materiales textiles y espuma que garantizan su comodidad",
    "antiempanante" : "PREPARADO PARA PINLOCK",
    "pinlock" : "SÍ",
    "sisRetencion" : "CIERRE DOBLE D",
    "peso" : "1,550 g ± 50",
    "ventilacion" : "CÁMARAS FRONTALES SUPERIORES E INFERIORES OPEN/CLOSE Y CÁMARA TRASERA PARA LA SALIDA DEL AIRE.",
    "material" : "TERMOPLÁSTICO DE ALTA RESISTENCIA (ABS)",
    "dobleVisor" : "SI",
    "prepIntercom" : "PREPARADO PARA INTERCOMUNICADOR"
}
*/