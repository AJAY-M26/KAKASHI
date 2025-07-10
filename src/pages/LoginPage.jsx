// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Replace these with your actual login credentials
    const correctEmail = 'ajayav2005@gmail.com';
    const correctPassword = 'ajay2613';

    if (email === correctEmail && password === correctPassword) {
      navigate('/portfolio');
    } else {
      setErrorMsg('Invalid email or password');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ background: 'linear-gradient(to right, #00c6ff, #0072ff)' }}>
      <div className="bg-white p-4 rounded-4 shadow" style={{ width: '100%', maxWidth: '400px' }}>
        <h3 className="text-center mb-4">Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <div className="input-group">
              <input
                type={passwordVisible ? 'text' : 'password'}
                className="form-control"
                id="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="button" className="btn btn-outline-secondary" onClick={togglePassword}>
                <i className={`bi ${passwordVisible ? 'bi-eye' : 'bi-eye-slash'}`}></i>
              </button>
            </div>
          </div>
          {errorMsg && <div className="text-danger mb-3">{errorMsg}</div>}
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
