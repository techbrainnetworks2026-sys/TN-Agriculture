import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './product10.css';

const Product10 = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('p10-visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.p10-fade-in, .p10-fade-in-left, .p10-fade-in-right').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="product10-page">
      {/* ─── Navigation ─────────────────────────── */}
      <nav className="product10-nav">
        <div className="p10-container">
          <button onClick={() => navigate('/#products')} className="product10-back-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Home
          </button>
        </div>
      </nav>

      {/* ─── Hero Section ─────────────────────────────────────────── */}
      <section className="product10-hero" style={{ backgroundImage: `url(/images/product_10.png)` }}>
        <div className="p10-container">
          <div className="product10-hero-content p10-fade-in">
            <span className="product10-hero-badge">Enterprise Management</span>
            <h1>Agribusiness ERP & <br /><span>Financial Software</span></h1>
            <p className="product10-hero-description">
              End-to-end enterprise resource planning for agriculture with farm accounting, inventory management, cost analysis, payroll, and financial reporting modules.
            </p>
             
          </div>
        </div>
      </section>

      {/* ─── Introduction & Background ─────────────────────────────────────── */}
      <section className="product10-section">
        <div className="p10-container">
          <div className="product10-overview-grid">
            <div className="product10-overview-text p10-fade-in-left">
              <span className="p10-section-badge">Introduction</span>
              <h3 className="p10-section-title">Empowering <span>Modern Agribusiness</span></h3>
              <p>
                Agribusiness ERP & Financial Software is a comprehensive digital solution designed to unify the complex financial and operational threads of modern agricultural enterprises.
              </p>
              <p>
                It streamlines everything from seed-to-sale accounting to complex labor management, providing a "single source of truth" for farm owners and stakeholders.
              </p>
              <div className="product10-highlight-box">
                <h4 style={{ marginBottom: '10px', color: 'var(--p10-primary-dark)' }}>Background & Problem Statement</h4>
                <p>
                  Most farms operate with fragmented data—spreadsheets for payroll, paper logs for inventory, and disconnected bank statements. This lack of integration makes it impossible to calculate the true cost of production per acre or variety. Product 10 solves this by integrating all financial flows into one industrial-grade ERP system tailored specifically for the agricultural lifecycle.
                </p>
              </div>
            </div>
            <div className="product10-overview-image p10-fade-in-right">
              <div className="p10-capabilities-card">
                <h3>Key Features</h3>
                <ul>
                  <li><span className="p10-check">✓</span> Multi-Entity Farm Accounting</li>
                  <li><span className="p10-check">✓</span> Real-Time Inventory Tracking</li>
                  <li><span className="p10-check">✓</span> Automated Labor & Payroll</li>
                  <li><span className="p10-check">✓</span> Crop Cycle Cost Analysis</li>
                  <li><span className="p10-check">✓</span> Asset & Fleet Depreciation</li>
                  <li><span className="p10-check">✓</span> Procurement & Vendor Portals</li>
                  <li><span className="p10-check">✓</span> Sales & Contract Management</li>
                  <li><span className="p10-check">✓</span> Compliance & Audit Reporting</li>
                  <li><span className="p10-check">✓</span> Financial Forecasting Tools</li>
                  <li><span className="p10-check">✓</span> Mobile Expense Capturing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Problem & Solution ─────────────────────────────────────────── */}
      <section className="product10-section p10-section-dark-alt">
        <div className="p10-container">
          <div className="p10-text-center p10-mb-60 p10-fade-in">
            <span className="p10-section-badge">Problem & Solution</span>
            <h3 className="p10-section-title">Solving <span>Operational</span> Fragmentation</h3>
          </div>
          <div className="p10-table-container p10-fade-in">
            <table className="p10-comparison-table">
              <thead>
                <tr>
                  <th>❗ Fragmented Data Silos</th>
                  <th>✅ Unified Agribusiness Intelligence</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Invisible Unit Costs:</strong> Not knowing if a specific crop variety was actually profitable after labor and inputs.</td>
                  <td><strong>Granular Costing:</strong> Automatic allocation of every dollar to specific fields and harvest batches.</td>
                </tr>
                <tr>
                  <td><strong>Inventory Shrinkage:</strong> Missing fertilizer or chemicals due to lack of real-time stock tracking.</td>
                  <td><strong>Stock Shield:</strong> QR-linked inventory system that tracks usage from warehouse to the tractor.</td>
                </tr>
                <tr>
                  <td><strong>Payroll Complexity:</strong> Manual tracking of seasonal workers across different tasks and pay rates.</td>
                  <td><strong>Auto-Labor:</strong> Mobile clock-in/out linked to task IDs for automated, compliant payroll generation.</td>
                </tr>
                <tr>
                  <td><strong>Audit Anxiety:</strong> Struggling to gather documents for tax, bank, or sustainability audits.</td>
                  <td><strong>Audit-Ready Ledger:</strong> One-click generation of all required financial and compliance records.</td>
                </tr>
                <tr>
                  <td><strong>Procurement Lag:</strong> Running out of essential supplies due to manual reordering processes.</td>
                  <td><strong>Smart Reorder:</strong> Automated procurement triggers based on real-time stock depletion rates.</td>
                </tr>
                <tr>
                  <td><strong>Asset Downtime:</strong> Unplanned tractor repairs disrupting the planting or harvest window.</td>
                  <td><strong>Fleet Care AI:</strong> Predictive maintenance scheduling based on engine hours and sensor telemetry.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── Core Functionalities ─────────────────────────────────────── */}
      <section className="product10-section">
        <div className="p10-container">
          <div className="p10-text-center p10-mb-60 p10-fade-in">
            <span className="p10-section-badge">Core Functionalities</span>
            <h3 className="p10-section-title">How We <span>Deliver Value</span></h3>
          </div>
          <div className="product10-features-grid">
            {[
              { icon: "💰", title: "1. Smart Accounting", desc: "Agricultural-specific chart of accounts designed for seasonal cash flows." },
              { icon: "📦", title: "2. Inventory Sync", desc: "Real-time tracking of inputs (seeds, fertilizer) and outputs (harvested grain)." },
              { icon: "👷", title: "3. Labor Hub", desc: "Centralized management of full-time and seasonal staff with role-based access." },
              { icon: "📈", title: "4. Profit Analytics", desc: "Deep-dive dashboards showing ROI per field, per variety, and per season." },
              { icon: "📄", title: "5. Compliance Engine", desc: "Automated tax and regulatory reporting tailored to local agricultural laws." }
            ].map((feature, idx) => (
              <div className="p10-feature-card p10-fade-in" key={idx}>
                <div className="p10-feature-icon">{feature.icon}</div>
                <h4>{feature.title}</h4>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How It Works (Step-by-Step) ─────────────────────────────────── */}
      <section className="product10-section p10-section-dark-alt">
        <div className="p10-container">
          <div className="p10-text-center p10-mb-60 p10-fade-in">
            <span className="p10-section-badge">Workflow</span>
            <h3 className="p10-section-title">The <span>Digital</span> Journey</h3>
          </div>
          <div className="p10-support-grid">
            {[
              "1. Onboard assets, fields, and staff into the centralized ERP core",
              "2. Track daily operational costs (fuel, seeds, labor) via mobile app",
              "3. Integrate bank feeds and vendor invoices for real-time cash flow visibility",
              "4. Correlate field operations data with financial outlays for cost analysis",
              "5. Generate harvest reports and sales contracts directly within the system",
              "6. Close the season with comprehensive P&L reports and future budget planning"
            ].map((text, idx) => (
              <div className="p10-support-item p10-fade-in" key={idx}>
                <div className="p10-support-dot"></div>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Technical Architecture ─────────────────────────────────────── */}
      <section className="product10-section">
        <div className="p10-container">
          <div className="p10-vision-container p10-fade-in">
            <div className="p10-vision-header p10-text-center">
              <span className="p10-section-badge">Architecture</span>
              <h3 className="p10-section-title">Technical <span>Architecture</span></h3>
            </div>
            <div className="p10-vision-grid">
              {[
                { icon: "☁️", title: "Cloud Core", desc: "Highly secure, multi-tenant SaaS architecture for 24/7 global access." },
                { icon: "📱", title: "Mobile Edge", desc: "Offline-first mobile applications for data capture in remote fields." },
                { icon: "🔗", title: "Integration API", desc: "Open REST APIs for connecting with IoT sensors and smart machinery." },
                { icon: "🔐", title: "Security Vault", desc: "Enterprise-grade encryption for all financial and personnel records." },
                { icon: "📊", title: "Analytics Hub", desc: "Big-data engine for complex agricultural business simulations." }
              ].map((item, idx) => (
                <div className="p10-vision-item" key={idx}>
                  <div className="p10-vision-icon">{item.icon}</div>
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
      <section className="product10-section p10-section-dark-alt">
        <div className="p10-container">
          <div className="product10-overview-grid">
            <div className="p10-fade-in-left">
              <span className="p10-section-badge">Technologies</span>
              <h3 className="p10-section-title">Technologies <span>Used</span></h3>
              <div className="p10-solutions-grid" style={{ gridTemplateColumns: '1fr' }}>
                {[
                  "Cloud-Native ERP Framework",
                  "Double-Entry Accounting Engine",
                  "OCR Expense Scanning Technology",
                  "Real-Time Inventory Reconciliation AI",
                  "Bank Feed API Integrations",
                  "Role-Based Access Control (RBAC)",
                  "Automated Compliance Document Generation"
                ].map((tech, idx) => (
                  <div className="p10-solution-item" key={idx} style={{ padding: '15px 24px' }}>
                    <div className="p10-sol-icon">🛠️</div>
                    <p><strong>{tech}</strong></p>
                  </div>
                ))}
              </div>
            </div>
            <div className="p10-fade-in-right">
              <span className="p10-section-badge">Applications</span>
              <h3 className="p10-section-title">Real-World <span>Applications</span></h3>
              <div className="p10-solutions-grid" style={{ gridTemplateColumns: '1fr' }}>
                {[
                  "Large-scale multi-site agricultural enterprises",
                  "High-value specialty crop operations",
                  "Vertical farming & controlled environment centers",
                  "Agricultural cooperatives & producer groups",
                  "Contract farming & supply chain management",
                  "Ranching and livestock production companies"
                ].map((app, idx) => (
                  <div className="p10-solution-item" key={idx} style={{ padding: '15px 24px' }}>
                    <div className="p10-sol-icon">🌍</div>
                    <p><strong>{app}</strong></p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Benefits ─────────────────────────────────────── */}
      <section className="product10-section">
        <div className="p10-container">
          <div className="p10-text-center p10-mb-60 p10-fade-in">
            <span className="p10-section-badge">Benefits</span>
            <h3 className="p10-section-title">The <span>Precision</span> Advantage</h3>
          </div>
          <div className="p10-benefits-grid">
            {[
              { icon: "💎", title: "Cost Transparency", desc: "Know the exact profitability of every acre and crop variety." },
              { icon: "⚡", title: "Efficiency Gains", desc: "Automate manual paperwork and save hundreds of office hours." },
              { icon: "🛡️", title: "Risk Mitigation", desc: "Ensure financial compliance and protect against asset loss." },
              { icon: "📈", title: "Decision Confidence", desc: "Base your future investments on hard data, not intuition." },
              { icon: "💰", title: "Better Cash Flow", desc: "Optimize inventory and procurement for healthy liquidity." }
            ].map((benefit, idx) => (
              <div className="p10-benefit-card p10-fade-in" key={idx}>
                <div className="p10-benefit-icon">{benefit.icon}</div>
                <h4>{benefit.title}</h4>
                <p>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Challenges & Future Scope ───────────────────────────────────── */}
      <section className="product10-section p10-section-dark-alt">
        <div className="p10-container">
          <div className="product10-overview-grid">
            <div className="p10-fade-in-left">
              <span className="p10-section-badge">Challenges</span>
              <h3 className="p10-section-title">Challenges & <span>Limitations</span></h3>
              <ul className="p10-capabilities-card" style={{ listStyle: 'none', padding: '30px' }}>
                {[
                  "Complexity of migrating legacy paper records",
                  "Initial time investment for detailed data setup",
                  "Ensuring data entry discipline across field staff",
                  "Integrating with older, non-connected farm machinery",
                  "Managing data security in multi-user environments"
                ].map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '12px', display: 'flex', gap: '10px' }}>
                    <span style={{ color: '#d32f2f' }}>⚠</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p10-fade-in-right">
              <span className="p10-section-badge">Future Scope</span>
              <h3 className="p10-section-title">The <span>Future</span> of Ag-ERP</h3>
              <ul className="p10-capabilities-card" style={{ listStyle: 'none', padding: '30px' }}>
                {[
                  "Fully autonomous invoice-to-pay automation",
                  "Blockchain-verified carbon credit financial logs",
                  "AI-driven predictive market-timing for sales",
                  "Direct ERP-to-Machinery telemetry for auto-costing",
                  "Universal agricultural financial standards (UAFS) sync"
                ].map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '12px', display: 'flex', gap: '10px' }}>
                    <span style={{ color: 'var(--p10-primary)' }}>🚀</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Industry Impact ─────────────────────────────────── */}
      <section className="product10-section">
        <div className="p10-container">
          <div className="p10-compliance-card p10-fade-in">
            <h2>Industry Impact</h2>
            <div className="p10-compliance-grid">
              {[
                "📈 Professionalizing global agricultural enterprise management",
                "🏗️ Building the financial backbone for sustainable farming",
                "🌍 Enabling cross-border agricultural investment transparency",
                "✨ Empowering the next generation of data-driven farmers"
              ].map((item, idx) => (
                <div className="p10-compliance-item" key={idx}>{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Conclusion & Final CTA ────────────────────────────────────────── */}
      <section className="p10-final-cta p10-section-dark-alt">
        <div className="p10-container p10-text-center p10-fade-in">
          <span className="p10-section-badge">Conclusion</span>
          <h2>The <span>Financial</span> Core of Modern Farming</h2>
          <p style={{ marginBottom: '20px' }}>
            Agribusiness ERP & Financial Software is transforming farms from seasonal operations into high-precision industrial enterprises. By merging operations data with financial accounting, we enable agribusinesses to optimize their ROI and secure their future in a complex global market.
          </p>
          <p style={{ marginBottom: '40px' }}>
            This solution is the critical step toward building a truly professionalized, transparent, and future-ready agricultural ecosystem through business intelligence.
          </p>
           
        </div>
      </section>

      <footer className="p10-footer">
        <div className="p10-container">
          <p>&copy; 2026 Techbrain Networks. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Product10;
