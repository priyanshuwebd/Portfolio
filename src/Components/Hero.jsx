import React from 'react'
import "./Hero.css"
//  import porfile_img from "../assets/profile_img.svg"

const Hero = () => {
  return (
    <div className='hero'>
      {/* <img src={porfile_img } alt=''></img> */}
      <h1>  <span>I'm Priyanshu Pande,</span> From India</h1>
      <h3> Fron-End Developer</h3>
      <div className='hero-action'>
        <div className='hero-connect'>Connect with me </div>
        <div className='hero-resume'>My resume </div>
      </div>
    </div>
  )
}

export default Hero
