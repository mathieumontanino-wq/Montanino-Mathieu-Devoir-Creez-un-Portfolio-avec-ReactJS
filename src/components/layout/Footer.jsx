import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-custom text-white pt-5">
      <div className="container">
        <div className="row">

          {/* Colonne 1 */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold">John Doe</h6>
            <p className="mb-1 small">40 rue Laure Diebold</p>
            <p className="mb-1 small">69009 Lyon, France</p>
            <p className="mb-1 small">10 20 30 40 50</p>
            <p className="mb-3 small">john.doe@gmail.com</p>

            <div className="d-flex gap-3 fs-5 footer-icons">
              <a href="#" target="_blank" rel="noopener noreferrer nofollow">
                <i className="bi bi-github"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer nofollow">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer nofollow">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Colonne 2 */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold">Liens utiles</h6>
            <ul className="list-unstyled small">
              <li><NavLink to="/">Accueil</NavLink></li>
              <li><NavLink to="/services">Services</NavLink></li>
              <li><NavLink to="/portfolio">Portfolio</NavLink></li>
              <li><NavLink to="/contact">Me contacter</NavLink></li>
              <li><NavLink to="/mentions-legales">Mentions légales</NavLink></li>
            </ul>
          </div>

          {/* Colonne 3 */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold">Mes dernières réalisations</h6>
            <ul className="list-unstyled small">
              <li><NavLink to="/portfolio">Fresh Food</NavLink></li>
              <li><NavLink to="/portfolio">Restaurant Akira</NavLink></li>
              <li><NavLink to="/portfolio">Espace bien-être</NavLink></li>
              <li><NavLink to="/portfolio">SEO</NavLink></li>
              <li><NavLink to="/portfolio">Création d'une API</NavLink></li>
              <li><NavLink to="/portfolio">Maquette d'un site</NavLink></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bande inférieure */}
      <div className="footer-bottom text-center py-3 mt-4">
        © 2024 John Doe
      </div>
    </footer>
  );
}

export default Footer;
