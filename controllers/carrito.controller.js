const Carrito = require('../models/carrito.model');

// Crear carrito
const createCarrito = async (req, res) => {
  try {
    
    const { referencia, unidades, subtotal, total, metodo_de_pago, direccion, telefono } = req.body;

    if (!referencia || !unidades || !subtotal || !total || !metodo_de_pago || !direccion || !telefono) {
      return res.status(400).json({ msg: 'Faltan campos obligatorios en el carrito' });
    }

    const carrito = new Carrito(req.body);
    await carrito.save();  
    res.status(201).json(carrito);
  } catch (error) { 
    res.status(400).json({ msg: 'Error creando carrito', error });
  }
};

// Obtener todos los carritos
const getCarritos = async (req, res) => {
  try {
    const carritos = await Carrito.find().populate('referencia'); // trae datos del producto
    res.json(carritos);
  } catch (error) {
    res.status(500).json({ msg: 'Error obteniendo carritos', error });
  }
};

// Obtener un carrito por ID
const getOneCarrito = async (req, res) => {
  try {
    const carrito = await Carrito.findById(req.params.id).populate('referencia');
    if (!carrito) return res.status(404).json({ msg: 'Carrito no encontrado' });
    res.json(carrito);
  } catch (error) {
    res.status(500).json({ msg: 'Error obteniendo carrito', error });
  }
};

// Actualizar carrito
const updateCarrito = async (req, res) => {
  try {
    const carrito = await Carrito.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(carrito);
  } catch (error) {
    res.status(500).json({ msg: 'Error actualizando carrito', error });
  } 
};

// Eliminar carrito
const deleteCarrito = async (req, res) => {
  try {
    await Carrito.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Carrito eliminado' });
  } catch (error) {
    res.status(500).json({ msg: 'Error eliminando carrito', error });
  }
};

module.exports = {
  createCarrito,
  getCarritos,
  getOneCarrito,
  updateCarrito,
  deleteCarrito
};
