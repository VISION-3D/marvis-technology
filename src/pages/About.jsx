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
    { name: "Conseil Digital", level: 100, category: "Stratégie", icon: <FaLightbulb />, color: "#8B5CF6", description: "Audit et stratégie de transformation digitale", image: "https://images.pexels.com/photos/5506181/pexels-photo-5506181.jpeg?auto=compress&cs=tinysrgb&h=400&w=700" },
    { name: "Intelligence Artificielle", level: 100, category: "Innovation", icon: <FaRobot />, color: "#EF4444", description: "Solutions IA et automatisation intelligente", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&auto=format&q=80" },
    { name: "SEO & Référencement", level: 100, category: "Marketing", icon: <FaRocket />, color: "#3B82F6", description: "Optimisation pour les moteurs de recherche", image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=400&h=300&fit=crop&auto=format&q=80" }
  ];

  const stats = [
    { number: "+30", label: "Projets Réalisés", icon: <FaRocket /> },
    { number: "100 %", label: "Satisfaction Client", icon: <FaStar /> },
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
    <div className="about-page" style={{ paddingTop: '80px', textAlign: 'center' }}>
      <SEO title="TaqwaTech - À propos de Saliou SENE" description="Découvrez l'expertise digitale de Saliou SENE : développement web, intelligence artificielle et marketing digital." />

      {/* Hero Section */}
      <section className="tech-hero" style={{ background: "linear-gradient(to bottom, #0A0F1FAA, #0A0F1F), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop&auto=format&q=80') center/cover", minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', position: 'relative', overflow: 'hidden', color: '#ffffff' }}>
        <div className="hero-badge-tech" style={{ backgroundColor: "#ffffff15", border: "1px solid #ffffff30", padding: '0.5rem 1rem', borderRadius: '1rem', display: 'inline-block', marginBottom: '1rem' }}>
          <span className="pulse-dot-hero" style={{ backgroundColor: "#5c92f7ff", marginRight: '0.5rem' }}></span>
          À Propos de Moi
        </div>

        <h1 className="hero-title-tech" style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>Saliou SENE</h1>
        <h2 className="hero-subtitle-tech" style={{ color: "#e0e0e0", marginBottom: '1rem' }}>Développeur Full Stack & Intelligence Artificielle</h2>
        <p className="hero-description-tech" style={{ maxWidth: '700px', margin: '0 auto 2rem', color: '#e0e0e0' }}>
          Fondateur de <strong style={{ color: '#ffffff' }}>TaqwaTech</strong>. Je crée des solutions digitales innovantes qui transforment vos idées en réalité.
        </p>

        {/* Stats */}
        <div className="hero-stats-grid" style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
          {stats.map((stat, index) => (
            <div key={index} className="hero-stat-item" style={{ backgroundColor: "#ffffff10", border: "1px solid #ffffff20", borderRadius: '1rem', padding: '1rem 2rem', minWidth: '150px' }}>
              <div className="stat-icon" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{stat.icon}</div>
              <div className="stat-number" style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>{stat.number}</div>
              <div className="stat-label" style={{ color: "#e0e0e0" }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="hero-actions-tech" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <Link to="/contact" className="btn-hero-primary" style={{ backgroundColor: "#ffffff", color: "#0A0F1F", border: "2px solid #ffffff", padding: '0.75rem 1.5rem', borderRadius: '1rem' }}>Discuter de mon projet</Link>
          <Link to="/portfolio" className="btn-hero-secondary" style={{ backgroundColor: "transparent", color: "#ffffff", border: "2px solid #ffffff", padding: '0.75rem 1.5rem', borderRadius: '1rem' }}>Voir mes réalisations</Link>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="expertise-section" style={{ backgroundColor: "#0A0F1F", color: "#ffffff", padding: '4rem 1rem' }}>
        <h2 style={{ marginBottom: '1rem' }}>Mon Expertise Digitale</h2>
        <p style={{ maxWidth: '700px', margin: '0 auto 2rem' }}>
          Je combine expertise technique et vision stratégique pour créer des solutions digitales qui répondent parfaitement à vos objectifs business. Mon approche est centrée sur l'innovation et les résultats.
        </p>
        <div className="expertise-tags" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
          {["Stratégie Digitale", "Développement Web", "IA & Innovation", "Marketing Digital", "UX/UI Design", "Analytics"].map((expertise, index) => (
            <span key={index} className="expertise-tag" style={{ backgroundColor: "#ffffff15", border: "1px solid #ffffff30", borderRadius: '1rem', padding: '0.5rem 1rem' }}>{expertise}</span>
          ))}
        </div>

        {/* Achievements */}
        <div className="achievements-grid" style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          {achievements.map((ach, index) => (
            <div key={index} className="achievement-card" style={{ backgroundColor: "#ffffff10", border: "1px solid #ffffff20", borderRadius: '1rem', padding: '1rem', minWidth: '200px' }}>
              <div className="achievement-icon" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{ach.icon}</div>
              <h4 style={{ marginBottom: '0.25rem' }}>{ach.title}</h4>
              <p style={{ color: '#e0e0e0' }}>{ach.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
