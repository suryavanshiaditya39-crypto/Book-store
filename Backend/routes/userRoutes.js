const express = require("express");
const router = express.Router();
const { signup, login } = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");
// This matches http://localhost:5000/user/signup
router.post("/signup", signup);
// This matches http://localhost:5000/user/login
router.post("/login", login);
// This matches http://localhost:5000/user/profile
router.get("/profile", protect, (req, res) => {
    res.json(req.user);
});
module.exports = router;