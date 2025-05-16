const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true }
});

const ScheduleSchema = new mongoose.Schema({
  date: { type: Date }, // Store as actual Date for proper filtering
  time: { type: String }
});

const OrderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  method: { type: String, required: true },
  items: { type: [ItemSchema], required: true },
  totalAmount: { type: Number, required: true },
  schedule: {
    type: ScheduleSchema,
    default: null
  },
  status: {
    type: String,
    enum: ['Pending', 'Delivered', 'Cancelled'],
    default: 'Pending'
  }
}, {
  timestamps: true
});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;
