import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [couponApplied, setCouponApplied] = useState(false);
  const [scheduledDelivery, setScheduledDelivery] = useState(null); // Fix: should be null

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const deliveryData = JSON.parse(localStorage.getItem('scheduledDelivery')) || null;
    setCartItems(storedCart);
    setScheduledDelivery(deliveryData);
  }, []);

  const handleDelete = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleAddMore = () => {
    navigate('/FoodOrderPage');
  };

  const handlePayNow = () => {
    localStorage.setItem('couponApplied', JSON.stringify(couponApplied));
    localStorage.setItem('finalTotal', JSON.stringify(discountedTotal));
    navigate('/payment');
  };

  const handleScheduleDelivery = () => {
    localStorage.setItem('couponApplied', JSON.stringify(couponApplied));
    localStorage.setItem('finalTotal', JSON.stringify(discountedTotal));
    navigate('/schedule');
  };

  const applyCoupon = () => {
    setCouponApplied(true);
  };

  const originalTotal = cartItems.reduce((total, item) => {
    const price = Object.values(item.prices[0])[0];
    return total + price;
  }, 0);

  const discountedTotal = couponApplied
    ? (originalTotal * 0.8).toFixed(2)
    : originalTotal.toFixed(2);

  return (
    <div className="cart-page">
      <h2>Your Cart 🛒</h2>
      {cartItems.length === 0 ? (
        <p className="empty-msg">Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="item-details">
                <h4>{item.name}</h4>
                <p>{item.description}</p>
                <p><strong>Price:</strong> ৳{Object.values(item.prices[0])[0]}</p>
              </div>
              <button 
                className="delete-btn" 
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </div>
          ))}

          <div className="cart-total">
            <p><strong>Total:</strong> ₹{discountedTotal}</p>
            {!couponApplied && (
              <button className="coupon-btn" onClick={applyCoupon}>
                Apply 20% Coupon
              </button>
            )}
            {couponApplied && (
              <p className="coupon-msg">✅ 20% discount applied!</p>
            )}

            {/* ✅ Scheduled Delivery Info */}
            {scheduledDelivery && scheduledDelivery.date && scheduledDelivery.time && (
              <div className="scheduled-info">
                <p><strong>📦 Scheduled Delivery:</strong></p>
                <p>📅 Date: {scheduledDelivery.date}</p>
                <p>⏰ Time: {scheduledDelivery.time}</p>
              </div>
            )}
          </div>

          <div className="cart-actions">
            <button 
              className="cart-btn" 
              onClick={handleAddMore}
            >
              Add More Dishes
            </button>
            <button 
              className="pay-btn" 
              onClick={handlePayNow}
            >
              PAY NOW
            </button>
            <button 
              className="schedule-btn" 
              onClick={handleScheduleDelivery}
            >
              Schedule Delivery
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
