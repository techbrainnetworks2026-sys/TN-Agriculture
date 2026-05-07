import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './product2.css';

const Product2 = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('p2-visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.p2-fade-in, .p2-fade-in-left, .p2-fade-in-right').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="product2-page">
      {/* ─── Navigation ─────────────────────────── */}
      <nav className="product2-nav">
        <div className="p2-container">
          <button onClick={() => navigate('/#products')} className="product2-back-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Home
          </button>
        </div>
      </nav>

      {/* ─── Hero Section ─────────────────────────────────────────── */}
      <section className="product2-hero" style={{ backgroundImage: `url(/images/product_02.png)` }}>
        <div className="p2-container">
          <div className="product2-hero-content p2-fade-in">
            <span className="product2-hero-badge">IoT & Drone Intelligence</span>
            <h1>Agricultural Drones Control <br /><span>Systems</span></h1>
            <p className="product2-hero-description">
              Intelligent autonomous drone fleet management for aerial crop surveillance, precision spraying, multispectral imaging, and real-time field analytics.
            </p>
            
          </div>
        </div>
      </section>

      {/* ─── Introduction & Background ─────────────────────────────────────── */}
      <section className="product2-section">
        <div className="p2-container">
          <div className="product2-overview-grid">
            <div className="product2-overview-text p2-fade-in-left">
              <span className="p2-section-badge">Introduction</span>
              <h3 className="p2-section-title">Empowering <span>Modern Agriculture</span></h3>
              <p>
                Agricultural Drones Control Systems is a next-generation agricultural solution that uses advanced aerial robotics, computer vision, and IoT technologies to transform field surveillance and crop management into a highly efficient, automated process.
              </p>
              <p>
                It empowers operators to cover large areas quickly, providing high-resolution multispectral data for precise crop health assessment and targeted spray application.
              </p>
              <div className="product2-highlight-box">
                <h4 style={{ marginBottom: '10px', color: 'var(--p2-primary-dark)' }}>Background & Problem Statement</h4>
                <p>
                  Manual field scouting is a labor-intensive bottleneck that often misses canopy-level stress until it is too late. Furthermore, heavy ground sprayers cause significant soil compaction and crop damage while wasting up to 30% of chemicals through blanket application. The Agricultural Drones Control System decouples crop protection and surveillance from the ground, providing a high-resolution, zero-touch alternative that operates with centimeter-level precision.
                </p>
              </div>
            </div>
            <div className="product2-overview-image p2-fade-in-right">
              <div className="p2-capabilities-card">
                <h3>Key Features</h3>
                <ul>
                  <li><span className="p2-check">✓</span> Autonomous Flight Planning</li>
                  <li><span className="p2-check">✓</span> Multispectral Crop Imaging</li>
                  <li><span className="p2-check">✓</span> Precision Aerial Spraying</li>
                  <li><span className="p2-check">✓</span> Real-time Field Surveillance</li>
                  <li><span className="p2-check">✓</span> Automated Fleet Management</li>
                  <li><span className="p2-check">✓</span> 3D Field Mapping</li>
                  <li><span className="p2-check">✓</span> Crop Stress Detection</li>
                  <li><span className="p2-check">✓</span> Swarm Intelligence Control</li>
                  <li><span className="p2-check">✓</span> Automated Charging Docks</li>
                  <li><span className="p2-check">✓</span> High-Resolution Mapping</li>
</ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Problem & Solution ─────────────────────────────────────────── */}
      <section className="product2-section p2-section-dark-alt">
        <div className="p2-container">
          <div className="p2-text-center p2-mb-60 p2-fade-in">
            <span className="p2-section-badge">Problem & Solution</span>
            <h3 className="p2-section-title">Solving <span>Traditional Farming</span> Inefficiencies</h3>
          </div>
          <div className="p2-table-container p2-fade-in">
            <table className="p2-comparison-table">
              <thead>
                <tr>
                  <th>❗ Ground-Level Limitations</th>
                  <th>✅ Aerial Robotics Intelligence</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Subjective Manual Scouting:</strong> Human error and limited coverage lead to undetected pest and nutrient issues.</td>
                  <td><strong>AI-Driven Multispectral Maps:</strong> Drones capture spectral indices (NDVI/EVI) to detect stress before it is visible.</td>
                </tr>
                <tr>
                  <td><strong>Soil Compaction:</strong> Heavy machinery damages soil structure and restricts root growth over time.</td>
                  <td><strong>Zero-Touch Application:</strong> Aerial spraying eliminates all mechanical contact with the soil and crops.</td>
                </tr>
                <tr>
                  <td><strong>Inaccurate Blanket Spraying:</strong> Chemicals applied uniformly regardless of localized infestation levels.</td>
                  <td><strong>Targeted Spot-Spraying:</strong> Drones apply precise dosages only to specific 'hotspots' identified by AI.</td>
                </tr>
                <tr>
                  <td><strong>Inaccessible Terrain:</strong> Steep slopes or muddy fields prevent ground machinery from operating.</td>
                  <td><strong>Terrain-Agnostic Operations:</strong> Flight systems navigate complex topography with ultrasonic altitude hold.</td>
                </tr>
                <tr>
                  <td><strong>Drift & Chemical Waste:</strong> High-pressure ground nozzles often lead to excessive chemical drift.</td>
                  <td><strong>Atomized Precision Nozzles:</strong> Low-altitude, targeted droplet application minimizes drift and waste.</td>
                </tr>
                <tr>
                  <td><strong>Slow Scouting Frequency:</strong> Weeks pass between manual field checks, allowing diseases to spread.</td>
                  <td><strong>Rapid Fleet Deployment:</strong> Cover 100+ hectares in minutes with autonomous swarm missions.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── Core Functionalities ─────────────────────────────────────── */}
      <section className="product2-section">
        <div className="p2-container">
          <div className="p2-text-center p2-mb-60 p2-fade-in">
            <span className="p2-section-badge">Core Functionalities</span>
            <h3 className="p2-section-title">How We <span>Deliver Value</span></h3>
          </div>
          <div className="product2-features-grid">
            {[
              { icon: "🛰️", title: "1. Mission Planning", desc: "Waypoints, terrain-following, and obstacle avoidance for fully autonomous flight paths." },
              { icon: "📸", title: "2. Multispectral Analysis", desc: "Simultaneous capture of RGB, Near-Infrared, and Red-Edge bands for health mapping." },
              { icon: "💧", title: "3. Precision Spraying", desc: "Dynamic flow-rate control linked to prescription maps for spot-treatment application." },
              { icon: "🐝", title: "4. Swarm Orchestration", desc: "Control multiple drones from a single interface to cover vast acreage in parallel." },
              { icon: "🖥️", title: "5. Cloud Photogrammetry", desc: "Automated stitching of high-res orthomosaics and 3D elevation models in the cloud." }
            ].map((feature, idx) => (
              <div className="p2-feature-card p2-fade-in" key={idx}>
                <div className="p2-feature-icon">{feature.icon}</div>
                <h4>{feature.title}</h4>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How It Works (Step-by-Step) ─────────────────────────────────── */}
      <section className="product2-section p2-section-dark-alt">
        <div className="p2-container">
          <div className="p2-text-center p2-mb-60 p2-fade-in">
            <span className="p2-section-badge">Workflow</span>
            <h3 className="p2-section-title">The <span>Process</span> (Step-by-Step)</h3>
          </div>
          <div className="p2-support-grid">
            {[
              "1. Define the mission area and flight parameters in the Ground Control Station",
              "2. Drone fleet performs autonomous takeoff and multispectral field scanning",
              "3. On-board AI identifies stress zones or pest infestations in real-time",
              "4. Flight data is uploaded to the cloud for 2D/3D map generation",
              "5. System generates precision spray paths based on detected anomaly locations",
              "6. Spray drones deploy automatically to apply targeted treatments with zero-waste"
            ].map((text, idx) => (
              <div className="p2-support-item p2-fade-in" key={idx}>
                <div className="p2-support-dot"></div>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Technical Architecture ─────────────────────────────────────── */}
      <section className="product2-section">
        <div className="p2-container">
          <div className="p2-vision-container p2-fade-in">
            <div className="p2-vision-header p2-text-center">
              <span className="p2-section-badge">Architecture</span>
              <h3 className="p2-section-title">Technical <span>Architecture</span></h3>
            </div>
            <div className="p2-vision-grid">
              {[
                { icon: "🛸", title: "Flight Hardware", desc: "Carbon-fiber UAVs with RTK-GPS for cm-level precision." },
                { icon: "📶", title: "MAVLink Protocol", desc: "Secure telemetry and command-and-control communication." },
                { icon: "⚡", title: "Edge Processing", desc: "NVIDIA Jetson units for on-board computer vision." },
                { icon: "☁️", title: "Photogrammetry Hub", desc: "Server-side engines for processing terabytes of image data." },
                { icon: "🔌", title: "ISO-Bus Link", desc: "Integration with ground-based sprayers for hybrid workflows." }
              ].map((item, idx) => (
                <div className="p2-vision-item" key={idx}>
                  <div className="p2-vision-icon">{item.icon}</div>
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
      <section className="product2-section p2-section-dark-alt">
        <div className="p2-container">
          <div className="product2-overview-grid">
            <div className="p2-fade-in-left">
              <span className="p2-section-badge">Technologies</span>
              <h3 className="p2-section-title">Technologies <span>Used</span></h3>
              <div className="p2-solutions-grid" style={{ gridTemplateColumns: '1fr' }}>
                {[
                  "PX4 & ArduPilot Flight Control Stacks",
                  "OpenCV for Real-time Anomaly Detection",
                  "MAVSDK for Cross-Platform Fleet Control",
                  "RTK-GNSS (Real-Time Kinematic) Positioning",
                  "LiDAR for Obstacle Avoidance & Terrain Hold",
                  "5G-Enabled High-Bandwidth Telemetry",
                  "Proprietary Spray-Nozzle Flow Controllers"
                ].map((tech, idx) => (
                  <div className="p2-solution-item" key={idx} style={{ padding: '15px 24px' }}>
                    <div className="p2-sol-icon">🛠️</div>
                    <p><strong>{tech}</strong></p>
                  </div>
                ))}
              </div>
            </div>
            <div className="p2-fade-in-right">
              <span className="p2-section-badge">Applications</span>
              <h3 className="p2-section-title">Real-World <span>Applications</span></h3>
              <div className="p2-solutions-grid" style={{ gridTemplateColumns: '1fr' }}>
                {[
                  "High-resolution multispectral health mapping",
                  "Spot-treatment for pests & fungus outbreaks",
                  "Livestock counting & tracking in remote pastures",
                  "3D terrain modeling for irrigation planning",
                  "Disaster assessment after flood or fire events",
                  "Post-harvest stand-count & yield estimation"
                ].map((app, idx) => (
                  <div className="p2-solution-item" key={idx} style={{ padding: '15px 24px' }}>
                    <div className="p2-sol-icon">🌍</div>
                    <p><strong>{app}</strong></p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Benefits ─────────────────────────────────────── */}
      <section className="product2-section">
        <div className="p2-container">
          <div className="p2-text-center p2-mb-60 p2-fade-in">
            <span className="p2-section-badge">Benefits</span>
            <h3 className="p2-section-title">The <span>Precision</span> Advantage</h3>
          </div>
          <div className="p2-benefits-grid">
            {[
              { icon: "⚡", title: "90% Faster Scouting", desc: "Cover more ground in a single flight than a week of walking." },
              { icon: "💎", title: "Zero Soil Compaction", desc: "Protect your soil structure by staying off the field." },
              { icon: "📉", title: "30% Chemical Savings", desc: "Apply products only where required by the crop." },
              { icon: "📊", title: "Unmatched Granularity", desc: "See individual plants and leaves from 100ft altitude." },
              { icon: "🛡️", title: "Worker Safety", desc: "Eliminate human exposure to chemical spraying hazards." }
            ].map((benefit, idx) => (
              <div className="p2-benefit-card p2-fade-in" key={idx}>
                <div className="p2-benefit-icon">{benefit.icon}</div>
                <h4>{benefit.title}</h4>
                <p>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Challenges & Future Scope ───────────────────────────────────── */}
      <section className="product2-section p2-section-dark-alt">
        <div className="p2-container">
          <div className="product2-overview-grid">
            <div className="p2-fade-in-left">
              <span className="p2-section-badge">Challenges</span>
              <h3 className="p2-section-title">Challenges & <span>Limitations</span></h3>
              <ul className="p2-capabilities-card" style={{ listStyle: 'none', padding: '30px' }}>
                {[
                  "Strict BVLOS (Beyond Visual Line of Sight) regulations",
                  "Limited battery life & flight endurance",
                  "Vulnerability to high winds & weather conditions",
                  "Data processing latency for high-res imagery",
                  "Payload weight limits for large-scale spraying"
                ].map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '12px', display: 'flex', gap: '10px' }}>
                    <span style={{ color: '#d32f2f' }}>⚠</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p2-fade-in-right">
              <span className="p2-section-badge">Future Scope</span>
              <h3 className="p2-section-title">The <span>Future</span> of Flight</h3>
              <ul className="p2-capabilities-card" style={{ listStyle: 'none', padding: '30px' }}>
                {[
                  "Hydrogen-powered heavy-lift spray swarms",
                  "Solar-rechargeable 24/7 surveillance drones",
                  "Satellite-linked global drone control",
                  "Automated pest-neutralization lasers",
                  "Direct machine-to-drone request protocols"
                ].map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '12px', display: 'flex', gap: '10px' }}>
                    <span style={{ color: 'var(--p2-primary)' }}>🚀</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Industry Impact ─────────────────────────────────── */}
      <section className="product2-section">
        <div className="p2-container">
          <div className="p2-compliance-card p2-fade-in">
            <h2>Industry Impact</h2>
            <div className="p2-compliance-grid">
              {[
                "🦅 Accelerates field scouting by 10x",
                "📉 Minimizes chemical runoff into ecosystems",
                "🏗️ Creates high-resolution 3D ag-datasets",
                "🛡️ Protects soil structure for future generations"
              ].map((item, idx) => (
                <div className="p2-compliance-item" key={idx}>{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Conclusion & Final CTA ────────────────────────────────────────── */}
      <section className="p2-final-cta p2-section-dark-alt">
        <div className="p2-container p2-text-center p2-fade-in">
          <span className="p2-section-badge">Conclusion</span>
          <h2>Elevating Agriculture to <span>New Heights</span></h2>
          <p style={{ marginBottom: '20px' }}>
            Agricultural Drones Control Systems are redefining the boundaries of field management. By merging autonomous flight, multispectral computer vision, and precision aerial application, it empowers the next generation of farmers to monitor and protect their crops with unmatched speed and granularity.
          </p>
          <p style={{ marginBottom: '40px' }}>
            This solution is the final step in moving away from uniform, ground-based interventions toward a truly three-dimensional, data-driven agricultural ecosystem.
          </p>
            
        </div>
      </section>

      <footer className="p2-footer">
        <div className="p2-container">
          <p>&copy; 2026 Techbrain Networks. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Product2;
