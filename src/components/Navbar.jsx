import { Link } from "react-router-dom";
import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo + Text */}
        <div className="nav-logo">
          <img src="ResuMateLogo.png" alt="ResuMate Logo" className="logo-img" />
          <Link to="/" className="logo-text">
            ResuMate
          </Link>
        </div>

        {/* Desktop Icons */}
        <div className="nav-icons hidden md:flex">
          <a
            href="https://github.com/SalmanZulfiqarShaikh/ResuMate"
            target="_blank"
            rel="noopener noreferrer"
            className="icon github"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="icon linkedin"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="https://instagram.com/your-insta"
            target="_blank"
            rel="noopener noreferrer"
            className="icon instagram"
          >
            <FaInstagram size={28} />
          </a>
        </div>

        {/* Hamburger for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          <a
            href="https://github.com/SalmanZulfiqarShaikh/ResuMate"
            target="_blank"
            rel="noopener noreferrer"
            className="icon github"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="icon linkedin"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="https://instagram.com/your-insta"
            target="_blank"
            rel="noopener noreferrer"
            className="icon instagram"
          >
            <FaInstagram size={28} />
          </a>
        </div>
      )}
    </nav>
  );
}
