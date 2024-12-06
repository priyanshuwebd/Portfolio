import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.jpg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (section) => {
    setMenu(section);
    const targetSection = document.getElementById(section);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Close menu on mobile after clicking
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="navbar-container">
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
        <li className={menu === "Skills" ? "active" : ""}>
          <p onClick={() => handleScroll("Skills")}>Skills</p>
        </li>

        <li className={menu === "contact" ? "active" : ""}>
          <p onClick={() => handleScroll("contact")}>Contact</p>
        </li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
