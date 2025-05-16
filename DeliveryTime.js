const mongoose = require('mongoose');

const DeliveryTimeSchema = new mongoose.Schema({
  orderId: {
    type: String,
    required: true,
    unique: true,
  },
  estimatedTime: {
    type: String,
    required: true,
  },
  confirmedAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('DeliveryTime', DeliveryTimeSchema);
