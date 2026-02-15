import banner from "../assets/images/banner.jpg";

import freshFood from "../assets/images/portfolio/fresh-food.jpg";
import restaurant from "../assets/images/portfolio/restaurant-japonais.jpg";
import espace from "../assets/images/portfolio/espace-bien-etre.jpg";
import seo from "../assets/images/portfolio/seo.jpg";
import api from "../assets/images/portfolio/coder.jpg";
import maquette from "../assets/images/portfolio/screens.jpg";

function Portfolio() {
  return (
    <>
      {/* ====== BANNER IDENTIQUE SERVICES ====== */}
      <div
        className="page-banner"
        style={{ backgroundImage: `url(${banner})` }}
      ></div>

      {/* ====== SECTION PORTFOLIO ====== */}
      <section className="portfolio-section py-5">
        <div className="container text-center">

          <h1 className="fw-bold mb-2">Portfolio</h1>
          <p className="text-muted mb-3">
            Voici quelques-unes de mes réalisations.
          </p>

          <div className="section-divider mx-auto mb-5"></div>

          <div className="row g-4">

            {/* CARD 1 */}
            <div className="col-md-6 col-lg-4">
              <div className="card portfolio-card h-100">
                <img src={freshFood} className="card-img-top" alt="Fresh Food" />
                <div className="card-body">
                  <h4 className="card-title">Fresh Food</h4>
                  <p className="card-text">
                    Site de vente de produits frais en ligne
                  </p>
                  <button className="btn btn-primary btn-sm">
                    Voir le site
                  </button>
                </div>
                <div className="card-footer text-muted small">
                  Site réalisé avec PHP et MySQL
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="col-md-6 col-lg-4">
              <div className="card portfolio-card h-100">
                <img src={restaurant} className="card-img-top" alt="Restaurant" />
                <div className="card-body">
                  <h4 className="card-title">Restaurant Akira</h4>
                  <p className="card-text">
                    Site de vente de produits frais en ligne
                  </p>
                  <button className="btn btn-primary btn-sm">
                    Voir le site
                  </button>
                </div>
                <div className="card-footer text-muted small">
                  Site réalisé avec WordPress
                </div>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="col-md-6 col-lg-4">
              <div className="card portfolio-card h-100">
                <img src={espace} className="card-img-top" alt="Espace bien-être" />
                <div className="card-body">
                  <h4 className="card-title">Espace bien-être</h4>
                  <p className="card-text">
                    Site de vente de produits frais en ligne
                  </p>
                  <button className="btn btn-primary btn-sm">
                    Voir le site
                  </button>
                </div>
                <div className="card-footer text-muted small">
                  Site réalisé avec LARAVEL
                </div>
              </div>
            </div>

            {/* CARD 4 */}
            <div className="col-md-6 col-lg-4">
              <div className="card portfolio-card h-100">
                <img src={seo} className="card-img-top" alt="SEO" />
                <div className="card-body">
                  <h4 className="card-title">SEO</h4>
                  <p className="card-text">
                    Amélioration du référencement d'un site e-commerce
                  </p>
                  <button className="btn btn-primary btn-sm">
                    Voir le site
                  </button>
                </div>
                <div className="card-footer text-muted small">
                  Utilisation des outils SEO
                </div>
              </div>
            </div>

            {/* CARD 5 */}
            <div className="col-md-6 col-lg-4">
              <div className="card portfolio-card h-100">
                <img src={api} className="card-img-top" alt="API" />
                <div className="card-body">
                  <h4 className="card-title">Création d'une API</h4>
                  <p className="card-text">
                    Création d'une API RESTFUL publique
                  </p>
                  <button className="btn btn-primary btn-sm">
                    Voir le site
                  </button>
                </div>
                <div className="card-footer text-muted small">
                  PHP - SYMFONY
                </div>
              </div>
            </div>

            {/* CARD 6 */}
            <div className="col-md-6 col-lg-4">
              <div className="card portfolio-card h-100">
                <img src={maquette} className="card-img-top" alt="Maquette" />
                <div className="card-body">
                  <h4 className="card-title">Maquette d'un site web</h4>
                  <p className="card-text">
                    Création du prototype d'un site
                  </p>
                  <button className="btn btn-primary btn-sm">
                    Voir le site
                  </button>
                </div>
                <div className="card-footer text-muted small">
                  Réalisé avec FIGMA
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
