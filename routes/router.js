const express = require('express')
const { getCambios, getOneCambios, createCambios, updateCambios, deleteCambios } = require('../controllers/cambios.controller')
const { getEspecificaciones, getOneEspecificaciones, createEspecificaciones, updateEspecificaciones, deleteEspecificaciones } = require('../controllers/especificaciones_producto.controller')
const { getExtras, getOneExtras, createExtras, updateExtras, deleteExtras } = require('../controllers/extras_producto.controller')
const { getCreateProduct, getOneCreateProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/creacion_productos.controller')
const { getUsers, getOneUser, createUser, updateUser, deleteUser } = require('../controllers/user.controller')
const { login } = require('../controllers/login.controller')
const { middlewareJWT } = require('../middleware/jwt')
const { getClients, registerClient } = require('../controllers/registro.controller')
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







router.post('/product', createProduct )
router.get('/products', getCreateProduct)
router.get('/product/:id', getOneCreateProduct)
router.put('/product/:id', updateProduct)
router.delete('/product/:id', deleteProduct)





// ------------------- Rutas de users

router.get('/users', middlewareJWT, getUsers)
router.get('/user/:id', middlewareJWT, getOneUser)
router.post('/createUser', middlewareJWT, createUser)
router.put('/updateUser/:id', middlewareJWT, updateUser)
router.delete('/deleteUser/:id', middlewareJWT, deleteUser )

// -------------------Login

router.post('/login', login)

//----------------------- Registro de clientes

router.get('/clients', middlewareJWT, getClients);
router.post('/registerClient', registerClient);








module.exports = router