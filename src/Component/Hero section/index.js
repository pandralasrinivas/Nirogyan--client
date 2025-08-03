import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import './Hero.css'; // Custom CSS for styling

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-text">
          <h1>Book Your Doctor Appointment Online.</h1>
          <p>
            A Healthier Tomorrow Starts Today. Schedule Your Appointment — Your Wellness, Our Expertise.
          </p>
          <div className="hero-buttons">
            <button className="hero-btn primary"                 onClick={() => window.location.href = `/availability/${1}`}
 >
              <FontAwesomeIcon icon={faCalendarAlt}  />
              Book An Appointment

            </button>
            <a href="tel:+1234567890" className="hero-btn secondary">
              <FontAwesomeIcon icon={faPhoneAlt} />
              Call Now
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src="https://res.cloudinary.com/damoxc2du/image/upload/v1754043000/Screenshot_2025-08-01_153757-removebg-preview_vhtwj1.png" alt="Doctor" />
        </div>
      </div>

      
    </section>
  );
};

export default HeroSection;
