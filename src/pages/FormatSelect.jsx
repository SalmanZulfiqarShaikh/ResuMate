import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../index.css";
import { useNav } from "../utils/navigate";

function FormatSelect() {

  const { goToForm } = useNav();

  return (
    <div className="format-page">
      <Navbar />
      <main className="format-main">
        <h1 className="format-heading">Choose Your Resume Format</h1>
        <div className="format-grid">
          <div className="format-card" onClick={goToForm("ats")}>
            <h2 className="format-title">ATS-Friendly</h2>
            <p className="format-desc">
              Simple, text-based resume that passes Applicant Tracking Systems.
            </p>
          </div>
          <div className="format-card" onClick={goToForm("visual")}>
            <h2 className="format-title">Visually Appealing</h2>
            <p className="format-desc">
              Modern, eye-catching design to impress recruiters.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FormatSelect;