const mongoose = require('mongoose')

const cambiosSchema = mongoose.Schema({
    documentoIdentificacion: {
        type: Number,
        required: true,
        length: 10
    },
    userId: {
        type:mongoose.Schema.Types.ObjectId, ref:'user',
    },
    compraId:{
        type: String,
        required: true,
        default: "Seleccione la compra correspondiente a su solicitud."
    },
    motivo: {
        type: String,
        required: true,
        default: "Seleccione el motivo de su solicitud."
    },
    asunto: {
        type: String,
        required: true,
        maxlength: 50
    },
    comentario: {
        type: String,
        required: true,
        maxlength: 200
    }
},{
    timestamps: true,
    versionkey: false
})

exports.cambiosModel = mongoose.model('cambio', cambiosSchema)

/*
{
    "documentoIdentificacion" : 1015464662
    "userId" : 
    "compraId" :  ""
    "motivo" :  "Garantía"
    "asunto" : "Solicitud de garantía por defecto en casco"
    "comentario" : "El casco presentó una grieta en la parte trasera sin haber recibido impacto. Solicito revisión y reposición conforme a la garantía vigente."
}
*/