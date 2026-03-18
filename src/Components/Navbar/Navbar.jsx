import React, { useRef, useState, useEffect } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const NAV_LINKS = [
  { id: 'home',     label: 'Home',      offset: 0  },
  { id: 'about',    label: 'About Me',  offset: 50 },
  { id: 'services', label: 'Services',  offset: 50 },
  { id: 'work',     label: 'Portfolio', offset: 50 },
  { id: 'feedback', label: 'Feedback',  offset: 50 },
]

const Navbar = () => {
  const [active, setActive]     = useState('home')
  const [isOpen, setIsOpen]     = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuRef    = useRef(null)
  const overlayRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const openMenu = () => {
    setIsOpen(true)
    if (menuRef.current)    menuRef.current.style.right    = '0'
    if (overlayRef.current) overlayRef.current.classList.add('open')
  }

  const closeMenu = () => {
    setIsOpen(false)
    if (menuRef.current)    menuRef.current.style.right    = '-100%'
    if (overlayRef.current) overlayRef.current.classList.remove('open')
  }

  const handleNav = (id) => {
    setActive(id)
    closeMenu()
  }

  return (
    <>
      <div ref={overlayRef} className="nav-overlay" onClick={closeMenu} />

      <nav
        className="navbar"
        style={scrolled ? {
          boxShadow: '0 8px 48px rgba(0,0,0,0.6), 0 0 80px rgba(185,35,225,0.1)',
          background: 'rgba(6, 3, 14, 0.75)',
        } : {}}
      >
        <img src={logo} alt="Logo" className="navbar-logo" />

        <button
          className="nav-mob-open"
          onClick={openMenu}
          aria-label="Open navigation"
          aria-expanded={isOpen}
        >
          <img src={menu_open} alt="" />
        </button>

        <ul ref={menuRef} className="nav-menu" role="navigation">
          <li
            className="nav-mob-close"
            onClick={closeMenu}
            role="button"
            aria-label="Close navigation"
          >
            <img src={menu_close} alt="Close" />
          </li>

          {NAV_LINKS.map(({ id, label, offset }) => (
            <li key={id} className={active === id ? 'active' : ''}>
              <AnchorLink
                className="anchor-link"
                href={`#${id}`}
                offset={offset}
                onClick={() => handleNav(id)}
              >
                {label}
              </AnchorLink>
              <span className="nav-active-dot" aria-hidden="true" />
            </li>
          ))}
        </ul>

        {/* AnchorLink is the direct element — no wrapper div */}
        <AnchorLink className="nav-connect" offset={50} href="#contact">
          Connect With Me
        </AnchorLink>
      </nav>
    </>
  )
}

export default Navbar