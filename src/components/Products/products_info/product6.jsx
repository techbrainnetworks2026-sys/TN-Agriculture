import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './product6.css';

const Product6 = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('p6-visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.p6-fade-in, .p6-fade-in-left, .p6-fade-in-right').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="product6-page">
      {/* ─── Navigation ─────────────────────────── */}
      <nav className="product6-nav">
        <div className="p6-container">
          <button onClick={() => navigate('/#products')} className="product6-back-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Home
          </button>
        </div>
      </nav>

      {/* ─── Hero Section ─────────────────────────────────────────── */}
      <section className="product6-hero" style={{ backgroundImage: `url(/images/product_06.png)` }}>
        <div className="p6-container">
          <div className="product6-hero-content p6-fade-in">
            <span className="product6-hero-badge">Sustainability AI</span>
            <h1>Sustainable Agriculture Decision <br /><span>Support</span></h1>
            <p className="product6-hero-description">
              Data-driven sustainability tool providing carbon footprint analysis, eco-friendly practice recommendations, and resource optimization for green farming.
            </p>
             
          </div>
        </div>
      </section>

      {/* ─── Introduction & Background ─────────────────────────────────────── */}
      <section className="product6-section">
        <div className="p6-container">
          <div className="product6-overview-grid">
            <div className="product6-overview-text p6-fade-in-left">
              <span className="p6-section-badge">Introduction</span>
              <h3 className="p6-section-title">Empowering <span>Modern Agriculture</span></h3>
              <p>
                Sustainable Agriculture Decision Support is a next-generation agricultural solution that uses AI, environmental data, and sustainability metrics to transform green farming into a data-driven, measurable process.
              </p>
              <p>
                It guides farmers toward ecological resilience by providing data-driven recommendations for carbon sequestration and reduced environmental impact.
              </p>
              <div className="product6-highlight-box">
                <h4 style={{ marginBottom: '10px', color: 'var(--p6-primary-dark)' }}>Background & Problem Statement</h4>
                <p>
                  Farmers are caught between the need for high industrial yields and the global mandate for sustainability (carbon reduction, biodiversity, and soil health). Navigating complex environmental regulations while maintaining profitability is a daunting task, often leading to "decision paralysis" or missed opportunities in the carbon market. Product 6 provides the intelligence needed to optimize for both profit and the planet, turning sustainability into a measurable competitive advantage.
                </p>
              </div>
            </div>
            <div className="product6-overview-image p6-fade-in-right">
              <div className="p6-capabilities-card">
                <h3>Key Features</h3>
                <ul>
                  <li><span className="p6-check">✓</span> Carbon Footprint Analysis</li>
                  <li><span className="p6-check">✓</span> Sustainability Scorecards</li>
                  <li><span className="p6-check">✓</span> Soil Carbon Monitoring</li>
                  <li><span className="p6-check">✓</span> Eco-Friendly Recommendations</li>
                  <li><span className="p6-check">✓</span> Resource Efficiency Tracking</li>
                  <li><span className="p6-check">✓</span> Compliance Management</li>
                  <li><span className="p6-check">✓</span> Water Footprint Calculator</li>
                  <li><span className="p6-check">✓</span> Regenerative Farming Guide</li>
                  <li><span className="p6-check">✓</span> ESG Reporting Tools</li>
                  <li><span className="p6-check">✓</span> Impact Visualization</li>
</ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Problem & Solution ─────────────────────────────────────────── */}
      <section className="product6-section p6-section-dark-alt">
        <div className="p6-container">
          <div className="p6-text-center p6-mb-60 p6-fade-in">
            <span className="p6-section-badge">Problem & Solution</span>
            <h3 className="p6-section-title">Solving <span>Traditional Farming</span> Inefficiencies</h3>
          </div>
          <div className="p6-table-container p6-fade-in">
            <table className="p6-comparison-table">
              <thead>
                <tr>
                  <th>❗ Environmental Blindspots</th>
                  <th>✅ Regenerative Intelligence</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Regulatory Complexity:</strong> Struggling to keep up with evolving ESG and environmental compliance laws.</td>
                  <td><strong>Automated Compliance:</strong> AI-driven reporting that aligns farm data with global sustainability frameworks.</td>
                </tr>
                <tr>
                  <td><strong>Soil Degradation:</strong> Declining soil health and organic matter due to intensive traditional tillage.</td>
                  <td><strong>Regenerative Scenarios:</strong> Simulation models for no-till and cover cropping to rebuild soil biology.</td>
                </tr>
                <tr>
                  <td><strong>Carbon Uncertainty:</strong> Inability to quantify how much carbon is actually being sequestered in the soil.</td>
                  <td><strong>Verified Sequestration:</strong> Accurate, audit-ready carbon modeling for credit generation and revenue.</td>
                </tr>
                <tr>
                  <td><strong>Profit vs. Planet Conflict:</strong> Fearing that green practices will inevitably lead to lower harvest profits.</td>
                  <td><strong>Dual-Goal Optimization:</strong> AI strategies that maximize yield while minimizing environmental footprint.</td>
                </tr>
                <tr>
                  <td><strong>Biodiversity Loss:</strong> Monoculture practices leading to local ecosystem collapse and pest imbalance.</td>
                  <td><strong>Ecological Indexing:</strong> Monitoring and improving local biodiversity to enhance natural pest control.</td>
                </tr>
                <tr>
                  <td><strong>Inefficient Water-Energy Nexus:</strong> High energy costs for irrigation without correlating environmental impact.</td>
                  <td><strong>Nexus Optimization:</strong> Integrated analysis of water use and energy consumption for true efficiency.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── Core Functionalities ─────────────────────────────────────── */}
      <section className="product6-section">
        <div className="p6-container">
          <div className="p6-text-center p6-mb-60 p6-fade-in">
            <span className="p6-section-badge">Core Functionalities</span>
            <h3 className="p6-section-title">How We <span>Deliver Value</span></h3>
          </div>
          <div className="product6-features-grid">
            {[
              { icon: "🌱", title: "1. Soil Carbon Modeling", desc: "Advanced simulations of soil organic matter and carbon sequestration potential over 10-year horizons." },
              { icon: "🦋", title: "2. Biodiversity Tracking", desc: "Satellite and sensor-based monitoring of local flora and fauna to index ecosystem health." },
              { icon: "📄", title: "3. ESG Report Generator", desc: "One-click creation of audit-ready sustainability reports for stakeholders and regulators." },
              { icon: "🚜", title: "4. Transition Guide", desc: "Step-by-step roadmaps for moving from conventional to regenerative or organic practices." },
              { icon: "💧", title: "5. Water Footprint Hub", desc: "Deep analytics on virtual water use and groundwater replenishment rates per crop." }
            ].map((feature, idx) => (
              <div className="p6-feature-card p6-fade-in" key={idx}>
                <div className="p6-feature-icon">{feature.icon}</div>
                <h4>{feature.title}</h4>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How It Works (Step-by-Step) ─────────────────────────────────── */}
      <section className="product6-section p6-section-dark-alt">
        <div className="p6-container">
          <div className="p6-text-center p6-mb-60 p6-fade-in">
            <span className="p6-section-badge">Workflow</span>
            <h3 className="p6-section-title">The <span>Process</span> (Step-by-Step)</h3>
          </div>
          <div className="p6-support-grid">
            {[
              "1. Baseline existing environmental metrics including soil health, water use, and emissions",
              "2. Define sustainability goals (e.g., Organic Transition, Net Zero Carbon, Biodiversity Boost)",
              "3. AI simulates various regenerative scenarios and their projected economic impact",
              "4. Select and execute the optimized transition roadmap with daily task guidance",
              "5. Continuously verify practice implementation via satellite imagery and IoT sensors",
              "6. Generate verified certificates and reports for carbon markets and ESG compliance"
            ].map((text, idx) => (
              <div className="p6-support-item p6-fade-in" key={idx}>
                <div className="p6-support-dot"></div>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Technical Architecture ─────────────────────────────────────── */}
      <section className="product6-section">
        <div className="p6-container">
          <div className="p6-vision-container p6-fade-in">
            <div className="p6-vision-header p6-text-center">
              <span className="p6-section-badge">Architecture</span>
              <h3 className="p6-section-title">Technical <span>Architecture</span></h3>
            </div>
            <div className="p6-vision-grid">
              {[
                { icon: "🌏", title: "Spatial Engine", desc: "GIS-based environmental modeling for landscape-scale impact analysis." },
                { icon: "🧠", title: "Sustainability AI", desc: "Machine learning models trained on decades of regenerative ag-research." },
                { icon: "⛓️", title: "Carbon Ledger", desc: "Blockchain-backed record of sequestration claims for ultimate auditability." },
                { icon: "📊", title: "D3 Analytics", desc: "High-fidelity visualization layer for complex environmental data correlation." },
                { icon: "🔌", title: "ESG Connect", desc: "Integration with global sustainability standards (GRI, SASB, TCFD)." }
              ].map((item, idx) => (
                <div className="p6-vision-item" key={idx}>
                  <div className="p6-vision-icon">{item.icon}</div>
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
      <section className="product6-section p6-section-dark-alt">
        <div className="p6-container">
          <div className="product6-overview-grid">
            <div className="p6-fade-in-left">
              <span className="p6-section-badge">Technologies</span>
              <h3 className="p6-section-title">Technologies <span>Used</span></h3>
              <div className="p6-solutions-grid" style={{ gridTemplateColumns: '1fr' }}>
                {[
                  "Regenerative Practice Simulation Engines",
                  "Blockchain-Verified Carbon Ledgers",
                  "Multispectral Biodiversity Indexing",
                  "Automated ESG Framework Mapping",
                  "Life Cycle Assessment (LCA) Algorithms",
                  "Soil Organic Matter (SOM) Predictive AI",
                  "Virtual Water Accounting Protocols"
                ].map((tech, idx) => (
                  <div className="p6-solution-item" key={idx} style={{ padding: '15px 24px' }}>
                    <div className="p6-sol-icon">🛠️</div>
                    <p><strong>{tech}</strong></p>
                  </div>
                ))}
              </div>
            </div>
            <div className="p6-fade-in-right">
              <span className="p2-section-badge">Applications</span>
              <h3 className="p2-section-title">Real-World <span>Applications</span></h3>
              <div className="p6-solutions-grid" style={{ gridTemplateColumns: '1fr' }}>
                {[
                  "Carbon credit farming & monetization",
                  "Transition to organic certification",
                  "Corporate ESG supply chain auditing",
                  "Regenerative practice validation",
                  "Public land environmental stewardship",
                  "Agricultural bank risk assessment (Green Loans)"
                ].map((app, idx) => (
                  <div className="p6-solution-item" key={idx} style={{ padding: '15px 24px' }}>
                    <div className="p6-sol-icon">🌍</div>
                    <p><strong>{app}</strong></p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Benefits ─────────────────────────────────────── */}
      <section className="product6-section">
        <div className="p6-container">
          <div className="p6-text-center p6-mb-60 p6-fade-in">
            <span className="p6-section-badge">Benefits</span>
            <h3 className="p6-section-title">The <span>Precision</span> Advantage</h3>
          </div>
          <div className="p6-benefits-grid">
            {[
              { icon: "🍃", title: "Carbon Revenue", desc: "Unlock secondary income streams from verified sequestration." },
              { icon: "💎", title: "Soil Resilience", desc: "Build high-health soil that withstands drought and floods." },
              { icon: "🛡️", title: "Future-Proofing", desc: "Stay ahead of global environmental regulations and bans." },
              { icon: "🤝", title: "Brand Premium", desc: "Command higher market prices with verified green produce." },
              { icon: "📈", title: "ESG Valuation", desc: "Increase enterprise value through superior sustainability scores." }
            ].map((benefit, idx) => (
              <div className="p6-benefit-card p6-fade-in" key={idx}>
                <div className="p6-benefit-icon">{benefit.icon}</div>
                <h4>{benefit.title}</h4>
                <p>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Challenges & Future Scope ───────────────────────────────────── */}
      <section className="product6-section p6-section-dark-alt">
        <div className="p6-container">
          <div className="product6-overview-grid">
            <div className="p6-fade-in-left">
              <span className="p6-section-badge">Challenges</span>
              <h3 className="p6-section-title">Challenges & <span>Limitations</span></h3>
              <ul className="p6-capabilities-card" style={{ listStyle: 'none', padding: '30px' }}>
                {[
                  "Long feedback loops for measurable soil health changes",
                  "Lack of standardized global carbon pricing models",
                  "High data-granularity requirements for auditing",
                  "Difficulty in quantifying 'Soft' benefits like biodiversity",
                  "Balancing immediate costs with long-term ecological ROI"
                ].map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '12px', display: 'flex', gap: '10px' }}>
                    <span style={{ color: '#d32f2f' }}>⚠</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p6-fade-in-right">
              <span className="p6-section-badge">Future Scope</span>
              <h3 className="p6-section-title">The <span>Future</span> of Green Ag</h3>
              <ul className="p6-capabilities-card" style={{ listStyle: 'none', padding: '30px' }}>
                {[
                  "Real-time buried IoT soil-carbon sensors",
                  "Global satellite-direct carbon radar link",
                  "AI-autonomous regenerative fleet control",
                  "Nature-based asset tokenization (NFTs)",
                  "Predictive global biodiversity shift modeling"
                ].map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '12px', display: 'flex', gap: '10px' }}>
                    <span style={{ color: 'var(--p6-primary)' }}>🚀</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Industry Impact ─────────────────────────────────── */}
      <section className="product6-section">
        <div className="p6-container">
          <div className="p6-compliance-card p6-fade-in">
            <h2>Industry Impact</h2>
            <div className="p6-compliance-grid">
              {[
                "🌍 Proves the 'Dual-Goal' viability of profit & planet",
                "🧬 Drives the transition to science-based regenerative ag",
                "📈 Validates millions in carbon sequestration assets",
                "⚖️ Setting the global standard for agricultural ESG transparency"
              ].map((item, idx) => (
                <div className="p6-compliance-item" key={idx}>{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Conclusion & Final CTA ────────────────────────────────────────── */}
      <section className="p6-final-cta p6-section-dark-alt">
        <div className="p6-container p6-text-center p6-fade-in">
          <span className="p6-section-badge">Conclusion</span>
          <h2>Deciding for a <span>Greener</span> Future</h2>
          <p style={{ marginBottom: '20px' }}>
            Sustainable Agriculture Decision Support is transforming sustainability from a checkbox into a core financial driver. By merging environmental spatial modeling, carbon-ledger transparency, and regenerative practice simulation, we enable agribusinesses to thrive in an era of climate accountability while securing the long-term health of our global soil and water systems.
          </p>
          <p style={{ marginBottom: '40px' }}>
            This solution is the final step toward building a truly resilient, eco-positive, and future-ready agricultural ecosystem through environmental intelligence.
          </p>
          
        </div>
      </section>

      <footer className="p6-footer">
        <div className="p6-container">
          <p>&copy; 2026 Techbrain Networks. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Product6;
