import React from "react";
import { Link } from "react-router-dom";
import { FaGlobe, FaLaptopCode, FaBullhorn, FaMobileAlt, FaTools, FaLightbulb, FaRobot, FaRocket } from "react-icons/fa";
import { FaStar, FaBolt, FaTrophy, FaBriefcase } from "react-icons/fa";
import SEO from "../components/SEO";

const About = () => {
  const skills = [
    { name: "Création Site Web", level: 100, category: "Développement", icon: <FaGlobe />, color: "#6C63FF", description: "Sites vitrines, e-commerce, applications web sur mesure", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&auto=format&q=80" },
    { name: "Application Web", level: 100, category: "Développement", icon: <FaLaptopCode />, color: "#00D4FF", description: "Applications complètes frontend et backend", image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop&auto=format&q=80" },
    { name: "Publicité Digitale", level: 100, category: "Marketing", icon: <FaBullhorn />, color: "#EC4899", description: "Campagnes publicitaires et stratégies digitales", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=300&fit=crop&auto=format&q=80" },
    { name: "Communication Digitale", level: 100, category: "Marketing", icon: <FaMobileAlt />, color: "#10B981", description: "Stratégie de présence en ligne et branding", image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=300&fit=crop&auto=format&q=80" },
    { name: "Maintenance Informatique", level: 100, category: "Support", icon: <FaTools />, color: "#F59E0B", description: "Support technique et maintenance proactive", image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop&auto=format&q=80" },
    { name: "Conseil Digital", level: 100, category: "Stratégie", icon: <FaLightbulb />, color: "#8B5CF6", description: "Audit et stratégie de transformation digitale", image: "https://images.pexels.com/photos-5506181/pexels-photo-5506181.jpeg?auto=compress&cs=tinysrgb&h=400&w=700" },
    { name: "Intelligence Artificielle", level: 100, category: "Innovation", icon: <FaRobot />, color: "#EF4444", description: "Solutions IA et automatisation intelligente", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&auto=format&q=80" },
    { name: "SEO & Référencement", level: 100, category: "Marketing", icon: <FaRocket />, color: "#3B82F6", description: "Optimisation pour les moteurs de recherche", image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=400&h=300&fit=crop&auto=format&q=80" }
  ];

  const stats = [
    { number: "+30", label: "Projets Réalisés", icon: <FaRocket /> },
    { number: "100 %", label: "Satisfaction", icon: <FaStar /> },
    { number: "24h", label: "Support Réactif", icon: <FaBolt /> },
    { number: "+15", label: "Technologies Maîtrisées", icon: <FaTools /> }
  ];

  const achievements = [
    { icon: <FaTrophy />, title: "Certifié", description: "Formation intensive en développement logiciel avec compétences en IA" },
    { icon: <FaBriefcase />, title: "Expérience Professionnelle", description: "Expérience solide dans le développement et IA" },
    { icon: <FaGlobe />, title: "International", description: "Collaboration mondiale sur divers projets" },
    { icon: <FaLightbulb />, title: "Solutions Innovantes", description: "Toujours à la pointe de la technologie" }
  ];

  return (
    <div className="about-page" style={{ paddingTop: '80px' }}>
      <SEO 
        title="TaqwaTech - À propos de Saliou SENE" 
        description="Découvrez l'expertise digitale de Saliou SENE : développement web, intelligence artificielle et marketing digital." 
      />

      {/* Hero Section About */}
      <section
        className="about-hero"
        style={{
          background: `
            linear-gradient(135deg, 
              rgba(10, 15, 31, 0.98) 0%,
              rgba(20, 30, 70, 0.95) 50%,
              rgba(10, 15, 31, 0.98) 100%
            ),
            url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><pattern id="circuit" width="80" height="80" patternUnits="userSpaceOnUse"><circle cx="40" cy="40" r="1" fill="rgba(120, 119, 198, 0.1)"/><path d="M 40 0 L 40 80 M 0 40 L 80 40" fill="none" stroke="rgba(120, 119, 198, 0.08)" stroke-width="0.5"/></pattern></defs><rect width="100%" height="100%" fill="rgba(10, 15, 31, 1)"/><rect width="100%" height="100%" fill="url(%23circuit)"/></svg>')
          `,
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          position: 'relative',
          overflow: 'hidden',
          color: '#ffffff',
          textAlign: 'center',
          padding: '2rem 1rem'
        }}
      >
        {/* Effets de fond animés */}
        <div className="background-effects">
          <div className="floating-shapes">
            {[...Array(12)].map((_, i) => (
              <div 
                key={i}
                className="floating-shape"
                style={{
                  position: 'absolute',
                  width: `${Math.random() * 100 + 50}px`,
                  height: `${Math.random() * 100 + 50}px`,
                  background: `rgba(${102 + i * 10}, ${126 + i * 5}, ${234}, ${0.03})`,
                  borderRadius: i % 2 === 0 ? '50%' : '20%',
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `float ${15 + i * 2}s ease-in-out infinite`,
                  animationDelay: `${i * 1.5}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Badge amélioré */}
        <div
          className="hero-badge-tech"
          style={{
            background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.15) 0%, rgba(118, 75, 162, 0.15) 100%)',
            border: '1px solid rgba(102, 126, 234, 0.3)',
            padding: '1rem 2.5rem',
            borderRadius: '50px',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '2rem',
            backdropFilter: 'blur(20px)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <span
            className="pulse-dot-hero"
            style={{
              backgroundColor: "#667eea",
              marginRight: '1rem',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              animation: 'pulse 2s infinite'
            }}
          ></span>
          <h1 style={{ 
            margin: 0, 
            color: '#ffffff', 
            fontSize: 'clamp(1rem, 1.2vw, 1.5rem)',
            fontWeight: '600'
          }}>
            À Propos de Moi
          </h1>
        </div>

        {/* Titre principal */}
        <h1 
          className="hero-title-tech" 
          style={{ 
            fontSize: 'clamp(2.5rem, 6vw, 4rem)', 
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundSize: '200% 200%',
            animation: 'gradientShift 6s ease infinite'
          }}
        >
          Saliou SENE
        </h1>
        
        <h2 
          className="hero-subtitle-tech" 
          style={{ 
            color: "#e0e0e0", 
            marginBottom: '1.5rem',
            fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
            fontWeight: '400'
          }}
        >
          Développeur Full Stack & Expert en Intelligence Artificielle
        </h2>
        
        <p 
          className="hero-description-tech" 
          style={{ 
            maxWidth: '700px', 
            margin: '0 auto 3rem', 
            color: '#e0e0e0',
            fontSize: '1.1rem',
            lineHeight: '1.6',
            background: 'rgba(255, 255, 255, 0.05)',
            padding: '2rem',
            borderRadius: '1rem',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)'
          }}
        >
          Fondateur de <strong style={{ color: '#667eea' }}>TaqwaTech</strong>. Je crée des solutions digitales innovantes qui transforment vos idées en réalité. 
          Mon expertise combine développement technique avancé et stratégie digitale pour des résultats concrets et mesurables.
        </p>

        {/* Stats améliorées */}
        <div 
          className="hero-stats-grid" 
          style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '2rem', 
            flexWrap: 'wrap', 
            marginBottom: '3rem',
            maxWidth: '1000px'
          }}
        >
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="hero-stat-item" 
              style={{ 
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '1.5rem', 
                padding: '2rem 1.5rem', 
                minWidth: '160px',
                backdropFilter: 'blur(15px)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.background = 'rgba(102, 126, 234, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
              }}
            >
              <div 
                className="stat-icon" 
                style={{ 
                  fontSize: '2.5rem', 
                  marginBottom: '1rem',
                  background: 'linear-gradient(135deg, #667eea, #764ba2)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                {stat.icon}
              </div>
              <div 
                className="stat-number" 
                style={{ 
                  fontSize: '2rem', 
                  marginBottom: '0.5rem',
                  fontWeight: '700',
                  color: '#ffffff'
                }}
              >
                {stat.number}
              </div>
              <div 
                className="stat-label" 
                style={{ 
                  color: "#e0e0e0",
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA amélioré */}
        <div 
          className="hero-actions-tech" 
          style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '1.5rem', 
            flexWrap: 'wrap' 
          }}
        >
          <Link 
            to="/contact" 
            className="btn-hero-primary" 
            style={{ 
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: "#ffffff", 
              border: "none",
              padding: '1rem 2rem', 
              borderRadius: '50px',
              textDecoration: 'none',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(102, 126, 234, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Discuter de mon projet
          </Link>
          
          <Link 
            to="/portfolio" 
            className="btn-hero-secondary" 
            style={{ 
              background: "transparent", 
              color: "#ffffff", 
              border: "2px solid #667eea", 
              padding: '1rem 2rem', 
              borderRadius: '50px',
              textDecoration: 'none',
              fontWeight: '600',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(102, 126, 234, 0.1)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Voir mes réalisations
          </Link>
        </div>
      </section>

      {/* Expertise Section */}
      <section 
        className="expertise-section" 
        style={{ 
          background: `
            linear-gradient(135deg, #0A0F1F 0%, #151F3F 50%, #0A0F1F 100%)
          `,
          color: "#ffffff", 
          padding: '6rem 1rem',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Background pattern */}
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'><rect width='100' height='100' fill='%230A0F1F'/><path d='M0 0L100 100M100 0L0 100' stroke='%231a233f' stroke-width='1'/></svg>")`,
            opacity: '0.3'
          }}
        />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 
            style={{ 
              marginBottom: '1rem',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              textAlign: 'center',
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Mon Expertise Digitale
          </h2>
          
          <p 
            style={{ 
              maxWidth: '700px', 
              margin: '0 auto 3rem',
              textAlign: 'center',
              fontSize: '1.1rem',
              lineHeight: '1.6',
              color: '#e0e0e0'
            }}
          >
            Je combine expertise technique et vision stratégique pour créer des solutions digitales qui répondent parfaitement à vos objectifs business. 
            Mon approche est centrée sur l'innovation, la performance et les résultats mesurables.
          </p>
          
          <div 
            className="expertise-tags" 
            style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '1rem', 
              flexWrap: 'wrap', 
              marginBottom: '4rem' 
            }}
          >
            {["Stratégie Digitale", "Développement Web", "IA & Innovation", "Marketing Digital", "UX/UI Design", "Analytics"].map((expertise, index) => (
              <span 
                key={index} 
                className="expertise-tag" 
                style={{ 
                  background: "rgba(255, 255, 255, 0.1)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  borderRadius: '50px',
                  padding: '0.75rem 1.5rem',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  backdropFilter: 'blur(10px)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(102, 126, 234, 0.3)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {expertise}
              </span>
            ))}
          </div>

          {/* Achievements améliorés */}
          <div 
            className="achievements-grid" 
            style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
              maxWidth: '1200px',
              margin: '0 auto'
            }}
          >
            {achievements.map((ach, index) => (
              <div 
                key={index} 
                className="achievement-card" 
                style={{ 
                  background: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  borderRadius: '1.5rem',
                  padding: '2.5rem 2rem',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(15px)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.background = 'rgba(102, 126, 234, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                }}
              >
                <div 
                  className="achievement-icon" 
                  style={{ 
                    fontSize: '3rem', 
                    marginBottom: '1.5rem',
                    background: 'linear-gradient(135deg, #667eea, #764ba2)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  {ach.icon}
                </div>
                <h4 
                  style={{ 
                    marginBottom: '1rem',
                    fontSize: '1.3rem',
                    fontWeight: '600',
                    color: '#ffffff'
                  }}
                >
                  {ach.title}
                </h4>
                <p 
                  style={{ 
                    color: '#e0e0e0',
                    lineHeight: '1.6',
                    fontSize: '0.95rem'
                  }}
                >
                  {ach.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Styles CSS supplémentaires */}
      <style jsx>{`
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(102, 126, 234, 0.7); }
          70% { box-shadow: 0 0 0 10px rgba(102, 126, 234, 0); }
          100% { box-shadow: 0 0 0 0 rgba(102, 126, 234, 0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
      `}</style>
    </div>
  );
};

export default About;