import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.jpg'
const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img id='about-prof' src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I’m a frontend developer who enjoys turning ideas into visually appealing and highly functional web interfaces. With a strong foundation in HTML, CSS, and JavaScript, I focus on building responsive layouts and smooth user experiences that work across all devices.</p>
            <p>Beyond just coding, I’m passionate about understanding how users interact with digital products. I constantly refine my skills, learn new tools, and experiment with techniques that enhance performance, accessibility, and design quality.</p>
          </div>
          <div className="aboutskills">
            <div className="about-skill"><p>Python</p><hr style={{ width: "100%" }} /></div>
            <div className="about-skill"><p>JAVA</p><hr style={{ width: "80%" }} /></div>
            <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "100%" }} /></div>
            <div className="about-skill"><p>Javascript</p><hr style={{ width: "100%" }} /></div>
            <div className="about-skill"><p>SQL</p><hr style={{ width: "90%" }} /></div>
            <div className="about-skill"><p>React JS</p><hr style={{ width: "70%" }} /></div>
            <div className="about-skill"><p>Django</p><hr style={{ width: "40%" }} /></div>
          </div>
        </div>
      </div>
      <div className="about-achivements">
        <div className="about-achivement">
          <h1>1+</h1>
          <p>Years Of Experience</p>
        </div>
        <hr />
        <div className="about-achivement">
          <h1>15+</h1>
          <p>Projects Completed</p>
        </div>
        <hr />
        <div className="about-achivement">
          <h1>0</h1>
          <p>Clients Yet</p>
        </div>
      </div>
    </div>
  )
}

export default About
