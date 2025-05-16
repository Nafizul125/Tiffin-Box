const express = require('express');
const router = express.Router();
const { createReview } = require('../controllers/reviewController');

router.post('/reviews', createReview);

module.exports = router;
