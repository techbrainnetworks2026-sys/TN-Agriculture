import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './product20.css';

const Product20 = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('p20-visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.p20-fade-in, .p20-fade-in-left, .p20-fade-in-right').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="product20-page">
      {/* ─── Navigation ─────────────────────────── */}
      <nav className="product20-nav">
        <div className="p20-container">
          <button onClick={() => navigate('/#products') } className="product20-back-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Home
          </button>
        </div>
      </nav>

      {/* ─── Hero Section ─────────────────────────────────────────── */}
      <section className="product20-hero" style={{ backgroundImage: `url(/images/product_20.png)` }}>
        <div className="p20-container">
          <div className="product20-hero-content p20-fade-in">
            <span className="product20-hero-badge">Blockchain & Traceability</span>
            <h1>Agri-Blockchain <br /><span>Supply Chain Traceability</span></h1>
            <p className="product20-hero-description">
              End-to-end blockchain-powered transparency across the agricultural supply chain — from seed to shelf — ensuring authenticity, food safety compliance, and trusted provenance for every product.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Introduction & Background ─────────────────────────────────────── */}
      <section className="product20-section">
        <div className="p20-container">
          <div className="product20-overview-grid">
            <div className="product20-overview-text p20-fade-in-left">
              <span className="p20-section-badge">Introduction</span>
              <h3 className="product20-section-title">Redefining <span>Agricultural Trust</span></h3>
              <p>
                Agri-Blockchain Supply Chain Traceability is an immutable, decentralized ledger platform that records every step of an agricultural product's journey — from soil and seed to processing, logistics, and final retail.
              </p>
              <p>
                It eliminates fraud, reduces food safety recall costs, and empowers consumers with verifiable proof of origin, sustainability certifications, and handling conditions.
              </p>
              <div className="product20-highlight-box">
                <h4 style={{ marginBottom: '10px', color: 'var(--p20-primary-dark)' }}>Background & Problem Statement</h4>
                <p>
                  Global food fraud costs the industry over $40 billion annually, while opaque supply chains make it nearly impossible to trace contaminated products quickly during recalls. Consumers increasingly demand transparent, ethical sourcing. Product 20 leverages distributed ledger technology to create a tamper-proof, real-time record of every transaction and event across the agricultural value chain, restoring trust and dramatically reducing risk.
                </p>
              </div>
            </div>
            <div className="product20-overview-image p20-fade-in-right">
              <div className="p20-capabilities-card">
                <h3>Key Features</h3>
                <ul>
                  <li><span className="p20-check">✓</span> Immutable Farm-to-Fork Ledger</li>
                  <li><span className="p20-check">✓</span> QR-Code Consumer Verification</li>
                  <li><span className="p20-check">✓</span> Smart Contract Compliance Automation</li>
                  <li><span className="p20-check">✓</span> Real-Time Cold Chain Monitoring</li>
                  <li><span className="p20-check">✓</span> Multi-Party Stakeholder Access</li>
                  <li><span className="p20-check">✓</span> Certification & Audit Trail Management</li>
                  <li><span className="p20-check">✓</span> Rapid Recall Identification Engine</li>
                  <li><span className="p20-check">✓</span> Carbon Footprint Tracking per Batch</li>
                  <li><span className="p20-check">✓</span> IoT Sensor Data Integration</li>
                  <li><span className="p20-check">✓</span> Regulatory Compliance Dashboards</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Problem & Solution ─────────────────────────────────────────── */}
      <section className="product20-section p20-section-dark-alt">
        <div className="p20-container">
          <div className="p20-text-center p20-mb-60 p20-fade-in">
            <span className="p20-section-badge">Problem & Solution</span>
            <h3 className="p20-section-title">Solving <span>Supply Chain</span> Opacity</h3>
          </div>
          <div className="p20-table-container p20-fade-in">
            <table className="p20-comparison-table">
              <thead>
                <tr>
                  <th>❗ Traditional Opaque Supply Chains</th>
                  <th>✅ Blockchain-Verified Traceability</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Food Fraud:</strong> Counterfeit organic labels and false origin certificates costing billions annually.</td>
                  <td><strong>Immutable Origin Proof:</strong> Every certification and origin record cryptographically sealed on-chain.</td>
                </tr>
                <tr>
                  <td><strong>Slow Recalls:</strong> Days or weeks to trace contaminated batches through fragmented paper records.</td>
                  <td><strong>Instant Recall Targeting:</strong> Pinpoint affected SKUs in seconds using blockchain batch records.</td>
                </tr>
                <tr>
                  <td><strong>Cold Chain Gaps:</strong> Unmonitored temperature breaks causing spoilage and undisclosed food safety risks.</td>
                  <td><strong>IoT-Linked Ledger:</strong> Real-time sensor data permanently recorded against each shipment block.</td>
                </tr>
                <tr>
                  <td><strong>Certification Delays:</strong> Manual, paper-based organic and fair-trade audit processes taking months.</td>
                  <td><strong>Smart Contract Audits:</strong> Automated compliance verification triggered at each supply chain milestone.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── Core Functionalities ─────────────────────────────────────── */}
      <section className="product20-section">
        <div className="p20-container">
          <div className="p20-text-center p20-mb-60 p20-fade-in">
            <span className="p20-section-badge">Core Functionalities</span>
            <h3 className="p20-section-title">How We <span>Deliver Transparency</span></h3>
          </div>
          <div className="product20-features-grid">
            {[
              { icon: "🔗", title: "1. Blockchain Ledger", desc: "Distributed, tamper-proof recording of every supply chain event from planting to retail." },
              { icon: "📱", title: "2. Consumer QR Scan", desc: "Shoppers scan product QR codes to instantly view verified farm origin and handling history." },
              { icon: "🤝", title: "3. Smart Contracts", desc: "Self-executing agreements that automatically trigger payments and compliance checks at milestones." },
              { icon: "🌡️", title: "4. Cold Chain Guard", desc: "IoT sensors continuously log temperature, humidity, and location data against each batch." },
              { icon: "🔍", title: "5. Recall Sentinel", desc: "AI-powered rapid contamination trace engine isolating affected batches within seconds." }
            ].map((feature, idx) => (
              <div className="p20-feature-card p20-fade-in" key={idx}>
                <div className="p20-feature-icon">{feature.icon}</div>
                <h4>{feature.title}</h4>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Technical Architecture ─────────────────────────────────────── */}
      <section className="product20-section p20-section-dark-alt">
        <div className="p20-container">
          <div className="p20-vision-container p20-fade-in">
            <div className="p20-vision-header p20-text-center">
              <span className="p20-section-badge">Architecture</span>
              <h3 className="p20-section-title">Technical <span>Architecture</span></h3>
            </div>
            <div className="p20-vision-grid">
              {[
                { icon: "⛓️", title: "Distributed Ledger Layer", desc: "Permissioned blockchain network with multi-party validator nodes for high-integrity records." },
                { icon: "📡", title: "IoT Data Bridge", desc: "Edge computing nodes that collect and push real-time sensor telemetry onto the chain." },
                { icon: "🧠", title: "AI Analytics Engine", desc: "Machine learning models detecting anomalies, predicting spoilage, and flagging compliance risks." },
                { icon: "🔐", title: "Identity & Access Hub", desc: "Decentralized identity management ensuring only verified participants write to the ledger." },
                { icon: "📊", title: "Stakeholder Dashboard", desc: "Role-based portals for farmers, processors, logistics operators, regulators, and consumers." }
              ].map((item, idx) => (
                <div className="p20-vision-item" key={idx}>
                  <div className="p20-vision-icon">{item.icon}</div>
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
      <section className="product20-section">
        <div className="p20-container">
          <div className="product20-overview-grid">
            <div className="p20-fade-in-left">
              <span className="p20-section-badge">Technologies</span>
              <h3 className="product20-section-title">Technologies <span>Used</span></h3>
              <div className="p20-solutions-grid" style={{ gridTemplateColumns: '1fr' }}>
                {[
                  "Hyperledger Fabric Permissioned Blockchain",
                  "Smart Contract Automation (Solidity / Chaincode)",
                  "IoT Sensor Integration & Edge Computing",
                  "AI/ML Anomaly Detection & Spoilage Prediction",
                  "Decentralized Identity (DID) Standards",
                  "QR Code & NFC Consumer Interface Layer",
                  "Cloud-Native Microservices Architecture"
                ].map((tech, idx) => (
                  <div className="p20-solution-item" key={idx} style={{ padding: '15px 24px' }}>
                    <div className="p20-sol-icon">🛠️</div>
                    <p><strong>{tech}</strong></p>
                  </div>
                ))}
              </div>
            </div>
            <div className="p20-fade-in-right">
              <span className="p20-section-badge">Applications</span>
              <h3 className="product20-section-title">Real-World <span>Applications</span></h3>
              <div className="p20-solutions-grid" style={{ gridTemplateColumns: '1fr' }}>
                {[
                  "Organic & fair-trade certification verification",
                  "Cross-border food safety compliance reporting",
                  "Rapid contamination recall management",
                  "Cold chain integrity for perishable exports",
                  "Carbon footprint tracking per agricultural batch",
                  "Consumer-facing product provenance transparency"
                ].map((app, idx) => (
                  <div className="p20-solution-item" key={idx} style={{ padding: '15px 24px' }}>
                    <div className="p20-sol-icon">🌍</div>
                    <p><strong>{app}</strong></p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Benefits ─────────────────────────────────────── */}
      <section className="product20-section p20-section-dark-alt">
        <div className="p20-container">
          <div className="p20-text-center p20-mb-60 p20-fade-in">
            <span className="p20-section-badge">Benefits</span>
            <h3 className="p20-section-title">The <span>Transparency</span> Advantage</h3>
          </div>
          <div className="p20-benefits-grid">
            {[
              { icon: "🛡️", title: "Fraud Elimination", desc: "Cryptographic proof of origin removes counterfeit and mislabelled products from shelves." },
              { icon: "⚡", title: "Instant Recalls", desc: "Trace contaminated batches in seconds, not weeks, protecting consumers and brand reputation." },
              { icon: "🌱", title: "Sustainability Proof", desc: "Verified carbon and sustainability data builds premium market access and ESG credibility." },
              { icon: "💼", title: "Regulatory Ease", desc: "Automated compliance reporting reduces audit costs and accelerates market approvals." },
              { icon: "🤝", title: "Consumer Trust", desc: "Scannable provenance builds brand loyalty and justifies premium pricing in retail markets." }
            ].map((benefit, idx) => (
              <div className="p20-benefit-card p20-fade-in" key={idx}>
                <div className="p20-benefit-icon">{benefit.icon}</div>
                <h4>{benefit.title}</h4>
                <p>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Challenges & Future Scope ───────────────────────────────────── */}
      <section className="product20-section">
        <div className="p20-container">
          <div className="product20-overview-grid">
            <div className="p20-fade-in-left">
              <span className="p20-section-badge">Challenges</span>
              <h3 className="product20-section-title">Challenges & <span>Limitations</span></h3>
              <ul className="p20-capabilities-card" style={{ listStyle: 'none', padding: '30px' }}>
                {[
                  "Ensuring data accuracy at the initial point of entry (garbage-in risk)",
                  "Onboarding smallholder farmers with limited digital literacy",
                  "High energy consumption of certain blockchain consensus mechanisms",
                  "Interoperability between multiple industry blockchain standards",
                  "Cost of IoT hardware deployment across vast rural supply chains"
                ].map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '12px', display: 'flex', gap: '10px' }}>
                    <span style={{ color: '#d32f2f' }}>⚠</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p20-fade-in-right">
              <span className="p20-section-badge">Future Scope</span>
              <h3 className="product20-section-title">The <span>Future</span> of Food Trust</h3>
              <ul className="p20-capabilities-card" style={{ listStyle: 'none', padding: '30px' }}>
                {[
                  "AI-driven predictive recall before contamination reaches consumers",
                  "Universal cross-chain interoperability across global food networks",
                  "Autonomous drone-based field verification linked to the ledger",
                  "Biometric farmer identity verification via decentralized ID",
                  "Real-time satellite imagery anchored to blockchain crop records"
                ].map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '12px', display: 'flex', gap: '10px' }}>
                    <span style={{ color: 'var(--p20-primary)' }}>🚀</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Industry Impact ─────────────────────────────────── */}
      <section className="product20-section p20-section-dark-alt">
        <div className="p20-container">
          <div className="p20-compliance-card p20-fade-in">
            <h2>Industry Impact</h2>
            <div className="p20-compliance-grid">
              {[
                "⛓️ Establishing the global standard for blockchain-verified food provenance",
                "🛡️ Eliminating $40B+ in annual agricultural supply chain fraud",
                "🌱 Accelerating verified ESG and sustainability reporting for agribusiness",
                "✨ Empowering consumers with unprecedented food transparency at scale"
              ].map((item, idx) => (
                <div className="p20-compliance-item" key={idx}>{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Conclusion & Final CTA ────────────────────────────────────────── */}
      <section className="p20-final-cta">
        <div className="p20-container p20-text-center p20-fade-in">
          <span className="p20-section-badge">Conclusion</span>
          <h2>The <span>Transparent Era</span> of Agricultural Supply Chains</h2>
          <p style={{ marginBottom: '20px' }}>
            Agri-Blockchain Supply Chain Traceability is transforming agriculture from a trust-on-faith system into a cryptographically verified, real-time transparent network. By merging blockchain immutability with IoT sensor data and AI analytics, we give every stakeholder — from the farmer to the consumer — unbreakable confidence in what they grow, process, and eat.
          </p>
          <p style={{ marginBottom: '40px' }}>
            This solution is the definitive step toward a fraud-free, recall-ready, and sustainability-verified global agricultural ecosystem driven by the power of distributed trust.
          </p>
        </div>
      </section>

      <footer className="product20-footer">
        <div className="p20-container">
          <p>&copy; 2026 Techbrain Networks. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Product20;