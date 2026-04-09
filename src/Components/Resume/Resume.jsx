import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Resume.css'
import resumePDF from '../../assets/resume.pdf'

/* ── Data ──────────────────────────────────────────────────── */
const SKILLS = [
  { name: 'HTML & CSS',    pct: 100 },
  { name: 'JavaScript',    pct: 90  },
  { name: 'React JS',      pct: 70  },
  { name: 'Python',        pct: 85  },
  { name: 'Flask',         pct: 65  },
  { name: 'MySQL',         pct: 80  },
  { name: 'Java',          pct: 55  },
]

const TOOLS = ['VS Code', 'GitHub', 'MySQL Workbench', 'Git', 'Figma', 'Chrome DevTools']

const STRENGTHS = ['Quick Learner', 'Problem Solving', 'Communication', 'Adaptability', 'Team Player', 'Detail Oriented']

const EDUCATION = [
    {
      title: 'B.Tech – Computer Science and Engineering',
      sub: 'Currently Pursuing',
      badge: 'In Progress',
      desc: 'Web Development, Backend Development (Python/Flask), Database Handling (MySQL), React JS',
    },
    {
      title: 'Full Stack Development',
      sub: 'Currently Pursuing',
      badge: 'Completed',
      desc: 'Web Development, Backend Development (Python/Flask), Database Handling (MySQL), React JS',
    },
  {
    title: 'Diploma – Automobile Engineering',
    sub: 'Completed',
    badge: 'Completed',
    desc: 'Foundation in engineering principles, technical drawing, and mechanical systems.',
  },
]

const PROJECTS = [
  {
    title: 'Expense Tracker',
    badge: 'Python + MySQL',
    desc: 'Full-featured expense tracking application with custom database schema (exp_tracker). Supports expense logging, category management, and data analysis.',
    chips: ['Python', 'MySQL', 'CLI'],
  },
  {
    title: 'Tech Store Management System',
    badge: 'MySQL',
    desc: 'Structured relational database for managing product inventory, sales records, and store operations.',
    chips: ['MySQL', 'Database Design'],
  },
  {
    title: 'BMW Website Clone',
    badge: 'Frontend',
    desc: 'Pixel-perfect frontend clone of the BMW website focused on responsive layouts, animations, and UI fidelity.',
    chips: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Myntra Website Clone',
    badge: 'Frontend',
    desc: 'E-commerce UI clone of Myntra with product grid, filters, and responsive mobile layout.',
    chips: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Developer Portfolio',
    badge: 'React',
    desc: 'This portfolio — built with React, featuring glassmorphism design, smooth scroll, project detail pages, and a contact form via Web3Forms.',
    chips: ['React', 'CSS', 'React Router'],
  },
]

