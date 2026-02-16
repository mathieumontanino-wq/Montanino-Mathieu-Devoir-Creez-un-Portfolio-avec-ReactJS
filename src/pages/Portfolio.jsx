import banner from "../assets/images/banner.jpg";

import freshFood from "../assets/images/portfolio/fresh-food.jpg";
import restaurant from "../assets/images/portfolio/restaurant-japonais.jpg";
import espace from "../assets/images/portfolio/espace-bien-etre.jpg";
import seo from "../assets/images/portfolio/seo.jpg";
import api from "../assets/images/portfolio/coder.jpg";
import maquette from "../assets/images/portfolio/screens.jpg";

/**
 * Page Portfolio.
 * Présente les différentes réalisations professionnelles.
 */
function Portfolio() {

  // Liste des projets pour éviter la répétition de code
  const projects = [
    {
      title: "Fresh Food",
      image: freshFood,
      description: "Site e-commerce de vente de produits frais en ligne.",
      tech: "PHP et MySQL",
      alt: "Site e-commerce de produits alimentaires frais"
    },
    {
      title: "Restaurant Akira",
      image: restaurant,
      description: "Site vitrine pour un restaurant japonais.",
      tech: "WordPress",
      alt: "Site web vitrine pour restaurant japonais"
    },
    {
      title: "Espace bien-être",
      image: espace,
      description: "Site vitrine pour un centre de relaxation et bien-être.",
      tech: "Laravel",
      alt: "Site web pour centre de bien-être"
    },
    {
      title: "SEO",
      image: seo,
      description: "Optimisation du référencement d'un site e-commerce.",
      tech: "Outils SEO professionnels",
      alt: "Optimisation du référencement naturel"
    },
    {
      title: "Création d'une API",
      image: api,
      description: "Développement d'une API RESTful publique.",
      tech: "PHP et Symfony",
      alt: "Développement API REST"
    },
    {
      title: "Maquette d'un site web",
      image: maquette,
      description: "Conception d'un prototype de site web.",
      tech: "Figma",
      alt: "Prototype de site web réalisé sur Figma"
    }
  ];

  return (
    <>
      {/* =============================
          BANNIÈRE DE PAGE
      ============================= */}
      <header
        className="page-banner"
        style={{ backgroundImage: `url(${banner})` }}
      ></header>

      {/* =============================
          SECTION PORTFOLIO
      ============================= */}
      <section className="portfolio-section py-5">
        <div className="container text-center">

          <h1 className="fw-bold mb-2">Portfolio</h1>

          <p className="text-muted mb-3">
            Découvrez quelques-unes de mes réalisations en développement web.
          </p>

          <div className="section-divider mx-auto mb-5"></div>

          <div className="row g-4">

            {/* Génération dynamique des projets */}
            {projects.map((project, index) => (
              <article key={index} className="col-md-6 col-lg-4">
                <div className="card portfolio-card h-100">

                  <img
                    src={project.image}
                    className="card-img-top"
                    alt={project.alt}
                  />

                  <div className="card-body">
                    <h2 className="card-title h4">
                      {project.title}
                    </h2>

                    <p className="card-text">
                      {project.description}
                    </p>

                    <button className="btn btn-primary btn-sm">
                      Voir le site
                    </button>
                  </div>

                  <div className="card-footer text-muted small">
                    Site réalisé avec {project.tech}
                  </div>

                </div>
              </article>
            ))}

          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
