import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMapMarkerAlt, 
  faPhoneAlt, 
  faEnvelope, 
  faClock
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebookF, 
  faTwitter, 
  faInstagram, 
  faLinkedinIn 
} from '@fortawesome/free-brands-svg-icons';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Top Section */}
        <div className="footer-top">
          <div className="footer-column">
            <h3 className="footer-heading">About Nirogyan</h3>
            <p className="footer-about">
              Nirogyan provides comprehensive healthcare services with a team of 
              experienced specialists dedicated to your wellbeing.
            </p>
            <div className="footer-social">
              <a href="#" className="social-icon"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="#" className="social-icon"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#" className="social-icon"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#" className="social-icon"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#doctors">Doctors</a></li>
              <li><a href="#">Appointments</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Services</h3>
            <ul className="footer-links">
              <li><a href="#">General Consultation</a></li>
              <li><a href="#">Cardiology</a></li>
              <li><a href="#">Neurology</a></li>
              <li><a href="#">Dentistry</a></li>
              <li><a href="#">Pediatrics</a></li>
              <li><a href="#">Radiology</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Contact Info</h3>
            <ul className="footer-contact">
              <li>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <span>123 Hitech City,Hyderabad,Telangana 501234</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faPhoneAlt} />
                <span>+91 987654321</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} />
                <span>info@doctorbooking.com</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faClock} />
                <span>Mon-Fri: 8:00 AM - 7:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="copyright">
            &copy; {new Date().getFullYear()} Nirogyan. All Rights Reserved.
          </div>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;