import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import PrivacyPolicy from "./PrivacyPolicy";
import Scene3D from "./Scene3D";

function Home() {
  return (
    <div className="container">
      <header className="navbar">
        <div className="brand">
          <img
            src="/logo.jpeg"
            alt="Marwadis Solutions"
            className="logo"
          />
        </div>

        <nav>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
          <Link to="/privacy" className="nav-link">
            Privacy
          </Link>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <div className="hero-copy">
            <span className="badge">SaaS • Product Engineering • AI</span>

            <h1>
              We build scalable digital products that grow businesses.
            </h1>

            <p>
              Apps, SaaS platforms, AI workflows and cloud infrastructure
              designed for speed, clarity and measurable business outcomes.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="primary-btn">
                Book a call
              </a>

              <a href="#portfolio" className="secondary-btn">
                View work
              </a>
            </div>
          </div>

          <div className="hero-visual glass-card">
            <Scene3D />
          </div>
        </div>
      </section>

      <section id="services" className="services">
        <h2>Services</h2>

        <div className="cards">
          <div className="card">SaaS Product Development</div>
          <div className="card">Web Applications</div>
          <div className="card">AI Integrations</div>
          <div className="card">Cloud Architecture</div>
        </div>
      </section>

      <section id="portfolio" className="portfolio">
        <h2>Selected Work</h2>

        <div className="portfolio-card">
          <h3>Order@VPA</h3>
          <p>Multi-platform pharmacy commerce product.</p>
        </div>

        <div className="portfolio-card">
          <h3>Business Website</h3>
          <p>Conversion-focused digital presence for a client.</p>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Let’s build something useful.</h2>
        <p>Email: marwadiservices@outlook.com</p>
        <p>Phone: 9552936422</p>
      </section>
    </div>
  );
}

function PrivacyPage() {
  return <PrivacyPolicy />;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy" element={<PrivacyPage />} />
    </Routes>
  );
}
