import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './product13.css';

const Product13 = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('p13-visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.p13-fade-in, .p13-fade-in-left, .p13-fade-in-right').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="product13-page">
      {/* ─── Navigation ─────────────────────────── */}
      <nav className="product13-nav">
        <div className="p13-container">
          <button onClick={() => navigate('/#products')} className="product13-back-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Home
          </button>
        </div>
      </nav>

      {/* ─── Hero Section ─────────────────────────────────────────── */}
      <section className="product13-hero" style={{ backgroundImage: `url(/images/product_13.png)` }}>
        <div className="p13-container">
          <div className="product13-hero-content p13-fade-in">
            <span className="product13-hero-badge">Automation</span>
            <h1>Smart Greenhouse <br /><span>Automation</span></h1>
            <p className="product13-hero-description">
              Fully automated controlled-environment agriculture system managing temperature, humidity, CO₂, lighting, and nutrients for optimal greenhouse crop production.
            </p>
             
          </div>
        </div>
      </section>

      {/* ─── Introduction & Background ─────────────────────────────────────── */}
      <section className="product13-section">
        <div className="p13-container">
          <div className="product13-overview-grid">
            <div className="product13-overview-text p13-fade-in-left">
              <span className="p13-section-badge">Introduction</span>
              <h3 className="product13-section-title">Perfecting <span>Controlled Environments</span></h3>
              <p>
                Smart Greenhouse Automation is a high-fidelity agricultural solution that uses high-density sensor meshes, PID-loop climate control, and automated nutrient delivery to transform greenhouse management into a perfect, self-regulating ecosystem.
              </p>
              <p>
                It eliminates human error and environmental volatility by maintaining a constant, optimized state for Vapor Pressure Deficit (VPD), PAR levels, and root-zone chemistry.
              </p>
              <div className="product13-highlight-box">
                <h4 style={{ marginBottom: '10px', color: 'var(--p13-primary-dark)' }}>Background & Problem Statement</h4>
                <p>
                  Controlled Environment Agriculture (CEA) offers the highest potential for crop yield, yet it is extremely energy-intensive and sensitive to hardware failure. A single hour of sensor malfunction or climate imbalance can wipe out an entire premium crop. Managing light, CO2, and humidity manually is both inefficient and prone to catastrophic errors. Product 13 engineers the perfect environment, decoupling production from seasonal constraints.
                </p>
              </div>
            </div>
            <div className="product13-overview-image p13-fade-in-right">
              <div className="p13-capabilities-card">
                <h3>Key Features</h3>
                <ul>
                  <li><span className="p13-check">✓</span> VPD-Based Climate Control</li>
                  <li><span className="p13-check">✓</span> Intelligent LED Dimming</li>
                  <li><span className="p13-check">✓</span> Automated CO2 Enrichment</li>
                  <li><span className="p13-check">✓</span> Precise Nutrient Dosing</li>
                  <li><span className="p13-check">✓</span> Energy Analytics Dashboard</li>
                  <li><span className="p13-check">✓</span> Predictive Stress Alerts</li>
                  <li><span className="p13-check">✓</span> Multi-Zone Fertigation</li>
                  <li><span className="p13-check">✓</span> Thermal Screen Management</li>
                  <li><span className="p13-check">✓</span> Humidity & Fan Modulation</li>
                  <li><span className="p13-check">✓</span> Root-Zone Moisture Sync</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Problem & Solution ─────────────────────────────────────────── */}
      <section className="product13-section p13-section-dark-alt">
        <div className="p13-container">
          <div className="p13-text-center p13-mb-60 p13-fade-in">
            <span className="p13-section-badge">Problem & Solution</span>
            <h3 className="p13-section-title">Solving <span>CEA</span> Inefficiencies</h3>
          </div>
          <div className="p13-table-container p13-fade-in">
            <table className="p13-comparison-table">
              <thead>
                <tr>
                  <th>❗ Manual Greenhouse Management</th>
                  <th>✅ Autonomous CEA Ecosystem</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Extreme Energy Waste:</strong> Heaters and lights running at full power regardless of actual plant needs.</td>
                  <td><strong>Dynamic Optimization:</strong> AI scales energy use based on real-time PAR sensors and thermal dynamics.</td>
                </tr>
                <tr>
                  <td><strong>Climate Volatility:</strong> Sudden humidity spikes leading to fungal outbreaks and crop ruin.</td>
                  <td><strong>VPD PID-Control:</strong> Maintaining the perfect moisture-to-temp ratio for maximum transpiration.</td>
                </tr>
                <tr>
                  <td><strong>Inconsistent Dosing:</strong> Human error in mixing nutrient reservoirs leads to pH swings and leaf burn.</td>
                  <td><strong>Precision Fertigation:</strong> Automated injectors maintain EC/pH levels within 0.1 decimal accuracy.</td>
                </tr>
                <tr>
                  <td><strong>CO2 Depletion:</strong> Stagnant air and low CO2 levels during peak photosynthesis slowing growth.</td>
                  <td><strong>Automated Enrichment:</strong> CO2 injection triggered by real-time sensor levels for 2x faster growth.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── Core Functionalities ─────────────────────────────────────── */}
      <section className="product13-section">
        <div className="p13-container">
          <div className="p13-text-center p13-mb-60 p13-fade-in">
            <span className="p13-section-badge">Core Functionalities</span>
            <h3 className="p13-section-title">How We <span>Deliver Value</span></h3>
          </div>
          <div className="product13-features-grid">
            {[
              { icon: "🌡️", title: "1. Climate Engine", desc: "Automated PID regulation of fans, heaters, and foggers based on VPD targets." },
              { icon: "💡", title: "2. PAR Optimization", desc: "Light sensors adjust supplemental LED intensity to maintain constant light levels." },
              { icon: "🧪", title: "3. Auto-Fertigation", desc: "Closed-loop nutrient delivery that modulates EC/pH levels based on real-time feedback." },
              { icon: "🌪️", title: "4. Air Dynamics", desc: "Intelligent horizontal airflow (HAF) control to eliminate micro-climates." },
              { icon: "🔌", title: "5. Energy Nexus", desc: "Machine learning analytics to minimize peak-hour power consumption." }
            ].map((feature, idx) => (
              <div className="p13-feature-card p13-fade-in" key={idx}>
                <div className="p13-feature-icon">{feature.icon}</div>
                <h4>{feature.title}</h4>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Workflow ─────────────────────────────────────── */}
      <section className="product13-section p13-section-dark-alt">
        <div className="p13-container">
          <div className="p13-text-center p13-mb-60 p13-fade-in">
            <span className="p13-section-badge">Workflow</span>
            <h3 className="p13-section-title">The <span>Autonomous</span> Process</h3>
          </div>
          <div className="p13-support-grid">
            {[
              "1. High-density sensor mesh captures VPD, CO2, Light, and Nutrient data every 30 seconds",
              "2. AI Processing Layer calculates the deviation from the crop-specific 'Gold Standard' profile",
              "3. Climate actuators (vents, fans, LEDs) are triggered via local PLC for instant regulation",
              "4. Nutrient injectors balance the reservoir based on plant-uptake feedback loops",
              "5. System flags potential biological stress via computer vision anomaly detection",
              "6. Farm managers monitor the Digital Twin and energy reports via a unified dashboard"
            ].map((text, idx) => (
              <div className="p13-support-item p13-fade-in" key={idx}>
                <div className="p13-support-dot"></div>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Technical Architecture ─────────────────────────────────────── */}
      <section className="product13-section">
        <div className="p13-container">
          <div className="p13-vision-container p13-fade-in">
            <div className="p13-vision-header p13-text-center">
              <span className="p13-section-badge">Architecture</span>
              <h3 className="p13-section-title">Technical <span>Architecture</span></h3>
            </div>
            <div className="p13-vision-grid">
              {[
                { icon: "📟", title: "Control Layer", desc: "Industrial-grade PLC and ESP32 microcontroller arrays." },
                { icon: "📶", title: "Protocol Layer", desc: "MQTT and Modbus for low-latency hardware communication." },
                { icon: "🧠", title: "Inference Engine", desc: "Edge-AI models for real-time climate and stress modeling." },
                { icon: "💾", title: "Time-Series Lake", desc: "InfluxDB for high-frequency sensor data storage." },
                { icon: "📱", title: "Digital Twin", desc: "Real-time 3D dashboard for remote greenhouse management." }
              ].map((item, idx) => (
                <div className="p13-vision-item" key={idx}>
                  <div className="p13-vision-icon">{item.icon}</div>
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
      <section className="product13-section p13-section-dark-alt">
        <div className="p13-container">
          <div className="product13-overview-grid">
            <div className="p13-fade-in-left">
              <span className="p13-section-badge">Technologies</span>
              <h3 className="product13-section-title">Technologies <span>Used</span></h3>
              <div className="p13-solutions-grid" style={{ gridTemplateColumns: '1fr' }}>
                {[
                  "PID-Loop Climate Controllers",
                  "MQTT/Modbus IoT Communication Protocols",
                  "Vapor Pressure Deficit (VPD) Algorithms",
                  "Automated Fertigation & EC/pH Sensing",
                  "Machine Learning Energy Optimization",
                  "High-Density Wireless Sensor Networks",
                  "Cloud-Native Analytics Dashboards"
                ].map((tech, idx) => (
                  <div className="p13-solution-item" key={idx} style={{ padding: '15px 24px' }}>
                    <div className="p13-sol-icon">🛠️</div>
                    <p><strong>{tech}</strong></p>
                  </div>
                ))}
              </div>
            </div>
            <div className="p13-fade-in-right">
              <span className="p13-section-badge">Applications</span>
              <h3 className="product13-section-title">Real-World <span>Applications</span></h3>
              <div className="p13-solutions-grid" style={{ gridTemplateColumns: '1fr' }}>
                {[
                  "High-value medicinal cannabis cultivation",
                  "Year-round vertical vegetable production",
                  "Premium berry and soft fruit greenhouses",
                  "Nursery and ornamental plant automation",
                  "Research and genetic development centers",
                  "Industrial-scale organic tomato production"
                ].map((app, idx) => (
                  <div className="p13-solution-item" key={idx} style={{ padding: '15px 24px' }}>
                    <div className="p13-sol-icon">🌍</div>
                    <p><strong>{app}</strong></p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Benefits ─────────────────────────────────────── */}
      <section className="product13-section">
        <div className="p13-container">
          <div className="p13-text-center p13-mb-60 p13-fade-in">
            <span className="p13-section-badge">Benefits</span>
            <h3 className="p13-section-title">The <span>Precision</span> Advantage</h3>
          </div>
          <div className="p13-benefits-grid">
            {[
              { icon: "📈", title: "Yield Maximization", desc: "Achieve up to 40% higher productivity through perfect climate sync." },
              { icon: "⚡", title: "Energy Efficiency", desc: "Reduce electricity and heating costs by 30% via AI optimization." },
              { icon: "💎", title: "Total Consistency", desc: "Ensure every harvest meets the same premium quality standards." },
              { icon: "🛡️", title: "Risk Mitigation", desc: "Protect crops from catastrophic climate failure with 24/7 automation." },
              { icon: "🔬", title: "Data-Driven R&D", desc: "Unlock deep insights into plant genetics and growth potential." }
            ].map((benefit, idx) => (
              <div className="p13-benefit-card p13-fade-in" key={idx}>
                <div className="p13-benefit-icon">{benefit.icon}</div>
                <h4>{benefit.title}</h4>
                <p>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Challenges & Future Scope ───────────────────────────────────── */}
      <section className="product13-section p13-section-dark-alt">
        <div className="p13-container">
          <div className="product13-overview-grid">
            <div className="p13-fade-in-left">
              <span className="p13-section-badge">Challenges</span>
              <h3 className="product13-section-title">Challenges & <span>Limitations</span></h3>
              <ul className="p13-capabilities-card" style={{ listStyle: 'none', padding: '30px' }}>
                {[
                  "Complexity of multi-sensor data calibration",
                  "High initial capital expenditure for hardware",
                  "Interpreting complex physiological plant feedback",
                  "Ensuring system uptime in high-humidity zones",
                  "Integrating with legacy greenhouse structures"
                ].map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '12px', display: 'flex', gap: '10px' }}>
                    <span style={{ color: '#d32f2f' }}>⚠</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p13-fade-in-right">
              <span className="p13-section-badge">Future Scope</span>
              <h3 className="product13-section-title">The <span>Future</span> of CEA</h3>
              <ul className="p13-capabilities-card" style={{ listStyle: 'none', padding: '30px' }}>
                {[
                  "Fully autonomous plant-level robotic pruning",
                  "Holographic Digital Twin interfaces for managers",
                  "Predictive biological stress-sensing using AI",
                  "Closed-loop zero-waste nutrient recycling",
                  "Solar-integrated 'Energy-Neutral' greenhouse cores"
                ].map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '12px', display: 'flex', gap: '10px' }}>
                    <span style={{ color: 'var(--p13-primary)' }}>🚀</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Industry Impact ─────────────────────────────────── */}
      <section className="product13-section">
        <div className="p13-container">
          <div className="p13-compliance-card p13-fade-in">
            <h2>Industry Impact</h2>
            <div className="p13-compliance-grid">
              {[
                "🌍 Enabling year-round local food production anywhere",
                "📈 Revolutionizing the economics of vertical farming",
                "🏗️ Setting the standard for data-driven cultivation",
                "✨ Empowering producers with 100% environment control"
              ].map((item, idx) => (
                <div className="p13-compliance-item" key={idx}>{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Conclusion & Final CTA ────────────────────────────────────────── */}
      <section className="p13-final-cta p13-section-dark-alt">
        <div className="p13-container p13-text-center p13-fade-in">
          <span className="p13-section-badge">Conclusion</span>
          <h2>The <span>Gold Standard</span> of Controlled Environment Agriculture</h2>
          <p style={{ marginBottom: '20px' }}>
            Smart Greenhouse Automation is transforming greenhouses from simple shelters into high-precision, data-driven production factories. By merging industrial PLC control with advanced AI climate modeling, we enable producers to achieve unprecedented levels of quality, consistency, and ROI.
          </p>
          <p style={{ marginBottom: '40px' }}>
            This solution is the critical step toward building a truly sustainable, localized, and future-ready agricultural ecosystem through climate intelligence.
          </p>
           
        </div>
      </section>

      <footer className="p13-footer">
        <div className="p13-container">
          <p>&copy; 2026 Techbrain Networks. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Product13;
