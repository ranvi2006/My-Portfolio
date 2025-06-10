import React from 'react'
import "../../pages/About.css"

export default function EductionCard({edu,index}) {
  return (
    <div className="education-card" key={index}>
            <div className="card-header">
              <img src={edu.image} alt={edu.institution} className="edu-image" />
              <div className="edu-text">
                <h3>{edu.degree}</h3>
                <p className="institution">{edu.institution}</p>
                <p className="field">{edu.field}</p>
                <p className="dates">{edu.startDate} → {edu.endDate}</p>
                <p className="grade">Grade: {edu.grade}</p>
              </div>
            </div>
            <ul className="activities">
              {edu.activities.map((act, i) => (
                <li key={i}>{act}</li>
              ))}
            </ul>
            <div className="skills">
              <strong>Skills:</strong> {edu.skills.join(', ')}
            </div>
          </div>
  )
}
