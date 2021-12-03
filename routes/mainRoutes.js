const express = require('express');
const router = express.Router();
const mainControllers = require('../controllers/mainControllers');
const { validarEnvioMensaje } = require('../helpers/validaciones');
router.get('/', mainControllers.index);
router.get('/enviarMensaje', mainControllers.sendMessage);
router.post('/enviarMensaje',validarEnvioMensaje ,mainControllers.procesarMensaje);


module.exports = router;