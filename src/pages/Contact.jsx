function Contact() {
  return (
    <section className="contact-section py-5">
      <div className="container text-center mb-5">
        <h1 className="section-title">Contact</h1>
        <p className="section-subtitle">
          Pour me contacter en vue d'un entretien ou d'une future collaboration,
          merci de remplir le formulaire de contact.
        </p>
        <div className="section-divider"></div>
      </div>

      <div className="container">
        <div className="contact-card p-4">
          <div className="row">

            {/* FORMULAIRE */}
            <div className="col-md-6 mb-4">
              <h2 className="contact-title">Formulaire de contact</h2>
              <div className="contact-divider"></div>


              <form>
                <input type="text" className="form-control mb-3" placeholder="Votre nom" />
                <input type="email" className="form-control mb-3" placeholder="Votre adresse email" />
                <input type="text" className="form-control mb-3" placeholder="Votre numéro de téléphone" />
                <input type="text" className="form-control mb-3" placeholder="Sujet" />
                <textarea className="form-control mb-3" rows="6" placeholder="Votre message"></textarea>

                <div className="text-center">
                  <button type="submit" className="btn btn-primary">
                    Envoyer
                  </button>
                </div>
              </form>
            </div>

            {/* COORDONNÉES */}
            <div className="col-md-6">
              <h2 className="contact-title">Mes coordonnées</h2>
              <div className="contact-divider"></div>


              <p><strong>John Doe</strong></p>
              <p>40 rue Laure Diebold</p>
              <p>69009 Lyon, France</p>
              <p>10 20 30 40 50</p>
              <p>john.doe@gmail.com</p>

              <div className="map-container mt-4">
                <iframe
                  src="https://www.google.com/maps?q=40+rue+Laure+Diebold+Lyon&output=embed"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="map"
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
