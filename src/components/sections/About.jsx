import aboutImg from "../../assets/images/john-doe-about.jpg";

/**
 * Section À propos.
 * Présente le profil et les compétences principales.
 */
function About() {
  return (
    <section className="about-section py-5" id="about">
      <div className="container">
        <div className="about-card p-5 shadow-sm">

          <div className="row">

            {/* ========================
                COLONNE GAUCHE
            ======================== */}
            <article className="col-12 col-lg-6">

              {/* Titre de section */}
              <h3 className="section-title">À propos</h3>
              <div className="section-line"></div>

              {/* Image descriptive (important SEO) */}
              <img
                src={aboutImg}
                alt="Développeur web full stack en train de travailler sur son ordinateur"
                className="about-img mb-4"
              />

              {/* Texte descriptif */}
              <p>
                Développeur web full stack basé à Lyon, je conçois et développe
                des sites web modernes, performants et adaptés aux besoins des entreprises.
              </p>

              <p>
                Je travaille aussi bien sur la partie front-end que back-end,
                avec une attention particulière portée à l'expérience utilisateur
                et au référencement naturel.
              </p>

              <p>
                Mon objectif est de proposer des solutions fiables,
                évolutives et optimisées pour le web.
              </p>

            </article>

            {/* ========================
                COLONNE DROITE
            ======================== */}
            <article className="col-12 col-lg-6">

              <h3 className="section-title">Mes compétences</h3>
              <div className="section-line"></div>

              {/* Liste des compétences */}
              {/* HTML */}
              <div className="mb-4">
                <div className="d-flex justify-content-between">
                  <span>HTML5</span>
                  <span>90%</span>
                </div>
                <div className="progress mt-2">
                  <div
                    className="progress-bar bg-danger"
                    style={{ width: "90%" }}
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              {/* CSS */}
              <div className="mb-4">
                <div className="d-flex justify-content-between">
                  <span>CSS3</span>
                  <span>80%</span>
                </div>
                <div className="progress mt-2">
                  <div
                    className="progress-bar bg-info"
                    style={{ width: "80%" }}
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              {/* JavaScript */}
              <div className="mb-4">
                <div className="d-flex justify-content-between">
                  <span>JavaScript</span>
                  <span>70%</span>
                </div>
                <div className="progress mt-2">
                  <div
                    className="progress-bar bg-warning"
                    style={{ width: "70%" }}
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              {/* PHP */}
              <div className="mb-4">
                <div className="d-flex justify-content-between">
                  <span>PHP</span>
                  <span>60%</span>
                </div>
                <div className="progress mt-2">
                  <div
                    className="progress-bar bg-success"
                    style={{ width: "60%" }}
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              {/* React */}
              <div className="mb-4">
                <div className="d-flex justify-content-between">
                  <span>React</span>
                  <span>50%</span>
                </div>
                <div className="progress mt-2">
                  <div
                    className="progress-bar bg-primary"
                    style={{ width: "50%" }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

            </article>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
