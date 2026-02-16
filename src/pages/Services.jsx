import banner from "../assets/images/banner.jpg";
import { FaPaintBrush, FaCode, FaSearch } from "react-icons/fa";

/**
 * Page Services
 * Présente les différentes prestations proposées.
 */
function Services() {
  return (
    <>
      {/* ==============================
          BANNIÈRE DE PAGE
      ============================== */}
      <header
        className="services-banner"
        style={{ backgroundImage: `url(${banner})` }}
        role="banner"
      ></header>

      {/* ==============================
          SECTION SERVICES
      ============================== */}
      <section className="services-section py-5">
        <div className="container">

          {/* Titre principal */}
          <div className="text-center mb-5">
            <h1 className="services-title">Mon offre de services</h1>

            <p className="services-subtitle">
              Voici les prestations sur lesquelles je peux intervenir
            </p>

            <div className="services-divider"></div>
          </div>

          <div className="row g-4">

            {/* ======================
                UX DESIGN
            ====================== */}
            <article className="col-12 col-md-6 col-lg-4">
              <div className="card service-card h-100 text-center p-4">

                <FaPaintBrush
                  className="service-icon mb-3"
                  aria-hidden="true"
                />

                <h2 className="mb-3 h5">UX Design</h2>

                <p>
                  L'UX Design est une discipline qui consiste à concevoir des
                  produits (sites web, applications mobiles, logiciels, objets
                  connectés, etc.) en plaçant l'utilisateur au centre des
                  préoccupations. L'objectif est de rendre l'expérience
                  utilisateur la plus fluide et agréable possible.
                </p>

              </div>
            </article>

            {/* ======================
                DÉVELOPPEMENT WEB
            ====================== */}
            <article className="col-12 col-md-6 col-lg-4">
              <div className="card service-card h-100 text-center p-4">

                <FaCode
                  className="service-icon mb-3"
                  aria-hidden="true"
                />

                <h2 className="mb-3 h5">Développement web</h2>

                <p>
                  Le développement de sites web consiste à créer des sites
                  internet en utilisant des langages de programmation (HTML,
                  CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap,
                  React, Angular, etc.).
                </p>

              </div>
            </article>

            {/* ======================
                RÉFÉRENCEMENT
            ====================== */}
            <article className="col-12 col-md-6 col-lg-4">
              <div className="card service-card h-100 text-center p-4">

                <FaSearch
                  className="service-icon mb-3"
                  aria-hidden="true"
                />

                <h2 className="mb-3 h5">Référencement</h2>

                <p>
                  Le référencement naturel (SEO) est une technique qui consiste
                  à optimiser un site web pour le faire remonter dans les
                  résultats des moteurs de recherche (Google, Bing, Yahoo, etc.).
                  L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site.
                </p>

              </div>
            </article>

          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
