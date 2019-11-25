const mongoose = require('mongoose');

const RetailerSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  shop: String,
  email: String,
  phone_number: Number,
  deliver_type: String,
});

module.exports = mongoose.model('Retailer', RetailerSchema);