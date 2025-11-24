import React from "react";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import { FaLaptopCode, FaMobileAlt, FaRobot } from "react-icons/fa";
const ServicesSection = () => {
const featuredServices = [
  {
    title: "Développement Web",
    desc: "Sites modernes et applications web performantes",
    icon: <FaLaptopCode />,
    features: ["Responsive Design", "SEO Optimisé", "Performance", "Maintenance"]
  },
  {
    title: "Applications Mobile",
    desc: "Apps cross-platform natives et hybrides",
    icon: <FaMobileAlt />,
    features: ["iOS & Android", "UI/UX Design", "Store Deployment", "Updates"]
  },
  {
    title: "Intelligence Artificielle",
    desc: "Solutions IA et automatisation intelligente",
    icon: <FaRobot />,
    features: ["Machine Learning", "Chatbots", "Data Analysis", "Automation"]
  }
];


  return (
    <section className="services-preview">
      <div className="container">
        {/* En-tête */}
        <div className="section-header text-center">
          <div className="section-badge" data-aos="fade-down"></div>
         <h2 
  className="section-title-enhanced" 
  data-aos="zoom-in"
  data-aos-delay="150"
>
  Des solutions <span className="text-energetic-neo">digitales</span> sur mesure
</h2>

          <p className="section-description" data-aos="fade-up" data-aos-delay="200">
           <br/> Je propose une gamme complète de services pour répondre à tous 
            vos besoins en développement web, mobile et intelligence artificielle.
          </p>
        </div>

        {/* Grid des services */}
        <div className="services-grid">
          <div className="row g-4">
            {featuredServices.map((service, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="section-cta text-center" data-aos="fade-up">
          <Link to="/services" className="btn-secondary">
            Voir tous mes services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;