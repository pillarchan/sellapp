var express = require('express');
var router = express.Router();
const { mongoose, conn } = require('../conn');
conn;
//商家
const sellerSchema = new mongoose.Schema({
  id: 'Number',
  name: 'String',
  deliveryTime: 'Number',
  score: 'Number',
  serviceScore: 'Number',
  foodScore: 'Number',
  rankRate: 'Number',
  minPrice: 'Number',
  deliveryPrice: 'Number',
  ratingCount: 'Number',
  sellCount: 'Number',
  bulletin: 'String',
  supports: 'Mixed',
  avatar: 'String',
  pics: 'Mixed',
  infos: 'Mixed'
});
const sellModel = mongoose.model('seller', sellerSchema, 'seller');
const id = 156220;
router.get('/', (req, res) => {
  sellModel.find({ id: id }).exec((err, data) => {
    if (err) throw err;
    if (data.length > 0) {
      res.send(data[0]);
    }
  });
});

module.exports = router;
