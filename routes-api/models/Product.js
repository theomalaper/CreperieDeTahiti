const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  main_ingredient: String,
  composition: String,
  image: String,
  product_types: mongoose.Schema.Types.Array
});

module.exports = mongoose.model("Product", ProductSchema);
