import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './ServiceDetail.css'
import Services_Data from '../../assets/services_data'

/* ── Per-service extended content ──────────────────────────── */
const SERVICE_EXTRA = {
  "01": {
    includes: [
      "Custom responsive layouts for all screen sizes",
      "Modern UI with clean typography and spacing",
      "Wireframing and visual hierarchy planning",
      "Color palette and branding consistency",
      "Interactive hover states and micro-animations",
    ],
    tools: [ "HTML", "CSS", "TailwindCSS"],
    process: [
      "Discovery — understand your brand, goals, and target audience",
      "Wireframe — sketch layouts and user flows",
      "Design — create high-fidelity mockups with your brand identity",
      "Review — iterate based on feedback",
      "Handoff — deliver clean, production-ready designs",
    ],
  },
  "02": {
    includes: [
      "Semantic HTML5 structure",
      "Pixel-perfect CSS implementation",
      "JavaScript interactivity and dynamic content",
      "React component architecture",
      "Cross-browser compatibility testing",
    ],
    tools: ["React", "JavaScript", "HTML5", "CSS3", "Vite", "Git"],
    process: [
      "Analysis — review designs and define component structure",
      "Setup — configure project with best-practice tooling",
      "Build — develop components with clean, maintainable code",
      "Test — verify across browsers and devices",
      "Deploy — optimized production build delivery",
    ],
  },
  "03": {
    includes: [
      "Integrating the backend with mmultiple languages",
      "Expert in  Python and Java Backend development",
      "Have Developed different types of projects with Backend and databass Connections",
    ],
    tools: ["Python", "Java", "MySQL", "SQLStarPlus", "MySQL Workbench"],
    process: [
      "Audit — review existing UX for friction points",
      "Research — analyze user behavior and patterns",
      "Redesign — propose improvements with mockups",
      "Implement — apply changes with precise CSS/JS",
      "Measure — track improvements in engagement metrics",
    ],
  },
  "04": {
    includes: [
      "Core Web Vitals improvement (LCP, FID, CLS)",
      "Image compression and lazy loading",
      "Code splitting and bundle optimization",
      "Caching strategies and CDN configuration",
      "SEO meta tags and structured data",
    ],
    tools: ["Lighthouse", "PageSpeed Insights", "Webpack", "Vite", "Chrome DevTools"],
    process: [
      "Audit — run performance diagnostics and identify bottlenecks",
      "Prioritize — rank issues by impact",
      "Optimize — apply targeted fixes for each issue",
      "Verify — re-run benchmarks to confirm improvement",
      "Report — deliver summary of changes and gains",
    ],
  },
  "05": {
    includes: [
      "Logo and visual identity guidelines",
      "Brand color palette and typography system",
      "Consistent component library",
      "Social media and digital asset templates",
      "Style guide documentation",
    ],
    tools: ["Figma", "Adobe Illustrator", "Canva", "CSS Variables", "Google Fonts"],
    process: [
      "Discovery — understand your brand values and audience",
      "Concept — explore visual directions",
      "Define — finalize palette, type, and logo system",
      "Apply — implement across web and digital assets",
      "Document — deliver a comprehensive brand guide",
    ],
  },
}

/* ── Component ─────────────────────────────────────────────── */
const ServiceDetail = () => {
  const { id }     = useParams()
  const navigate   = useNavigate()
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    const t = setTimeout(() => setLoaded(true), 1500)
    return () => clearTimeout(t)
  }, [id])

  // FIX: s_no is a string like "01", compare as string not Number
  const service = Services_Data.find((s) => s.s_no === id)
  const extra   = SERVICE_EXTRA[id] || {}

  // Related = all other services (max 3)
  const related = Services_Data.filter((s) => s.s_no !== id).slice(0, 3)

  if (!service) {
    return (
      <div className="sd-notfound">
        <h2>Service not found.</h2>
        <button onClick={() => navigate(-1)}>← Go Back</button>
      </div>
    )
  }

  return (
    <div className={`sd-page ${loaded ? 'sd-loaded' : ''}`}>

      {/* ── Loader ─────────────────────────────────────────── */}
      <div className="sd-loader" aria-hidden={loaded}>
        <div className="sd-loader-ring" />
        <p>Loading Service</p>
      </div>

      {/* ── Back ───────────────────────────────────────────── */}
      <button className="sd-back" onClick={() => navigate(-1)}>
        ← Back to Portfolio
      </button>

      {/* ── Hero card ──────────────────────────────────────── */}
      <div className="sd-hero">
        <div className="sd-hero-card">
          <div className="sd-hero-top-line" />
          <p className="sd-hero-number">Service {service.s_no}</p>
          <h1 className="sd-hero-title">{service.s_name}</h1>
          <p className="sd-hero-desc">{service.s_desc}</p>
          <div className="sd-hero-cta">
            <a className="sd-btn-primary" href="#contact" onClick={() => navigate('/#contact')}>
              Get This Service
            </a>
            <button className="sd-btn-secondary" onClick={() => navigate(-1)}>
              View All Services
            </button>
          </div>
        </div>
      </div>

      {/* ── Body grid ──────────────────────────────────────── */}
      <div className="sd-body">

        {/* What's Included */}
        {extra.includes && (
          <div className="sd-card">
            <div className="sd-card-label">
              <span className="sd-card-label-dot" />
              <h3>What's Included</h3>
              <span className="sd-card-line" />
            </div>
            <div className="sd-includes">
              {extra.includes.map((item, i) => (
                <div className="sd-include-item" key={i}>
                  <span className="sd-include-check">✓</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tools & Tech */}
        {extra.tools && (
          <div className="sd-card">
            <div className="sd-card-label">
              <span className="sd-card-label-dot" />
              <h3>Tools & Tech</h3>
              <span className="sd-card-line" />
            </div>
            <div className="sd-tags">
              {extra.tools.map((tool) => (
                <span className="sd-tag" key={tool}>{tool}</span>
              ))}
            </div>
          </div>
        )}

        {/* Process — full width */}
        {extra.process && (
          <div className="sd-card sd-card-full">
            <div className="sd-card-label">
              <span className="sd-card-label-dot" />
              <h3>My Process</h3>
              <span className="sd-card-line" />
            </div>
            <div className="sd-process">
              {extra.process.map((step, i) => (
                <div className="sd-process-step" key={i}>
                  <span className="sd-process-num">0{i + 1}</span>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* ── Related services ───────────────────────────────── */}
      <div className="sd-related">
        <div className="sd-related-label">
          <span className="sd-related-label-dot" />
          <h3>Other Services</h3>
          <span className="sd-related-line" />
        </div>
        <div className="sd-related-grid">
          {related.map((s) => (
            <div
              className="sd-related-card"
              key={s.s_no}
              onClick={() => navigate(`/serviceopen/${s.s_no}`)}
            >
              <p className="sd-related-num">{s.s_no}</p>
              <p className="sd-related-name">{s.s_name}</p>
              <p className="sd-related-desc">{s.s_desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default ServiceDetail