const { userModel } = require("../models/user.models")
const jwt = require('jsonwebtoken')

exports.login = async (req, res) =>{
    try {
        let data = req.body
        let user = await userModel.findOne({correo:data.correo})
        if (user) {
            if (data.password == user.password) {
                let token = jwt.sign({correo:user.correo , nombre:user._id}, process.env.SECRET_JWT_KEY, {expiresIn:"1d"})
                res.status(200).json(token)
            } else {
                return res.status(401).json({error:"Contraseña invalida"})
            }
        } else{
            return res.status(401).json({error:"Correo invalido"})
        }

    } catch (error) {
        res.status(500).json(error)
    }
}