require('colors');
require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const generateDB = require('./helpers/generateDB');
const port = process.env.PORT_API_EXPRESS;

// Configuramos el uso de sesiones
const session = require('express-session');
app.use(session({ secret: 'HOLA C:' }));

// Route public
const public_path = path.resolve(__dirname + '/public');
app.use(express.static(public_path));

// Procces data of forms 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Config of override for the methods PUT and DELETE
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

const mainRoutes = require('./routes/mainRoutes');
app.use('/', mainRoutes);

// Set view template
app.set('view engine', 'ejs');

//Listening Server
generateDB()
    .then(message => {
        app.listen(port, () => {
            console.log(`Servidor en http://localhost:${port}`.blue);
        });
    })
