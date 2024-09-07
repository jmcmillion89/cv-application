import React from "react";
import EducationInfo from "./Components/EducationInfo";
import ExperienceInfo from "./Components/ExperienceInfo";
import PersonalInfo from "./Components/PersonalInfo";
// import "./index.css"; // Import the CSS file

function Resume() {
  return (
    <div className="resume">
      <div id="resume-content" className="resume-container">
        <div className="personal-info">
          <PersonalInfo />
        </div>
        <div className="education-info">
          <EducationInfo />
        </div>
        <div className="experience-info">
          <ExperienceInfo />
        </div>
      </div>
    </div>
  );
}

export default Resume;
