const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo:27017/dbguerreiros', { useNewUrlParser: true, useUnifiedTopology: true,  useCreateIndex: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;