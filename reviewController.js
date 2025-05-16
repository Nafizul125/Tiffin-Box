const Review = require('../models/Review');

exports.createReview = async (req, res) => {
  try {
    const { foodItem, comment, rating } = req.body;
    const newReview = new Review({ foodItem, comment, rating });
    await newReview.save();
    res.status(201).json(newReview);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
