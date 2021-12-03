const { body, check } = require('express-validator');

const validarEnvioMensaje = [
    check('nombre')
        .notEmpty().withMessage('Debes completar el nombre').bail()
        .isLength({ min: 5 }).withMessage('El nombre debe ser más largo'),
    check('correo')
        .notEmpty().withMessage('Debes completar el email').bail()
        .isEmail().withMessage('Debes completar un email valido'),
    check('mensaje')
        .notEmpty().withMessage('Debes completar el mensaje').bail()
        .isLength({ min: 3 }).withMessage('El mensaje debe ser más largo')

];

module.exports = {
    validarEnvioMensaje
}