import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import PrivacyPolicy from "./PrivacyPolicy";

function Home() {
  return (
    <div className="container">
      <header className="navbar">
        <h1>Marwadis Solution</h1>
        <nav>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
          <Link to="/privacy" className="nav-link">
            Privacy
          </Link>
        </nav>
      </header>

      <section id="home" className="hero">
        <h2>Building Apps, Websites & AI Solutions</h2>
        <p>
          We have successfully delivered 50+ projects across India. We build
          scalable apps, websites, AI & cloud solutions.
        </p>
        <button onClick={() => (window.location.href = "#contact")}>
          Get Started
        </button>
      </section>

      <section id="services" className="services">
        <h2>Our Services</h2>
        <div className="cards">
          <div className="card">App Development</div>
          <div className="card">Website Development</div>
          <div className="card">AI Solutions</div>
          <div className="card">Cloud Services</div>
        </div>
      </section>

      <section id="portfolio" className="portfolio">
        <h2>Our Portfolio</h2>

        <div className="portfolio-card">
          <h3>Order@VPA - Ayush Jain (Bangalore)</h3>
          <p>Pharmacy App</p>
          <div className="links">
            <a
              href="https://play.google.com/store/apps/details?id=com.pharmacompany.ordervpa"
              target="_blank"
              rel="noopener noreferrer"
            >
              Play Store
            </a>
            <a
              href="https://apps.apple.com/in/app/order-vpa/id6755127591"
              target="_blank"
              rel="noopener noreferrer"
            >
              App Store
            </a>
          </div>
        </div>

        <div className="portfolio-card">
          <h3>Website - Stuti Kalantri (Pune)</h3>
          <p>Business Website Project</p>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <p>Phone: 9552936422</p>
        <p>Email: marwadiservices@outlook.com</p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/marwadi-solution/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Profile
          </a>
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const name = e.target.name.value;
            const message = e.target.message.value;

            window.open(
              `https://wa.me/919552936422?text=Hello, I am ${name}. ${message}`
            );
          }}
        >
          <input name="name" placeholder="Your Name" required />
          <textarea name="message" placeholder="Your Message" required />
          <button type="submit">Send on WhatsApp</button>
        </form>
      </section>

      <footer className="footer">
        <p>© 2026 Marwadis Solution. All rights reserved.</p>
        <p>
          <Link to="/privacy" className="footer-link">
            Privacy Policy
          </Link>
        </p>
      </footer>
    </div>
  );
}

function PrivacyPage() {
  return (
    <div className="container">
      <PrivacyPolicy />
      <footer className="footer">
        <Link to="/" className="back-link">
          ← Back to Home
        </Link>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy" element={<PrivacyPage />} />
    </Routes>
  );
}
