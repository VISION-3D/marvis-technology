import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle, FaShieldAlt, FaBolt } from "react-icons/fa";
import { FaUser, FaClock } from "react-icons/fa";
import { FaRocket, FaStar, FaTools } from "react-icons/fa";
import { FaLaptopCode, FaMobileAlt, FaRobot, FaServer, FaBullhorn, FaComments } from "react-icons/fa";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

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
  { number: "+30", label: "Projets Effectués", icon: <FaRocket color="#6C63FF" /> },
  { number: "100%", label: "Satisfaction Client", icon: <FaStar color="#FBBF24" /> },
  { number: "+15", label: "Technologies Maîtrisées", icon: <FaTools color="#10B981" /> },
  { number: "100%", label: "Délais Respectés", icon: <FaClock color="#EF4444" /> }
];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const ProjectCard = ({ project }) => {
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
      <div style={{
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '20px',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        height: '100%',
        position: 'relative'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-10px)';
        e.currentTarget.style.borderColor = 'rgba(108, 99, 255, 0.3)';
        e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
        e.currentTarget.style.boxShadow = 'none';
      }}
      >
        {/* Badge Featured */}
        {project.featured && (
          <div style={{
            position: 'absolute',
            top: '1rem',
            left: '1rem',
            background: 'linear-gradient(135deg, #F59E0B, #D97706)',
            color: 'white',
            padding: '0.5rem 1rem',
            borderRadius: '10px',
            fontSize: '0.8rem',
            fontWeight: '700',
            zIndex: 3,
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            boxShadow: '0 5px 15px rgba(245, 158, 11, 0.3)'
          }}>
            <span>⭐</span>
            Projet Vedette
          </div>
        )}

        {/* Image du Projet */}
        <div style={{ position: 'relative', height: '250px', overflow: 'hidden' }}>
          {!imageLoaded && (
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'linear-gradient(90deg, #1a1f3a 25%, #2d3748 50%, #1a1f3a 75%)',
              backgroundSize: '200% 100%',
              animation: 'skeletonLoading 2s infinite'
            }}></div>
          )}
          <img 
            src={project.img} 
            alt={project.title}
            style={{ 
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.6s ease',
              opacity: imageLoaded ? 1 : 0
            }}
            onLoad={() => setImageLoaded(true)}
          />
          
          {/* Overlay avec Actions */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(10, 15, 31, 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0,
            transition: 'opacity 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = 1;
          }}
          >
            <div style={{ display: 'flex', gap: '1rem' }}>
              {project.demoLink && (
                <a 
                  href={project.demoLink} 
                  style={{
                    background: 'linear-gradient(135deg, #6C63FF, #5a52d5)',
                    color: 'white',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontWeight: '600',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  <span>👁️</span>
                  Voir
                </a>
              )}
              
              <button 
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  fontWeight: '600',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)';
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
                Code
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
              padding: '0.4rem 0.8rem',
              borderRadius: '8px',
              fontSize: '0.75rem',
              fontWeight: '700',
              zIndex: 3,
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
            }}
          >
            {getStatusText(project.status)}
          </div>
        </div>

        {/* Contenu du Projet */}
        <div style={{ padding: '1.5rem' }}>
          <h3 style={{ 
            color: 'white',
            fontSize: '1.25rem',
            fontWeight: '700',
            marginBottom: '0.5rem',
            lineHeight: '1.3'
          }}>
            {project.title}
          </h3>
          
          <p style={{ 
            color: '#94A3B8',
            marginBottom: '1rem',
            lineHeight: '1.5',
            fontSize: '0.95rem'
          }}>
            {project.description}
          </p>

          {/* Informations Client */}
      <div style={{ 
  display: 'flex', 
  justifyContent: 'space-between',
  fontSize: '0.85rem',
  color: '#6C63FF',
  marginBottom: '1rem',
  fontWeight: '600'
}}>
  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
    <FaUser /> {project.client}
  </span>
  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
    <FaClock /> {project.duration}
  </span>
