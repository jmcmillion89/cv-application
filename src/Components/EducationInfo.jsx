import React from "react";
import { EducationStore } from "../stores/educationStore";

function EducationInfo() {
  const { educationList } = EducationStore();

  return (
    <div className="education">
      <h3>Education Information</h3>
      {educationList.length > 0 ? (
        <ul>
          {educationList.map((education) => (
            <li key={education.id}>
              <strong>School:</strong> {education.school} <br />
              <strong>Degree:</strong> {education.degree} <br />
              <strong>Graduation:</strong> {education.graduation} <br />
              <strong>GPA:</strong> {education.gpa}
            </li>
          ))}
        </ul>
      ) : (
        <p>No education information available.</p>
      )}
    </div>
  );
}

export default EducationInfo;
