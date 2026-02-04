const express = require("express");
const router = express.Router();
const Book = require("../models/Book");
const Order = require("../models/Order");
const { protect } = require("../middleware/authMiddleware");
// 1. GET ALL BOOKS
router.get("/", async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch books" });
  }
});
// 2. DASHBOARD STATS
router.get("/stats", async (req, res) => {
  try {
    const totalBooks = await Book.countDocuments();
    const totalOrders = await Order.countDocuments();
    const soldBooksAgg = await Book.aggregate([
      { $group: { _id: null, totalSold: { $sum: "$sold" } } },
    ]);
    const soldBooks = soldBooksAgg[0]?.totalSold || 0;
    res.json({ totalBooks, totalOrders, soldBooks });
  } catch (error) {
    res.status(500).json({ message: "Dashboard stats error" });
  }
});
// 3. CREATE A NEW BOOK (Protected)
router.post("/", protect, async (req, res) => {
  try {
    const newBook = new Book(req.body);
    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch (error) {
    res.status(400).json({ message: "Error saving book", error: error.message });
  }
});
// 4. DELETE A BOOK (Protected)
router.delete("/:id", protect, async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting book" });
  }
});
module.exports = router;