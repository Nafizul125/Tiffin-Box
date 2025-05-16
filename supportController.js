const SupportRequest = require('../models/SupportRequest');

exports.submitSupportRequest = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newRequest = new SupportRequest({ name, email, message });
    await newRequest.save();
    res.status(201).json({ message: 'Support request submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting support request' });
  }
};
