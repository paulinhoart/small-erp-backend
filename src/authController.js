const express = require('express');
const User = require('../db/model/user');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

function generateToken(params = {}) {
    return jwt.sign( params , authConfig.secret, {
        expiresIn: 86400,
    });
}

router.post('/', async (req, res)=> {
    
    const { email } = req.body;
    
    try {
        
        
        if (await User.findOne({ email }) ) {
            return res.status(400).send({
                mensagem: " E-mail ja existe "
            })
        } else {
            const user = await User.create(req.body);
            return res.status(200).send({ 
                mensagem: "Cadastro realizado com sucesso ",
                token: generateToken( { id: user.id }),
             });

        }
        
    } catch (error) {
        return res.status(400).send(error);
    }
});

router.post('/authenticate', async (req, res) => {
    const { name, email, password } = req.body;
    const user = await User.findOne({ email }).select('+password');

    if (!user){
        return res.status(400).send({ mensagem: "email não encontrado"});
    }

    if (!await bcrypt.compare(password, user.password))
        return res.status(400).send( { mensagem: "Invalid Password"});

    user.password = undefined;
    
    res.send( { 
        user, 
        token: generateToken( { id: user.id }),
    });

});

module.exports = router;