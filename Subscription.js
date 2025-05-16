import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Subscription.css';

const Subscription = () => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState(
    localStorage.getItem('subscriptionStatus') || 'Not Subscribed'
  );

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  const handlePayment = () => {
    if (selectedPlan) {
      navigate('/payment', { state: { selectedPlan } });
    } else {
      alert('Please select a subscription plan first.');
    }
  };

  return (
    <div className="subscription-container">
      <h2>Choose Your Subscription Plan</h2>
      
      <div className="plans-container">
        <div
          className={`plan-card ${selectedPlan === 'Weekly' ? 'selected' : ''}`}
          onClick={() => handlePlanSelect('Weekly')}
        >
          <h3>Weekly Plan</h3>
          <p>Get 7 meals per week</p>
          <p className="price">৳999 <span className="original">৳1200</span></p>
        </div>

        <div
          className={`plan-card ${selectedPlan === 'Monthly' ? 'selected' : ''}`}
          onClick={() => handlePlanSelect('Monthly')}
        >
          <h3>Monthly Plan</h3>
          <p>30 meals per month</p>
          <p className="price">৳3699 <span className="original">৳4800</span></p>
        </div>
      </div>

      <div className="status-section">
        <h4>Subscription Status:</h4>
        <p>{subscriptionStatus}</p>
      </div>

      <button className="pay-btn" onClick={handlePayment}>Pay Now</button>

      <div className="corporate-section">
        <h4>Corporate Subscriptions</h4>
        <p>Special discounts for employees of banks & MNCs in Bangladesh.</p>
        <p>Apply coupon: <strong>CORP25</strong></p>
      </div>
    </div>
  );
};

export default Subscription;
