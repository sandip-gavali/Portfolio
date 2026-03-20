import React from 'react'
import './About.css'
import profile_img from '../../assets/about_profile.png'

const SKILLS = [
  { name: 'HTML & CSS',   pct: 100 },
  { name: 'JavaScript',   pct: 100 },
  { name: 'React JS',     pct: 70  },
  { name: 'Python',       pct: 100 },
  { name: 'SQL',          pct: 90  },
  { name: 'Java',         pct: 80  },
  { name: 'Django',       pct: 40  },
]

const ACHIEVEMENTS = [
  { value: '1+',  label: 'Years of\nExperience' },
  { value: '15+', label: 'Projects\nCompleted'  },
  { value: '0',   label: 'Clients\nSo Far'      },
]

const About = () => {
  return (
    <div id="about" className="about">

      {/* Title */}
      <div className="about-title">
        <div className="about-title-eyebrow">
          <span className="about-title-eyebrow-dot" />
          Who I Am
        </div>
        <h1>About <span>Me</span></h1>
      </div>

      {/* Sections */}
      <div className="about-sections">

        {/* Left: profile photo */}
        <div className="about-left">
          <div className="about-img-wrap">
            <img id="about-prof" src={profile_img} alt="Sandip Gavali" />
          </div>
        </div>

        {/* Right: bio + skills */}
        <div className="about-right">

          <div className="about-para">
            <p>
              I'm a frontend developer who enjoys turning ideas into visually
              appealing and highly functional web interfaces. With a strong
              foundation in HTML, CSS, and JavaScript, I focus on building
              responsive layouts and smooth user experiences that work across
              all devices.
            </p>
            <p>
              Beyond just coding, I'm passionate about understanding how users
              interact with digital products. I constantly refine my skills,
              learn new tools, and experiment with techniques that enhance
              performance, accessibility, and design quality.
            </p>
          </div>

          {/* Skill bars */}
          <div className="about-skills">
            <p className="about-skills-label">Tech Stack</p>
            {SKILLS.map(({ name, pct }, i) => (
              <div className="about-skill" key={name}>
                <p>{name}</p>
                <div className="about-skill-track">
                  <div
                    className="about-skill-fill"
                    style={{
                      width: `${pct}%`,
                      animationDelay: `${i * 0.08}s`,
                    }}
                  />
                </div>
                <span className="about-skill-pct">{pct}%</span>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Achievements strip */}
      <div className="about-achivements">
        {ACHIEVEMENTS.map(({ value, label }) => (
          <div className="about-achivement" key={value + label}>
            <h1>{value}</h1>
            <p>{label}</p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default About