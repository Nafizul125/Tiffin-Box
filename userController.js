const User = require("../models/User");

exports.registerUser = async (req, res) => {
  try {
    const { name, email, phoneNumber, dateOfBirth, company,password } = req.body;

    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const user = new User({ name, email, phoneNumber, dateOfBirth, company });
    await user.save();

    res.status(200).json({ message: "User registered", user });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Server error" });
  }
};