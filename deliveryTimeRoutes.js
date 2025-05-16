const express = require('express');
const router = express.Router();
const { saveDeliveryTime } = require('../controllers/deliveryTimeController');
const { getAllDeliveryStatuses } = require('../controllers/deliveryTimeController');


router.post('/delivery-time', saveDeliveryTime);
router.get('/delivery-time', getAllDeliveryStatuses);
module.exports = router;
