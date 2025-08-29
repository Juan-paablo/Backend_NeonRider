const creacionProducto = require("../models/creacion_productos.model");

exports.getCreateProduct = async (req, res) => {
    try {
        const data = await creacionProducto.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getOneCreateProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const producto = await creacionProducto.findById(id);
        if (!producto) {
            return res.status(404).json({ error: "Producto no encontrado" });
        }
        res.status(200).json(producto);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createProduct = async (req, res) => {
    try {
        const data = req.body;
        const newProduct = await creacionProducto.create(data);
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const producto = req.body;
        const updatedProduct = await creacionProducto.findByIdAndUpdate(id, producto, { new: true });
        if (!updatedProduct) {
            return res.status(404).json({ error: "Producto no encontrado" });
        }
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedProduct = await creacionProducto.findByIdAndDelete(id);
        if (!deletedProduct) {
            return res.status(404).json({ error: "Producto no encontrado" });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};