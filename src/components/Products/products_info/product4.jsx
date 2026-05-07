import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './product4.css';

const Product4 = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('p4-visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.p4-fade-in, .p4-fade-in-left, .p4-fade-in-right').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="product4-page">
      {/* ─── Navigation ─────────────────────────── */}
      <nav className="product4-nav">
        <div className="p4-container">
          <button onClick={() => navigate('/#products')} className="product4-back-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Home
          </button>
        </div>
      </nav>

      {/* ─── Hero Section ─────────────────────────────────────────── */}
      <section className="product4-hero" style={{ backgroundImage: `url(/images/product_04.png)` }}>
        <div className="p4-container">
          <div className="product4-hero-content p4-fade-in">
            <span className="product4-hero-badge">Blockchain Traceability</span>
            <h1>Agricultural Supply Chain <br /><span>Blockchain</span></h1>
            <p className="product4-hero-description">
              Transparent, tamper-proof blockchain traceability from farm to consumer, ensuring product authenticity, compliance tracking, and supply chain integrity.
            </p>
            
          </div>
        </div>
      </section>

      {/* ─── Introduction & Background ─────────────────────────────────────── */}
      <section className="product4-section">
        <div className="p4-container">
          <div className="product4-overview-grid">
            <div className="product4-overview-text p4-fade-in-left">
              <span className="p4-section-badge">Introduction</span>
              <h3 className="p4-section-title">Empowering <span>Modern Agriculture</span></h3>
              <p>
                Agricultural Supply Chain Blockchain is a next-generation agricultural solution that uses distributed ledger technology, IoT, and smart contracts to transform food traceability and supply chain transparency into a secure, tamper-proof process.
              </p>
              <p>
                It builds trust between producers and consumers by providing a transparent, verifiable history of the product's journey from origin to point of sale.
              </p>
              <div className="product4-highlight-box">
                <h4 style={{ marginBottom: '10px', color: 'var(--p4-primary-dark)' }}>Background & Problem Statement</h4>
                <p>
                  Global food supply chains are plagued by "information silos," making it nearly impossible to verify the origin, safety, and sustainability of produce. Consumers and regulators are demanding 100% transparency, yet traditional paper-based tracking leads to high fraud risks and massive food waste due to slow, manual recall processes. Product 4 restores consumer confidence by creating an immutable, cryptographic record of every batch's journey from "Farm to Fork."
                </p>
              </div>
            </div>
            <div className="product4-overview-image p4-fade-in-right">
              <div className="p4-capabilities-card">
                <h3>Key Features</h3>
                <ul>
                  <li><span className="p4-check">✓</span> End-to-End Traceability</li>
                  <li><span className="p4-check">✓</span> Smart Contract Automation</li>
                  <li><span className="p4-check">✓</span> Tamper-Proof Records</li>
                  <li><span className="p4-check">✓</span> Compliance Verification</li>
                  <li><span className="p4-check">✓</span> Transparent Pricing History</li>
                  <li><span className="p4-check">✓</span> Supply Chain Visibility</li>
                  <li><span className="p4-check">✓</span> Quality Certification Tracking</li>
                  <li><span className="p4-check">✓</span> Real-time Logistics Monitoring</li>
                  <li><span className="p4-check">✓</span> Counterfeit Prevention</li>
                  <li><span className="p4-check">✓</span> Digital Documentation</li>
</ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Problem & Solution ─────────────────────────────────────────── */}
      <section className="product4-section p4-section-dark-alt">
        <div className="p4-container">
          <div className="p4-text-center p4-mb-60 p4-fade-in">
            <span className="p4-section-badge">Problem & Solution</span>
            <h3 className="p4-section-title">Solving <span>Traditional Farming</span> Inefficiencies</h3>
          </div>
          <div className="p4-table-container p4-fade-in">
            <table className="p4-comparison-table">
              <thead>
                <tr>
                  <th>❗ Opaque Supply Chains</th>
                  <th>✅ Cryptographic Transparency</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Lack of Provenance:</strong> Inability to prove that "organic" or "fair-trade" claims are actually true.</td>
                  <td><strong>Immutable Ledger:</strong> Every claim is backed by a cryptographically signed entry on the blockchain.</td>
                </tr>
                <tr>
                  <td><strong>Slow Product Recalls:</strong> Taking weeks to identify the source of a contaminated batch during an outbreak.</td>
                  <td><strong>Instant Source Mapping:</strong> Identify the exact field and harvest date of any batch in seconds via QR code.</td>
                </tr>
                <tr>
                  <td><strong>Document Fraud:</strong> Easy-to-forge paper certifications for safety and sustainability standards.</td>
                  <td><strong>Digital Passports:</strong> Secure, tamper-proof digital certificates linked directly to the product batch.</td>
                </tr>
                <tr>
                  <td><strong>High Waste in Logistics:</strong> Spoilage caused by undetected temperature spikes during long-distance transit.</td>
                  <td><strong>IoT Proof-of-State:</strong> IoT sensors log environmental conditions directly onto the blockchain in real-time.</td>
                </tr>
                <tr>
                  <td><strong>Delayed Farmer Payments:</strong> Farmers waiting weeks for payment confirmation from international buyers.</td>
                  <td><strong>Smart Contract Escrow:</strong> Automated payments triggered instantly upon delivery confirmation.</td>
                </tr>
                <tr>
                  <td><strong>Information Asymmetry:</strong> Retailers and consumers having no visibility into the mid-stream logistics process.</td>
                  <td><strong>Unified Visibility:</strong> Shared, permissioned ledger where all stakeholders see the same truth.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── Core Functionalities ─────────────────────────────────────── */}
      <section className="product4-section">
        <div className="p4-container">
          <div className="p4-text-center p4-mb-60 p4-fade-in">
            <span className="p4-section-badge">Core Functionalities</span>
            <h3 className="p4-section-title">How We <span>Deliver Value</span></h3>
          </div>
          <div className="product4-features-grid">
            {[
              { icon: "📦", title: "1. Batch Serialization", desc: "Unique cryptographic IDs for every harvest batch to prevent duplication or fraud." },
              { icon: "📝", title: "2. Smart Contracts", desc: "Self-executing logic that validates quality parameters before allowing batch transfer." },
              { icon: "🌡️", title: "3. IoT Oracle Link", desc: "Direct integration with logistics sensors to prove temperature compliance on-chain." },
              { icon: "📱", title: "4. Consumer QR Hub", desc: "White-labeled mobile interface for consumers to scan and view provenance stories." },
              { icon: "⚖️", title: "5. Regulatory Portal", desc: "Automated compliance reporting for food safety authorities and export customs." }
            ].map((feature, idx) => (
              <div className="p4-feature-card p4-fade-in" key={idx}>
                <div className="p4-feature-icon">{feature.icon}</div>
                <h4>{feature.title}</h4>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How It Works (Step-by-Step) ─────────────────────────────────── */}
      <section className="product4-section p4-section-dark-alt">
        <div className="p4-container">
          <div className="p4-text-center p4-mb-60 p4-fade-in">
            <span className="p4-section-badge">Workflow</span>
            <h3 className="p4-section-title">The <span>Process</span> (Step-by-Step)</h3>
          </div>
          <div className="p4-support-grid">
            {[
              "1. Farmer registers the harvest batch and signs the origin data with a private key",
              "2. Batch is assigned a unique, non-fungible digital passport on the blockchain",
              "3. Logistics nodes confirm custody changes with cryptographic timestamps",
              "4. IoT devices post 'Proof-of-State' (temperature/humidity) to the ledger every hour",
              "5. Smart contracts verify that all safety milestones were met during the journey",
              "6. Consumers scan the QR code at retail to view the full, unalterable audit trail"
            ].map((text, idx) => (
              <div className="p4-support-item p4-fade-in" key={idx}>
                <div className="p4-support-dot"></div>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Technical Architecture ─────────────────────────────────────── */}
      <section className="product4-section">
        <div className="p4-container">
          <div className="p4-vision-container p4-fade-in">
            <div className="p4-vision-header p4-text-center">
              <span className="p4-section-badge">Architecture</span>
              <h3 className="p4-section-title">Technical <span>Architecture</span></h3>
            </div>
            <div className="p4-vision-grid">
              {[
                { icon: "🧱", title: "Ledger Layer", desc: "Hyperledger Fabric or Private Ethereum for secure, high-speed transactions." },
                { icon: "📑", title: "Smart Contract Layer", desc: "Solidity/Go based logic for automated compliance and payments." },
                { icon: "💾", title: "Storage Layer", desc: "IPFS (InterPlanetary File System) for decentralized document hosting." },
                { icon: "🔑", title: "Identity Layer", desc: "DID (Decentralized Identifiers) for farmers and logistics providers." },
                { icon: "🔌", title: "API Gateway", desc: "RESTful endpoints for easy integration with legacy ERP systems." }
              ].map((item, idx) => (
                <div className="p4-vision-item" key={idx}>
                  <div className="p4-vision-icon">{item.icon}</div>
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
      <section className="product4-section p4-section-dark-alt">
        <div className="p4-container">
          <div className="product4-overview-grid">
            <div className="p4-fade-in-left">
              <span className="p4-section-badge">Technologies</span>
              <h3 className="p4-section-title">Technologies <span>Used</span></h3>
              <div className="p4-solutions-grid" style={{ gridTemplateColumns: '1fr' }}>
                {[
                  "Hyperledger Fabric / Ethereum EVM",
                  "Solidity & Go for Smart Contracts",
                  "IPFS for Decentralized Document Storage",
                  "Web3.js & Ethers.js Client Integration",
                  "Node.js Backend Microservices",
                  "React Native for Mobile Field DApps",
                  "Zero-Knowledge Proofs (ZKP) for Privacy"
                ].map((tech, idx) => (
                  <div className="p4-solution-item" key={idx} style={{ padding: '15px 24px' }}>
                    <div className="p4-sol-icon">🛠️</div>
                    <p><strong>{tech}</strong></p>
                  </div>
                ))}
              </div>
            </div>
            <div className="p4-fade-in-right">
              <span className="p4-section-badge">Applications</span>
              <h3 className="p4-section-title">Real-World <span>Applications</span></h3>
              <div className="p4-solutions-grid" style={{ gridTemplateColumns: '1fr' }}>
                {[
                  "Organic & Non-GMO certification tracking",
                  "High-value export provenance (Avocados, Berries)",
                  "Pharmaceutical-grade herbal supply chains",
                  "Fair-trade & ESG compliance auditing",
                  "Livestock individual animal 'Digital Passports'",
                  "Seed-to-Shelf tracking for specialty grains"
                ].map((app, idx) => (
                  <div className="p4-solution-item" key={idx} style={{ padding: '15px 24px' }}>
                    <div className="p4-sol-icon">🌍</div>
                    <p><strong>{app}</strong></p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Benefits ─────────────────────────────────────── */}
      <section className="product4-section">
        <div className="p4-container">
          <div className="p4-text-center p4-mb-60 p4-fade-in">
            <span className="p4-section-badge">Benefits</span>
            <h3 className="p4-section-title">The <span>Precision</span> Advantage</h3>
          </div>
          <div className="p4-benefits-grid">
            {[
              { icon: "🛡️", title: "100% Trust", desc: "Mathematical proof of origin replaces marketing claims." },
              { icon: "⚡", title: "Rapid Recalls", desc: "Identify and isolate problematic batches in seconds." },
              { icon: "📉", title: "Zero Fraud", desc: "Eliminate the risk of certificate forgery and fake produce." },
              { icon: "🤝", title: "Faster Payments", desc: "Trigger automated financial settlements upon delivery." },
              { icon: "🌍", title: "ESG Compliance", desc: "Easily prove sustainability metrics for global regulators." }
            ].map((benefit, idx) => (
              <div className="p4-benefit-card p4-fade-in" key={idx}>
                <div className="p4-benefit-icon">{benefit.icon}</div>
                <h4>{benefit.title}</h4>
                <p>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Challenges & Future Scope ───────────────────────────────────── */}
      <section className="product4-section p4-section-dark-alt">
        <div className="p4-container">
          <div className="product4-overview-grid">
            <div className="p4-fade-in-left">
              <span className="p4-section-badge">Challenges</span>
              <h3 className="p4-section-title">Challenges & <span>Limitations</span></h3>
              <ul className="p4-capabilities-card" style={{ listStyle: 'none', padding: '30px' }}>
                {[
                  "Digital onboarding of non-technical smallholders",
                  "Interoperability between different blockchain protocols",
                  "High computational cost of consensus (solved via Layer 2)",
                  "Ensuring data quality at the 'First Mile' entry",
                  "Legal recognition of smart contracts in some regions"
                ].map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '12px', display: 'flex', gap: '10px' }}>
                    <span style={{ color: '#d32f2f' }}>⚠</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p4-fade-in-right">
              <span className="p4-section-badge">Future Scope</span>
              <h3 className="p4-section-title">The <span>Future</span> of Trust</h3>
              <ul className="p4-capabilities-card" style={{ listStyle: 'none', padding: '30px' }}>
                {[
                  "Tokenized carbon credit monetization",
                  "AI-driven automated logistics forecasting",
                  "Global 'Food Trust' decentralized consortium",
                  "Real-time micro-insurance for spoilage",
                  "Voice-activated field logging for farmers"
                ].map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '12px', display: 'flex', gap: '10px' }}>
                    <span style={{ color: 'var(--p4-primary)' }}>🚀</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Industry Impact ─────────────────────────────────── */}
      <section className="product4-section">
        <div className="p4-container">
          <div className="p4-compliance-card p4-fade-in">
            <h2>Industry Impact</h2>
            <div className="p4-compliance-grid">
              {[
                "⛓️ Eliminates information silos in global logistics",
                "🍎 Drastically reduces food waste from recall delays",
                "🌱 Validates fair-trade and sustainable sourcing",
                "🔒 Protects brands from counterfeit product risks"
              ].map((item, idx) => (
                <div className="p4-compliance-item" key={idx}>{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Conclusion & Final CTA ────────────────────────────────────────── */}
      <section className="p4-final-cta p4-section-dark-alt">
        <div className="p4-container p4-text-center p4-fade-in">
          <span className="p4-section-badge">Conclusion</span>
          <h2>Restoring Trust Through <span>Transparency</span></h2>
          <p style={{ marginBottom: '20px' }}>
            Agricultural Supply Chain Blockchain is more than a tracking tool; it is a new foundation for global food trust. By merging immutable ledgers, IoT proof-of-state, and smart contract automation, we enable a transparent ecosystem where every stakeholder—from the smallholder farmer to the urban consumer—can verify the integrity of the food they handle.
          </p>
          <p style={{ marginBottom: '40px' }}>
            This solution is the critical step toward building a decentralized, efficient, and future-ready food supply chain for the world.
          </p>
          
        </div>
      </section>

      <footer className="p4-footer">
        <div className="p4-container">
          <p>&copy; 2026 Techbrain Networks. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Product4;
