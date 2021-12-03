const express = require('express');
const router = express.Router();
const mainControllers = require('../controllers/mainControllers');
router.get('/', mainControllers.index);
router.get('/enviarMensaje', mainControllers.sendMessage);
router.post('/enviarMensaje', mainControllers.procesarMensaje);


module.exports = router;