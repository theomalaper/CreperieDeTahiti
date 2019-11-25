const express = require('express');
const router = express.Router();
const Product = require('../models/Product')
const Product_type = require('../models/Product_type')
const Product_type_taste = require('../models/Product_type_taste')
const mongoose = require('mongoose')

// Get all the products of the website
router.get('/', function(req, res, next) {
  Product.find({})
  .then(result => {
    res.status(200).json(result)
  })
  .catch(err => {
    console.log(err)
  })
});

// post a new product on the site

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

router.get('/type', (req, res) => {
  Product_type.find({})
    .then(result => {
      res.status(200).json(result)
    })
    .catch(err => {
      res.send(400).json({ error: err })
    })
})

router.post('/type', (req, res) => {
  const product_type = new Product_type({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    product_id: req.body.product_id,
    image: req.body.image,
  })

  product_type.save()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(400).json({ error: err })
    })
})

router.post('/type/taste', (req, res) => {
  const product_type_taste = new Product_type_taste({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    product_type_id: req.body.product_type_id,
    icon: req.body.icon,
    image: req.body.image
  })

  product_type_taste.save()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(400).json({ error: err })
    })
})

module.exports = router;
