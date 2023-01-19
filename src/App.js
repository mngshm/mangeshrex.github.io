import Navbar from './components/Navbar.js'; 
import Welcome from './components/Welcome.js';
import About from './components/About.js'; 
import Projects from './components/Projects.js';
import Footer from './components/Footer.js';
function App(){
  return (
  <div className="bg-black">
      <Navbar />
      <Welcome />
      <About />
      <Projects />
      <Footer />
  </div>  
  );
}

export default App;