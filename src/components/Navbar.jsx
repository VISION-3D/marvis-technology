// --- NAVBAR RÉVOLUTIONNAIRE 3.0 ---
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/theme.css";
import { 
  FaSearch, FaRobot, FaYoutube, FaFacebook, FaTwitter, 
  FaLinkedin, FaGithub, FaInstagram, FaBars, FaTimes,
  FaChevronDown, FaGlobe, FaMoon, FaSun
} from "react-icons/fa";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const searchRef = useRef(null);
  const location = useLocation();

  // Effets de souris et scroll
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setIsSearchOpen(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Navigation items avec icônes
const navItems = [
  { path: "/", label: "Accueil", icon: "⟡", id: "home" },          
  { path: "/about", label: "À propos", icon: "⧉", id: "about" },     
  { path: "/services", label: "Services", icon: "⚛", id: "services" }, 
  { path: "/portfolio", label: "Portfolio", icon: "⌬", id: "portfolio" },
  { path: "/contact", label: "Contact", icon: "✦", id: "contact" }      
];


  // Quick actions avec animations
  const quickActions = [
    { icon: <FaRobot />, label: "IA", color: "#8B5CF6", action: () => window.open('/ai-tools') },
    { icon: <FaYoutube />, label: "YouTube", color: "#FF0000", action: () => window.open('https://youtube.com') },
    { icon: <FaGithub />, label: "GitHub", color: "#333", action: () => window.open('https://github.com') },
    { icon: <FaLinkedin />, label: "LinkedIn", color: "#0077B5", action: () => window.open('https://linkedin.com') }
  ];

  return (
    <>
      {/* EFFET DE CURSEUR PERSONNALISÉ */}
      <div 
        className="cursor-trail"
        style={{
          position: 'fixed',
          left: cursorPosition.x - 10,
          top: cursorPosition.y - 10,
          width: '20px',
          height: '20px',
          background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 10000,
          transition: 'all 0.1s ease-out',
          mixBlendMode: 'screen'
        }}
      />

      {/* NAVBAR PRINCIPALE */}
      <nav className={`glass-navbar ${isScrolled ? 'scrolled' : ''}`}
        style={{
          position: 'fixed',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '95%',
          maxWidth: '1200px',
          background: isScrolled 
            ? 'rgba(15, 23, 42, 0.95)' 
            : 'rgba(15, 23, 42, 0.85)',
          backdropFilter: 'blur(20px)',
          border: `1px solid ${isScrolled ? 'rgba(59,130,246,0.3)' : 'rgba(59,130,246,0.2)'}`,
          borderRadius: '25px',
          padding: '1rem 2rem',
          zIndex: 1000,
          transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          boxShadow: isScrolled 
            ? '0 20px 60px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(59,130,246,0.1)' 
            : '0 10px 40px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(59,130,246,0.05)'
        }}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative'
        }}>
          
          {/* LOGO AVEC ANIMATION */}
          <Link 
            to="/" 
            className="logo-container"
            style={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              position: 'relative',
              zIndex: 10
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05) rotate(-2deg)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
            }}
          >
            <div style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center'
            }}>
              <img 
                src={Logo} 
                alt="TaqwaTech" 
                style={{
                  width: '45px',
                  height: '45px',
                  filter: 'drop-shadow(0 0 20px rgba(59,130,246,0.6))',
                  transition: 'all 0.3s ease'
                }}
              />
              <div className="logo-glow" style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '60px',
                height: '60px',
                background: 'radial-gradient(circle, rgba(59,130,246,0.4) 0%, transparent 70%)',
                borderRadius: '50%',
                animation: 'pulse 2s infinite'
              }} />
            </div>
            
            <span style={{
              marginLeft: '12px',
              fontSize: '1.3rem',
              fontWeight: '800',
              background: 'linear-gradient(135deg, #fff 0%, #b3c8ff 50%, #8B5CF6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 30px rgba(59,130,246,0.5)',
              letterSpacing: '-0.5px'
            }}>
              TaqwaTech
            </span>
          </Link>

          {/* NAVIGATION CENTRALE - DESKTOP */}
          <div className="nav-center" style={{
            display: window.innerWidth > 1024 ? 'flex' : 'none',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(30, 41, 59, 0.5)',
            borderRadius: '18px',
            padding: '0.5rem',
            border: '1px solid rgba(59,130,246,0.15)'
          }}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-tab ${location.pathname === item.path ? 'active' : ''}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '0.7rem 1.2rem',
                  borderRadius: '14px',
                  textDecoration: 'none',
                  color: location.pathname === item.path ? '#fff' : '#94a3b8',
                  background: location.pathname === item.path 
                    ? 'linear-gradient(135deg, rgba(59,130,246,0.3), rgba(139,92,246,0.2))'
                    : 'transparent',
                  border: location.pathname === item.path 
                    ? '1px solid rgba(59,130,246,0.4)'
                    : '1px solid transparent',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  if (location.pathname !== item.path) {
                    e.currentTarget.style.background = 'rgba(59,130,246,0.1)';
                    e.currentTarget.style.color = '#e2e8f0';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (location.pathname !== item.path) {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = '#94a3b8';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }
                }}
              >
                <span style={{ fontSize: '1.1rem' }}>{item.icon}</span>
                {item.label}
                
                {/* INDICATEUR ACTIF */}
                {location.pathname === item.path && (
                  <div style={{
                    position: 'absolute',
                    bottom: '2px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '20px',
                    height: '2px',
                    background: 'linear-gradient(90deg, #3B82F6, #8B5CF6)',
                    borderRadius: '2px'
                  }} />
                )}
              </Link>
            ))}
          </div>

          {/* ACTIONS DROITE */}
          <div className="nav-actions" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}>
            
            {/* RECHERCHE AVANCÉE */}
            <div ref={searchRef} style={{ position: 'relative' }}>
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="search-btn"
                style={{
                  background: 'rgba(59,130,246,0.1)',
                  border: '1px solid rgba(59,130,246,0.3)',
                  borderRadius: '12px',
                  padding: '0.6rem',
                  color: '#e2e8f0',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(59,130,246,0.2)';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(59,130,246,0.1)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <FaSearch size={16} />
              </button>

              {/* PANEL RECHERCHE */}
              {isSearchOpen && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  right: 0,
                  marginTop: '10px',
                  background: 'rgba(15, 23, 42, 0.95)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(59,130,246,0.3)',
                  borderRadius: '16px',
                  padding: '1.5rem',
                  width: '300px',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
                  zIndex: 1001
                }}>
                  <input
                    type="text"
                    placeholder="Rechercher... 🔍"
                    style={{
                      width: '100%',
                      background: 'rgba(30, 41, 59, 0.6)',
                      border: '1px solid rgba(59,130,246,0.2)',
                      borderRadius: '10px',
                      padding: '0.8rem 1rem',
                      color: '#fff',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                </div>
              )}
            </div>

            {/* BOUTON MODE SOMBRE */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="theme-btn"
              style={{
                background: 'rgba(139,92,246,0.1)',
                border: '1px solid rgba(139,92,246,0.3)',
                borderRadius: '12px',
                padding: '0.6rem',
                color: '#e2e8f0',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              {darkMode ? <FaSun size={16} /> : <FaMoon size={16} />}
            </button>

            {/* BOUTON MENU MOBILE */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="mobile-menu-btn"
              style={{
                display: window.innerWidth <= 1024 ? 'flex' : 'none',
                background: 'rgba(59,130,246,0.1)',
                border: '1px solid rgba(59,130,246,0.3)',
                borderRadius: '12px',
                padding: '0.6rem',
                color: '#e2e8f0',
                cursor: 'pointer',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
              }}
            >
              {isMobileMenuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
            </button>
          </div>
        </div>

        {/* BARRE DE PROGRESSION */}
        <div className="nav-progress" style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          height: '2px',
          background: 'linear-gradient(90deg, #3B82F6, #8B5CF6, #06B6D4)',
          backgroundSize: '200% 100%',
          animation: 'shimmer 3s infinite linear',
          borderRadius: '0 0 25px 25px',
          transform: 'scaleX(0.7)',
          transformOrigin: 'left'
        }} />
      </nav>

      {/* MENU MOBILE AVANCÉ */}
      {isMobileMenuOpen && window.innerWidth <= 1024 && (
        <div className="mobile-menu-overlay"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            background: 'rgba(15, 23, 42, 0.98)',
            backdropFilter: 'blur(30px)',
            zIndex: 999,
            display: 'flex',
            flexDirection: 'column',
            padding: '6rem 2rem 2rem'
          }}
        >
          {/* LIENS MOBILE */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            alignItems: 'center'
          }}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1.2rem 2rem',
                  borderRadius: '16px',
                  textDecoration: 'none',
                  color: location.pathname === item.path ? '#3B82F6' : '#e2e8f0',
                  background: location.pathname === item.path 
                    ? 'rgba(59,130,246,0.15)' 
                    : 'rgba(30, 41, 59, 0.6)',
                  border: location.pathname === item.path 
                    ? '1px solid rgba(59,130,246,0.4)' 
                    : '1px solid rgba(59,130,246,0.1)',
                  width: '100%',
                  maxWidth: '300px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  transition: 'all 0.3s ease'
                }}
              >
                <span style={{ fontSize: '1.3rem' }}>{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </div>

          {/* ACTIONS RAPIDES MOBILE */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            marginTop: '3rem',
            flexWrap: 'wrap'
          }}>
            {quickActions.map((action, index) => (
              <button
                key={index}
                onClick={action.action}
                style={{
                  background: 'rgba(30, 41, 59, 0.6)',
                  border: `1px solid ${action.color}30`,
                  borderRadius: '12px',
                  padding: '0.8rem',
                  color: action.color,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                {action.icon}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* BARRE D'ACCÈS RAPIDE FLOATING */}
      {window.innerWidth > 768 && (
        <div className="quick-access-bar"
          style={{
            position: 'fixed',
            top: '50%',
            right: '20px',
            transform: 'translateY(-50%)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.8rem',
            zIndex: 999,
            background: 'rgba(15, 23, 42, 0.8)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(59,130,246,0.2)',
            borderRadius: '20px',
            padding: '1rem 0.5rem',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)'
          }}
        >
          {quickActions.map((action, index) => (
            <button
              key={index}
              onClick={action.action}
              className="quick-action-btn"
              style={{
                background: 'rgba(30, 41, 59, 0.6)',
                border: `1px solid ${action.color}30`,
                borderRadius: '12px',
                padding: '0.7rem',
                color: action.color,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = `${action.color}20`;
                e.currentTarget.style.transform = 'scale(1.1) translateX(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(30, 41, 59, 0.6)';
                e.currentTarget.style.transform = 'scale(1) translateX(0)';
              }}
            >
              {action.icon}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.6; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.3; transform: translate(-50%, -50%) scale(1.1); }
        }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        .glass-navbar {
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .glass-navbar.scrolled {
          transform: translateX(-50%) scale(0.98);
          top: 10px;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .nav-center { display: none !important; }
          .glass-navbar { padding: 1rem 1.5rem; }
        }

        @media (max-width: 768px) {
          .glass-navbar { 
            width: 90% !important;
            padding: 0.8rem 1rem;
          }
          .quick-access-bar { display: none !important; }
        }

        @media (max-width: 480px) {
          .glass-navbar { 
            width: 92% !important;
            top: 10px !important;
          }
          .logo-container span { display: none !important; }
        }
      `}</style>

      {/* ESPACE POUR LA NAVBAR */}
      <div style={{ height: '140px' }} />
    </>
  );
};

export default Navbar;