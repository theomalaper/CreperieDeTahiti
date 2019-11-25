const express = require('express');
const router = express.Router();
const Product = require('../models/Product')
const mongoose = require('mongoose')

/* GET users listing. */
router.get('/', function(req, res, next) {
  Product.find({})
  .then(result => {
    res.status(200).json(result)
  })
  .catch(err => {
    console.log(err)
  })
});

router.post('/', (req, res) => {
  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    ingredient: req.body.ingredient,
    composition: req.body.composition,
    image: req.body.image
  })

  product.save()
    .then(data => {
      console.log(data)
    })
    .catch(err => {
      console.log(err)
    })
})

module.exports = router;
