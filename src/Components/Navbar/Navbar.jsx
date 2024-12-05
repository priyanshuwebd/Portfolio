import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (section) => {
    setMenu(section);
    const targetSection = document.getElementById(section);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Close the menu on mobile after clicking
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">My Portfolio</h1>
        <button
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>
      </div>
      <ul className={`nav-menu ${isOpen ? "open" : ""}`}>
        <li className={menu === "home" ? "active" : ""}>
          <p onClick={() => handleScroll("home")}>Home</p>
        </li>
        <li className={menu === "about" ? "active" : ""}>
          <p onClick={() => handleScroll("about")}>About</p>
        </li>
        <li className={menu === "projects" ? "active" : ""}>
          <p onClick={() => handleScroll("projects")}>Projects</p>
        </li>
        <li className={menu === "contact" ? "active contact-highlight" : ""}>
          <p onClick={() => handleScroll("contact")}>Contact</p>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
