const mongoose = require("mongoose");

const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  bid: {
    type: Number,
    required: true,
    min: 0.99,
  },
  seller: {
    type: String,
    required: true,
    trim: true,
  },
  highestBidder: {
    type: String,
    trim: true,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
