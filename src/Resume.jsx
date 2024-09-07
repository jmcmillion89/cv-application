import React from "react";
import EducationInfo from "./Components/EducationInfo";
import ExperienceInfo from "./Components/ExperienceInfo";
import PersonalInfo from "./Components/PersonalInfo";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
// import "./index.css"; // Import the CSS file

function Resume() {
  const saveAsPDF = () => {
    const input = document.getElementById("resume-content");
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const width = imgWidth * ratio;
      const height = imgHeight * ratio;
      pdf.addImage(imgData, "PNG", 0, 0, width, height);
      pdf.save("resume.pdf");
    });
  };

  return (
    <div className="resume">
      <button onClick={saveAsPDF}>Save as PDF</button>
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
