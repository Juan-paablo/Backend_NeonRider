const mongoose = require('mongoose')

const carritoSchema = mongoose.Schema({
  referencia:{
    // antes: type:mongoose.Schema.Types.ObjectId, ref:'creacionProducto',
    type: String,                 // ✅ aceptar el nombre del producto por ahora
    required:true
  },
  unidades:{ type:Number, required:true },
  subtotal:{ type:Number, required:true },
  total:{ type:Number, required:true },
  metodo_de_pago:{
    type:String,
    enum:['Contraentrega','Transferencia','Nequi','Daviplata'],
    required:true
  },
  direccion:{ type:String, required:true },
  telefono:{ type:Number, required:true },
  estados_de_Entrega:{
    type:String,
    enum:['Empacado', 'En transito', 'En reparto', 'Entregado'],
    default:'Empacado'
  }
})

const Carrito = mongoose.model('carrito', carritoSchema)
module.exports = Carrito
