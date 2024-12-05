import React from "react";
import "./Hero.css";

const Hero = () => {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="home" className="hero">
      <h1>
        <span>I'm Priyanshu Pande,</span> 
        <p>From India</p>
      </h1>
      <h3>Front-End Developer</h3>
      <div className="hero-action">
        <div className="hero-connect" onClick={handleScrollToContact}>
          Connect with me
        </div>
        {/* My Resume Button */}
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
  );
};

export default Hero;
