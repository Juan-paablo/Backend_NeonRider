const express = require('express')
const { getCreateProduct, getOneCreateProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/creacion_productos.controller')


const router = express.Router()

router.post('/product', createProduct )
router.get('/products', getCreateProduct)
router.get('/product/:id', getOneCreateProduct)
router.put('/product/:id', updateProduct)
router.delete('/product/:id', deleteProduct)


module.exports=router
