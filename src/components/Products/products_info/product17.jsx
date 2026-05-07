import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './product17.css';

const Product17 = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('p17-visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.p17-fade-in, .p17-fade-in-left, .p17-fade-in-right').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="product17-page">
      {/* ─── Navigation ─────────────────────────── */}
      <nav className="product17-nav">
        <div className="p17-container">
          <button onClick={() => navigate('/#products')} className="product17-back-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Home
          </button>
        </div>
      </nav>

      {/* ─── Hero Section ─────────────────────────────────────────── */}
      <section className="product17-hero" style={{ backgroundImage: `url(/images/product_17.png)` }}>
        <div className="p17-container">
          <div className="product17-hero-content p17-fade-in">
            <span className="product17-hero-badge">Robotics</span>
            <h1>Agricultural Robotics & <br /><span>Automation</span></h1>
            <p className="product17-hero-description">
              Next-generation autonomous field robots for precision weeding, planting, harvesting, and crop maintenance, reducing labor dependency and chemical use.
            </p>
             
          </div>
        </div>
      </section>

      {/* ─── Introduction & Background ─────────────────────────────────────── */}
      <section className="product17-section">
        <div className="p17-container">
          <div className="product17-overview-grid">
            <div className="product17-overview-text p17-fade-in-left">
              <span className="p17-section-badge">Introduction</span>
              <h3 className="product17-section-title">The <span>Autonomous Field</span></h3>
              <p>
                Agricultural Robotics & Automation is a multi-modal robotic platform that replaces heavy, soil-compacting machinery with swarms of lightweight, autonomous field agents.
              </p>
              <p>
                These robots utilize centimeter-accurate RTK-GPS and computer vision to perform individual plant-level interventions, from laser-weeding to selective harvesting.
              </p>
              <div className="product17-highlight-box">
                <h4 style={{ marginBottom: '10px', color: 'var(--p17-primary-dark)' }}>Background & Problem Statement</h4>
                <p>
                  Global agricultural labor shortages and the environmental impact of broad-spectrum herbicides are the industry's biggest hurdles. Traditional tractors compact soil and lack the precision for individual plant care. Product 17 solves this by providing 24/7 autonomous labor that targets weeds and pests with surgical precision, drastically reducing chemical dependency and operational costs.
                </p>
              </div>
            </div>
            <div className="product17-overview-image p17-fade-in-right">
              <div className="p17-capabilities-card">
                <h3>Key Features</h3>
                <ul>
                  <li><span className="p17-check">✓</span> RTK-GPS Autonomous Navigation</li>
                  <li><span className="p17-check">✓</span> Laser-Based Weed Control</li>
                  <li><span className="p17-check">✓</span> Precision Seed Placement</li>
                  <li><span className="p17-check">✓</span> 3D Vision Harvest Grippers</li>
                  <li><span className="p17-check">✓</span> Soil Health Mapping Swarms</li>
                  <li><span className="p17-check">✓</span> Solar-Powered Endurance</li>
                  <li><span className="p17-check">✓</span> Obstacle Avoidance AI</li>
                  <li><span className="p17-check">✓</span> Individual Plant Telemetry</li>
                  <li><span className="p17-check">✓</span> Multi-Robot Swarm Logic</li>
                  <li><span className="p17-check">✓</span> Night-Ops Thermal Vision</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Problem & Solution ─────────────────────────────────────────── */}
      <section className="product17-section p17-section-dark-alt">
        <div className="p17-container">
          <div className="p17-text-center p17-mb-60 p17-fade-in">
            <span className="p17-section-badge">Problem & Solution</span>
            <h3 className="p17-section-title">Solving <span>Labor</span> & Chemical Risks</h3>
          </div>
          <div className="p17-table-container p17-fade-in">
            <table className="p17-comparison-table">
              <thead>
                <tr>
                  <th>❗ Legacy Mechanized Farming</th>
                  <th>✅ Autonomous Robotic Swarms</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Soil Compaction:</strong> 20-ton tractors crushing soil structure and reducing root oxygen.</td>
                  <td><strong>Ultra-Lightweight agents:</strong> Small robots that minimize ground pressure and preserve soil health.</td>
                </tr>
                <tr>
                  <td><strong>Chemical Blanket Spray:</strong> Spraying 100% of the field to kill 5% weed coverage.</td>
                  <td><strong>See-and-Spray:</strong> Computer vision targeting individual weeds with 99% less herbicide use.</td>
                </tr>
                <tr>
                  <td><strong>Labor Scarcity:</strong> Struggling to find seasonal workers for planting and harvesting.</td>
                  <td><strong>24/7 Autonomy:</strong> Robotic labor that works day and night without fatigue or safety risks.</td>
                </tr>
                <tr>
                  <td><strong>Coarse Precision:</strong> Interventions made at the field or sector level.</td>
                  <td><strong>Plant-Level Care:</strong> Every single plant is monitored and treated as an individual unit.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── Core Functionalities ─────────────────────────────────────── */}
      <section className="product17-section">
        <div className="p17-container">
          <div className="p17-text-center p17-mb-60 p17-fade-in">
            <span className="p17-section-badge">Core Functionalities</span>
            <h3 className="p17-section-title">How We <span>Automate</span></h3>
          </div>
          <div className="product17-features-grid">
            {[
              { icon: "🛰️", title: "1. RTK-GPS Pilot", desc: "Centimeter-accurate autonomous navigation with dynamic path planning." },
              { icon: "👁️", title: "2. Perception AI", desc: "Deep learning models for distinguishing crops from weeds in real-time." },
              { icon: "🔦", title: "3. Laser Weeding", desc: "High-energy thermal weeding that eliminates chemicals entirely." },
              { icon: "🦾", title: "4. Harvest Grippers", desc: "Soft-touch robotic arms for selective picking of delicate fruits and vegetables." },
              { icon: "🔋", title: "5. Energy Nexus", desc: "Solar-charging stations for zero-emission, perpetual field operations." }
            ].map((feature, idx) => (
              <div className="p17-feature-card p17-fade-in" key={idx}>
                <div className="p17-feature-icon">{feature.icon}</div>
                <h4>{feature.title}</h4>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Workflow ─────────────────────────────────────── */}
      <section className="product17-section p17-section-dark-alt">
        <div className="p17-container">
          <div className="p17-text-center p17-mb-60 p17-fade-in">
            <span className="p17-section-badge">Workflow</span>
            <h3 className="p17-section-title">The <span>Autonomous</span> Cycle</h3>
          </div>
          <div className="p17-support-grid">
            {[
              "1. Field boundaries and obstacles are mapped via aerial drone survey",
              "2. Robotic swarms are deployed from the solar-charging hub",
              "3. Perception AI identifies individual plants and weeds during navigation",
              "4. Targeted interventions (weeding, spraying, or picking) are executed",
              "5. Robots return to the hub for automated charging and data offloading",
              "6. Cloud dashboard provides real-time progress and plant health heatmaps"
            ].map((text, idx) => (
              <div className="p17-support-item p17-fade-in" key={idx}>
                <div className="p17-support-dot"></div>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Technical Architecture ─────────────────────────────────────── */}
      <section className="product17-section">
        <div className="p17-container">
          <div className="p17-vision-container p17-fade-in">
            <div className="p17-vision-header p17-text-center">
              <span className="p17-section-badge">Architecture</span>
              <h3 className="p17-section-title">Technical <span>Architecture</span></h3>
            </div>
            <div className="p17-vision-grid">
              {[
                { icon: "🤖", title: "Robotic Core", desc: "ROS2-based navigation and actuator control system." },
                { icon: "🧠", title: "Neural Edge", desc: "Dedicated GPU acceleration for real-time vision processing." },
                { icon: "📶", title: "V2X Mesh", desc: "Low-latency robot-to-robot and robot-to-hub communication." },
                { icon: "🔋", title: "BMS Suite", desc: "Intelligent battery management and solar-sync optimization." },
                { icon: "📱", title: "Fleet Portal", desc: "Unified control center for managing hundreds of autonomous agents." }
              ].map((item, idx) => (
                <div className="p17-vision-item" key={idx}>
                  <div className="p17-vision-icon">{item.icon}</div>
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
      <section className="product17-section p17-section-dark-alt">
        <div className="p17-container">
          <div className="product17-overview-grid">
            <div className="p17-fade-in-left">
              <span className="p17-section-badge">Technologies</span>
              <h3 className="product17-section-title">Technologies <span>Used</span></h3>
              <div className="p17-solutions-grid" style={{ gridTemplateColumns: '1fr' }}>
                {[
                  "ROS2 (Robot Operating System) Foundation",
                  "RTK-GPS Centimeter Precision Navigation",
                  "Deep Learning Computer Vision (YOLO/ResNet)",
                  "LiDAR & Ultrasonic Obstacle Avoidance",
                  "Soft-Touch Robotic Gripper Actuators",
                  "V2X Swarm Communication Protocols",
                  "Edge-AI Dedicated Hardware (Jetson/Coral)"
                ].map((tech, idx) => (
                  <div className="p17-solution-item" key={idx} style={{ padding: '15px 24px' }}>
                    <div className="p17-sol-icon">🛠️</div>
                    <p><strong>{tech}</strong></p>
                  </div>
                ))}
              </div>
            </div>
            <div className="p17-fade-in-right">
              <span className="p17-section-badge">Applications</span>
              <h3 className="product17-section-title">Real-World <span>Applications</span></h3>
              <div className="p17-solutions-grid" style={{ gridTemplateColumns: '1fr' }}>
                {[
                  "Selective chemical-free laser weeding",
                  "Autonomous high-density planting",
                  "Delicate fruit and vegetable harvesting",
                  "Soil health and compaction mapping",
                  "Precision targeted nutrient spraying",
                  "24/7 autonomous security and monitoring"
                ].map((app, idx) => (
                  <div className="p17-solution-item" key={idx} style={{ padding: '15px 24px' }}>
                    <div className="p17-sol-icon">🌍</div>
                    <p><strong>{app}</strong></p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Benefits ─────────────────────────────────────── */}
      <section className="product17-section">
        <div className="p17-container">
          <div className="p17-text-center p17-mb-60 p17-fade-in">
            <span className="p17-section-badge">Benefits</span>
            <h3 className="p17-section-title">The <span>Precision</span> Advantage</h3>
          </div>
          <div className="p17-benefits-grid">
            {[
              { icon: "📉", title: "90% Less Chemicals", desc: "Transition to chemical-free weeding with laser technology." },
              { icon: "💰", title: "Lower Labor Cost", desc: "Reduce seasonal labor expenses by up to 70% per hectare." },
              { icon: "🌱", title: "Soil Regeneration", desc: "Eliminate compaction to allow soil to breathe and hold water." },
              { icon: "📈", title: "Higher Yields", desc: "Minimize crop competition from weeds and optimize harvest timing." },
              { icon: "🌍", title: "Zero Emission", desc: "Replace diesel tractors with 100% electric, solar-powered robots." }
            ].map((benefit, idx) => (
              <div className="p17-benefit-card p17-fade-in" key={idx}>
                <div className="p17-benefit-icon">{benefit.icon}</div>
                <h4>{benefit.title}</h4>
                <p>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Challenges & Future Scope ───────────────────────────────────── */}
      <section className="product17-section p17-section-dark-alt">
        <div className="p17-container">
          <div className="product17-overview-grid">
            <div className="p17-fade-in-left">
              <span className="p17-section-badge">Challenges</span>
              <h3 className="product17-section-title">Challenges & <span>Limitations</span></h3>
              <ul className="p17-capabilities-card" style={{ listStyle: 'none', padding: '30px' }}>
                {[
                  "Navigating extremely muddy or uneven terrain",
                  "Hardware maintenance in dusty field conditions",
                  "Regulatory hurdles for autonomous heavy machinery",
                  "Varying connectivity in remote field zones",
                  "High initial cost for multi-robot swarm deployment"
                ].map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '12px', display: 'flex', gap: '10px' }}>
                    <span style={{ color: '#d32f2f' }}>⚠</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p17-fade-in-right">
              <span className="p17-section-badge">Future Scope</span>
              <h3 className="product17-section-title">The <span>Future</span> of Ag-Robotics</h3>
              <ul className="p17-capabilities-card" style={{ listStyle: 'none', padding: '30px' }}>
                {[
                  "Fully autonomous universal multi-tool chassis",
                  "AI-driven automated plant-level breeding",
                  "Holographic swarm-control interfaces",
                  "Zero-latency 6G robotic mesh networks",
                  "Self-repairing and modular robotic agents"
                ].map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '12px', display: 'flex', gap: '10px' }}>
                    <span style={{ color: 'var(--p17-primary)' }}>🚀</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Industry Impact ─────────────────────────────────── */}
      <section className="product17-section">
        <div className="p17-container">
          <div className="p17-compliance-card p17-fade-in">
            <h2>Industry Impact</h2>
            <div className="p17-compliance-grid">
              {[
                "🌍 Eradicating agricultural labor dependency",
                "📈 Revolutionizing the economics of organic farming",
                "🏗️ Setting the benchmark for carbon-neutral agriculture",
                "✨ Empowering producers with plant-level robotic labor"
              ].map((item, idx) => (
                <div className="p17-compliance-item" key={idx}>{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Conclusion & Final CTA ────────────────────────────────────────── */}
      <section className="p17-final-cta p17-section-dark-alt">
        <div className="p17-container p17-text-center p17-fade-in">
          <span className="p17-section-badge">Conclusion</span>
          <h2>The <span>Autonomous Revolution</span> is Here</h2>
          <p style={{ marginBottom: '20px' }}>
            Agricultural Robotics & Automation is transforming the field from a space of manual labor into a high-precision, autonomous ecosystem. By merging ROS2 robotics with advanced AI perception, we enable producers to achieve unprecedented levels of efficiency, sustainability, and ROI.
          </p>
          <p style={{ marginBottom: '40px' }}>
            This solution is the critical step toward building a truly resilient, labor-independent, and future-ready agricultural industry through robotic intelligence.
          </p>
           
        </div>
      </section>

      <footer className="p17-footer">
        <div className="p17-container">
          <p>&copy; 2026 Techbrain Networks. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Product17;
