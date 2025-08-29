const { cambiosModel } = require("../models/cambios.model");

exports.getCambios = async (req, res) => {
    try {
        const data = await cambiosModel.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getOneCambios = async (req, res) => {
    try {
        const id = req.params.id;
        const cambios = await cambiosModel.findById(id);
        if (!cambios) {
            return res.status(404).json({ error: "Solicitud no encontrada" });
        }
        res.status(200).json(cambios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createCambios = async (req, res) => {
    try {
        const body = req.body;
        const newCambios = new cambiosModel(body);
        const guardado = await newCambios.save();
        res.status(201).json(guardado);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateCambios = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const busqueda = await cambiosModel.findById(id);
        if (!busqueda) {
            return res.status(404).json({ error: "Solicitud no encontrada" });
        }
        await cambiosModel.updateOne({ _id: id }, { $set: data });
        const actualizado = await cambiosModel.findById(id);
        res.status(200).json(actualizado);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteCambios = async (req, res) => {
    try {
        const id = req.params.id;
        const borrar = await cambiosModel.findById(id);
        if (!borrar) {
            return res.status(404).json({ error: "Solicitud no encontrada" });
        }
        await cambiosModel.deleteOne({ _id: id });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};