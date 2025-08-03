
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DoctorAvailability from './Component/DoctorAvailablity';
import Navbar from './Component/Navbar';
import Services from './Component/Service';
import AboutUs from './Component/About us';
import Footer from './Component/Footer';
import HeroSection from './Component/Hero section';
import LoginForm from './Component/Login';
import DoctorCard from './Component/DoctorsCards';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <AboutUs/>
            <DoctorCard />
            <Services />
          </>
        } />
        <Route path="/availability/:id" element={<DoctorAvailability />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;