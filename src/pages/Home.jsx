import React from "react";
import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <ServicesSection />
    </div>
  );
};

export default Home;