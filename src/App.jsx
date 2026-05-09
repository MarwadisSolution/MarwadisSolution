import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import Lenis from 'lenis'
import Scene3D from './Scene3D'

/* ============== Smooth scroll ============== */
function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08, smoothWheel: true })
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    return () => lenis.destroy()
  }, [])
}

/* ============== Custom cursor ============== */
function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)
  const [hover, setHover] = useState(false)

  useEffect(() => {
    let mx = 0,
      my = 0,
      rx = 0,
      ry = 0
    const move = (e) => {
      mx = e.clientX
      my = e.clientY
      if (dot.current)
        dot.current.style.transform = `translate(${mx}px, ${my}px)`
    }
    const loop = () => {
      rx += (mx - rx) * 0.15
      ry += (my - ry) * 0.15
      if (ring.current)
        ring.current.style.transform = `translate(${rx}px, ${ry}px)`
      requestAnimationFrame(loop)
    }
    const enter = (e) => {
      if (e.target.closest('a, button, .hoverable')) setHover(true)
    }
    const leave = (e) => {
      if (e.target.closest('a, button, .hoverable')) setHover(false)
    }
    window.addEventListener('mousemove', move)
    document.addEventListener('mouseover', enter)
    document.addEventListener('mouseout', leave)
    loop()
    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', enter)
      document.removeEventListener('mouseout', leave)
    }
  }, [])

  return (
    <>
      <div ref={dot} className={`cursor-dot ${hover ? 'hover' : ''}`} />
      <div ref={ring} className={`cursor-ring ${hover ? 'hover' : ''}`} />
    </>
  )
}

/* ============== Navbar ============== */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const links = [
    ['Work', '#work'],
    ['Services', '#services'],
    ['About', '#about'],
    ['Contact', '#contact'],
  ]
  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <a href="#top" className="nav-logo">
        <img src="/logo.jpeg" alt="Marwadis Solution" />
        <span>Marwadis Solution</span>
      </a>
      <nav className="nav-links">
        {links.map(([label, href]) => (
          <a key={label} href={href} className="nav-link">
            {label}
          </a>
        ))}
      </nav>
      <a href="#contact" className="nav-cta">
        Start a project <span>→</span>
      </a>
      <button
        className={`nav-burger ${open ? 'open' : ''}`}
        onClick={() => setOpen(!open)}
        aria-label="Menu"
      >
        <span></span>
        <span></span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            className="nav-mobile"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="nav-mobile-link"
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="nav-cta mobile"
            >
              Start a project →
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

/* ============== Hero ============== */
function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section ref={ref} id="top" className="hero">
      <div className="hero-3d">
        <Scene3D />
      </div>
      <motion.div className="hero-content" style={{ y, opacity }}>
        <motion.div
          className="hero-eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <span className="dot" /> Studio · Est. 2025 · Nashik, India
        </motion.div>
        <h1 className="hero-title">
          {'You built it.'.split(' ').map((w, i) => (
            <span key={i} className="word">
              <motion.span
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ delay: 0.4 + i * 0.08, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >
                {w}
              </motion.span>
            </span>
          ))}
          <br />
          <span className="hero-title-accent">
            {`We'll make it.`.split(' ').map((w, i) => (
              <span key={i} className="word">
                <motion.span
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.7 + i * 0.08, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                >
                  {w}{' '}
                </motion.span>
              </span>
            ))}
          </span>
        </h1>
        <motion.p
          className="hero-sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
        >
          A digital studio building apps, websites, AI products, and brands that
          turn businesses into something unforgettable.
        </motion.p>
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.25 }}
        >
          <a href="#work" className="btn btn-primary">
            See our work <span>→</span>
          </a>
          <a href="#contact" className="btn btn-ghost">
            Start a project
          </a>
        </motion.div>
      </motion.div>
      <motion.div
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
      >
        <span>Scroll</span>
        <div className="scroll-line"><div /></div>
      </motion.div>
    </section>
  )
}

