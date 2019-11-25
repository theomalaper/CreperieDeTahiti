const mongoose = require('mongoose');

const ProductTypeSchema =  mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  product_id: mongoose.Schema.Types.ObjectId,
  image: String, 
});

module.exports = mongoose.model('Product_type', ProductTypeSchema);