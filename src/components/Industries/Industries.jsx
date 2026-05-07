import './Industries.css';

const industries = [
  { name: 'Aerospace',              icon: '🚀' },
  { name: 'Agriculture',            icon: '🌾' },
  { name: 'Automotive',             icon: '🚗' },
  { name: 'Chemical',               icon: '⚗️' },
  { name: 'Defence Technology',     icon: '🛡️' },
  { name: 'Education',              icon: '🎓' },
  { name: 'Energy & Utilities',     icon: '⚡' },
  { name: 'Entertainment & Media',  icon: '🎬' },
  { name: 'Finance',                icon: '💰' },
  { name: 'Food Technology',        icon: '🍃' },
  { name: 'Healthcare',             icon: '🏥' },
  { name: 'Infrastructure',         icon: '🏗️' },
  { name: 'Logistics',              icon: '📦' },
  { name: 'Manufacturing',          icon: '🏭' },
  { name: 'Ocean Technology',       icon: '🌊' },
  { name: 'Oil and Gas',            icon: '🛢️' },
  { name: 'Pharmaceutical',         icon: '💊' },
  { name: 'Retail',                 icon: '🛍️' },
  { name: 'Sports',                 icon: '⚽' },
  { name: 'Technology',             icon: '💻' },
  { name: 'Telecommunication',      icon: '📡' },
  { name: 'Textile',                icon: '🧵' },
  { name: 'Transportation',         icon: '✈️' },
  { name: 'Travel',                 icon: '🗺️' },
];

export default function Industries() {
  return (
    <section id="industries" className="industries">
      <div className="industries-bg" />
      <div className="industries-overlay" />
      <div className="container industries-inner">
        <div className="industries-header fade-in">
          <span className="section-badge" style={{ background: 'var(--bg-alt)', color: 'var(--primary)' }}>
            🏭 Industries
          </span>
          <h2 className="section-title">
            Industries We <span style={{ color: 'var(--primary)' }}>Serve</span>
          </h2>
          <div className="divider" />
          <p className="section-subtitle">
            Techbrain Networks delivers transformative solutions across 24 diverse industries,
            driving innovation and efficiency at every level.
          </p>
        </div>

        <div className="industries-grid">
          {industries.map((industry, i) => (
            <div
              key={i}
              className="industry-chip fade-in"
              style={{ animationDelay: `${i * 0.04}s` }}
            >
              <span className="industry-icon">{industry.icon}</span>
              <span className="industry-name">{industry.name}</span>
            </div>
          ))}
        </div>

        <div className="industries-stats fade-in">
          <div className="ind-stat">
            <strong>24</strong>
            <span>Industries</span>
          </div>
          <div className="ind-stat">
            <strong>480+</strong>
            <span>Products</span>
          </div>
          <div className="ind-stat">
            <strong>30+</strong>
            <span>Countries</span>
          </div>
        </div>
      </div>
    </section>
  );
}
