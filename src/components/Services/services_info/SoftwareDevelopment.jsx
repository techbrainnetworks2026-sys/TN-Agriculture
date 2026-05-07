import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ServiceDetail.css';

const SoftwareDevelopment = ({ onBack }) => {
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
      <section className="svc-hero" style={{ backgroundImage: `url('/images/services/softpic.jpg')` }}>
        <div className="svc-container">
          <div className="svc-hero-content svc-fade-in">
            <span className="svc-badge">Digital Transformation</span>
            <h1 className="svc-title">Software Development</h1>
            <p className="svc-hero-desc">
              Pioneering intelligent software ecosystems that bridge the gap between traditional farming 
              and the future of digital agriculture.
            </p>
          </div>
        </div>
      </section>

      {/* What We Develop */}
      <section className="svc-section">
        <div className="svc-container">
          <div className="svc-section-header svc-fade-in">
            <h2 className="svc-section-title">What We Develop</h2>
            <div className="svc-divider"></div>
          </div>
          <div className="svc-grid">
            <div className="svc-card svc-fade-in">
              <div className="svc-card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
              </div>
              <h3 className="svc-card-title">Farm Management Systems</h3>
              <p className="svc-card-text">
                Comprehensive cloud-based platforms (SaaS) for resource planning, inventory tracking, 
                and financial management tailored for modern agricultural enterprises.
              </p>
            </div>
            <div className="svc-card svc-fade-in">
              <div className="svc-card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
              </div>
              <h3 className="svc-card-title">IoT Data Pipelines</h3>
              <p className="svc-card-text">
                Real-time data processing engines that ingest millions of data points from field sensors 
                to provide actionable insights on soil health and climate.
              </p>
            </div>
            <div className="svc-card svc-fade-in">
              <div className="svc-card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
              </div>
              <h3 className="svc-card-title">AI Prediction Models</h3>
              <p className="svc-card-text">
                Custom Machine Learning algorithms developed to forecast crop yields, detect diseases 
                from satellite imagery, and optimize harvest schedules.
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
              <h2 className="svc-section-title">Agriculture Tech Integration</h2>
              <p className="svc-card-text" style={{ fontSize: '1.1rem', marginBottom: '30px' }}>
                Our software isn't just about code; it's about solving real-world agricultural challenges 
                through digital intelligence.
              </p>
              <ul className="svc-feature-list">
                <li className="svc-feature-item">
                  <span className="svc-feature-check">✓</span>
                  <div>
                    <h4 style={{ color: 'var(--text-dark)', marginBottom: '4px' }}>Remote Monitoring</h4>
                    <p className="svc-card-text">Manage thousand-acre farms from a single mobile dashboard.</p>
                  </div>
                </li>
                <li className="svc-feature-item">
                  <span className="svc-feature-check">✓</span>
                  <div>
                    <h4 style={{ color: 'var(--text-dark)', marginBottom: '4px' }}>Automated Controls</h4>
                    <p className="svc-card-text">Software-triggered irrigation and fertilization systems.</p>
                  </div>
                </li>
                <li className="svc-feature-item">
                  <span className="svc-feature-check">✓</span>
                  <div>
                    <h4 style={{ color: 'var(--text-dark)', marginBottom: '4px' }}>Blockchain Traceability</h4>
                    <p className="svc-card-text">End-to-end supply chain transparency from farm to table.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="svc-fade-in" style={{ textAlign: 'right' }}>
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80" 
                alt="Agri-tech Software" 
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
            <h2 className="svc-section-title">Maintenance & Maintenance</h2>
            <div className="svc-divider"></div>
          </div>
          <div className="svc-grid">
            <div className="svc-card svc-fade-in">
              <h3 className="svc-card-title">24/7 System Uptime</h3>
              <p className="svc-card-text">
                Continuous monitoring of cloud infrastructure to ensure farmers always have access 
                to critical data, even during peak harvest seasons.
              </p>
            </div>
            <div className="svc-card svc-fade-in">
              <h3 className="svc-card-title">Iterative Updates</h3>
              <p className="svc-card-text">
                Regular software patches and feature updates based on field feedback and 
                evolving agricultural standards.
              </p>
            </div>
            <div className="svc-card svc-fade-in">
              <h3 className="svc-card-title">Security Audits</h3>
              <p className="svc-card-text">
                Rigorous cybersecurity protocols to protect sensitive farm data and intellectual 
                property against modern digital threats.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="svc-cta">
        <div className="svc-container">
          <div className="svc-cta-box svc-fade-in">
            <h2 className="svc-section-title">Ready to Digitize Your Farm?</h2>
            <p className="svc-card-text" style={{ marginBottom: '40px' }}>
              Let's build a custom software solution that fits your unique agricultural needs.
            </p>
            {/* <button className="btn btn-primary" onClick={() => window.location.href='#contact'}>Contact Our Team</button> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SoftwareDevelopment;
