const db = require('../database/models');
const TokenGenerator = require('uuid-token-generator');
const token = new TokenGenerator();
const { validationResult } = require('express-validator');
const mainControllers = {
    index: async (req, res) => {
        const data = await db.Mensaje.findAll({
            raw: true,
            order: [
                ['created_at', 'DESC']
            ]
        });
        //console.log(req.session.accessToken);
        if (req.session.accessToken == undefined) {
            res.render('noSession');
        }
        else {
            res.render('listaMensajes', {
                listaMensajes: data
            });
        }
    },

    sendMessage: (req, res) => {
        // Verficamos si el token existe
        res.render('sendMessaje', {
            nombre: req.session.nombre,
            email: req.session.email,
            error: []
        });
    },

    procesarMensaje: async (req, res) => {
        const { nombre, correo, mensaje } = req.body;
        // Verificamos los errores de express Validator
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            await db.Mensaje.create({
                mensaje: mensaje,
                correo: correo,
                nombre: nombre
            });

            // Una vez registrado el mensaje, generamos un token en la sesion
            req.session.accessToken = token.generate();
            req.session.nombre = nombre;
            req.session.email = correo;
            //console.log(nombre);
            res.redirect('/');
        }
        else {
            res.render('sendMessaje', {
                error: errors.mapped(),
                nombre: req.session.nombre,
                email: req.session.email
            })
        }
        console.log(errors);
        // Guardamos el mensaje en la base de datos


    }
};

module.exports = mainControllers;