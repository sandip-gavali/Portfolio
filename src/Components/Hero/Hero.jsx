import React, { useEffect, useState } from 'react'
import profile_img from '../../assets/Profile.png'
// import profile_img from '../../assets/profile_img1.jpg'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Arrow from '../../assets/arrow_icon.svg'

const Hero = () => {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowButton(window.scrollY > 300)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <div id="home" className="hero">
      {/* Ambient dot grid texture */}
      <div className="hero-bg-grid" aria-hidden="true" />

      {/* Profile with spinning ring */}
      <div className="hero-img-wrap">
        <img className="hero-img" src={profile_img} alt="Sandip Gavali" />
      </div>

      {/* Live badge */}
      <div className="hero-tag" aria-label="Available for work">
        <span className="hero-tag-dot" />
        Available for Work
      </div>

      {/* Headline */}
      <h1>
        <span className="hero-name">I'm Sandip Gavali,</span>
        <br />
        Frontend Developer Based in Pune.
      </h1>

      {/* Sub-copy */}
      <p>
        Building pixel-perfect, performant web experiences from Pandharpur, India —
        1 year of turning ideas into interfaces.
      </p>

      {/* CTA buttons */}
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
        <div className="hero-resume">
          My Resume
        </div>
      </div>

      {/* Scroll nudge */}
      <div className="hero-scroll" aria-hidden="true">
        <span>Scroll</span>
        <div className="hero-scroll-line" />
      </div>

      {/* Back to top */}
      <div
        className={`back-to-top ${showButton ? 'show' : ''}`}
        onClick={scrollToTop}
        role="button"
        aria-label="Back to top"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && scrollToTop()}
      >
        <img src={Arrow} alt="" />
      </div>
    </div>
  )
}

export default Hero