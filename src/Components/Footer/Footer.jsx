import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/logo.png'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div id="feedback" className="footer">

      {/* Main grid body */}
      <div className="footer-body">

        {/* Brand */}
        <div className="footer-brand">
          <img src={footer_logo} alt="Sandip Gavali" />
          <p>
            Frontend developer from Pune, India — crafting responsive,
            pixel-perfect interfaces with 1 year of hands-on experience.
          </p>
          <div className="footer-socials">
            <a className="footer-social-btn" href="https://github.com" target="_blank" rel="noreferrer">GH</a>
            <a className="footer-social-btn" href="https://linkedin.com" target="_blank" rel="noreferrer">LI</a>
            <a className="footer-social-btn" href="https://twitter.com" target="_blank" rel="noreferrer">TW</a>
          </div>
        </div>

        {/* Quick links */}
        <div className="footer-links">
          <p className="footer-links-label">Quick Links</p>
          <p>Home</p>
          <p>About Me</p>
          <p>Services</p>
          <p>Portfolio</p>
          <p>Contact</p>
        </div>

        {/* Newsletter */}
        <div className="footer-newsletter">
          <p className="footer-newsletter-label">Stay Updated</p>
          <p>Get notified about new projects and articles.</p>
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Enter your email" />
            <div className="footer-subscribe">Subscribe</div>
          </div>
        </div>

      </div>

      <hr />

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2025 Sandip Gavali. All rights reserved.</p>
        <div className="footer-bottom-right">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Connect With Me</p>
        </div>
      </div>

    </div>
  )
}

export default Footer