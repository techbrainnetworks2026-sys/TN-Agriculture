import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './product8.css';

const Product8 = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('p8-visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.p8-fade-in, .p8-fade-in-left, .p8-fade-in-right').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="product8-page">
      {/* ─── Navigation ─────────────────────────── */}
      <nav className="product8-nav">
        <div className="p8-container">
          <button onClick={() => navigate('/#products')} className="product8-back-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Home
          </button>
        </div>
      </nav>

      {/* ─── Hero Section ─────────────────────────────────────────── */}
      <section className="product8-hero" style={{ backgroundImage: `url(/images/product_08.png)` }}>
        <div className="p8-container">
          <div className="product8-hero-content p8-fade-in">
            <span className="product8-hero-badge">Soil Intelligence</span>
            <h1>Soil Health Monitoring & <br /><span>Analysis</span></h1>
            <p className="product8-hero-description">
              Comprehensive soil intelligence platform with real-time pH, nutrient, moisture analysis and AI recommendations for optimal fertilization and amendment.
            </p>
            
          </div>
        </div>
      </section>

      {/* ─── Introduction & Background ─────────────────────────────────────── */}
      <section className="product8-section">
        <div className="p8-container">
          <div className="product8-overview-grid">
            <div className="product8-overview-text p8-fade-in-left">
              <span className="p8-section-badge">Introduction</span>
              <h3 className="p8-section-title">Empowering <span>Modern Agriculture</span></h3>
              <p>
                Soil Health Monitoring & Analysis is a next-generation agricultural solution that uses advanced IoT sensors, laboratory-grade field testing, and AI analytics to transform soil management into a precise, data-driven science.
              </p>
              <p>
                It optimizes nutrient management by providing a detailed digital profile of soil chemistry, enabling precise application of fertilizers and amendments.
              </p>
              <div className="product8-highlight-box">
                <h4 style={{ marginBottom: '10px', color: 'var(--p8-primary-dark)' }}>Background & Problem Statement</h4>
                <p>
                  Soil is a living ecosystem, yet traditional farming often treats it as an inert substrate for chemical inputs. Decades of "blind" fertilization have led to soil acidification, nutrient runoff, and the collapse of essential microbial diversity. Lab-based testing is slow and infrequent, often providing data that is weeks out of date. Product 8 provides real-time, subterranean intelligence, allowing farmers to transition from chemical dependency to biological precision.
                </p>
              </div>
            </div>
            <div className="product8-overview-image p8-fade-in-right">
              <div className="p8-capabilities-card">
                <h3>Key Features</h3>
                <ul>
                  <li><span className="p8-check">✓</span> Real-time pH Monitoring</li>
                  <li><span className="p8-check">✓</span> Nutrient Level Tracking</li>
                  <li><span className="p8-check">✓</span> Soil Moisture Profiling</li>
                  <li><span className="p8-check">✓</span> Temperature Analysis</li>
                  <li><span className="p8-check">✓</span> Microbiome Intelligence</li>
                  <li><span className="p8-check">✓</span> Fertilization Optimization</li>
                  <li><span className="p8-check">✓</span> Salinity Measurement</li>
                  <li><span className="p8-check">✓</span> Compaction Mapping</li>
                  <li><span className="p8-check">✓</span> Organic Matter Tracking</li>
                  <li><span className="p8-check">✓</span> Historical Trend Analysis</li>
</ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Problem & Solution ─────────────────────────────────────────── */}
      <section className="product8-section p8-section-dark-alt">
        <div className="p8-container">
          <div className="p8-text-center p8-mb-60 p8-fade-in">
            <span className="p8-section-badge">Problem & Solution</span>
            <h3 className="p8-section-title">Solving <span>Traditional Farming</span> Inefficiencies</h3>
          </div>
          <div className="p8-table-container p8-fade-in">
            <table className="p8-comparison-table">
              <thead>
                <tr>
                  <th>❗ Degraded Soil Ecosystems</th>
                  <th>✅ Subterranean Intelligence</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Lab Testing Latency:</strong> Waiting weeks for soil results while crop needs change daily.</td>
                  <td><strong>Real-Time Sensing:</strong> Instant IoT-based NPK and pH readings directly from the field.</td>
                </tr>
                <tr>
                  <td><strong>Chemical Over-Saturation:</strong> Excessive fertilization leading to toxic runoff and soil acidification.</td>
                  <td><strong>Precision Amendment:</strong> AI-driven prescriptions for the exact nutrients needed, reducing waste.</td>
                </tr>
                <tr>
                  <td><strong>Microbial Collapse:</strong> Sterile soil lacking the beneficial bacteria and fungi needed for nutrient uptake.</td>
                  <td><strong>Biological Indexing:</strong> Monitoring microbial activity to restore soil's natural fertility.</td>
                </tr>
                <tr>
                  <td><strong>Undetected Compaction:</strong> Hardpan layers blocking root growth and water infiltration.</td>
                  <td><strong>3D Soil Mapping:</strong> Digital visualization of compaction zones to guide targeted tillage.</td>
                </tr>
                <tr>
                  <td><strong>Salinity & pH Swings:</strong> Unmonitored shifts in soil chemistry leading to crop stunting and death.</td>
                  <td><strong>Continuous Threshold Alerts:</strong> Instant notifications when pH or salinity levels exit the optimal range.</td>
                </tr>
                <tr>
                  <td><strong>Organic Matter Depletion:</strong> Loss of soil structure and carbon sequestration capacity.</td>
                  <td><strong>SOM Tracking:</strong> Long-term tracking of Soil Organic Matter to validate regenerative gains.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── Core Functionalities ─────────────────────────────────────── */}
      <section className="product8-section">
        <div className="p8-container">
          <div className="p8-text-center p8-mb-60 p8-fade-in">
            <span className="p8-section-badge">Core Functionalities</span>
            <h3 className="p8-section-title">How We <span>Deliver Value</span></h3>
          </div>
          <div className="product8-features-grid">
            {[
              { icon: "🧪", title: "1. NPK/pH Sensing", desc: "Ion-selective electrodes (ISE) providing real-time chemical profiles at multiple soil depths." },
              { icon: "🧬", title: "2. Microbiome Index", desc: "AI-driven estimation of microbial health and fungal-to-bacterial ratios." },
              { icon: "🗺️", title: "3. Variability Mapping", desc: "High-resolution spatial maps showing nutrient distribution across the entire farm." },
              { icon: "📉", title: "4. Carbon Analytics", desc: "Precise measurement of soil organic carbon for carbon credit validation and ESG goals." },
              { icon: "🧰", title: "5. VRT Prescription", desc: "Automated generation of Variable Rate Technology (VRT) maps for precision fertilization." }
            ].map((feature, idx) => (
              <div className="p8-feature-card p8-fade-in" key={idx}>
                <div className="p8-feature-icon">{feature.icon}</div>
                <h4>{feature.title}</h4>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How It Works (Step-by-Step) ─────────────────────────────────── */}
      <section className="product8-section p8-section-dark-alt">
        <div className="p8-container">
          <div className="p8-text-center p8-mb-60 p8-fade-in">
            <span className="p8-section-badge">Workflow</span>
            <h3 className="p8-section-title">The <span>Process</span> (Step-by-Step)</h3>
          </div>
          <div className="p8-support-grid">
            {[
              "1. Wireless sensor probes are installed in various field sectors and depths (6\", 12\", 24\")",
              "2. Real-time chemical and physical soil data is transmitted via LoRaWAN mesh networks",
              "3. AI pedology engine identifies nutrient imbalances, salinity risks, and compaction layers",
              "4. System correlates soil data with crop stage and projected weather patterns",
              "5. Custom Variable Rate (VRT) prescriptions are sent directly to smart sprayers and tractors",
              "6. Ongoing longitudinal analysis tracks the regeneration of soil organic matter over time"
            ].map((text, idx) => (
              <div className="p8-support-item p8-fade-in" key={idx}>
                <div className="p8-support-dot"></div>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Technical Architecture ─────────────────────────────────────── */}
      <section className="product8-section">
        <div className="p8-container">
          <div className="p8-vision-container p8-fade-in">
            <div className="p8-vision-header p8-text-center">
              <span className="p8-section-badge">Architecture</span>
              <h3 className="p8-section-title">Technical <span>Architecture</span></h3>
            </div>
            <div className="p8-vision-grid">
              {[
                { icon: "🔌", title: "ISE Sensor Mesh", desc: "Advanced Ion-Selective Electrodes for multi-nutrient sensing." },
                { icon: "📶", title: "LoRaWAN Uplink", desc: "Long-range, low-power connectivity for deep-field subterranean data." },
                { icon: "🧠", title: "Pedology AI", desc: "Machine learning models trained on millions of global soil profile data points." },
                { icon: "💾", title: "Spatial Data Lake", desc: "PostGIS-backed storage for high-resolution soil variability mapping." },
                { icon: "🚜", title: "ISOBUS Integration", desc: "Direct API link with farm machinery for automated input application." }
              ].map((item, idx) => (
                <div className="p8-vision-item" key={idx}>
                  <div className="p8-vision-icon">{item.icon}</div>
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
      <section className="product8-section p8-section-dark-alt">
        <div className="p8-container">
          <div className="product8-overview-grid">
            <div className="p8-fade-in-left">
              <span className="p8-section-badge">Technologies</span>
              <h3 className="p8-section-title">Technologies <span>Used</span></h3>
              <div className="p8-solutions-grid" style={{ gridTemplateColumns: '1fr' }}>
                {[
                  "Ion-Selective Electrode (ISE) Technology",
                  "LoRaWAN & NB-IoT Subterranean Comms",
                  "Python-based Spatial Pedology Engines",
                  "Machine Learning Soil Anomaly Detection",
                  "PostGIS for Geospatial Soil Mapping",
                  "Variable Rate Technology (VRT) Protocols",
                  "Microbial Respiration Predictive AI"
                ].map((tech, idx) => (
                  <div className="p8-solution-item" key={idx} style={{ padding: '15px 24px' }}>
                    <div className="p8-sol-icon">🛠️</div>
                    <p><strong>{tech}</strong></p>
                  </div>
                ))}
              </div>
            </div>
            <div className="p8-fade-in-right">
              <span className="p8-section-badge">Applications</span>
              <h3 className="p8-section-title">Real-World <span>Applications</span></h3>
              <div className="p8-solutions-grid" style={{ gridTemplateColumns: '1fr' }}>
                {[
                  "Precision fertilization for row crops (Corn, Soy)",
                  "High-value vineyard terroir management",
                  "Regenerative agriculture carbon validation",
                  "Salinity management in irrigated desert regions",
                  "Large-scale land reclamation & reforestation",
                  "Nursery & greenhouse root-zone monitoring"
                ].map((app, idx) => (
                  <div className="p8-solution-item" key={idx} style={{ padding: '15px 24px' }}>
                    <div className="p8-sol-icon">🌍</div>
                    <p><strong>{app}</strong></p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Benefits ─────────────────────────────────────── */}
      <section className="product8-section">
        <div className="p8-container">
          <div className="p8-text-center p8-mb-60 p8-fade-in">
            <span className="p8-section-badge">Benefits</span>
            <h3 className="p8-section-title">The <span>Precision</span> Advantage</h3>
          </div>
          <div className="p8-benefits-grid">
            {[
              { icon: "💰", title: "25% Cost Savings", desc: "Eliminate fertilizer waste through precise, zone-based targeting." },
              { icon: "💎", title: "Soil Resilience", desc: "Build organic matter that holds more water and nutrients." },
              { icon: "🌿", title: "Eco-Health", desc: "Reduce chemical runoff and protect local groundwater systems." },
              { icon: "📈", title: "Premium Yields", desc: "Achieve superior crop quality through perfect root-zone chemistry." },
              { icon: "🛡️", title: "Audit Confidence", desc: "Provide unalterable data for organic and sustainable certifications." }
            ].map((benefit, idx) => (
              <div className="p8-benefit-card p8-fade-in" key={idx}>
                <div className="p8-benefit-icon">{benefit.icon}</div>
                <h4>{benefit.title}</h4>
                <p>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Challenges & Future Scope ───────────────────────────────────── */}
      <section className="product8-section p8-section-dark-alt">
        <div className="p8-container">
          <div className="product8-overview-grid">
            <div className="p8-fade-in-left">
              <span className="p8-section-badge">Challenges</span>
              <h3 className="p8-section-title">Challenges & <span>Limitations</span></h3>
              <ul className="p8-capabilities-card" style={{ listStyle: 'none', padding: '30px' }}>
                {[
                  "Sensor calibration drift in high-salinity environments",
                  "Initial deployment density requirements for accurate mapping",
                  "Difficulty of subterranean signal transmission in clay-rich soils",
                  "Sensor battery life in long-term deep-field deployments",
                  "Interpreting complex microbial interactions via indirect sensing"
                ].map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '12px', display: 'flex', gap: '10px' }}>
                    <span style={{ color: '#d32f2f' }}>⚠</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p8-fade-in-right">
              <span className="p8-section-badge">Future Scope</span>
              <h3 className="p8-section-title">The <span>Future</span> of Soil</h3>
              <ul className="p8-capabilities-card" style={{ listStyle: 'none', padding: '30px' }}>
                {[
                  "Nano-sensors for real-time soil-pathogen detection",
                  "Autonomous robotic soil-remediation & inoculation fleets",
                  "Bio-electrochemical systems for soil-to-energy harvesting",
                  "Holographic subterranean moisture visualizations",
                  "Blockchain-linked soil health 'FICO' scores for green loans"
                ].map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '12px', display: 'flex', gap: '10px' }}>
                    <span style={{ color: 'var(--p8-primary)' }}>🚀</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Industry Impact ─────────────────────────────────── */}
      <section className="product8-section">
        <div className="p8-container">
          <div className="p8-compliance-card p8-fade-in">
            <h2>Industry Impact</h2>
            <div className="p8-compliance-grid">
              {[
                "🌍 Transforms soil from an 'input' to a renewable asset",
                "🍃 Eradicates the need for 'Blind' preventative fertilization",
                "📈 Validates agricultural carbon sequestration claims",
                "🛡️ Protects global food security through soil resilience"
              ].map((item, idx) => (
                <div className="p8-compliance-item" key={idx}>{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Conclusion & Final CTA ────────────────────────────────────────── */}
      <section className="p8-final-cta p8-section-dark-alt">
        <div className="p8-container p8-text-center p8-fade-in">
          <span className="p8-section-badge">Conclusion</span>
          <h2>Nurturing the <span>Foundation</span> of Life</h2>
          <p style={{ marginBottom: '20px' }}>
            Soil Health Monitoring & Analysis is the final frontier in agricultural precision. By merging subterranean IoT sensing, pedology AI, and Variable Rate Technology (VRT), we enable farmers to treat their soil as a high-performance, biological asset rather than a mere chemical sponge.
          </p>
          <p style={{ marginBottom: '40px' }}>
            This solution is the critical step toward building a truly resilient, eco-conscious, and future-ready agricultural ecosystem through subterranean intelligence.
          </p>
          
        </div>
      </section>

      <footer className="p8-footer">
        <div className="p8-container">
          <p>&copy; 2026 Techbrain Networks. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Product8;
