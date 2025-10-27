import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';

// Import page components
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Services from './pages/Services';
import Contact from './pages/Contact';

// Navigation component
function Navigation() {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Home', id: 'home' },
    { path: '/about', label: 'About', id: 'about' },
    { path: '/gallery', label: 'Gallery', id: 'gallery' },
    { path: '/services', label: 'Services', id: 'services' },
    { path: '/contact', label: 'Contact', id: 'contact' }
  ];

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <h1>Bokeh</h1>
        </Link>
        <ul className="nav-menu">
          {navItems.map((item) => (
            <li key={item.id} className="nav-item">
              <Link 
                to={item.path} 
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer className="footer">
          <div className="footer-container">
            <p>&copy; 2024 Bokeh. All rights reserved.</p>
            <div className="footer-links">
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
  
    