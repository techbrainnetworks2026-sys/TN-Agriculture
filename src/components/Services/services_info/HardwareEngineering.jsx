import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ServiceDetail.css';

const HardwareEngineering = ({ onBack }) => {
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
      <section className="svc-hero" style={{ backgroundImage: `url('/images/services/hardwarepic.jpg')` }}>
        <div className="svc-container">
          <div className="svc-hero-content svc-fade-in">
            <span className="svc-badge">Precision Engineering</span>
            <h1 className="svc-title">Hardware Engineering</h1>
            <p className="svc-hero-desc">
              Designing and manufacturing rugged, high-precision electronic and mechanical systems 
              built to withstand the toughest field conditions.
            </p>
          </div>
        </div>
      </section>

      {/* What We Make */}
      <section className="svc-section">
        <div className="svc-container">
          <div className="svc-section-header svc-fade-in">
            <h2 className="svc-section-title">What We Make</h2>
            <div className="svc-divider"></div>
          </div>
          <div className="svc-grid">
            <div className="svc-card svc-fade-in">
              <div className="svc-card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <h3 className="svc-card-title">Ruggedized IoT Sensors</h3>
              <p className="svc-card-text">
                Specialized sensors for soil moisture, nitrate levels, and canopy temperature, 
                housed in IP68-rated enclosures for extreme weather durability.
              </p>
            </div>
            <div className="svc-card svc-fade-in">
              <div className="svc-card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
              </div>
              <h3 className="svc-card-title">Autonomous Drone Carriers</h3>
              <p className="svc-card-text">
                Custom carbon-fiber drone frames and heavy-lift propulsion systems designed 
                specifically for precision agricultural spraying and mapping.
              </p>
            </div>
            <div className="svc-card svc-fade-in">
              <div className="svc-card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
              </div>
              <h3 className="svc-card-title">Smart Gateways</h3>
              <p className="svc-card-text">
                High-performance LoRaWAN and 5G gateways that bridge on-field sensors 
                with global cloud networks in remote rural locations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works in Agriculture */}
      <section className="svc-section" style={{ background: 'var(--bg-alt)' }}>
        <div className="svc-container">
          <div className="svc-grid" style={{ gridTemplateColumns: '1fr 1fr', alignItems: 'center' }}>
            <div className="svc-fade-in" style={{ order: window.innerWidth > 768 ? 2 : 1 }}>
              <h2 className="svc-section-title">Field Performance</h2>
              <p className="svc-card-text" style={{ fontSize: '1.1rem', marginBottom: '30px' }}>
                Hardware in agriculture must be more than just "smart"—it must be bulletproof.
              </p>
              <ul className="svc-feature-list">
                <li className="svc-feature-item">
                  <span className="svc-feature-check">✓</span>
                  <div>
                    <h4 style={{ color: 'var(--text-dark)', marginBottom: '4px' }}>Extreme Durability</h4>
                    <p className="svc-card-text">Tested to operate between -20°C and +60°C.</p>
                  </div>
                </li>
                <li className="svc-feature-item">
                  <span className="svc-feature-check">✓</span>
                  <div>
                    <h4 style={{ color: 'var(--text-dark)', marginBottom: '4px' }}>Ultra-Low Power</h4>
                    <p className="svc-card-text">Solar-powered systems with multi-year battery lifecycles.</p>
                  </div>
                </li>
                <li className="svc-feature-item">
                  <span className="svc-feature-check">✓</span>
                  <div>
                    <h4 style={{ color: 'var(--text-dark)', marginBottom: '4px' }}>Real-time Edge AI</h4>
                    <p className="svc-card-text">On-device processing to reduce data transmission costs.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="svc-fade-in" style={{ order: window.innerWidth > 768 ? 1 : 2 }}>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80" 
                alt="Agri-tech Hardware" 
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
            <h2 className="svc-section-title">Hardware Maintenance</h2>
            <div className="svc-divider"></div>
          </div>
          <div className="svc-grid">
            <div className="svc-card svc-fade-in">
              <h3 className="svc-card-title">Field Calibration</h3>
              <p className="svc-card-text">
                On-site and remote calibration services to ensure sensor accuracy remains 
                consistent season after season.
              </p>
            </div>
            <div className="svc-card svc-fade-in">
              <h3 className="svc-card-title">Replacement Program</h3>
              <p className="svc-card-text">
                Rapid hardware replacement protocols for critical equipment to minimize 
                down-time during sensitive growing phases.
              </p>
            </div>
            <div className="svc-card svc-fade-in">
              <h3 className="svc-card-title">Firmware Updates</h3>
              <p className="svc-card-text">
                Over-the-air (OTA) updates to keep your hardware running the latest 
                efficiency and security algorithms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="svc-cta">
        <div className="svc-container">
          <div className="svc-cta-box svc-fade-in">
            <h2 className="svc-section-title">Build Your Agri-Tech Fleet</h2>
            <p className="svc-card-text" style={{ marginBottom: '40px' }}>
              From individual sensors to full autonomous systems, we engineer it all.
            </p>
            {/* <button className="btn btn-primary" onClick={() => window.location.href='#contact'}>Discuss Hardware Needs</button> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HardwareEngineering;
