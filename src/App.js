import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import SocialLinks from './Components/SocialLinks';
import About from './Components/About';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
// import Contact from './Components/Contact';

function App() {
  return (
    <Router>
      <Navbar />
       <Home/>
       <About/>
      <SocialLinks />
    </Router >
  );
}

export default App;
