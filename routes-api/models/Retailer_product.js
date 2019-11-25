const mongoose = require('mongoose');

const RetailerProductSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  retailer_id: mongoose.Schema.Types.ObjectId,
  product_id: mongoose.Schema.Types.ObjectId
});

module.exports = mongoose.model('Retailer_product', RetailerProductSchema);