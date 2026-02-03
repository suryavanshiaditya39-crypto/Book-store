const express = require("express");
const router = express.Router();
// Import your Models
const Book = require("../models/Book");
const Order = require("../models/Order");
// 1. GET ALL BOOKS
// URL: http://localhost:5000/api/books
router.get("/", async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });
    res.status(200).json(books);
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).json({ message: "Failed to fetch books", error: error.message });
  }
});
// 2. DELETE A BOOK
// URL: http://localhost:5000/api/books/:id
router.delete("/:id", async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting book" });
  }
});
// 3. CREATE A NEW BOOK (Base Route)
// URL: http://localhost:5000/api/books
router.post("/", async (req, res) => {
  try {
    const newBook = new Book(req.body);
    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch (error) {
    console.error("Error creating book:", error);
    res.status(400).json({ message: "Error saving book", error: error.message });
  }
});
// 4. DASHBOARD STATS API
// URL: http://localhost:5000/api/books/stats
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
    res.status(500).json({ message: "Dashboard stats error", error: error.message });
  }
}); // <--- Fixed the missing closing brace here!
// 5. CREATE A NEW BOOK (Add Route)
// URL: http://localhost:5000/api/books/add
router.post("/add", async (req, res) => {
  try {
    const { title, author, price, stock, description, category, imageUrl } = req.body;
    const newBook = new Book({
      title,
      author,
      price,
      stock,
      description,
      category,
      imageUrl,
      sold: 0 
    });
    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch (error) {
    console.error("Error adding book:", error);
    res.status(400).json({ message: "Error saving book", error: error.message });
  }
});
module.exports = router;