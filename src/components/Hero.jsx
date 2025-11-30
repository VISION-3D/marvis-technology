import React from "react";
import { Link } from "react-router-dom";
import "../styles/theme.css";
import { FaLaptopCode, FaRobot, FaBolt, FaLightbulb } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      className="tech-hero enhanced-hero"
      style={{
        background: `
          linear-gradient(135deg, 
            rgba(6, 12, 34, 0.97) 0%,
            rgba(18, 25, 65, 0.95) 50%,
            rgba(6, 12, 34, 0.97) 100%
          ),
          url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse"><path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(120, 119, 198, 0.15)" stroke-width="1"/></pattern></defs><rect width="100%" height="100%" fill="rgba(6, 12, 34, 1)"/><rect width="100%" height="100%" fill="url(%23grid)"/></svg>')
        `,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "1rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Effets de fond - Responsive */}
      <div className="hero-energy-overlay">
        <div className="connected-dots">
          {[...Array(15)].map((_, i) => ( // Réduit le nombre sur mobile
            <div key={i} className="dot" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}></div>
          ))}
        </div>
      </div>

      {/* Contenu principal centré - RESPONSIVE */}
      <div
        className="hero-container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          zIndex: 10,
          gap: "clamp(1rem, 3vw, 1.5rem)", // Gap responsive
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
          padding: "0 1rem",
        }}
      >
        {/* Nom avec effet amélioré */}
        <h1 className="hero-title" data-aos="fade-up" data-aos-delay="150">
          <span className="title-gradient hero-title-glow" style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundSize: "200% 200%",
            animation: "gradientShift 6s ease infinite",
            fontSize: "clamp(2.5rem, 8vw, 4.5rem)", // Taille responsive
            lineHeight: "1.1",
            display: "block",
          }}>
            TAQWATECH
          </span>
        </h1>

        {/* Badge premium amélioré - RESPONSIVE */}
        <div
          className="hero-badge premium-badge"
          data-aos="fade-down"
          data-aos-delay="250"
          style={{
            background: "linear-gradient(135deg, rgba(102, 126, 234, 0.15) 0%, rgba(118, 75, 162, 0.15) 100%)",
            border: "1px solid rgba(102, 126, 234, 0.3)",
            backdropFilter: "blur(20px)",
            padding: "clamp(0.6rem, 2vw, 0.8rem) clamp(1rem, 3vw, 1.5rem)", // Padding responsive
            borderRadius: "50px",
            fontSize: "clamp(0.7rem, 2.5vw, 0.9rem)", // Taille de police responsive
            fontWeight: "500",
            position: "relative",
            overflow: "hidden",
            maxWidth: "90%", // Empêche le débordement
            margin: "0 auto",
          }}
        >
          <span className="badge-pulse" style={{
            position: "absolute",
            top: "50%",
            left: "clamp(8px, 2vw, 12px)", // Position responsive
            transform: "translateY(-50%)",
            width: "clamp(6px, 1.5vw, 8px)", // Taille responsive
            height: "clamp(6px, 1.5vw, 8px)",
            borderRadius: "50%",
            background: "#10B981",
            boxShadow: "0 0 0 0 rgba(16, 185, 129, 0.7)",
            animation: "pulse 2s infinite",
          }}></span>
          Développement Full Stack & Expertise en Intelligence Artificielle
        </div>

        {/* Sous-titre amélioré - RESPONSIVE */}
        <h2
          className="hero-subtitle"
          data-aos="fade-up"
          data-aos-delay="350"
          style={{
            fontSize: "clamp(1.1rem, 4vw, 2.5rem)", // Taille très responsive
            lineHeight: "1.3",
            maxWidth: "min(900px, 90vw)", // Largeur max adaptative
            margin: "0 auto",
            fontWeight: "400",
          }}
        >
          CRÉATION{" "}
          <span className="text-energetic" style={{
            background: "linear-gradient(135deg, #667eea, #764ba2)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "700",
            display: "inline-block", // Meilleur contrôle responsive
          }}>
            SOLUTIONS DIGITALES SUR MESURE
          </span>{" "}
          QUI TRANSFORMENT VOS IDÉES EN RÉSULTATS TANGIBLES
        </h2>

        {/* Description améliorée - RESPONSIVE */}
        <p
          className="hero-description"
          data-aos="fade-up"
          data-aos-delay="450"
          style={{
            fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)", // Taille responsive
            lineHeight: "1.6",
            maxWidth: "min(600px, 90vw)", // Largeur adaptative
            margin: "0 auto",
            color: "rgba(255, 255, 255, 0.8)",
            backdropFilter: "blur(10px)",
            background: "rgba(255, 255, 255, 0.05)",
            padding: "clamp(1rem, 3vw, 1.5rem)", // Padding responsive
            borderRadius: "1rem",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <strong style={{ 
            color: "#fff", 
            display: "block", 
            marginBottom: "0.5rem",
            fontSize: "clamp(1rem, 3vw, 1.2rem)" // Taille responsive
          }}>
            Innovation & Excellence Technique
          </strong>
          Avec plus de 30 projets réalisés, nous donnons vie à vos ambitions grâce à des solutions digitales performantes. Du prototype à la mise en production, chaque projet est conçu pour maximiser l'impact et l'expérience utilisateur.
        </p>

        {/* CTA amélioré - RESPONSIVE */}
        <div
          className="hero-actions"
          data-aos="fade-up"
          data-aos-delay="550"
          style={{ 
            display: "flex", 
            gap: "clamp(1rem, 3vw, 1.5rem)", // Gap responsive
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: "1rem",
            width: "100%",
            maxWidth: "500px", // Empêche l'étirement excessif
          }}
        >
          <Link 
            to="/portfolio" 
            className="btn-primary hero-btn-light" 
            style={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              border: "none",
              padding: "clamp(0.8rem, 2.5vw, 1rem) clamp(1.5rem, 4vw, 2rem)", // Padding responsive
              borderRadius: "50px",
              color: "white",
              fontWeight: "600",
              textDecoration: "none",
              transition: "all 0.3s ease",
              position: "relative",
              overflow: "hidden",
              fontSize: "clamp(0.8rem, 2.5vw, 0.9rem)", // Taille police responsive
              textAlign: "center",
              flex: "1 1 auto", // Flexibilité responsive
              minWidth: "min-content", // Évite le rétrécissement excessif
            }}
          >
            Découvrir mes réalisations
          </Link>

          <Link 
            to="/contact" 
            className="btn-secondary hero-btn-outline" 
            style={{
              background: "transparent",
              border: "2px solid #667eea",
              padding: "clamp(0.8rem, 2.5vw, 1rem) clamp(1.5rem, 4vw, 2rem)", // Padding responsive
              borderRadius: "50px",
              color: "#667eea",
              fontWeight: "600",
              textDecoration: "none",
              transition: "all 0.3s ease",
              position: "relative",
              fontSize: "clamp(0.8rem, 2.5vw, 0.9rem)", // Taille police responsive
              textAlign: "center",
              flex: "1 1 auto", // Flexibilité responsive
              minWidth: "min-content", // Évite le rétrécissement excessif
            }}
          >
            Discutons de votre projet
          </Link>
        </div>

        {/* Stats améliorées - RESPONSIVE */}
        <div
          className="hero-stats"
          data-aos="fade-up"
          data-aos-delay="700"
          style={{
            display: "grid", // Grid pour meilleur contrôle responsive
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: "clamp(1rem, 3vw, 2rem)", // Gap responsive
            justifyContent: "center",
            marginTop: "2rem",
            width: "100%",
            maxWidth: "800px",
            padding: "0 1rem",
          }}
        >
          {[
            { number: "+30", label: "Projets livrés" },
            { number: "100%", label: "Satisfaction " },
            { number: "24h", label: "Support réactif" },
            { number: "360°", label: "Accompagnement" }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="stat-item" 
              style={{
                textAlign: "center",
                background: "rgba(255, 255, 255, 0.05)",
                padding: "clamp(1rem, 2.5vw, 1.5rem) clamp(0.5rem, 2vw, 1rem)", // Padding responsive
                borderRadius: "1rem",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                minWidth: "0", // Important pour grid
              }}
            >
              <div className="stat-number" style={{
                fontSize: "clamp(1.5rem, 4vw, 2rem)", // Taille responsive
                fontWeight: "700",
                background: "linear-gradient(135deg, #667eea, #764ba2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginBottom: "0.5rem",
                lineHeight: "1.2",
              }}>
                {stat.number}
              </div>
              <div className="stat-label" style={{
                fontSize: "clamp(0.7rem, 2vw, 0.9rem)", // Taille responsive
                color: "rgba(255, 255, 255, 0.7)",
                fontWeight: "500",
                lineHeight: "1.3",
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Bande d'icônes horizontale améliorée - RESPONSIVE */}
        <div
          className="tech-stack-bar"
          data-aos="fade-up"
          data-aos-delay="850"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "clamp(1rem, 3vw, 2rem)", // Gap responsive
            padding: "clamp(1rem, 2.5vw, 1.2rem) clamp(1.5rem, 4vw, 2rem)", // Padding responsive
            background: "rgba(255, 255, 255, 0.05)",
            borderRadius: "1rem",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            marginTop: "2rem",
            flexWrap: "wrap", // Wrap sur mobile
            maxWidth: "min(600px, 90vw)", // Largeur max adaptative
            width: "100%",
          }}
        >
          {[
            { icon: FaRobot, color: "#EF4444", label: "IA" },
            { icon: FaLaptopCode, color: "#6C63FF", label: "Dev" },
            { icon: FaBolt, color: "#FFD700", label: "Performance" },
            { icon: FaLightbulb, color: "#10B981", label: "Innovation" }
          ].map((item, index) => (
            <div 
              key={index} 
              className="tech-item" 
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "clamp(0.3rem, 1vw, 0.5rem)", // Gap responsive
                transition: "all 0.3s ease",
                cursor: "pointer",
                flex: "1 1 auto", // Flexibilité pour s'adapter
                minWidth: "60px", // Largeur min pour éviter le sur-compression
              }}
            >
              <item.icon style={{
                color: item.color,
                fontSize: "clamp(1.8rem, 5vw, 2.5rem)", // Taille responsive
                filter: "drop-shadow(0 0 10px rgba(255,255,255,0.3))",
              }} />
              <span style={{
                fontSize: "clamp(0.6rem, 2vw, 0.8rem)", // Taille responsive
                color: "rgba(255, 255, 255, 0.7)",
                fontWeight: "500",
                textAlign: "center",
              }}>
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Scroll indicator amélioré - RESPONSIVE */}
        <div
          className="scroll-indicator"
          data-aos="fade-up"
          data-aos-delay="1000"
          style={{
            marginTop: "clamp(1.5rem, 4vw, 3rem)", // Marge responsive
            textAlign: "center",
          }}
        >
          <div className="scroll-arrow" style={{
            width: "clamp(20px, 5vw, 30px)", // Taille responsive
            height: "clamp(20px, 5vw, 30px)",
            borderRight: "2px solid #667eea",
            borderBottom: "2px solid #667eea",
            transform: "rotate(45deg)",
            animation: "bounce 2s infinite",
            margin: "0 auto",
          }}></div>
          <span style={{
            display: "block",
            marginTop: "0.5rem",
            fontSize: "clamp(0.7rem, 2vw, 0.8rem)", // Taille responsive
            color: "rgba(255, 255, 255, 0.6)",
          }}>
            Explorer
          </span>
        </div>
      </div>

      {/* Styles CSS responsive */}
      <style jsx>{`
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
          70% { box-shadow: 0 0 0 10px rgba(16, 185, 129, 0); }
          100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: rotate(45deg) translateY(0); }
          40% { transform: rotate(45deg) translateY(-10px); }
          60% { transform: rotate(45deg) translateY(-5px); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.2); }
        }

        .connected-dots {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        
        .dot {
          position: absolute;
          width: clamp(3px, 1vw, 4px);
          height: clamp(3px, 1vw, 4px);
          background: rgba(102, 126, 234, 0.6);
          border-radius: 50%;
          animation: float 6s ease-in-out infinite;
        }

        /* Media Queries pour ajustements spécifiques */
        @media (max-width: 768px) {
          .hero-container {
            gap: 1rem;
          }
          
          .hero-stats {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .tech-stack-bar {
            gap: 1rem;
          }
        }
        
        @media (max-width: 480px) {
          .hero-actions {
            flex-direction: column;
            width: 100%;
          }
          
          .hero-actions a {
            width: 100%;
          }
          
          .hero-stats {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
        }

        /* Effets hover - désactivés sur mobile pour meilleure UX */
        @media (hover: hover) {
          .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
          }
          
          .btn-secondary:hover {
            background: rgba(102, 126, 234, 0.1);
            transform: translateY(-2px);
          }
          
          .tech-item:hover {
            transform: translateY(-5px);
          }
          
          .stat-item:hover {
            transform: translateY(-2px);
            background: rgba(255, 255, 255, 0.08);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;