const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const rotaProduto = require('./routes/produto');
const rotaPedido = require('./routes/pedido');

// Middlewares
app.use(bodyParser.json());

app.use('/api/produto/', rotaProduto);
app.use('/api/pedido/', rotaPedido);


module.exports = app;