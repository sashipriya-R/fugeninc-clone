import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ScrollToTop from "./components/scrolltotop";

import Home from "./components/home";
import AboutUs from "./components/aboutus";
import Services from "./components/services";
import Careers from "./components/careers";
import Clients from "./components/clients";
import ContactUs from "./components/contactus";


const App = () => {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />

      
      <div className="pt-[72px] min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
           <Route path="/careers" element={<Careers />} /> 
           <Route path="/clients" element={<Clients />} />
           <Route path="/contact-us" element={<ContactUs />} /> 
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
