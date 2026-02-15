import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import MentionsLegales from "./pages/MentionsLegales";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">

      {/* Header affiché sur toutes les pages */}
      <Header />

      {/* Contenu principal */}
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
        </Routes>
      </main>

      {/* Footer affiché sur toutes les pages */}
      <Footer />

    </div>
  );
}

export default App;
