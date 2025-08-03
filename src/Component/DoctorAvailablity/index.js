// src/components/DoctorAvailability.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes,
  faCalendarPlus,
  faInfoCircle
} from '@fortawesome/free-solid-svg-icons';
import doctorsData from '../DoctorData';
import './availability.css';

const DoctorAvailability = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);
  const [activeStatusFilter, setActiveStatusFilter] = useState('all');
  const [availabilityData, setAvailabilityData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: new Date().toISOString().slice(0, 10),
    time_slot: '',
  });

  useEffect(() => {
    async function fetchDoctor() {
      try {
        const data = await doctorsData();
        // Find doctor by id (if id exists in response, otherwise fallback to index)
        const found = Array.isArray(data)
          ? data.find((doc, idx) => String(doc.id || idx) === String(id))
          : null;
        setDoctor(found || null);
      } catch (err) {
        setDoctor(null);
      }
    }
    fetchDoctor();
  }, [id]);

  useEffect(() => {
    if (!doctor) return;
    // If doctor has slots in API response, use them; otherwise, use mock
    let mockData = [];
    if (doctor.date && doctor.slots) {
      // Convert slots object to array for the selected date
      mockData = [{
        date: new Date(doctor.date),
        slots: Object.entries(doctor.slots).map(([time, status]) => ({
          time,
          status
        }))
      }];
    } else if (doctor.specialty) {
      console.log("Generating mock data for specialty:", doctor.specialty);
    }
    setAvailabilityData(mockData);
  }, [doctor]);

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      patient_name: form.name,
      email: form.email,
      phone: form.phone,
      date: form.date,
      time: form.time_slot,
      doctor: doctor?.name,
      specialist: doctor?.specialty,
    };
    try {
      // Book patient appointment
      await fetch('http://localhost:5000/api/patients', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      // Update doctor slot status to 'booked'
      await fetch('http://localhost:5000/api/schedule', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: doctor?.name,
          date: form.date,
          time_slot: form.time_slot,
          status: 'booked'
        }),
      });

      setShowModal(false);
      window.location.reload()
    } catch (err) {
      alert('Failed booking appointment. Please try again.');
    }
  };

  if (!doctor) return <div>Doctor not found</div>;

  const doctorData = {
    name: doctor.name,
    specialty: doctor.specialty,
    avatar: doctor.avatar,
    stats: { patients: 320, satisfaction: 95, rating: 8.9 },
    about: doctor.about || 'Experienced specialist in ' + doctor.specialty + 
      '. Over 10 years of experience in the medical field.' + 
      ' Dedicated to providing the best patient care.',
    
  };

  

  return (
    <div className="dashboard">
      <div className="header">
        <h1>Doctor Availability</h1>
        <div className="user-profile">
          <img src={doctorData.avatar} alt="User" className="user-avatar" />
          <div className="user-info">
            <h3>{doctorData.name}</h3>
            <p>{doctorData.specialty}</p>
          </div>
        </div>
      </div>

      <div className="availability-container">
        <div className="sidebar">
          <div className="doctor-cards">
            <img src={doctorData.avatar} alt="Doctor" className="doctor-avatar" />
            <h2 className="doctor-name">{doctorData.name}</h2>
            <p className="doctor-specialty">{doctorData.specialty}</p>
            <div className="stats">
              <div className="stat-item"><div className="stat-value">{doctorData.stats.patients}</div><div className="stat-label">Patients</div></div>
              <div className="stat-item"><div className="stat-value">{doctorData.stats.satisfaction}%</div><div className="stat-label">Satisfaction</div></div>
              <div className="stat-item"><div className="stat-value">{doctorData.stats.rating}</div><div className="stat-label">Rating</div></div>
            </div>
          </div>

          <div className="quick-actions">
            <button className="action-btn" onClick={() => setShowModal(true)}>
              <FontAwesomeIcon icon={faCalendarPlus} /><span>Book Appointment</span>
            </button>
            <button className="action-btn" onClick={() => setShowAbout(true)}>
              <FontAwesomeIcon icon={faInfoCircle} /><span>About</span>
            </button>
          </div>
        </div>

        <div className="main-content">
          <div className="availability-header">
            <div className="status-filter">
              {['all', 'available', 'booked', 'unavailable'].map(status => (
                <button
                  key={status}
                  className={`status-btn ${activeStatusFilter === status ? 'active' : ''}`}
                  onClick={() => setActiveStatusFilter(status)}
                >
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="time-slots">
            <h3>
              {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })} Slots
            </h3>
            <div className="slot-container">
              {availabilityData.length > 0 && availabilityData[0].slots.length > 0 ? (
                availabilityData[0].slots
                  .filter(slot => activeStatusFilter === 'all' || slot.status === activeStatusFilter)
                  .map((slot, index) => (
                    <div key={index} className={`time-slot ${slot.status}`}>
                      <div className="slot-time">{slot.time}</div>
                      <div className="slot-status">{slot.status.charAt(0).toUpperCase() + slot.status.slice(1)}</div>
                    </div>
                  ))
              ) : (
                <div className="no-slots">No time slots available</div>
              )}
            </div>
          </div>
        </div>
      </div>


      {showModal && (
        <div className="modal active" id="addAvailabilityModal">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Book Your Slot</h3>
              <button className="close-btn" onClick={() => setShowModal(false)}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-4 form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" className="form-control" placeholder="Name" required value={form.name} onChange={handleFormChange} />
                </div>
                <div className="col-md-4 form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" className="form-control" placeholder="Email" required value={form.email} onChange={handleFormChange} />
                </div>
                <div className="col-md-4 form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" className="form-control" placeholder="Phone Number" required value={form.phone} onChange={handleFormChange} />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 form-group">
                  <label htmlFor="date">Date</label>
                  <input
                    type="date"
                    id="date"
                    className="form-control"
                    value={form.date}
                    readOnly
                  />
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="time-slot">Time Slot</label>
                  <select
                    id="time_slot"
                    className="form-control"
                    required
                    value={form.time_slot}
                    onChange={handleFormChange}
                  >
                    <option value="">Select Time Slot</option>
                    {["9-10am", "10am-11am", "11am-12pm", "12pm-1pm", "2pm-3pm", "4pm-5pm", "5pm-6pm", "6pm-8pm", "8pm-9pm"].map((slot) => {
                      const slotObj =
                        availabilityData.length > 0
                          ? availabilityData[0].slots.find((s) => s.time === slot)
                          : null;
                      // Only show option if not booked
                      if (slotObj && slotObj.status === "booked") return null;
                      return (
                        <option key={slot} value={slot}>
                          {slot.replace("-", " to ")}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <button type="submit" className="btn btn-primary btn-block">Book Appointment</button>
            </form>
          </div>
        </div>
      )}

      {showAbout && (
        <div className="modal active" id="aboutDoctorModal">
          <div className="modal-content">
            <div className="modal-header">
              <h3>About {doctorData.name}</h3>
              <button className="close-btn" onClick={() => setShowAbout(false)}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            <div className="modal-body">
              <p>{doctorData.about}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorAvailability;
