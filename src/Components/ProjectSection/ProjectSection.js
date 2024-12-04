import React from "react";
import "./ProjectSection.css";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.jpg";
import project3 from "../../assets/project3.jpg";
import project4 from "../../assets/project4.jpg";
import project5 from "../../assets/project5.png";
import project6 from "../../assets/project6.jpg";
import project7 from "../../assets/project7.jpg";
import project8 from "../../assets/project8.jpg";
// import project9 from "../../assets/project9.jpg";
import project10 from "../../assets/project10.jpg";
import project11 from "../../assets/project11.jpg";

const projects = [
  {
    id: 1,
    title: "Birthday Reminder",
    description: "Short description of Project 1.",
    image: project1,
    projectLink: "https://github.com/priyanshuwebd/Birthday-Reminder",
    sourceCode: "https://github.com/priyanshuwebd/Birthday-Reminder",
  },
  {
    id: 2,
    title: "Slider",
    description: "Short description of Project 2.",
    image: project2,
    projectLink: "https://link-to-project2.jpg",
    sourceCode: "https://github.com/priyanshuwebd/Slider",
  },
  {
    id: 3,
    title: "ToDo List",
    description: "Short description of Project 3.",
    image: project3,
    projectLink: "https://github.com/priyanshuwebd/TodoList",
    sourceCode: "https://github.com/priyanshuwebd/TodoList",
  },
  {
    id: 4,
    title: "Menu",
    description: "Short description of Project 4.",
    image: project4,
    projectLink: "https://link-to-project4.jpg",
    sourceCode: "https://github.com/priyanshuwebd/Menu",
  },
  {
    id: 5,
    title: "Increment-Decrement",
    description: "Short description of Project 5.",
    image: project5,
    projectLink: "https://link-to-project5.png",
    sourceCode: "https://github.com/priyanshuwebd/Increment-Decrement",
  },
  {
    id: 6,
    title: "Random Photogallery",
    description: "Short description of Project 6.",
    image: project6,
    projectLink: "https://link-to-project6.jpg",
    sourceCode: "https://github.com/priyanshuwebd/Photogallery",
  },
  {
    id: 7,
    title: "Pokemon Card",
    description: "Short description of Project 7.",
    image: project7,
    projectLink: "https://link-to-project7.jpg",
    sourceCode: "https://github.com/priyanshuwebd/Pokemon-Card",
  },
  {
    id: 8,
    title: "Netflix",
    description: "Short description of Project 8.",
    image: project8,
    projectLink: "https://link-to-project8.jpg",
    sourceCode: "https://github.com/priyanshuwebd/Netflix",
  },
  {
    id: 10,
    title: "Restaurant",
    description: "Short description of Project 10.",
    image: project10,
    projectLink: "https://link-to-project10.jpg",
    sourceCode: "https://github.com/priyanshuwebd/Restaurant",
  },
  {
    id: 11,
    title: "Random Image",
    description: "Short description of Project 11.",
    image: project11,
    projectLink: "https://link-to-project11.jpg",
    sourceCode: "https://github.com/priyanshuwebd/Random-Image",
  },
];

function ProjectSection() {
  return (
    <section id="projects">
      <div className="container">
        <h1 className="section-title">My Projects</h1>
        <div className="project-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-buttons">
                <a
                  href={project.projectLink}
                  className="project-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
                <a
                  href={project.sourceCode}
                  className="source-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
