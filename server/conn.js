const mongoose = require('mongoose');
const conn = mongoose.connect('mongodb://127.0.0.1:27017/sellapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
console.log('database connected');

module.exports = { mongoose, conn };
