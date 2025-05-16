import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import axios from 'axios'; 

const HomePage = () => {
  const navigate = useNavigate();

  // State for form input
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Hardcoded credentials
    // Install axios if you haven't: npm install axios

    const handleLogin = async () => {
      try {
        const res = await axios.post('/api/login', { email, password });
    
        // If successful, redirect
        navigate('/userPage');
      } catch (err) {
        setError(err.response.data.message || 'Something went wrong');
      }
    };
    
  };

  return (
    <div className="homepage">
      <div className="login-box">
        <h1 className="app-name">Tiffin Box</h1>
        <h2>WELCOME</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="email / username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">LOGIN</button>
        </form>

        {error && <p className="error-message">{error}</p>}

        <p className="register-text">
          Don’t have an account? <a href="#">Register</a>
        </p>
      </div>
    </div>
  );
};

export default HomePage;
