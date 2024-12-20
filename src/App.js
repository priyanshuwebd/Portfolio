import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import ProjectSection from "./Components/ProjectSection/ProjectSection";
import Contact from "./Components/Contact/Contact";
import Skills from "./Components/Skills/Skills";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <ProjectSection />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
