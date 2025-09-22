import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../index.css";
import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';
import { useNav } from "../utils/navigate";


function Landing() {

  const [showCursor, setShowCursor] = useState(true);
  const { goToFormat } = useNav();


  return (
    <>
    <Navbar/>
    <div className="landing">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <TypeAnimation
  sequence={[
    'Build Your Perfect Resume',
    2000,
    () => setShowCursor(false),
  ]}
  wrapper="h1"
  cursor={showCursor}
  repeat={0}
  style={{
    fontSize: 'clamp(1.5rem, 6vw, 2.5rem)', // responsive size
    fontWeight: 'bold',
    display: 'block',        // block instead of inline-block
    whiteSpace: 'normal',    // allow wrapping on mobile
    color: 'white',
    textAlign: 'center',     // center align for hero section
  }}
  className="hero-title"
/>



          <p className="hero-subtitle">
            Create Your Resume Effortlessly with ResuMate - The Ultimate Free Resume Builder
          </p>
          <button className="hero-btn" onClick={goToFormat}>Get Started</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="features-title">Why Choose ResuMate?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3 className="feature-heading">💸 100% Free Access</h3>
            <p className="feature-text">
              Create and download your resume without spending a single rupee. Get premium features at zero cost.
            </p>
          </div>
          <div className="feature-card">
            <h3 className="feature-heading">⚡ ATS-Friendly & Recruiter Approved</h3>
            <p className="feature-text">
              Ensure your resume passes Applicant Tracking Systems while still impressing hiring managers.
            </p>
          </div>
          <div className="feature-card">
            <h3 className="feature-heading">🎨 Professional & Modern Designs</h3>
            <p className="feature-text">
              Stand out with clean, stylish templates that balance visual appeal with professional polish.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2 className="cta-title">Ready to Land Your Dream Job?</h2>
        <button className="cta-btn" onClick={goToFormat}>Create Your Resume Now</button>
      </section>
    </div>
    <Footer/>
    </>
  );
}

export default Landing;
