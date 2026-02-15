import { useState } from "react";
import Hero from "../components/Hero";
import GithubModal from "../components/layout/GithubModal";



function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Hero onOpenModal={() => setShowModal(true)} />

      <GithubModal
        show={showModal}
        handleClose={() => setShowModal(false)}
      />
    </>
  );
}

export default Home;
