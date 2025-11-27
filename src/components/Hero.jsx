import React from "react";
import { Link } from "react-router-dom";
import "../styles/theme.css";
import { FaLaptopCode, FaRobot, FaBolt } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
const Hero = () => {
  return (
    <section
      className="tech-hero enhanced-hero"
      style={{
        background:
          "linear-gradient(to bottom, #03050baa, #03050b), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop&auto=format&q=80') center/cover",
      }}
    >
      {/* Effets de fond */}
      <div className="hero-energy-overlay">
        <div className="energy-pulse"></div>

        <div className="digital-particles">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="particle"></div>
          ))}
        </div>
      </div>

      {/* Contenu principal */}
      <div className="hero-container">
        <div className="hero-content">

          {/* Nom */}
          <h1
            className="hero-title"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <span className="title-gradient hero-title-glow">
              Saliou SENE
            </span>
          </h1>

          {/* Badge */}
          <div
            className="hero-badge premium-badge"
            data-aos="fade-down"
            data-aos-delay="250"
          >
            <span className="badge-pulse"></span>
            Développeur Full Stack & Intelligence Artificielle
          </div>

          {/* Sous-titre SEO enrichi */}
          <h2
            className="hero-subtitle"
            data-aos="fade-up"
            data-aos-delay="350"
          >
            Création de{" "}
            <span className="text-energetic">sites web modernes</span> et{" "}
            <span className="text-energetic">applications intelligentes</span>
          </h2>

          {/* Description optimisée SEO */}
          <p
            className="hero-description"
            data-aos="fade-up"
            data-aos-delay="450"
          >
            Développeur web et mobile, expert en solutions d'intelligence
            artificielle. J’accompagne entreprises et particuliers dans la
            conception, le développement et le déploiement de projets digitaux
            performants et sur mesure, du prototype à la mise en production.
          </p>

          {/* CTA */}
          <div
            className="hero-actions"
            data-aos="fade-up"
            data-aos-delay="550"
          >
            <Link to="/portfolio" className="btn-primary hero-btn-light">
              <span className="btn-sparkle"></span>
              Voir mes réalisations
            </Link>

            <Link to="/contact" className="btn-secondary hero-btn-outline">
              <span className="btn-pulse"></span>
              Discutons de votre projet
            </Link>
          </div>

          {/* Stats */}
          <div
            className="hero-stats"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <div className="stat-item">
              <div className="stat-number">+30</div>
              <div className="stat-label">Projets réalisés</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Satisfaction client</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24h</div>
              <div className="stat-label">Support réactif</div>
            </div>
          </div>
        </div>

  

{/* Bande horizontale premium à gauche du sous-titre */}
<div style={{
  display: "flex",
  alignItems: "center",  // aligne verticalement texte et icônes
  gap: "1.5rem",
  marginTop: "1rem"
}}>

  {/* Bande d’icônes horizontale */}
  <div className="hero-side-bar-horizontal" style={{
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    padding: "0.5rem 1rem",
    background: "rgba(255, 255, 255, 0.07)",
    borderRadius: "1rem",
    backdropFilter: "blur(12px)",
    boxShadow: "0 0 20px rgba(255,255,255,0.2)"
  }}>
    <FaRobot style={{ color: "#EF4444", fontSize: "2.2rem", cursor: "pointer", transition: "0.3s" }} />
    <FaLaptopCode style={{ color: "#6C63FF", fontSize: "2.2rem", cursor: "pointer", transition: "0.3s" }} />
    <FaBolt style={{ color: "#FFD700", fontSize: "2.2rem", cursor: "pointer", transition: "0.3s" }} />
    <FaLightbulb style={{ color: "#10B981", fontSize: "2.2rem", cursor: "pointer", transition: "0.3s" }} />
  </div>



</div>




        {/* Scroll */}
        <div
          className="scroll-indicator"
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          <div className="scroll-arrow"></div>
          <span></span>
        </div>

      </div>
    </section>
  );
};

export default Hero;
