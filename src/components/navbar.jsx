import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png.webp';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const ToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <nav className="main_navbar ">
        <div className="navbar_img">
          <img src={logo} alt="Logo" />
        </div>
        <ul className="navbar">
          <li><Link className="navbar_a" to="/home">Home</Link></li>
          <li><Link className="navbar_a" to="/about">About</Link></li>
          <li><Link className="navbar_a" to="/service">Service</Link></li>
          <li><Link className="navbar_a" to="/contact">Contact Us</Link></li>
          <button className="nav_btn">Download now</button>
        </ul>
      </nav>

      <nav className="main_navbar_0">
        <i className="bi bi-list" onClick={ToggleMenu}></i>

        <ul className={`navbar_1 ${menuOpen ? 'active' : ''}`} id="navbar">
          <i className="bi bi-x" onClick={ToggleMenu}></i>
          <li><Link className="navbar_a" to="/home">Home</Link></li>
          <li><Link className="navbar_a" to="/about">About</Link></li>
          <li><Link className="navbar_a" to="/service">Service</Link></li>
          <li><Link className="navbar_a" to="/contact">Contact Us</Link></li>
          <button className="nav_btn">Download now</button>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
