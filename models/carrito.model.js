const mongoose = require('mongoose')

const carritoSchema = mongoose.Schema({
    referencia:{
        type:mongoose.Schema.Types.ObjectId, ref:'creacionProducto',
        required:true
    },
    unidades:{
        type:Number,
        required:true
    },
    subtotal:{
        type:Number,
        required:true
    },
    total:{
        type:Number,
        required:true
    },
    metodo_de_pago:{
        enum:['Contraentrega','Transferencia','Nequi','Daviplata']
    },
    direccion:{
        type:String,
        required:true
    },
    telefono:{
        type:Number,
        required:true
    },
    estados_de_Entrega:{
        enum:['Empacado', 'En transito', 'En reparto', 'Entregado']
    }
})

const Carrito = mongoose.model('carrito', carritoSchema)
module.exports=Carrito

//referencia:SF610DV
//Unidades: 3
//Subtotal: 500000
//Total:500000
//Metodo de pago:Contraentrega
//Direccion: Cra 68 40 20 sur
//Telefono: 31766547890
//Estado de entrega: Empacado
