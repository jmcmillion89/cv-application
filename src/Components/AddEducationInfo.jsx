import React, { useState, useRef } from "react";
import { EducationStore } from "../stores/educationStore";

const AddEducationInfo = () => {
  const { educationList, addEducation, deleteEducation } = EducationStore();
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [graduation, setGraduation] = useState("");
  const [gpa, setGpa] = useState("");
  const [isCollapsed, setIsCollapsed] = useState(true);

  const schoolRef = useRef(null);
  const degreeRef = useRef(null);
  const graduationRef = useRef(null);
  const gpaRef = useRef(null);

  const handleSubmit = () => {
    if (!school) {
      schoolRef.current.focus();
      return;
    }
    if (!degree) {
      degreeRef.current.focus();
      return;
    }
    if (!graduation) {
      graduationRef.current.focus();
      return;
    }
    if (!gpa) {
      gpaRef.current.focus();
      return;
    }
    addEducation({ school, degree, graduation, gpa });
    // Clear the form after submission
    setSchool("");
    setDegree("");
    setGraduation("");
    setGpa("");
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div>
      <h3>Education</h3>
      <button onClick={toggleCollapse}>
        {isCollapsed ? "▼" : "▲"} Add Education
      </button>
      {!isCollapsed && (
        <>
          {educationList.length > 0 ? (
            <ul>
              {educationList.map((education) => (
                <li key={education.id}>
                  <strong>{education.school} </strong>
                  <br />
                  <button onClick={() => deleteEducation(education.id)}>
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p></p>
          )}

          <label>School:</label>
          <br />
          <input
            type="text"
            id="school"
            value={school}
            onChange={(e) => setSchool(e.target.value)}
            ref={schoolRef}
            required
          />
          <br />
          <label>Degree:</label>
          <br />
          <input
            type="text"
            id="degree"
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
            ref={degreeRef}
            required
          />
          <br />
          <label>Graduation:</label>
          <br />
          <input
            type="date"
            id="graduation"
            value={graduation}
            onChange={(e) => setGraduation(e.target.value)}
            ref={graduationRef}
            required
          />
          <br />
          <label>GPA:</label>
          <br />
          <input
            type="number"
            id="gpa"
            value={gpa}
            onChange={(e) => setGpa(e.target.value)}
            step="0.01"
            min="0"
            max="9.99"
            ref={gpaRef}
            required
          />
          <br />
          <button onClick={handleSubmit}>Submit</button>
        </>
      )}
    </div>
  );
};

export default AddEducationInfo;
