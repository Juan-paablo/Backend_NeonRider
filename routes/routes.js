
const express = require ('express')
const { getUsers, getOneUser, createUser, updateUser, deleteUser } = require('../controllers/user.controller')
const { login } = require('../controllers/login.controller')
const { middlewareJWT } = require('../middleware/jwt')
const { getClients, registerClient } = require('../controllers/registro.controller')
const router = express.Router()


// ------------------- Rutas de users

router.get('/users', middlewareJWT, getUsers)
router.get('/user/:id', middlewareJWT, getOneUser)
router.post('/createUser', middlewareJWT, createUser)
router.put('/updateUser/:id', middlewareJWT, updateUser)
router.delete('/deleteUser/:id', middlewareJWT, deleteUser )

// -------------------Login

router.post('/login', login)
module.exports = router

//----------------------- Registro de clientes

router.get('/clients', middlewareJWT, getClients);
router.post('/registerClient', registerClient);