const mongoose = require('mongoose');
const Schema = mongoose.Schema

const ProductSchema = new Schema({
  name: String,
  main_ingredient: String,
  composition: String,
  image: String
})

module.exports = mongoose.model('Products', ProductSchema)
