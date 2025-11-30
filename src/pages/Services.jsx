import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGlobe, FaMobileAlt, FaRobot, FaBullhorn, FaComments, FaTools, FaLightbulb, FaRocket } from "react-icons/fa";
import { FaMoneyBillWave, FaClock, FaBullseye, FaHeadset } from "react-icons/fa";
import SEO from "../components/SEO";

const Services = () => {
  const [activeTab, setActiveTab] = useState("web");
  const [expandedService, setExpandedService] = useState(null);

  const services = {
    web: {
      title: "Création de site web",
      description: "Sites web modernes, responsives et performants",
      features: ["Site vitrine", "E-commerce", "Application web", "Dashboard"],
      details: "Des solutions web sur mesure utilisant les technologies les plus récentes comme React, Next.js et Vue.js pour des performances optimales et une expérience utilisateur exceptionnelle.",
      technologies: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"],
      price: "À partir de 500€",
      delay: "1-4 semaines",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop&auto=format&q=80",
      icon: <FaGlobe />,
      color: "#6C63FF",
      fullDescription: `Nous créons des sites web sur mesure qui allient design moderne, performance et expérience utilisateur optimale. Chaque projet est unique et répond à vos objectifs spécifiques.`
    },
    mobile: {
      title: "Applications mobiles",
      description: "Développement d'applications mobiles multiplateformes",
      features: ["React Native", "Applications hybrides", "UI/UX Design", "Déploiement Store"],
      details: "Applications natives et hybrides pour iOS et Android avec une expérience utilisateur optimale, des performances exceptionnelles et des fonctionnalités avancées.",
      technologies: ["React Native", "Flutter", "iOS", "Android", "Firebase"],
      price: "À partir de 1500€",
      delay: "4-8 semaines",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop&auto=format&q=80",
      icon: <FaMobileAlt />,
      color: "#00D4FF",
      fullDescription: `Nous  développons des applications mobiles performantes qui offrent une expérience utilisateur exceptionnelle sur iOS et Android.`
    },
    ai: {
      title: "Intelligence Artificielle",
      description: "Solutions IA sur mesure pour automatiser vos processus",
      features: ["Machine Learning", "Chatbots", "Traitement des données", "Automatisation"],
      details: "Intégration d'IA et de machine learning pour automatiser vos processus, analyser vos données et améliorer l'efficacité de votre entreprise avec des solutions innovantes.",
      technologies: ["Python", "TensorFlow", "OpenAI", "ChatGPT", "Computer Vision"],
      price: "À partir de 2000€",
      delay: "6-12 semaines",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&auto=format&q=80",
      icon: <FaRobot />,
      color: "#EF4444",
      fullDescription: `Nous  développons des solutions d'intelligence artificielle sur mesure pour transformer votre entreprise.`
    },
    marketing: {
      title: "Publicité numérique",
      description: "Campagnes publicitaires performantes et stratégies digitales",
      features: ["Google Ads", "Réseaux sociaux", "Analytics", "ROI optimisé"],
      details: "Stratégies publicitaires complètes sur Google et les réseaux sociaux avec optimisation du ROI, analyse des performances et ajustements en temps réel.",
      technologies: ["Google Ads", "Meta Ads", "Analytics", "SEO", "CRO"],
      price: "À partir de 300€/mois",
      delay: "2-4 semaines",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=300&fit=crop&auto=format&q=80",
      icon: <FaBullhorn />,
      color: "#EC4899",
      fullDescription: `Nous  créons et gère des campagnes publicitaires performantes qui génèrent des résultats concrets.`
    },
    communication: {
      title: "Communication numérique",
      description: "Stratégie de présence en ligne et branding digital",
      features: ["Branding", "Réseaux sociaux", "Content marketing", "Community"],
      details: "Développement d'une identité digitale forte et stratégie de contenu engageante pour renforcer votre présence en ligne et fidéliser votre audience.",
      technologies: ["Branding", "Content Strategy", "Social Media", "Email Marketing"],
      price: "À partir de 400€/mois",
      delay: "3-6 semaines",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=300&fit=crop&auto=format&q=80",
      icon: <FaComments />,
      color: "#10B981",
      fullDescription: ` Nous  développons votre stratégie de communication digitale pour renforcer votre marque et engager votre audience.`
    },
    maintenance: {
      title: "Maintenance informatique",
      description: "Support technique continu et maintenance de vos applications",
      features: ["Support 24/7", "Mises à jour", "Sécurité", "Optimisation"],
      details: "Services de maintenance proactive pour garantir la performance, la sécurité et l'évolutivité de vos applications avec support réactif et sauvegardes régulières.",
      technologies: ["Monitoring", "CI/CD", "Sécurité", "Performance", "Backups"],
      price: "À partir de 200€/mois",
      delay: "Continu",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop&auto=format&q=80",
      icon: <FaTools />,
      color: "#F59E0B",
      fullDescription: `Nous garantissons le bon fonctionnement et la sécurité de vos applications avec un service de maintenance complet.`
    },
    consulting: {
      title: "Conseil Digital",
      description: "Conseils en stratégie digitale et transformation numérique",
      features: ["Audit technique", "Roadmap produit", "Architecture", "Best practices"],
      details: "Accompagnement stratégique pour votre transformation digitale avec des solutions adaptées à vos objectifs business, audit complet et plan d'action détaillé.",
      technologies: ["Architecture", "DevOps", "Cloud", "SEO", "Analytics"],
      price: "À partir de 100€/h",
      delay: "Flexible",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&auto=format&q=80",
      icon: <FaLightbulb />,
      color: "#8B5CF6",
      fullDescription: `Nous vous accompagnons dans votre transformation digitale avec un conseil stratégique personnalisé.`
    },
    seo: {
      title: "SEO et référencement",
      description: "Optimisation pour les moteurs de recherche et visibilité en ligne",
      features: ["Audit SEO", "Technical SEO", "Content SEO", "Analytics"],
      details: "Stratégie de référencement naturel complète pour améliorer votre visibilité sur Google, augmenter votre trafic qualifié et booster vos conversions.",
      technologies: ["SEO Technique", "Content Strategy", "Analytics", "Performance"],
      price: "À partir de 450€/mois",
      delay: "3-6 mois",
      image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=400&h=300&fit=crop&auto=format&q=80",
      icon: <FaRocket />,
      color: "#3B82F6",
      fullDescription: `Nous'optimisons votre visibilité sur Google avec une stratégie SEO complète et durable.`
    }
  };

  const tabs = [
    { id: "web", label: "Sites Web", icon: <FaGlobe size={20} /> },
    { id: "mobile", label: "Apps Mobile", icon: <FaMobileAlt size={20} /> },
    { id: "ai", label: "Intelligence Artificielle", icon: <FaRobot size={20} /> },
    { id: "marketing", label: "Publicité", icon: <FaBullhorn size={20} /> },
    { id: "communication", label: "Communication", icon: <FaComments size={20} /> },
    { id: "maintenance", label: "Maintenance", icon: <FaTools size={20} /> },
    { id: "consulting", label: "Conseil", icon: <FaLightbulb size={20} /> },
    { id: "seo", label: "SEO", icon: <FaRocket size={20} /> }
  ];

  const currentService = services[activeTab];

  return (
    <div className="services-page" style={{ backgroundColor: "#0A0F1F", minHeight: "100vh" }}>
      <SEO
        title="TaqwaTech - Nos Services"
        description="Découvrez les services de TaqwaTech : développement web, applications, solutions IA et digital sur mesure."
      />

      {/* Hero Section Services */}
      <section 
        className="services-hero-tech"
        style={{
          background: `
            linear-gradient(135deg, 
              rgba(10, 15, 31, 0.98) 0%,
              rgba(20, 30, 70, 0.95) 50%,
              rgba(10, 15, 31, 0.98) 100%
            ),
            url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><pattern id="techGrid" width="80" height="80" patternUnits="userSpaceOnUse"><circle cx="40" cy="40" r="1" fill="rgba(102, 126, 234, 0.1)"/><path d="M 40 0 L 40 80 M 0 40 L 80 40" fill="none" stroke="rgba(102, 126, 234, 0.08)" stroke-width="0.5"/></pattern></defs><rect width="100%" height="100%" fill="rgba(10, 15, 31, 1)"/><rect width="100%" height="100%" fill="url(%23techGrid)"/></svg>')
          `,
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          padding: '2rem 1rem'
        }}
      >
        {/* Effets de fond animés */}
        <div className="background-effects">
          {[...Array(8)].map((_, i) => (
            <div 
              key={i}
              className="floating-tech"
              style={{
                position: 'absolute',
                width: `${Math.random() * 60 + 20}px`,
                height: `${Math.random() * 60 + 20}px`,
                background: `rgba(102, 126, 234, ${0.02 + i * 0.01})`,
                borderRadius: i % 2 === 0 ? '50%' : '10px',
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `techFloat ${15 + i * 3}s ease-in-out infinite`,
                animationDelay: `${i * 2}s`
              }}
            />
          ))}
        </div>

        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '1200px' }}>
          {/* Badge Animé */}
          <div 
            data-aos="fade-down"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.15) 0%, rgba(118, 75, 162, 0.15) 100%)',
              border: "1px solid rgba(102, 126, 234, 0.3)",
              color: "#ffffff",
              backdropFilter: "blur(20px)",
              padding: "1rem 2rem",
              borderRadius: "50px",
              marginBottom: "2rem"
            }}
          >
            <span 
              style={{
                backgroundColor: "#667eea",
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                animation: 'pulse 2s infinite'
              }}
            ></span>
            <h2 style={{ margin: 0, fontSize: '1.1rem', fontWeight: '600' }}>Mes Services</h2>
          </div>

          {/* Titre Principal */}
          <h1 
            data-aos="fade-up"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              marginBottom: '1.5rem',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundSize: '200% 200%',
              animation: 'gradientShift 6s ease infinite'
            }}
          >
            Des solutions <span style={{ display: 'block' }}>complètes pour votre</span> succès digital
          </h1>

          {/* Description */}
          <p 
            data-aos="fade-up" 
            data-aos-delay="200"
            style={{
              color: "#e0e0e0",
              fontSize: '1.2rem',
              lineHeight: '1.6',
              maxWidth: '700px',
              margin: '0 auto 3rem',
              background: 'rgba(255, 255, 255, 0.05)',
              padding: '2rem',
              borderRadius: '1rem',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)'
            }}
          >
            Nous proposons une gamme complète de services de développement et de stratégie digitale 
            pour répondre à tous vos besoins, du simple site vitrine aux applications complexes.
          </p>

          {/* Stats Services */}
          <div 
            className="services-stats-grid"
            data-aos="fade-up"
            data-aos-delay="400"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.5rem',
              maxWidth: '800px',
              margin: '0 auto'
            }}
          >
            {[
              { number: `${Object.keys(services).length}+`, label: "Services Spécialisés" },
              { number: "+30", label: "Projets Réalisés" },
              { number: "100%", label: "Satisfaction Client" },
              { number: "+15", label: "Technologies Maîtrisées" }
            ].map((stat, index) => (
              <div 
                key={index}
                style={{
                  background: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  borderRadius: '1.5rem',
                  padding: '2rem 1rem',
                  textAlign: 'center',
                  backdropFilter: 'blur(15px)',
                  transition: 'all 0.3s ease'
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
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: '700',
                    background: 'linear-gradient(135deg, #667eea, #764ba2)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    marginBottom: '0.5rem'
                  }}
                >
                  {stat.number}
                </div>
                <div 
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
        </div>
      </section>

      {/* Navigation par Onglets Technologiques */}
      <section 
        className="services-tabs-section"
        style={{
          backgroundColor: "#0A0F1F",
          padding: '4rem 1rem',
          position: 'relative'
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div 
            className="services-tabs-container"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: '1rem'
            }}
          >
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                className={`services-tab ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => {
                  setActiveTab(tab.id);
                  setExpandedService(null);
                }}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                style={{
                  background: activeTab === tab.id 
                    ? `linear-gradient(135deg, ${services[tab.id].color}20, rgba(255,255,255,0.1))`
                    : 'rgba(255, 255, 255, 0.05)',
                  border: activeTab === tab.id 
                    ? `1px solid ${services[tab.id].color}`
                    : '1px solid rgba(255, 255, 255, 0.2)',
                  color: "#ffffff",
                  backdropFilter: "blur(15px)",
                  padding: '1.5rem 1rem',
                  borderRadius: '1rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== tab.id) {
                    e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.transform = 'translateY(-2px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== tab.id) {
                    e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.target.style.transform = 'translateY(0)';
                  }
                }}
              >
                <span 
                  className="tab-icon"
                  style={{
                    color: activeTab === tab.id ? services[tab.id].color : '#ffffff',
                    fontSize: '1.5rem'
                  }}
                >
                  {tab.icon}
                </span>
                <span 
                  className="tab-text"
                  style={{
                    fontSize: '0.9rem',
                    fontWeight: '500'
                  }}
                >
                  {tab.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Section Service Actif Détaillé */}
      <section 
        className="service-detail-section"
        style={{
          backgroundColor: "#0A0F1F",
          padding: '4rem 1rem'
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div 
            className="service-detail-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '2fr 1fr',
              gap: '3rem',
              alignItems: 'start'
            }}
          >
            {/* Carte Principale du Service */}
            <div 
              className="service-main-card" 
              data-aos="fade-right"
              style={{
                background: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                borderRadius: '2rem',
                padding: '3rem',
                backdropFilter: 'blur(20px)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div 
                className="service-card-header"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '2rem',
                  marginBottom: '2rem'
                }}
              >
                <div 
                  className="service-icon-wrapper"
                  style={{
                    position: 'relative'
                  }}
                >
                  <div 
                    className="service-icon-large"
                    style={{
                      background: `linear-gradient(135deg, ${currentService.color}20, rgba(255,255,255,0.1))`,
                      border: `1px solid ${currentService.color}30`,
                      color: currentService.color,
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '2rem'
                    }}
                  >
                    {currentService.icon}
                  </div>
                </div>
                <div className="service-basic-info">
                  <h2 
                    className="service-title-large"
                    style={{
                      color: "#ffffff",
                      fontSize: '2.5rem',
                      marginBottom: '0.5rem',
                      background: `linear-gradient(135deg, ${currentService.color}, #ffffff)`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    {currentService.title}
                  </h2>
                  <p 
                    className="service-description-large"
                    style={{
                      color: "#e0e0e0",
                      fontSize: '1.2rem',
                      margin: 0
                    }}
                  >
                    {currentService.description}
                  </p>
                </div>
              </div>

              <div 
                className="service-content-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '3rem',
                  alignItems: 'start'
                }}
              >
                <div className="service-text-content">
                  <p 
                    className="service-full-description"
                    style={{
                      color: "#e0e0e0",
                      lineHeight: '1.7',
                      fontSize: '1.1rem',
                      marginBottom: '2rem'
                    }}
                  >
                    {currentService.fullDescription}
                  </p>

                  <div className="service-features-detailed">
                    <h3 
                      className="features-title"
                      style={{
                        color: "#ffffff",
                        fontSize: '1.5rem',
                        marginBottom: '1.5rem'
                      }}
                    >
                      Ce que je propose
                    </h3>
                    <div 
                      className="features-grid-detailed"
                      style={{
                        display: 'grid',
                        gap: '1rem'
                      }}
                    >
                      {currentService.features.map((feature, index) => (
                        <div 
                          key={index} 
                          className="feature-item-detailed"
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            padding: '1rem',
                            background: 'rgba(255, 255, 255, 0.05)',
                            borderRadius: '0.75rem',
                            border: '1px solid rgba(255, 255, 255, 0.1)'
                          }}
                        >
                          <span 
                            className="feature-check"
                            style={{
                              color: currentService.color,
                              fontWeight: 'bold'
                            }}
                          >
                            ✓
                          </span>
                          <span 
                            className="feature-text"
                            style={{
                              color: "#e0e0e0"
                            }}
                          >
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div 
                    className="service-actions-detailed"
                    style={{
                      marginTop: '2rem'
                    }}
                  >
                    <Link 
                      to="/contact" 
                      className="btn-service-primary-large"
                      style={{
                        background: `linear-gradient(135deg, ${currentService.color}, ${currentService.color}80)`,
                        color: "#ffffff",
                        border: 'none',
                        padding: '1.25rem 2.5rem',
                        borderRadius: '50px',
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = `0 10px 25px ${currentService.color}40`;
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = 'none';
                      }}
                    >
                      Discuter de ce service
                    </Link>
                  </div>
                </div>

                <div className="service-image-content">
                  <img 
                    src={currentService.image} 
                    alt={currentService.title}
                    style={{
                      width: '100%',
                      height: '300px',
                      objectFit: 'cover',
                      borderRadius: '1rem',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Sidebar Informations */}
            <div className="service-info-sidebar" data-aos="fade-left" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              
              {/* Informations Pratiques */}
              <div 
                className="info-card service-practical-info"
                style={{
                  background: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  borderRadius: '1.5rem',
                  padding: '2rem',
                  backdropFilter: 'blur(15px)'
                }}
              >
                <h3 
                  className="info-card-title"
                  style={{
                    color: "#ffffff",
                    fontSize: '1.3rem',
                    marginBottom: '1.5rem'
                  }}
                >
                  Informations Pratiques
                </h3>
                <div 
                  className="practical-details-grid"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem'
                  }}
                >
                  {[
                    { icon: <FaMoneyBillWave />, label: "Prix", value: currentService.price },
                    { icon: <FaClock />, label: "Délai", value: currentService.delay },
                    { icon: <FaBullseye />, label: "Méthodologie", value: "Agile & Itérative" },
                    { icon: <FaHeadset />, label: "Support", value: "Inclus 30 jours" }
                  ].map((detail, index) => (
                    <div 
                      key={index}
                      className="practical-detail-item"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem'
                      }}
                    >
                      <span 
                        className="detail-icon"
                        style={{
                          color: currentService.color,
                          fontSize: '1.2rem'
                        }}
                      >
                        {detail.icon}
                      </span>
                      <div className="detail-content">
                        <span 
                          className="detail-label"
                          style={{
                            color: "#e0e0e0",
                            fontSize: '0.9rem',
                            display: 'block'
                          }}
                        >
                          {detail.label}
                        </span>
                        <span 
                          className="detail-value"
                          style={{
                            color: "#ffffff",
                            fontSize: '1rem',
                            fontWeight: '600'
                          }}
                        >
                          {detail.value}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div 
                className="info-card service-tech-info"
                style={{
                  background: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  borderRadius: '1.5rem',
                  padding: '2rem',
                  backdropFilter: 'blur(15px)'
                }}
              >
                <h3 
                  className="info-card-title"
                  style={{
                    color: "#ffffff",
                    fontSize: '1.3rem',
                    marginBottom: '1.5rem'
                  }}
                >
                  Technologies utilisées
                </h3>
                <div 
                  className="tech-tags-grid"
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem'
                  }}
                >
                  {currentService.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="tech-tag-service"
                      data-aos="zoom-in" 
                      data-aos-delay={index * 50}
                      style={{
                        background: "rgba(255, 255, 255, 0.1)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        color: "#ffffff",
                        padding: '0.5rem 1rem',
                        borderRadius: '50px',
                        fontSize: '0.8rem',
                        fontWeight: '500'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Processus de Travail */}
              <div 
                className="info-card service-process-info"
                style={{
                  background: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  borderRadius: '1.5rem',
                  padding: '2rem',
                  backdropFilter: 'blur(15px)'
                }}
              >
                <h3 
                  className="info-card-title"
                  style={{
                    color: "#ffffff",
                    fontSize: '1.3rem',
                    marginBottom: '1.5rem'
                  }}
                >
                  Processus de Travail
                </h3>
                <div 
                  className="process-steps-compact"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem'
                  }}
                >
                  {[
                    { number: 1, title: "Consultation", description: "Analyse de vos besoins" },
                    { number: 2, title: "Conception", description: "Maquettes et planning" },
                    { number: 3, title: "Développement", description: "Implémentation et tests" },
                    { number: 4, title: "Livraison", description: "Déploiement et formation" }
                  ].map((step, index) => (
                    <div 
                      key={index}
                      className="process-step-compact"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem'
                      }}
                    >
                      <div 
                        className="step-number-compact"
                        style={{
                          background: `linear-gradient(135deg, ${currentService.color}, ${currentService.color}80)`,
                          color: "#ffffff",
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '0.9rem',
                          fontWeight: 'bold',
                          flexShrink: 0
                        }}
                      >
                        {step.number}
                      </div>
                      <div className="step-content-compact">
                        <h4 style={{ color: "#ffffff", margin: '0 0 0.25rem 0', fontSize: '1rem' }}>
                          {step.title}
                        </h4>
                        <p style={{ color: "#e0e0e0", margin: 0, fontSize: '0.8rem' }}>
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tous les Services en Bref */}
      <section 
        className="all-services-overview-tech"
        style={{
          backgroundColor: "#0A0F1F",
          padding: '6rem 1rem'
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div 
            className="section-header-tech text-center"
            style={{
              marginBottom: '4rem'
            }}
          >
            <h2 
              className="section-title-tech"
              style={{
                color: "#ffffff",
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                marginBottom: '1rem',
                background: 'linear-gradient(135deg, #667eea, #764ba2)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Tous mes <span style={{ display: 'block' }}>services</span>
            </h2>
            <p 
              className="section-subtitle-tech"
              style={{
                color: "#e0e0e0",
                fontSize: '1.1rem',
                maxWidth: '600px',
                margin: '0 auto'
              }}
            >
              Découvrez l'ensemble de nos compétences et domaines d'expertise
            </p>
          </div>

          <div 
            className="services-overview-grid-tech"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem'
            }}
          >
            {tabs.map((tab, index) => (
              <ServiceOverviewCard 
                key={tab.id}
                service={services[tab.id]}
                serviceKey={tab.id}
                activeTab={activeTab}
                expandedService={expandedService}
                setActiveTab={setActiveTab}
                setExpandedService={setExpandedService}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="services-cta-tech"
        style={{
          background: `
            linear-gradient(135deg, #0A0F1F 0%, #151F3F 50%, #0A0F1F 100%)
          `,
          padding: '6rem 1rem',
          textAlign: 'center'
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="services-cta-content">
            <h2 
              data-aos="fade-up"
              style={{
                color: "#ffffff",
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                marginBottom: '1.5rem'
              }}
            >
              Prêt à <span style={{
                background: 'linear-gradient(135deg, #667eea, #764ba2)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>démarrer</span> votre projet ?
            </h2>
            <p 
              data-aos="fade-up" 
              data-aos-delay="200"
              style={{
                color: "#e0e0e0",
                fontSize: '1.1rem',
                lineHeight: '1.6',
                marginBottom: '3rem'
              }}
            >
              Contactez-nous pour un devis personnalisé et gratuit adapté à vos besoins spécifiques
            </p>
            
            <div 
              className="services-cta-actions" 
              data-aos="zoom-in" 
              data-aos-delay="400"
              style={{ marginBottom: '3rem' }}
            >
              <Link 
                to="/contact" 
                className="btn-tech-primary btn-large"
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: "#ffffff",
                  border: 'none',
                  padding: '1.25rem 3rem',
                  borderRadius: '50px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 15px 30px rgba(102, 126, 234, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                🚀 Obtenir un devis gratuit
              </Link>
            </div>

            <div 
              className="cta-guarantees" 
              data-aos="fade-up" 
              data-aos-delay="600"
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '2rem',
                flexWrap: 'wrap'
              }}
            >
              {[
                { icon: "✅", text: "Devis gratuit et sans engagement" },
                { icon: "🛡️", text: "Garantie satisfait ou remboursé 15 jours" },
                { icon: "⚡", text: "Réponse sous 24h maximum" }
              ].map((guarantee, index) => (
                <div 
                  key={index}
                  className="guarantee-item"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: "#ffffff",
                    background: 'rgba(255, 255, 255, 0.05)',
                    padding: '1rem 1.5rem',
                    borderRadius: '50px',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <span className="guarantee-icon">{guarantee.icon}</span>
                  <span style={{ fontSize: '0.9rem' }}>{guarantee.text}</span>
                </div>
              ))}
            </div>
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
        
        @keyframes techFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
      `}</style>
    </div>
  );
};

// Composant Carte de Service
const ServiceOverviewCard = ({ service, serviceKey, activeTab, expandedService, setActiveTab, setExpandedService, index }) => (
  <div 
    className={`service-overview-card-tech ${activeTab === serviceKey ? 'active' : ''}`}
    onClick={() => {
      setActiveTab(serviceKey);
      setExpandedService(expandedService === serviceKey ? null : serviceKey);
    }}
    data-aos="zoom-in"
    data-aos-delay={index * 100}
    style={{
      background: "rgba(255, 255, 255, 0.08)",
      border: activeTab === serviceKey ? `2px solid ${service.color}` : "1px solid rgba(255, 255, 255, 0.2)",
      borderRadius: '1.5rem',
      overflow: 'hidden',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      backdropFilter: 'blur(15px)',
      position: 'relative'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-8px)';
      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
    }}
  >
    {/* Image du service */}
    <div 
      className="service-overview-image"
      style={{
        position: 'relative',
        height: '200px',
        overflow: 'hidden'
      }}
    >
      <img 
        src={service.image} 
        alt={service.title}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      />
      <div 
        className="service-image-overlay-tech"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(135deg, ${service.color}20, rgba(0,0,0,0.3))`
        }}
      ></div>
      <div 
        className="service-icon-overview"
        style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          background: service.color,
          color: "#ffffff",
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.5rem'
        }}
      >
        {service.icon}
      </div>
    </div>

    <div 
      className="service-overview-content"
      style={{
        padding: '2rem'
      }}
    >
      <h3 
        className="overview-title-tech"
        style={{
          color: "#ffffff",
          fontSize: '1.3rem',
          marginBottom: '0.5rem'
        }}
      >
        {service.title}
      </h3>
      <p 
        className="overview-description-tech"
        style={{
          color: "#e0e0e0",
          marginBottom: '1.5rem',
          fontSize: '0.9rem'
        }}
      >
        {service.description}
      </p>

      {/* Contenu dépliable */}
      {expandedService === serviceKey && (
        <div 
          className="service-expanded-content"
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '1.5rem'
          }}
        >
          <div className="expanded-details">
            <p style={{ color: "#e0e0e0", marginBottom: '1.5rem', fontSize: '0.9rem' }}>
              {service.details}
            </p>
            
            <div 
              className="expanded-pricing"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                marginBottom: '1.5rem'
              }}
            >
              <div className="pricing-item" style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span className="pricing-label" style={{ color: "#e0e0e0" }}>💰 Tarif :</span>
                <span className="pricing-value" style={{ color: "#ffffff", fontWeight: '600' }}>{service.price}</span>
              </div>
              <div className="pricing-item" style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span className="pricing-label" style={{ color: "#e0e0e0" }}>⏱️ Délai :</span>
                <span className="pricing-value" style={{ color: "#ffffff", fontWeight: '600' }}>{service.delay}</span>
              </div>
            </div>

            <Link 
              to="/contact"
              className="btn-service-choose"
              style={{
                background: `linear-gradient(135deg, ${service.color}, ${service.color}80)`,
                color: "#ffffff",
                border: 'none',
                padding: '0.75rem 1.5rem',
                borderRadius: '50px',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: '500',
                display: 'block',
                textAlign: 'center',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = `0 5px 15px ${service.color}40`;
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              Choisir ce service
            </Link>
          </div>
        </div>
      )}

      {/* Indicateur "En savoir plus" */}
      <div 
        className="service-expand-indicator"
        onClick={(e) => {
          e.stopPropagation();
          setExpandedService(expandedService === serviceKey ? null : serviceKey);
        }}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          color: "#ffffff",
          paddingTop: '1rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          cursor: 'pointer'
        }}
      >
        <span style={{ fontSize: '0.9rem' }}>
          {expandedService === serviceKey ? '▼ Moins' : 'En savoir plus'}
        </span>
        <span 
          className={`expand-arrow ${expandedService === serviceKey ? 'expanded' : ''}`}
          style={{
            color: "#ffffff",
            transform: expandedService === serviceKey ? 'rotate(180deg)' : 'rotate(0)',
            transition: 'transform 0.3s ease'
          }}
        >
          ▼
        </span>
      </div>
    </div>
  </div>
);

export default Services;