import React from "react";
import "./Hero.css";
import profilepicture from "../../assets/profile-picture.jpg";

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
        </h1>
        <div className="hero-location">
          <h5>From India</h5>
        </div>
        <h3>Front-End Developer</h3>
        <div className="hero-image">
          <img
            src={profilepicture} // Use the imported image variable here
            alt="Priyanshu Pande"
            loading="lazy" // Adds lazy loading for better performance
          />
        </div>
        <div className="hero-action">
          <button 
            className="hero-connect" 
            onClick={handleScrollToContact}
            aria-label="Scroll to contact section"
          >
            Connect with me
          </button>
          <a
            href="/priyanshupanderesume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Priyanshu_Pande_Resume.pdf"
            className="hero-resume"
          >
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
