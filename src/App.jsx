import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar.jsx";
// import ImageSlider from "./ImageSlider/ImageSlider.jsx";
import Home from "./Home/Home.jsx";
import AboutUs from "./AboutUs/AboutUs.jsx";
import ContactUs from "./ContactUs/ContactUs.jsx";
import Footer from "./Footer/Footer.jsx";
import Event from "./Events/Events.jsx";
// import axios from "axios";
import CareerResources from "./CareerResources/CareerResources.jsx";

import WhatWeOffer from "./WhatWeOffer/WhatWeOffer.jsx";
import AddSession from "./AddSession/AddSession.jsx";
import Sessions from "./Sessions/Sessions.jsx";
import EditSession from "./EditSession/EditSession.jsx";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/event" element={<Event />} />
        <Route path="/career-resources" element={<CareerResources />} />
        <Route path="/what-we-offer" element={<WhatWeOffer />} />
        {/* <Route path="/slider" element={<ImageSlider />} /> */}
        <Route path="/sessions" element={<Sessions />} />
        <Route path="/add-session" element={<AddSession />} />
        <Route path="/edit-session/:id" element={<EditSession />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
