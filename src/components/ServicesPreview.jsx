import React from "react";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const ServicesPreview = () => {
  return (
    <section className="py-5" id="services">
      <div className="container">
        <h2 className="text-center fw-bold mb-5" data-aos="fade-up">
          Mes Services Principaux
        </h2>

        <div className="row g-4">
          <div className="col-md-4" data-aos="zoom-in" data-aos-delay="200">
            <ServiceCard 
              title="Sites internet modernes" 
              desc="Création de sites vitrines, dashboards et plateformes professionnelles."
              icon="💻"
            />
          </div>

          <div className="col-md-4" data-aos="zoom-in" data-aos-delay="400">
            <ServiceCard 
              title="Applications web" 
              desc="Frontend + Backend complet avec les technologies modernes."
              icon="⚙️"
            />
          </div>

          <div className="col-md-4" data-aos="zoom-in" data-aos-delay="600">
            <ServiceCard 
              title="Intelligence Artificielle" 
              desc="Automatisation, IA, outils intelligents & chatbots."
              icon="🤖"
            />
          </div>
        </div>

        <div className="text-center mt-5" data-aos="fade-up">
          <Link to="/services" className="btn btn-premium btn-lg">
            Voir tous mes services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;