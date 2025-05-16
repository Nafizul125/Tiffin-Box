import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Schedule.css';

const Schedule = () => {
  const navigate = useNavigate();
  const [deliveryDate, setDeliveryDate] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleConfirm = () => {
    if (!deliveryDate || !deliveryTime) {
      setErrorMessage('Please select both date and time for delivery.');
      return;
    }

    const scheduledDelivery = {
      date: deliveryDate,
      time: deliveryTime,
    };

    localStorage.setItem('scheduledDelivery', JSON.stringify(scheduledDelivery));
    navigate('/cart'); // Redirect to cart to reflect schedule
  };

  return (
    <div className="schedule-page">
      <h2>Schedule Your Delivery 🚚</h2>

      <div className="form-group">
        <label htmlFor="date">Select Date:</label>
        <input
          type="date"
          id="date"
          value={deliveryDate}
          onChange={(e) => setDeliveryDate(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="time">Select Time Slot:</label>
        <select
          id="time"
          value={deliveryTime}
          onChange={(e) => setDeliveryTime(e.target.value)}
        >
          <option value="">-- Select Time Slot --</option>
          <option value="9:00 AM - 11:00 AM">9:00 AM - 11:00 AM</option>
          <option value="12:00 PM - 2:00 PM">12:00 PM - 2:00 PM</option>
          <option value="3:00 PM - 5:00 PM">3:00 PM - 5:00 PM</option>
          <option value="6:00 PM - 8:00 PM">6:00 PM - 8:00 PM</option>
        </select>
      </div>

      {errorMessage && <p className="error-msg">{errorMessage}</p>}

      <button className="confirm-btn" onClick={handleConfirm}>
        Confirm & Return to Cart
      </button>
    </div>
  );
};

export default Schedule;
