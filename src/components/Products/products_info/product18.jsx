import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './product18.css';

const Product18 = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('p18-visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.p18-fade-in, .p18-fade-in-left, .p18-fade-in-right').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="product18-page">
      {/* ─── Navigation ─────────────────────────── */}
      <nav className="product18-nav">
        <div className="p18-container">
          <button onClick={() => navigate('/#products')} className="product18-back-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Home
          </button>
        </div>
      </nav>

      {/* ─── Hero Section ─────────────────────────────────────────── */}
      <section className="product18-hero" style={{ backgroundImage: `url(/images/product_18.png)` }}>
        <div className="p18-container">
          <div className="product18-hero-content p18-fade-in">
            <span className="product18-hero-badge">Precision Inputs</span>
            <h1>Precision Fertilizer & <br /><span>Chemical Application</span></h1>
            <p className="product18-hero-description">
              Advanced variable-rate application (VRA) systems for fertilizer and crop protection, using real-time soil maps and drone data to apply the exact dosage needed.
            </p>
             
          </div>
        </div>
      </section>

      {/* ─── Introduction & Background ─────────────────────────────────────── */}
      <section className="product18-section">
        <div className="p18-container">
          <div className="product18-overview-grid">
            <div className="product18-overview-text p18-fade-in-left">
              <span className="p18-section-badge">Introduction</span>
              <h3 className="product18-section-title">Maximizing <span>Input Efficiency</span></h3>
              <p>
                Precision Fertilizer & Chemical Application is a high-accuracy agricultural system that integrates prescriptions from satellites and drones into automated sprayer and spreader controllers.
              </p>
              <p>
                It eliminates over-application and runoff by adjusting the flow rate in real-time based on the specific nutrient or pest needs of every square meter in the field.
              </p>
              <div className="product18-highlight-box">
                <h4 style={{ marginBottom: '10px', color: 'var(--p18-primary-dark)' }}>Background & Problem Statement</h4>
                <p>
                  Broad-spectrum fertilizer application is both economically wasteful and environmentally harmful, leading to nitrogen runoff and soil degradation. Most farms apply a uniform rate across the whole field, ignoring the natural variability in soil fertility. Product 18 solves this by using "See-and-Spray" and variable-rate technology to deliver precisely what the crop needs, where it needs it.
                </p>
              </div>
            </div>
            <div className="product18-overview-image p18-fade-in-right">
              <div className="p18-capabilities-card">
                <h3>Key Features</h3>
                <ul>
                  <li><span className="p18-check">✓</span> Variable-Rate (VRA) Control</li>
                  <li><span className="p18-check">✓</span> Individual Nozzle Pulsing</li>
                  <li><span className="p18-check">✓</span> Prescription Map Integration</li>
                  <li><span className="p18-check">✓</span> Drone-Based Pest Spotting</li>
                  <li><span className="p18-check">✓</span> Real-Time Flow Telemetry</li>
                  <li><span className="p18-check">✓</span> Runoff Risk Mitigation AI</li>
                  <li><span className="p18-check">✓</span> Multi-Product Blending</li>
                  <li><span className="p18-check">✓</span> GPS Section Control</li>
                  <li><span className="p18-check">✓</span> Application Audit Logs</li>
                  <li><span className="p18-check">✓</span> Weather-Adaptive Spraying</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Problem & Solution ─────────────────────────────────────────── */}
      <section className="product18-section p18-section-dark-alt">
        <div className="p18-container">
          <div className="p18-text-center p18-mb-60 p18-fade-in">
            <span className="p18-section-badge">Problem & Solution</span>
            <h3 className="p18-section-title">Solving <span>Waste</span> & Runoff</h3>
          </div>
          <div className="p18-table-container p18-fade-in">
            <table className="p18-comparison-table">
              <thead>
                <tr>
                  <th>❗ Broad-Spectrum Application</th>
                  <th>✅ Precision VRA Application</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Chemical Over-Saturation:</strong> High dosages applied to healthy areas, wasting money and hurting soil.</td>
                  <td><strong>Zone-Based Dosing:</strong> Applying high dosages only where deficiencies or pests are detected.</td>
                </tr>
                <tr>
                  <td><strong>Environmental Runoff:</strong> Excess nitrogen entering waterways and causing algae blooms.</td>
                  <td><strong>Runoff Safeguards:</strong> Real-time soil moisture checks to prevent application before heavy rain.</td>
                </tr>
                <tr>
                  <td><strong>Manual Sprayer Control:</strong> Relying on driver speed and manual toggles for coverage.</td>
                  <td><strong>GPS Section Control:</strong> Automated nozzle shut-off to prevent overlapping and missed spots.</td>
                </tr>
                <tr>
                  <td><strong>Input Cost Inflation:</strong> Rising prices of fertilizer eroding farm profitability.</td>
                  <td><strong>Resource Optimization:</strong> Reducing total input volume by up to 30% without affecting yield.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── Core Functionalities ─────────────────────────────────────── */}
      <section className="product18-section">
        <div className="p18-container">
          <div className="p18-text-center p18-mb-60 p18-fade-in">
            <span className="p18-section-badge">Core Functionalities</span>
            <h3 className="p18-section-title">How We <span>Deliver</span></h3>
          </div>
          <div className="product18-features-grid">
            {[
              { icon: "🗺️", title: "1. VRA Prescriptions", desc: "Generating high-resolution maps from satellite and soil sensor data." },
              { icon: "🚜", title: "2. ISOBUS Control", desc: "Direct integration with tractor and sprayer controllers for automated flow." },
              { icon: "👁️", title: "3. See-and-Spray", desc: "On-boom cameras identifying individual weeds and pests for instant treatment." },
              { icon: "🌡️", title: "4. Environmental Sync", desc: "Correlating application with real-time wind and temperature for safety." },
              { icon: "📊", title: "5. Audit Ledger", desc: "Automated logging of every liter and kilo applied for compliance and ROI." }
            ].map((feature, idx) => (
              <div className="p18-feature-card p18-fade-in" key={idx}>
                <div className="p18-feature-icon">{feature.icon}</div>
                <h4>{feature.title}</h4>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Workflow ─────────────────────────────────────── */}
      <section className="product18-section p18-section-dark-alt">
        <div className="p18-container">
          <div className="p18-text-center p18-mb-60 p18-fade-in">
            <span className="p18-section-badge">Workflow</span>
            <h3 className="p18-section-title">The <span>Precision</span> Cycle</h3>
          </div>
          <div className="p18-support-grid">
            {[
              "1. Multi-spectral satellite and soil sensors identify nutrient and pest hotspots",
              "2. AI Engine generates a Variable Rate (VRA) prescription map",
              "3. Prescription is wirelessly synced to the tractor's ISOBUS terminal",
              "4. Sprayer/Spreader automatically modulates flow based on GPS location",
              "5. 'See-and-Spray' cameras provide fine-tuned secondary intervention for weeds",
              "6. Final application report is generated to validate coverage and input savings"
            ].map((text, idx) => (
              <div className="p18-support-item p18-fade-in" key={idx}>
                <div className="p18-support-dot"></div>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Technical Architecture ─────────────────────────────────────── */}
      <section className="product18-section">
        <div className="p18-container">
          <div className="p18-vision-container p18-fade-in">
            <div className="p18-vision-header p18-text-center">
              <span className="p18-section-badge">Architecture</span>
              <h3 className="p18-section-title">Technical <span>Architecture</span></h3>
            </div>
            <div className="p18-vision-grid">
              {[
                { icon: "🛰️", title: "Geospatial Core", desc: "Processing satellite and drone data into prescription layers." },
                { icon: "🚜", title: "ISOBUS Gateway", desc: "Standardized hardware interface for controlling multi-brand machinery." },
                { icon: "🧠", title: "Dosing Engine", desc: "Real-time calculation of flow rates based on ground speed and vigor." },
                { icon: "💾", title: "Input Ledger", desc: "Inventory-linked storage for tracking chemical use and batch history." },
                { icon: "📱", title: "Ops Dashboard", desc: "Real-time visibility into sprayer performance and coverage gaps." }
              ].map((item, idx) => (
                <div className="p18-vision-item" key={idx}>
                  <div className="p18-vision-icon">{item.icon}</div>
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
      <section className="product18-section p18-section-dark-alt">
        <div className="p18-container">
          <div className="product18-overview-grid">
            <div className="p18-fade-in-left">
              <span className="p18-section-badge">Technologies</span>
              <h3 className="product18-section-title">Technologies <span>Used</span></h3>
              <div className="p18-solutions-grid" style={{ gridTemplateColumns: '1fr' }}>
                {[
                  "ISOBUS Class 3 Control Protocols",
                  "Variable-Rate Application (VRA) Algorithms",
                  "GPS Section & Nozzle-Level Control",
                  "See-and-Spray Computer Vision (AI)",
                  "Multi-Spectral Prescription Mapping",
                  "Real-Time Flow & Pressure Telemetry",
                  "Cloud-Native Input Management Dashboards"
                ].map((tech, idx) => (
                  <div className="p18-solution-item" key={idx} style={{ padding: '15px 24px' }}>
                    <div className="p18-sol-icon">🛠️</div>
                    <p><strong>{tech}</strong></p>
                  </div>
                ))}
              </div>
            </div>
            <div className="p18-fade-in-right">
              <span className="p18-section-badge">Applications</span>
              <h3 className="product18-section-title">Real-World <span>Applications</span></h3>
              <div className="p18-solutions-grid" style={{ gridTemplateColumns: '1fr' }}>
                {[
                  "Precision nitrogen management for corn/wheat",
                  "Targeted weed control in broad-acre crops",
                  "Variable-rate lime and potash application",
                  "Selective pesticide application for orchards",
                  "Input verification for organic certifications",
                  "Runoff-sensitive watershed management"
                ].map((app, idx) => (
                  <div className="p18-solution-item" key={idx} style={{ padding: '15px 24px' }}>
                    <div className="p18-sol-icon">🌍</div>
                    <p><strong>{app}</strong></p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Benefits ─────────────────────────────────────── */}
      <section className="product18-section">
        <div className="p18-container">
          <div className="p18-text-center p18-mb-60 p18-fade-in">
            <span className="p18-section-badge">Benefits</span>
            <h3 className="p18-section-title">The <span>Precision</span> Advantage</h3>
          </div>
          <div className="p18-benefits-grid">
            {[
              { icon: "💰", title: "30% Input Savings", desc: "Significantly reduce costs by eliminating over-application." },
              { icon: "📉", title: "Eco-Protection", desc: "Protect groundwater and biodiversity through targeted chemistry." },
              { icon: "📈", title: "Optimized Yield", desc: "Ensure every plant gets the perfect nutrient balance for growth." },
              { icon: "💎", title: "Soil Resilience", desc: "Prevent soil acidification and nutrient imbalances." },
              { icon: "✨", title: "Audit Ready", desc: "Provide accurate records for environmental and organic certifications." }
            ].map((benefit, idx) => (
              <div className="p18-benefit-card p18-fade-in" key={idx}>
                <div className="p18-benefit-icon">{benefit.icon}</div>
                <h4>{benefit.title}</h4>
                <p>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Challenges & Future Scope ───────────────────────────────────── */}
      <section className="product18-section p18-section-dark-alt">
        <div className="p18-container">
          <div className="product18-overview-grid">
            <div className="p18-fade-in-left">
              <span className="p18-section-badge">Challenges</span>
              <h3 className="product18-section-title">Challenges & <span>Limitations</span></h3>
              <ul className="p18-capabilities-card" style={{ listStyle: 'none', padding: '30px' }}>
                {[
                  "Complexity of calibrating multi-brand ISOBUS systems",
                  "Hardware durability in corrosive chemical zones",
                  "Managing high-velocity data from boom cameras",
                  "Varying connectivity for real-time map updates",
                  "High initial investment for advanced nozzle hardware"
                ].map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '12px', display: 'flex', gap: '10px' }}>
                    <span style={{ color: '#d32f2f' }}>⚠</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p18-fade-in-right">
              <span className="p18-section-badge">Future Scope</span>
              <h3 className="product18-section-title">The <span>Future</span> of Application</h3>
              <ul className="p18-capabilities-card" style={{ listStyle: 'none', padding: '30px' }}>
                {[
                  "Fully autonomous plant-level robotic application",
                  "AI-driven automated nutrient recipe generation",
                  "Universal digital twin for real-time runoff risk",
                  "Zero-latency satellite-to-sprayer sync",
                  "Nano-particle precision delivery systems"
                ].map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '12px', display: 'flex', gap: '10px' }}>
                    <span style={{ color: 'var(--p18-primary)' }}>🚀</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Industry Impact ─────────────────────────────────── */}
      <section className="product18-section">
        <div className="p18-container">
          <div className="p18-compliance-card p18-fade-in">
            <h2>Industry Impact</h2>
            <div className="p18-compliance-grid">
              {[
                "🌍 Eradicating agricultural chemical runoff globally",
                "📈 Revolutionizing the economics of crop inputs",
                "🏗️ Setting the benchmark for planetary-scale sustainability",
                "✨ Empowering producers with surgery-grade input control"
              ].map((item, idx) => (
                <div className="p18-compliance-item" key={idx}>{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Conclusion & Final CTA ────────────────────────────────────────── */}
      <section className="p18-final-cta p18-section-dark-alt">
        <div className="p18-container p18-text-center p18-fade-in">
          <span className="p18-section-badge">Conclusion</span>
          <h2>The <span>Surgery-Grade</span> Future of Crop Inputs</h2>
          <p style={{ marginBottom: '20px' }}>
            Precision Fertilizer & Chemical Application is transforming the field from a blanket spray zone into a high-precision, data-driven production factory. By merging ISOBUS control with advanced AI vision, we enable producers to achieve unprecedented levels of efficiency, sustainability, and ROI.
          </p>
          <p style={{ marginBottom: '40px' }}>
            This solution is the critical step toward building a truly resilient, eco-conscious, and future-ready agricultural industry through input intelligence.
          </p>
           
        </div>
      </section>

      <footer className="product18-footer">
        <div className="p18-container">
          <p>&copy; 2026 Techbrain Networks. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Product18;
