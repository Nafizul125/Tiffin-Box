const express = require('express');
const router = express.Router();
const { generateOrderPDF } = require('../controllers/pdfController');

router.get('/order/pdf', generateOrderPDF);

module.exports = router;
