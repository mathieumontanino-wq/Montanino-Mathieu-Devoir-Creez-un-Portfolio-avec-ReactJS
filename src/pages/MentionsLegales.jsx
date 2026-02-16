/**
 * Page Mentions légales.
 * Contient les informations légales obligatoires du site.
 */
function MentionsLegales() {
  return (
    <section className="legal-section py-5">
      <div className="container">

        {/* ======================
            TITRE PRINCIPAL
        ====================== */}
        <header className="text-center mb-4">
          <h1 className="fw-bold">Mentions légales</h1>
          <div
            style={{
              width: "350px",
              height: "5px",
              backgroundColor: "#0d6efd",
              margin: "10px auto 0",
              borderRadius: "5px"
            }}
          ></div>
        </header>

        {/* ======================
            ACCORDION
        ====================== */}
        <div className="accordion" id="legalAccordion">

          {/* ÉDITEUR DU SITE */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                Éditeur du site
              </button>
            </h2>

            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#legalAccordion"
            >
              <div className="accordion-body">

                <p><strong>John Doe</strong></p>
                <p>40 rue Laure Diebold</p>
                <p>69009 Lyon, France</p>
                <p>10 20 30 40 50</p>
                <p>john.doe@gmail.com</p>

              </div>
            </div>
          </div>

          {/* HÉBERGEUR */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Hébergeur
              </button>
            </h2>

            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#legalAccordion"
            >
              <div className="accordion-body">

                <p><strong>Alwaysdata</strong></p>
                <p>91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>

                <p>
                  <a
                    href="https://www.alwaysdata.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.alwaysdata.com
                  </a>
                </p>

              </div>
            </div>
          </div>

          {/* CRÉDITS */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Crédits
              </button>
            </h2>

            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#legalAccordion"
            >
              <div className="accordion-body">

                <p>
                  Ce site a été réalisé par John Doe, étudiant au{" "}
                  <a
                    href="https://www.centre-europeen-formation.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Centre Européen de Formation
                  </a>.
                </p>

                <p>
                  Les images utilisées sur ce site sont libres de droits et
                  proviennent de{" "}
                  <a
                    href="https://pixabay.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Pixabay
                  </a>.
                </p>

                <p>
                  La favicon du site provient de{" "}
                  <a
                    href="https://www.flaticon.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Flaticon
                  </a>.
                </p>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default MentionsLegales;
