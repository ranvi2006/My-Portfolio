import React from 'react';
import './ProjectCard.css'; // Create and import this CSS file

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img 
        src={project.projectImage} 
        alt={project.title} 
        className="project-image"
      />
      
      <h1 className="project-name">{project.title}</h1>
      
      <p className="project-details">{project.detailedDescription}</p>
      
      <div className="project-buttons">
        <a 
          href={project.liveDemoLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn visit-btn"
        >
          Visit
        </a>
        <a 
          href={project.githubLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn code-btn"
        >
          Show Code
        </a>
      </div>
    </div>
  );
}
