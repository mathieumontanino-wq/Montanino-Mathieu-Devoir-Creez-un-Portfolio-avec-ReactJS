function MentionsLegales() {
  return (
    <section className="legal-section py-5">
      <div className="container text-center mb-4">
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
      </div>

     <div className="container">
 


        <div className="accordion" id="legalAccordion">

          {/* ÉDITEUR */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
              >
                Éditeur du site
              </button>
            </h2>

            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              data-bs-parent="#legalAccordion"
            >
              <div className="accordion-body">

                <h4 className="fw-bold mb-3">John Doe</h4>

                <p>
                  <i className="bi bi-map me-2"></i>
                  40 rue Laure Diebold
                </p>

                <p>
                  <i className="bi bi-geo-alt me-2"></i>
                  69009 Lyon, France
                </p>

                <p>
                  <i className="bi bi-phone me-2"></i>
                  10 20 30 40 50
                </p>

                <p>
                  <i className="bi bi-envelope me-2"></i>
                  john.doe@gmail.com
                </p>

              </div>
            </div>
          </div>

          {/* HÉBERGEUR */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
              >
                Hébergeur
              </button>
            </h2>

            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#legalAccordion"
            >
              <div className="accordion-body">

                <h4 className="fw-bold mb-3">Alwaysdata</h4>

                <p>
                  <i className="bi bi-map me-2"></i>
                  91 Rue du Faubourg Saint-Honoré, 75008 Paris
                </p>

                <p>
                  <i className="bi bi-globe me-2"></i>
                  <a
                    href="https://www.alwaysdata.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    www.alwaysdata.com
                  </a>
                </p>

              </div>
            </div>
          </div>

          {/* CRÉDITS */}
          {/* CRÉDITS */}
<div className="accordion-item">
  <h2 className="accordion-header">
    <button
      className="accordion-button collapsed"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapseThree"
    >
      Crédits
    </button>
  </h2>

  <div
    id="collapseThree"
    className="accordion-collapse collapse"
    data-bs-parent="#legalAccordion"
  >
    <div className="accordion-body">

      <h4 className="fw-bold mb-3">Crédits</h4>

      <p>
        Ce site a été réalisé par John Doe, étudiant au{" "}
        <a href="#" target="_blank" rel="noreferrer">
          Centre Européen de formation
        </a>.
      </p>

      <p className="fst-italic">
        Les images utilisées sur ce site sont libres de droits et ont été
        obtenues sur le site{" "}
        <a href="https://pixabay.com" target="_blank" rel="noreferrer">
          Pixabay
        </a>.
      </p>

      <p className="fst-italic">
        La favicon de ce site a été fournie par{" "}
        <a href="https://www.flaticon.com" target="_blank" rel="noreferrer">
          John doe Icons erstellt von Freepik - Flaticon
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
