import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import mywork_data from '../../assets/mywork_data.js'
import './ProjectDetail.css'

const ProjectDetail = () => {
  const { id }       = useParams()
  const navigate     = useNavigate()
  const [loading, setLoading] = useState(true)

  // Hide loader after animation completes
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2200)
    return () => clearTimeout(t)
  }, [])

  const project = mywork_data.find((p) => p.w_no === Number(id))

  if (!project) {
    return (
      <div className="pd-notfound">
        <h2>Project not found.</h2>
        <button onClick={() => navigate(-1)}>← Go Back</button>
      </div>
    )
  }

  return (
    <>
      {/* ── Loader overlay ─────────────────────────────────── */}
      {loading && (
        <div className="pd-loader" aria-label="Loading project">
          <div className="pd-loader-ring" />
          <span className="pd-loader-text">Loading Project</span>
          <div className="pd-loader-bar">
            <div className="pd-loader-bar-fill" />
          </div>
        </div>
      )}

      {/* ── Page content ───────────────────────────────────── */}
      <div className="pd-page">
        <div className="pd-content-wrap">

          {/* Back */}
          <button className="pd-back" onClick={() => navigate(-1)}>
            <span className="pd-back-arrow">←</span>
            Back to Portfolio
          </button>

          {/* Hero */}
          <div className="pd-hero">
            <img src={project.w_img} alt={project.w_name} />
            <div className="pd-hero-overlay" />
            <div className="pd-hero-glow" />
            <h1 className="pd-hero-title">{project.w_name}</h1>
          </div>

          {/* Content */}
          <div className="pd-content">

            {/* About */}
            <section className="pd-section">
              <p className="pd-section-label">About the Project</p>
              <p>{project.w_desc || 'A frontend project built with modern web technologies.'}</p>
            </section>

            {/* Tech Stack */}
            {project.w_tech && (
              <section className="pd-section">
                <p className="pd-section-label">Tech Stack</p>
                <div className="pd-tags">
                  {project.w_tech.split(',').map((tech, i) => (
                    <span key={i} className="pd-tag">{tech.trim()}</span>
                  ))}
                </div>
              </section>
            )}

            {/* Features */}
            {project.w_features?.length > 0 && (
              <section className="pd-section">
                <p className="pd-section-label">Key Features</p>
                <ul className="pd-features">
                  {project.w_features.map((feature, i) => (
                    <li key={i}>
                      <span className="pd-feature-dot" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Links */}
            <section className="pd-section">
              <p className="pd-section-label">View Project</p>
              <div className="pd-links">
                {project.w_live && (
                  <a
                    className="pd-link-btn primary"
                    href={project.w_live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo ↗
                  </a>
                )}
                {project.w_github && (
                  <a
                    className="pd-link-btn secondary"
                    href={project.w_github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub →
                  </a>
                )}
                {!project.w_live && !project.w_github && (
                  <button
                    className="pd-link-btn secondary"
                    onClick={() => navigate(-1)}
                  >
                    ← Back to Portfolio
                  </button>
                )}
              </div>
            </section>

          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectDetail