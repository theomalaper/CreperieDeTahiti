const mongoose = require('mongoose');

const ProductTypeTaste = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  product_type_id: mongoose.Schema.Types.ObjectId,
  icon: String,
  image: String,
});

module.exports = mongoose.model('Product_type_taste', ProductTypeTaste);