import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './product3.css';

const Product3 = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('p3-visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.p3-fade-in, .p3-fade-in-left, .p3-fade-in-right').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="product3-page">
      {/* ─── Navigation ─────────────────────────── */}
      <nav className="product3-nav">
        <div className="p3-container">
          <button onClick={() => navigate('/#products')} className="product3-back-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Home
          </button>
        </div>
      </nav>

      {/* ─── Hero Section ─────────────────────────────────────────── */}
      <section className="product3-hero" style={  {backgroundImage:  `url(/images/product_03.png)`}  }>
        <div className="p3-container">
          <div className="product3-hero-content p3-fade-in">
            <span className="product3-hero-badge">Telematics & Fleet Control</span>
            <h1>Farm Equipment Telematics & Control <br /><span>Systems</span></h1>
            <p className="product3-hero-description">
              Real-time GPS tracking and remote monitoring of farm machinery, predictive maintenance alerts, fuel analytics, and operational performance dashboards.
            </p>
            
          </div>
        </div>
      </section>

      {/* ─── Introduction & Background ─────────────────────────────────────── */}
      <section className="product3-section">
        <div className="p3-container">
          <div className="product3-overview-grid">
            <div className="product3-overview-text p3-fade-in-left">
              <span className="p3-section-badge">Introduction</span>
              <h3 className="p3-section-title">Empowering <span>Modern Agriculture</span></h3>
              <p>
                Farm Equipment Telematics & Control Systems is a next-generation agricultural solution that uses GPS, IoT, and machine-to-machine communication to transform fleet management and machinery operation into a data-driven, efficient process.
              </p>
              <p>
                It helps farm managers optimize fleet utilization by providing real-time data on machinery location, fuel consumption, and engine performance.
              </p>
              <div className="product3-highlight-box">
                <h4 style={{ marginBottom: '10px', color: 'var(--p3-primary-dark)' }}>Background & Problem Statement</h4>
                <p>
                  As agricultural operations expand across fragmented land holdings, machinery becomes the most expensive and least transparent asset. Agribusinesses struggle with high maintenance costs, fuel theft, and operator inefficiencies. Without real-time telemetry, fleet managers have no visibility into engine health, idling times, or field coverage accuracy, leading to unplanned downtime that can jeopardize entire harvest windows.
                </p>
              </div>
            </div>
            <div className="product3-overview-image p3-fade-in-right">
              <div className="p3-capabilities-card">
                <h3>Key Features</h3>
                <ul>
                  <li><span className="p3-check">✓</span> Real-time GPS Tracking</li>
                  <li><span className="p3-check">✓</span> Predictive Maintenance Alerts</li>
                  <li><span className="p3-check">✓</span> Fuel Consumption Analytics</li>
                  <li><span className="p3-check">✓</span> Engine Performance Monitoring</li>
                  <li><span className="p3-check">✓</span> Remote Diagnostics System</li>
                  <li><span className="p3-check">✓</span> Geofencing & Security</li>
                  <li><span className="p3-check">✓</span> Automated Logbooks</li>
                  <li><span className="p3-check">✓</span> Fleet Utilization Reports</li>
                  <li><span className="p3-check">✓</span> Operator Behavior Analysis</li>
                  <li><span className="p3-check">✓</span> CAN bus Integration</li>
</ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Problem & Solution ─────────────────────────────────────────── */}
      <section className="product3-section p3-section-dark-alt">
        <div className="p3-container">
          <div className="p3-text-center p3-mb-60 p3-fade-in">
            <span className="p3-section-badge">Problem & Solution</span>
            <h3 className="p3-section-title">Solving <span>Traditional Farming</span> Inefficiencies</h3>
          </div>
          <div className="p3-table-container p3-fade-in">
            <table className="p3-comparison-table">
              <thead>
                <tr>
                  <th>❗ Blind Fleet Management</th>
                  <th>✅ Connected Machinery Intelligence</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Unplanned Downtime:</strong> Sudden mechanical failures during critical planting or harvest windows.</td>
                  <td><strong>Predictive Alerts:</strong> Real-time CAN-bus monitoring flags engine anomalies before they cause a breakdown.</td>
                </tr>
                <tr>
                  <td><strong>Fuel Inefficiency & Theft:</strong> Undetected fuel siphoning and excessive idling wasting thousands of dollars.</td>
                  <td><strong>Live Fuel Analytics:</strong> High-precision fuel level monitoring and idling alerts via mobile dashboard.</td>
                </tr>
                <tr>
                  <td><strong>Manual Operation Logs:</strong> Inaccurate handwritten logbooks for hours worked and hectares covered.</td>
                  <td><strong>Automated Task Logging:</strong> Precise digital recording of every hectare worked and every engine hour logged.</td>
                </tr>
                <tr>
                  <td><strong>Inefficient Path Planning:</strong> Operators taking non-optimal routes, increasing soil compaction and fuel use.</td>
                  <td><strong>AI Route Optimization:</strong> Optimized path-to-field navigation to minimize travel time and soil damage.</td>
                </tr>
                <tr>
                  <td><strong>Operator Performance Gaps:</strong> Difficulty identifying which operators need training on equipment handling.</td>
                  <td><strong>Behavioral Scorecards:</strong> Data-driven metrics on speeding, harsh braking, and efficient gear selection.</td>
                </tr>
                <tr>
                  <td><strong>Fragmented Multi-Brand Fleet:</strong> Difficulty tracking different machinery brands in one single view.</td>
                  <td><strong>Unified OEM Dashboard:</strong> Single-pane-of-glass visibility for John Deere, Case IH, Fendt, and more.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── Core Functionalities ─────────────────────────────────────── */}
      <section className="product3-section">
        <div className="p3-container">
          <div className="p3-text-center p3-mb-60 p3-fade-in">
            <span className="p3-section-badge">Core Functionalities</span>
            <h3 className="p3-section-title">How We <span>Deliver Value</span></h3>
          </div>
          <div className="product3-features-grid">
            {[
              { icon: "🏎️", title: "1. CAN-bus Streaming", desc: "Live engine telemetry including RPM, coolant temp, and hydraulic pressure data." },
              { icon: "🛡️", title: "2. Geofencing", desc: "Automated anti-theft alerts and immobilization when equipment leaves designated zones." },
              { icon: "📉", title: "3. Efficiency Analytics", desc: "Deep-dive reports on fuel-per-hectare, idling ratios, and operational uptime." },
              { icon: "🔧", title: "4. Remote Diagnostics", desc: "Mechanics can read error codes and engine status remotely to prepare for repairs." },
              { icon: "🗺️", title: "5. Real-time GPS", desc: "Centimeter-level tracking of every asset's current location and historical paths." }
            ].map((feature, idx) => (
              <div className="p3-feature-card p3-fade-in" key={idx}>
                <div className="p3-feature-icon">{feature.icon}</div>
                <h4>{feature.title}</h4>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How It Works (Step-by-Step) ─────────────────────────────────── */}
      <section className="product3-section p3-section-dark-alt">
        <div className="p3-container">
          <div className="p3-text-center p3-mb-60 p3-fade-in">
            <span className="p3-section-badge">Workflow</span>
            <h3 className="p3-section-title">The <span>Process</span> (Step-by-Step)</h3>
          </div>
          <div className="p3-support-grid">
            {[
              "1. Plug-and-play telematics hardware is installed in the machine's OBD-II/J1939 port",
              "2. Real-time mechanical data is streamed via secure LTE-M/NB-IoT channels",
              "3. AI models analyze engine harmonics and fuel patterns to detect anomalies",
              "4. Managers receive push notifications for maintenance needs or security alerts",
              "5. Detailed shift reports provide visibility into operator efficiency and field coverage",
              "6. Fleet data is integrated with farm financial systems for accurate machinery ROI"
            ].map((text, idx) => (
              <div className="p3-support-item p3-fade-in" key={idx}>
                <div className="p3-support-dot"></div>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Technical Architecture ─────────────────────────────────────── */}
      <section className="product3-section">
        <div className="p3-container">
          <div className="p3-vision-container p3-fade-in">
            <div className="p3-vision-header p3-text-center">
              <span className="p3-section-badge">Architecture</span>
              <h3 className="p3-section-title">Technical <span>Architecture</span></h3>
            </div>
            <div className="p3-vision-grid">
              {[
                { icon: "🔌", title: "CAN-bus Gateway", desc: "Hardened IoT interface for J1939 and ISO-Bus protocols." },
                { icon: "📶", title: "Low-Power WAN", desc: "Cellular connectivity (NB-IoT/LTE-M) optimized for rural areas." },
                { icon: "📊", title: "Time-Series Hub", desc: "InfluxDB-backed data lake for billions of telemetry points." },
                { icon: "🧠", title: "Failure Prediction", desc: "ML models trained on millions of engine hours to predict parts wear." },
                { icon: "📱", title: "Control Dashboard", desc: "Cross-platform React UI with live maps and health charts." }
              ].map((item, idx) => (
                <div className="p3-vision-item" key={idx}>
                  <div className="p3-vision-icon">{item.icon}</div>
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
      <section className="product3-section p3-section-dark-alt">
        <div className="p3-container">
          <div className="product3-overview-grid">
            <div className="p3-fade-in-left">
              <span className="p3-section-badge">Technologies</span>
              <h3 className="p3-section-title">Technologies <span>Used</span></h3>
              <div className="p3-solutions-grid" style={{ gridTemplateColumns: '1fr' }}>
                {[
                  "J1939 Machinery Network Protocol",
                  "InfluxDB for Real-time Time-Series Data",
                  "MQTT Broker for High-Frequency Streaming",
                  "Python-based Predictive Maintenance AI",
                  "LTE-M/NB-IoT Rural Network Adapters",
                  "Geofencing & Anti-Theft Logic Engines",
                  "Automated Fuel Siphon Detection AI"
                ].map((tech, idx) => (
                  <div className="p3-solution-item" key={idx} style={{ padding: '15px 24px' }}>
                    <div className="p3-sol-icon">🛠️</div>
                    <p><strong>{tech}</strong></p>
                  </div>
                ))}
              </div>
            </div>
            <div className="p3-fade-in-right">
              <span className="p3-section-badge">Applications</span>
              <h3 className="p3-section-title">Real-World <span>Applications</span></h3>
              <div className="p3-solutions-grid" style={{ gridTemplateColumns: '1fr' }}>
                {[
                  "Large-scale fleet operational visibility",
                  "Heavy machinery rental asset tracking",
                  "Corporate farm preventive maintenance",
                  "Fuel consumption auditing & theft prevention",
                  "Operator training & behavioral feedback",
                  "Logistics optimization for grain transport"
                ].map((app, idx) => (
                  <div className="p3-solution-item" key={idx} style={{ padding: '15px 24px' }}>
                    <div className="p3-sol-icon">🌍</div>
                    <p><strong>{app}</strong></p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Benefits ─────────────────────────────────────── */}
      <section className="product3-section">
        <div className="p3-container">
          <div className="p3-text-center p3-mb-60 p3-fade-in">
            <span className="p3-section-badge">Benefits</span>
            <h3 className="p3-section-title">The <span>Precision</span> Advantage</h3>
          </div>
          <div className="p3-benefits-grid">
            {[
              { icon: "💰", title: "15% Fuel Savings", desc: "Eliminate excessive idling and optimize travel paths." },
              { icon: "🛠️", title: "Reduced Downtime", desc: "Address small issues before they become major failures." },
              { icon: "🛡️", title: "Asset Security", desc: "Total visibility of equipment location and usage 24/7." },
              { icon: "📊", title: "Accurate Costing", desc: "Know the exact mechanical cost of every hectare worked." },
              { icon: "🚜", title: "Fleet Longevity", desc: "Extend the operational life of expensive ag-machinery." }
            ].map((benefit, idx) => (
              <div className="p3-benefit-card p3-fade-in" key={idx}>
                <div className="p3-benefit-icon">{benefit.icon}</div>
                <h4>{benefit.title}</h4>
                <p>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Challenges & Future Scope ───────────────────────────────────── */}
      <section className="product3-section p3-section-dark-alt">
        <div className="p3-container">
          <div className="product3-overview-grid">
            <div className="p3-fade-in-left">
              <span className="p3-section-badge">Challenges</span>
              <h3 className="p3-section-title">Challenges & <span>Limitations</span></h3>
              <ul className="p3-capabilities-card" style={{ listStyle: 'none', padding: '30px' }}>
                {[
                  "Proprietary multi-brand data fragmentation",
                  "Connectivity dead zones in remote fields",
                  "High computational load of real-time streaming",
                  "Physical tamper-proofing of telematics hardware",
                  "Complex integration with legacy equipment"
                ].map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '12px', display: 'flex', gap: '10px' }}>
                    <span style={{ color: '#d32f2f' }}>⚠</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p3-fade-in-right">
              <span className="p3-section-badge">Future Scope</span>
              <h3 className="p3-section-title">The <span>Future</span> of Fleet</h3>
              <ul className="p3-capabilities-card" style={{ listStyle: 'none', padding: '30px' }}>
                {[
                  "Full Vehicle-to-Vehicle (V2V) synchronization",
                  "AI-autonomous fleet orchestration",
                  "Satellite-direct (Starlink) telemetry",
                  "Predictive supply chain parts ordering",
                  "Blockchain-verified mechanical history audits"
                ].map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '12px', display: 'flex', gap: '10px' }}>
                    <span style={{ color: 'var(--p3-primary)' }}>🚀</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Industry Impact ─────────────────────────────────── */}
      <section className="product3-section">
        <div className="p3-container">
          <div className="p3-compliance-card p3-fade-in">
            <h2>Industry Impact</h2>
            <div className="p3-compliance-grid">
              {[
                "🚜 Maximizes agricultural machinery utilization",
                "📉 Significantly reduces carbon footprint of fleet",
                "🏗️ Drives 100% operational transparency",
                "💰 Protects multimillion-dollar capital investments"
              ].map((item, idx) => (
                <div className="p3-compliance-item" key={idx}>{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Conclusion & Final CTA ────────────────────────────────────────── */}
      <section className="p3-final-cta p3-section-dark-alt">
        <div className="p3-container p3-text-center p3-fade-in">
          <span className="p3-section-badge">Conclusion</span>
          <h2>Driving the <span>Connected</span> Fleet</h2>
          <p style={{ marginBottom: '20px' }}>
            Farm Equipment Telematics & Control Systems are transforming machinery from passive tools into intelligent, connected nodes. By merging CAN-bus streaming, predictive AI diagnostics, and real-time GPS tracking, we enable agribusinesses to minimize mechanical waste, maximize uptime, and secure their most valuable capital assets.
          </p>
          <p style={{ marginBottom: '40px' }}>
            This solution is a critical step toward building a fully optimized, future-ready agricultural ecosystem through mechanical intelligence.
          </p>
            
        </div>
      </section>

      <footer className="p3-footer">
        <div className="p3-container">
          <p>&copy; 2026 Techbrain Networks. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Product3;
