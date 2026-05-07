import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './product12.css';

const Product12 = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('p12-visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.p12-fade-in, .p12-fade-in-left, .p12-fade-in-right').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="product12-page">
      {/* ─── Navigation ─────────────────────────── */}
      <nav className="product12-nav">
        <div className="p12-container">
          <button onClick={() => navigate('/#products')} className="product12-back-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Home
          </button>
        </div>
      </nav>

      {/* ─── Hero Section ─────────────────────────────────────────── */}
      <section className="product12-hero" style={{ backgroundImage: `url(/images/product_12.png)` }}>
        <div className="p12-container">
          <div className="product12-hero-content p12-fade-in">
            <span className="product12-hero-badge">Weather AI</span>
            <h1>Agricultural Weather <br /><span>Forecasting</span></h1>
            <p className="product12-hero-description">
              Hyper-local agricultural weather intelligence with micro-climate analysis, frost alerts, rainfall prediction, and planting window recommendations.
            </p>
             
          </div>
        </div>
      </section>

      {/* ─── Introduction & Background ─────────────────────────────────────── */}
      <section className="product12-section">
        <div className="p12-container">
          <div className="product12-overview-grid">
            <div className="product12-overview-text p12-fade-in-left">
              <span className="p12-section-badge">Introduction</span>
              <h3 className="product12-section-title">Navigating <span>Environmental Uncertainty</span></h3>
              <p>
                Agricultural Weather Forecasting is a next-generation agricultural solution that uses hyper-local weather stations, historical climate archives, and predictive AI to transform meteorological uncertainty into strategic growth windows.
              </p>
              <p>
                It helps farmers optimize their planting, spraying, and harvest calendars based on precise micro-climate predictions rather than regional averages.
              </p>
              <div className="product12-highlight-box">
                <h4 style={{ marginBottom: '10px', color: 'var(--p12-primary-dark)' }}>Background & Problem Statement</h4>
                <p>
                  Climate change has rendered traditional 'planting by the calendar' obsolete. Unexpected frost, sudden heatwaves, and erratic rainfall patterns now account for 80% of annual crop losses. Product 12 solves this by delivering real-time, field-specific climate intelligence, allowing producers to proactively protect crops from extreme events and choose the best varieties for changing local conditions.
                </p>
              </div>
            </div>
            <div className="product12-overview-image p12-fade-in-right">
              <div className="p12-capabilities-card">
                <h3>Key Features</h3>
                <ul>
                  <li><span className="p12-check">✓</span> Hyper-Local Weather AI</li>
                  <li><span className="p12-check">✓</span> Frost & Heatwave Alerts</li>
                  <li><span className="p12-check">✓</span> GDD (Growing Degree Day) Logs</li>
                  <li><span className="p12-check">✓</span> Soil Temperature Modeling</li>
                  <li><span className="p12-check">✓</span> Disease-Weather Correlation</li>
                  <li><span className="p12-check">✓</span> Optimal Spray Window AI</li>
                  <li><span className="p12-check">✓</span> Historical Climate Trend Vault</li>
                  <li><span className="p12-check">✓</span> Rainfall Intensity Analysis</li>
                  <li><span className="p12-check">✓</span> Adaptive Variety Selection</li>
                  <li><span className="p12-check">✓</span> Multi-Node Field Telemetry</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Problem & Solution ─────────────────────────────────────────── */}
      <section className="product12-section p12-section-dark-alt">
        <div className="p12-container">
          <div className="p12-text-center p12-mb-60 p12-fade-in">
            <span className="p12-section-badge">Problem & Solution</span>
            <h3 className="p12-section-title">Solving <span>Traditional Weather</span> Risks</h3>
          </div>
          <div className="p12-table-container p12-fade-in">
            <table className="p12-comparison-table">
              <thead>
                <tr>
                  <th>❗ Traditional Weather Risks</th>
                  <th>✅ AI Agro-Climate Advisory</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Regional Averages:</strong> Relying on weather reports from airports or cities 30+ miles from the farm.</td>
                  <td><strong>Hyper-Local Grid:</strong> 1km x 1km resolution forecasting specific to your exact field coordinates.</td>
                </tr>
                <tr>
                  <td><strong>Missed Spray Windows:</strong> Applying chemicals during high wind or before rain, wasting inputs.</td>
                  <td><strong>Spray-Ops AI:</strong> Hour-by-hour advisory for wind, delta-T, and rainfall probability to ensure efficacy.</td>
                </tr>
                <tr>
                  <td><strong>Frost/Heat Shock:</strong> Losing high-value crops to sudden temperature drops without warning.</td>
                  <td><strong>Early Warning Mesh:</strong> Real-time alerts sent to mobile devices when critical thresholds are approached.</td>
                </tr>
                <tr>
                  <td><strong>Fixed Planting Dates:</strong> Planting on the same date every year regardless of actual soil climate.</td>
                  <td><strong>Bio-Thermal Mapping:</strong> Identifying the perfect soil temperature window for optimal germination.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── Core Functionalities ─────────────────────────────────────── */}
      <section className="product12-section">
        <div className="p12-container">
          <div className="p12-text-center p12-mb-60 p12-fade-in">
            <span className="p12-section-badge">Core Functionalities</span>
            <h3 className="p12-section-title">How We <span>Deliver Value</span></h3>
          </div>
          <div className="product12-features-grid">
            {[
              { icon: "🌡️", title: "1. Micro-Climate AI", desc: "Machine learning models trained on field-specific sensors for hyper-accurate forecasting." },
              { icon: "❄️", title: "2. Extreme Event Mesh", desc: "Real-time monitoring and alerting for frost, heatwaves, and wind-shear risks." },
              { icon: "📈", title: "3. GDD & Bio-Tracking", desc: "Continuous tracking of Growing Degree Days and thermal units for growth-stage prediction." },
              { icon: "🛡️", title: "4. Disease Risk Radar", desc: "Predicting fungal and pest outbreaks based on historical weather-pathogen correlations." },
              { icon: "🚜", title: "5. Operation Optimizer", desc: "Intelligent scheduling for planting, spraying, and harvesting based on weather windows." }
            ].map((feature, idx) => (
              <div className="p12-feature-card p12-fade-in" key={idx}>
                <div className="p12-feature-icon">{feature.icon}</div>
                <h4>{feature.title}</h4>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Technical Architecture ─────────────────────────────────────── */}
      <section className="product12-section p12-section-dark-alt">
        <div className="p12-container">
          <div className="p12-vision-container p12-fade-in">
            <div className="p12-vision-header p12-text-center">
              <span className="p12-section-badge">Architecture</span>
              <h3 className="p12-section-title">Technical <span>Architecture</span></h3>
            </div>
            <div className="p12-vision-grid">
              {[
                { icon: "🖥️", title: "Meteorological Core", desc: "Proprietary forecasting models optimized for agricultural terrain." },
                { icon: "📶", title: "Telemetry Hub", desc: "Cloud-sync for on-farm IoT weather stations and soil probes." },
                { icon: "🧠", title: "Bio-Logic Engine", desc: "Correlating weather data with specific crop growth and disease models." },
                { icon: "📊", title: "Anomaly Detector", desc: "AI that flags record-breaking weather shifts and extreme risks." },
                { icon: "📱", title: "Advisory Portal", desc: "Mobile-first dashboard for real-time alerts and adaptive scheduling." }
              ].map((item, idx) => (
                <div className="p12-vision-item" key={idx}>
                  <div className="p12-vision-icon">{item.icon}</div>
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
      <section className="product12-section">
        <div className="p12-container">
          <div className="product12-overview-grid">
            <div className="p12-fade-in-left">
              <span className="p12-section-badge">Technologies</span>
              <h3 className="product12-section-title">Technologies <span>Used</span></h3>
              <div className="p12-solutions-grid" style={{ gridTemplateColumns: '1fr' }}>
                {[
                  "Numerical Weather Prediction (NWP) Models",
                  "High-Resolution IoT Weather Mesh",
                  "LoRaWAN Sub-GHz Connectivity",
                  "Machine Learning Pattern Correlation",
                  "Cloud-Native Meteorological Pipeline",
                  "Geospatial Time-Series Database",
                  "Automated Threshold Alerting System"
                ].map((tech, idx) => (
                  <div className="p12-solution-item" key={idx} style={{ padding: '15px 24px' }}>
                    <div className="p12-sol-icon">🛠️</div>
                    <p><strong>{tech}</strong></p>
                  </div>
                ))}
              </div>
            </div>
            <div className="p12-fade-in-right">
              <span className="p12-section-badge">Applications</span>
              <h3 className="product12-section-title">Real-World <span>Applications</span></h3>
              <div className="p12-solutions-grid" style={{ gridTemplateColumns: '1fr' }}>
                {[
                  "Frost protection for high-value orchards",
                  "Strategic planting window selection",
                  "Spray drift mitigation for chemical safety",
                  "Irrigation scheduling based on ET forecasts",
                  "Harvest logistics planning for logistics hubs",
                  "Disease risk assessment for vineyard managers"
                ].map((app, idx) => (
                  <div className="p12-solution-item" key={idx} style={{ padding: '15px 24px' }}>
                    <div className="p12-sol-icon">🌍</div>
                    <p><strong>{app}</strong></p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Benefits ─────────────────────────────────────── */}
      <section className="product12-section p12-section-dark-alt">
        <div className="p12-container">
          <div className="p12-text-center p12-mb-60 p12-fade-in">
            <span className="p12-section-badge">Benefits</span>
            <h3 className="p12-section-title">The <span>Precision</span> Advantage</h3>
          </div>
          <div className="p12-benefits-grid">
            {[
              { icon: "🛡️", title: "Crop Safety", desc: "Reduce losses from frost, heatwaves, and erratic storms." },
              { icon: "📉", title: "Lower Inputs", desc: "Optimize spraying and irrigation to minimize resource waste." },
              { icon: "📈", title: "Higher ROI", desc: "Maximize yields by aligning operations with the perfect climate." },
              { icon: "✨", title: "Decision Confidence", desc: "Replace guesswork with data-driven meteorological insights." },
              { icon: "🌍", title: "Climate Resilience", desc: "Adapt farming strategies to long-term environmental shifts." }
            ].map((benefit, idx) => (
              <div className="p12-benefit-card p12-fade-in" key={idx}>
                <div className="p12-benefit-icon">{benefit.icon}</div>
                <h4>{benefit.title}</h4>
                <p>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Challenges & Future Scope ───────────────────────────────────── */}
      <section className="product12-section">
        <div className="p12-container">
          <div className="product12-overview-grid">
            <div className="p12-fade-in-left">
              <span className="p12-section-badge">Challenges</span>
              <h3 className="p12-section-title">Challenges & <span>Limitations</span></h3>
              <ul className="p12-capabilities-card" style={{ listStyle: 'none', padding: '30px' }}>
                {[
                  "Complexity of predicting extreme climate anomalies",
                  "Sensor calibration requirements in harsh conditions",
                  "Varying data connectivity in remote mountainous areas",
                  "Integrating with legacy irrigation and spray hardware",
                  "Educating users on interpreting complex thermal units"
                ].map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '12px', display: 'flex', gap: '10px' }}>
                    <span style={{ color: '#d32f2f' }}>⚠</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p12-fade-in-right">
              <span className="p12-section-badge">Future Scope</span>
              <h3 className="p12-section-title">The <span>Future</span> of Forecasting</h3>
              <ul className="p12-capabilities-card" style={{ listStyle: 'none', padding: '30px' }}>
                {[
                  "Hyper-local 100m grid resolution forecasting",
                  "Fully autonomous weather-adaptive irrigation fleets",
                  "Quantum-enhanced global climate trend modeling",
                  "Universal digital twin for field micro-climates",
                  "Real-time carbon sequestration weather correlation"
                ].map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '12px', display: 'flex', gap: '10px' }}>
                    <span style={{ color: 'var(--p12-primary)' }}>🚀</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Industry Impact ─────────────────────────────────── */}
      <section className="product12-section p12-section-dark-alt">
        <div className="p12-container">
          <div className="p12-compliance-card p12-fade-in">
            <h2>Industry Impact</h2>
            <div className="p12-compliance-grid">
              {[
                "🌍 Reducing global crop losses from climate volatility",
                "📈 Enhancing farm operational efficiency worldwide",
                "🏗️ Building the foundation for climate-resilient farming",
                "✨ Empowering producers with planetary-scale data"
              ].map((item, idx) => (
                <div className="p12-compliance-item" key={idx}>{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Conclusion & Final CTA ────────────────────────────────────────── */}
      <section className="p12-final-cta">
        <div className="p12-container p12-text-center p12-fade-in">
          <span className="p12-section-badge">Conclusion</span>
          <h2>Empowering Farmers Against <span>Environmental</span> Risks</h2>
          <p style={{ marginBottom: '20px' }}>
            Agricultural Weather Forecasting is the critical shield for modern agribusinesses in an era of climate uncertainty. By merging hyper-local IoT sensing with advanced AI, we provide the intelligence needed to protect crops and optimize operations.
          </p>
          <p style={{ marginBottom: '40px' }}>
            This solution is the critical step toward building a truly resilient, eco-conscious, and future-ready agricultural ecosystem through meteorological intelligence.
          </p>
           
        </div>
      </section>

      <footer className="product12-footer">
        <div className="p12-container">
          <p>&copy; 2026 Techbrain Networks. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Product12;
