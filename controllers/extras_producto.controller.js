const { extrasModel } = require("../models/extras_producto.model");

exports.getExtras = async (req, res) => {
    try {
        const data = await extrasModel.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getOneExtras = async (req, res) => {
    try {
        const id = req.params.id;
        const extras = await extrasModel.findById(id);
        if (!extras) {
            return res.status(404).json({ error: "Extra no encontrado" });
        }
        res.status(200).json(extras);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createExtras = async (req, res) => {
    try {
        const body = req.body;
        const newExtras = new extrasModel(body);
        const guardado = await newExtras.save();
        res.status(201).json(guardado);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateExtras = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const busqueda = await extrasModel.findById(id);
        if (!busqueda) {
            return res.status(404).json({ error: "Extra no encontrado" });
        }
        await extrasModel.updateOne({ _id: id }, { $set: data });
        const actualizado = await extrasModel.findById(id);
        res.status(200).json(actualizado);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteExtras = async (req, res) => {
    try {
        const id = req.params.id;
        const borrar = await extrasModel.findById(id);
        if (!borrar) {
            return res.status(404).json({ error: "Extra no encontrado" });
        }
        await extrasModel.deleteOne({ _id: id });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};