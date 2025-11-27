import React from "react";
import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import SEO from "../components/SEO"; // ← Import du composant SEO

const Home = () => {
  return (
    <div className="home-page">
      {/* SEO pour cette page */}
      <SEO
        title="TaqwaTech - Développement Web & IA"
        description="TaqwaTech propose des solutions innovantes en développement web, intelligence artificielle et digital."
      />

      <Hero />
      <ServicesSection />
    </div>
  );
};

export default Home;
