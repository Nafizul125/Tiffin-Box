const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  foodItem: { type: String, required: true },
  comment: { type: String, required: true },
  rating: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Review', reviewSchema);
