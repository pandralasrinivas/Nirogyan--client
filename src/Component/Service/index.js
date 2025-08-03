import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faStethoscope, 
  faHeartbeat, 
  faBrain, 
  faTooth, 
  faEye, 
  faBaby, 
  faXRay,
  faUserMd,
  faCalendarAlt
} from '@fortawesome/free-solid-svg-icons';
import './Services.css';

const Services = () => {
  const medicalServices = [
    {
      id: 1,
      title: "General Consultation",
      icon: faStethoscope,
      description: "Comprehensive health checkup and diagnosis for general health concerns.",
      duration: "30 mins",
    },
    {
      id: 2,
      title: "Cardiology",
      icon: faHeartbeat,
      description: "Specialized care for heart conditions and cardiovascular health.",
      duration: "45 mins",
    },
    {
      id: 3,
      title: "Neurology",
      icon: faBrain,
      description: "Expert care for nervous system disorders and brain health.",
    },
    {
      id: 4,
      title: "Dentistry",
      icon: faTooth,
      description: "Complete dental care including checkups, cleaning, and treatments.",
    },
    {
      id: 5,
      title: "Ophthalmology",
      icon: faEye,
      description: "Eye care services including vision tests and eye disease treatment.",
    },
    {
      id: 6,
      title: "Pediatrics",
      icon: faBaby,
      description: "Specialized medical care for infants, children, and adolescents.",
      duration: "30 mins",
    },
    {
      id: 7,
      title: "Radiology",
      icon: faXRay,
      description: "Diagnostic imaging including X-rays, CT scans, and MRIs.",
      duration: "Varies",
    },
    {
      id: 8,
      title: "Specialist Consultation",
      icon: faUserMd,
      description: "One-on-one consultation with specialized doctors.",
      duration: "45 mins",
    }
  ];

  return (
    <section className="services-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Medical Services</h2>
          <p>Comprehensive healthcare services tailored to your needs</p>
        </div>
        
        <div className="services-grid">
          {medicalServices.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-icon">
                <FontAwesomeIcon icon={service.icon} />
              </div>
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;