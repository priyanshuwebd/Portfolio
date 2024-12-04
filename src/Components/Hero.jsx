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
      {/* Profile Image */}
      {/* <img src={profile_img} alt="Profile" /> */}
      <h1>
        <span>I'm Priyanshu Pande,</span> From India
      </h1>
      <h3>Front-End Developer</h3>
      <div className="hero-action">
        <div className="hero-connect" onClick={handleScrollToContact}>
          Connect with me
        </div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
