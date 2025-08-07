const { especificacionesModel } = require("../models/especificaciones_producto.model")

exports.getEspecificaciones = async (req, res) => {
    try {
        let data = await especificacionesModel.find()
        res.json(data)
    } catch (error) {
        res.json(error)
    }
}

exports.getOneEspecificaciones = async (req, res) => {
    try {
        let id = req.params.id
        let especificaciones = await especificacionesModel.findById(id)
        res.json(especificaciones)
    } catch (error) {
        res.json(error)
    }
}

exports.createEspecificaciones = async (req, res) => {
    try {
        let body = req.body
        let newEspecificaciones = new especificacionesModel(body)
        let guardado = await newEspecificaciones.save()
        res.json(guardado)
    } catch (error) {
        res.json(error)
    }
}

exports.updateEspecificaciones = async (req, res) => {
    try {
        let id = req.params.id
        let data = req.body
        let busqueda = await especificacionesModel.findById(id)
        if (!busqueda) {
            return res.json({error: "Solicitud no encontrada"})
        } 
        let actualizado = await especificacionesModel.updateOne({_id:id},{$set:data})
        res.json(actualizado)
    } catch (error) {
        res.json(error)
    }
}

exports.deleteEspecificaciones = async (req, res) => {
    try {
        let id = req.params.id
        let borrar = await especificacionesModel.findById(id)
        if (!borrar) {
            return res.json({error: "Solicitud no encontrada"})
        } 
        let eliminado = await especificacionesModel.deleteOne({_id:id})
    } catch (error) {
        res.json(error)
    }
}