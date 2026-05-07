import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './product7.css';

const Product7 = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('p7-visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.p7-fade-in, .p7-fade-in-left, .p7-fade-in-right').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="product7-page">
      {/* ─── Navigation ─────────────────────────── */}
      <nav className="product7-nav">
        <div className="p7-container">
          <button onClick={() => navigate('/#products')} className="product7-back-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Home
          </button>
        </div>
      </nav>

      {/* ─── Hero Section ─────────────────────────────────────────── */}
      <section className="product7-hero" style={{ backgroundImage: `url(/images/product_07.png)` }}>
        <div className="p7-container">
          <div className="product7-hero-content p7-fade-in">
            <span className="product7-hero-badge">Smart IoT</span>
            <h1>Automated Irrigation <br /><span>Control Systems</span></h1>
            <p className="product7-hero-description">
              Smart IoT-based irrigation automation platform with soil moisture sensing, weather-adaptive scheduling, drip control, and water usage optimization.
            </p>
             
          </div>
        </div>
      </section>

      {/* ─── Introduction & Background ─────────────────────────────────────── */}
      <section className="product7-section">
        <div className="p7-container">
          <div className="product7-overview-grid">
            <div className="product7-overview-text p7-fade-in-left">
              <span className="p7-section-badge">Introduction</span>
              <h3 className="product7-section-title">Empowering <span>Modern Agriculture</span></h3>
              <p>
                Automated Irrigation Control Systems is a landscape-scale hydrological solution that uses acoustic sensor meshes, ultrasonic flow telemetry, and evapotranspiration (ET) analytics to transform water stewardship into a precise, measurable science.
              </p>
              <p>
                It eliminates water waste by identifying infrastructure leaks in real-time and correlating irrigation delivery with satellite-derived crop water needs.
              </p>
              <div className="product7-highlight-box">
                <h4 style={{ marginBottom: '10px', color: 'var(--p7-primary-dark)' }}>Background & Problem Statement</h4>
                <p>
                  Agriculture consumes over 70% of global freshwater, yet nearly half is lost to leaky infrastructure and inefficient flood irrigation. As aquifers deplete and droughts intensify, the traditional "pump-and-pray" method is no longer sustainable. Product 7 manages water at the watershed scale, accounting for every drop from the source to the root-zone, ensuring long-term hydrological resilience.
                </p>
              </div>
            </div>
            <div className="product7-overview-image p7-fade-in-right">
              <div className="p7-capabilities-card">
                <h3>Key Features</h3>
                <ul>
                  <li><span className="p7-check">✓</span> Acoustic Leak Detection</li>
                  <li><span className="p7-check">✓</span> Ultrasonic Flow Telemetry</li>
                  <li><span className="p7-check">✓</span> ET-Based Scheduling</li>
                  <li><span className="p7-check">✓</span> Aquifer Level Tracking</li>
                  <li><span className="p7-check">✓</span> Watershed Digital Twin</li>
                  <li><span className="p7-check">✓</span> Water Rights Ledger</li>
                  <li><span className="p7-check">✓</span> Automated Sluice Control</li>
                  <li><span className="p7-check">✓</span> Pressure Management</li>
                  <li><span className="p7-check">✓</span> Salinity Intrusion Alerts</li>
                  <li><span className="p7-check">✓</span> Remote Infrastructure Ops</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Problem & Solution ─────────────────────────────────────────── */}
      <section className="product7-section p7-section-dark-alt">
        <div className="p7-container">
          <div className="p7-text-center p7-mb-60 p7-fade-in">
            <span className="p7-section-badge">Problem & Solution</span>
            <h3 className="product7-section-title">Solving <span>Traditional Farming</span> Inefficiencies</h3>
          </div>
          <div className="p7-table-container p7-fade-in">
            <table className="p7-comparison-table">
              <thead>
                <tr>
                  <th>❗ Unmanaged Hydrological Waste</th>
                  <th>✅ Precision Water Stewardship</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Undetected Pipe Leaks:</strong> Losing millions of gallons to silent underground infrastructure failures.</td>
                  <td><strong>Acoustic Surveillance:</strong> 24/7 AI-driven leak detection that flags micro-fissures before they burst.</td>
                </tr>
                <tr>
                  <td><strong>"Blind" Over-Irrigation:</strong> Applying water based on schedules rather than actual crop evapotranspiration.</td>
                  <td><strong>ET-Optimized Delivery:</strong> Satellite-synced irrigation that matches delivery to real-time plant water loss.</td>
                </tr>
                <tr>
                  <td><strong>Aquifer Depletion:</strong> Pumping groundwater without knowing the recharge rate or depth-to-water.</td>
                  <td><strong>Aquifer Telemetry:</strong> Real-time monitoring of groundwater levels to prevent localized subsidence.</td>
                </tr>
                <tr>
                  <td><strong>Energy Inefficiency:</strong> High electricity costs from pumps running against high-pressure leaks.</td>
                  <td><strong>Hydraulic Optimization:</strong> AI modulates pump speeds to maintain optimal pressure-to-flow ratios.</td>
                </tr>
                <tr>
                  <td><strong>Regulatory Risk:</strong> Struggling to manually report water use for compliance and rights auditing.</td>
                  <td><strong>Automated Rights Ledger:</strong> Blockchain-backed, audit-ready records of every gallon consumed.</td>
                </tr>
                <tr>
                  <td><strong>Watershed Fragmentation:</strong> Individual farms managing water without considering the upstream impact.</td>
                  <td><strong>Connected Watersheds:</strong> Unified data layer for community-wide water conservation and sharing.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── Core Functionalities ─────────────────────────────────────── */}
      <section className="product7-section">
        <div className="p7-container">
          <div className="p7-text-center p7-mb-60 p7-fade-in">
            <span className="p7-section-badge">Core Functionalities</span>
            <h3 className="product7-section-title">How We <span>Deliver Value</span></h3>
          </div>
          <div className="product7-features-grid">
            {[
              { icon: "🔊", title: "1. Acoustic Sensing", desc: "Digital vibration sensors on mainlines identify the unique frequency signatures of leaks." },
              { icon: "🛰️", title: "2. ET Analytics", desc: "Integration with satellite data to calculate site-specific Evapotranspiration rates daily." },
              { icon: "💧", title: "3. Flow Telemetry", desc: "High-frequency ultrasonic flow meters tracking water movement with 99.9% accuracy." },
              { icon: "🏔️", title: "4. Aquifer Sync", desc: "Pressure transducers monitor groundwater levels and salinity in real-time." },
              { icon: "📜", title: "5. Rights Reporting", desc: "Automated generation of water-rights compliance documents for regulatory agencies." }
            ].map((feature, idx) => (
              <div className="p7-feature-card p7-fade-in" key={idx}>
                <div className="p7-feature-icon">{feature.icon}</div>
                <h4>{feature.title}</h4>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How It Works (Step-by-Step) ─────────────────────────────────── */}
      <section className="product7-section p7-section-dark-alt">
        <div className="p7-container">
          <div className="p7-text-center p7-mb-60 p7-fade-in">
            <span className="p7-section-badge">Workflow</span>
            <h3 className="product7-section-title">The <span>Process</span> (Step-by-Step)</h3>
          </div>
          <div className="p7-support-grid">
            {[
              "1. Acoustic and flow sensors are deployed across the watershed infrastructure",
              "2. IoT Gateways transmit pressure and flow data via LoRaWAN or Satellite backhaul",
              "3. AI analyzes flow signatures to detect leaks and infrastructure bottlenecks",
              "4. Evapotranspiration (ET) data is pulled from satellites to define daily water budgets",
              "5. Automated sluice gates and pumps adjust delivery based on the optimized budget",
              "6. Continuous ledger updates provide real-time visibility into total water rights usage"
            ].map((text, idx) => (
              <div className="p7-support-item p7-fade-in" key={idx}>
                <div className="p7-support-dot"></div>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Technical Architecture ─────────────────────────────────────── */}
      <section className="product7-section">
        <div className="p7-container">
          <div className="p7-vision-container p7-fade-in">
            <div className="p7-vision-header p7-text-center">
              <span className="p7-section-badge">Architecture</span>
              <h3 className="product7-section-title">Technical <span>Architecture</span></h3>
            </div>
            <div className="p7-vision-grid">
              {[
                { icon: "📡", title: "Telemetry Mesh", desc: "Low-power ultrasonic flow sensors and acoustic nodes." },
                { icon: "🌍", title: "Spatial Engine", desc: "Satellite-derived OpenET data processing and hydrological modeling." },
                { icon: "🧠", title: "Hydraulic AI", desc: "Predictive algorithms for leak detection and pump optimization." },
                { icon: "💾", title: "Water Ledger", desc: "Blockchain-based storage for immutable water-rights accounting." },
                { icon: "📱", title: "Watershed Twin", desc: "Real-time GIS dashboard for remote greenhouse management." }
              ].map((item, idx) => (
                <div className="p7-vision-item" key={idx}>
                  <div className="p7-vision-icon">{item.icon}</div>
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
      <section className="product7-section p7-section-dark-alt">
        <div className="p7-container">
          <div className="product7-overview-grid">
            <div className="p7-fade-in-left">
              <span className="p7-section-badge">Technologies</span>
              <h3 className="product7-section-title">Technologies <span>Used</span></h3>
              <div className="p7-solutions-grid" style={{ gridTemplateColumns: '1fr' }}>
                {[
                  "Ultrasonic & Acoustic Sensor Nodes",
                  "OpenET Satellite Data Integration",
                  "Hydrological Predictive Modeling",
                  "IoT Satellite/LoRaWAN Backhaul",
                  "Blockchain-based Water Ledger",
                  "Automated Hydraulic Control Logic",
                  "Salinity & Conductivity Telemetry"
                ].map((tech, idx) => (
                  <div className="p7-solution-item" key={idx} style={{ padding: '15px 24px' }}>
                    <div className="p7-sol-icon">🛠️</div>
                    <p><strong>{tech}</strong></p>
                  </div>
                ))}
              </div>
            </div>
            <div className="p7-fade-in-right">
              <span className="p7-section-badge">Applications</span>
              <h3 className="product7-section-title">Real-World <span>Applications</span></h3>
              <div className="p7-solutions-grid" style={{ gridTemplateColumns: '1fr' }}>
                {[
                  "Large-scale regional irrigation districts",
                  "Aquifer management for high-value crops",
                  "Governmental water-rights auditing",
                  "Drought-prone regional water stewardship",
                  "Infrastructure leak detection for large estates",
                  "Industrial agricultural processing water reuse"
                ].map((app, idx) => (
                  <div className="p7-solution-item" key={idx} style={{ padding: '15px 24px' }}>
                    <div className="p7-sol-icon">🌍</div>
                    <p><strong>{app}</strong></p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Benefits ─────────────────────────────────────── */}
      <section className="product7-section">
        <div className="p7-container">
          <div className="p7-text-center p7-mb-60 p7-fade-in">
            <span className="p7-section-badge">Benefits</span>
            <h3 className="product7-section-title">The <span>Precision</span> Advantage</h3>
          </div>
          <div className="p7-benefits-grid">
            {[
              { icon: "💧", title: "40% Waste Reduction", desc: "Eliminate silent leaks and over-irrigation waste." },
              { icon: "⚡", title: "Lower Energy Costs", desc: "Reduce pumping energy by optimizing hydraulic flow." },
              { icon: "🛡️", title: "Rights Security", desc: "Defend your water rights with audit-ready usage data." },
              { icon: "📉", title: "Climate Resilience", desc: "Maintain production during extreme drought through precision." },
              { icon: "📈", title: "Yield Consistency", desc: "Ensure crops never hit moisture stress points via ET-sync." }
            ].map((benefit, idx) => (
              <div className="p7-benefit-card p7-fade-in" key={idx}>
                <div className="p7-benefit-icon">{benefit.icon}</div>
                <h4>{benefit.title}</h4>
                <p>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Challenges & Future Scope ───────────────────────────────────── */}
      <section className="product7-section p7-section-dark-alt">
        <div className="p7-container">
          <div className="product7-overview-grid">
            <div className="p7-fade-in-left">
              <span className="p7-section-badge">Challenges</span>
              <h3 className="product7-section-title">Challenges & <span>Limitations</span></h3>
              <ul className="p7-capabilities-card" style={{ listStyle: 'none', padding: '30px' }}>
                {[
                  "High capital cost for acoustic sensing at watershed scale",
                  "Jurisdictional complexity of regional water management",
                  "Sensor sensitivity to external ambient noise in fields",
                  "Data latency in satellite backhaul for remote sensors",
                  "Integration with diverse legacy pump and valve hardware"
                ].map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '12px', display: 'flex', gap: '10px' }}>
                    <span style={{ color: '#d32f2f' }}>⚠</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p7-fade-in-right">
              <span className="p7-section-badge">Future Scope</span>
              <h3 className="product7-section-title">The <span>Future</span> of Water</h3>
              <ul className="p7-capabilities-card" style={{ listStyle: 'none', padding: '30px' }}>
                {[
                  "AI-autonomous watershed-wide sluice & dam control",
                  "Tokenized water-credit trading marketplaces",
                  "Hyperspectral water-stress detection from LEO satellites",
                  "Self-healing pipe coatings with integrated IoT",
                  "Predictive global groundwater depletion modeling"
                ].map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '12px', display: 'flex', gap: '10px' }}>
                    <span style={{ color: 'var(--p7-primary)' }}>🚀</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Industry Impact ─────────────────────────────────── */}
      <section className="product7-section">
        <div className="p7-container">
          <div className="p7-compliance-card p7-fade-in">
            <h2>Industry Impact</h2>
            <div className="p7-compliance-grid">
              {[
                "🌍 Preserves the world's most precious agricultural resource",
                "💧 Decouples crop production from aquifer depletion rates",
                "📈 Validates regional water conservation ROI",
                "⚖️ Setting the standard for hydrological transparency"
              ].map((item, idx) => (
                <div className="p7-compliance-item" key={idx}>{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Conclusion & Final CTA ────────────────────────────────────────── */}
      <section className="p7-final-cta p7-section-dark-alt">
        <div className="p7-container p7-text-center p7-fade-in">
          <span className="p7-section-badge">Conclusion</span>
          <h2>Managing Every <span>Drop</span> with Purpose</h2>
          <p style={{ marginBottom: '20px' }}>
            Automated Irrigation Control Systems is transforming agriculture from the biggest water consumer into its most efficient steward. By merging acoustic leak detection, satellite ET-analytics, and blockchain rights-ledgers, we enable agribusinesses to thrive in an era of water scarcity while protecting the aquifers that sustain our future.
          </p>
          <p style={{ marginBottom: '40px' }}>
            This solution is the critical step toward building a truly resilient, hydrological-conscious, and future-ready agricultural ecosystem through water intelligence.
          </p>
          
        </div>
      </section>

      <footer className="p7-footer">
        <div className="p7-container">
          <p>&copy; 2026 Techbrain Networks. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Product7;
