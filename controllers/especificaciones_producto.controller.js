const { especificacionesModel } = require("../models/especificaciones_producto.model");

exports.getEspecificaciones = async (req, res) => {
    try {
        const data = await especificacionesModel.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getOneEspecificaciones = async (req, res) => {
    try {
        const id = req.params.id;
        const especificaciones = await especificacionesModel.findById(id);
        if (!especificaciones) {
            return res.status(404).json({ error: "Especificación no encontrada" });
        }
        res.status(200).json(especificaciones);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createEspecificaciones = async (req, res) => {
    try {
        const body = req.body;
        const newEspecificaciones = new especificacionesModel(body);
        const guardado = await newEspecificaciones.save();
        res.status(201).json(guardado);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateEspecificaciones = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const busqueda = await especificacionesModel.findById(id);
        if (!busqueda) {
            return res.status(404).json({ error: "Especificación no encontrada" });
        }
        await especificacionesModel.updateOne({ _id: id }, { $set: data });
        const actualizado = await especificacionesModel.findById(id);
        res.status(200).json(actualizado);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteEspecificaciones = async (req, res) => {
    try {
        const id = req.params.id;
        const borrar = await especificacionesModel.findById(id);
        if (!borrar) {
            return res.status(404).json({ error: "Especificación no encontrada" });
        }
        await especificacionesModel.deleteOne({ _id: id });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};