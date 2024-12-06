import React from 'react';
import './Skills.css'; // Ensure you create this CSS file

const Skills = () => {
    return (
        <div id="Skills" className="skills">
            <div className="skills-container">
                <h2 className="skills-heading">Technical Skills</h2>
                <div className="skills-list">
                    <div className="skill">
                        <p>HTML & CSS</p>
                        <hr style={{ width: "50%" }} />
                    </div>
                    <div className="skill">
                        <p>React JS</p>
                        <hr style={{ width: "70%" }} />
                    </div>
                    <div className="skill">
                        <p>JavaScript</p>
                        <hr style={{ width: "60%" }} />
                    </div>
                    <div className="skill">
                        <p>Next JS</p>
                        <hr style={{ width: "50%" }} />
                    </div>
                    <div className="skill">
                        <p>Redux</p>
                        <hr style={{ width: "60%" }} />
                    </div>
                    <div className="skill">
                        <p>Git & Github</p>
                        <hr style={{ width: "70%" }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
