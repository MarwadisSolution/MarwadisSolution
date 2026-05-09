import { Link } from 'react-router-dom'
import { useEffect } from 'react'

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="privacy">
      <header className="privacy-header">
        <Link to="/" className="privacy-back">
          <span>←</span> Back to home
        </Link>
        <Link to="/" className="privacy-logo">
          <img src="/logo.jpeg" alt="Marwadis Solution" />
          <span>Marwadis Solution</span>
        </Link>
      </header>

      <main className="privacy-main">
        <div className="privacy-container">
          <span className="eyebrow">Legal</span>
          <h1>Privacy Policy</h1>
          <p className="privacy-updated">
            Last updated: {new Date().toLocaleDateString('en-IN', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>

          <section>
            <h2>1. Introduction</h2>
            <p>
              Marwadis Solution ("we", "our", "us") respects your privacy and is
              committed to protecting the personal data you share with us. This
              policy explains what we collect, how we use it, and the rights you
              have over your data.
            </p>
          </section>

          <section>
            <h2>2. Information we collect</h2>
            <p>
              When you contact us, request a quote, or work with us on a
              project, we may collect: your name, email address, phone number,
              company name, project details, and any information you choose to
              share. When you visit this site, we may also collect anonymous
              analytics such as pages visited, browser type, and approximate
              location.
            </p>
          </section>

          <section>
            <h2>3. How we use your information</h2>
            <p>
              We use your information to respond to enquiries, deliver services
              you've engaged us for, send project updates, improve our website,
              and comply with legal obligations. We do not sell your data.
            </p>
          </section>

          <section>
            <h2>4. Sharing your information</h2>
            <p>
              We share your data only with trusted third-party tools we use to
              run our business (for example, email and analytics providers), and
              only to the extent necessary. All such providers are bound by
              confidentiality obligations.
            </p>
          </section>

          <section>
            <h2>5. Data retention</h2>
            <p>
              We retain your information for as long as necessary to provide our
              services and meet legal requirements. You may request deletion at
              any time by emailing us.
            </p>
          </section>

          <section>
            <h2>6. Your rights</h2>
            <p>
              You have the right to access, correct, or delete the personal data
              we hold about you, and to withdraw consent at any time. To
              exercise these rights, contact us using the details below.
            </p>
          </section>

          <section>
            <h2>7. Cookies</h2>
            <p>
              This site may use cookies for essential functionality and basic
              analytics. You can disable cookies in your browser settings; some
              parts of the site may not work as expected without them.
            </p>
          </section>

          <section>
            <h2>8. Changes to this policy</h2>
            <p>
              We may update this policy from time to time. The "last updated"
              date at the top reflects the most recent changes. Continued use of
              our site or services means you accept the updated policy.
            </p>
          </section>

          <section>
            <h2>9. Contact us</h2>
            <p>
              For privacy questions or requests, contact:<br />
              <strong>Email:</strong>{' '}
              <a href="mailto:marwadiservices@outlook.com">
                marwadiservices@outlook.com
              </a>
              <br />
              <strong>Phone:</strong>{' '}
              <a href="tel:+919552936422">+91 9552936422</a>
              <br />
              <strong>Address:</strong> 219/9, Shanti Nagar, Collector Patta,
              Malegaon, Nashik, India
            </p>
          </section>
        </div>
      </main>

      <footer className="privacy-footer">
        <span>© {new Date().getFullYear()} Marwadis Solution.</span>
        <Link to="/">Home</Link>
      </footer>
    </div>
  )
}
