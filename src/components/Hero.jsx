import { identityHighlights } from '../data/portfolio'

function Hero() {
  return (
    <section className="hero section" id="top">
      <div className="container hero-grid">
        <div className="hero-copy fade-up">
          <p className="eyebrow hero-origin">
            <span className="flag-chip" aria-label="Panama">
              <span className="panama-flag" aria-hidden="true">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </span>
            Personal portfolio from Panama
          </p>
          <h1>Roniher Cabrera</h1>
          <p className="hero-title">
            Polymath &bull; Founder &bull; Software Engineer &bull; Digital Nomad
          </p>
          <p className="hero-description">
            Building AI startups, exploring the world, and proving that where
            you start does not determine where you finish.
          </p>
          <blockquote className="philosophy-quote">
            "Zero is not a tragedy. Zero is a starting position."
          </blockquote>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              View projects
            </a>
            <a className="button button-secondary" href="#contact">
              Contact me
            </a>
          </div>
        </div>

        <div className="hero-panel fade-up delay-1" aria-label="Portfolio summary">
          <div className="signal-card">
            <span className="signal-dot"></span>
            <p>Currently building AI startups and technology products.</p>
          </div>
          <div className="hero-card">
            <p className="card-label">Identity</p>
            <h2>From Panama to 120+ countries across six continents.</h2>
            <p>
              A life shaped by discipline, chess, high-performance sport,
              military training, technology, science, entrepreneurship, and
              global exploration.
            </p>
          </div>
          <div className="mini-grid">
            {identityHighlights.map((highlight) => (
              <span key={highlight}>{highlight}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
