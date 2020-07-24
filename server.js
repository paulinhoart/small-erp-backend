const app  = require('./app');
const port = process.env.PORT || 8080;

// Rodando aplicacao na porta definida em config/express.js
app.listen(port, () => {
    console.log(`Aplicando rodando na porta ${port}`);
});

