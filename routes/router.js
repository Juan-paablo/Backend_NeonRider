const express = require('express')
const { getCambios, getOneCambios, createCambios, updateCambios, deleteCambios } = require('../controllers/cambios.controller')
const { getEspecificaciones, getOneEspecificaciones, createEspecificaciones, updateEspecificaciones, deleteEspecificaciones } = require('../controllers/especificaciones_producto.controller')
const { getExtras, getOneExtras, createExtras, updateExtras, deleteExtras } = require('../controllers/extras_producto.controller')
const { getCreateProduct, getOneCreateProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/creacion_productos.controller')
const { getUsers, getOneUser, createUser, updateUser, deleteUser } = require('../controllers/user.controller')
const { login } = require('../controllers/login.controller')
const { middlewareJWT } = require('../middleware/jwt')
const { createCarrito, getCarritos, getOneCarrito, updateCarrito, deleteCarrito } = require('../controllers/carrito.controller')
const router = express.Router()

//------- RUTAS CAMBIOS Y DEVOLUCIONES ------> 
router.get('/cambios', getCambios)
router.get('/cambios/:id', getOneCambios)
router.post('/createCambios', createCambios)
router.put('/updateCambios/:id', updateCambios)
router.delete('/deleteCambios/:id', deleteCambios)

//------- RUTAS ESPECIFICACIONES PRODUCTO ------> 
router.get('/especificaciones', getEspecificaciones)
router.get('/especificaciones/:id', getOneEspecificaciones)
router.post('/createEspecificaciones', createEspecificaciones)
router.put('/updateEspecificaciones/:id', updateEspecificaciones)
router.delete('/deleteEspecificaciones/:id', deleteEspecificaciones)

//------- RUTAS EXTRAS PRODUCTO ------> 
router.get('/extras', getExtras)
router.get('/extras/:id', getOneExtras)
router.post('/createExtras', createExtras)
router.put('/updateExtras/:id', updateExtras)
router.delete('/deleteExtras/:id', deleteExtras)

//------- RUTAS PRODUCTO ------> 

router.post('/product', createProduct )
router.get('/products', getCreateProduct)
router.get('/product/:id', getOneCreateProduct)
router.put('/product/:id', updateProduct)
router.delete('/product/:id', deleteProduct)

// ------------------- Rutas de users

router.get('/users', getUsers)
router.get('/user/:id', getOneUser)
router.post('/createUser', createUser)
router.put('/updateUser/:id', updateUser)
router.delete('/deleteUser/:id', deleteUser )

// ------- Rutas carrito 

router.get('/carritos', getCarritos)
router.get('/carrito/:id', getOneCarrito)
router.post('/createCarrito', createCarrito)
router.put('/updateCarrito/:id', updateCarrito)
router.delete('/deleteCarrito/:id', deleteCarrito)

// -------------------Login

router.post('/login', login)


module.exports = router