var express = require('express');
var router = express.Router();
const { mongoose, conn } = require('../conn');
conn;
//用户
const userSchema = new mongoose.Schema({
  name: 'String',
  age: 'Number'
});
const userModel = mongoose.model('user', userSchema, 'user');
router.get('/', (req, res) => {
  userModel.find().exec((err, data) => {
    if (err) throw err;
    if (data.length > 0) {
      res.send(data);
    } else {
      res.send('???');
    }
  });
});

module.exports = router;
