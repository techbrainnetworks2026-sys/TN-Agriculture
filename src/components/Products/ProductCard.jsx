import './ProductCard.css';
 

export default function ProductCard({ product, index, onSelect }) {
  return (
    <div
      className="product-card fade-in"
      style={{ transitionDelay: `${(index % 4) * 0.08}s` }}
    >
      {/* Image */}
      <div className="product-card-image">
        <img
          src={product.image}
          alt={`Technical illustration for ${product.title}`}
          width="400"
          height="250"
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
        <button 
          onClick={onSelect} 
          className="product-card-btn"
        >
          Learn More
          <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
