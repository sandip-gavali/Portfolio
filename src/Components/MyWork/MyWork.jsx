import React from 'react'
import { useNavigate } from 'react-router-dom'
import './MyWork.css'
import mywork_data from '../../assets/mywork_data'
import Arrow_icon from '../../assets/arrow_icon.svg'

const Mywork = () => {
  const navigate = useNavigate()

  const handleViewProject = (work) => {
    navigate(`/project/${work.w_no}`)   // goes to /project/1, /project/2, etc.
  }

  return (
    <div id="work" className="mywork">

      {/* Title */}
      <div className="mywork-title">
        <div className="mywork-title-eyebrow">
          <span className="mywork-title-eyebrow-dot" />
          Portfolio
        </div>
        <h1>My Latest <span>Work</span></h1>
      </div>

      {/* Grid */}
      <div className="mywork-container">
        {mywork_data.map((work, index) => (
          <div
            key={index}
            className="mywork-container-box"
            onClick={() => handleViewProject(work)}   // whole card is clickable
            style={{ cursor: 'pointer' }}
          >

            {/* Image + hover overlay */}
            <div className="mywork-img-wrap">
              <img src={work.w_img} alt={work.w_name} />
              <div className="mywork-img-overlay">
                <div className="mywork-view-icon">
                  <img src={Arrow_icon} alt="View project" />
                </div>
              </div>
            </div>

            {/* Card footer */}
            <div className="mywork-card-footer">
              <h3>{work.w_name}</h3>
              <span className="mywork-card-tag">React</span>
            </div>

          </div>
        ))}
      </div>

      {/* Show more */}
      {/* <div className="mywork-showmore">
        <p>Show More</p>
        <img src={Arrow_icon} alt="" />
      </div> */}

    </div>
  )
}

export default Mywork