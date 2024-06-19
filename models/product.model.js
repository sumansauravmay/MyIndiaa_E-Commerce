const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  image: String,
  title: String,
  description: String,
  Price: Number,
});

const ProductModel = mongoose.model("products", productSchema);
module.exports = { ProductModel };




