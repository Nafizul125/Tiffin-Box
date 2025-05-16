const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');
const Order = require('../models/Order');

exports.generateOrderPDF = async (req, res) => {
  try {
    const orders = await Order.find().sort({ date: -1 });

    // Ensure the 'pdfs' folder exists
    const dirPath = path.join(__dirname, '../pdfs');
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath);
    }

    const filePath = path.join(dirPath, 'order-history.pdf');

    const doc = new PDFDocument();

    const writeStream = fs.createWriteStream(filePath);
    doc.pipe(writeStream);

    doc.fontSize(20).text('Order History Report', { align: 'center' }).moveDown();

    orders.forEach(order => {
      doc.fontSize(14).text(`Order ID: ${order._id}`);
      doc.text(`Date: ${new Date(order.date).toLocaleString()}`);
      doc.text(`Name: ${order.name}`);
      doc.text(`Phone: ${order.phone}`);
      doc.text(`Address: ${order.address}`);
      doc.text(`Payment Method: ${order.method}`);
      doc.text('Items:');
      order.items.forEach(item => {
        doc.text(`- ${item.name} - ₹${item.price}`);
      });
      doc.text(`Total: ₹${order.totalAmount}`);
      doc.moveDown();
    });

    doc.end();

    // Wait for the file to finish writing before sending
    writeStream.on('finish', () => {
      res.download(filePath, 'order-history.pdf', (err) => {
        if (err) {
          console.error('Error sending PDF:', err);
        }

        // Optionally delete file after sending
        fs.unlink(filePath, (unlinkErr) => {
          if (unlinkErr) console.error('Error deleting PDF file:', unlinkErr);
        });
      });
    });

    writeStream.on('error', (err) => {
      console.error('Write stream error:', err);
      res.status(500).json({ message: 'Error writing PDF file' });
    });

  } catch (err) {
    console.error('PDF Generation Error:', err);
    res.status(500).json({ message: 'Failed to generate PDF' });
  }
};
