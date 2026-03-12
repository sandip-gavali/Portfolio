import React, { useEffect, useState } from 'react'
import profile_img from '../../assets/profile_img1.jpg'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Arrow from '../../assets/arrow_icon.svg'

const Hero = () => {

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I'm Sandip Gavali,</span> Frontend Devloper Based in Pune.</h1>
      <p>I am a frontend developer from Pune, India with 1 year Experience.</p>

      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            Connect With Me
          </AnchorLink>
        </div>
        <div className="hero-resume">
          My Resume
        </div>
      </div>

      {/* Back to Top Button */}
      <div 
        className={`back-to-top ${showButton ? "show" : ""}`}
        onClick={scrollToTop}
      >
        <img src={Arrow} alt="Back to top" />
      </div>

    </div>
  )
}

export default Hero
