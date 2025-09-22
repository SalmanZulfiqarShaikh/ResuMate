import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Text */}
      <p className="footer-text">© {year} ResuMate, All Rights Reserved.</p>

      {/* Icons */}
      <div className="footer-icons">
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
    </footer>
  );
}
