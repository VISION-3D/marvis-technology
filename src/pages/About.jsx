import React from "react";
import { Link } from "react-router-dom";
import { FaGlobe, FaLaptopCode, FaBullhorn, FaMobileAlt, FaTools, FaLightbulb, FaRobot, FaRocket } from "react-icons/fa";
import { FaStar, FaBolt, FaTrophy, FaBriefcase } from "react-icons/fa";
import SEO from "../components/SEO";;

const About = () => {
const skills = [
  { 
    name: "Création Site Web", 
    level: 100, 
    category: "Développement",
    icon: <FaGlobe />,
    color: "#6C63FF",
    description: "Sites vitrines, e-commerce, applications web sur mesure",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&auto=format&q=80"
  },
  { 
    name: "Application Web", 
    level: 100, 
    category: "Développement", 
    icon: <FaLaptopCode />,
    color: "#00D4FF",
    description: "Applications complètes frontend et backend",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop&auto=format&q=80"
  },
  { 
    name: "Publicité Digitale", 
    level: 100, 
    category: "Marketing",
    icon: <FaBullhorn />,
    color: "#EC4899",
    description: "Campagnes publicitaires et stratégies digitales",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=300&fit=crop&auto=format&q=80"
  },
  { 
    name: "Communication Digitale", 
    level: 100, 
    category: "Marketing",
    icon: <FaMobileAlt />,
    color: "#10B981",
    description: "Stratégie de présence en ligne et branding",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=300&fit=crop&auto=format&q=80"
  },
  { 
    name: "Maintenance Informatique", 
    level: 100, 
    category: "Support",
    icon: <FaTools />,
    color: "#F59E0B",
    description: "Support technique et maintenance proactive",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop&auto=format&q=80"
  },
  { 
    name: "Conseil Digital", 
    level: 100, 
    category: "Stratégie",
    icon: <FaLightbulb />,
    color: "#8B5CF6",
    description: "Audit et stratégie de transformation digitale",
image: "https://images.pexels.com/photos/5506181/pexels-photo-5506181.jpeg?auto=compress&cs=tinysrgb&h=400&w=700"
  },
  { 
    name: "Intelligence Artificielle", 
    level: 100, 
    category: "Innovation",
    icon: <FaRobot />,
    color: "#EF4444",
    description: "Solutions IA et automatisation intelligente",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&auto=format&q=80"
  },
  { 
    name: "SEO & Référencement", 
    level: 100, 
    category: "Marketing",
    icon: <FaRocket />,
    color: "#3B82F6",
    description: "Optimisation pour les moteurs de recherche",
    image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=400&h=300&fit=crop&auto=format&q=80"
  }
];


const stats = [
  { number: "+30", label: "Projets Réalisés", icon: <FaRocket /> },
  { number: "100 %", label: "Satisfaction Client", icon: <FaStar /> },
  { number: "24h", label: "Support Réactif", icon: <FaBolt /> },
  { number: "+15", label: "Technologies Maîtrisées", icon: <FaTools /> }
];

const achievements = [
  { icon: <FaTrophy />, title: "Certifié", description: "Formation intensive endéveloppement logiciel aveccompétences en IA" },
  { icon: <FaBriefcase />, title: "Expérience Professionnelle", description: "Expérience solide..." },
  { icon: <FaGlobe />, title: "International", description: "Collaboration mondiale..." },
  { icon: <FaLightbulb />, title: "Solutions Innovantes", description: "Toujours à la pointe de la Technologie" }
];



return (
    <div className="about-page" style={{ paddingTop: '80px' }}>
      

{/* SEO pour la page About */}
      <SEO
        title="TaqwaTech - À propos de Saliou SENE"
        description="Découvrez l'expertise digitale de Saliou SENE : développement web, intelligence artificielle et marketing digital."
      />




      {/* Hero Section avec Background Énergétique */}
      <section className="tech-hero" style={{
        background: "linear-gradient(to bottom, #0A0F1FAA, #0A0F1F), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop&auto=format&q=80') center/cover",
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Overlay énergétique */}
        <div className="hero-energy-overlay">
          <div className="energy-pulse" style={{borderColor: "#ffffff20"}}></div>
          <div className="digital-particles">
            <div className="particle" style={{backgroundColor: "#ffffff"}}></div>
            <div className="particle" style={{backgroundColor: "#ffffff"}}></div>
            <div className="particle" style={{backgroundColor: "#ffffff"}}></div>
            <div className="particle" style={{backgroundColor: "#ffffff"}}></div>
            <div className="particle" style={{backgroundColor: "#ffffff"}}></div>
          </div>
        </div>

        {/* Contenu Principal */}
        <div className="container" style={{ position: 'relative', zIndex: 3 }}>
          <div className="row align-items-center">
            <div className="col-lg-8 mx-auto text-center">
              
              {/* Badge Animé */}
              <div className="hero-badge-tech" style={{
                backgroundColor: "#ffffff15",
                border: "1px solid #ffffff30",
                color: "#ffffff",
                backdropFilter: "blur(10px)"
              }}>
                <span className="pulse-dot-hero" style={{backgroundColor: "#5c92f7ff"}}></span>
                À Propos de Moi
              </div>

              {/* Titre Principal avec Effet Glitch */}
              <h1 className="hero-title-tech" style={{color: "#ffffff"}}>
                <span className="title-glitch" data-text="" style={{color: "#ffffff"}}>Saliou SENE</span>
              </h1>

              {/* Sous-titre Énergétique */}
              <h2 className="hero-subtitle-tech" style={{color: "#e0e0e0"}}>
                Développeur Full Stack & Intelligence Artificielle
              </h2>

              {/* Description */}
              <p className="hero-description-tech" style={{color: "#e0e0e0"}}>
                Fondateur de <strong style={{color: "#ffffff"}}>TaqwaTech </strong>. 
                Je crée des solutions digitales innovantes qui transforment vos idées en réalité.
              </p>

              {/* Stats Impactantes */}
              <div className="hero-stats-grid">
                {stats.map((stat, index) => (
                  <div key={index} className="hero-stat-item" style={{
                    backgroundColor: "#ffffff10",
                    border: "1px solid #ffffff20",
                    color: "#ffffff"
                  }}>
                    <div className="stat-icon" style={{color: "#ffffff"}}>{stat.icon}</div>
                    <div className="stat-number" style={{color: "#ffffff"}}>{stat.number}</div>
                    <div className="stat-label" style={{color: "#e0e0e0"}}>{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="hero-actions-tech">
                <Link to="/contact" className="btn-hero-primary" style={{
                  backgroundColor: "#ffffff",
                  color: "#0A0F1F",
                  border: "2px solid #ffffff"
                }}>
                  <span className="btn-sparkle" style={{backgroundColor: "#ffffff"}}></span>
                  Discuter de mon projet
                </Link>
                <Link to="/portfolio" className="btn-hero-secondary" style={{
                  backgroundColor: "transparent",
                  color: "#ffffff",
                  border: "2px solid #ffffff"
                }}>
                  Voir mes réalisations
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Expertise */}
      <section className="expertise-section" style={{backgroundColor: "#0A0F1F", color: "#ffffff"}}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="expertise-content">
                <h2 style={{color: "#ffffff"}}>Mon Expertise Digitale</h2>
                <p style={{color: "#e0e0e0"}}>
                  Je combine expertise technique et vision stratégique pour créer 
                  des solutions digitales qui répondent parfaitement à vos objectifs 
                  business. Mon approche est centrée sur l'innovation et les résultats.
                </p>

                <div className="expertise-tags">
                  {["Stratégie Digitale", "Développement Web", "IA & Innovation", "Marketing Digital", "UX/UI Design", "Analytics"].map((expertise, index) => (
                    <span key={index} className="expertise-tag" style={{
                      backgroundColor: "#ffffff15",
                      border: "1px solid #ffffff30",
                      color: "#ffffff"
                    }}>
                      {expertise}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="achievements-grid">
                {achievements.map((achievement, index) => (
                  <div key={index} className="achievement-card" style={{
                    backgroundColor: "#ffffff10",
                    border: "1px solid #ffffff20",
                    color: "#ffffff"
                  }}>
                    <div className="achievement-icon" style={{color: "#ffffff"}}>{achievement.icon}</div>
                    <div className="achievement-content">
                      <h4 style={{color: "#ffffff"}}>{achievement.title}</h4>
                      <p style={{color: "#e0e0e0"}}>{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Compétences Détaillées avec Images */}
      <section className="skills-detailed-section" style={{backgroundColor: "#0A0F1F", color: "#ffffff"}}>
        <div className="container">
          <div className="section-header text-center">
            <h2 style={{color: "#ffffff"}}>Mes <span className="tech-gradient">Compétences</span></h2>
            <p style={{color: "#e0e0e0"}}>Un ensemble complet de compétences pour couvrir tous vos besoins digitaux</p>
          </div>

          <div className="skills-grid-detailed">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card-detailed" style={{
                backgroundColor: "#ffffff10",
                border: "1px solid #ffffff20",
                color: "#ffffff"
              }}>
                <div className="skill-image-container">
                  <img src={skill.image} alt={skill.name} className="skill-image" />
                  <div className="skill-image-overlay" style={{ background: `linear-gradient(transparent, ${skill.color}20)` }}></div>
                  <div className="skill-icon-badge" style={{
                    backgroundColor: "#ffffff",
                    color: "#0A0F1F"
                  }}>{skill.icon}</div>
                </div>

                <div className="skill-content">
                  <div className="skill-header">
                    <h3 style={{color: "#ffffff"}}>{skill.name}</h3>
                    <span className="skill-category" style={{ color: skill.color }}>{skill.category}</span>
                  </div>

                  <p className="skill-description" style={{color: "#e0e0e0"}}>{skill.description}</p>

                  <div className="skill-progress-container">
                    <div className="skill-progress-labels">
                      <span style={{color: "#e0e0e0"}}>Maîtrise</span>
                      <span className="skill-percent" style={{color: "#ffffff"}}>{skill.level}%</span>
                    </div>
                    
                    <div className="skill-progress-bar" style={{backgroundColor: "#ffffff20"}}>
                      <div 
                        className="skill-progress-fill"
                        style={{ 
                          width: `${skill.level}%`,
                          background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`
                        }}
                      >
                        <div className="progress-shine" style={{backgroundColor: "#ffffff"}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section CTA Finale */}
      <section className="about-cta-final" style={{
        background: "linear-gradient(135deg, #0A0F1F 0%, #1a1f3f 100%)",
        color: "#ffffff"
      }}>
        <div className="container text-center">
          <h2 style={{color: "#ffffff"}}>Prêt à transformer votre présence digitale ?</h2>
          <p style={{color: "#e0e0e0"}}>Discutons de votre projet et trouvons ensemble la solution idéale</p>
          
          <div className="cta-actions-final">
            <Link to="/contact" className="btn-cta-primary" style={{
              backgroundColor: "#ffffff",
              color: "#0A0F1F",
              border: "2px solid #ffffff"
            }}>
              Commencer maintenant
            </Link>
            <Link to="/services" className="btn-cta-secondary" style={{
              backgroundColor: "transparent",
              color: "#ffffff",
              border: "2px solid #ffffff"
            }}>
              Voir mes services
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
export default About;   