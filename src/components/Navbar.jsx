// --- CODE AMÉLIORÉ ---
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/theme.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: "Accueil" },
    { path: "/about", label: "À propos" },
    { path: "/services", label: "Services" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/savoir-plus", label: "En savoir plus" }
  ];

  return (
    <>
      <nav
        className={`tech-navbar ${isScrolled ? "scrolled" : ""}`}
        style={{
          background: isScrolled
            ? "rgba(10, 15, 31, 0.97)"
            : "rgba(10, 15, 31, 0.92)",
          backdropFilter: "blur(18px)",
          borderBottom: "1px solid rgba(59, 130, 246, 0.45)",
          height: "85px",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          boxShadow: isScrolled
            ? "0 10px 40px rgba(0, 0, 0, 0.45)"
            : "none",
          transition: "0.4s"
        }}
      >
        <div
          className="tech-nav-container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "100%",
            padding: "0 2rem"
          }}
        >
          {/* LOGO */}
          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none"
            }}
          >
            <img
              src="/logo.png"
              alt="Marvis Technologie et IA"
              style={{
                width: "95px",
                height: "95px",
                objectFit: "contain",
                filter: "drop-shadow(0 0 18px rgba(59,130,246,0.7))",
                transition: "0.3s"
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.1)";
                e.target.style.filter =
                  "drop-shadow(0 0 35px rgba(59,130,246,0.9))";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.filter =
                  "drop-shadow(0 0 18px rgba(59,130,246,0.7))";
              }}
            />

            <span
              style={{
                marginLeft: "12px",
                fontSize: "1rem",
                fontWeight: "600",
                background: "linear-gradient(90deg,#fff,#b3c8ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 12px rgba(59,130,246,0.6)"
              }}
            >
              Marvis Technologie et IA
            </span>
          </Link>

          {/* MENU */}
          <div
            style={{
              display: "flex",
              gap: "2rem",
              alignItems: "center"
            }}
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                style={{
                  color:
                    location.pathname === item.path ? "#fff" : "#bcd1ff",
                  textDecoration: "none",
                  fontWeight: "500",
                  padding: "0.6rem 1rem",
                  borderRadius: "8px",
                  transition: "0.25s",
                  background:
                    location.pathname === item.path
                      ? "rgba(59,130,246,0.25)"
                      : "transparent",
                  textShadow:
                    location.pathname === item.path
                      ? "0 0 12px rgba(59,130,246,0.8)"
                      : "none"
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#fff";
                  e.target.style.background = "rgba(59,130,246,0.12)";
                }}
                onMouseLeave={(e) => {
                  if (location.pathname !== item.path) {
                    e.target.style.color = "#bcd1ff";
                    e.target.style.background = "transparent";
                  }
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* BOUTON CONTACT */}
          <Link
            to="/contact"
            style={{
              padding: "0.7rem 1.8rem",
              borderRadius: "12px",
              fontWeight: "600",
              color: "#fff",
              border: "1px solid rgba(59,130,246,0.55)",
              background:
                "linear-gradient(135deg,rgba(59,130,246,0.35),rgba(147,51,234,0.4))",
              textShadow: "0 0 12px rgba(59,130,246,0.8)",
              transition: "0.3s"
            }}
          >
        Me contacter
          </Link>
        </div>

        {/* BANDE ANIMÉE SOUS LA NAV */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            height: "4px",
            width: "100%",
            background:
              "linear-gradient(90deg, #3B82F6, #8B5CF6, #06B6D4, #3B82F6)",
            backgroundSize: "300% 100%",
            animation: "scrollLine 5s linear infinite"
          }}
        ></div>
      </nav>

      <style>{`
        @keyframes scrollLine {
          from { background-position: 0% 0; }
          to { background-position: 300% 0; }
        }
      `}</style>

      <div style={{ height: "85px" }}></div>
    </>
  );
};

export default Navbar;
