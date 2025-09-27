import React, { useState } from "react";
import { Camera } from "lucide-react"; // camera icon
import AddButton from "../components/AddButton";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../index.css";

function VisualForm() {
  const [formData, setFormData] = useState({
    image: null,
    fullName: "",
    email: "",
    phone: "",
    socials: [{ name: "", link: "" }],
    summary: "",
    experiences: [{ title: "", company: "", date: "" }],
    education: [{ degree: "", institution: "", year: "" }],
    skills: [""],
    certifications: [{ title: "", issuer: "", year: "" }],
  });

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: URL.createObjectURL(file) });
    }
  };

  // Same helper functions
  const handleChange = (e, index, field, section) => {
    const updated = [...formData[section]];
    updated[index][field] = e.target.value;
    setFormData({ ...formData, [section]: updated });
  };

  const handleArrayChange = (e, index, section) => {
    const updated = [...formData[section]];
    updated[index] = e.target.value;
    setFormData({ ...formData, [section]: updated });
  };

  const addField = (section, emptyItem) => {
    setFormData({ ...formData, [section]: [...formData[section], emptyItem] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Visual Resume Data:", formData);
  };

  return (
    <>
    <Navbar/>
    <div className="ats-container">
      <div className="ats-wrapper">
        <h1 className="ats-title">Visual Resume Builder</h1>

        <form onSubmit={handleSubmit} className="ats-form">
          {/* Profile Image */}
<div className="image-upload">
  <label htmlFor="imageInput" className="image-label">
    {formData.image ? (
      <img
        src={formData.image}
        alt="Profile"
        className="profile-preview"
      />
    ) : (
      <div className="image-placeholder">
        <Camera size={28} />
        <span>Add your image</span>
      </div>
    )}
  </label>
  <input
    id="imageInput"
    type="file"
    accept="image/*"
    onChange={handleImageChange}
    className="hidden"
  />
</div>


          {/* Rest of the form (same as ATSForm) */}
          {/* --- Personal Info --- */}
          <div>
            <h2 className="section-title">Personal Info:</h2>
            <div className="section-space">
              <label className="form-label">
                Full Name: <span className="required">*</span>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  className="form-input"
                  required
                />
              </label>
              <div className="two-col">
                <label className="form-label">
                  Email: <span className="required">*</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="form-input"
                    required
                  />
                </label>
                <label className="form-label">
                  Phone: <span className="required">*</span>
                  <input
                    type="number"
                    name="phone"
                    placeholder="Enter your phone"
                    className="form-input"
                    required
                  />
                </label>
              </div>
            </div>
          </div>

          {/* Socials */}
          <div>
            <h2 className="section-title">Socials:</h2>
            {formData.socials.map((social, i) => (
              <div key={i} className="two-col mb-3">
                <input
                  type="text"
                  placeholder="Platform (e.g. LinkedIn)"
                  value={social.name}
                  onChange={(e) => handleChange(e, i, "name", "socials")}
                  className="form-input"
                />
                <input
                  type="url"
                  placeholder="Profile Link"
                  value={social.link}
                  onChange={(e) => handleChange(e, i, "link", "socials")}
                  className="form-input"
                />
              </div>
            ))}
            <AddButton
              onClick={() => addField("socials", { name: "", link: "" })}
              label="Social"
            />
          </div>

          {/* Summary */}
          <div>
            <label className="section-title">Summary:</label>
            <textarea
              name="summary"
              value={formData.summary}
              onChange={handleChange}
              rows={4}
              className="summary-box"
              placeholder="Write about Yourself (Leave Empty to let AI generate it for you)"
            />
          </div>

          {/* Experience */}
          <div>
            <h2 className="section-title">Experience:</h2>
            {formData.experiences.map((exp, i) => (
              <div key={i} className="three-col mb-3">
                <input
                  type="text"
                  placeholder="Job Title"
                  value={exp.title}
                  onChange={(e) => handleChange(e, i, "title", "experiences")}
                  className="form-input"
                />
                <input
                  type="text"
                  placeholder="Company"
                  value={exp.company}
                  onChange={(e) => handleChange(e, i, "company", "experiences")}
                  className="form-input"
                />
                <input
                  type="text"
                  placeholder="Date Range"
                  value={exp.date}
                  onChange={(e) => handleChange(e, i, "date", "experiences")}
                  className="form-input"
                />
              </div>
            ))}
            <AddButton
              onClick={() =>
                addField("experiences", { title: "", company: "", date: "" })
              }
              label="Experience"
            />
          </div>

          {/* Education */}
          <div>
            <h2 className="section-title">Education:</h2>
            {formData.education.map((edu, i) => (
              <div key={i} className="three-col mb-3">
                <input
                  type="text"
                  placeholder="Degree"
                  value={edu.degree}
                  onChange={(e) => handleChange(e, i, "degree", "education")}
                  className="form-input"
                  required
                />
                <input
                  type="text"
                  placeholder="Institution"
                  value={edu.institution}
                  onChange={(e) => handleChange(e, i, "institution", "education")}
                  className="form-input"
                  required
                />
                <input
                  type="number"
                  placeholder="Year"
                  value={edu.year}
                  onChange={(e) => handleChange(e, i, "year", "education")}
                  className="form-input"
                  required
                />
              </div>
            ))}
            <AddButton
              onClick={() =>
                addField("education", { degree: "", institution: "", year: "" })
              }
              label="Education"
            />
          </div>

          {/* Skills */}
          <div>
            <h2 className="section-title">Skills:</h2>
            {formData.skills.map((skill, i) => (
              <input
                key={i}
                type="text"
                placeholder="Skill"
                value={skill}
                onChange={(e) => handleArrayChange(e, i, "skills")}
                className="form-input mb-3"
                required
              />
            ))}
            <AddButton onClick={() => addField("skills", "")} label="Skill" />
          </div>

          {/* Certifications */}
          <div>
            <h2 className="section-title">Certifications:</h2>
            {formData.certifications.map((cert, i) => (
              <div key={i} className="three-col mb-3">
                <input
                  type="text"
                  placeholder="Title"
                  value={cert.title}
                  onChange={(e) => handleChange(e, i, "title", "certifications")}
                  className="form-input"
                />
                <input
                  type="text"
                  placeholder="Issuer"
                  value={cert.issuer}
                  onChange={(e) => handleChange(e, i, "issuer", "certifications")}
                  className="form-input"
                />
                <input
                  type="number"
                  placeholder="Year"
                  value={cert.year}
                  onChange={(e) => handleChange(e, i, "year", "certifications")}
                  className="form-input"
                />
              </div>
            ))}
            <AddButton
              onClick={() =>
                addField("certifications", { title: "", issuer: "", year: "" })
              }
              label="Certification"
            />
          </div>

          <button type="submit" className="submit-btn">
            Generate Visual Resume
          </button>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default VisualForm;
