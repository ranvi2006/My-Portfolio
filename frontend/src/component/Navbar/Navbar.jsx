import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="logo">
          <img
            style={{
              width: "100px",
              boxShadow: "0 4px 12px rgba(229, 225, 225, 0.5)",
              borderRadius: "5px"
            }}
            src="/media/logo.png"
            alt="logo"
          />
        </Link>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={menuOpen ? "bar rotate-bar1" : "bar"}></span>
          <span className={menuOpen ? "bar hide-bar" : "bar"}></span>
          <span className={menuOpen ? "bar rotate-bar2" : "bar"}></span>
        </div>

        {/* Nav Links */}
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <NavLink to="/eduction" activeClassName="active" onClick={() => setMenuOpen(false)}>About</NavLink>
          <NavLink to="/skill" activeClassName="active" onClick={() => setMenuOpen(false)}>Skill</NavLink>
          <NavLink to="/certificate" activeClassName="active" onClick={() => setMenuOpen(false)}>Certificate</NavLink>
          <NavLink to="/contact" activeClassName="active" onClick={() => setMenuOpen(false)}>Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}
