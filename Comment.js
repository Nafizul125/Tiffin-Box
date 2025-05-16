const mongoose = require('mongoose');

const replySchema = new mongoose.Schema({
  user: String,
  text: String,
}, { timestamps: true });

const commentSchema = new mongoose.Schema({
  user: String,
  food: String,
  text: String,
  replies: [replySchema],
}, { timestamps: true });

module.exports = mongoose.model('Comment', commentSchema);
