import React from "react";
import { Link } from "react-router-dom";
import "../global.css";
import logo from "../img/NUR.jpg"; // Ensure you have the logo inside src/assets

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          {/* Left Side Menu */}
          <ul className="nav-menu left-menu">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/specials">Specials</Link></li>
          </ul>

          {/* Centered Logo */}
          <div className="logo-container">
            <Link to="/">
              <img src={logo} alt="Nur Med Spa Logo" className="logo" />
            </Link>
          </div>

          {/* Right Side Menu */}
          <ul className="nav-menu right-menu">
            <li><Link to="/explore">Explore</Link></li>
            <li><Link to="/blog">Blogs</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
