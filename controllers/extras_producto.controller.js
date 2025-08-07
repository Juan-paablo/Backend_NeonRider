const { extrasModel } = require("../models/extras_producto.model")

exports.getExtras = async (req, res) => {
    try {
        let data = await extrasModel.find()
        res.json(data)
    } catch (error) {
        res.json(error)
    }
}

exports.getOneExtras = async (req, res) => {
    try {
        let id = req.params.id
        let extrax = await extrasModel.findById(id)
        res.json(extras)
    } catch (error) {
        res.json(error)
    }
}

exports.createExtras = async (req, res) => {
    try {
        let body = req.body
        let newExtras = new extrasModel(body)
        let guardado = await newExtras.save()
        res.json(guardado)
    } catch (error) {
        res.json(error)
    }
}

exports.updateExtras = async (req, res) => {
    try {
        let id = req.params.id
        let data = req.body
        let busqueda = await extrasModel.findById(id)
        if (!busqueda) {
            return res.json({error: "Solicitud no encontrada"})
        } 
        let actualizado = await extrasModel.updateOne({_id:id},{$set:data})
        res.json(actualizado)
    } catch (error) {
        res.json(error)
    }
}

exports.deleteExtras = async (req, res) => {
    try {
        let id = req.params.id
        let borrar = await extrasModel.findById(id)
        if (!borrar) {
            return res.json({error: "Solicitud no encontrada"})
        } 
        let eliminado = await extrasModel.deleteOne({_id:id})
    } catch (error) {
        res.json(error)
    }
}