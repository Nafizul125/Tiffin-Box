const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  company: { type: String },
  password: { type: String },
  

}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);