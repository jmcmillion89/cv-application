import React from "react";
import { ExperienceStore } from "../stores/experienceStore";

function ExperienceInfo() {
  const { experienceList } = ExperienceStore();

  return (
    <div className="experience">
      <h3>Experience Information</h3>
      {experienceList.length > 0 ? (
        <ul>
          {experienceList.map((experience) => (
            <li key={experience.id}>
              <strong>Company:</strong> {experience.company} <br />
              <strong>Position:</strong> {experience.position} <br />
              <strong>Start Date:</strong> {experience.startDate} <br />
              <strong>End Date:</strong> {experience.endDate}
            </li>
          ))}
        </ul>
      ) : (
        <p>No experience information available.</p>
      )}
    </div>
  );
}

export default ExperienceInfo;
