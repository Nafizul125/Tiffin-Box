import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Payment.css';

const Payment = () => {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);
  const [method, setMethod] = useState('bKash');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [totalAmount, setTotalAmount] = useState(0);
  const [schedule, setSchedule] = useState(null);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const storedFinalTotal = JSON.parse(localStorage.getItem('finalTotal'));
    const discountUsed = JSON.parse(localStorage.getItem('couponApplied'));
    const storedSchedule = JSON.parse(localStorage.getItem('scheduledDelivery'));

    setCartItems(storedCart);

    if (storedFinalTotal && discountUsed) {
      setTotalAmount(parseFloat(storedFinalTotal));
    } else {
      const total = storedCart.reduce((sum, item) => {
        const price = Object.values(item.prices[0])[0];
        return sum + price;
      }, 0);
      setTotalAmount(total);
    }

    if (storedSchedule && storedSchedule.date && storedSchedule.time) {
      setSchedule(storedSchedule);
    }
  }, []);

  const handleHomeRedirect = () => {
    navigate('/userpage');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!method || !name || !phone || !address) {
      alert('Please fill in all fields and select a payment method.');
      return;
    }

    const orderItems = cartItems.map(item => ({
      name: item.name,
      price: Object.values(item.prices[0])[0],
    }));

    try {
      await axios.post('http://localhost:5000/api/order', {
        name,
        phone,
        address,
        method,
        items: orderItems,
        totalAmount,
        schedule,
      });

      alert(`✅ Order placed successfully via ${method}!\nThank you, ${name} 🍱`);
      localStorage.removeItem('cart');
      localStorage.removeItem('finalTotal');
      localStorage.removeItem('scheduledDelivery');
      localStorage.removeItem('couponApplied');
      navigate('/userpage');
    } catch (err) {
      console.error('Order Error:', err.response?.data || err.message);
      alert('❌ Failed to place order. Please try again.');
    }
  };

  return (
    <div className="payment-page">
      <button onClick={handleHomeRedirect} className="home-btn">🏠 Home</button>

      <div className="payment-box">
        <h2>Payment Information 💳</h2>

      {schedule && (
  <div className="scheduled-delivery">
    <h4>🚚 Scheduled Delivery</h4>
    <p><strong>Date:</strong> {new Date(schedule.date).toLocaleDateString('en-GB', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    })}</p>
    <p><strong>Time:</strong> {schedule.time}</p>
  </div>
)}

        <form onSubmit={handleSubmit} className="payment-form">
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="e.g. Md. Rahim"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              placeholder="e.g. 017XXXXXXXX"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Delivery Address</label>
            <textarea
              placeholder="e.g. House #12, Road #7, Dhanmondi, Dhaka"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>

          {cartItems.length > 0 && (
            <div className="cart-summary">
              <h3>🧾 Order Summary</h3>
              <ul>
                {cartItems.map((item, index) => (
                  <li key={index}>
                    {item.name} - ৳{Object.values(item.prices[0])[0]}
                  </li>
                ))}
              </ul>
              <p><strong>Total:</strong> ৳{totalAmount.toFixed(2)}</p>
            </div>
          )}

          <div className="form-group">
            <label>Select Payment Method</label>
            <div className="payment-methods">
              {['bKash', 'Nagad', 'Rocket', 'Cash on Delivery'].map((m) => (
                <label key={m}>
                  <input
                    type="radio"
                    name="method"
                    value={m}
                    checked={method === m}
                    onChange={(e) => setMethod(e.target.value)}
                  />
                  {' '}{m}
                </label>
              ))}
            </div>
          </div>

          <button type="submit" className="pay-now-btn">Pay Now</button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
