import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import PrivacyPolicy from "./PrivacyPolicy";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import "./App.css";

function Scene3D() {
  return (
    <div className="canvas-wrap">
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[2, 2, 2]} intensity={2} />

        <Float speed={2} rotationIntensity={1} floatIntensity={1.2}>
          <mesh rotation={[0.4, 0.4, 0]}>
            <icosahedronGeometry args={[1.2, 0]} />
            <meshStandardMaterial
              color="#38bdf8"
              metalness={0.4}
              roughness={0.15}
            />
          </mesh>
        </Float>

        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.3} />
      </Canvas>
    </div>
  );
}

function Home() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="container">
      <header className="navbar">
        <div className="brand">
          <img
            src="/MarwadisSolution/logo.jpeg"
            alt="Marwadis Solution"
            className="logo"
          />
          <span>Marwadis Solution</span>
        </div>

        <nav>
          <button onClick={() => scrollToSection("home")}>Home</button>
          <button onClick={() => scrollToSection("services")}>Services</button>
          <button onClick={() => scrollToSection("portfolio")}>Portfolio</button>
          <button onClick={() => scrollToSection("contact")}>Contact</button>
          <Link to="/privacy">Privacy</Link>
        </nav>
      </header>

      <section id="home" className="hero">
        <div className="hero-content">
          <div>
            <div className="badge">SaaS • Web • AI • Cloud</div>

            <h1>Building modern software products that scale.</h1>

            <p>
              Apps, SaaS platforms, AI workflows and cloud infrastructure
              designed for speed, clarity and measurable business outcomes.
            </p>

            <div className="hero-actions">
              <button
                className="primary-btn"
                onClick={() => scrollToSection("contact")}
              >
                Book a call
              </button>

              <button
                className="secondary-btn"
                onClick={() => scrollToSection("portfolio")}
              >
                View work
              </button>
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

        <div className="portfolio-grid">
          <div className="portfolio-card">
            <h3>Order@VPA</h3>
            <p>Multi-platform pharmacy commerce product.</p>
          </div>

          <div className="portfolio-card">
            <h3>Business Website</h3>
            <p>Conversion-focused digital presence for a client.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Let’s build something useful.</h2>
        <p>Email: marwadiservices@outlook.com</p>
        <p>Phone: 9552936422</p>
      </section>

      <footer className="footer">
        <p>© 2026 Marwadis Solution. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
    </Routes>
  );
}
