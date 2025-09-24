import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaCamera } from "react-icons/fa";
import "../index.css";

function FormPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const format = location.state?.format || "ats";

  // Common states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [summary, setSummary] = useState("");
  const [skills, setSkills] = useState([{ name: "", proficiency: "" }]);
  const [education, setEducation] = useState([
    { school: "", degree: "", year: "" },
  ]);
  const [experience, setExperience] = useState([]);
  const [photo, setPhoto] = useState(null);

  // Add handlers
  const addSkill = () =>
    setSkills([...skills, { name: "", proficiency: "" }]);
  const addEducation = () =>
    setEducation([...education, { school: "", degree: "", year: "" }]);
  const addExperience = () =>
    setExperience([...experience, { company: "", role: "", duration: "" }]);

  const handlePhotoUpload = (e) => {
    if (e.target.files[0]) {
      setPhoto(URL.createObjectURL(e.target.files[0]));
    }
  };

  // Validation (skills + education minimum 1, name/email/phone required)
  const isFormValid =
    name.trim() &&
    email.trim() &&
    phone.trim() &&
    skills.length > 0 &&
    education.length > 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      navigate("/result", {
        state: {
          name,
          email,
          phone,
          summary,
          skills,
          education,
          experience,
          photo,
          format,
        },
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-page">
      <h1 className="form-heading">
        {format === "ats"
          ? "ATS-Friendly Resume"
          : "Visually Appealing Resume"}
      </h1>

      {/* Photo Upload (Visual Only) */}
      {format === "visual" && (
        <div className="photo-upload">
          <label className="photo-label">
            <div className="photo-circle">
              {photo ? (
                <img src={photo} alt="Uploaded" className="photo-preview" />
              ) : (
                <div className="photo-placeholder">
                  <FaCamera className="photo-icon" />
                  <span>Add Photo</span>
                </div>
              )}
            </div>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handlePhotoUpload}
            />
          </label>
        </div>
      )}

      {/* Basic Info */}
      <div className="form-section">
        <input
          type="text"
          placeholder="Full Name"
          className="form-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="form-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="tel"
          inputMode="numeric"
          pattern="[0-9]*"
          placeholder="Phone"
          className="form-input"
          value={phone}
          onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
          required
        />
      </div>

      {/* Summary (Optional) */}
      <h2 className="form-subheading">Summary</h2>
      <textarea
        placeholder="Write a short summary (optional)"
        className="form-input"
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
      />

      {/* Skills */}
      <h2 className="form-subheading">Skills</h2>
      {skills.map((s, i) => (
        <div key={i} className="form-subgroup">
          <input
            type="text"
            placeholder="Skill name"
            className="form-input"
            value={s.name}
            onChange={(e) => {
              const updated = [...skills];
              updated[i].name = e.target.value;
              setSkills(updated);
            }}
            required
          />

          {format === "visual" && (
            <>
              <button
                type="button"
                className="proficiency-toggle"
                onClick={() => {
                  const updated = [...skills];
                  updated[i].proficiency = updated[i].proficiency ? "" : "50";
                  setSkills(updated);
                }}
              >
                {s.proficiency
                  ? "Remove Proficiency Bar"
                  : "Click to add Proficiency"}
              </button>
              {s.proficiency && (
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${s.proficiency}%` }}
                  ></div>
                </div>
              )}
            </>
          )}
        </div>
      ))}
      <button type="button" className="btn-secondary" onClick={addSkill}>
        + Add Skill
      </button>

      {/* Education */}
      <h2 className="form-subheading">Education</h2>
      {education.map((e, i) => (
        <div key={i} className="form-subgroup">
          <input
            type="text"
            placeholder="School/University"
            className="form-input"
            value={e.school}
            onChange={(ev) => {
              const updated = [...education];
              updated[i].school = ev.target.value;
              setEducation(updated);
            }}
            required
          />
          <input
            type="text"
            placeholder="Degree"
            className="form-input"
            value={e.degree}
            onChange={(ev) => {
              const updated = [...education];
              updated[i].degree = ev.target.value;
              setEducation(updated);
            }}
            required
          />
          <input
            type="number"
            placeholder="Year"
            className="form-input"
            value={e.year}
            min="1900"
            max="2099"
            onChange={(ev) => {
              const updated = [...education];
              updated[i].year = ev.target.value.replace(/\D/g, "");
              setEducation(updated);
            }}
            required
          />
        </div>
      ))}
      <button type="button" className="btn-secondary" onClick={addEducation}>
        + Add Education
      </button>

      {/* Experience */}
      <h2 className="form-subheading">Experience</h2>
      {experience.map((ex, i) => (
        <div key={i} className="form-subgroup">
          <input
            type="text"
            placeholder="Company"
            className="form-input"
            value={ex.company}
            onChange={(ev) => {
              const updated = [...experience];
              updated[i].company = ev.target.value;
              setExperience(updated);
            }}
          />
          <input
            type="text"
            placeholder="Role"
            className="form-input"
            value={ex.role}
            onChange={(ev) => {
              const updated = [...experience];
              updated[i].role = ev.target.value;
              setExperience(updated);
            }}
          />
          <input
            type="text"
            placeholder="Duration"
            className="form-input"
            value={ex.duration}
            onChange={(ev) => {
              const updated = [...experience];
              updated[i].duration = ev.target.value;
              setExperience(updated);
            }}
          />
        </div>
      ))}
      <button type="button" className="btn-secondary" onClick={addExperience}>
        + Add Experience
      </button>

      {/* Submit */}
      <div className="submit-wrapper">
        <button
          type="submit"
          disabled={!isFormValid}
          className={`btn-primary ${!isFormValid ? "btn-disabled" : ""}`}
        >
          Generate Resume
        </button>
      </div>
    </form>
  );
}

export default FormPage;
