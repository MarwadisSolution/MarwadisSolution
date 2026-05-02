import React from "react";
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
