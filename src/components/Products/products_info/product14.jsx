import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './product14.css';

const Product14 = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('p14-visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.p14-fade-in, .p14-fade-in-left, .p14-fade-in-right').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="product14-page">
      {/* ─── Navigation ─────────────────────────── */}
      <nav className="product14-nav">
        <div className="p14-container">
          <button onClick={() => navigate('/#products')} className="product14-back-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Home
          </button>
        </div>
      </nav>

      {/* ─── Hero Section ─────────────────────────────────────────── */}
      <section className="product14-hero" style={{ backgroundImage: `url(/images/product_14.png)` }}>
        <div className="p14-container">
          <div className="product14-hero-content p14-fade-in">
            <span className="product14-hero-badge">Livestock Tech</span>
            <h1>Precision Livestock <br /><span>Farming Platform</span></h1>
            <p className="product14-hero-description">
              Integrated management system for high-density livestock operations, utilizing computer vision, acoustic monitoring, and automated environmental controls.
            </p>
             
          </div>
        </div>
      </section>

      {/* ─── Introduction & Background ─────────────────────────────────────── */}
      <section className="product14-section">
        <div className="p14-container">
          <div className="product14-overview-grid">
            <div className="product14-overview-text p14-fade-in-left">
              <span className="p14-section-badge">Introduction</span>
              <h3 className="product14-section-title">Optimizing <span>Animal Welfare</span></h3>
              <p>
                Precision Livestock Farming (PLF) is a data-driven approach to animal husbandry that uses real-time monitoring to ensure individual animal health and productivity within large-scale operations.
              </p>
              <p>
                By combining acoustic sensors for respiratory health, computer vision for behavioral analysis, and automated feeding systems, we provide a holistic view of the herd or flock.
              </p>
              <div className="product14-highlight-box">
                <h4 style={{ marginBottom: '10px', color: 'var(--p14-primary-dark)' }}>Background & Problem Statement</h4>
                <p>
                  Industrial-scale livestock farming often struggles with individual animal attention. Disease can spread rapidly before human observers notice symptoms. Product 14 bridges this gap by providing continuous, non-invasive monitoring, allowing for early intervention and optimized resource allocation, reducing mortality and improving feed conversion ratios.
                </p>
              </div>
            </div>
            <div className="product14-overview-image p14-fade-in-right">
              <div className="p14-capabilities-card">
                <h3>Key Features</h3>
                <ul>
                  <li><span className="p14-check">✓</span> Acoustic Respiratory Monitoring</li>
                  <li><span className="p14-check">✓</span> 3D Behavioral Vision Analysis</li>
                  <li><span className="p14-check">✓</span> Automated Precision Feeding</li>
                  <li><span className="p14-check">✓</span> Real-Time Weight Gain Tracking</li>
                  <li><span className="p14-check">✓</span> Barn Climate Automation</li>
                  <li><span className="p14-check">✓</span> Disease Outbreak Prediction</li>
                  <li><span className="p14-check">✓</span> Individual Health Ledgers</li>
                  <li><span className="p14-check">✓</span> Estrus & Farrowing Alerts</li>
                  <li><span className="p14-check">✓</span> Water Intake Telemetry</li>
                  <li><span className="p14-check">✓</span> Stress Level Indicators</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Problem & Solution ─────────────────────────────────────────── */}
      <section className="product14-section p14-section-dark-alt">
        <div className="p14-container">
          <div className="p14-text-center p14-mb-60 p14-fade-in">
            <span className="p14-section-badge">Problem & Solution</span>
            <h3 className="p14-section-title">Solving <span>Husbandry</span> Challenges</h3>
          </div>
          <div className="p14-table-container p14-fade-in">
            <table className="p14-comparison-table">
              <thead>
                <tr>
                  <th>❗ Traditional Mass Monitoring</th>
                  <th>✅ Precision Livestock Platform</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Invisible Disease:</strong> Respiratory issues in swine or poultry only detected when widespread.</td>
                  <td><strong>Acoustic Monitoring:</strong> Identifying individual cough patterns and stress sounds 48 hours before physical symptoms.</td>
                </tr>
                <tr>
                  <td><strong>Feed Inefficiency:</strong> Uniform feeding regardless of individual growth rates or metabolic needs.</td>
                  <td><strong>Smart Feeding:</strong> Individualized nutrient delivery based on real-time weight and behavioral data.</td>
                </tr>
                <tr>
                  <td><strong>Climate Stress:</strong> Poor barn ventilation leading to heat stress and ammonia toxicity.</td>
                  <td><strong>Adaptive Environment:</strong> Sensors modulate fans and cooling based on animal density and stress levels.</td>
                </tr>
                <tr>
                  <td><strong>Labor Intensity:</strong> Manual checking of thousands of animals leading to human error.</td>
                  <td><strong>Vision Analytics:</strong> 24/7 autonomous monitoring of posture, movement, and eating behavior.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── Core Functionalities ─────────────────────────────────────── */}
      <section className="product14-section">
        <div className="p14-container">
          <div className="p14-text-center p14-mb-60 p14-fade-in">
            <span className="p14-section-badge">Core Functionalities</span>
            <h3 className="p14-section-title">How We <span>Care</span></h3>
          </div>
          <div className="product14-features-grid">
            {[
              { icon: "👁️", title: "1. Vision AI", desc: "Computer vision algorithms for tracking posture, mobility, and spatial behavior." },
              { icon: "👂", title: "2. Acoustic Sensing", desc: "High-sensitivity microphones identifying respiratory distress and environmental stress." },
              { icon: "🌾", title: "3. Auto-Rationing", desc: "Precision auger control to deliver exact caloric needs to every animal." },
              { icon: "🌡️", title: "4. Barn Control", desc: "Deep integration with HVAC and ventilation for perfect environmental stability." },
              { icon: "📊", title: "5. Health Ledger", desc: "Blockchain-ready records of medical history, growth, and lineage for traceability." }
            ].map((feature, idx) => (
              <div className="p14-feature-card p14-fade-in" key={idx}>
                <div className="p14-feature-icon">{feature.icon}</div>
                <h4>{feature.title}</h4>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Workflow ─────────────────────────────────────── */}
      <section className="product14-section p14-section-dark-alt">
        <div className="p14-container">
          <div className="p14-text-center p14-mb-60 p14-fade-in">
            <span className="p14-section-badge">Workflow</span>
            <h3 className="p14-section-title">The <span>Precision</span> Lifecycle</h3>
          </div>
          <div className="p14-support-grid">
            {[
              "1. Acoustic and Vision sensors are deployed across pens and housing units",
              "2. Individual animal identification is synced via RFID or visual patterns",
              "3. AI Engine monitors eating behavior, mobility, and vocalizations 24/7",
              "4. Health alerts are triggered when deviations from the individual baseline occur",
              "5. Automated feeding systems adjust rations to optimize growth and health",
              "6. Farm managers review consolidated analytics to refine long-term genetics and husbandry"
            ].map((text, idx) => (
              <div className="p14-support-item p14-fade-in" key={idx}>
                <div className="p14-support-dot"></div>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Technical Architecture ─────────────────────────────────────── */}
      <section className="product14-section">
        <div className="p14-container">
          <div className="p14-vision-container p14-fade-in">
            <div className="p14-vision-header p14-text-center">
              <span className="p14-section-badge">Architecture</span>
              <h3 className="p14-section-title">Technical <span>Architecture</span></h3>
            </div>
            <div className="p14-vision-grid">
              {[
                { icon: "📟", title: "Edge Hub", desc: "Local processing of high-bandwidth video and audio streams." },
                { icon: "📶", title: "IoT Fabric", desc: "Secure LoRaWAN and 5G connectivity for barn-wide sensor mesh." },
                { icon: "🧠", title: "Health AI", desc: "Deep learning models for behavioral and acoustic diagnostics." },
                { icon: "💾", title: "Asset Ledger", desc: "Immutable storage for life-cycle data and traceability." },
                { icon: "📱", title: "Manager App", desc: "Real-time alerts and decision support for field staff." }
              ].map((item, idx) => (
                <div className="p14-vision-item" key={idx}>
                  <div className="p14-vision-icon">{item.icon}</div>
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
      <section className="product14-section p14-section-dark-alt">
        <div className="p14-container">
          <div className="product14-overview-grid">
            <div className="p14-fade-in-left">
              <span className="p14-section-badge">Technologies</span>
              <h3 className="product14-section-title">Technologies <span>Used</span></h3>
              <div className="p14-solutions-grid" style={{ gridTemplateColumns: '1fr' }}>
                {[
                  "Acoustic Signature Analysis (Deep Learning)",
                  "3D Computer Vision Posture Tracking",
                  "Automated Precision Rationing Systems",
                  "RFID & Visual Identification Mesh",
                  "Environmental IoT Multi-Sensors",
                  "Blockchain-Ready Traceability Ledgers",
                  "Cloud-Native Biometric Dashboards"
                ].map((tech, idx) => (
                  <div className="p14-solution-item" key={idx} style={{ padding: '15px 24px' }}>
                    <div className="p14-sol-icon">🛠️</div>
                    <p><strong>{tech}</strong></p>
                  </div>
                ))}
              </div>
            </div>
            <div className="p14-fade-in-right">
              <span className="p14-section-badge">Applications</span>
              <h3 className="product14-section-title">Real-World <span>Applications</span></h3>
              <div className="p14-solutions-grid" style={{ gridTemplateColumns: '1fr' }}>
                {[
                  "Intensive swine production monitoring",
                  "High-density poultry climate control",
                  "Dairy herd health and estrus tracking",
                  "Feedlot efficiency optimization",
                  "Animal welfare verification for premium brands",
                  "Disease prevention in research livestock"
                ].map((app, idx) => (
                  <div className="p14-solution-item" key={idx} style={{ padding: '15px 24px' }}>
                    <div className="p14-sol-icon">🌍</div>
                    <p><strong>{app}</strong></p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Benefits ─────────────────────────────────────── */}
      <section className="product14-section">
        <div className="p14-container">
          <div className="p14-text-center p14-mb-60 p14-fade-in">
            <span className="p14-section-badge">Benefits</span>
            <h3 className="p14-section-title">The <span>Precision</span> Advantage</h3>
          </div>
          <div className="p14-benefits-grid">
            {[
              { icon: "📈", title: "Better Productivity", desc: "Achieve 20% improvement in Feed Conversion Ratio (FCR)." },
              { icon: "📉", title: "Lower Mortality", desc: "Identify health risks early to reduce herd-wide losses." },
              { icon: "💎", title: "Welfare Standards", desc: "Document and prove high-quality animal welfare for premium markets." },
              { icon: "✨", title: "Antibiotic Reduction", desc: "Target treatment only to affected individuals, not the whole herd." },
              { icon: "🌍", title: "Operational Ease", desc: "Empower labor to focus on animals that actually need attention." }
            ].map((benefit, idx) => (
              <div className="p14-benefit-card p14-fade-in" key={idx}>
                <div className="p14-benefit-icon">{benefit.icon}</div>
                <h4>{benefit.title}</h4>
                <p>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Challenges & Future Scope ───────────────────────────────────── */}
      <section className="product14-section p14-section-dark-alt">
        <div className="p14-container">
          <div className="product14-overview-grid">
            <div className="p14-fade-in-left">
              <span className="p14-section-badge">Challenges</span>
              <h3 className="product14-section-title">Challenges & <span>Limitations</span></h3>
              <ul className="p14-capabilities-card" style={{ listStyle: 'none', padding: '30px' }}>
                {[
                  "Complexity of managing high-bandwidth sensor data",
                  "Hardware durability in harsh barn environments",
                  "Integrating with legacy feeding and climate systems",
                  "Ensuring 100% ID accuracy in high-density pens",
                  "Varying signal strength in deep industrial structures"
                ].map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '12px', display: 'flex', gap: '10px' }}>
                    <span style={{ color: '#d32f2f' }}>⚠</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p14-fade-in-right">
              <span className="p14-section-badge">Future Scope</span>
              <h3 className="product14-section-title">The <span>Future</span> of PLF</h3>
              <ul className="p14-capabilities-card" style={{ listStyle: 'none', padding: '30px' }}>
                {[
                  "Fully autonomous individual medical dispensing",
                  "Holographic animal-health twins for managers",
                  "Predictive genetic selection using life-cycle AI",
                  "Universal welfare-token adoption for supply chains",
                  "Zero-latency 6G biometric mesh networks"
                ].map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '12px', display: 'flex', gap: '10px' }}>
                    <span style={{ color: 'var(--p14-primary)' }}>🚀</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Industry Impact ─────────────────────────────────── */}
      <section className="product14-section">
        <div className="p14-container">
          <div className="p14-compliance-card p14-fade-in">
            <h2>Industry Impact</h2>
            <div className="p14-compliance-grid">
              {[
                "🌍 Setting the global standard for ethical meat production",
                "📈 Eradicating the need for prophylactic antibiotic use",
                "🏗️ Building the data backbone for industrial husbandry",
                "✨ Empowering producers with individual animal intelligence"
              ].map((item, idx) => (
                <div className="p14-compliance-item" key={idx}>{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Conclusion & Final CTA ────────────────────────────────────────── */}
      <section className="p14-final-cta p14-section-dark-alt">
        <div className="p14-container p14-text-center p14-fade-in">
          <span className="p14-section-badge">Conclusion</span>
          <h2>Redefining <span>Husbandry</span> for the Data Era</h2>
          <p style={{ marginBottom: '20px' }}>
            Precision Livestock Farming is transforming industrial animal production from a numbers game into a precise, individual-focused science. By merging acoustic AI with computer vision, we enable producers to achieve the highest standards of welfare while maximizing operational ROI.
          </p>
          <p style={{ marginBottom: '40px' }}>
            This solution is the critical step toward building a truly transparent, ethical, and future-ready agricultural ecosystem through biometric intelligence.
          </p>
           
        </div>
      </section>

      <footer className="p14-footer">
        <div className="p14-container">
          <p>&copy; 2026 Techbrain Networks. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Product14;
