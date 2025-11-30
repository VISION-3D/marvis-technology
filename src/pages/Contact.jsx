import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaBullseye, FaCommentDots, FaPaperPlane } from "react-icons/fa";
import emailjs from 'emailjs-com';
import SEO from "../components/SEO";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sendStatus, setSendStatus] = useState('');

  const EMAILJS_CONFIG = {
    SERVICE_ID: 'service_abc123',
    TEMPLATE_ID: 'template_xyz789',  
    PUBLIC_KEY: 'pk_abcdefgh123456'
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSendStatus('');

    if (!formData.name || !formData.email || !formData.message) {
      setSendStatus('error');
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject || `Contact portfolio - ${formData.name}`,
          message: formData.message,
          reply_to: formData.email
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      setSendStatus('success');
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSendStatus(''), 5000);
    } catch (error) {
      console.error('ERREUR EmailJS:', error);
      if (error.text?.includes('Invalid template ID')) {
        setSendStatus('config_error');
      } else {
        setSendStatus('error');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "contactaqwatech@gmail.com",
      description: "Réponse sous 24h",
      action: () => {
        const subject = "Nouveau contact depuis votre portfolio";
        const body = "Bonjour M. (Mme),\n\nJe suis intéressé(e) par vos services et je souhaiterais discuter de mon projet avec vous.\n\nCordialement,";
        window.location.href = `mailto:contactaqwatech@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      },
      color: "#EC4899"
    },
    {
      icon: <FaWhatsapp />,
      title: "WhatsApp",
      value: "+221 76 949 06 85",
      description: "Discutons en direct",
      action: () => {
        const message = "Bonjour M. (Mme), je suis intéressé(e) par vos services et je souhaiterais discuter de mon projet avec vous.";
        window.open(`https://api.whatsapp.com/send?phone=221769490685&text=${encodeURIComponent(message)}`, '_blank');
      },
      color: "#25D366"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Localisation",
      value: "Thiès, Sénégal",
      description: "Remote & Présentiel",
      action: () => {
        window.open("https://www.google.com/maps/place/Thiès,+Sénégal", '_blank');
      },
      color: "#6C63FF"
    }
  ];

  const socialNetworks = [
    { 
      name: "GitHub", 
      icon: <FaGithub />, 
      action: () => window.open("https://github.com/Marvis225", '_blank'),
      color: "#333"
    },
    { 
      name: "LinkedIn", 
      icon: <FaLinkedin />, 
      action: () => window.open("https://linkedin.com/in/saliou-sene", '_blank'),
      color: "#0077B5"
    },
    { 
      name: "Twitter", 
      icon: <FaTwitter />, 
      action: () => window.open("https://twitter.com/Marvis_Sene", '_blank'),
      color: "#1DA1F2"
    },
    { 
      name: "Instagram", 
      icon: <FaInstagram />, 
      action: () => window.open("https://instagram.com/marvis_tech", '_blank'),
      color: "#E4405F"
    }
  ];

  const faqs = [
    {
      question: "Quels sont vos délais de livraison ?",
      answer: "Les délais varient selon la complexité du projet. Un site vitrine simple : 1-2 semaines. Une application complexe : 1-3 mois."
    },
    {
      question: "Proposez-vous un support après livraison ?",
      answer: "Oui, nous proposons un support technique de 30 jours gratuit après la livraison, puis des formules de maintenance mensuelles."
    },
    {
      question: "Travaillez-vous en remote ?",
      answer: "Absolument ! Nous travaillons principalement à distance avec des clients partout dans le monde."
    },
    {
      question: "Quels sont vos modes de paiement ?",
      answer: "Nous proposons un paiement échelonné : 30% à la signature, 40% à la mi-projet, 30% à la livraison. Paiement par virement bancaire ou mobile money."
    }
  ];

  return (
    <div className="contact-page" style={{ paddingTop: '80px' }}>
      <SEO
        title="TaqwaTech - Contact"
        description="Contactez TaqwaTech pour vos projets en développement web, applications et solutions IA sur mesure."
      />

      {/* Hero Section Contact */}
      <section
        className="contact-hero-tech"
        style={{
          background: `
            linear-gradient(135deg, 
              rgba(10, 15, 31, 0.98) 0%,
              rgba(20, 30, 70, 0.95) 50%,
              rgba(10, 15, 31, 0.98) 100%
            ),
            url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><pattern id="connection" width="60" height="60" patternUnits="userSpaceOnUse"><circle cx="30" cy="30" r="1" fill="rgba(102, 126, 234, 0.1)"/><path d="M 30 0 Q 45 15 30 30 Q 15 45 30 60" fill="none" stroke="rgba(102, 126, 234, 0.08)" stroke-width="0.5"/></pattern></defs><rect width="100%" height="100%" fill="rgba(10, 15, 31, 1)"/><rect width="100%" height="100%" fill="url(%23connection)"/></svg>')
          `,
          minHeight: '60vh',
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
          <div className="communication-orb orb-1"></div>
          <div className="communication-orb orb-2"></div>
          <div className="communication-orb orb-3"></div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            gap: "1.5rem",
            maxWidth: '800px',
            width: '100%',
            position: 'relative',
            zIndex: 2
          }}
        >
          {/* Badge */}
          <div
            className="tech-badge-contact"
            data-aos="fade-down"
            style={{
              background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.15) 0%, rgba(118, 75, 162, 0.15) 100%)',
              border: '1px solid rgba(102, 126, 234, 0.3)',
              padding: '0.75rem 1.5rem',
              borderRadius: '50px',
              display: 'inline-flex',
              alignItems: 'center',
              backdropFilter: 'blur(20px)',
              marginBottom: '1rem'
            }}
          >
            <span
              className="pulse-dot-contact"
              style={{
                backgroundColor: "#667eea",
                marginRight: '0.75rem',
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                animation: 'pulse 2s infinite'
              }}
            ></span>
            <h1 style={{ 
              margin: 0, 
              color: '#ffffff', 
              fontSize: 'clamp(0.9rem, 3vw, 1.1rem)',
              fontWeight: '600'
            }}>
              Contact
            </h1>
          </div>

          <h1 
            className="contact-hero-title" 
            data-aos="fade-up"
            style={{
              fontSize: 'clamp(2rem, 6vw, 3.5rem)',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundSize: '200% 200%',
              animation: 'gradientShift 6s ease infinite',
              marginBottom: '1rem',
              lineHeight: '1.2'
            }}
          >
            Discutons de votre <span style={{ display: 'block' }}>projet digital</span>
          </h1>

          <p
            className="contact-hero-description"
            data-aos="fade-up"
            data-aos-delay="200"
            style={{
              fontSize: 'clamp(0.9rem, 3vw, 1.1rem)',
              lineHeight: '1.6',
              color: '#e0e0e0',
              maxWidth: '600px',
              margin: '0 auto',
              padding: '0 1rem'
            }}
          >
            Vous avez une idée de projet ? Envie de collaborer ? 
            Contactez-nous et nous vous répondrons dans les plus brefs délais.
          </p>

          {/* Communication Indicators */}
          <div 
            className="communication-indicators" 
            data-aos="fade-up" 
            data-aos-delay="400"
            style={{
              display: 'flex',
              gap: 'clamp(0.5rem, 2vw, 2rem)',
              flexWrap: 'wrap',
              justifyContent: 'center',
              marginTop: '2rem',
              padding: '0 1rem'
            }}
          >
            {[
              { status: 'En ligne', active: true },
              { status: 'Réponse rapide', active: true },
              { status: 'Disponible', active: true }
            ].map((indicator, index) => (
              <div 
                key={index}
                className="indicator"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  padding: 'clamp(0.5rem, 2vw, 0.75rem) clamp(1rem, 3vw, 1.5rem)',
                  borderRadius: '50px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <div 
                  className="indicator-dot"
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: indicator.active ? '#10B981' : '#6B7280',
                    animation: indicator.active ? 'pulse 2s infinite' : 'none'
                  }}
                ></div>
                <span style={{ 
                  color: '#e0e0e0', 
                  fontSize: 'clamp(0.75rem, 2vw, 0.9rem)' 
                }}>
                  {indicator.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section 
        className="contact-main-tech"
        style={{
          background: `
            linear-gradient(135deg, #0A0F1F 0%, #151F3F 50%, #0A0F1F 100%)
          `,
          padding: 'clamp(2rem, 5vw, 6rem) clamp(1rem, 3vw, 2rem)',
          position: 'relative'
        }}
      >
        <div 
          className="container"
          style={{
            maxWidth: '1200px',
            margin: '0 auto'
          }}
        >
          <div 
            className="contact-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
              gap: 'clamp(2rem, 4vw, 4rem)',
              alignItems: 'start'
            }}
          >
            {/* Informations de Contact */}
            <div className="contact-info-tech" data-aos="fade-right">
              <div 
                className="contact-info-header"
                style={{
                  marginBottom: 'clamp(2rem, 4vw, 3rem)'
                }}
              >
                <h2 style={{
                  fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                  marginBottom: '1rem',
                  background: 'linear-gradient(135deg, #667eea, #764ba2)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  Nos coordonnées
                </h2>
                <p style={{
                  color: '#e0e0e0',
                  fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                  lineHeight: '1.6'
                }}>
                  Plusieurs moyens de nous contacter pour discuter de votre projet
                </p>
              </div>

              {/* Méthodes de Contact */}
              <div 
                className="contact-methods-grid"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'clamp(1rem, 2vw, 1.5rem)',
                  marginBottom: 'clamp(2rem, 4vw, 3rem)'
                }}
              >
                {contactMethods.map((method, index) => (
                  <div 
                    key={index} 
                    className="contact-method-card"
                    onClick={method.action}
                    data-aos="zoom-in"
                    data-aos-delay={index * 100}
                    style={{
                      background: 'rgba(255, 255, 255, 0.08)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      borderRadius: 'clamp(1rem, 2vw, 1.5rem)',
                      padding: 'clamp(1.5rem, 3vw, 2rem)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      backdropFilter: 'blur(15px)',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.background = `rgba(${parseInt(method.color.slice(1, 3), 16)}, ${parseInt(method.color.slice(3, 5), 16)}, ${parseInt(method.color.slice(5, 7), 16)}, 0.15)`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                    }}
                  >
                    <div 
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'clamp(1rem, 2vw, 1.5rem)',
                        marginBottom: '1rem'
                      }}
                    >
                      <div 
                        className="method-icon"
                        style={{
                          background: `${method.color}20`,
                          borderRadius: '50%',
                          width: 'clamp(50px, 8vw, 60px)',
                          height: 'clamp(50px, 8vw, 60px)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                          color: method.color,
                          flexShrink: 0
                        }}
                      >
                        {method.icon}
                      </div>
                      <div style={{ minWidth: 0 }}>
                        <h3 style={{
                          color: '#ffffff',
                          marginBottom: '0.25rem',
                          fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                          wordWrap: 'break-word'
                        }}>
                          {method.title}
                        </h3>
                        <span style={{
                          color: method.color,
                          fontWeight: '600',
                          fontSize: 'clamp(0.85rem, 2vw, 1rem)',
                          wordBreak: 'break-word'
                        }}>
                          {method.value}
                        </span>
                      </div>
                    </div>
                    <p style={{
                      color: '#e0e0e0',
                      fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
                      margin: 0
                    }}>
                      {method.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Réseaux Sociaux */}
              <div 
                className="social-section-tech"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  padding: 'clamp(1.5rem, 3vw, 2rem)',
                  borderRadius: 'clamp(1rem, 2vw, 1.5rem)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <h3 style={{
                  color: '#ffffff',
                  marginBottom: 'clamp(1rem, 2vw, 1.5rem)',
                  textAlign: 'center',
                  fontSize: 'clamp(1.1rem, 2vw, 1.3rem)'
                }}>
                  Suivez-nous
                </h3>
                <div 
                  className="social-grid-tech"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                    gap: 'clamp(0.75rem, 2vw, 1rem)'
                  }}
                >
                  {socialNetworks.map((social, index) => (
                    <div
                      key={index}
                      className="social-card-tech"
                      onClick={social.action}
                      data-aos="flip-up"
                      data-aos-delay={index * 100}
                      style={{
                        background: 'rgba(255, 255, 255, 0.08)',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        borderRadius: 'clamp(0.75rem, 2vw, 1rem)',
                        padding: 'clamp(1rem, 2vw, 1.5rem)',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        textAlign: 'center'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-3px)';
                        e.currentTarget.style.background = `rgba(${parseInt(social.color.slice(1, 3), 16)}, ${parseInt(social.color.slice(3, 5), 16)}, ${parseInt(social.color.slice(5, 7), 16)}, 0.15)`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                      }}
                    >
                      <div 
                        className="social-icon"
                        style={{
                          fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                          color: social.color,
                          marginBottom: '0.5rem'
                        }}
                      >
                        {social.icon}
                      </div>
                      <span style={{
                        color: '#ffffff',
                        fontSize: 'clamp(0.75rem, 2vw, 0.9rem)',
                        fontWeight: '500'
                      }}>
                        {social.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Formulaire de Contact */}
            <div className="contact-form-tech" data-aos="fade-left">
              <form 
                onSubmit={handleSubmit} 
                className="tech-contact-form"
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: 'clamp(1rem, 2vw, 1.5rem)',
                  padding: 'clamp(1.5rem, 3vw, 2.5rem)',
                  backdropFilter: 'blur(15px)'
                }}
              >
                <div 
                  className="form-header"
                  style={{
                    marginBottom: 'clamp(1.5rem, 3vw, 2rem)',
                    textAlign: 'center'
                  }}
                >
                  <h3 style={{
                    color: '#ffffff',
                    fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                    marginBottom: '0.5rem',
                    background: 'linear-gradient(135deg, #667eea, #764ba2)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
                    Envoyez un message
                  </h3>
                  <p style={{
                    color: '#e0e0e0',
                    fontSize: 'clamp(0.85rem, 2vw, 0.95rem)'
                  }}>
                    Décrivez votre projet en détail pour une réponse personnalisée
                  </p>
                </div>

                <div 
                  className="form-grid"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'clamp(1rem, 2vw, 1.5rem)'
                  }}
                >
                  {/* Nom et Email sur la même ligne */}
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                    gap: 'clamp(0.75rem, 2vw, 1rem)' 
                  }}>
                    {/* Nom complet */}
                    <div className="form-group" data-aos="fade-up">
                      <label htmlFor="name" className="form-label-tech" style={{
                        color: '#ffffff',
                        marginBottom: '0.5rem',
                        display: 'block',
                        fontWeight: '500',
                        fontSize: 'clamp(0.85rem, 2vw, 1rem)'
                      }}>
                        <span className="label-icon" style={{ marginRight: '0.5rem' }}><FaUser style={{ color: "#6C63FF" }} /></span>
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-input-tech"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Votre nom complet"
                        style={{
                          width: '100%',
                          padding: 'clamp(0.75rem, 2vw, 1rem)',
                          background: 'rgba(255, 255, 255, 0.1)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: '0.75rem',
                          color: '#ffffff',
                          fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                          transition: 'all 0.3s ease'
                        }}
                        onFocus={(e) => {
                          e.target.style.background = 'rgba(255, 255, 255, 0.15)';
                          e.target.style.borderColor = '#667eea';
                        }}
                        onBlur={(e) => {
                          e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                          e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                        }}
                      />
                    </div>

                    {/* Email */}
                    <div className="form-group" data-aos="fade-up" data-aos-delay="100">
                      <label htmlFor="email" className="form-label-tech" style={{
                        color: '#ffffff',
                        marginBottom: '0.5rem',
                        display: 'block',
                        fontWeight: '500',
                        fontSize: 'clamp(0.85rem, 2vw, 1rem)'
                      }}>
                        <span className="label-icon" style={{ marginRight: '0.5rem' }}><FaEnvelope style={{ color: "#EC4899" }} /></span>
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-input-tech"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="votre@email.com"
                        style={{
                          width: '100%',
                          padding: 'clamp(0.75rem, 2vw, 1rem)',
                          background: 'rgba(255, 255, 255, 0.1)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: '0.75rem',
                          color: '#ffffff',
                          fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                          transition: 'all 0.3s ease'
                        }}
                        onFocus={(e) => {
                          e.target.style.background = 'rgba(255, 255, 255, 0.15)';
                          e.target.style.borderColor = '#667eea';
                        }}
                        onBlur={(e) => {
                          e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                          e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                        }}
                      />
                    </div>
                  </div>

                  {/* Sujet */}
                  <div className="form-group" data-aos="fade-up" data-aos-delay="200">
                    <label htmlFor="subject" className="form-label-tech" style={{
                      color: '#ffffff',
                      marginBottom: '0.5rem',
                      display: 'block',
                      fontWeight: '500',
                      fontSize: 'clamp(0.85rem, 2vw, 1rem)'
                    }}>
                      <span className="label-icon" style={{ marginRight: '0.5rem' }}><FaBullseye style={{ color: "#8B5CF6" }} /></span>
                      Sujet
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-input-tech"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Ex: Développement site web"
                      style={{
                        width: '100%',
                        padding: 'clamp(0.75rem, 2vw, 1rem)',
                        background: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '0.75rem',
                        color: '#ffffff',
                        fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                        transition: 'all 0.3s ease'
                      }}
                      onFocus={(e) => {
                        e.target.style.background = 'rgba(255, 255, 255, 0.15)';
                        e.target.style.borderColor = '#667eea';
                      }}
                      onBlur={(e) => {
                        e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                      }}
                    />
                  </div>

                  {/* Message */}
                  <div className="form-group" data-aos="fade-up" data-aos-delay="300">
                    <label htmlFor="message" className="form-label-tech" style={{
                      color: '#ffffff',
                      marginBottom: '0.5rem',
                      display: 'block',
                      fontWeight: '500',
                      fontSize: 'clamp(0.85rem, 2vw, 1rem)'
                    }}>
                      <span className="label-icon" style={{ marginRight: '0.5rem' }}><FaCommentDots style={{ color: "#10B981" }} /></span>
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-textarea-tech"
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Décrivez votre projet en détail..."
                      style={{
                        width: '100%',
                        padding: 'clamp(0.75rem, 2vw, 1rem)',
                        background: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '0.75rem',
                        color: '#ffffff',
                        fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                        transition: 'all 0.3s ease',
                        resize: 'vertical',
                        minHeight: '120px'
                      }}
                      onFocus={(e) => {
                        e.target.style.background = 'rgba(255, 255, 255, 0.15)';
                        e.target.style.borderColor = '#667eea';
                      }}
                      onBlur={(e) => {
                        e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                      }}
                    ></textarea>
                  </div>
                </div>

                {/* Messages de statut */}
                {sendStatus === 'success' && (
                  <div 
                    className="status-message success" 
                    data-aos="fade-up"
                    style={{
                      background: 'rgba(16, 185, 129, 0.15)',
                      border: '1px solid #10B981',
                      color: '#10B981',
                      padding: '1rem',
                      borderRadius: '0.75rem',
                      margin: '1.5rem 0',
                      textAlign: 'center',
                      fontSize: 'clamp(0.85rem, 2vw, 1rem)'
                    }}
                  >
                    ✅ Message envoyé avec succès ! Nous vous répondrons dans les 24h.
                  </div>
                )}
                {sendStatus === 'error' && (
                  <div 
                    className="status-message error" 
                    data-aos="fade-up"
                    style={{
                      background: 'rgba(239, 68, 68, 0.15)',
                      border: '1px solid #EF4444',
                      color: '#EF4444',
                      padding: '1rem',
                      borderRadius: '0.75rem',
                      margin: '1.5rem 0',
                      textAlign: 'center',
                      fontSize: 'clamp(0.85rem, 2vw, 1rem)'
                    }}
                  >
                    ❌ Erreur d'envoi. Vérifiez votre connexion ou utilisez WhatsApp.
                  </div>
                )}
                {sendStatus === 'config_error' && (
                  <div 
                    className="status-message error" 
                    data-aos="fade-up"
                    style={{
                      background: 'rgba(245, 158, 11, 0.15)',
                      border: '1px solid #F59E0B',
                      color: '#F59E0B',
                      padding: '1rem',
                      borderRadius: '0.75rem',
                      margin: '1.5rem 0',
                      textAlign: 'center',
                      fontSize: 'clamp(0.85rem, 2vw, 1rem)'
                    }}
                  >
                    ⚠️ Configuration manquante. Contactez-nous par WhatsApp.
                  </div>
                )}

                {/* Bouton d'envoi */}
                <button 
                  type="submit" 
                  className={`submit-btn-tech ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                  data-aos="zoom-in"
                  data-aos-delay="400"
                  style={{
                    width: '100%',
                    background: isSubmitting 
                      ? 'rgba(102, 126, 234, 0.6)' 
                      : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: '#ffffff',
                    border: 'none',
                    padding: 'clamp(1rem, 2vw, 1.25rem) clamp(1.5rem, 3vw, 2rem)',
                    borderRadius: '50px',
                    fontSize: 'clamp(1rem, 2vw, 1.1rem)',
                    fontWeight: '600',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.75rem',
                    marginTop: '1rem'
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) {
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 10px 25px rgba(102, 126, 234, 0.4)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSubmitting) {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = 'none';
                    }
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <div 
                        className="submit-spinner"
                        style={{
                          width: '20px',
                          height: '20px',
                          border: '2px solid transparent',
                          borderTop: '2px solid #ffffff',
                          borderRadius: '50%',
                          animation: 'spin 1s linear infinite'
                        }}
                      ></div>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <span className="btn-icon"><FaPaperPlane /></span>
                      Envoyer le message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section 
        className="contact-faq-tech"
        style={{
          background: `
            linear-gradient(135deg, #0A0F1F 0%, #1a233f 50%, #0A0F1F 100%)
          `,
          padding: 'clamp(2rem, 5vw, 6rem) clamp(1rem, 3vw, 2rem)'
        }}
      >
        <div 
          className="container"
          style={{
            maxWidth: '1000px',
            margin: '0 auto'
          }}
        >
          <div 
            className="faq-header text-center" 
            data-aos="fade-up"
            style={{
              marginBottom: 'clamp(2rem, 4vw, 4rem)'
            }}
          >
            <h2 style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Questions fréquentes
            </h2>
            <p style={{
              color: '#e0e0e0',
              fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Trouvez rapidement des réponses à vos questions les plus courantes
            </p>
          </div>
          
          <div 
            className="faq-grid"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'clamp(1rem, 2vw, 1.5rem)',
              marginBottom: 'clamp(2rem, 4vw, 4rem)'
            }}
          >
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="faq-item-tech"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: 'clamp(1rem, 2vw, 1.5rem)',
                  padding: 'clamp(1.5rem, 3vw, 2rem)',
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
                  className="faq-question"
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 'clamp(0.75rem, 2vw, 1rem)',
                    marginBottom: '1rem'
                  }}
                >
                  <div 
                    className="question-icon"
                    style={{
                      background: 'linear-gradient(135deg, #667eea, #764ba2)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                      flexShrink: 0,
                      marginTop: '0.2rem'
                    }}
                  >
                    ❓
                  </div>
                  <h4 style={{
                    color: '#ffffff',
                    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                    margin: 0,
                    lineHeight: '1.4'
                  }}>
                    {faq.question}
                  </h4>
                </div>
                <div className="faq-answer">
                  <p style={{
                    color: '#e0e0e0',
                    lineHeight: '1.6',
                    margin: 0,
                    paddingLeft: 'clamp(2rem, 4vw, 2.5rem)',
                    fontSize: 'clamp(0.85rem, 2vw, 1rem)'
                  }}>
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA supplémentaire */}
          <div 
            className="faq-cta" 
            data-aos="fade-up"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: 'clamp(1rem, 2vw, 1.5rem)',
              padding: 'clamp(2rem, 4vw, 3rem) clamp(1.5rem, 3vw, 2rem)',
              textAlign: 'center',
              backdropFilter: 'blur(10px)'
            }}
          >
            <div className="faq-cta-content">
              <h3 style={{
                color: '#ffffff',
                fontSize: 'clamp(1.3rem, 3vw, 1.8rem)',
                marginBottom: '1rem'
              }}>
                Vous avez d'autres questions ?
              </h3>
              <p style={{
                color: '#e0e0e0',
                fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                marginBottom: 'clamp(1.5rem, 3vw, 2rem)',
                maxWidth: '500px',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}>
                N'hésitez pas à nous contacter directement pour toute information supplémentaire
              </p>
              <div className="faq-cta-actions">
                <button 
                  onClick={() => {
                    const message = "Bonjour, j'ai une question supplémentaire à vous poser.";
                    window.open(`https://api.whatsapp.com/send?phone=221769490685&text=${encodeURIComponent(message)}`, '_blank');
                  }}
                  className="btn-tech-primary"
                  style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: '#ffffff',
                    border: 'none',
                    padding: 'clamp(0.875rem, 2vw, 1rem) clamp(1.5rem, 3vw, 2rem)',
                    borderRadius: '50px',
                    fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 10px 25px rgba(102, 126, 234, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  Nous contacter maintenant
                </button>
              </div>
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
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .communication-orb {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, rgba(102, 126, 234, 0) 70%);
          animation: float 6s ease-in-out infinite;
        }

        .orb-1 {
          width: min(200px, 40vw);
          height: min(200px, 40vw);
          top: 10%;
          left: 5%;
          animation-delay: 0s;
        }

        .orb-2 {
          width: min(150px, 30vw);
          height: min(150px, 30vw);
          top: 60%;
          right: 5%;
          animation-delay: 2s;
        }

        .orb-3 {
          width: min(100px, 20vw);
          height: min(100px, 20vw);
          bottom: 20%;
          left: 15%;
          animation-delay: 4s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.1); }
        }

        /* Media Queries pour les très petits écrans */
        @media (max-width: 480px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
          
          .social-grid-tech {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          
          .form-grid > div {
            grid-template-columns: 1fr !important;
          }
          
          .faq-answer p {
            padding-left: 0 !important;
            margin-top: 0.5rem;
          }
          
          .faq-question {
            flex-direction: column;
            align-items: flex-start !important;
            gap: 0.5rem !important;
          }
        }

        @media (max-width: 768px) {
          .contact-method-card {
            text-align: center;
          }
          
          .contact-method-card > div {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;