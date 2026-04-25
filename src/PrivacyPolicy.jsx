import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="privacy">
      <header className="privacy-header">
        <h1>Privacy Policy</h1>
        <p className="privacy-effective">Effective Date: 25 April 2026</p>
      </header>

      <div className="privacy-intro">
        <p>
          <strong>Marwadis Solution</strong> ("Company," "we," "our," or "us")
          respects your privacy and is committed to protecting your personal
          and business information. This Privacy Policy explains how we
          collect, use, disclose, and safeguard your information when you use
          our Platform.
        </p>
      </div>

      <section className="privacy-section">
        <h2>1. Information We Collect</h2>
        <p>We may collect the following types of information:</p>
        <ul>
          <li>
            <strong>Personal Information:</strong> Contact person's name,
            mobile number, email address.
          </li>
          <li>
            <strong>Account Information:</strong> Login credentials, OTP
            verification details.
          </li>
          <li>
            <strong>Usage Data:</strong> Log files, device information, IP
            address, browser type, operating system, and usage patterns.
          </li>
        </ul>
      </section>

      <section className="privacy-section">
        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Improve our Platform, user experience, and service offerings.</li>
          <li>Ensure legal compliance and prevent fraud or misuse.</li>
        </ul>
      </section>

      <section className="privacy-section">
        <h2>3. Sharing of Information</h2>
        <p>
          We may share your information with regulatory authorities or law
          enforcement if required by law.
        </p>
      </section>

      <section className="privacy-section">
        <h2>4. Data Security</h2>
        <p>
          We implement reasonable technical and organizational safeguards to
          protect your data. However, no system is entirely secure.
        </p>
      </section>

      <section className="privacy-section">
        <h2>5. Contact Us</h2>
        <p>If you have any questions or concerns, please contact us at:</p>
        <div className="privacy-contact-card">
          <p>
            <strong>Email:</strong> marwadiservices@outlook.com
          </p>
          <p>
            <strong>Phone:</strong> 9552936422
          </p>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
