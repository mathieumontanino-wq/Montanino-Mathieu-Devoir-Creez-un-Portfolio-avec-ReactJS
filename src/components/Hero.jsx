import heroBg from "../assets/images/hero-bg.jpg";



function Hero({ onOpenModal }) {
  return (
    <section
      className="hero-section d-flex align-items-start justify-content-center text-center text-white pt-5"

      style={{
        backgroundImage: `url(${heroBg})`,
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div>
        <h1 className="fw-bold display-4">
          Bonjour, je suis John Doe
        </h1>

        <h2 className="fw-semibold mb-4">
          Développeur web full stack
        </h2>

        <button
          className="btn btn-danger"
          onClick={onOpenModal}
        >
          En savoir plus
        </button>
      </div>
    </section>
  );
}

export default Hero;
