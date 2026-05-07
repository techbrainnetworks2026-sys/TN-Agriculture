import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ServiceDetail.css';

const ResearchDevelopment = ({ onBack }) => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.svc-fade-in').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="svc-detail">
      {/* Navigation */}
      <nav className="svc-nav">
        <div className="svc-container">
          <button className="svc-back-btn" onClick={onBack || (() => navigate('/#services'))}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Back to Services
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="svc-hero" style={{ backgroundImage: `url('/images/services/research_development.jpg')` }}>
        <div className="svc-container">
          <div className="svc-hero-content svc-fade-in">
            <span className="svc-badge">Scientific Discovery</span>
            <h1 className="svc-title">Research & Development</h1>
            <p className="svc-hero-desc">
              Pushing the boundaries of agricultural science through rigorous research,
              advanced data analysis, and iterative field development.
            </p>
          </div>
        </div>
      </section>

      {/* How we Research */}
      <section className="svc-section">
        <div className="svc-container">
          <div className="svc-section-header svc-fade-in">
            <h2 className="svc-section-title">How We Research</h2>
            <div className="svc-divider"></div>
          </div>
          <div className="svc-grid">
            <div className="svc-card svc-fade-in">
              <div className="svc-card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
              </div>
              <h3 className="svc-card-title">Scientific Method</h3>
              <p className="svc-card-text">
                Conducting controlled field experiments and laboratory testing to validate
                new agricultural theories and technologies before deployment.
              </p>
            </div>
            <div className="svc-card svc-fade-in">
              <div className="svc-card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
              </div>
              <h3 className="svc-card-title">Big Data Analytics</h3>
              <p className="svc-card-text">
                Analyzing vast datasets from historical yields, weather patterns, and soil sensors
                to identify hidden trends and optimize future agricultural practices.
              </p>
            </div>
            <div className="svc-card svc-fade-in">
              <div className="svc-card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <h3 className="svc-card-title">University Partnerships</h3>
              <p className="svc-card-text">
                Collaborating with leading agricultural universities to stay at the forefront
                of biological and technological breakthroughs in the industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* R&D in Agriculture Fields */}
      <section className="svc-section" style={{ background: 'var(--bg-alt)' }}>
        <div className="svc-container">
          <div className="svc-grid" style={{ gridTemplateColumns: '1fr 1fr', alignItems: 'center' }}>
            <div className="svc-fade-in" style={{ order: window.innerWidth > 768 ? 2 : 1 }}>
              <h2 className="svc-section-title">Agriculture Field Research</h2>
              <p className="svc-card-text" style={{ fontSize: '1.1rem', marginBottom: '30px' }}>
                We bridge the gap between academic research and commercial agricultural success.
              </p>
              <ul className="svc-feature-list">
                <li className="svc-feature-item">
                  <span className="svc-feature-check">✓</span>
                  <div>
                    <h4 style={{ color: 'var(--text-dark)', marginBottom: '4px' }}>Crop Resilience Research</h4>
                    <p className="svc-card-text">Developing tech to help crops survive extreme climate shifts.</p>
                  </div>
                </li>
                <li className="svc-feature-item">
                  <span className="svc-feature-check">✓</span>
                  <div>
                    <h4 style={{ color: 'var(--text-dark)', marginBottom: '4px' }}>Sustainable Innovations</h4>
                    <p className="svc-card-text">Focusing on zero-waste farming and organic yield optimization.</p>
                  </div>
                </li>
                <li className="svc-feature-item">
                  <span className="svc-feature-check">✓</span>
                  <div>
                    <h4 style={{ color: 'var(--text-dark)', marginBottom: '4px' }}>Sensor Fusion Testing</h4>
                    <p className="svc-card-text">Perfecting the integration of multi-modal sensor arrays.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="svc-fade-in" style={{ order: window.innerWidth > 768 ? 1 : 2 }}>
              <img
                src="/images/services/research_detail.png"
                alt="Agri-tech R&D"
                style={{ width: '100%', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--card-shadow)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Continuous Innovation */}
      <section className="svc-section">
        <div className="svc-container">
          <div className="svc-section-header svc-fade-in">
            <h2 className="svc-section-title">Continuous Development</h2>
            <div className="svc-divider"></div>
          </div>
          <div className="svc-grid">
            <div className="svc-card svc-fade-in">
              <h3 className="svc-card-title">Prototyping Labs</h3>
              <p className="svc-card-text">
                Dedicated rapid prototyping facilities to turn R&D findings into
                functional hardware and software models within weeks.
              </p>
            </div>
            <div className="svc-card svc-fade-in">
              <h3 className="svc-card-title">Global Trials</h3>
              <p className="svc-card-text">
                Conducting R&D across different climate zones to ensure our
                technologies are robust for global agricultural markets.
              </p>
            </div>
            <div className="svc-card svc-fade-in">
              <h3 className="svc-card-title">IP Protection</h3>
              <p className="svc-card-text">
                Protecting the future of agriculture by patenting breakthrough
                technologies discovered during our R&D process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="svc-cta">
        <div className="svc-container">
          <div className="svc-cta-box svc-fade-in">
            <h2 className="svc-section-title">Shape the Future with Us</h2>
            <p className="svc-card-text" style={{ marginBottom: '40px' }}>
              Have a visionary idea? Our R&D team can help you validate and build it.
            </p>
            {/* <button className="btn btn-primary" onClick={() => window.location.href='#contact'}>Partner for R&D</button> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResearchDevelopment;
