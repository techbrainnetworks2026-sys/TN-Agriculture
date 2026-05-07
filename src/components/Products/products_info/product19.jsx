import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './product19.css';

const Product19 = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('p19-visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.p19-fade-in, .p19-fade-in-left, .p19-fade-in-right').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="product19-page">
      {/* ─── Navigation ─────────────────────────── */}
      <nav className="product19-nav">
        <div className="p19-container">
          <button onClick={() => navigate('/#products')} className="product19-back-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Home
          </button>
        </div>
      </nav>

      {/* ─── Hero Section ─────────────────────────────────────────── */}
      <section className="product19-hero" style={{ backgroundImage: `url(/images/product_19.png)` }}>
        <div className="p19-container">
          <div className="product19-hero-content p19-fade-in">
            <span className="product19-hero-badge">Market Data</span>
            <h1>Agricultural Market <br /><span>Intelligence</span></h1>
            <p className="product19-hero-description">
              Data-driven insights into global agricultural commodity markets, price trends, supply chain analytics, and predictive trade modeling for agribusinesses.
            </p>
             
          </div>
        </div>
      </section>

      {/* ─── Introduction & Background ─────────────────────────────────────── */}
      <section className="product19-section">
        <div className="p19-container">
          <div className="product19-overview-grid">
            <div className="product19-overview-text p19-fade-in-left">
              <span className="p19-section-badge">Introduction</span>
              <h3 className="product19-section-title">Strategizing for <span>Global Markets</span></h3>
              <p>
                Agricultural Market Intelligence is a powerful analytics platform that aggregates global trade data, harvest forecasts, and geopolitical indicators to provide actionable market signals.
              </p>
              <p>
                It helps producers and traders navigate commodity price volatility by predicting supply-demand shifts and identifying optimal trading windows.
              </p>
              <div className="product19-highlight-box">
                <h4 style={{ marginBottom: '10px', color: 'var(--p19-primary-dark)' }}>Background & Problem Statement</h4>
                <p>
                  Agricultural markets are highly volatile, influenced by weather, policy changes, and global logistics bottlenecks. Most agribusinesses lack real-time visibility into these complex factors, often selling crops when prices are at their seasonal lows. Product 19 democratizes high-end market data, providing small and large producers with the intelligence needed to hedge risks and maximize sales revenue.
                </p>
              </div>
            </div>
            <div className="product19-overview-image p19-fade-in-right">
              <div className="p19-capabilities-card">
                <h3>Key Features</h3>
                <ul>
                  <li><span className="p19-check">✓</span> Real-Time Price Discovery</li>
                  <li><span className="p19-check">✓</span> Global Supply-Demand Heatmaps</li>
                  <li><span className="p19-check">✓</span> Predictive Price Modeling</li>
                  <li><span className="p19-check">✓</span> Logistics Bottleneck Tracking</li>
                  <li><span className="p19-check">✓</span> Geopolitical Risk Analysis</li>
                  <li><span className="p19-check">✓</span> Historical Trend Benchmarking</li>
                  <li><span className="p19-check">✓</span> Custom Market Alerts</li>
                  <li><span className="p19-check">✓</span> Multi-Currency Arbitrage</li>
                  <li><span className="p19-check">✓</span> Inventory Velocity Analytics</li>
                  <li><span className="p19-check">✓</span> Sustainability Premium Radar</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Problem & Solution ─────────────────────────────────────────── */}
      <section className="product19-section p19-section-dark-alt">
        <div className="p19-container">
          <div className="p19-text-center p19-mb-60 p19-fade-in">
            <span className="p19-section-badge">Problem & Solution</span>
            <h3 className="p19-section-title">Solving <span>Market</span> Volatility</h3>
          </div>
          <div className="p19-table-container p19-fade-in">
            <table className="p19-comparison-table">
              <thead>
                <tr>
                  <th>❗ Traditional Market Guesswork</th>
                  <th>✅ Data-Driven Trade Intelligence</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Seasonal Selling:</strong> Selling harvest immediately due to lack of market foresight.</td>
                  <td><strong>Predictive Arbitrage:</strong> Identifying future price peaks based on global supply gaps.</td>
                </tr>
                <tr>
                  <td><strong>Opaque Logistics:</strong> Unforeseen port strikes or shipping delays ruining sales contracts.</td>
                  <td><strong>Chain-Sight AI:</strong> Real-time tracking of global shipping lanes and logistics bottlenecks.</td>
                </tr>
                <tr>
                  <td><strong>Local Price Silos:</strong> Relying on regional buyer prices that don't reflect global demand.</td>
                  <td><strong>Global Discovery:</strong> Visibility into international commodity boards and direct export potential.</td>
                </tr>
                <tr>
                  <td><strong>Unhedged Risks:</strong> Exposure to currency and policy shifts without protective data.</td>
                  <td><strong>Geopolitical Radar:</strong> Early signals on policy changes and trade tariffs in key regions.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── Core Functionalities ─────────────────────────────────────── */}
      <section className="product19-section">
        <div className="p19-container">
          <div className="p19-text-center p19-mb-60 p19-fade-in">
            <span className="p19-section-badge">Core Functionalities</span>
            <h3 className="p19-section-title">How We <span>Deliver Success</span></h3>
          </div>
          <div className="product19-features-grid">
            {[
              { icon: "💹", title: "1. Price Engine", desc: "Aggregating data from global commodity exchanges for real-time discovery." },
              { icon: "🌡️", title: "2. Supply Heatmaps", desc: "Visualizing global harvest progress and yield anomalies by region." },
              { icon: "🚚", title: "3. Logistics Mesh", desc: "Tracking grain ships, rail freight, and port congestion in real-time." },
              { icon: "🌍", title: "4. Policy Monitor", desc: "AI-driven analysis of global agricultural trade policies and tariffs." },
              { icon: "📉", title: "5. Risk Modeler", desc: "Simulating market scenarios to help with hedging and contract timing." }
            ].map((feature, idx) => (
              <div className="p19-feature-card p19-fade-in" key={idx}>
                <div className="p19-feature-icon">{feature.icon}</div>
                <h4>{feature.title}</h4>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Technical Architecture ─────────────────────────────────────── */}
      <section className="product19-section p19-section-dark-alt">
        <div className="p19-container">
          <div className="p19-vision-container p19-fade-in">
            <div className="p19-vision-header p19-text-center">
              <span className="p19-section-badge">Architecture</span>
              <h3 className="p19-section-title">Technical <span>Architecture</span></h3>
            </div>
            <div className="p19-vision-grid">
              {[
                { icon: "🖥️", title: "Data Ingestor", desc: "High-velocity pipeline for market, weather, and trade data." },
                { icon: "🧠", title: "Market AI", desc: "Machine learning models for commodity price time-series." },
                { icon: "📶", title: "Logistics Hub", desc: "AIS satellite tracking for global shipping and freight." },
                { icon: "💾", title: "Global Lake", desc: "Massive repository of historical agricultural trade patterns." },
                { icon: "📊", title: "Signal Portal", desc: "Actionable dashboard for traders and farm managers." }
              ].map((item, idx) => (
                <div className="p19-vision-item" key={idx}>
                  <div className="p19-vision-icon">{item.icon}</div>
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
      <section className="product19-section">
        <div className="p19-container">
          <div className="product19-overview-grid">
            <div className="p19-fade-in-left">
              <span className="p19-section-badge">Technologies</span>
              <h3 className="product19-section-title">Technologies <span>Used</span></h3>
              <div className="p19-solutions-grid" style={{ gridTemplateColumns: '1fr' }}>
                {[
                  "Machine Learning Time-Series Prediction",
                  "AIS Global Shipping Telemetry",
                  "Natural Language Processing for Policy Analysis",
                  "High-Velocity Data Ingestion Pipelines",
                  "Cloud-Native Distributed Computing",
                  "Multi-Currency Arbitrage Algorithms",
                  "Geospatial Supply Heatmap Visualization"
                ].map((tech, idx) => (
                  <div className="p19-solution-item" key={idx} style={{ padding: '15px 24px' }}>
                    <div className="p19-sol-icon">🛠️</div>
                    <p><strong>{tech}</strong></p>
                  </div>
                ))}
              </div>
            </div>
            <div className="p19-fade-in-right">
              <span className="p19-section-badge">Applications</span>
              <h3 className="product19-section-title">Real-World <span>Applications</span></h3>
              <div className="p19-solutions-grid" style={{ gridTemplateColumns: '1fr' }}>
                {[
                  "Strategic harvest sale timing for farmers",
                  "Global supply chain risk management for traders",
                  "Inventory velocity optimization for processors",
                  "Direct-to-buyer international export discovery",
                  "Agricultural policy impact simulation",
                  "ESG-linked premium market identification"
                ].map((app, idx) => (
                  <div className="p19-solution-item" key={idx} style={{ padding: '15px 24px' }}>
                    <div className="p19-sol-icon">🌍</div>
                    <p><strong>{app}</strong></p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Benefits ─────────────────────────────────────── */}
      <section className="product19-section p19-section-dark-alt">
        <div className="p19-container">
          <div className="p19-text-center p19-mb-60 p19-fade-in">
            <span className="p19-section-badge">Benefits</span>
            <h3 className="p19-section-title">The <span>Precision</span> Advantage</h3>
          </div>
          <div className="p19-benefits-grid">
            {[
              { icon: "💰", title: "Higher Margins", desc: "Sell your harvest at the perfect time to maximize revenue." },
              { icon: "📉", title: "Zero Surprise", desc: "Anticipate market shifts before they affect your local pricing." },
              { icon: "💎", title: "Contract Security", desc: "Navigate global logistics with confidence and data." },
              { icon: "✨", title: "Strategic Edge", desc: "Access the same data quality as global commodity houses." },
              { icon: "🌍", title: "Global Reach", desc: "Identify new export markets and direct-to-buyer channels." }
            ].map((benefit, idx) => (
              <div className="p19-benefit-card p19-fade-in" key={idx}>
                <div className="p19-benefit-icon">{benefit.icon}</div>
                <h4>{benefit.title}</h4>
                <p>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Challenges & Future Scope ───────────────────────────────────── */}
      <section className="product19-section">
        <div className="p19-container">
          <div className="product19-overview-grid">
            <div className="p19-fade-in-left">
              <span className="p19-section-badge">Challenges</span>
              <h3 className="product19-section-title">Challenges & <span>Limitations</span></h3>
              <ul className="p19-capabilities-card" style={{ listStyle: 'none', padding: '30px' }}>
                {[
                  "Complexity of predicting black-swan geopolitical events",
                  "Varying data transparency in certain global regions",
                  "High computational cost for real-time global simulations",
                  "Ensuring 100% data integrity for financial modeling",
                  "Resistance from traditional opaque market brokers"
                ].map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '12px', display: 'flex', gap: '10px' }}>
                    <span style={{ color: '#d32f2f' }}>⚠</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p19-fade-in-right">
              <span className="p19-section-badge">Future Scope</span>
              <h3 className="product19-section-title">The <span>Future</span> of Trade</h3>
              <ul className="p19-capabilities-card" style={{ listStyle: 'none', padding: '30px' }}>
                {[
                  "Quantum-computing powered global market simulations",
                  "Universal blockchain-based commodity trade settlements",
                  "Autonomous AI-driven global supply chain agents",
                  "Real-time satellite-linked inventory verification",
                  "Holographic global trade-flow visualization"
                ].map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '12px', display: 'flex', gap: '10px' }}>
                    <span style={{ color: 'var(--p19-primary)' }}>🚀</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Industry Impact ─────────────────────────────────── */}
      <section className="product19-section p19-section-dark-alt">
        <div className="p19-container">
          <div className="p19-compliance-card p19-fade-in">
            <h2>Industry Impact</h2>
            <div className="p19-compliance-grid">
              {[
                "🌍 Democratizing high-end market intelligence for all",
                "📈 Eradicating global agricultural market opacity",
                "🏗️ Setting the benchmark for data-driven commodity trade",
                "✨ Empowering producers with the power of planetary data"
              ].map((item, idx) => (
                <div className="p19-compliance-item" key={idx}>{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Conclusion & Final CTA ────────────────────────────────────────── */}
      <section className="p19-final-cta">
        <div className="p19-container p19-text-center p19-fade-in">
          <span className="p19-section-badge">Conclusion</span>
          <h2>The <span>Predictive Era</span> of Commodity Markets</h2>
          <p style={{ marginBottom: '20px' }}>
            Agricultural Market Intelligence is transforming agriculture from a game of seasonal guesswork into a high-precision, data-driven industrial science. By merging global trade data with advanced AI modeling, we enable agribusinesses to achieve unprecedented levels of strategic foresight and ROI.
          </p>
          <p style={{ marginBottom: '40px' }}>
            This solution is the critical step toward building a truly transparent, resilient, and future-ready global agricultural ecosystem through market intelligence.
          </p>
           
        </div>
      </section>

      <footer className="product19-footer">
        <div className="p19-container">
          <p>&copy; 2026 Techbrain Networks. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Product19;
