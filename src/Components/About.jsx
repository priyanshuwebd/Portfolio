import React from 'react'
import "./About.css"
// import theme_pattern from "../assets/theme_pattern.svg"
//  import porfile_img from "../assets/profile_img.svg"


const About = () => {
    return (
        <div id='about' className='about'>
            <div className='about-title'>
                <h1> About Me</h1>
                {/* <img src={theme_pattern}></img> */}
            </div>
            <div className='about-section'>
                <div className='about-left'>
                    {/* <img src={porfile_img} alt=''/> */}
                </div>
                <div className='about-right'>
                    <div className='about-para'>
                        <p>Hi, I’m Priyanshu Pande! I’m a passionate front-end developer eager
                            to bring designs to life with clean and responsive code.
                            Skilled in HTML, CSS, JavaScript, React, and Redux,
                            I enjoy creating user-friendly and visually appealing websites.
                            Though I’m just starting my journey, I’m excited to grow and take on new challenges.
                            Let’s build something amazing together!</p>
                    </div>
                    <div className='about-skills'>
                        <div className='about-skill'><p>HTML & CSS</p> <hr style={{width:"50%"}}/></div>
                        <div className='about-skill'><p>React JS</p> <hr style={{width:"70%"}}/></div>
                        <div className='about-skill'><p>JavaScript</p> <hr style={{width:"60%"}}/></div>
                        <div className='about-skill'><p>Next JS</p> <hr style={{width:"50%"}}/></div>
                        <div className='about-skill'><p>Redux</p> <hr style={{width:"60%"}}/></div>
                        <div className='about-skill'><p>Git & Github</p> <hr style={{width:"70%"}}/></div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default About
