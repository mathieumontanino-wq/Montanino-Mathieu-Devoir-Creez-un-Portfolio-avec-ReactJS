/**
 * Page Contact
 * Contient un formulaire et les coordonnées.
 */
function Contact() {
  return (
    <section className="contact-section py-5">
      <div className="container">

        {/* ======================
            TITRE PRINCIPAL
        ====================== */}
        <header className="text-center mb-5">
          <h1 className="section-title">Contact</h1>

          <p className="section-subtitle">
            Pour toute demande d'entretien ou collaboration, merci de remplir le formulaire ci-dessous.
          </p>

          <div className="section-divider"></div>
        </header>

        {/* ======================
            CONTENU
        ====================== */}
        <div className="contact-card p-4">
          <div className="row">

            {/* ======================
                FORMULAIRE
            ====================== */}
            <article className="col-md-6 mb-4">

              <h2 className="contact-title">Formulaire de contact</h2>
              <div className="contact-divider"></div>

              <form>

                {/* Nom */}
                <label htmlFor="name" className="form-label">
                  Votre nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control mb-3"
                  required
                />

                {/* Email */}
                <label htmlFor="email" className="form-label">
                  Votre adresse email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control mb-3"
                  required
                />

                {/* Téléphone */}
                <label htmlFor="phone" className="form-label">
                  Votre numéro de téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-control mb-3"
                />

                {/* Sujet */}
                <label htmlFor="subject" className="form-label">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="form-control mb-3"
                />

                {/* Message */}
                <label htmlFor="message" className="form-label">
                  Votre message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control mb-3"
                  rows="6"
                  required
                ></textarea>

                <div className="text-center">
                  <button type="submit" className="btn btn-primary">
                    Envoyer
                  </button>
                </div>

              </form>
            </article>

            {/* ======================
                COORDONNÉES
            ====================== */}
            <article className="col-md-6">

              <h2 className="contact-title">Mes coordonnées</h2>
              <div className="contact-divider"></div>

              <address>
                <p><strong>John Doe</strong></p>
                <p>40 rue Laure Diebold</p>
                <p>69009 Lyon, France</p>
                <p>10 20 30 40 50</p>
                <p>
                  <a href="mailto:john.doe@gmail.com">
                    john.doe@gmail.com
                  </a>
                </p>
              </address>

              {/* Carte Google */}
              <div className="map-container mt-4">
                <iframe
                  src="https://www.google.com/maps?q=40+rue+Laure+Diebold+Lyon&output=embed"
                  width="100%"
                  height="550"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="Localisation de John Doe à Lyon"
                ></iframe>
              </div>

            </article>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;
