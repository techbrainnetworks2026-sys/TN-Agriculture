import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './product5.css';

const Product5 = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('p5-visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.p5-fade-in, .p5-fade-in-left, .p5-fade-in-right').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="product5-page">
      {/* ─── Navigation ─────────────────────────── */}
      <nav className="product5-nav">
        <div className="p5-container">
          <button onClick={() => navigate('/#products')} className="product5-back-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Home
          </button>
        </div>
      </nav>

      {/* ─── Hero Section ─────────────────────────────────────────── */}
      <section className="product5-hero" style={{ backgroundImage: `url(/images/product_05.png)` }}>
        <div className="p5-container">
          <div className="product5-hero-content p5-fade-in">
            <span className="product5-hero-badge">AI Vision & Pest Control</span>
            <h1>Pest & Disease Monitoring <br /><span>Software</span></h1>
            <p className="product5-hero-description">
              AI-powered early detection system for crop diseases and pest outbreaks using computer vision, satellite imagery, and predictive outbreak modeling.
            </p>
             
          </div>
        </div>
      </section>

      {/* ─── Introduction & Background ─────────────────────────────────────── */}
      <section className="product5-section">
        <div className="p5-container">
          <div className="product5-overview-grid">
            <div className="product5-overview-text p5-fade-in-left">
              <span className="p5-section-badge">Introduction</span>
              <h3 className="p5-section-title">Empowering <span>Modern Agriculture</span></h3>
              <p>
                Pest & Disease Monitoring Software is a next-generation agricultural solution that uses AI-powered computer vision, IoT sensors, and satellite imagery to transform crop protection into a proactive, data-driven process.
              </p>
              <p>
                It enables early intervention by using AI computer vision to identify specific pest species and disease symptoms before they cause significant yield loss.
              </p>
              <div className="product5-highlight-box">
                <h4 style={{ marginBottom: '10px', color: 'var(--p5-primary-dark)' }}>Background & Problem Statement</h4>
                <p>
                  Pests and diseases cause up to 40% of global crop losses annually, threatening food security and farmer livelihoods. Traditional scouting is a manual, infrequent process that often reacts only after visible damage has spread across entire fields. This delay leads to "panic spraying"—excessive chemical applications that increase costs and environmental toxicity without effectively targeting the root cause. Product 5 provides 24/7 automated biological surveillance to detect threats at the first sign of emergence.
                </p>
              </div>
            </div>
            <div className="product5-overview-image p5-fade-in-right">
              <div className="p5-capabilities-card">
                <h3>Key Features</h3>
                <ul>
                  <li><span className="p5-check">✓</span> AI Image Recognition</li>
                  <li><span className="p5-check">✓</span> Predictive Outbreak Modeling</li>
                  <li><span className="p5-check">✓</span> Early Warning Alerts</li>
                  <li><span className="p5-check">✓</span> Field Scouting Automation</li>
                  <li><span className="p5-check">✓</span> Pest Population Tracking</li>
                  <li><span className="p5-check">✓</span> Disease Pathogen Analysis</li>
                  <li><span className="p5-check">✓</span> Satellite Imagery Sync</li>
                  <li><span className="p5-check">✓</span> Treatment Recommendations</li>
                  <li><span className="p5-check">✓</span> Historical Data Analysis</li>
                  <li><span className="p5-check">✓</span> Mobile Identification Tool</li>
</ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Problem & Solution ─────────────────────────────────────────── */}
      <section className="product5-section p5-section-dark-alt">
        <div className="p5-container">
          <div className="p5-text-center p5-mb-60 p5-fade-in">
            <span className="p5-section-badge">Problem & Solution</span>
            <h3 className="p5-section-title">Solving <span>Traditional Farming</span> Inefficiencies</h3>
          </div>
          <div className="p5-table-container p5-fade-in">
            <table className="p5-comparison-table">
              <thead>
                <tr>
                  <th>❗ Reactive Pest Control</th>
                  <th>✅ Proactive AI Surveillance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Delayed Detection:</strong> Outbreaks identified only after widespread physical damage is visible to the eye.</td>
                  <td><strong>Early Image Scanning:</strong> AI detects microscopic signs of fungal spores or pest eggs in real-time.</td>
                </tr>
                <tr>
                  <td><strong>Preventative Blanket Spraying:</strong> Spraying the entire field "just in case," leading to high costs and runoff.</td>
                  <td><strong>Precision Spot-Treatment:</strong> Alerts provide exact GPS coordinates for localized, targeted intervention.</td>
                </tr>
                <tr>
                  <td><strong>Pest Misidentification:</strong> Human error in identifying specific pathogens leads to wrong chemical usage.</td>
                  <td><strong>Deep Learning Taxonomy:</strong> 99% accuracy in identifying thousands of pest species and disease signatures.</td>
                </tr>
                <tr>
                  <td><strong>Escalating Outbreaks:</strong> Slow response times allow localized issues to become uncontrollable epidemics.</td>
                  <td><strong>Predictive Spread Modeling:</strong> AI forecasts the movement of pests based on wind and humidity patterns.</td>
                </tr>
                <tr>
                  <td><strong>High Environmental Toxicity:</strong> Over-reliance on broad-spectrum pesticides due to lack of specificity.</td>
                  <td><strong>Targeted Biological Control:</strong> Recommendations for specific, eco-friendly treatments tailored to the threat.</td>
                </tr>
                <tr>
                  <td><strong>Labor-Intensive Scouting:</strong> Hiring seasonal crews to walk miles of fields looking for small signs of stress.</td>
                  <td><strong>24/7 Remote Monitoring:</strong> Edge-AI cameras act as digital "scouts" that never sleep.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── Core Functionalities ─────────────────────────────────────── */}
      <section className="product5-section">
        <div className="p5-container">
          <div className="p5-text-center p5-mb-60 p5-fade-in">
            <span className="p5-section-badge">Core Functionalities</span>
            <h3 className="p5-section-title">How We <span>Deliver Value</span></h3>
          </div>
          <div className="product5-features-grid">
            {[
              { icon: "👁️", title: "1. Computer Vision", desc: "Edge-AI processing of leaf and stem imagery to detect early symptoms of 2000+ pathogens." },
              { icon: "🦟", title: "2. Pest Taxonomy", desc: "Automated identification of pest species, including invasive and emerging threats." },
              { icon: "🌡️", title: "3. Micro-Climate Link", desc: "Correlation of local humidity and temp with disease signature libraries to predict spore germination." },
              { icon: "🚨", title: "4. Outbreak Alerts", desc: "Instant multi-channel notifications (SMS/Push) when infestation thresholds are breached." },
              { icon: "💊", title: "5. Rx Recommendations", desc: "AI-generated prescriptions for targeted pesticide or biological agent application." }
            ].map((feature, idx) => (
              <div className="p5-feature-card p5-fade-in" key={idx}>
                <div className="p5-feature-icon">{feature.icon}</div>
                <h4>{feature.title}</h4>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How It Works (Step-by-Step) ─────────────────────────────────── */}
      <section className="product5-section p5-section-dark-alt">
        <div className="p5-container">
          <div className="p5-text-center p5-mb-60 p5-fade-in">
            <span className="p5-section-badge">Workflow</span>
            <h3 className="p5-section-title">The <span>Process</span> (Step-by-Step)</h3>
          </div>
          <div className="p5-support-grid">
            {[
              "1. Solar-powered AI camera traps are deployed at strategic 'hotspot' field locations",
              "2. Edge-computing units capture and analyze high-res leaf imagery every 15 minutes",
              "3. Identified pathogens or pests are cross-referenced with a global biological database",
              "4. Predictive algorithms assess the probability of spread based on hyper-local weather",
              "5. Farm managers receive a targeted alert with the exact GPS coordinates and treatment plan",
              "6. Follow-up imagery captures the crop's recovery to validate intervention success"
            ].map((text, idx) => (
              <div className="p5-support-item p5-fade-in" key={idx}>
                <div className="p5-support-dot"></div>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Technical Architecture ─────────────────────────────────────── */}
      <section className="product5-section">
        <div className="p5-container">
          <div className="p5-vision-container p5-fade-in">
            <div className="p5-vision-header p5-text-center">
              <span className="p5-section-badge">Architecture</span>
              <h3 className="p5-section-title">Technical <span>Architecture</span></h3>
            </div>
            <div className="p5-vision-grid">
              {[
                { icon: "📟", title: "Edge Hardware", desc: "Low-power NVIDIA Jetson Nano modules for on-site visual inference." },
                { icon: "🧠", title: "Model Layer", desc: "TensorFlow Lite models optimized for rapid leaf-disease identification." },
                { icon: "📡", title: "Infra-Uplink", desc: "LoRaWAN or 5G connectivity for streaming anomaly data to the cloud." },
                { icon: "💾", title: "Pathogen Lake", desc: "Big Data repository of millions of labeled pest and disease images." },
                { icon: "📱", title: "Scout Interface", desc: "Mobile-first DApp for manual ground-truthing and field coordination." }
              ].map((item, idx) => (
                <div className="p5-vision-item" key={idx}>
                  <div className="p5-vision-icon">{item.icon}</div>
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
      <section className="product5-section p5-section-dark-alt">
        <div className="p5-container">
          <div className="product5-overview-grid">
            <div className="p5-fade-in-left">
              <span className="p5-section-badge">Technologies</span>
              <h3 className="p5-section-title">Technologies <span>Used</span></h3>
              <div className="p5-solutions-grid" style={{ gridTemplateColumns: '1fr' }}>
                {[
                  "TensorFlow / Keras Deep Learning Framework",
                  "OpenCV for Image Pre-processing & Filtering",
                  "Python-based Predictive Outbreak Engines",
                  "NVIDIA Jetson Edge-Computing Architecture",
                  "MQTT Protocol for Real-time Alert Sync",
                  "AWS Lambda for Scalable Image Inference",
                  "Proprietary Pathogen Signature Library"
                ].map((tech, idx) => (
                  <div className="p5-solution-item" key={idx} style={{ padding: '15px 24px' }}>
                    <div className="p5-sol-icon">🛠️</div>
                    <p><strong>{tech}</strong></p>
                  </div>
                ))}
              </div>
            </div>
            <div className="p5-fade-in-right">
              <span className="p5-section-badge">Applications</span>
              <h3 className="p5-section-title">Real-World <span>Applications</span></h3>
              <div className="p5-solutions-grid" style={{ gridTemplateColumns: '1fr' }}>
                {[
                  "Greenhouse intensive disease monitoring",
                  "High-value specialty crops (Berries, Grapes)",
                  "Regional pest outbreak early-warning networks",
                  "Grain storage silo insect detection",
                  "Agricultural research & seed trial validation",
                  "Crop insurance risk assessment automation"
                ].map((app, idx) => (
                  <div className="p5-solution-item" key={idx} style={{ padding: '15px 24px' }}>
                    <div className="p5-sol-icon">🌍</div>
                    <p><strong>{app}</strong></p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Benefits ─────────────────────────────────────── */}
      <section className="product5-section">
        <div className="p5-container">
          <div className="p5-text-center p5-mb-60 p5-fade-in">
            <span className="p5-section-badge">Benefits</span>
            <h3 className="p5-section-title">The <span>Precision</span> Advantage</h3>
          </div>
          <div className="p5-benefits-grid">
            {[
              { icon: "🛡️", title: "Yield Protection", desc: "Prevent catastrophic crop loss through early intervention." },
              { icon: "📉", title: "40% Less Pesticide", desc: "Eliminate blanket spraying in favor of targeted spot-treatment." },
              { icon: "⏱️", title: "24/7 Field Vigilance", desc: "Digital scouts that monitor your field every minute, day and night." },
              { icon: "📊", title: "Taxonomic Accuracy", desc: "Ensure the right treatment for the right pathogen every time." },
              { icon: "🌿", title: "Eco-Sustainability", desc: "Protect beneficial insects and soil health by reducing chemical loads." }
            ].map((benefit, idx) => (
              <div className="p5-benefit-card p5-fade-in" key={idx}>
                <div className="p5-benefit-icon">{benefit.icon}</div>
                <h4>{benefit.title}</h4>
                <p>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Challenges & Future Scope ───────────────────────────────────── */}
      <section className="product5-section p5-section-dark-alt">
        <div className="p5-container">
          <div className="product5-overview-grid">
            <div className="p5-fade-in-left">
              <span className="p5-section-badge">Challenges</span>
              <h3 className="p5-section-title">Challenges & <span>Limitations</span></h3>
              <ul className="p5-capabilities-card" style={{ listStyle: 'none', padding: '30px' }}>
                {[
                  "Power management for remote camera clusters",
                  "Vast diversity of local pest species (requires localized training)",
                  "Computational limits of Edge-AI in high-temp environments",
                  "Connectivity bottlenecks for high-resolution image upload",
                  "Standardizing visual data across different lighting conditions"
                ].map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '12px', display: 'flex', gap: '10px' }}>
                    <span style={{ color: '#d32f2f' }}>⚠</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p5-fade-in-right">
              <span className="p5-section-badge">Future Scope</span>
              <h3 className="p5-section-title">The <span>Future</span> of Protection</h3>
              <ul className="p5-capabilities-card" style={{ listStyle: 'none', padding: '30px' }}>
                {[
                  "Autonomous 'Seek-and-Destroy' pest control robots",
                  "RNA-based sequence-specific pest treatments",
                  "Global AI-driven biosecurity radar network",
                  "Holographic 3D visualizations of fungal spread",
                  "Machine-to-Drone direct spray request protocols"
                ].map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '12px', display: 'flex', gap: '10px' }}>
                    <span style={{ color: 'var(--p5-primary)' }}>🚀</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Industry Impact ─────────────────────────────────── */}
      <section className="product5-section">
        <div className="p5-container">
          <div className="p5-compliance-card p5-fade-in">
            <h2>Industry Impact</h2>
            <div className="p5-compliance-grid">
              {[
                "🔬 Eradicates large-scale crop epidemics through AI",
                "🍃 Significantly lowers chemical toxicity in the food chain",
                "📈 Protects global food security via yield stability",
                "💰 Increases farmer ROI through precise input targeting"
              ].map((item, idx) => (
                <div className="p5-compliance-item" key={idx}>{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Conclusion & Final CTA ────────────────────────────────────────── */}
      <section className="p5-final-cta p5-section-dark-alt">
        <div className="p5-container p5-text-center p5-fade-in">
          <span className="p5-section-badge">Conclusion</span>
          <h2>Eradicating Loss Through <span>Intelligence</span></h2>
          <p style={{ marginBottom: '20px' }}>
            AI-Driven Pest & Disease Monitoring is shifting the paradigm from reactive chemical dependency to proactive biological precision. By merging Edge-AI vision, micro-climate correlation, and predictive spread modeling, we enable farmers to eliminate outbreaks before they escalate, ensuring a safer and more productive agricultural future.
          </p>
          <p style={{ marginBottom: '40px' }}>
            This solution is the critical step toward building a resilient, eco-friendly, and future-ready food production ecosystem through automated vigilance.
          </p>
            
        </div>
      </section>

      <footer className="p5-footer">
        <div className="p5-container">
          <p>&copy; 2026 Techbrain Networks. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Product5;
