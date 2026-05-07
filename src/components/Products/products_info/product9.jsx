import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './product9.css';

const Product9 = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('p9-visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.p9-fade-in, .p9-fade-in-left, .p9-fade-in-right').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="product9-page">
      {/* ─── Navigation ─────────────────────────── */}
      <nav className="product9-nav">
        <div className="p9-container">
          <button onClick={() => navigate('/#products')} className="product9-back-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Home
          </button>
        </div>
      </nav>

      {/* ─── Hero Section ─────────────────────────────────────────── */}
      <section className="product9-hero" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(/images/product_09.png)` }}>
        <div className="p9-container">
          <div className="product9-hero-content p9-fade-in">
            <span className="product9-hero-badge">Welfare & Biometrics</span>
            <h1>Livestock Monitoring & <br /><span>Management</span></h1>
            <p className="product9-hero-description">
              IoT-powered livestock intelligence platform with biometric health tracking, GPS geo-fencing, and AI-driven behavioral analytics for high-performance husbandry.
            </p>
             
          </div>
        </div>
      </section>

      {/* ─── Introduction & Background ─────────────────────────────────────── */}
      <section className="product9-section">
        <div className="p9-container">
          <div className="product9-overview-grid">
            <div className="product9-overview-text p9-fade-in-left">
              <span className="p9-section-badge">Introduction</span>
              <h3 className="product9-section-title">Empowering <span>Modern Agriculture</span></h3>
              <p>
                Livestock Monitoring & Management is a next-generation agricultural solution that uses low-power wearable sensors, LoRaWAN connectivity, and AI behavioral analysis to transform animal husbandry into a welfare-first science.
              </p>
              <p>
                It eliminates the "observation gap" by providing 24/7 biometric and location data for every individual animal, flagging metabolic distress and reproductive windows with laboratory precision.
              </p>
              <div className="product9-highlight-box">
                <h4 style={{ marginBottom: '10px', color: 'var(--p9-primary-dark)' }}>Background & Problem Statement</h4>
                <p>
                  Managing large herds across vast grazing lands makes manual inspection nearly impossible. Subtle signs of illness or reproductive cycles (estrus) are often missed, leading to high mortality and low breeding efficiency. Animal theft and loss further impact ranch profitability. Product 9 provides "eyes on the herd" at all times, ensuring that no animal is left behind or unmonitored.
                </p>
              </div>
            </div>
            <div className="product9-overview-image p9-fade-in-right">
              <div className="p9-capabilities-card">
                <h3>Key Features</h3>
                <ul>
                  <li><span className="p9-check">✓</span> Biometric Vital Tracking</li>
                  <li><span className="p9-check">✓</span> GPS Geo-fencing & Alerts</li>
                  <li><span className="p9-check">✓</span> AI Behavioral Profiling</li>
                  <li><span className="p9-check">✓</span> Estrus & Calving Alerts</li>
                  <li><span className="p9-check">✓</span> Rumination Time Analytics</li>
                  <li><span className="p9-check">✓</span> Anti-Theft GPS Recovery</li>
                  <li><span className="p9-check">✓</span> Automated Feeding Sync</li>
                  <li><span className="p9-check">✓</span> Disease Early-Warning</li>
                  <li><span className="p9-check">✓</span> Weight Gain Predictions</li>
                  <li><span className="p9-check">✓</span> Individual Pedigree Records</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Problem & Solution ─────────────────────────────────────────── */}
      <section className="product9-section p9-section-dark-alt">
        <div className="p9-container">
          <div className="p9-text-center p9-mb-60 p9-fade-in">
            <span className="p9-section-badge">Problem & Solution</span>
            <h3 className="p9-section-title">Solving <span>Traditional Farming</span> Inefficiencies</h3>
          </div>
          <div className="p9-table-container p9-fade-in">
            <table className="p9-comparison-table">
              <thead>
                <tr>
                  <th>❗ Traditional Herd Management</th>
                  <th>✅ Precision Livestock Intelligence</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Delayed Sickness Discovery:</strong> Detecting disease only after physical symptoms like lethargy appear.</td>
                  <td><strong>Metabolic Warning:</strong> AI flags subtle heart-rate and temp spikes days before physical symptoms.</td>
                </tr>
                <tr>
                  <td><strong>Low Breeding Accuracy:</strong> Missed estrus windows leading to fewer pregnancies per year.</td>
                  <td><strong>AI Estrus Sync:</strong> Automated detection of reproductive peaks with 98% accuracy for insemination.</td>
                </tr>
                <tr>
                  <td><strong>Herd Loss & Theft:</strong> Vulnerability to predators and theft in vast, unmonitored grazing lands.</td>
                  <td><strong>Active Geo-fencing:</strong> Instant mobile alerts if an animal crosses a boundary or exhibits "flight" behavior.</td>
                </tr>
                <tr>
                  <td><strong>Inefficient Feeding:</strong> Standardized rations that ignore individual animal metabolism and needs.</td>
                  <td><strong>Dynamic Feed Dosing:</strong> Automated individual rations based on real-time weight and activity data.</td>
                </tr>
                <tr>
                  <td><strong>Inaccurate Records:</strong> Fragmented or paper-based health records that are easily lost.</td>
                  <td><strong>Digital Pedigree:</strong> Comprehensive, cloud-based life records for every individual in the herd.</td>
                </tr>
                <tr>
                  <td><strong>Labor Intensive:</strong> Requiring constant physical patrols to check animal wellbeing.</td>
                  <td><strong>Remote Surveillance:</strong> Manage 1,000+ animals from a single unified mobile dashboard.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── Core Functionalities ─────────────────────────────────────── */}
      <section className="product9-section">
        <div className="p9-container">
          <div className="p9-text-center p9-mb-60 p9-fade-in">
            <span className="p9-section-badge">Core Functionalities</span>
            <h3 className="p9-section-title">How We <span>Deliver Value</span></h3>
          </div>
          <div className="product9-features-grid">
            {[
              { icon: "🩺", title: "1. Biometric Wearables", desc: "Low-power collars and ear tags monitoring temp, pulse, and rumination activity." },
              { icon: "📡", title: "2. GPS Tracking", desc: "High-precision location data and virtual fences to manage rotational grazing." },
              { icon: "🧠", title: "3. Behavioral AI", desc: "Algorithms that differentiate between normal grazing and distress or predation signals." },
              { icon: "🍼", title: "4. Calving Support", desc: "Motion-based alerts that notify managers hours before the onset of labor." },
              { icon: "📊", title: "5. Production Hub", desc: "Deep analytics on milk yield, growth rates, and health-to-profit correlations." }
            ].map((feature, idx) => (
              <div className="p9-feature-card p9-fade-in" key={idx}>
                <div className="p9-feature-icon">{feature.icon}</div>
                <h4>{feature.title}</h4>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How It Works (Step-by-Step) ─────────────────────────────────── */}
      <section className="product9-section p9-section-dark-alt">
        <div className="p9-container">
          <div className="p9-text-center p9-mb-60 p9-fade-in">
            <span className="p9-section-badge">Workflow</span>
            <h3 className="p9-section-title">The <span>Process</span> (Step-by-Step)</h3>
          </div>
          <div className="p9-support-grid">
            {[
              "1. Animals are fitted with ruggedized, long-battery-life IoT collars or tags",
              "2. Data is streamed via private LoRaWAN gateways installed across the ranch",
              "3. AI Engine processes biometric time-series data to define a 'Normal Health' baseline",
              "4. System identifies deviations (e.g., fever spikes, decreased movement, straying)",
              "5. High-priority alerts are pushed to the rancher's mobile device with precise GPS coords",
              "6. Continuous health data improves veterinary diagnostics and individual breeding choices"
            ].map((text, idx) => (
              <div className="p9-support-item p9-fade-in" key={idx}>
                <div className="p9-support-dot"></div>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Technical Architecture ─────────────────────────────────────── */}
      <section className="product9-section">
        <div className="p9-container">
          <div className="p9-vision-container p9-fade-in">
            <div className="p9-vision-header p9-text-center">
              <span className="p9-section-badge">Architecture</span>
              <h3 className="p9-section-title">Technical <span>Architecture</span></h3>
            </div>
            <div className="p9-vision-grid">
              {[
                { icon: "📿", title: "IoT Wearables", desc: "IP68-rated collars with integrated accelerometers and vitals sensors." },
                { icon: "📶", title: "LoRa Backbone", desc: "Long-range wireless coverage for up to 15km in open terrain." },
                { icon: "🧠", title: "Behavioral Engine", desc: "Deep learning models for complex animal gesture and state recognition." },
                { icon: "💾", title: "Animal Data Lake", desc: "Encrypted storage for individual health histories and pedigree trees." },
                { icon: "📱", title: "Herd Dashboard", desc: "Real-time mobile-first interface for immediate field intervention." }
              ].map((item, idx) => (
                <div className="p9-vision-item" key={idx}>
                  <div className="p9-vision-icon">{item.icon}</div>
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
      <section className="product9-section p9-section-dark-alt">
        <div className="p9-container">
          <div className="product9-overview-grid">
            <div className="p9-fade-in-left">
              <span className="p9-section-badge">Technologies</span>
              <h3 className="p9-section-title">Technologies <span>Used</span></h3>
              <div className="p9-solutions-grid" style={{ gridTemplateColumns: '1fr' }}>
                {[
                  "Low-Power WAN (LoRaWAN) Connectivity",
                  "IMU (Inertial Measurement Unit) Sensors",
                  "Time-Series AI Behavioral Models",
                  "GPS/GLONASS Dual-Band Tracking",
                  "Ruggedized IP68 Enclosure Design",
                  "Edge-Computing Vital Thresholds",
                  "Encrypted Herd Ledger Protocols"
                ].map((tech, idx) => (
                  <div className="p9-solution-item" key={idx} style={{ padding: '15px 24px' }}>
                    <div className="p9-sol-icon">🛠️</div>
                    <p><strong>{tech}</strong></p>
                  </div>
                ))}
              </div>
            </div>
            <div className="p9-fade-in-right">
              <span className="p9-section-badge">Applications</span>
              <h3 className="p9-section-title">Real-World <span>Applications</span></h3>
              <div className="p9-solutions-grid" style={{ gridTemplateColumns: '1fr' }}>
                {[
                  "Large-scale beef cattle ranching",
                  "Intensive dairy herd management",
                  "High-value horse & breeding facilities",
                  "Free-range organic poultry monitoring",
                  "Small-ruminant (Sheep/Goat) pastoral care",
                  "Conservation & wildlife herd tracking"
                ].map((app, idx) => (
                  <div className="p9-solution-item" key={idx} style={{ padding: '15px 24px' }}>
                    <div className="p9-sol-icon">🌍</div>
                    <p><strong>{app}</strong></p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Benefits ─────────────────────────────────────── */}
      <section className="product9-section">
        <div className="p9-container">
          <div className="p9-text-center p9-mb-60 p9-fade-in">
            <span className="p9-section-badge">Benefits</span>
            <h3 className="p9-section-title">The <span>Precision</span> Advantage</h3>
          </div>
          <div className="p9-benefits-grid">
            {[
              { icon: "🛡️", title: "20% Mortality Reduction", desc: "Identify and treat sick animals before conditions become fatal." },
              { icon: "🤰", title: "Breeding Optimization", desc: "Achieve higher pregnancy rates through AI estrus sync." },
              { icon: "💎", title: "Security Assurance", desc: "Protect high-value assets from theft and regional loss." },
              { icon: "🌿", title: "Welfare Leadership", desc: "Demonstrate superior animal care and stress management." },
              { icon: "📈", title: "Operational ROI", desc: "Reduce labor costs and improve overall herd valuation." }
            ].map((benefit, idx) => (
              <div className="p9-benefit-card p9-fade-in" key={idx}>
                <div className="p9-benefit-icon">{benefit.icon}</div>
                <h4>{benefit.title}</h4>
                <p>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Challenges & Future Scope ───────────────────────────────────── */}
      <section className="product9-section p9-section-dark-alt">
        <div className="p9-container">
          <div className="product9-overview-grid">
            <div className="p9-fade-in-left">
              <span className="p9-section-badge">Challenges</span>
              <h3 className="product9-section-title">Challenges & <span>Limitations</span></h3>
              <ul className="p9-capabilities-card" style={{ listStyle: 'none', padding: '30px' }}>
                {[
                  "Maintaining wearable battery life over multi-year cycles",
                  "Sensor ruggedness against animal behavior and friction",
                  "Network coverage in extremely remote or mountainous terrain",
                  "Calibration of AI models for diverse animal species/breeds",
                  "High upfront hardware costs for very large herds"
                ].map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '12px', display: 'flex', gap: '10px' }}>
                    <span style={{ color: '#d32f2f' }}>⚠</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p9-fade-in-right">
              <span className="p9-section-badge">Future Scope</span>
              <h3 className="product9-section-title">The <span>Future</span> of Husbandry</h3>
              <ul className="p9-capabilities-card" style={{ listStyle: 'none', padding: '30px' }}>
                {[
                  "Ingestible 'Smart Pills' for deep-gut health telemetry",
                  "Fully autonomous robotic herding and sorting drones",
                  "DNA-linked blockchain identity for absolute traceability",
                  "AI-driven holographic veterinary consultation systems",
                  "Satellite-direct wearable-to-cloud communication links"
                ].map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '12px', display: 'flex', gap: '10px' }}>
                    <span style={{ color: 'var(--p9-primary)' }}>🚀</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Industry Impact ─────────────────────────────────── */}
      <section className="product9-section">
        <div className="p9-container">
          <div className="p9-compliance-card p9-fade-in">
            <h2>Industry Impact</h2>
            <div className="p9-compliance-grid">
              {[
                "🐾 Setting the global standard for animal welfare transparency",
                "🧬 Drives the transition to science-based breeding programs",
                "📈 Protects millions in livestock assets from regional threats",
                "🛡️ Ensures food security through healthy, high-yield herds"
              ].map((item, idx) => (
                <div className="p9-compliance-item" key={idx}>{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Conclusion & Final CTA ────────────────────────────────────────── */}
      <section className="p9-final-cta p9-section-dark-alt">
        <div className="p9-container p9-text-center p9-fade-in">
          <span className="p9-section-badge">Conclusion</span>
          <h2>Ensuring the <span>Health</span> of Every Animal</h2>
          <p style={{ marginBottom: '20px' }}>
            Livestock Monitoring & Management is transforming animal husbandry from a game of chance into a welfare-first science. By merging biometric IoT wearables, LoRaWAN connectivity, and behavioral AI, we enable ranchers to protect their animals with the same precision used in modern medicine.
          </p>
          <p style={{ marginBottom: '40px' }}>
            This solution is the critical step toward building a truly resilient, welfare-conscious, and future-ready agricultural ecosystem through livestock intelligence.
          </p>
           
        </div>
      </section>

      <footer className="p9-footer">
        <div className="p9-container">
          <p>&copy; 2026 Techbrain Networks. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Product9;
