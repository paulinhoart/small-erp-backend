const mongoose = require('../db');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const produtoSchema = new mongoose.Schema( {
    descricao: { 
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

produtoSchema.plugin(AutoIncrement, { id:'id_produto_seq', inc_field: 'id_produto'});

const Produto = mongoose.model('Produto', produtoSchema);

module.exports = Produto;