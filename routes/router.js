const express = require('express')
const { getCambios, getOneCambios, createCambios, updateCambios, deleteCambios } = require('../controllers/cambios.controller')
const { getEspecificaciones, getOneEspecificaciones, createEspecificaciones, updateEspecificaciones, deleteEspecificaciones } = require('../controllers/especificaciones_producto.controller')
const { getExtras, getOneExtras, createExtras, updateExtras, deleteExtras } = require('../controllers/extras_producto.controller')
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

module.exports = router