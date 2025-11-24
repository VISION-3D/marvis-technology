import React from "react";

const ProjectCard = ({ title, description, img, tech = [], demoLink, codeLink }) => {
  return (
    <div className="project-card" data-aos="flip-up">
      {/* Image du projet */}
      <div className="project-image">
        <img src={img} alt={title} />
        <div className="project-overlay">
          <div className="project-actions">
            {demoLink && (
              <a href={demoLink} className="action-btn demo-btn" target="_blank" rel="noopener noreferrer">
                <span>👁️</span> Voir
              </a>
            )}
            <button className="action-btn code-btn">
              <span>💻</span> Code
            </button>
          </div>
        </div>
        <div className="project-glow"></div>
      </div>

      {/* Contenu du projet */}
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        
        {/* Technologies utilisées */}
        <div className="project-tech">
          {tech.map((technology, index) => (
            <span key={index} className="tech-tag">
              {technology}
            </span>
          ))}
        </div>
      </div>

      {/* Énergie background */}
      <div className="project-energy"></div>
    </div>
  );
};

export default ProjectCard;