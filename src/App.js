import Navbar from './components/Navbar.js';
import Welcome from './components/Welcome.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Footer from './components/Footer.js';
import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className='scroll-smooth'>
      <Navbar />
      <Welcome />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;