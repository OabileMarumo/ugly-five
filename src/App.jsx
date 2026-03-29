import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AnimalCard from "./components/AnimalCard";
import TourCard from "./components/TourCard";
import ContactForm from "./components/ContactForm";
import { animals } from "./data/animals";
import { tours } from "./data/tours";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <section id="about">
        <h2>About Us</h2>
        <div className="about-text">
          <p>
            Located in Chobe National Park, we offer unique safari experiences
            focused on the often-overlooked "Ugly Five" animals of Africa.
            Witness raw wilderness, authentic guided tours, and the true
            heartbeat of the savanna. Our conservation-focused approach brings
            you closer to nature's misunderstood marvels.
          </p>
          <p style={{ marginTop: "1rem" }}>
            All tours led by certified local guides with deep knowledge of
            Chobe's ecosystem.
          </p>
        </div>
      </section>

      <section id="animals">
        <h2>The Ugly Five</h2>
        <div className="cards">
          {animals.map((a) => (
            <AnimalCard key={a.id} animal={a} />
          ))}
        </div>
      </section>

      <section id="tours">
        <h2>Safari Packages</h2>
        <div className="cards">
          {tours.map((t) => (
            <TourCard key={t.id} tour={t} />
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <span
            style={{
              background: "#d68b2c20",
              padding: "0.4rem 1.2rem",
              borderRadius: "40px",
            }}
          >
            🌍 All trips include expert guides, refreshments & park fees
          </span>
        </div>
      </section>

      <section id="contact">
        <h2>Contact Us & Book Your Adventure</h2>
        <ContactForm />
      </section>

      <footer>        
        <p>
          © 2026 The Ugly Five Safari | Botswana | Chobe National Park Heritage
        </p>

      </footer>
    </>
  );
}
