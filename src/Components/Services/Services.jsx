import React from 'react'
import './Services.css'
import Services_Data from '../../assets/services_data'
import Arrow_icon from '../../assets/arrow_icon.svg'

const Services = () => {
  return (
    <div id="services" className="services">

      {/* Section heading */}
      <div className="services-title">
        <div className="services-title-eyebrow">
          <span className="services-title-eyebrow-dot" />
          What I Offer
        </div>
        <h1>My <span>Services</span></h1>
        <p>
          From pixel-perfect interfaces to performant code —
          here's how I bring your vision to life.
        </p>
      </div>

      {/* Cards */}
      <div className="services-container">
        {Services_Data.map((service, index) => (
          <div key={index} className="services-format">
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <div className="services-divider" />
            <p>{service.s_desc}</p>
            <div className="services-readmore">
              <p>Read More</p>
              <img src={Arrow_icon} alt="" />
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Services