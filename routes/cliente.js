const express = require('express');
const Cliente = require('../db/model/cliente');
const router  = express.Router();

//const authMiddleware = require('../middlewares/auth');

//router.use(authMiddleware);

// RETORNA TODOS CLIENTES
router.get('/', async (req, res, next) => {
    try {
        const allClientes = await Cliente.find({});
        res.status(200).send({ allClientes });

    } catch (error) {
        return res.status(400).send({
            mensagem: `${ error }`
        });
    }

});

// Consulta/visualiza por cliente
router.get('/:id', async (req, res, next) => {
    try {
        const { id }  = req.params;
        const result = await Cliente.find( { id: id })
        res.status(200).send({ result });
    } catch (error) {
        return res.status(400).send({
            mensagem: `${ error }`
        });
    }
});


// GRAVA CLIENTE
router.post('/', async (req, res, next) => {
    
    const { name } = req.body;

    try {
        const cliente = await Cliente.create(req.body);
        return res.status(200).send({
            mensagem: `Cliente Cadastro com Sucesso ${ name }`
        });
        
    } catch (error) {
        return res.status(400).send({
            mensagem: `${ error }`
        });
    }
});

// ATUALIZANDO Cliente
router.put('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await Cliente.findOneAndUpdate( { id: id }, {$set: req.body });

        return res.status(201).send({
            mensagem: `Cliente ${ id }`
        });

    } catch (error) {
        return res.status(400).send({
            mensagem: `${ error }`
        });
    }
});

router.delete('/:id', async (req, res, next) => {

    const { id } = req.params;

    try {
        const deleteCliente = await Cliente.findOneAndDelete( { id: id });
        return res.status(200).send( {
            mensagem: `Deletado com Sucesso ${ deleteCliente }`
        })
    } catch (error) {
        return res.status(401).send({
            mensagem: `Erro deletar cliente: ${ error }`
        })
    }
});


module.exports = router;