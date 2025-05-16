import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    const validEmail = 'shamsul@example';
    const validPassword = '123456';

    if (email === validEmail && password === validPassword) {
      navigate('/UserPage');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="homepage">
      <div className="login-box">
        <h1 className="app-name">Tiffin-Box</h1>
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
          Don’t have an account? <Link to="/Register">Register</Link>
        </p>
        <p className="register-text">
          Are you a Delivery Man? <Link to="/DeliveryManLogin">DeliveryManLogin</Link>
        </p>
      </div>
    </div>
  );
};

export default HomePage;