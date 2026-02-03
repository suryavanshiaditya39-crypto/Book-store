const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  price: Number,
  stock: Number,
  sold: { type: Number, default: 0 },
  category: String,
  image: String,
});
module.exports = mongoose.model("Book", bookSchema);