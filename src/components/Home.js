import Navbar from './Navbar.js';
import Welcome from './Welcome.js';
import About from './About.js';
import Projects from './Projects.js';
import Footer from './Footer.js';
import Service from './services.js';

export default function Home() {
    return (
        <>
            <Navbar />
            <Welcome />
            <About />
            <Projects />
            <Service />
            <Footer />
        </>
    );
}