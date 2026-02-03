const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
  customer: {
    name: String,
    phone: String,
    address: String,
  },
  books: [
    {
      bookId: { type: mongoose.Schema.Types.ObjectId, ref: "Book" },
      quantity: Number,
    },
  ],
  totalAmount: Number,
  paymentMethod: { type: String, default: "COD" },
  status: { type: String, default: "Pending" },
  createdAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("Order", orderSchema);