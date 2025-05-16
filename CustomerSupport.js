import React, { useState } from 'react';
import './CustomerSupport.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CustomerSupport = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const goHome = () => {
    navigate('/user');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/support', formData);
      alert('Your request has been submitted. We will contact you soon.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting support request:', error);
      alert('Failed to submit support request.');
    }
  };

  return (
    <div className="support-page">
      <nav className="support-navbar">
        <button className="nav-button" onClick={goHome}>Home</button>
        <h1>Customer Support</h1>
      </nav>

      <div className="support-container">
        <section className="support-intro">
          <h2>How can we help you?</h2>
          <p>Our support team is available 24/7 to assist you with any questions or issues.</p>
        </section>

        <section className="faq-section">
          <h3>Frequently Asked Questions</h3>
          <div className="faq-item">
            <h4>How do I track my order?</h4>
            <p>You can track your order from your profile page under 'Order History'.</p>
          </div>
          <div className="faq-item">
            <h4>How do I cancel my order?</h4>
            <p>Orders can be canceled within 5 minutes after placing by contacting our support team.</p>
          </div>
          <div className="faq-item">
            <h4>What if my food is delayed?</h4>
            <p>If your order is delayed, our team will notify you. You can also reach out directly to us via live chat or call.</p>
          </div>
        </section>

        {/* Contact Form */}
        <section className="contact-form-section">
          <h3>Contact Us</h3>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe your issue..."
              required
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </section>

        <section className="support-details">
          <h3>Need Immediate Help?</h3>
          <p><strong>Email:</strong> support@foodorderapp.com</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Working Hours:</strong> 8:00 AM - 11:00 PM (All Days)</p>
        </section>
      </div>
    </div>
  );
};

export default CustomerSupport;
