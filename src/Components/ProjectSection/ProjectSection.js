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
import project10 from "../../assets/project10.jpg";
// import project11 from "../../assets/project11.jpg";

const projects = [
  {
    id: 1,
    title: "Birthday Reminder",
    description: "A simple app to remind you about birthdays.",
    image: project1,
    projectLink: "https://charming-melomakarona-a3a697.netlify.app/",
    sourceCode: "https://github.com/priyanshuwebd/Birthday-Reminder",
  },
  {
    id: 2,
    title: "Slider",
    description: "An image slider component built with React.",
    image: project2,
    projectLink: "https://jolly-lamington-7d51bb.netlify.app/",
    sourceCode: "https://github.com/priyanshuwebd/Slider",
  },
  {
    id: 3,
    title: "ToDo List",
    description: "A task management app built with React.",
    image: project3,
    projectLink: "https://github.com/priyanshuwebd/TodoList",
    sourceCode: "https://github.com/priyanshuwebd/Todo-list",
  },
  {
    id: 4,
    title: "Menu",
    description: "A simple menu app built with React.",
    image: project4,
    projectLink: "https://link-to-project4.jpg",
    sourceCode: "https://github.com/priyanshuwebd/Menu-",
  },
  {
    id: 5,
    title: "Increment-Decrement",
    description: "A simple app to demonstrate increment and decrement functionality.",
    image: project5,
    projectLink: "https://transcendent-jelly-95c340.netlify.app/",
    sourceCode: "https://github.com/priyanshuwebd/Increment-Decrement",
  },
  {
    id: 6,
    title: "Random Photogallery",
    description: "A gallery app that fetches random images from an API.",
    image: project6,
    projectLink: "https://link-to-project6.jpg",
    sourceCode: "https://github.com/priyanshuwebd/Photogellary",
  },
  {
    id: 7,
    title: "Pokemon Card",
    description: "A card-based UI displaying information about Pokemon.",
    image: project7,
    projectLink: "https://chimerical-genie-fe871a.netlify.app/",
    sourceCode: "https://github.com/priyanshuwebd/pokemaon-card",
  },
  {
    id: 8,
    title: "Netflix",
    description: "A Netflix-like clone built with React.",
    image: project8,
    projectLink: "https://link-to-project8.jpg",
    sourceCode: "https://github.com/priyanshuwebd/Netflix",
  },
  {
    id: 10,
    title: "Restaurant",
    description: "A restaurant website UI with menu items.",
    image: project10,
    projectLink: "https://link-to-project10.jpg",
    sourceCode: "https://github.com/priyanshuwebd/resturant",
  },
  // {
  //   id: 11,
  //   title: "Random Image",
  //   description: "Displays a random image from an API.",
  //   image: project11,
  //   projectLink: "https://link-to-project11.jpg",
  //   sourceCode: "https://github.com/priyanshuwebd/Randome-Image",
  // },
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
