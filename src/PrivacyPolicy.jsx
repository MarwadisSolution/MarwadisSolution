import React from "react";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <div className="privacy-page">
      <div className="privacy-container">
        <h1>Privacy Policy</h1>

        <p><strong>Effective Date:</strong> 25 April 2026</p>

        <p>
          Marwadis Solution ("Company," "we," "our," or "us") respects your
          privacy and is committed to protecting your personal and business
          information. This Privacy Policy explains how we collect, use,
          disclose, and safeguard your information when you use the Testora
          mobile application ("Platform"). Please read this policy carefully to
          understand our practices.
        </p>

        <h2>1. Information We Collect</h2>
        <p>We may collect the following types of information:</p>
        <ul>
          <li>Personal Information: Contact person’s name, mobile number, email address.</li>
          <li>Account Information: Login credentials, OTP verification details.</li>
          <li>
            Usage Data: Log files, device information, IP address, browser
            type, operating system, and usage patterns.
          </li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Improve our Platform, user experience, and service offerings.</li>
          <li>Ensure legal compliance and prevent fraud or misuse.</li>
        </ul>

        <h2>3. Sharing of Information</h2>
        <p>We may share your information:</p>
        <ul>
          <li>With regulatory authorities or law enforcement if required by law.</li>
        </ul>

        <h2>4. Data Security</h2>
        <p>
          We implement reasonable technical and organizational safeguards to
          protect your data against unauthorized access, loss, misuse, or
          alteration. However, no system is entirely secure, and we cannot
          guarantee absolute security.
        </p>

        <h2>5. Data Retention</h2>
        <p>
          We retain your data for as long as necessary to fulfill the purposes
          outlined in this policy or as required by law.
        </p>

        <h2>6. User Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access and review your personal information.</li>
          <li>
            Request correction or deletion of inaccurate or outdated
            information.
          </li>
          <li>
            Withdraw consent for certain data uses (subject to legal or
            contractual restrictions).
          </li>
        </ul>

        <h2>7. Cookies and Tracking</h2>
        <p>
          We may use cookies or similar technologies to enhance user
          experience, analyze site usage, and improve our services. You can
          modify your browser settings to decline cookies, but this may affect
          Platform functionality.
        </p>

        <h2>8. Third-Party Links</h2>
        <p>
          The Platform may contain links to third-party websites or services.
          We are not responsible for the privacy practices or content of those
          third parties.
        </p>

        <h2>9. Updates to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify
          you of material changes by posting the updated policy on the
          Platform. Continued use of the Platform constitutes acceptance of the
          revised policy.
        </p>

        <h2>10. Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy,
          please contact us at:
        </p>
        <ul>
          <li>Email: marwadisservices@outlook.com</li>
          <li>Phone: 9552936422</li>
        </ul>

        <p>
          By using Testora, you acknowledge that you have read and understood
          this Privacy Policy.
        </p>

        <Link to="/" className="primary-btn">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
