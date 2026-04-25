import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'Inter, system-ui, -apple-system, sans-serif', color: '#1a1a1a', lineHeight: '1.6' }}>
      <header style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '800', margin: '0', letterSpacing: '-0.02em' }}>Privacy Policy</h1>
        <p style={{ color: '#666', fontSize: '1rem', marginTop: '10px' }}>Effective Date: 25 April 2026</p>
      </header>

      <div style={{ backgroundColor: '#f9f9f9', padding: '30px', borderRadius: '12px', border: '1px solid #eee', marginBottom: '40px' }}>
        <p>
          <strong>Marwadis Solution</strong> ("Company," "we," "our," or "us") respects your privacy and is committed to protecting your personal and business information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use the Testora mobile application ("Platform").
        </p>
      </div>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: '700', borderBottom: '2px solid #333', paddingBottom: '8px', marginBottom: '20px' }}>1. Information We Collect</h2>
        <p>We may collect the following types of information:</p>
        <ul style={{ paddingLeft: '20px' }}>
          <li><strong>Personal Information:</strong> Contact person’s name, mobile number, email address.</li>
          <li><strong>Account Information:</strong> Login credentials, OTP verification details.</li>
          <li><strong>Usage Data:</strong> Log files, device information, IP address, browser type, operating system, and usage patterns.</li>
        </ul>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: '700', borderBottom: '2px solid #333', paddingBottom: '8px', marginBottom: '20px' }}>2. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul style={{ paddingLeft: '20px' }}>
          <li>Improve our Platform, user experience, and service offerings.</li>
          <li>Ensure legal compliance and prevent fraud or misuse.</li>
        </ul>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: '700', borderBottom: '2px solid #333', paddingBottom: '8px', marginBottom: '20px' }}>3. Sharing of Information</h2>
        <p>We may share your information with regulatory authorities or law enforcement if required by law.</p>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: '700', borderBottom: '2px solid #333', paddingBottom: '8px', marginBottom: '20px' }}>4. Data Security</h2>
        <p>We implement reasonable technical and organizational safeguards to protect your data. However, no system is entirely secure.</p>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: '700', borderBottom: '2px solid #333', paddingBottom: '8px', marginBottom: '20px' }}>10. Contact Us</h2>
        <p>If you have any questions or concerns, please contact us at:</p>
        <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #ddd' }}>
          <p style={{ margin: '5px 0' }}><strong>Email:</strong> marwadisservices@outlook.com</p>
          <p style={{ margin: '5px 0' }}><strong>Phone:</strong> 9552936422</p>
        </div>
      </section>

      <footer style={{ textAlign: 'center', marginTop: '60px', borderTop: '1px solid #eee', paddingTop: '20px' }}>
        <button 
          onClick={() => window.history.back()} 
          style={{ 
            padding: '12px 24px', 
            backgroundColor: '#000', 
            color: '#fff', 
            border: 'none', 
            borderRadius: '30px', 
            fontWeight: '600', 
            cursor: 'pointer',
            transition: 'transform 0.2s ease'
          }}
          onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
        >
          Go Back
        </button>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
