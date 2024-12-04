import React, { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  const handleScroll = (section) => {
    setMenu(section); // Highlight active menu
    const targetSection = document.getElementById(section);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" }); // Smooth scroll
    }
  };

  return (
    <div className="navbar">
      <ul className="nav-menu">
        <li className={menu === "home" ? "active" : ""}>
          <p onClick={() => handleScroll("home")}>Home</p>
        </li>
        <li className={menu === "about" ? "active" : ""}>
          <p onClick={() => handleScroll("about")}>About Me</p>
        </li>
        <li className={menu === "projects" ? "active" : ""}>
          <p onClick={() => handleScroll("projects")}>My Project</p>
        </li>
        <li className={menu === "contact" ? "active" : ""}>
          <p onClick={() => handleScroll("contact")}>Contact</p>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
