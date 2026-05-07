import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ServiceDetail.css';

const ProductDesign = ({ onBack }) => {
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
      <section className="svc-hero" style={{ backgroundImage: `url('/images/services/designpic.jpg')` }}>
        <div className="svc-container">
          <div className="svc-hero-content svc-fade-in">
            <span className="svc-badge">Human-Centric Innovation</span>
            <h1 className="svc-title">Product Design</h1>
            <p className="svc-hero-desc">
              Transforming complex agricultural technologies into intuitive, elegant, and 
              functional products that farmers actually enjoy using.
            </p>
          </div>
        </div>
      </section>

      {/* What We Design */}
      <section className="svc-section">
        <div className="svc-container">
          <div className="svc-section-header svc-fade-in">
            <h2 className="svc-section-title">What We Design</h2>
            <div className="svc-divider"></div>
          </div>
          <div className="svc-grid">
            <div className="svc-card svc-fade-in">
              <div className="svc-card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20v-6M6 20V10M18 20V4"></path></svg>
              </div>
              <h3 className="svc-card-title">Intuitive Dashboards</h3>
              <p className="svc-card-text">
                UI/UX design for farm management software that prioritizes clarity and 
                actionability, reducing the learning curve for field operators.
              </p>
            </div>
            <div className="svc-card svc-fade-in">
              <div className="svc-card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
              </div>
              <h3 className="svc-card-title">Ergonomic Industrial Design</h3>
              <p className="svc-card-text">
                Physical product design for hand-held tools and machine interfaces 
                that emphasize comfort, safety, and durability in rough terrain.
              </p>
            </div>
            <div className="svc-card svc-fade-in">
              <div className="svc-card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
              </div>
              <h3 className="svc-card-title">Service Design</h3>
              <p className="svc-card-text">
                Mapping the entire user journey—from initial setup to harvest—to ensure 
                our technology integrates seamlessly into existing farm workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works in Agriculture */}
      <section className="svc-section" style={{ background: 'var(--bg-alt)' }}>
        <div className="svc-container">
          <div className="svc-grid" style={{ gridTemplateColumns: '1fr 1fr', alignItems: 'center' }}>
            <div className="svc-fade-in">
              <h2 className="svc-section-title">Design in the Field</h2>
              <p className="svc-card-text" style={{ fontSize: '1.1rem', marginBottom: '30px' }}>
                Great design isn't just about how it looks—it's about how it performs under 
                the sun, in the rain, and in the hands of a busy farmer.
              </p>
              <ul className="svc-feature-list">
                <li className="svc-feature-item">
                  <span className="svc-feature-check">✓</span>
                  <div>
                    <h4 style={{ color: 'var(--text-dark)', marginBottom: '4px' }}>Outdoor Visibility</h4>
                    <p className="svc-card-text">High-contrast UI designed for direct sunlight readability.</p>
                  </div>
                </li>
                <li className="svc-feature-item">
                  <span className="svc-feature-check">✓</span>
                  <div>
                    <h4 style={{ color: 'var(--text-dark)', marginBottom: '4px' }}>Glove-Friendly Interfaces</h4>
                    <p className="svc-card-text">Large touch targets and physical feedback for field use.</p>
                  </div>
                </li>
                <li className="svc-feature-item">
                  <span className="svc-feature-check">✓</span>
                  <div>
                    <h4 style={{ color: 'var(--text-dark)', marginBottom: '4px' }}>Sustainable Materials</h4>
                    <p className="svc-card-text">Using eco-friendly, recyclable materials for hardware casing.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="svc-fade-in" style={{ textAlign: 'right' }}>
              <img 
                src="/images/services/design_detail.png" 
                alt="Agri-tech Design" 
                style={{ width: '100%', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--card-shadow)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance & Support */}
      <section className="svc-section">
        <div className="svc-container">
          <div className="svc-section-header svc-fade-in">
            <h2 className="svc-section-title">Design Evolution</h2>
            <div className="svc-divider"></div>
          </div>
          <div className="svc-grid">
            <div className="svc-card svc-fade-in">
              <h3 className="svc-card-title">User Testing</h3>
              <p className="svc-card-text">
                Continuous on-farm user testing to gather real-world data and iterate on 
                design usability.
              </p>
            </div>
            <div className="svc-card svc-fade-in">
              <h3 className="svc-card-title">Brand Consistency</h3>
              <p className="svc-card-text">
                Ensuring that every product, from mobile apps to physical sensors, carries 
                the Techbrain Networks seal of quality.
              </p>
            </div>
            <div className="svc-card svc-fade-in">
              <h3 className="svc-card-title">Accessibility Compliance</h3>
              <p className="svc-card-text">
                Adhering to WCAG and international standards to ensure our technology is 
                accessible to everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="svc-cta">
        <div className="svc-container">
          <div className="svc-cta-box svc-fade-in">
            <h2 className="svc-section-title">Elevate Your Product</h2>
            <p className="svc-card-text" style={{ marginBottom: '40px' }}>
              Design is the bridge between technology and its users. Let's make it a strong one.
            </p>
            {/* <button className="btn btn-primary" onClick={() => window.location.href='#contact'}>Start a Design Project</button> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDesign;
