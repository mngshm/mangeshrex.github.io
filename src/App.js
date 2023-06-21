import Navbar from './components/Navbar.js';
import Welcome from './components/Welcome.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Footer from './components/Footer.js';
import Service from './components/services.js';
import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>

      <div className='scroll-smooth'>
        <Navbar />
        <Welcome />
        <About />
        <Projects />
        <Service />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;