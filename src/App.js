
import Gallery from './components/gallery.js';
import Home from './components/Home.js';
import React from 'react';
// import { createRoot } from 'react-dom/client.js';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
  );
}

export default App;