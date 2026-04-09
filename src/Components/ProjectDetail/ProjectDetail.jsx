import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import mywork_data from '../../assets/mywork_data.js'
import './ProjectDetail.css'

const ProjectDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [lightbox, setLightbox] = useState(false)
  const [activeImg, setActiveImg] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
    const t = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(t)
  }, [id])

  useEffect(() => {
    const handler = (e) => {
      if (!lightbox) return
      if (e.key === 'Escape') setLightbox(false)
      if (e.key === 'ArrowLeft') setActiveImg(i => (i - 1 + images.length) % images.length)
      if (e.key === 'ArrowRight') setActiveImg(i => (i + 1) % images.length)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightbox])

  const project = mywork_data.find((p) => p.w_no === Number(id))

  if (!project) {
    return (
      <div className="pd-notfound">
        <h2>Project not found.</h2>
        <button onClick={() => navigate(-1)}>← Go Back</button>
      </div>
    )
  }

  /* Support w_images array OR fall back to single w_img */
  const images = project.w_images?.length
    ? project.w_images
    : [{ src: project.w_img, caption: project.w_name }]

  const step = (dir) =>
    setActiveImg(i => (i + dir + images.length) % images.length)

  return (
    <>
      {/* ── Loader ──────────────────────────────────────────── */}
      {loading && (
        <div className="pd-loader" aria-label="Loading project">
          <span className="pd-loader-label">Loading Project</span>
          <div className="pd-loader-track">
            <div className="pd-loader-fill" />
          </div>
        </div>
      )}

      {/* ── Page ────────────────────────────────────────────── */}
      <div className="pd-page">

        {/* Nav */}
        <nav className="pd-topbar">
          <span className="pd-logo">Portfolio</span>
          <button className="pd-back" onClick={() => navigate(-1)}>← Back to work</button>
        </nav>

        {/* Hero split */}
        <div className="pd-hero">
          <div className="pd-hero-left">
            <p className="pd-project-index">Project No. {String(project.w_no).padStart(2, '0')}</p>
            <h1 className="pd-project-title">{project.w_name}</h1>
            <p className="pd-project-sub">
              {project.w_desc || 'A frontend project built with modern web technologies.'}
            </p>
            <div className="pd-hero-actions">
              {project.w_live && (
                <a className="pd-btn-primary" href={project.w_live} target="_blank" rel="noreferrer">
                  Live Demo ↗
                </a>
              )}
              {project.w_github && (
                <a className="pd-btn-secondary" href={project.w_github} target="_blank" rel="noreferrer">
                  GitHub →
                </a>
              )}
            </div>
          </div>
          <div className="pd-hero-right">
            <img src={project.w_img} alt={project.w_name} className="pd-hero-img" />
          </div>
        </div>

        {/* Content + Sidebar */}
        <div className="pd-content-grid">
          <div className="pd-main">

            {/* About */}
            <section className="pd-section">
              <p className="pd-eyebrow">About the project</p>
              <p className="pd-body">
                {project.w_desc || 'A frontend project built with modern web technologies.'}
              </p>
            </section>

            {/* Tech Stack */}
            {project.w_tech && (
              <section className="pd-section">
                <p className="pd-eyebrow">Tech stack</p>
                <div className="pd-tech-grid">
                  {project.w_tech.split(',').map((tech, i) => (
                    <span key={i} className="pd-tech-pill">{tech.trim()}</span>
                  ))}
                </div>
              </section>
            )}

            {/* Features */}
            {project.w_features?.length > 0 && (
              <section className="pd-section">
                <p className="pd-eyebrow">Key features</p>
                <ul className="pd-features">
                  {project.w_features.map((f, i) => (
                    <li key={i}>
                      <span className="pd-feat-num">{String(i + 1).padStart(2, '0')}</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </section>
            )}

          </div>

          {/* Sidebar */}
          <aside className="pd-sidebar">
            <div className="pd-sidebar-card">
              <p className="pd-sidebar-label">Project info</p>
              <div className="pd-stat-list">
                {project.w_year && (
                  <div className="pd-stat-row">
                    <span className="pd-stat-key">Year</span>
                    <span className="pd-stat-val">{project.w_year}</span>
                  </div>
                )}
                {project.w_role && (
                  <div className="pd-stat-row">
                    <span className="pd-stat-key">Role</span>
                    <span className="pd-stat-val">{project.w_role}</span>
                  </div>
                )}
                {project.w_duration && (
                  <div className="pd-stat-row">
                    <span className="pd-stat-key">Duration</span>
                    <span className="pd-stat-val">{project.w_duration}</span>
                  </div>
                )}
                {project.w_status && (
                  <div className="pd-stat-row">
                    <span className="pd-stat-key">Status</span>
                    <span className="pd-status-badge">{project.w_status}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="pd-sidebar-card">
              <p className="pd-sidebar-label">Links</p>
              <div className="pd-sidebar-links">
                {project.w_live && (
                  <a className="pd-btn-primary" href={project.w_live} target="_blank" rel="noreferrer">
                    Live Demo ↗
                  </a>
                )}
                {project.w_github && (
                  <a className="pd-btn-secondary" href={project.w_github} target="_blank" rel="noreferrer">
                    GitHub →
                  </a>
                )}
              </div>
            </div>
          </aside>
        </div>

        {/* ── Image Gallery ────────────────────────────────── */}
        <section className="pd-gallery-section">
          <div className="pd-gallery-header">
            <p className="pd-eyebrow">Project gallery</p>
            <h2 className="pd-gallery-title">See the work in detail</h2>
          </div>

          <div className="pd-gallery-grid">
            {images.map((img, i) => (
              <div
                key={i}
                className={`pd-gallery-item ${i === 0 ? 'featured' : ''}`}
                onClick={() => { setActiveImg(i); setLightbox(true) }}
              >
                <img src={img.src || img} alt={img.caption || `Screenshot ${i + 1}`} />
                <div className="pd-gallery-overlay">
                  <span className="pd-gallery-zoom">+</span>
                </div>
                {img.caption && (
                  <div className="pd-gallery-caption">{img.caption}</div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="pd-footer">
          <span className="pd-footer-name">{project.w_name}</span>
          <button className="pd-back" onClick={() => navigate(-1)}>← Back to portfolio</button>
        </footer>

      </div>

      {/* ── Lightbox ────────────────────────────────────────── */}
      {lightbox && (
        <div className="pd-lightbox" onClick={(e) => e.target === e.currentTarget && setLightbox(false)}>
          <button className="pd-lb-close" onClick={() => setLightbox(false)}>✕</button>
          <img
            className="pd-lb-img"
            src={images[activeImg]?.src || images[activeImg]}
            alt={images[activeImg]?.caption || `Screenshot ${activeImg + 1}`}
          />
          {images[activeImg]?.caption && (
            <p className="pd-lb-caption">{images[activeImg].caption}</p>
          )}
          <div className="pd-lb-nav">
            <button className="pd-lb-btn" onClick={() => step(-1)}>‹</button>
            <span className="pd-lb-counter">{activeImg + 1} / {images.length}</span>
            <button className="pd-lb-btn" onClick={() => step(1)}>›</button>
          </div>
        </div>
      )}
    </>
  )
}

export default ProjectDetail