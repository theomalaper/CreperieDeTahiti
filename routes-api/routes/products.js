const express = require('express');
const router = express.Router();
const Product = require('../models/Product')

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
    name: req.body.name,
    main_ingredient: req.body.main_ingredient,
    composition: req.body.composition,
    image: req.body.image
  })

  product.save() 
  .then(data => {
    res.json(data)
  })
  .catch(err => {
    console.log(err)
  })
})

module.exports = router;
