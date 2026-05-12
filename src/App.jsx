import React from "react";
import Scene3D from "./Scene3D";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <header className="navbar">
        <h1>Marwadis Solution</h1>

        <nav>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="left">
          <h2>Building Apps, Websites & AI Solutions</h2>

          <p>
            We build scalable apps, websites, AI tools and cloud solutions for
            startups and businesses across India.
          </p>

          <button
            onClick={() =>
              window.open(
                "https://wa.me/919552936422",
                "_blank"
              )
            }
          >
            Get Started
          </button>
        </div>

        <div className="right">
          <Scene3D />
        </div>
      </section>

      {/* Services */}
      <section id="services" className="services">
        <h2>Our Services</h2>

        <div className="cards">
          <div className="card">
            <h3>App Development</h3>
            <p>Android & iOS applications with modern UI.</p>
          </div>

          <div className="card">
            <h3>Website Development</h3>
            <p>Professional business and portfolio websites.</p>
          </div>

          <div className="card">
            <h3>AI Solutions</h3>
            <p>Automation, AI chatbots and smart integrations.</p>
          </div>

          <div className="card">
            <h3>Cloud Services</h3>
            <p>AWS deployment, backend APIs and hosting.</p>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="portfolio">
        <h2>Our Portfolio</h2>

        <div className="portfolio-card">
          <h3>Order@VPA - Ayush Jain</h3>

          <p>Pharmacy Ordering Mobile Application</p>

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
          <h3>Business Website - Pune</h3>

          <p>Modern responsive business website solution.</p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact">
        <h2>Contact Us</h2>

        <p>📞 9552936422</p>

        <p>📧 marwadiservices@outlook.com</p>

        <p>
          <a
            href="https://www.linkedin.com/in/marwadi-solution/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn Profile
          </a>
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();

            const name = e.target.name.value;
            const message = e.target.message.value;

            window.open(
              `https://wa.me/919552936422?text=Hello, I am ${name}. ${message}`,
              "_blank"
            );
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
          />

          <button type="submit">Send on WhatsApp</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Marwadis Solution. All rights reserved.</p>
      </footer>
    </div>
  );
}
