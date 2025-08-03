import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faSearch } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search functionality here
    console.log('Searching for:', searchQuery);
    // You can redirect to search results page or filter content
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top custom-navbar">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/" onClick={scrollToTop}>
          <span className="logo-text">Nirogyan</span>
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="d-flex ms-auto align-items-center">
            {/* Search Bar with Half Radius */}
            <form onSubmit={handleSearch} className="search-form me-3">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control search-input"
                  placeholder="Search doctors, specialties..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="btn search-btn" type="submit">
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </div>
            </form>
            
            <Link to="/login" className="btn btn-outline-primary me-2" onClick={scrollToTop}>Login</Link>
            <a href="tel:+91987654321" className="btn btn-primary">
              <FontAwesomeIcon icon={faPhone} style={{ marginRight: '8px', marginBottom: '3px' }} />
              Call Now +91 987654321
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;