/* ── Component ─────────────────────────────────────────────── */
const Resume = () => {
  const navigate = useNavigate()
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    // mark loaded after the loader animation window (1.4s fade + slight buffer)
    const t = setTimeout(() => setLoaded(true), 1500)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className={`resume-page ${loaded ? 'resume-loaded' : ''}`}>

      {/* ── Loader ─────────────────────────────────────────── */}
      <div className="resume-loader" aria-hidden={loaded}>
        <div className="resume-loader-ring" />
        <p>Loading Resume</p>
      </div>

      {/* ── Back ───────────────────────────────────────────── */}
      <button className="resume-back" onClick={() => navigate(-1)}>
        <span className="resume-back-arrow">←</span>
        Back to Portfolio
      </button>

      {/* ── Hero card ──────────────────────────────────────── */}
      <div className="resume-hero" style={{ margin: '0 auto 48px', maxWidth: 900, padding: '48px 52px' }}>
        <div className="resume-hero-top">
          <div>
            <h1 className="resume-hero-name">Sandip Gavali</h1>
            <p className="resume-hero-role">Full Stack Developer · Pune, Maharashtra, India</p>
            <div className="resume-hero-contacts">
              <a className="resume-contact-chip" href="mailto:gavalisandip201@gmail.com">
                <span className="resume-contact-chip-icon">✉</span>
                gavalisandip201@gmail.com
              </a>
              <a className="resume-contact-chip" href="tel:+919022400662">
                <span className="resume-contact-chip-icon">✆</span>
                +91-9022-XXX-662
              </a>
              <a className="resume-contact-chip" href="https://github.com/sandip-gavali" target="_blank" rel="noreferrer">
                <span className="resume-contact-chip-icon">⌥</span>
                github.com/sandip-gavali
              </a>
              <a className="resume-contact-chip" href="https://linkedin.com/in/sandip-gavali-074ba4270" target="_blank" rel="noreferrer">
                <span className="resume-contact-chip-icon">◈</span>
                linkedin/sandip-gavali
              </a>
            </div>
          </div>

          {/* Download CV */}
          <a
            className="resume-download-btn"
            href={resumePDF}
            download="Sandip_Gavali_Resume.pdf"
          >
            ↓ Download CV
          </a>
        </div>

        <p className="resume-objective">
          Motivated and detail-oriented Full Stack Developer with strong skills in JavaScript,
          Python, HTML, CSS, and MySQL. Seeking an opportunity to apply technical and
          problem-solving abilities in real-world projects while continuously learning and
          growing in a professional environment.
        </p>
      </div>

      {/* ── Body grid ──────────────────────────────────────── */}
      <div className="resume-body">

        {/* Skills */}
        <div className="resume-section" style={{ '--delay': '0s' }}>
          <div className="resume-section-label">
            <span className="resume-section-label-dot" />
            <h2>Technical Skills</h2>
            <span className="resume-section-line" />
          </div>
          <div className="resume-skills-group">
            {SKILLS.map(({ name, pct }, i) => (
              <div className="resume-skill-row" key={name}>
                <div className="resume-skill-meta">
                  <span className="resume-skill-name">{name}</span>
                  <span className="resume-skill-pct">{pct}%</span>
                </div>
                <div className="resume-skill-track">
                  <div
                    className="resume-skill-fill"
                    style={{ width: `${pct}%`, animationDelay: `${1.9 + i * 0.08}s` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools + Strengths */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div className="resume-section" style={{ '--delay': '0.1s' }}>
            <div className="resume-section-label">
              <span className="resume-section-label-dot" />
              <h2>Tools</h2>
              <span className="resume-section-line" />
            </div>
            <div className="resume-tags">
              {TOOLS.map((t) => <span className="resume-tag" key={t}>{t}</span>)}
            </div>
          </div>

          <div className="resume-section" style={{ '--delay': '0.15s' }}>
            <div className="resume-section-label">
              <span className="resume-section-label-dot" />
              <h2>Strengths</h2>
              <span className="resume-section-line" />
            </div>
            <div className="resume-tags">
              {STRENGTHS.map((s) => <span className="resume-tag" key={s}>{s}</span>)}
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="resume-section" style={{ '--delay': '0.2s' }}>
          <div className="resume-section-label">
            <span className="resume-section-label-dot" />
            <h2>Education</h2>
            <span className="resume-section-line" />
          </div>
          <div className="resume-items">
            {EDUCATION.map((e) => (
              <div className="resume-item" key={e.title}>
                <div className="resume-item-top">
                  <p className="resume-item-title">{e.title}</p>
                  <span className="resume-item-badge">{e.badge}</span>
                </div>
                <p className="resume-item-sub">{e.sub}</p>
                <p className="resume-item-desc">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Projects — full width */}
        <div className="resume-section resume-section-full" style={{ '--delay': '0.25s' }}>
          <div className="resume-section-label">
            <span className="resume-section-label-dot" />
            <h2>Projects</h2>
            <span className="resume-section-line" />
          </div>
          <div className="resume-items" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 16 }}>
            {PROJECTS.map((p) => (
              <div className="resume-item" key={p.title}>
                <div className="resume-item-top">
                  <p className="resume-item-title">{p.title}</p>
                  <span className="resume-item-badge">{p.badge}</span>
                </div>
                <p className="resume-item-desc">{p.desc}</p>
                <div className="resume-item-chips">
                  {p.chips.map((c) => <span className="resume-item-chip" key={c}>{c}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Resume