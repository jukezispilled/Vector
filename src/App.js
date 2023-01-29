import React from 'react';
import Navbar from './pages/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Projects from './pages/Projects';
import About from './pages/About';
import Employment from './pages/Employment';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path='/' exact element={<Home />} />
                <Route path='/services' element={<Services />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/about' element={<About />} />
                <Route path='/employment' element={<Employment />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
