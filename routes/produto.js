const express = require('express');
const Produto = require('../db/model/produto');
const router  = express.Router();

const authMiddleware = require('../middlewares/auth');

router.use(authMiddleware);

//const Produtos = new Produto();

// RETORNA TODOS PRODUTOS
router.get('/', async (req, res, next) => {
    
    const allProdutos = await Produto.find({});
    
    res.status(200).send({ allProdutos });

});

// CONSULTA POR PRODUTO
router.get('/:id_produto', async (req, res, next) => {
    
    const { id_produto }  = req.params;

    const resultConsulta = await Produto.find( { id_produto: id_produto })
    
    res.status(200).send({ resultConsulta });
});


// GRAVA PRODUTO
router.post('/', async (req, res, next) => {
    
    const { descricao } = req.body;

    try {
        const produto = await Produto.create(req.body);
        return res.status(200).send({
            mensagem: `Produto Cadastro com Sucesso ${ produto }`
        });
        
    } catch (error) {
        return res.status(400).send({
            mensagem: `${ error }`
        })
    }

});

// ATUALIZANDO PRODUTO
router.patch('/:id_produto', async (req, res, next) => {
    res.status(201).send({
        mensagem: "Patch Por Produto"
    });
});

router.delete('/:id_produto', async (req, res, next) => {

    const { id_produto } = req.params;

    try {
        const deleteProduto = await Produto.deleteOne( { id_produto: id_produto });
        return res.status(200).send( {
            mensagem: `Deletado com Sucesso ${ deleteProduto }`
        })
    } catch (error) {
        return res.status(401).send({
            mensagem: `Erro deletar produto: ${ error }`
        })
    }
});


module.exports = router;