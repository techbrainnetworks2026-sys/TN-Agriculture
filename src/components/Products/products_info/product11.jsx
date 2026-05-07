import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './product11.css';

const Product11 = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('p11-visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.p11-fade-in, .p11-fade-in-left, .p11-fade-in-right').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="product11-page">
      {/* ─── Navigation ─────────────────────────── */}
      <nav className="product11-nav">
        <div className="p11-container">
          <button onClick={() => navigate('/#products')} className="product11-back-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Home
          </button>
        </div>
      </nav>

      {/* ─── Hero Section ─────────────────────────────────────────── */}
      <section className="product11-hero" style={{ backgroundImage: `url(/images/product_11.png)` }}>
        <div className="p11-container">
          <div className="product11-hero-content p11-fade-in">
            <span className="product11-hero-badge">ML Prediction</span>
            <h1>Crop Yield Prediction & <br /><span>Optimization</span></h1>
            <p className="product11-hero-description">
              Machine learning models that analyze soil, weather, and satellite data to predict harvest yields with high accuracy and recommend optimization strategies.
            </p>
             
          </div>
        </div>
      </section>

      {/* ─── Introduction & Background ─────────────────────────────────────── */}
      <section className="product11-section">
        <div className="p11-container">
          <div className="product11-overview-grid">
            <div className="product11-overview-text p11-fade-in-left">
              <span className="p11-section-badge">Introduction</span>
              <h3 className="product11-section-title">Maximizing <span>Harvest Potential</span></h3>
              <p>
                Crop Yield Prediction & Optimization is an AI-driven agricultural platform that leverages spatiotemporal data to forecast future harvest volumes and quality months before the combines roll.
              </p>
              <p>
                It helps agribusinesses eliminate the uncertainty of supply chains by providing highly accurate yield estimates based on real-time environmental variables.
              </p>
              <div className="product11-highlight-box">
                <h4 style={{ marginBottom: '10px', color: 'var(--p11-primary-dark)' }}>Background & Problem Statement</h4>
                <p>
                  Agricultural markets are plagued by price volatility caused by unpredictable harvest yields. Farmers often face "harvest surprises" where actual yields deviate significantly from historical averages, leading to contract penalties or missed revenue. Product 11 uses multi-layer data fusion—combining satellite NDVI, soil moisture probes, and historical weather patterns—to provide a reliable digital crystal ball for harvest planning.
                </p>
              </div>
            </div>
            <div className="product11-overview-image p11-fade-in-right">
              <div className="p11-capabilities-card">
                <h3>Key Features</h3>
                <ul>
                  <li><span className="p11-check">✓</span> Satellite NDVI Trend Analysis</li>
                  <li><span className="p11-check">✓</span> Multi-Variate Yield Models</li>
                  <li><span className="p11-check">✓</span> Heat-Stress Impact Prediction</li>
                  <li><span className="p11-check">✓</span> Harvest Window Optimization</li>
                  <li><span className="p11-check">✓</span> Nutrient Deficit Simulation</li>
                  <li><span className="p11-check">✓</span> Regional Benchmarking</li>
                  <li><span className="p11-check">✓</span> Contract Commitment Radar</li>
                  <li><span className="p11-check">✓</span> Variable Rate Seeding Advice</li>
                  <li><span className="p11-check">✓</span> Real-Time Stress Detection</li>
                  <li><span className="p11-check">✓</span> Post-Harvest ROI Analysis</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Problem & Solution ─────────────────────────────────────────── */}
      <section className="product11-section p11-section-dark-alt">
        <div className="p11-container">
          <div className="p11-text-center p11-mb-60 p11-fade-in">
            <span className="p11-section-badge">Problem & Solution</span>
            <h3 className="p11-section-title">Solving <span>Traditional Farming</span> Inefficiencies</h3>
          </div>
          <div className="p11-table-container p11-fade-in">
            <table className="p11-comparison-table">
              <thead>
                <tr>
                  <th>❗ Traditional Yield Estimation</th>
                  <th>✅ AI-Driven Yield Optimization</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Visual Scouting:</strong> Relying on human observation, which is subjective and limited to field edges.</td>
                  <td><strong>Satellite Vision:</strong> 100% field coverage using multispectral data to identify vigor patterns.</td>
                </tr>
                <tr>
                  <td><strong>Historical Averaging:</strong> Assuming this year will match the last 5 years regardless of climate.</td>
                  <td><strong>Spatiotemporal Models:</strong> Correlation of current micro-climate with historical anomalies for precision.</td>
                </tr>
                <tr>
                  <td><strong>Reactive Management:</strong> Identifying yield-limiting stress only after physical damage occurs.</td>
                  <td><strong>Predictive Simulation:</strong> Flagging potential yield loss weeks before physical symptoms appear.</td>
                </tr>
                <tr>
                  <td><strong>Fixed Input Rates:</strong> Applying the same fertilizer across the field regardless of growth.</td>
                  <td><strong>In-Season Optimization:</strong> Adjusting top-dress applications based on real-time biomass demand.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── Core Functionalities ─────────────────────────────────────── */}
      <section className="product11-section">
        <div className="p11-container">
          <div className="p11-text-center p11-mb-60 p11-fade-in">
            <span className="p11-section-badge">Core Functionalities</span>
            <h3 className="p11-section-title">How We <span>Predict Success</span></h3>
          </div>
          <div className="product11-features-grid">
            {[
              { icon: "🛰️", title: "1. Spectral Engine", desc: "Analyzing multispectral satellite data to track crop vigor and chlorophyll levels." },
              { icon: "🧪", title: "2. Soil Insight", desc: "Integrating real-time nutrient and moisture data to model root-zone potential." },
              { icon: "🧠", title: "3. ML Forecasting", desc: "Proprietary algorithms that correlate environmental variables with final harvest weight." },
              { icon: "📅", title: "4. Timing Advisor", desc: "Identifying the precise window for harvest to maximize sugar content or dry matter." },
              { icon: "💰", title: "5. Profit Modeling", desc: "Simulating different input strategies to find the maximum financial return per acre." }
            ].map((feature, idx) => (
              <div className="p11-feature-card p11-fade-in" key={idx}>
                <div className="p11-feature-icon">{feature.icon}</div>
                <h4>{feature.title}</h4>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Workflow ─────────────────────────────────────── */}
      <section className="product11-section p11-section-dark-alt">
        <div className="p11-container">
          <div className="p11-text-center p11-mb-60 p11-fade-in">
            <span className="p11-section-badge">Workflow</span>
            <h3 className="p11-section-title">The <span>Optimization</span> Process</h3>
          </div>
          <div className="p11-support-grid">
            {[
              "1. Field coordinates are onboarded for satellite tasking and historical data pull",
              "2. Soil probes and weather stations provide real-time ground-truth data",
              "3. AI Engine processes multispectral NDVI trends to calculate biomass accumulation",
              "4. Predictive models run daily simulations to forecast final yield and quality",
              "5. System generates optimization alerts (e.g., targeted fertilization or irrigation)",
              "6. Final harvest data is ingested to further refine model accuracy for next season"
            ].map((text, idx) => (
              <div className="p11-support-item p11-fade-in" key={idx}>
                <div className="p11-support-dot"></div>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Technical Architecture ─────────────────────────────────────── */}
      <section className="product11-section">
        <div className="p11-container">
          <div className="p11-vision-container p11-fade-in">
            <div className="p11-vision-header p11-text-center">
              <span className="p11-section-badge">Architecture</span>
              <h3 className="p11-section-title">Technical <span>Architecture</span></h3>
            </div>
            <div className="p11-vision-grid">
              {[
                { icon: "🛰️", title: "RS Engine", desc: "Remote sensing pipeline for processing Sentinel-2 and Planet imagery." },
                { icon: "📶", title: "Telemetry Hub", desc: "Cloud link for in-field IoT soil and climate sensors." },
                { icon: "🧠", title: "ML Core", desc: "Ensemble learning models (XGBoost, RNN) for yield time-series." },
                { icon: "💾", title: "Spatial Lake", desc: "Geospatial database for multi-layer field data storage." },
                { icon: "📱", title: "Farmer Portal", desc: "Decision support dashboard for real-time operation optimization." }
              ].map((item, idx) => (
                <div className="p11-vision-item" key={idx}>
                  <div className="p11-vision-icon">{item.icon}</div>
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
      <section className="product11-section p11-section-dark-alt">
        <div className="p11-container">
          <div className="product11-overview-grid">
            <div className="p11-fade-in-left">
              <span className="p11-section-badge">Technologies</span>
              <h3 className="product11-section-title">Technologies <span>Used</span></h3>
              <div className="p11-solutions-grid" style={{ gridTemplateColumns: '1fr' }}>
                {[
                  "Ensemble Learning (Random Forest, XGBoost)",
                  "Multi-Spectral Satellite Data Processing",
                  "In-Field IoT Sensor Integration",
                  "Deep Learning for Pattern Recognition",
                  "Geospatial Information Systems (GIS)",
                  "Big Data Cloud Infrastructure",
                  "Predictive Analytics & ROI Modeling"
                ].map((tech, idx) => (
                  <div className="p11-solution-item" key={idx} style={{ padding: '15px 24px' }}>
                    <div className="p11-sol-icon">🛠️</div>
                    <p><strong>{tech}</strong></p>
                  </div>
                ))}
              </div>
            </div>
            <div className="p11-fade-in-right">
              <span className="p11-section-badge">Applications</span>
              <h3 className="product11-section-title">Real-World <span>Applications</span></h3>
              <div className="p11-solutions-grid" style={{ gridTemplateColumns: '1fr' }}>
                {[
                  "Global harvest volume forecasting for grain traders",
                  "Precision nitrogen management for large farms",
                  "Risk assessment for agricultural insurance",
                  "Optimization of supply chain logistics timing",
                  "Predictive modeling for food security policy",
                  "Maximizing ROI for high-value specialty crops"
                ].map((app, idx) => (
                  <div className="p11-solution-item" key={idx} style={{ padding: '15px 24px' }}>
                    <div className="p11-sol-icon">🌍</div>
                    <p><strong>{app}</strong></p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Benefits ─────────────────────────────────────── */}
      <section className="product11-section">
        <div className="p11-container">
          <div className="p11-text-center p11-mb-60 p11-fade-in">
            <span className="p11-section-badge">Benefits</span>
            <h3 className="p11-section-title">The <span>Precision</span> Advantage</h3>
          </div>
          <div className="p11-benefits-grid">
            {[
              { icon: "📈", title: "15% Yield Increase", desc: "Maximize production through data-driven in-season adjustments." },
              { icon: "📉", title: "Lower Risk", desc: "Identify and mitigate crop stress weeks before it becomes fatal." },
              { icon: "💎", title: "Contract Security", desc: "Commit to harvest contracts with 95%+ prediction accuracy." },
              { icon: "⚡", title: "ROI Visibility", desc: "Simulate financial outcomes before applying expensive inputs." },
              { icon: "🌍", title: "Sustainability", desc: "Reduce input waste by matching application to plant demand." }
            ].map((benefit, idx) => (
              <div className="p11-benefit-card p11-fade-in" key={idx}>
                <div className="p11-benefit-icon">{benefit.icon}</div>
                <h4>{benefit.title}</h4>
                <p>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Challenges & Future Scope ───────────────────────────────────── */}
      <section className="product11-section p11-section-dark-alt">
        <div className="p11-container">
          <div className="product11-overview-grid">
            <div className="p11-fade-in-left">
              <span className="p11-section-badge">Challenges</span>
              <h3 className="product11-section-title">Challenges & <span>Limitations</span></h3>
              <ul className="p11-capabilities-card" style={{ listStyle: 'none', padding: '30px' }}>
                {[
                  "Complexity of multi-sensor data fusion",
                  "Varying accuracy in extremely cloudy regions",
                  "Resistance to changing traditional farming schedules",
                  "Ensuring 100% data integrity for insurance models",
                  "High computational cost for real-time global modeling"
                ].map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '12px', display: 'flex', gap: '10px' }}>
                    <span style={{ color: '#d32f2f' }}>⚠</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p11-fade-in-right">
              <span className="p11-section-badge">Future Scope</span>
              <h3 className="product11-section-title">The <span>Future</span> of Yield</h3>
              <ul className="p11-capabilities-card" style={{ listStyle: 'none', padding: '30px' }}>
                {[
                  "Hyper-local plant-level yield optimization",
                  "Autonomous robotic in-season input adjustments",
                  "Quantum-computing powered climate simulations",
                  "Universal digital twin for every hectare of arable land",
                  "AI-driven automated carbon sequestration verification"
                ].map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '12px', display: 'flex', gap: '10px' }}>
                    <span style={{ color: 'var(--p11-primary)' }}>🚀</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Industry Impact ─────────────────────────────────── */}
      <section className="product11-section">
        <div className="p11-container">
          <div className="p11-compliance-card p11-fade-in">
            <h2>Industry Impact</h2>
            <div className="p11-compliance-grid">
              {[
                "📈 Revolutionizing global food supply chain predictability",
                "🏗️ Building the data foundation for agricultural finance",
                "🌍 Enhancing global food security through foresight",
                "✨ Empowering producers with the power of predictive AI"
              ].map((item, idx) => (
                <div className="p11-compliance-item" key={idx}>{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Conclusion & Final CTA ────────────────────────────────────────── */}
      <section className="p11-final-cta p11-section-dark-alt">
        <div className="p11-container p11-text-center p11-fade-in">
          <span className="p11-section-badge">Conclusion</span>
          <h2>The <span>Predictive</span> Future of Agriculture</h2>
          <p style={{ marginBottom: '20px' }}>
            Crop Yield Prediction & Optimization is transforming agriculture from a game of chance into a high-precision industrial science. By merging satellite data, IoT sensors, and advanced ML, we enable agribusinesses to see into the future and optimize every decision.
          </p>
          <p style={{ marginBottom: '40px' }}>
            This solution is the critical step toward building a truly transparent, resilient, and future-ready agricultural ecosystem through predictive intelligence.
          </p>
           
        </div>
      </section>

      <footer className="p11-footer">
        <div className="p11-container">
          <p>&copy; 2026 Techbrain Networks. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Product11;
