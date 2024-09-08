import React, { useState } from "react";
import { ExperienceStore } from "../stores/experienceStore";

function AddExperienceInfo() {
  const { experienceList, addExperience, deleteExperience } = ExperienceStore();
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleSubmit = () => {
    addExperience({ company, position, startDate, endDate });
    // Clear the form after submission
    setCompany("");
    setPosition("");
    setStartDate("");
    setEndDate("");
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div>
      <h3>Experience</h3>
      <button onClick={toggleCollapse}>
        {isCollapsed ? "▼" : "▲"} Add Experience
      </button>
      {!isCollapsed && (
        <>
          {experienceList.length > 0 ? (
            <ul>
              {experienceList.map((experience) => (
                <li key={experience.id}>
                  <strong>{experience.company}</strong>
                  <br />
                  <button
                    className="deleteButton"
                    onClick={() => deleteExperience(experience.id)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p></p>
          )}

          <label>Company:</label>
          <br />
          <input
            type="text"
            id="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
          <br />
          <label>Position:</label>
          <br />
          <input
            type="text"
            id="position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
          <br />
          <label>Start Date:</label>
          <br />
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <br />
          <label>End Date:</label>
          <br />
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
          <br />
          <button onClick={handleSubmit}>Add</button>
        </>
      )}
    </div>
  );
}

export default AddExperienceInfo;
