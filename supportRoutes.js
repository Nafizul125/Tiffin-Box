const express = require('express');
const router = express.Router();
const { submitSupportRequest } = require('../controllers/supportController');

router.post('/support', submitSupportRequest);

module.exports = router;
