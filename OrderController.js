const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
  try {
    const {
      name,
      phone,
      address,
      method,
      items,
      totalAmount,
      schedule
    } = req.body;

    // Convert schedule.date to Date object if provided
    const formattedSchedule = schedule?.date
      ? {
          date: new Date(schedule.date),
          time: schedule.time
        }
      : null;

    const order = new Order({
      name,
      phone,
      address,
      method,
      items,
      totalAmount,
      schedule: formattedSchedule
    });

    await order.save();
    res.status(201).json({ message: 'Order saved successfully' });
  } catch (err) {
    console.error('Error saving order:', err);
    res.status(500).json({ error: 'Failed to save order' });
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 }); // Sort by timestamp
    res.status(200).json(orders);
  } catch (err) {
    console.error('Error fetching orders:', err);
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
};