/* ============== Marquee ============== */
function Marquee() {
  const items = ['Apps', 'Websites', 'AI Development', 'Marketing', 'UI / UX', 'SaaS Products']
  return (
    <div className="marquee">
      <div className="marquee-track">
        {[...items, ...items, ...items].map((it, i) => (
          <span key={i} className="marquee-item">
            {it} <span className="star">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}

/* ============== Reveal animation wrapper ============== */
function Reveal({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

/* ============== About ============== */
function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <Reveal>
          <span className="eyebrow">About</span>
        </Reveal>
        <div className="about-grid">
          <Reveal>
            <h2 className="section-title">
              From two friends to a studio shipping{' '}
              <span className="accent">extraordinary</span> products.
            </h2>
          </Reveal>
          <div className="about-body">
            <Reveal delay={0.1}>
              <p>
                Marwadis Solution was founded in 2025 by{' '}
                <strong>Riddesh Kankariya</strong> and{' '}
                <strong>Sanyam Katariya</strong> — two friends with one belief:
                every business deserves to become a brand.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p>
                We've already partnered with three clients to ship real products
                — apps, websites, brands. We don't just deliver work; we build
                things that move the needle, look gorgeous, and feel impossible
                to ignore.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="stats">
                <div className="stat">
                  <span className="num">3+</span>
                  <span className="lbl">Clients shipped</span>
                </div>
                <div className="stat">
                  <span className="num">2025</span>
                  <span className="lbl">Founded in</span>
                </div>
                <div className="stat">
                  <span className="num">5+</span>
                  <span className="lbl">Service lines</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============== Services ============== */
const SERVICES = [
  {
    n: '01',
    title: 'Mobile Apps',
    desc: 'Cross-platform iOS and Android apps that feel native everywhere — built with React Native, Flutter, and care.',
    tags: ['iOS', 'Android', 'React Native', 'Flutter'],
  },
  {
    n: '02',
    title: 'Websites',
    desc: 'Fast, responsive, conversion-focused websites built with modern frameworks and pixel-tight craft.',
    tags: ['React', 'Next.js', 'Vite', 'CMS'],
  },
  {
    n: '03',
    title: 'AI Development',
    desc: 'Custom AI agents, chatbots, and automation that solve real problems — not just demo well.',
    tags: ['LLMs', 'Agents', 'RAG', 'Automation'],
  },
  {
    n: '04',
    title: 'Digital Marketing',
    desc: 'Data-driven performance marketing that turns clicks into customers and customers into fans.',
    tags: ['SEO', 'Ads', 'Social', 'Analytics'],
  },
  {
    n: '05',
    title: 'UI / UX Design',
    desc: 'Interfaces that make users stop, stare, and stay — wireframes to high-fidelity, end to end.',
    tags: ['Figma', 'Prototyping', 'Design Systems'],
  },
  {
    n: '06',
    title: 'SaaS Products',
    desc: 'Full-stack SaaS — from auth and billing to dashboards and admin — engineered to scale.',
    tags: ['Full-stack', 'Auth', 'Stripe', 'Cloud'],
  },
]

function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <Reveal>
          <span className="eyebrow light">Services</span>
        </Reveal>
        <Reveal>
          <h2 className="section-title light">
            Everything you need to take a product from{' '}
            <span className="accent">idea to brand</span>.
          </h2>
        </Reveal>
        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.05}>
              <div className="service-card hoverable">
                <div className="service-head">
                  <span className="service-n">{s.n}</span>
                  <span className="service-arrow">↗</span>
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="service-tags">
                  {s.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============== Work ============== */
const PROJECTS = [
  {
    client: 'Nine Fold Pharma',
    person: 'Ayush Jain',
    title: 'Order@VPA',
    desc: 'A full pharmacy ordering platform — cross-platform mobile app + web portal — connecting wholesalers, retailers, and customers in one workflow.',
    tags: ['Mobile App', 'Web', 'iOS', 'Android'],
    links: [
      { label: 'Play Store', href: 'https://play.google.com/store/apps/details?id=com.pharmacompany.ordervpa' },
      { label: 'App Store', href: 'https://apps.apple.com/in/app/order-vpa/id6755127591' },
    ],
    color: '#3b82f6',
  },
  {
    client: 'Travel With Stuti',
    person: 'Stuti Kalantri',
    title: 'Travel With Stuti',
    desc: 'A travel creator brand site — storytelling-first design, smooth galleries, and a booking flow that converts curious visitors into trips.',
    tags: ['Website', 'Branding', 'UX'],
    links: [{ label: 'Visit site', href: 'https://travelwithstuti.com/' }],
    color: '#8b5cf6',
  },
]

function Work() {
  return (
    <section id="work" className="work">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Work</span>
        </Reveal>
        <Reveal>
          <h2 className="section-title">
            Recent <span className="accent">work</span> we're proud of.
          </h2>
        </Reveal>
        <div className="work-list">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <article className="work-card hoverable">
                <div
                  className="work-visual"
                  style={{
                    background: `linear-gradient(135deg, ${p.color}, #0a0e1a)`,
                  }}
                >
                  <div className="work-mock">
                    <div className="mock-bar">
                      <span /><span /><span />
                    </div>
                    <div className="mock-content">
                      <div className="mock-title">{p.title}</div>
                      <div className="mock-line w70" />
                      <div className="mock-line w50" />
                      <div className="mock-line w80" />
                    </div>
                  </div>
                  <div className="work-glow" style={{ background: p.color }} />
                </div>
                <div className="work-info">
                  <div className="work-meta">
                    <span>{p.client}</span>
                    <span className="dot-sep">·</span>
                    <span>{p.person}</span>
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <div className="work-tags">
                    {p.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  <div className="work-links">
                    {p.links.map((l) => (
                      <a
                        key={l.label}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {l.label} <span>↗</span>
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============== Contact ============== */
function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <Reveal>
          <span className="eyebrow light">Contact</span>
        </Reveal>
        <Reveal>
          <h2 className="contact-title">
            Have an idea?<br />
            <span className="accent">Let's build it.</span>
          </h2>
        </Reveal>
        <div className="contact-grid">
          <Reveal delay={0.1}>
            <a
              href="mailto:marwadiservices@outlook.com"
              className="contact-card hoverable"
            >
              <span className="lbl">Email</span>
              <span className="val">marwadiservices@outlook.com</span>
              <span className="arr">→</span>
            </a>
          </Reveal>
          <Reveal delay={0.15}>
            <a href="tel:+919552936422" className="contact-card hoverable">
              <span className="lbl">Phone / WhatsApp</span>
              <span className="val">+91 9552936422</span>
              <span className="arr">→</span>
            </a>
          </Reveal>
          <Reveal delay={0.2}>
            <a
              href="https://www.linkedin.com/in/marwadi-solution/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card hoverable"
            >
              <span className="lbl">LinkedIn</span>
              <span className="val">/marwadi-solution</span>
              <span className="arr">↗</span>
            </a>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="contact-card static">
              <span className="lbl">Studio</span>
              <span className="val">
                219/9, Shanti Nagar, Collector Patta,<br />
                Malegaon, Nashik, India
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ============== Footer ============== */
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <img src="/logo.jpeg" alt="Marwadis Solution" />
            <div>
              <h4>Marwadis Solution</h4>
              <p>You built it. We'll make it.</p>
            </div>
          </div>
          <div className="footer-links">
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Marwadis Solution. All rights reserved.</span>
          <span>Made with care in Nashik, India.</span>
        </div>
      </div>
    </footer>
  )
}

/* ============== App ============== */
export default function App() {
  useLenis()
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
