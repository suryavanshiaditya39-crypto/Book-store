const mongoose = require("mongoose");
const User = require("../models/User"); // Import your User model
const seedAdmin = async () => {
  try {
    const adminEmail = "admin@gmail.com";
    const adminExists = await User.findOne({ email: adminEmail });
    if (!adminExists) {
      console.log("Creating static admin user...");
      await User.create({
        fullname: "System Admin",
        email: adminEmail,
        password: "admin123", // The model's pre-save hook hashes this!
        role: "admin",
      });
      console.log("✅ Static Admin Created successfully");
    } else {
      console.log("ℹ️ Admin user already exists in database");
    }
  } catch (error) {
    console.error("❌ Error seeding admin:", error.message);
  }
};
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
    // Run the seeding function after connection
    await seedAdmin();
    
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
    process.exit(1);
  }
};
module.exports = connectDB;