import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import "./Registration.css";

const Registration = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const { username, email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    // Regular expression for validating email format
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check if email is valid
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      console.error('Please enter a valid email address.');
      return;
    }
    try {
      const res = await axios.post('http://localhost:4000/api/signup', formData);
      console.log(res.data);
      setSuccessMessage('Registration successful!');
      setTimeout(() => {
        setSuccessMessage('');
        navigate('/');
      }, 3000);
    } catch (error) {
      setError('Registration failed. Please try again.');
      console.error(error.response.data);
    }
  };

  return (
    <div>
      <h2>Registration</h2>
      {error && <p className="error">{error}</p>}
      {successMessage && <p className="success">{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={username}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
