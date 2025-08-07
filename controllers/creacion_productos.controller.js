const creacionProducto = require("../models/creacion_productos.model")


exports.getCreateProduct = async()=>{
    try {
        let data = await creacionProducto.find()

    } catch (error) {
        res.json(error)
    }
}
exports.getOneCreateProduct = async(req, res)=>{
    try {
        let id = req.params.id
        let producto = await creacionProducto.findById(id)
        res.json(producto)
    } catch (error) {
        res.json(error)
    }
}
exports.createProduct = async(req, res)=>{
    try {
        let data = req.body
        console.log(req.body);
        let newProduct = await creacionProducto.create(data)
        res.json(newProduct)
    } catch (error) {
        res.json(error)
    }
}
exports.updateProduct = async (req, res) => {
    let id = req.params.id
    try {
        const producto = req.body
        const newProduct = await creacionProducto.findByIdAndUpdate(id, producto)
        res.json(newProduct)
    } catch (error) {
        res.json(error)
    }
}
exports.deleteProduct =async(req, res)=>{
    try {
        const id = req.params.id
        const data = await creacionProducto.findOneAndDelete(id)
        res.json(data)
    } catch (error) {
        res.json(error)
    }
}

