const authConfig = require('../config/auth.json');

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader)
        return res.status(401).send({ error: "No token provide" });
    
    const parts = authHeader.split(' ');

    if(!parts.lenght === 2)
        return res.status(401).send({ error: "Token error" });

    const [ scheme, token] = parts;

    if(!/ˆBearer$/i.test(scheme))
        return res.status(401).send( {error: "Tokne mal formated"});

    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if(err)
            return res.status(401).send( { error: "Token invalid" } );
        
        req.userId = decoded.id;
        return next();
        
    });
};