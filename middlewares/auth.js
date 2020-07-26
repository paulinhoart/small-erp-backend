const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader)
        return res.status(401).send({ error: "No token provide" });
    
    // Bearer vhs45hsb41290 (hash)
    const parts = authHeader.split(' ');
    if(!parts.length == 2 )
        return res.status(401).send({ error: "Token error" });

    const [ scheme, token ] = parts;
    if(!"Bearer" == scheme)
        return res.status(401).send( {error: "Tokne mal formated"});

    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if(err)
            return res.status(401).send( { error: "Token invalid" } );
        
        req.userId = decoded.id;
        return next();

    });
};