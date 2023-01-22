import Navbar from './components/Navbar.js';
import Welcome from './components/Welcome.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Footer from './components/Footer.js';
import React from 'react';

function App() {
  return (
    <div>
        <Navbar />
        <Welcome />
        <About />
        <Projects />
        <Footer />
      </div>
  );
}

export default App;