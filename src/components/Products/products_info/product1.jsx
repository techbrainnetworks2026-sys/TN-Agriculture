import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './product1.css';

const Product1 = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('p1-visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.p1-fade-in, .p1-fade-in-left, .p1-fade-in-right').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="product1-page">
      {/* ─── Navigation ─────────────────────────── */}
      <nav className="product1-nav">
        <div className="p1-container">
          <button onClick={() => navigate('/#products')} className="product1-back-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Home
          </button>
        </div>
      </nav>

      {/* ─── Hero Section ─────────────────────────────────────────── */}
      <section className="product1-hero" style={{ backgroundImage: `url(/images/product_01.png)`  }}>
        <div className="p1-container">
          <div className="product1-hero-content p1-fade-in">
            <span className="product1-hero-badge">AI-Powered Agriculture</span>
            <h1>Precision Farming & <br /><span>Crop Management</span> Software</h1>
            <p className="product1-hero-description">
              An advanced data-driven agricultural platform that enables farmers to monitor crop health, optimize resource usage, and increase yield through AI-powered insights, IoT sensors, and precision analytics.
            </p>
             
          </div>
        </div>
      </section>

      {/* ─── Introduction & Background ─────────────────────────────────────── */}
      <section className="product1-section">
        <div className="p1-container">
          <div className="product1-overview-grid">
            <div className="product1-overview-text p1-fade-in-left">
              <span className="p1-section-badge">Introduction</span>
              <h3 className="p1-section-title">Empowering <span>Modern Agriculture</span></h3>
              <p>
                Precision Farming & Crop Management Software is a next-generation agricultural solution that uses AI, IoT, and geospatial technologies to transform traditional farming into a data-driven, efficient, and sustainable process.
              </p>
              <p>
                It helps farmers make informed decisions by providing real-time insights into soil conditions, crop health, weather patterns, and resource utilization.
              </p>
              <div className="product1-highlight-box">
                <h4 style={{ marginBottom: '10px', color: 'var(--p1-primary-dark)' }}>Background & Problem Statement</h4>
                <p>
                  As farms scale, the fragmentation of field data—soil health, moisture levels, and growth rates—leads to "blind farming" where decisions are made on intuition rather than spatiotemporal reality. Paper-based records and disconnected spreadsheets prevent farmers from correlating variables, resulting in resource waste and missed yield opportunities. Product 1 provides the unified digital backbone needed to synchronize complex agricultural operations.
                </p>
              </div>
            </div>
            <div className="product1-overview-image p1-fade-in-right">
              <div className="p1-capabilities-card">
                <h3>Key Features</h3>
                <ul>
                  <li><span className="p1-check">✓</span> Real-time Crop Health Monitoring</li>
                  <li><span className="p1-check">✓</span> Soil Analysis & Nutrient Mapping</li>
                  <li><span className="p1-check">✓</span> Smart Irrigation & Water Management</li>
                  <li><span className="p1-check">✓</span> Weather Forecast Integration & Alerts</li>
                  <li><span className="p1-check">✓</span> AI-Based Yield Prediction & Crop Advisory</li>
                  <li><span className="p1-check">✓</span> Pest & Disease Detection System</li>
                  <li><span className="p1-check">✓</span> GPS-Based Field Mapping & Zoning</li>
                  <li><span className="p1-check">✓</span> Variable Rate Input Application</li>
                  <li><span className="p1-check">✓</span> Farm Operations Dashboard</li>
                  <li><span className="p1-check">✓</span> Mobile Access for Farmers & Teams</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Problem & Solution ─────────────────────────────────────────── */}
      <section className="product1-section p1-section-dark-alt">
        <div className="p1-container">
          <div className="p1-text-center p1-mb-60 p1-fade-in">
            <span className="p1-section-badge">Problem & Solution</span>
            <h3 className="p1-section-title">Solving <span>Traditional Farming</span> Inefficiencies</h3>
          </div>
          <div className="p1-table-container p1-fade-in">
            <table className="p1-comparison-table">
              <thead>
                <tr>
                  <th>❗ Fragmentation & Guesswork</th>
                  <th>✅ Unified Precision Intelligence</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Guesswork in Planting:</strong> Inconsistent seed density based on general field averages rather than soil potential.</td>
                  <td><strong>Precision Seeding Maps:</strong> AI-driven prescription maps that vary seed rates based on sub-field soil productivity.</td>
                </tr>
                <tr>
                  <td><strong>Paper-Based Records:</strong> Lost data, manual entry errors, and inability to perform multi-year trend analysis.</td>
                  <td><strong>GIS-Linked Digital Ledger:</strong> Every field activity is automatically geofenced and logged for permanent, searchable records.</td>
                </tr>
                <tr>
                  <td><strong>Blanket Fertilization:</strong> Applying the same amount of inputs to every hectare, leading to leaching and waste.</td>
                  <td><strong>Variable Rate Prescriptions:</strong> High-res nutrient maps ensure fertilizer is applied only where the crop needs it.</td>
                </tr>
                <tr>
                  <td><strong>Delayed Disease Response:</strong> Detecting outbreaks only after they become visible to the human eye.</td>
                  <td><strong>Early-Warning Dashboards:</strong> Satellite and sensor data flag "hotspots" of stress before visible symptoms appear.</td>
                </tr>
                <tr>
                  <td><strong>Inconsistent Team Work:</strong> Lack of clarity on which fields have been sprayed or harvested in real-time.</td>
                  <td><strong>Live Ops Monitoring:</strong> Real-time tracking of machinery and teams across thousands of hectares.</td>
                </tr>
                <tr>
                  <td><strong>Hidden Operational Costs:</strong> Inability to see the true ROI of specific fields or crop varieties.</td>
                  <td><strong>Granular ROI Analytics:</strong> Automated cost-per-hectare and yield-per-input calculations.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── Core Functionalities ─────────────────────────────────────── */}
      <section className="product1-section">
        <div className="p1-container">
          <div className="p1-text-center p1-mb-60 p1-fade-in">
            <span className="p1-section-badge">Core Functionalities</span>
            <h3 className="p1-section-title">How We <span>Deliver Value</span></h3>
          </div>
          <div className="product1-features-grid">
            {[
              { icon: "🗺️", title: "1. GIS Field Mapping", desc: "Digital twin creation of farm landscapes with multi-layer overlays for soil, topography, and history." },
              { icon: "🧩", title: "2. Data Fusion Engine", desc: "Proprietary algorithms that combine satellite imagery, weather data, and machine sensor logs into one view." },
              { icon: "📝", title: "3. Prescription Generation", desc: "Automated VRA (Variable Rate Application) map creation compatible with all major machinery brands." },
              { icon: "🚜", title: "4. Fleet Management", desc: "Real-time telemetry and task dispatching for tractors, sprayers, and harvesters." },
              { icon: "📉", title: "5. Predictive ROI", desc: "Financial modeling that predicts harvest value and optimizes input budgets per hectare." }
            ].map((feature, idx) => (
              <div className="p1-feature-card p1-fade-in" key={idx}>
                <div className="p1-feature-icon">{feature.icon}</div>
                <h4>{feature.title}</h4>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How It Works (Step-by-Step) ─────────────────────────────────── */}
      <section className="product1-section p1-section-dark-alt">
        <div className="p1-container">
          <div className="p1-text-center p1-mb-60 p1-fade-in">
            <span className="p1-section-badge">Workflow</span>
            <h3 className="p1-section-title">The <span>Process</span> (Step-by-Step)</h3>
          </div>
          <div className="p1-support-grid">
            {[
              "1. Digitize field boundaries via GPS or high-resolution satellite tracing",
              "2. Ingest real-time soil moisture, nutrient data, and hyper-local weather feeds",
              "3. AI analyzes historical yield patterns against current environmental variables",
              "4. Generate and dispatch variable-rate prescription maps to connected machinery",
              "5. Monitor machinery progress and application accuracy via real-time telemetry",
              "6. Close the loop with post-harvest yield analysis and financial performance reporting"
            ].map((text, idx) => (
              <div className="p1-support-item p1-fade-in" key={idx}>
                <div className="p1-support-dot"></div>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Technical Architecture ─────────────────────────────────────── */}
      <section className="product1-section">
        <div className="p1-container">
          <div className="p1-vision-container p1-fade-in">
            <div className="p1-vision-header p1-text-center">
              <span className="p1-section-badge">Architecture</span>
              <h3 className="p1-section-title">Technical <span>Architecture</span></h3>
            </div>
            <div className="p1-vision-grid">
              {[
                { icon: "🛰️", title: "GIS & Remote Sensing", desc: "Multi-constellation satellite imagery and terrain modeling." },
                { icon: "📶", title: "Connectivity Layer", desc: "Unified API for John Deere, Case IH, and IoT protocols (MQTT)." },
                { icon: "🧠", title: "Analytic Engine", desc: "Python-based ML microservices for spatiotemporal modeling." },
                { icon: "📱", title: "Web/Mobile Portal", desc: "Offline-first React Native apps for remote field use." },
                { icon: "🔗", title: "OEM Integration", desc: "Bidirectional ISO-XML data exchange with farm machinery." }
              ].map((item, idx) => (
                <div className="p1-vision-item" key={idx}>
                  <div className="p1-vision-icon">{item.icon}</div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Technologies & Applications ─────────────────────────────────── */}
      <section className="product1-section p1-section-dark-alt">
        <div className="p1-container">
          <div className="product1-overview-grid">
            <div className="p1-fade-in-left">
              <span className="p1-section-badge">Technologies</span>
              <h3 className="p1-section-title">Technologies <span>Used</span></h3>
              <div className="p1-solutions-grid" style={{ gridTemplateColumns: '1fr' }}>
                {[
                  "PostgreSQL with PostGIS Extensions",
                  "Scikit-Learn & TensorFlow for Crop Models",
                  "AWS Greengrass for Edge-Computing",
                  "ISO-XML Machinery Protocol Adapters",
                  "Sentinel-2 & Landsat Data API",
                  "MQTT Broker for Real-Time IoT Sync",
                  "React/Redux Dashboard Architecture"
                ].map((tech, idx) => (
                  <div className="p1-solution-item" key={idx} style={{ padding: '15px 24px' }}>
                    <div className="p1-sol-icon">🛠️</div>
                    <p><strong>{tech}</strong></p>
                  </div>
                ))}
              </div>
            </div>
            <div className="p1-fade-in-right">
              <span className="p1-section-badge">Applications</span>
              <h3 className="p1-section-title">Real-World <span>Applications</span></h3>
              <div className="p1-solutions-grid" style={{ gridTemplateColumns: '1fr' }}>
                {[
                  "Large-scale row crop optimization (Corn/Soy)",
                  "Precision horticulture & fruit orchards",
                  "Corporate farm asset management",
                  "Agricultural research & trial monitoring",
                  "Cooperative-scale fleet coordination",
                  "Carbon credit baseline verification"
                ].map((app, idx) => (
                  <div className="p1-solution-item" key={idx} style={{ padding: '15px 24px' }}>
                    <div className="p1-sol-icon">🌍</div>
                    <p><strong>{app}</strong></p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Benefits ─────────────────────────────────────── */}
      <section className="product1-section">
        <div className="p1-container">
          <div className="p1-text-center p1-mb-60 p1-fade-in">
            <span className="p1-section-badge">Benefits</span>
            <h3 className="p1-section-title">The <span>Precision</span> Advantage</h3>
          </div>
          <div className="p1-benefits-grid">
            {[
              { icon: "📈", title: "15-20% Yield Increase", desc: "Optimize every square meter for maximum productivity." },
              { icon: "📉", title: "Reduced Input Waste", desc: "Lower spending on seeds, fertilizers, and fuel." },
              { icon: "📑", title: "Compliance Ready", desc: "Automated audit trails for sustainability and safety." },
              { icon: "🤝", title: "Team Coordination", desc: "Align field crews and office staff with one source of truth." },
              { icon: "💎", title: "Asset Value", desc: "Maintain soil health and farm value through data tracking." }
            ].map((benefit, idx) => (
              <div className="p1-benefit-card p1-fade-in" key={idx}>
                <div className="p1-benefit-icon">{benefit.icon}</div>
                <h4>{benefit.title}</h4>
                <p>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Challenges & Future Scope ───────────────────────────────────── */}
      <section className="product1-section p1-section-dark-alt">
        <div className="p1-container">
          <div className="product1-overview-grid">
            <div className="p1-fade-in-left">
              <span className="p1-section-badge">Challenges</span>
              <h3 className="p1-section-title">Challenges & <span>Limitations</span></h3>
              <ul className="p1-capabilities-card" style={{ listStyle: 'none', padding: '30px' }}>
                {[
                  "OEM data silo interoperability hurdles",
                  "Rural LTE/5G connectivity limitations",
                  "High upfront hardware/sensor costs",
                  "Technical learning curve for legacy staff",
                  "Complexity of multi-layer data correlation"
                ].map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '12px', display: 'flex', gap: '10px' }}>
                    <span style={{ color: '#d32f2f' }}>⚠</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p1-fade-in-right">
              <span className="p1-section-badge">Future Scope</span>
              <h3 className="p1-section-title">The <span>Future</span> of Precision</h3>
              <ul className="p1-capabilities-card" style={{ listStyle: 'none', padding: '30px' }}>
                {[
                  "Full autonomous fleet orchestration AI",
                  "Blockchain-verified carbon credit generation",
                  "Quantum-enhanced weather risk simulation",
                  "Holographic 3D field visualization apps",
                  "Self-healing autonomous sensor networks"
                ].map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '12px', display: 'flex', gap: '10px' }}>
                    <span style={{ color: 'var(--p1-primary)' }}>🚀</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Industry Impact ─────────────────────────────────── */}
      <section className="product1-section">
        <div className="p1-container">
          <div className="p1-compliance-card p1-fade-in">
            <h2>Industry Impact</h2>
            <div className="p1-compliance-grid">
              {[
                "📊 Setting the standard for 'Farming 4.0'",
                "🌱 Driving global food security transparency",
                "📈 Validating carbon sequestration at scale",
                "💰 Unlocking new agricultural credit models"
              ].map((item, idx) => (
                <div className="p1-compliance-item" key={idx}>{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Conclusion & Final CTA ────────────────────────────────────────── */}
      <section className="p1-final-cta p1-section-dark-alt">
        <div className="p1-container p1-text-center p1-fade-in">
          <span className="p1-section-badge">Conclusion</span>
          <h2>Building a <span>Precision-First</span> Ag-Economy</h2>
          <p style={{ marginBottom: '20px' }}>
            Precision Farming & Crop Management Software is not just a tool; it is the foundation of modern agribusiness. By merging GIS intelligence, ML-driven prescriptions, and real-time fleet telemetry, it enables the transition from broad-acre guesswork to square-meter precision, ensuring a sustainable and profitable future for global food systems.
          </p>
          <p style={{ marginBottom: '40px' }}>
            This solution is the critical step toward building a connected, efficient, and future-ready agricultural ecosystem.
          </p>
            
        </div>
      </section>

      <footer className="p1-footer">
        <div className="p1-container">
          <p>&copy; 2026 Techbrain Networks. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Product1;
