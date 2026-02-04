const User = require("../models/User");
const jwt = require("jsonwebtoken");
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "70d" });
};
exports.signup = async (req, res) => {
  try {
    const { fullname, email, password, role } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }
    // Password hashing happens automatically in the Model now!
    const user = await User.create({
      fullname,
      email,
      password, 
      role,
    });
    res.status(201).json({
      message: "User created successfully",
      user: { _id: user._id, fullname: user.fullname, email: user.email, role: user.role },
      token: generateToken(user._id),
    });
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ message: error.message });
  }
};
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        
        // Use the method we created in the Model
        if (user && (await user.comparePassword(password))) {
            res.status(200).json({
                user: { _id: user._id, fullname: user.fullname, email: user.email, role: user.role },
                token: generateToken(user._id)
            });
        } else {
            res.status(401).json({ message: "Invalid email or password" });
        }
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};