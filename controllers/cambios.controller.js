const { cambiosModel } = require("../models/cambios.model")


exports.getCambios = async (req, res) => {
    try {
        let data = await cambiosModel.find()
        res.json(data)
    } catch (error) {
        res.json(error)
    }
}

exports.getOneCambios = async (req, res) => {
    try {
        let id = req.params.id
        let cambios = await cambiosModel.findById(id)
        res.json(cambios)
    } catch (error) {
        res.json(error)
    }
}

exports.createCambios = async (req, res) => {
    try {
        let body = req.body
        let newCambios = new cambiosModel(body)
        let guardado = await newCambios.save()
        res.json(guardado)
    } catch (error) {
        res.json(error)
    }
}

exports.updateCambios = async (req, res) => {
    try {
        let id = req.params.id
        let data = req.body
        let busqueda = await cambiosModel.findById(id)
        if (!busqueda) {
            return res.json({error: "Solicitud no encontrada"})
        } 
        let actualizado = await cambiosModel.updateOne({_id:id},{$set:data})
        res.json(actualizado)
    } catch (error) {
        res.json(error)
    }
}

exports.deleteCambios = async (req, res) => {
    try {
        let id = req.params.id
        let borrar = await cambiosModel.findById(id)
        if (!borrar) {
            return res.json({error: "Solicitud no encontrada"})
        } 
        let eliminado = await cambiosModel.deleteOne({_id:id})
    } catch (error) {
        res.json(error)
    }
}