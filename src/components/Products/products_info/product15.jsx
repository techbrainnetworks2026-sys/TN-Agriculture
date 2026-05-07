import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './product15.css';

const Product15 = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('p15-visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.p15-fade-in, .p15-fade-in-left, .p15-fade-in-right').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="product15-page">
      {/* ─── Navigation ─────────────────────────── */}
      <nav className="product15-nav">
        <div className="p15-container">
          <button onClick={() => navigate('/#products')} className="product15-back-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Home
          </button>
        </div>
      </nav>

      {/* ─── Hero Section ─────────────────────────────────────────── */}
      <section className="product15-hero" style={{ backgroundImage: `url(/images/product_15.png)` }}>
        <div className="p15-container">
          <div className="product15-hero-content p15-fade-in">
            <span className="product15-hero-badge">Traceability</span>
            <h1>Farm-to-Table <br /><span>Traceability Software</span></h1>
            <p className="product15-hero-description">
              Blockchain-based supply chain transparency platform that tracks agricultural products from seed selection and field harvest to the consumer's plate.
            </p>
             
          </div>
        </div>
      </section>

      {/* ─── Introduction & Background ─────────────────────────────────────── */}
      <section className="product15-section">
        <div className="p15-container">
          <div className="product15-overview-grid">
            <div className="product15-overview-text p15-fade-in-left">
              <span className="p15-section-badge">Introduction</span>
              <h3 className="product15-section-title">Building <span>Consumer Trust</span></h3>
              <p>
                Farm-to-Table Traceability Software is a comprehensive digital ledger that records every critical event in a crop or animal's lifecycle, ensuring absolute proof of origin and quality.
              </p>
              <p>
                It bridges the information gap between the producer and the consumer, allowing for scanned QR codes to reveal the exact field, harvest date, and sustainability practices behind every purchase.
              </p>
              <div className="product15-highlight-box">
                <h4 style={{ marginBottom: '10px', color: 'var(--p15-primary-dark)' }}>Background & Problem Statement</h4>
                <p>
                  Modern consumers demand transparency regarding food safety, ethics, and sustainability. However, traditional supply chains are opaque and prone to fraud. Product 15 utilizes blockchain technology to create an immutable record of the food journey, protecting brand integrity and enabling rapid recalls in the event of contamination.
                </p>
              </div>
            </div>
            <div className="product15-overview-image p15-fade-in-right">
              <div className="p15-capabilities-card">
                <h3>Key Features</h3>
                <ul>
                  <li><span className="p15-check">✓</span> Immutable Blockchain Ledger</li>
                  <li><span className="p15-check">✓</span> QR Code Consumer Interface</li>
                  <li><span className="p15-check">✓</span> Batch & Lot Level Tracking</li>
                  <li><span className="p15-check">✓</span> Certificate of Origin Logs</li>
                  <li><span className="p15-check">✓</span> Sustainability Metric Tracking</li>
                  <li><span className="p15-check">✓</span> Rapid Recall Management</li>
                  <li><span className="p15-check">✓</span> Cold Chain Integrity Proof</li>
                  <li><span className="p15-check">✓</span> Farmer Identity Verification</li>
                  <li><span className="p15-check">✓</span> Automated Compliance Docs</li>
                  <li><span className="p15-check">✓</span> End-to-End Supply Chain Map</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Problem & Solution ─────────────────────────────────────────── */}
      <section className="product15-section p15-section-dark-alt">
        <div className="p15-container">
          <div className="p15-text-center p15-mb-60 p15-fade-in">
            <span className="p15-section-badge">Problem & Solution</span>
            <h3 className="p15-section-title">Solving <span>Supply Chain</span> Opacity</h3>
          </div>
          <div className="p15-table-container p15-fade-in">
            <table className="p15-comparison-table">
              <thead>
                <tr>
                  <th>❗ Opaque Food Supply Chains</th>
                  <th>✅ Transparent Traceability Network</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Origin Fraud:</strong> Products falsely labeled as organic or from specific premium regions.</td>
                  <td><strong>Blockchain Proof:</strong> Immutable geo-stamped records verifying exact field and farm origin.</td>
                </tr>
                <tr>
                  <td><strong>Recall Delays:</strong> Taking weeks to identify contaminated batches in a food safety event.</td>
                  <td><strong>Instant Recall:</strong> Granular lot-tracking allows for isolation of affected products in minutes.</td>
                </tr>
                <tr>
                  <td><strong>Consumer Disconnect:</strong> Buyers having no relationship or data about the farmers who grew their food.</td>
                  <td><strong>QR Engagement:</strong> Direct digital link to the farm's story, soil data, and sustainability metrics.</td>
                </tr>
                <tr>
                  <td><strong>Manual Paperwork:</strong> Managing export/import and quality certs via physical files and emails.</td>
                  <td><strong>Smart Docs:</strong> Automated generation and verification of certificates of origin and safety.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── Core Functionalities ─────────────────────────────────────── */}
      <section className="product15-section">
        <div className="p15-container">
          <div className="p15-text-center p15-mb-60 p15-fade-in">
            <span className="p15-section-badge">Core Functionalities</span>
            <h3 className="p15-section-title">How We <span>Verify</span></h3>
          </div>
          <div className="product15-features-grid">
            {[
              { icon: "🔗", title: "1. Blockchain Core", desc: "Decentralized ledger for immutable recording of all supply chain events." },
              { icon: "📱", title: "2. Consumer App", desc: "White-labeled QR interface for end-users to scan and see the food journey." },
              { icon: "📦", title: "3. Inventory Mesh", desc: "Deep integration with warehouse and logistics systems for batch tracking." },
              { icon: "🛡️", title: "4. Quality Ledger", desc: "Recording of lab test results and cold-chain logs for every shipment." },
              { icon: "🌍", title: "5. ESG Tracker", desc: "Automated calculation of carbon footprint and water usage per batch." }
            ].map((feature, idx) => (
              <div className="p15-feature-card p15-fade-in" key={idx}>
                <div className="p15-feature-icon">{feature.icon}</div>
                <h4>{feature.title}</h4>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Workflow ─────────────────────────────────────── */}
      <section className="product15-section p15-section-dark-alt">
        <div className="p15-container">
          <div className="p15-text-center p15-mb-60 p15-fade-in">
            <span className="p15-section-badge">Workflow</span>
            <h3 className="p15-section-title">The <span>Provenance</span> Loop</h3>
          </div>
          <div className="p15-support-grid">
            {[
              "1. Initial seeds or livestock are registered on the blockchain with digital ID",
              "2. Field operations, fertilizer use, and growth milestones are logged via mobile",
              "3. Harvest events create unique batch IDs linked to geo-coordinates",
              "4. Logistics nodes log transfers and cold-chain status via IoT sensors",
              "5. Final packaging generates a consumer-facing QR code for every unit",
              "6. Consumers scan to verify origin, sustainability, and safety metrics instantly"
            ].map((text, idx) => (
              <div className="p15-support-item p15-fade-in" key={idx}>
                <div className="p15-support-dot"></div>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Technical Architecture ─────────────────────────────────────── */}
      <section className="product15-section">
        <div className="p15-container">
          <div className="p15-vision-container p15-fade-in">
            <div className="p15-vision-header p15-text-center">
              <span className="p15-section-badge">Architecture</span>
              <h3 className="p15-section-title">Technical <span>Architecture</span></h3>
            </div>
            <div className="p15-vision-grid">
              {[
                { icon: "⚙️", title: "Smart Contracts", desc: "Automated validation logic for quality and origin standards." },
                { icon: "🔗", title: "L2 Blockchain", desc: "High-throughput, low-energy blockchain for supply chain logs." },
                { icon: "📦", title: "ERP Connector", desc: "Pre-built adapters for SAP, Oracle, and Ag-specific ERPs." },
                { icon: "🔐", title: "Identity Layer", desc: "Self-sovereign identity for farmers and logistics providers." },
                { icon: "📊", title: "Data API", desc: "RESTful endpoints for retailers to ingest provenance data." }
              ].map((item, idx) => (
                <div className="p15-vision-item" key={idx}>
                  <div className="p15-vision-icon">{item.icon}</div>
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
      <section className="product15-section p15-section-dark-alt">
        <div className="p15-container">
          <div className="product15-overview-grid">
            <div className="p15-fade-in-left">
              <span className="p15-section-badge">Technologies</span>
              <h3 className="product15-section-title">Technologies <span>Used</span></h3>
              <div className="p15-solutions-grid" style={{ gridTemplateColumns: '1fr' }}>
                {[
                  "Hyperledger & Ethereum L2 Protocols",
                  "Smart Contracts for Compliance Automation",
                  "NFC & QR Code Serialization Mesh",
                  "IoT Cold-Chain Telemetry Integration",
                  "Self-Sovereign Identity (SSI) for Farmers",
                  "API-First Architecture for ERP Connectors",
                  "Machine Learning for Fraud Pattern Detection"
                ].map((tech, idx) => (
                  <div className="p15-solution-item" key={idx} style={{ padding: '15px 24px' }}>
                    <div className="p15-sol-icon">🛠️</div>
                    <p><strong>{tech}</strong></p>
                  </div>
                ))}
              </div>
            </div>
            <div className="p15-fade-in-right">
              <span className="p15-section-badge">Applications</span>
              <h3 className="product15-section-title">Real-World <span>Applications</span></h3>
              <div className="p15-solutions-grid" style={{ gridTemplateColumns: '1fr' }}>
                {[
                  "Global organic food certification proof",
                  "High-value meat and dairy provenance",
                  "Pharmaceutical-grade medicinal crop tracking",
                  "Export/Import compliance documentation",
                  "Retail-level consumer engagement apps",
                  "Rapid industrial-scale food safety recalls"
                ].map((app, idx) => (
                  <div className="p15-solution-item" key={idx} style={{ padding: '15px 24px' }}>
                    <div className="p15-sol-icon">🌍</div>
                    <p><strong>{app}</strong></p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Benefits ─────────────────────────────────────── */}
      <section className="product15-section">
        <div className="p15-container">
          <div className="p15-text-center p15-mb-60 p15-fade-in">
            <span className="p15-section-badge">Benefits</span>
            <h3 className="p15-section-title">The <span>Precision</span> Advantage</h3>
          </div>
          <div className="p15-benefits-grid">
            {[
              { icon: "💎", title: "Brand Premium", desc: "Unlock higher retail margins with verified sustainability claims." },
              { icon: "📉", title: "Zero Fraud", desc: "Eliminate labeling fraud and protect your region's IP." },
              { icon: "🛡️", title: "Safety Shield", desc: "Minimize recall liability and protect public health with data." },
              { icon: "📈", title: "Operational Insight", desc: "Identify bottlenecks in your supply chain through audit logs." },
              { icon: "✨", title: "Consumer Loyalty", desc: "Build lasting trust with transparent, story-driven food data." }
            ].map((benefit, idx) => (
              <div className="p15-benefit-card p15-fade-in" key={idx}>
                <div className="p15-benefit-icon">{benefit.icon}</div>
                <h4>{benefit.title}</h4>
                <p>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Challenges & Future Scope ───────────────────────────────────── */}
      <section className="product15-section p15-section-dark-alt">
        <div className="p15-container">
          <div className="product15-overview-grid">
            <div className="p15-fade-in-left">
              <span className="p15-section-badge">Challenges</span>
              <h3 className="product15-section-title">Challenges & <span>Limitations</span></h3>
              <ul className="p15-capabilities-card" style={{ listStyle: 'none', padding: '30px' }}>
                {[
                  "Standardizing data entry across global smallholders",
                  "Interoperability between different blockchain networks",
                  "High computational cost of legacy blockchain layers",
                  "Ensuring 100% data integrity at the farm level",
                  "Resistance from opaque traditional wholesalers"
                ].map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '12px', display: 'flex', gap: '10px' }}>
                    <span style={{ color: '#d32f2f' }}>⚠</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p15-fade-in-right">
              <span className="p15-section-badge">Future Scope</span>
              <h3 className="product15-section-title">The <span>Future</span> of Provance</h3>
              <ul className="p15-capabilities-card" style={{ listStyle: 'none', padding: '30px' }}>
                {[
                  "Fully autonomous AI-driven audit systems",
                  "Universal food-safety tokens on global exchanges",
                  "Zero-knowledge proof privacy for farmer data",
                  "Real-time carbon sequestration credits per batch",
                  "Holographic supply chain visualization for buyers"
                ].map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '12px', display: 'flex', gap: '10px' }}>
                    <span style={{ color: 'var(--p15-primary)' }}>🚀</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Industry Impact ─────────────────────────────────── */}
      <section className="product15-section">
        <div className="p15-container">
          <div className="p15-compliance-card p15-fade-in">
            <h2>Industry Impact</h2>
            <div className="p15-compliance-grid">
              {[
                "🌍 Eradicating global food fraud and mislabeling",
                "📈 Democratizing market access for smallholder farmers",
                "🏗️ Setting the benchmark for ethical supply chains",
                "✨ Empowering consumers with the power of truth"
              ].map((item, idx) => (
                <div className="p15-compliance-item" key={idx}>{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Conclusion & Final CTA ────────────────────────────────────────── */}
      <section className="p15-final-cta p15-section-dark-alt">
        <div className="p15-container p15-text-center p15-fade-in">
          <span className="p15-section-badge">Conclusion</span>
          <h2>The <span>Provenance</span> Standard for Global Agriculture</h2>
          <p style={{ marginBottom: '20px' }}>
            Farm-to-Table Traceability Software is transforming agriculture from an opaque commodity market into a transparent, value-driven ecosystem. By merging blockchain technology with real-time field data, we enable agribusinesses to build unbreakable trust with their consumers.
          </p>
          <p style={{ marginBottom: '40px' }}>
            This solution is the critical step toward building a truly accountable, sustainable, and future-ready agricultural supply chain through radical transparency.
          </p>
           
        </div>
      </section>

      <footer className="p15-footer">
        <div className="p15-container">
          <p>&copy; 2026 Techbrain Networks. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Product15;
