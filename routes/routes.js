const express = require('express')
const router = express.Router()
const { getCreateProduct, getOneCreateProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/creacion_productos.controller')
const { getUsers, getOneUser, createUser, updateUser, deleteUser } = require('../controllers/user.controller')
const { login } = require('../controllers/login.controller')
const { middlewareJWT } = require('../middleware/jwt')
const { getClients, registerClient } = require('../controllers/registro.controller')



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