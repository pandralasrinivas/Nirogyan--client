// Login.jsx
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faEye, faEyeSlash, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './loginform.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Login attempt with:', { email, password, rememberMe });
      setIsLoading(false);
      alert('Login functionality would be implemented here');
    }, 1500);
  };

  const handleSocialLogin = (platform) => {
    alert(`Would normally authenticate with ${platform}`);
  };

  return (
    <div className="login-page">
      <div className="floating-bubbles">
        {[...Array(8)].map((_, i) => <div key={i} className="bubble" />)}
      </div>

      <div className="login-container-with-image">
        {/* Doctor Image Section */}
        <div className="doctor-image-container">
          <img src="https://res.cloudinary.com/damoxc2du/image/upload/v1754043000/Screenshot_2025-08-01_153757-removebg-preview_vhtwj1.png" alt="Doctor" className="doctor-image" />
          <div className="image-overlay">
            <h3>Welcome to HealthCare</h3>
            <p>Your trusted medical partner</p>
          </div>
        </div>

        {/* Login Form Section */}
        <div className="login-container">
          <div className="form-container">
            <div className="logo">
              <h2>Welcome Back</h2>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  required
                />
              </div>

              <div className="input-group">
                <FontAwesomeIcon icon={faLock} className="input-icon" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                />
                <span 
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
                </span>
              </div>

              <div className="options">
                <div className="remember-me">
                  <input
                    type="checkbox"
                    id="remember"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <label htmlFor="remember">Remember me</label>
                </div>
                <div className="forgot-password">
                  <a href="#">Forgot password?</a>
                </div>
              </div>

              <button type="submit" className="login-btn" disabled={isLoading}>
                {isLoading ? <FontAwesomeIcon icon={faSpinner} spin className="spinner" /> : 'Login'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
