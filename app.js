const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const morgan = require('morgan');
const rotaProduto = require('./routes/produto');
const rotaPedido = require('./routes/pedido');
const rotaUser = require('./src/authController');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Log Console
app.use(morgan());

//CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Header',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );

    if(req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, PATCH');
        return res.status(200).send({});
    }

    next();
});

app.use('/api/produto/', rotaProduto);
app.use('/api/pedido/', rotaPedido);
app.use('/api/register/', rotaUser);


module.exports = app;