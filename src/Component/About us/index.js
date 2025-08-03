import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faStethoscope, 
  faHeartbeat, 
  faUserMd,
  faAward,
  faCalendarAlt,
  faHospital
} from '@fortawesome/free-solid-svg-icons';
import './aboutus.css';

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
              alt="Our Lead Physician" 
              className="doctor-portrait"
            />
            <div className="doctor-badge">
              <FontAwesomeIcon icon={faUserMd} />
              <span>Lead Physician</span>
            </div>
          </div>

          <div className="about-text">
            <h2>About Our Practice</h2>
            <p className="tagline">Compassionate Care Since 2010</p>
            
            <div className="about-highlights">
              <div className="highlight-item">
                <FontAwesomeIcon icon={faAward} className="highlight-icon" />
                <div>
                  <h4>15+ Years Experience</h4>
                  <p>Trusted medical expertise you can rely on</p>
                </div>
              </div>
              
              <div className="highlight-item">
                <FontAwesomeIcon icon={faStethoscope} className="highlight-icon" />
                <div>
                  <h4>Comprehensive Specialties</h4>
                  <p>Full-range of medical services in one place</p>
                </div>
              </div>
              
              <div className="highlight-item">
                <FontAwesomeIcon icon={faHeartbeat} className="highlight-icon" />
                <div>
                  <h4>Patient-Centered Approach</h4>
                  <p>Personalized treatment plans for every individual</p>
                </div>
              </div>
            </div>

            <div className="mission-statement">
              <FontAwesomeIcon icon={faHospital} className="mission-icon" />
              <p>
                "Our mission is to provide exceptional healthcare with compassion and 
                cutting-edge medical expertise. We believe in treating the whole person, 
                not just the symptoms."
              </p>
            </div>

            <button className="cta-button">
              <FontAwesomeIcon icon={faCalendarAlt} />
              Book a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;