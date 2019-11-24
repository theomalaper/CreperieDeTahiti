const express = require('express');
const router = express.Router();
const Product = require('../models/Product')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.status(200).json({ "message": "all of the products" });
});

module.exports = router;
