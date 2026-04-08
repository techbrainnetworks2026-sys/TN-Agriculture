import './ProductCard.css';

export default function ProductCard({ product, index }) {
  return (
    <div
      className="product-card fade-in"
      style={{ transitionDelay: `${(index % 4) * 0.08}s` }}
    >
      {/* Image */}
      <div className="product-card-image">
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
        />
        <div className="product-card-overlay" />
        <span
          className="product-tag"
          style={{ background: product.tagColor }}
        >
          {product.tag}
        </span>
        <div className="product-number">#{String(product.id).padStart(2, '0')}</div>
      </div>

      {/* Content */}
      <div className="product-card-content">
        <h3 className="product-card-title">{product.title}</h3>
        <p className="product-card-desc">{product.description}</p>
        <button className="product-card-btn">
          Learn More
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
