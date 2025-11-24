import React from "react";
import "../styles/theme.css";

const ServiceCard = ({ title, desc, icon, features = [] }) => {
  return (
    <div className="service-card" data-aos="zoom-in">
      {/* Header de la carte */}
      <div className="card-header">
        <div className="card-icon">{icon}</div>
        <div className="card-glow"></div>
      </div>

      {/* Contenu */}
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{desc}</p>
        
        {/* Features list */}
        {features.length > 0 && (
          <ul className="card-features">
            {features.map((feature, index) => (
              <li key={index} className="feature-item">
                <span className="feature-check">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Footer avec CTA */}
      <div className="card-footer">
        <button className="card-cta">
          <span>En savoir plus</span>
          <div className="cta-arrow">→</div>
        </button>
      </div>

      {/* Effets d'arrière-plan */}
      <div className="card-energy"></div>
    </div>
  );
};

export default ServiceCard;