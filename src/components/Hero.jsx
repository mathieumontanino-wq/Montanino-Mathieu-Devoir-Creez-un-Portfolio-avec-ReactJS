import heroBg from "../assets/images/hero-bg.jpg";

/**
 * Section Hero affichée en page d'accueil.
 * Présente le titre principal du site pour le SEO.
 */
function Hero({ onOpenModal }) {
  return (
    <header
      className="hero-section d-flex align-items-center justify-content-center text-center text-white"
      style={{
        backgroundImage: `url(${heroBg})`,
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div>
        {/* Titre principal du site (SEO) */}
        <h1 className="hero-title">
          Bonjour, je suis John Doe
        </h1>

        {/* Sous-titre descriptif */}
        <h2 className="hero-subtitle mb-4">
          Développeur web full stack
        </h2>

        {/* Bouton ouvrant la modale GitHub */}
        <button
          className="btn btn-danger"
          onClick={onOpenModal}
        >
          En savoir plus
        </button>
      </div>
    </header>
  );
}

export default Hero;
