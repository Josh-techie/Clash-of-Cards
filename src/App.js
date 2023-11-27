import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Componants/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Home from './Componants/Home';
import Features from './Componants/Features';
import GettingStarted from './Componants/GettingStarted';
import ContactUs from './Componants/ContactUs';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/getting-started" element={<GettingStarted />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
