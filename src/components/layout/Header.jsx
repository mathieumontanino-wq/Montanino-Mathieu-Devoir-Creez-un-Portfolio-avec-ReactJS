import { NavLink } from "react-router-dom";




function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">

        {/* LOGO */}
        <NavLink className="navbar-brand fw-bold" to="/">
          JOHN DOE
        </NavLink>

        {/* BOUTON HAMBURGER */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENU */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto text-uppercase">

            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active text-danger" : "nav-link"
                }
              >
                Accueil
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive ? "nav-link active text-danger" : "nav-link"
                }
              >
                Services
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  isActive ? "nav-link active text-danger" : "nav-link"
                }
              >
                Portfolio
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "nav-link active text-danger" : "nav-link"
                }
              >
                Contact
              </NavLink>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Header;