</div>
          
          {/* Technologies Utilisées */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {project.tech.map((technology, index) => (
              <span 
                key={index}
                style={{
                  background: 'rgba(108, 99, 255, 0.1)',
                  color: '#6C63FF',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '12px',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  border: '1px solid rgba(108, 99, 255, 0.2)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(108, 99, 255, 0.2)';
                  e.target.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(108, 99, 255, 0.1)';
                  e.target.style.transform = 'translateY(0)';
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
    <div style={{ 
      paddingTop: '100px', 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0A0F1F 0%, #1a1f3a 100%)',
      color: 'white'
    }}>
      <div className="container">
        
        {/* Hero Section Portfolio */}
        <section style={{ padding: '80px 0 50px', textAlign: 'center' }}>
          <div style={{
            background: 'rgba(168, 85, 247, 0.1)',
            color: '#A855F7',
            padding: '0.75rem 1.5rem',
            borderRadius: '25px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            fontWeight: '600',
            marginBottom: '2rem',
            border: '1px solid rgba(168, 85, 247, 0.3)'
          }}>
            <div style={{
              width: '10px',
              height: '10px',
              background: '#A855F7',
              borderRadius: '50%',
              animation: 'pulse 2s ease-in-out infinite'
            }}></div>
            Mon Portfolio
          </div>
          
          <h1 style={{ 
            fontSize: '3rem', 
            fontWeight: '800',
            background: 'linear-gradient(135deg, #FFFFFF, #6C63FF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '1.5rem',
            lineHeight: '1.1'
          }}>
            Mes <span style={{
              background: 'linear-gradient(135deg, #00D4FF, #EC4899)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Réalisations</span>
          </h1>
          
          <p style={{ 
            fontSize: '1.2rem',
            color: '#94A3B8',
            marginBottom: '3rem',
            maxWidth: '700px',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: '1.7'
          }}>
            Découvrez une sélection de mes projets de développement web, applications mobiles, 
            solutions d'intelligence artificielle et stratégies digitales.
          </p>

          {/* Stats Portfolio */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
            {stats.map((stat, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: '800',
                  background: 'linear-gradient(135deg, #00D4FF, #EC4899)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '0.5rem'
                }}>
                  {stat.number}
                </div>
                <div style={{ color: '#94A3B8', fontSize: '0.9rem', fontWeight: '600' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Filtres Technologiques */}
        <section style={{ padding: '2rem 0' }}>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            {filters.map((filter, index) => (
              <button
                key={filter.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  background: activeFilter === filter.id 
                    ? 'linear-gradient(135deg, #6C63FF, #5a52d5)' 
                    : 'rgba(255, 255, 255, 0.05)',
                  border: activeFilter === filter.id 
                    ? '1px solid #6C63FF' 
                    : '1px solid rgba(255, 255, 255, 0.1)',
                  color: activeFilter === filter.id ? 'white' : '#94A3B8',
                  padding: '1rem 1.5rem',
                  borderRadius: '12px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  minWidth: '180px',
                  justifyContent: 'center'
                }}
                onClick={() => setActiveFilter(filter.id)}
                onMouseEnter={(e) => {
                  if (activeFilter !== filter.id) {
                    e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.color = 'white';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeFilter !== filter.id) {
                    e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.target.style.color = '#94A3B8';
                  }
                }}
              >
                <span style={{ fontSize: '1.2rem' }}>{filter.icon}</span>
                <span style={{ fontSize: '0.95rem' }}>{filter.label}</span>
                <span style={{
                  background: activeFilter === filter.id 
                    ? 'rgba(255, 255, 255, 0.3)' 
                    : 'rgba(255, 255, 255, 0.2)',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '10px',
                  fontSize: '0.8rem',
                  fontWeight: '700',
                  marginLeft: '0.5rem'
                }}>
                  {filter.count}
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* Grid des Projets */}
        <section style={{ padding: '2rem 0' }}>
          <div className="row">
            {filteredProjects.map((project, index) => (
              <div key={index} className="col-md-6 col-lg-4 mb-4">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          {/* Message si aucun projet */}
          {filteredProjects.length === 0 && (
            <div style={{ textAlign: 'center', padding: '4rem 2rem', color: '#94A3B8' }}>
              <div style={{ fontSize: '4rem', marginBottom: '1.5rem', opacity: 0.5 }}>🔍</div>
              <h3 style={{ color: 'white', marginBottom: '1rem' }}>Aucun projet trouvé</h3>
              <p>Aucun projet ne correspond aux filtres sélectionnés.</p>
            </div>
          )}
        </section>

        {/* CTA Section */}
        <section style={{ 
          padding: '80px 0',
          textAlign: 'center',
          background: 'rgba(255, 255, 255, 0.02)',
          borderRadius: '25px',
          margin: '4rem -15px',
          // eslint-disable-next-line no-dupe-keys
          padding: '4rem 2rem'
        }}>
          <h2 style={{ 
            fontSize: '2.5rem',
            fontWeight: '800',
            marginBottom: '1.5rem',
            color: 'white'
          }}>
            Vous avez un <span style={{
              background: 'linear-gradient(135deg, #00D4FF, #A855F7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>projet similaire</span> ?
          </h2>
          
          <p style={{ 
            fontSize: '1.2rem',
            color: '#94A3B8',
            marginBottom: '3rem',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Contactez-moi pour discuter de votre idée et obtenir un devis personnalisé
          </p>
          
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link 
              to="/contact"
              style={{
                background: 'linear-gradient(135deg, #6C63FF, #5a52d5)',
                color: 'white',
                padding: '1.2rem 2.5rem',
                borderRadius: '12px',
                textDecoration: 'none',
                fontWeight: '700',
                fontSize: '1.1rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                border: 'none',
                transition: 'all 0.3s ease'
              }}
             onMouseEnter={(e) => {
    e.currentTarget.style.transform = 'translateY(-3px)';
    e.currentTarget.style.boxShadow = '0 15px 35px rgba(108, 99, 255, 0.4)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = 'none';
  }}
>
  <FaRocket style={{ marginRight: '0.5rem', fontSize: '1.2rem' }} />
  Démarrer mon projet
</Link>
            
            <a 
              href="mailto:marvissene25@gmail.com"
              style={{
                background: 'transparent',
                color: '#6C63FF',
                padding: '1.2rem 2.5rem',
                borderRadius: '12px',
                textDecoration: 'none',
                fontWeight: '700',
                fontSize: '1.1rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                border: '2px solid #6C63FF',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(108, 99, 255, 0.1)';
                e.target.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              <span style={{ fontSize: '1.2rem' }}>📧</span>
              Discuter de mon projet
            </a>
          </div>

          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '2rem', 
            flexWrap: 'wrap',
            marginTop: '3rem'
          }}>
          

<div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', color: '#94A3B8' }}>
  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
    <FaCheckCircle style={{ color: '#10B981' }} />
    <span>Devis gratuit et sans engagement</span>
  </div>
  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
    <FaShieldAlt style={{ color: '#3B82F6' }} />
    <span>Garantie satisfait ou remboursé</span>
  </div>
  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
    <FaBolt style={{ color: '#F59E0B' }} />
    <span>Réponse sous 24h maximum</span>
  </div>
</div>
  </div>
 </section>

      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes skeletonLoading {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;