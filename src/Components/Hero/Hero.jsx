import React from "react";
import "./Hero.css";
// import profilePicture from "./assets/profile-picture.jpg"; // Proper import of the image

const Hero = () => {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="home" className="hero">
      <div className="hero-content">
  <h1>
    <span className="animated-text">I'm Priyanshu Pande,</span>
    <h5>From India</h5>
  </h1>
  <h3>Front-End Developer</h3>
  <div className="hero-action">
    <button className="hero-connect" onClick={handleScrollToContact}>
      Connect with me
    </button>
    <a
      href="/priyanshupanderesume.pdf"
      target="_blank"
      download="Priyanshu_Pande_Resume.pdf"
      className="hero-resume"
    >
      My resume
    </a>
  </div>
</div>

      <div className="hero-image">
  <img
    // src="/assets/profile-picture.jpg" // Use relative path from the public folder
    alt="Priyanshu Pande"
  />
</div>

    </div>
  );
};

export default Hero;
