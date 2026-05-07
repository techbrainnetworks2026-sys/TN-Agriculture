import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './product16.css';

const Product16 = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('p16-visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.p16-fade-in, .p16-fade-in-left, .p16-fade-in-right').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="product16-page">
      {/* ─── Navigation ─────────────────────────── */}
      <nav className="product16-nav">
        <div className="p16-container">
          <button onClick={() => navigate('/#products')} className="product16-back-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Home
          </button>
        </div>
      </nav>

      {/* ─── Hero Section ─────────────────────────────────────────── */}
      <section className="product16-hero" style={{ backgroundImage: `url(/images/product_16.png)` }}>
        <div className="p16-container">
          <div className="product16-hero-content p16-fade-in">
            <span className="product16-hero-badge">Blue Tech</span>
            <h1>Aquaculture Management & <br /><span>Monitoring</span></h1>
            <p className="product16-hero-description">
              Specialized IoT platform for fish and shrimp farming with real-time water quality sensing, automated feeding, biomass estimation, and disease detection.
            </p>
             
          </div>
        </div>
      </section>

      {/* ─── Introduction & Background ─────────────────────────────────────── */}
      <section className="product16-section">
        <div className="p16-container">
          <div className="product16-overview-grid">
            <div className="product16-overview-text p16-fade-in-left">
              <span className="p16-section-badge">Introduction</span>
              <h3 className="product16-section-title">Precision <span>Underwater Farming</span></h3>
              <p>
                Aquaculture Management & Monitoring is an industrial IoT solution designed for the unique challenges of aquatic environments, ensuring optimal water chemistry and growth rates.
              </p>
              <p>
                It provides 24/7 visibility into dissolved oxygen, pH, salinity, and temperature, while using computer vision to monitor stock health and biomass.
              </p>
              <div className="product16-highlight-box">
                <h4 style={{ marginBottom: '10px', color: 'var(--p16-primary-dark)' }}>Background & Problem Statement</h4>
                <p>
                  Aquaculture is the fastest-growing food sector, yet it faces massive risks from sudden water quality shifts and disease outbreaks. Traditional manual sampling is infrequent and misses critical spikes. Product 16 automates the monitoring and intervention cycle, reducing fish mortality and feed waste while maximizing harvest density and quality.
                </p>
              </div>
            </div>
            <div className="product16-overview-image p16-fade-in-right">
              <div className="p16-capabilities-card">
                <h3>Key Features</h3>
                <ul>
                  <li><span className="p16-check">✓</span> Real-Time Water Quality Mesh</li>
                  <li><span className="p16-check">✓</span> Automated Feed Dispersion</li>
                  <li><span className="p16-check">✓</span> AI Biomass Estimation</li>
                  <li><span className="p16-check">✓</span> Dissolved Oxygen Alerts</li>
                  <li><span className="p16-check">✓</span> Underwater Health Vision</li>
                  <li><span className="p16-check">✓</span> Pathogen Risk Modeling</li>
                  <li><span className="p16-check">✓</span> Aeration System Automation</li>
                  <li><span className="p16-check">✓</span> Growth Cycle Analytics</li>
                  <li><span className="p16-check">✓</span> Multi-Site Fleet Dashboard</li>
                  <li><span className="p16-check">✓</span> Harvest Weight Forecasting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Problem & Solution ─────────────────────────────────────────── */}
      <section className="product16-section p16-section-dark-alt">
        <div className="p16-container">
          <div className="p16-text-center p16-mb-60 p16-fade-in">
            <span className="p16-section-badge">Problem & Solution</span>
            <h3 className="p16-section-title">Solving <span>Marine</span> Challenges</h3>
          </div>
          <div className="p16-table-container p16-fade-in">
            <table className="p16-comparison-table">
              <thead>
                <tr>
                  <th>❗ Traditional Pond Management</th>
                  <th>✅ Digital Aquaculture Core</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Invisible Oxygen Crashes:</strong> Night-time oxygen depletion leading to massive stock mortality.</td>
                  <td><strong>DO-Predict AI:</strong> Real-time monitoring with automated aeration triggering and mobile alerts.</td>
                </tr>
                <tr>
                  <td><strong>Over-Feeding Waste:</strong> Excess feed polluting the pond and increasing costs without growth gain.</td>
                  <td><strong>Acoustic Feeding:</strong> Listening to fish feeding activity to deliver the exact amount of feed needed.</td>
                </tr>
                <tr>
                  <td><strong>Subjective Biomass:</strong> Guessing harvest weights and density leading to sub-optimal sales.</td>
                  <td><strong>Stereo-Vision Mapping:</strong> Non-invasive 3D imaging for 98% accurate biomass estimation.</td>
                </tr>
                <tr>
                  <td><strong>Infectious Pathogens:</strong> Rapid spread of sea lice or shrimp viruses due to lack of detection.</td>
                  <td><strong>Vision Diagnostics:</strong> Computer vision identifying early behavioral signs of illness in the stock.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── Core Functionalities ─────────────────────────────────────── */}
      <section className="product16-section">
        <div className="p16-container">
          <div className="p16-text-center p16-mb-60 p16-fade-in">
            <span className="p16-section-badge">Core Functionalities</span>
            <h3 className="p16-section-title">How We <span>Sustain</span></h3>
          </div>
          <div className="product16-features-grid">
            {[
              { icon: "🧪", title: "1. Hydro-Sensing", desc: "Industrial sensors for continuous dissolved oxygen, pH, and salinity logging." },
              { icon: "👁️", title: "2. Underwater Vision", desc: "Non-invasive AI cameras for biomass tracking and health monitoring." },
              { icon: "🍱", title: "3. Auto-Feeders", desc: "Precision dispersion units synced with acoustic activity and water temp." },
              { icon: "🌪️", title: "4. Aeration Link", desc: "Intelligent control of bubblers and oxygen injectors to maintain levels." },
              { icon: "📈", title: "5. Growth Analytics", desc: "Predictive dashboards forecasting harvest timing and market sizing." }
            ].map((feature, idx) => (
              <div className="p16-feature-card p16-fade-in" key={idx}>
                <div className="p16-feature-icon">{feature.icon}</div>
                <h4>{feature.title}</h4>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Workflow ─────────────────────────────────────── */}
      <section className="product16-section p16-section-dark-alt">
        <div className="p16-container">
          <div className="p16-text-center p16-mb-60 p16-fade-in">
            <span className="p16-section-badge">Workflow</span>
            <h3 className="p16-section-title">The <span>Blue</span> Economy Cycle</h3>
          </div>
          <div className="p16-support-grid">
            {[
              "1. Submersible IoT sensor arrays are deployed in ponds, tanks, or sea-cages",
              "2. Real-time water chemistry data is transmitted to the cloud via cellular or satellite",
              "3. AI models analyze dissolved oxygen trends and feeding behaviors",
              "4. Automated feeders and aerators are modulated to maintain optimal growth conditions",
              "5. Computer vision identifies stock biomass and health anomalies daily",
              "6. System generates precise harvest forecasts and feed efficiency reports"
            ].map((text, idx) => (
              <div className="p16-support-item p16-fade-in" key={idx}>
                <div className="p16-support-dot"></div>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Technical Architecture ─────────────────────────────────────── */}
      <section className="product16-section">
        <div className="p16-container">
          <div className="p16-vision-container p16-fade-in">
            <div className="p16-vision-header p16-text-center">
              <span className="p16-section-badge">Architecture</span>
              <h3 className="p16-section-title">Technical <span>Architecture</span></h3>
            </div>
            <div className="p16-vision-grid">
              {[
                { icon: "📦", title: "IP68 IoT Nodes", desc: "Marine-grade hardware designed for long-term submersion." },
                { icon: "📡", title: "Wide-Area Fabric", desc: "LoRaWAN and NB-IoT connectivity for remote coastal sites." },
                { icon: "🧠", title: "Acoustic AI", desc: "Edge processing for analyzing underwater feeding soundscapes." },
                { icon: "💾", title: "Spatial Ledger", desc: "Recording of water quality and treatment history for traceability." },
                { icon: "📊", title: "Fleet Ops", desc: "Multi-site dashboard for global aquaculture enterprise management." }
              ].map((item, idx) => (
                <div className="p16-vision-item" key={idx}>
                  <div className="p16-vision-icon">{item.icon}</div>
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
      <section className="product16-section p16-section-dark-alt">
        <div className="p16-container">
          <div className="product16-overview-grid">
            <div className="p16-fade-in-left">
              <span className="p16-section-badge">Technologies</span>
              <h3 className="product16-section-title">Technologies <span>Used</span></h3>
              <div className="p16-solutions-grid" style={{ gridTemplateColumns: '1fr' }}>
                {[
                  "IP68 Submersible IoT Multi-Sensors",
                  "Deep Learning Computer Vision for Biomass",
                  "Acoustic Feeding Activity Recognition AI",
                  "MQTT & LoRaWAN Coastal Telemetry",
                  "Automated Aeration & Feeder Actuators",
                  "Predictive Pathogen Risk Modeling",
                  "Cloud-Native Aquaculture Dashboard"
                ].map((tech, idx) => (
                  <div className="p16-solution-item" key={idx} style={{ padding: '15px 24px' }}>
                    <div className="p16-sol-icon">🛠️</div>
                    <p><strong>{tech}</strong></p>
                  </div>
                ))}
              </div>
            </div>
            <div className="p16-fade-in-right">
              <span className="p16-section-badge">Applications</span>
              <h3 className="product16-section-title">Real-World <span>Applications</span></h3>
              <div className="p16-solutions-grid" style={{ gridTemplateColumns: '1fr' }}>
                {[
                  "Industrial-scale shrimp pond monitoring",
                  "Offshore salmon sea-cage management",
                  "Recirculating Aquaculture Systems (RAS)",
                  "Freshwater tilapia and catfish farming",
                  "High-value ornamental fish production",
                  "Marine research and hatchery monitoring"
                ].map((app, idx) => (
                  <div className="p16-solution-item" key={idx} style={{ padding: '15px 24px' }}>
                    <div className="p16-sol-icon">🌍</div>
                    <p><strong>{app}</strong></p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Benefits ─────────────────────────────────────── */}
      <section className="product16-section">
        <div className="p16-container">
          <div className="p16-text-center p16-mb-60 p16-fade-in">
            <span className="p16-section-badge">Benefits</span>
            <h3 className="p16-section-title">The <span>Precision</span> Advantage</h3>
          </div>
          <div className="p16-benefits-grid">
            {[
              { icon: "📉", title: "Lower Mortality", desc: "Reduce fish and shrimp losses by up to 50% via early detection." },
              { icon: "🍱", title: "Feed Savings", desc: "Optimize FCR and save 20% on your largest operational cost." },
              { icon: "📈", title: "Higher Density", desc: "Safely increase stocking densities through precision oxygenation." },
              { icon: "💎", title: "Quality Control", desc: "Achieve consistent flesh quality and size uniformity across batches." },
              { icon: "🌍", title: "Eco-Compliance", desc: "Minimize environmental impact by preventing feed and waste runoff." }
            ].map((benefit, idx) => (
              <div className="p16-benefit-card p16-fade-in" key={idx}>
                <div className="p16-benefit-icon">{benefit.icon}</div>
                <h4>{benefit.title}</h4>
                <p>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Challenges & Future Scope ───────────────────────────────────── */}
      <section className="product16-section p16-section-dark-alt">
        <div className="p16-container">
          <div className="product16-overview-grid">
            <div className="p16-fade-in-left">
              <span className="p16-section-badge">Challenges</span>
              <h3 className="product16-section-title">Challenges & <span>Limitations</span></h3>
              <ul className="p16-capabilities-card" style={{ listStyle: 'none', padding: '30px' }}>
                {[
                  "Managing bio-fouling on submerged sensors",
                  "Hardware durability in high-salinity environments",
                  "Connectivity gaps in remote offshore sea-cages",
                  "Interpreting complex multi-species behavioral data",
                  "Ensuring system uptime during extreme marine storms"
                ].map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '12px', display: 'flex', gap: '10px' }}>
                    <span style={{ color: '#d32f2f' }}>⚠</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p16-fade-in-right">
              <span className="p16-section-badge">Future Scope</span>
              <h3 className="product16-section-title">The <span>Future</span> of Blue Tech</h3>
              <ul className="p16-capabilities-card" style={{ listStyle: 'none', padding: '30px' }}>
                {[
                  "Fully autonomous underwater health robots",
                  "Predictive global marine disease heatmaps",
                  "AI-driven automated selective harvesting",
                  "Closed-loop zero-emission RAS ecosystems",
                  "Satellite-linked autonomous offshore farm swarms"
                ].map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '12px', display: 'flex', gap: '10px' }}>
                    <span style={{ color: 'var(--p16-primary)' }}>🚀</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Industry Impact ─────────────────────────────────── */}
      <section className="product16-section">
        <div className="p16-container">
          <div className="p16-compliance-card p16-fade-in">
            <h2>Industry Impact</h2>
            <div className="p16-compliance-grid">
              {[
                "🌍 Securing global protein supply through sustainable aquaculture",
                "📈 Revolutionizing the economics of marine-based production",
                "🏗️ Setting the data benchmark for underwater husbandry",
                "✨ Empowering producers with absolute hydro-intelligence"
              ].map((item, idx) => (
                <div className="p16-compliance-item" key={idx}>{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Conclusion & Final CTA ────────────────────────────────────────── */}
      <section className="p16-final-cta p16-section-dark-alt">
        <div className="p16-container p16-text-center p16-fade-in">
          <span className="p16-section-badge">Conclusion</span>
          <h2>The <span>Digital Frontier</span> of Marine Agriculture</h2>
          <p style={{ marginBottom: '20px' }}>
            Aquaculture Management & Monitoring is transforming marine production from a high-risk venture into a precise, industrial science. By merging hydro-sensing with advanced AI vision, we enable producers to achieve unprecedented levels of stock safety and operational ROI.
          </p>
          <p style={{ marginBottom: '40px' }}>
            This solution is the critical step toward building a truly resilient, eco-conscious, and future-ready blue economy through data-driven intelligence.
          </p>
           
        </div>
      </section>

      <footer className="p16-footer">
        <div className="p16-container">
          <p>&copy; 2026 Techbrain Networks. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Product16;
