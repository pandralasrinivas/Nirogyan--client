// src/components/DoctorCard.js
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCalendarAlt, faHospital } from '@fortawesome/free-solid-svg-icons';
import doctorsData from '../DoctorData';
import './index.css';

const DoctorCard = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    async function getDoctorsList() {
      try {
        const response = await doctorsData();
        setDoctors(Array.isArray(response) ? response : []);
      } catch (err) {
        setDoctors([]);
      } finally {
        setLoading(false); // Stop loading after data fetch
      }
    }
    getDoctorsList();
  }, []);

  return (
    <div className="doctor-list-page">
      <h2>Our Doctors</h2>
      <p>Our expertise doctors deliver trusted, compassionate care to meet your health needs.</p>
      {loading ? ( // Show spinner while loading
 <div className="loading-overlay">
    <div className="loading-spinner">
      <div className="loading-circle"></div>
      <div className="loading-circle"></div>
      <div className="loading-circle"></div>
      <div className="loading-text">Fetching doctor data...</div>
    </div>
  </div>      ) : (
        <div className="doctor-cards-row">
          {doctors.map((doctor, idx) => (
            <div className="doctor-card animate-card" key={doctor.id || idx}>
              <div className="doctor-card-inner">
                <div className="doctor-card-header">
                  <img src={doctor.avatar} alt={doctor.name} className="doctor-avatar" />
                  <div className="doctor-info">
                    <h3 className="doctor-name">{doctor.name}</h3>
                    <p className="doctor-specialty">{doctor.specialty}</p>
                    <div className="doctor-rating">
                      <FontAwesomeIcon icon={faStar} className="star-icon" />
                      <span>{doctor.rating}</span>
                      <span className="experience">{doctor.experience} years experience</span>
                    </div>
                  </div>
                </div>

                <div className="doctor-details">
                  <div className="detail-item">
                    <FontAwesomeIcon icon={faHospital} />
                    <span>{doctor.hospital}</span>
                  </div>
                  <div className="detail-item">
                    <FontAwesomeIcon icon={faCalendarAlt} />
                    <span className={doctor.availableToday ? 'available' : 'unavailable'}>
                      {doctor.availableToday ? 'Available Today' : 'Not Available Today'}
                    </span>
                  </div>
                </div>

                <button
                  className="book-btn"
                  onClick={() => window.location.href = `/availability/${doctor.id || idx}`}
                >
                  View Availability
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DoctorCard;
