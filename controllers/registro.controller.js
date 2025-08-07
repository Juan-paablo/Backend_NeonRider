const mongoose = require('mongoose');
const registroModel = require('../models/registro.model');

exports.getClients = async (req, res) => {
  try {
    const clientes = await registroModel.find();
    res.status(200).json(clientes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.registerClient = async (req, res) => {
  try {
    const data = req.body;
    const nuevoCliente = new registroModel(data);
    const clienteGuardado = await nuevoCliente.save();
    res.status(201).json(clienteGuardado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

