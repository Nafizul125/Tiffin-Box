import React, { useEffect, useState } from 'react';
import './OrderHistory.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/orders');
        setOrders(res.data);
      } catch (err) {
        console.error('Error fetching orders:', err);
      }
    };
    fetchOrders();
  }, []);

  const handleAcceptOrder = (orderId) => {
    navigate('/DeliveryManTime', { state: { orderId } });
  };

  return (
    <div className="order-history-page">
      <nav className="order-navbar">
        <h2>Your Available Order</h2>
      </nav>

      <div className="order-list">
        {orders.length === 0 ? (
          <p className="no-orders">You have not placed any orders yet.</p>
        ) : (
          orders.map((order) => (
            <div key={order._id} className="order-card">
              <h3>Order #{order._id}</h3>
              <p>Date: {new Date(order.date).toLocaleString()}</p>
              <p><strong>Name:</strong> {order.name}</p>
              <p><strong>Phone:</strong> {order.phone}</p>
              <p><strong>Address:</strong> {order.address}</p>
              <p><strong>Payment Method:</strong> {order.method}</p>
              <ul>
                {order.items.map((item, index) => (
                  <li key={index} className="order-item">
                    <span>{item.name}</span> - ৳{item.price}
                  </li>
                ))}
              </ul>
              <p><strong>Total:</strong> ৳{order.totalAmount}</p>

              <div style={{ marginTop: '10px', display: 'flex', gap: '10px' }}>
                <button
                  className="accept-order-button"
                  onClick={() => handleAcceptOrder(order._id)}
                >
                  🚚 Accept Order
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default OrderHistory;
