import React, { useState } from 'react'
import './Footer.css'
import footer_logo from '../../assets/logo.png'
import user_icon from '../../assets/user_icon.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const QUICK_LINKS = [
  { label: 'Home',      href: '#home',     offset: 0  },
  { label: 'About Me',  href: '#about',    offset: 50 },
  { label: 'Services',  href: '#services', offset: 50 },
  { label: 'Portfolio', href: '#work',     offset: 50 },
  { label: 'Contact',   href: '#contact',  offset: 50 },
]

const SOCIALS = [
  { label: 'GH', href: 'https://github.com/sandip-gavali',                title: 'GitHub'   },
  { label: 'LI', href: 'https://linkedin.com/in/sandip-gavali-074ba4270', title: 'LinkedIn' },
  { label: 'TW', href: 'https://twitter.com',                             title: 'Twitter'  },
]

const Footer = () => {
  const [subEmail,  setSubEmail]  = useState('')
  const [subStatus, setSubStatus] = useState(null)

  const handleSubscribe = () => {
    const rx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!subEmail.trim() || !rx.test(subEmail.trim())) {
      setSubStatus('err')
      setTimeout(() => setSubStatus(null), 3000)
      return
    }
    setSubStatus('ok')
    setSubEmail('')
    setTimeout(() => setSubStatus(null), 4000)
  }

  return (
    <div id="feedback" className="footer">

      <div className="footer-body">

        {/* Brand */}
        <div className="footer-brand">
          <img src={footer_logo} alt="Sandip Gavali" />
          <p>
            Frontend developer from Pune, India — crafting responsive,
            pixel-perfect interfaces with 1 year of hands-on experience.
          </p>
          <div className="footer-socials">
            {SOCIALS.map(({ label, href, title }) => (
              <a key={label} className="footer-social-btn" href={href}
                 target="_blank" rel="noreferrer" title={title}>
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div className="footer-links">
          <p className="footer-links-label">Quick Links</p>
          {QUICK_LINKS.map(({ label, href, offset }) => (
            <AnchorLink key={label} className="footer-anchor" href={href} offset={offset}>
              {label}
            </AnchorLink>
          ))}
        </div>

        {/* Newsletter */}
        <div className="footer-newsletter">
          <p className="footer-newsletter-label">Stay Updated</p>
          <p>Get notified about new projects and updates.</p>
          <div className={`footer-email-input ${subStatus === 'err' ? 'input-err' : subStatus === 'ok' ? 'input-ok' : ''}`}>
            <img src={user_icon} alt="" />
            <input
              type="email"
              placeholder="Enter your email"
              value={subEmail}
              onChange={(e) => { setSubEmail(e.target.value); setSubStatus(null) }}
              onKeyDown={(e) => e.key === 'Enter' && handleSubscribe()}
            />
            <div
              className={`footer-subscribe ${subStatus === 'ok' ? 'subscribed' : ''}`}
              onClick={handleSubscribe}
            >
              {subStatus === 'ok' ? '✓ Done!' : 'Subscribe'}
            </div>
          </div>
          {subStatus === 'err' && (
            <span className="footer-sub-error">Please enter a valid email.</span>
          )}
        </div>

      </div>

      <hr />

      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © {new Date().getFullYear()} Sandip Gavali. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <AnchorLink className="footer-bottom-connect" href="#contact" offset={50}>
            Connect With Me
          </AnchorLink>
        </div>
      </div>

    </div>
  )
}

export default Footer