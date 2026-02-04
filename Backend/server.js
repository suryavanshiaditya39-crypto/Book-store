const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
// Import your new routes (Ensure these are using 'require' if you aren't using ES Modules)
// If you are using "type": "module" in package.json, use 'import' instead
const userRoute = require("./routes/userRoutes"); 
const bookRoutes = require("./routes/bookRoutes");
const orderRoutes = require("./routes/orderRoutes");
dotenv.config();
connectDB();
const app = express();
// Middleware
app.use(cors());
app.use(express.json()); 
// ✅ Updated Route Paths
// Match these to what your frontend is calling
app.use("/user", userRoute); // Change this to match: http://localhost:5000/user/login
app.use("/api/books", bookRoutes);
app.use("/api/orders", orderRoutes);
// Error Handling Middleware (Optional but recommended)
app.use((err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode).json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
});
// Change PORT to 5000 to match your React code's Axios calls
const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});