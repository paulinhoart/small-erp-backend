const express = require('express');
const { route } = require('../app');
const router  = express.Router();

// RETORNA TODOS PRODUTOS
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: "Consulta Produtos"
    });
});

// GRAVA PRODUTO
router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: "Gravando Produtos"
    });
});

// CONSULTA POR PRODUTO
router.get('/:id_produto', (req, res, next) => {
    res.status(200).send({
        mensagem: "Consulta Por Produto"
    });
});

// ATUALIZANDO PRODUTO
router.patch('/:id_produto', (req, res, next) => {
    res.status(201).send({
        mensagem: "Patch Por Produto"
    });
});

// DELETANDO PRODUTO
router.delete('/:id_produto', (req, res, next) => {
    res.status(201).send({
        mensagem: "Deletando Produto"
    });
});


module.exports = router;