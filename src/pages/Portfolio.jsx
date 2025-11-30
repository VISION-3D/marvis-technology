import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle, FaShieldAlt, FaBolt } from "react-icons/fa";
import { FaUser, FaClock } from "react-icons/fa";
import { FaRocket, FaStar, FaTools } from "react-icons/fa";
import { FaLaptopCode, FaMobileAlt, FaRobot, FaServer, FaBullhorn, FaComments } from "react-icons/fa";
import SEO from "../components/SEO";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      title: "Site E-commerce Moderne",
      description: "Plateforme e-commerce complète avec panier, paiement sécurisé et administration avancée",
      img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&auto=format&q=80",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
      demoLink: "",
      codeLink: "",
      category: "web",
      status: "live",
      featured: true,
      client: "Boutique de Mode",
      duration: "6 semaines"
    },
    {
      title: "Application de Gestion d'Entreprise",
      description: "Outil complet de gestion avec CRM, facturation et tableau de bord analytique",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&auto=format&q=80",
      tech: ["Vue.js", "Express", "MySQL", "Chart.js", "JWT"],
      demoLink: "#",
      codeLink: "#",
      category: "web",
      status: "live",
      featured: false,
      client: "Startup Tech",
      duration: "8 semaines"
    },
    {
      title: "Chatbot IA pour Support Client",
      description: "Assistant intelligent avec apprentissage automatique et intégration WhatsApp",
      img: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop&auto=format&q=80",
      tech: ["Python", "TensorFlow", "React", "WebSocket", "OpenAI"],
      demoLink: "",
      codeLink: "",
      category: "ai",
      status: "live",
      featured: true,
      client: "Centre d'Appel",
      duration: "10 semaines"
    },
    {
      title: "Application Mobile de Productivité",
      description: "App de gestion des tâches avec synchronisation cloud et notifications intelligentes",
      img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&auto=format&q=80",
      tech: ["React Native", "Firebase", "Redux", "iOS", "Android"],
      demoLink: "",
      codeLink: "",
      category: "mobile",
      status: "live",
      featured: false,
      client: "Entreprise SaaS",
      duration: "12 semaines"
    },
    {
      title: "API REST Sécurisée pour FinTech",
      description: "API bancaire avec authentification avancée, documentation Swagger et microservices",
      img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop&auto=format&q=80",
      tech: ["Node.js", "JWT", "Swagger", "MongoDB", "Docker"],
      demoLink: "",
      codeLink: "",
      category: "backend",
      status: "live",
      featured: true,
      client: "FinTech Startup",
      duration: "7 semaines"
    },
    {
      title: "Tableau de Bord Analytique en Temps Réel",
      description: "Dashboard avec visualisation de données en direct et rapports automatisés",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&auto=format&q=80",
      tech: ["React", "D3.js", "WebSocket", "Node.js", "PostgreSQL"],
      demoLink: "",
      codeLink: "",
      category: "web",
      status: "live",
      featured: false,
      client: "Agence Marketing",
      duration: "5 semaines"
    },
    {
      title: "Campagne Publicitaire Digitale",
      description: "Stratégie complète Google Ads et réseaux sociaux avec optimisation ROI",
      img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop&auto=format&q=80",
      tech: ["Google Ads", "Meta Ads", "Analytics", "SEO", "CRO"],
      demoLink: "",
      codeLink: "",
      category: "marketing",
      status: "completed",
      featured: false,
      client: "Restaurant Premium",
      duration: "3 semaines"
    },
    {
      title: "Stratégie de Communication Digitale",
      description: "Refonte complète de l'identité digitale et stratégie de contenu",
      img: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=600&fit=crop&auto=format&q=80",
      tech: ["Branding", "Content Strategy", "Social Media", "Email Marketing"],
      demoLink: "",
      codeLink: "",
      category: "communication",
      status: "completed",
      featured: true,
      client: "Cabinet d'Avocats",
      duration: "4 semaines"
    }
  ];

  const filters = [
    { id: "all", label: "Tous les projets", count: projects.length, icon: <FaStar /> },
    { id: "web", label: "Développement Web", count: projects.filter(p => p.category === "web").length, icon: <FaLaptopCode /> },
    { id: "mobile", label: "Applications Mobile", count: projects.filter(p => p.category === "mobile").length, icon: <FaMobileAlt /> },
    { id: "ai", label: "Intelligence Artificielle", count: projects.filter(p => p.category === "ai").length, icon: <FaRobot /> },
    { id: "backend", label: "API & Backend", count: projects.filter(p => p.category === "backend").length, icon: <FaServer /> },
    { id: "marketing", label: "Marketing Digital", count: projects.filter(p => p.category === "marketing").length, icon: <FaBullhorn /> },
    { id: "communication", label: "Communication", count: projects.filter(p => p.category === "communication").length, icon: <FaComments /> }
  ];

  const stats = [
    { number: "+30", label: "Projets Effectués", icon: <FaRocket /> },
    { number: "100%", label: "Satisfaction", icon: <FaStar /> },
    { number: "+15", label: "Technologies Maîtrisées", icon: <FaTools /> },
    { number: "100%", label: "Délais Respectés", icon: <FaClock /> }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const ProjectCard = ({ project, index }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const getStatusColor = (status) => {
      switch (status) {
        case "live": return "#10B981";
        case "development": return "#F59E0B";
        case "completed": return "#3B82F6";
        default: return "#6B7280";
      }
    };

    const getStatusText = (status) => {
      switch (status) {
        case "live": return "En Ligne";
        case "development": return "En Développement";
        case "completed": return "Terminé";
        default: return status;
      }
    };

    return (
      <div 
        className="project-card"
        style={{
          background: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '1.5rem',
          overflow: 'hidden',
          transition: 'all 0.3s ease',
          backdropFilter: 'blur(20px)',
          position: 'relative'
        }}
        onMouseEnter={() => setHoveredProject(index)}
        onMouseLeave={() => setHoveredProject(null)}
      >
        {/* Badge Featured */}
        {project.featured && (
          <div style={{
            position: 'absolute',
            top: '1rem',
            left: '1rem',
            background: 'linear-gradient(135deg, #FFD700, #FFA500)',
            color: '#000',
            padding: '0.5rem 1rem',
            borderRadius: '50px',
            fontSize: '0.8rem',
            fontWeight: '600',
            zIndex: 2,
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <FaStar />
            Projet Vedette
          </div>
        )}

        {/* Image du Projet */}
        <div style={{
          position: 'relative',
          overflow: 'hidden',
          height: '250px'
        }}>
          {!imageLoaded && (
            <div style={{
              width: '100%',
              height: '100%',
              background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
              backgroundSize: '200% 100%',
              animation: 'loading 1.5s infinite'
            }}></div>
          )}
          <img 
            src={project.img} 
            alt={project.title}
            onLoad={() => setImageLoaded(true)}
            style={{ 
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: imageLoaded ? 1 : 0,
              transition: 'all 0.3s ease',
              transform: hoveredProject === index ? 'scale(1.1)' : 'scale(1)'
            }}
          />
          
          {/* Overlay avec Actions */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.9) 0%, rgba(118, 75, 162, 0.9) 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: hoveredProject === index ? 1 : 0,
            transition: 'all 0.3s ease'
          }}>
            <div style={{
              display: 'flex',
              gap: '1rem'
            }}>
              {project.demoLink && (
                <a 
                  href={project.demoLink} 
                  style={{
                    background: 'rgba(255, 255, 255, 0.9)',
                    color: '#667eea',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '50px',
                    textDecoration: 'none',
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = '#ffffff';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.9)';
                    e.target.style.transform = 'translateY(0)';
                  }}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <span>👁️</span>
                  Voir le projet
                </a>
              )}
              
              <button 
                style={{
                  background: 'transparent',
                  border: '2px solid rgba(255, 255, 255, 0.9)',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '50px',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.transform = 'translateY(0)';
                }}
                onClick={() => {
                  if (project.codeLink) {
                    window.open(project.codeLink, '_blank');
                  } else {
                    alert("Code source disponible sur demande : marvissene25@gmail.com");
                  }
                }}
              >
                <span>💻</span>
                Code Source
              </button>
            </div>
          </div>

          {/* Status Badge */}
          <div 
            style={{ 
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              background: getStatusColor(project.status),
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '50px',
              fontSize: '0.8rem',
              fontWeight: '600',
              zIndex: 2
            }}
          >
            {getStatusText(project.status)}
          </div>
        </div>

        {/* Contenu du Projet */}
        <div style={{ padding: '2rem' }}>
          <h3 style={{ 
            margin: '0 0 1rem 0',
            fontSize: '1.3rem',
            fontWeight: '700',
            color: '#ffffff'
          }}>
            {project.title}
          </h3>
          
          <p style={{ 
            color: '#e0e0e0',
            lineHeight: '1.6',
            marginBottom: '1.5rem'
          }}>
            {project.description}
          </p>

          {/* Informations Client */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1.5rem',
            padding: '1rem',
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '1rem'
          }}>
            <span style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#e0e0e0',
              fontSize: '0.9rem'
            }}>
              <FaUser color="#667eea" />
              {project.client}
            </span>
            <span style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#e0e0e0',
              fontSize: '0.9rem'
            }}>
              <FaClock color="#667eea" />
              {project.duration}
            </span>
          </div>
          
          {/* Technologies Utilisées */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem'
          }}>
            {project.tech.map((technology, techIndex) => (
              <span 
                key={techIndex} 
                style={{
                  background: 'rgba(102, 126, 234, 0.2)',
                  color: '#667eea',
                  padding: '0.5rem 1rem',
                  borderRadius: '50px',
                  fontSize: '0.8rem',
                  fontWeight: '500',
                  border: '1px solid rgba(102, 126, 234, 0.3)'
                }}
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="portfolio-page" style={{ paddingTop: '80px' }}>
      <SEO
        title="TaqwaTech - Portfolio"
        description="Découvrez le portfolio de TaqwaTech avec nos projets web, applications et solutions IA réalisés."
      />

      {/* Hero Section Portfolio */}
      <section style={{
        background: `
          linear-gradient(135deg, 
            rgba(10, 15, 31, 0.98) 0%,
            rgba(20, 30, 70, 0.95) 50%,
            rgba(10, 15, 31, 0.98) 100%
          ),
          url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><pattern id="hex" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M30 0L60 15V45L30 60L0 45V15Z" fill="none" stroke="rgba(120, 119, 198, 0.08)" stroke-width="1"/></pattern></defs><rect width="100%" height="100%" fill="rgba(10, 15, 31, 1)"/><rect width="100%" height="100%" fill="url(%23hex)"/></svg>')
        `,
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        color: '#ffffff',
        textAlign: 'center',
        padding: '4rem 1rem'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 2
        }}>
          <div style={{
            background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.15) 0%, rgba(118, 75, 162, 0.15) 100%)',
            border: '1px solid rgba(102, 126, 234, 0.3)',
            padding: '1rem 2rem',
            borderRadius: '50px',
            display: 'inline-flex',
            alignItems: 'center',
            marginBottom: '2rem',
            backdropFilter: 'blur(20px)'
          }}>
            <span style={{
              backgroundColor: "#667eea",
              marginRight: '1rem',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              animation: 'pulse 2s infinite'
            }}></span>
            Mon Portfolio
          </div>
          
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            marginBottom: '1.5rem',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundSize: '200% 200%',
            animation: 'gradientShift 6s ease infinite'
          }}>
            Mes <span style={{ color: '#ffffff' }}>Réalisations</span>
          </h1>
          
          <p style={{ 
            maxWidth: '600px',
            margin: '0 auto 3rem',
            fontSize: '1.2rem',
            lineHeight: '1.6',
            color: '#e0e0e0'
          }}>
            Découvrez une sélection de mes projets de développement web, applications mobiles, 
            solutions d'intelligence artificielle et stratégies digitales.
          </p>

          {/* Stats */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '3rem',
            flexWrap: 'wrap',
            marginBottom: '3rem'
          }}>
            {stats.map((stat, index) => (
              <div key={index} style={{
                textAlign: 'center',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '1.5rem',
                padding: '2rem 1.5rem',
                minWidth: '150px',
                backdropFilter: 'blur(15px)',
                transition: 'all 0.3s ease'
              }}>
                <div style={{ 
                  fontSize: '2.5rem',
                  marginBottom: '1rem',
                  background: 'linear-gradient(135deg, #667eea, #764ba2)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  {stat.icon}
                </div>
                <div style={{ 
                  fontSize: '2rem',
                  marginBottom: '0.5rem',
                  fontWeight: '700',
                  color: '#ffffff'
                }}>
                  {stat.number}
                </div>
                <div style={{ 
                  color: "#e0e0e0",
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filtres */}
      <section style={{
        background: 'linear-gradient(135deg, #0A0F1F 0%, #151F3F 100%)',
        padding: '3rem 1rem',
        position: 'sticky',
        top: '80px',
        zIndex: 100,
        backdropFilter: 'blur(20px)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap'
          }}>
            {filters.map((filter) => (
              <button
                key={filter.id}
                style={{
                  background: activeFilter === filter.id 
                    ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
                    : 'rgba(255, 255, 255, 0.08)',
                  border: activeFilter === filter.id ? 'none' : '1px solid rgba(255, 255, 255, 0.2)',
                  color: activeFilter === filter.id ? '#ffffff' : '#e0e0e0',
                  padding: '1rem 1.5rem',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  fontWeight: '600',
                  fontSize: '0.9rem',
                  backdropFilter: 'blur(10px)'
                }}
                onMouseEnter={(e) => {
                  if (activeFilter !== filter.id) {
                    e.target.style.background = 'rgba(102, 126, 234, 0.2)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeFilter !== filter.id) {
                    e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                  }
                }}
                onClick={() => setActiveFilter(filter.id)}
              >
                <span>{filter.icon}</span>
                <span>{filter.label}</span>
                <span style={{
                  background: activeFilter === filter.id ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '20px',
                  fontSize: '0.8rem'
                }}>
                  {filter.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid des Projets */}
      <section style={{
        background: 'linear-gradient(135deg, #0A0F1F 0%, #151F3F 50%, #0A0F1F 100%)',
        padding: '4rem 1rem',
        minHeight: '60vh'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {filteredProjects.length > 0 ? (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
              gap: '2rem'
            }}>
              {filteredProjects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          ) : (
            <div style={{
              textAlign: 'center',
              padding: '4rem 2rem',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '2rem',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🔍</div>
              <h3 style={{ color: '#ffffff', marginBottom: '1rem' }}>Aucun projet trouvé</h3>
              <p style={{ color: '#e0e0e0' }}>Aucun projet ne correspond aux filtres sélectionnés.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '6rem 1rem',
        textAlign: 'center',
        color: '#ffffff'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <h2 style={{ 
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            marginBottom: '1.5rem'
          }}>
            Transformons votre idée en réalité
          </h2>
          <p style={{ 
            fontSize: '1.2rem',
            marginBottom: '3rem',
            opacity: 0.9
          }}>
            Contactez-moi pour un devis personnalisé et gratuit
          </p>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1.5rem',
            flexWrap: 'wrap',
            marginBottom: '3rem'
          }}>
            <Link 
              to="/contact" 
              style={{
                background: '#ffffff',
                color: '#667eea',
                padding: '1.2rem 2.5rem',
                borderRadius: '50px',
                textDecoration: 'none',
                fontWeight: '700',
                fontSize: '1.1rem',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              <FaRocket />
              Démarrer mon projet
            </Link>
            
            <a 
              href="mailto:marvissene25@gmail.com"
              style={{
                background: 'transparent',
                border: '2px solid rgba(255, 255, 255, 0.8)',
                color: '#ffffff',
                padding: '1.2rem 2.5rem',
                borderRadius: '50px',
                textDecoration: 'none',
                fontWeight: '700',
                fontSize: '1.1rem',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                e.target.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              <span>📧</span>
              Discuter de mon projet
            </a>
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '3rem',
            flexWrap: 'wrap'
          }}>
            {[
              { icon: <FaCheckCircle />, text: 'Devis gratuit' },
              { icon: <FaShieldAlt />, text: 'Garantie satisfaction' },
              { icon: <FaBolt />, text: 'Réponse sous 24h' }
            ].map((item, index) => (
              <div key={index} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                fontSize: '1rem'
              }}>
                {item.icon}
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Styles CSS */}
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
        
        @keyframes loading {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;