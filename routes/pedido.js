const express = require('express');
const { route } = require('../app');
const router  = express.Router();

// RETORNA TODOS PEDIDOS
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: "Consulta Pedidos"
    });
});

// GRAVA PEDIDO
router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: "Gravando Pedido"
    });
});

// CONSULTA POR PEDIDO
router.get('/:id_pedido', (req, res, next) => {
    res.status(200).send({
        mensagem: "Consulta Por Pedido"
    });
});

// ATUALIZANDO PEDIDO
router.patch('/:id_pedido', (req, res, next) => {
    res.status(201).send({
        mensagem: "Patch Por Pedido"
    });
});

// DELETANDO PEDIDO
router.delete('/:id_pedido', (req, res, next) => {
    res.status(201).send({
        mensagem: "Deletando Pedido"
    });
});


module.exports = router;