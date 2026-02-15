import { useState } from "react";
import Hero from "../components/Hero";
import GithubModal from "../components/layout/GithubModal";
import About from "../components/sections/About";

function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Section Hero */}
      <Hero onOpenModal={() => setShowModal(true)} />

      {/* Modale GitHub */}
      <GithubModal
        show={showModal}
        handleClose={() => setShowModal(false)}
      />

      {/* Section À propos / Compétences */}
      <About />
    </>
  );
}

export default Home;
