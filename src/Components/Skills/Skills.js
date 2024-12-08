import React from 'react';
import './Skills.css'; // Ensure you create this CSS file

const skillsData = [
  { name: "HTML & CSS", level: "80%" },
  { name: "React JS", level: "70%" },
  { name: "JavaScript", level: "60%" },
  { name: "Next JS", level: "50%" },
  { name: "Redux", level: "60%" },
  { name: "Git & Github", level: "70%" }
];

const Skills = () => {
  return (
    <div id="Skills" className="skills">
      <div className="skills-container">
        <h2 className="skills-heading">Technical Skills</h2>
        <div className="skills-list">
          {skillsData.map((skill, index) => (
            <div key={index} className="skill">
              <p>{skill.name}</p>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: skill.level }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
