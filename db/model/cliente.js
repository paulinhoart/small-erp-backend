const mongoose = require('../db');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const clienteSchema = new mongoose.Schema( {
    name: { 
        type: String,
        required: true
    },
    endereco: {
        type: String,
        required: true
    },
    cep: {
        type: Number,  
        required: true
    },
    city: {
        type: String,
        required: true
    },
    telefone: {
        type: Number,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
    
});

clienteSchema.plugin(AutoIncrement, { id:'id_cliente_seq', inc_field: 'id'});

const Cliente = mongoose.model('Cliente', clienteSchema);

module.exports = Cliente;