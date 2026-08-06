import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

function ScrollHandler() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace("#", "");

    if (hash) {
      setTimeout(() => {
        const section = document.getElementById(hash);

        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    } else {
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    }
  }, [location]);

  return null;
}

function Home() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <ScrollHandler />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;