import './Hero.css';

export default function Hero() {
  const scrollToSection = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      {/* Background Image with Parallax */}
      <div className="hero-bg" />
      <div className="hero-overlay" />

      {/* Floating particles */}
      <div className="hero-particles">
        {[...Array(8)].map((_, i) => (
          <div key={i} className={`particle particle-${i + 1}`} />
        ))}
      </div>

      <div className="hero-content">
        {/* <div className="hero-badge">
          <span className="badge-dot" />
          Smart Agriculture Technology
        </div> */}

        <h1 className="hero-heading">
          Smart Agriculture<br />
          <span className="hero-heading-accent">Technology Solutions</span>
        </h1>

        <p className="hero-subheading">
          Empowering Farmers with Intelligent Digital Farming Systems.<br />
          Harness the power of AI, IoT, and Blockchain to transform your farm.
        </p>

        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">480+</span>
            <span className="stat-label">Products</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-number">24</span>
            <span className="stat-label">Industries</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-number">30+</span>
            <span className="stat-label">Countries</span>
          </div>
        </div>

        <div className="hero-actions">
          <button
            className="btn btn-primary"
            onClick={() => scrollToSection('#products')}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            View Products
          </button>
          <button
            className="btn btn-outline"
            onClick={() => scrollToSection('#contact')}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.18 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            Contact Us
          </button>
        </div>
      </div>

      {/* Scroll Indicator
      <div className="scroll-indicator" onClick={() => scrollToSection('#about')}>
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span>Scroll Down</span>
      </div> */}

      {/* Wave SVG */}
      <div className="hero-wave">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,60 C360,0 1080,80 1440,20 L1440,80 L0,80 Z" fill="#F5FBEF" />
        </svg>
      </div>
    </section>
  );
}
