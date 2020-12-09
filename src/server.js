const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();

//configurando el CORS
const cors = require('cors');
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

//consulte mas sobre bodyParser en http://npmjs.com/body-parser
app.use(bodyParser.json());
//esta linea es importante para poder obtener datos desde req.body
app.use(bodyParser.urlencoded({ extended: false }));

//si quiero que todas las peticiones vayan a http://localhost:3001/api/....
app.use('/api', routes);

module.exports = app;