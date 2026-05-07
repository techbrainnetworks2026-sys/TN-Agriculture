import { useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard';
import { products } from './productsData';
import './Products.css';

export default function Products() {
  const navigate = useNavigate();

  return (
    <section id="products" className="products">
      <div className="container">
        <div className="products-header fade-in">
          <span className="section-badge">🌾 Our Solutions</span>
          <h2 className="section-title">Our Agriculture <span>Solutions</span></h2>
          <div className="divider" />
          <p className="section-subtitle">
            Comprehensive suite of 20 intelligent agriculture technology platforms powering
            the future of sustainable, efficient, and profitable farming.
          </p>
        </div>

        <div className="products-grid">
          {products.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              index={i}
              onSelect={() => navigate(`/products/product${product.id}`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
