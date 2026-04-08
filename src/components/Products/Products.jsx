import ProductCard from './ProductCard';
import './Products.css';

export const products = [
  {
    id: 1,
    title: 'Precision Farming & Crop Management Software',
    description: 'Advanced GPS-guided precision farming platform with real-time crop health analytics, yield mapping, and AI-driven field management for maximum productivity.',
    image: '/images/product_01.png',
    tag: 'AI-Powered',
    tagColor: '#2E7D32',
  },
  {
    id: 2,
    title: 'Agricultural Drones Control Systems',
    description: 'Intelligent autonomous drone fleet management for aerial crop surveillance, precision spraying, multispectral imaging, and real-time field analytics.',
    image: '/images/product_02.png',
    tag: 'IoT & Drone',
    tagColor: '#0288D1',
  },
  {
    id: 3,
    title: 'Farm Equipment Telematics & Control Systems',
    description: 'Real-time GPS tracking and remote monitoring of farm machinery, predictive maintenance alerts, fuel analytics, and operational performance dashboards.',
    image: '/images/product_03.png',
    tag: 'Telematics',
    tagColor: '#5D4037',
  },
  {
    id: 4,
    title: 'Agricultural Supply Chain Blockchain',
    description: 'Transparent, tamper-proof blockchain traceability from farm to consumer, ensuring product authenticity, compliance tracking, and supply chain integrity.',
    image: '/images/product_04.png',
    tag: 'Blockchain',
    tagColor: '#6A1B9A',
  },
  {
    id: 5,
    title: 'Pest & Disease Monitoring Software',
    description: 'AI-powered early detection system for crop diseases and pest outbreaks using computer vision, satellite imagery, and predictive outbreak modeling.',
    image: '/images/product_05.png',
    tag: 'AI Vision',
    tagColor: '#C62828',
  },
  {
    id: 6,
    title: 'Sustainable Agriculture Decision Support',
    description: 'Data-driven sustainability tool providing carbon footprint analysis, eco-friendly practice recommendations, and resource optimization for green farming.',
    image: '/images/product_06.png',
    tag: 'Sustainability',
    tagColor: '#2E7D32',
  },
  {
    id: 7,
    title: 'Automated Irrigation Control Systems',
    description: 'Smart IoT-based irrigation automation platform with soil moisture sensing, weather-adaptive scheduling, drip control, and water usage optimization.',
    image: '/images/product_07.png',
    tag: 'Smart IoT',
    tagColor: '#0277BD',
  },
  {
    id: 8,
    title: 'Soil Health Monitoring & Analysis',
    description: 'Comprehensive soil intelligence platform with real-time pH, nutrient, moisture analysis and AI recommendations for optimal fertilization and amendment.',
    image: '/images/product_08.png',
    tag: 'Soil Science',
    tagColor: '#5D4037',
  },
  {
    id: 9,
    title: 'Livestock Monitoring & Management',
    description: 'IoT-powered livestock health tracking with biometric sensors, GPS geo-fencing, automated feeding systems, breeding management, and health alerts.',
    image: '/images/product_09.png',
    tag: 'Livestock IoT',
    tagColor: '#E65100',
  },
  {
    id: 10,
    title: 'Agribusiness ERP & Financial Software',
    description: 'End-to-end enterprise resource planning for agriculture with farm accounting, inventory management, cost analysis, payroll, and financial reporting modules.',
    image: '/images/product_10.png',
    tag: 'ERP',
    tagColor: '#1565C0',
  },
  {
    id: 11,
    title: 'Crop Yield Prediction & Optimization',
    description: 'Machine learning models that analyze soil, weather, and satellite data to predict harvest yields with high accuracy and recommend optimization strategies.',
    image: '/images/product_11.png',
    tag: 'ML Prediction',
    tagColor: '#2E7D32',
  },
  {
    id: 12,
    title: 'Agricultural Weather Forecasting',
    description: 'Hyper-local agricultural weather intelligence with micro-climate analysis, frost alerts, rainfall prediction, and planting window recommendations.',
    image: '/images/product_12.png',
    tag: 'Weather AI',
    tagColor: '#0288D1',
  },
  {
    id: 13,
    title: 'Smart Greenhouse Automation',
    description: 'Fully automated controlled-environment agriculture system managing temperature, humidity, CO₂, lighting, and nutrients for optimal greenhouse crop production.',
    image: '/images/product_13.png',
    tag: 'Automation',
    tagColor: '#1B5E20',
  },
  {
    id: 14,
    title: 'Precision Livestock Farming Platform',
    description: 'Advanced precision livestock management using wearable sensors, AI behavioral analysis, milk yield optimization, and disease early-warning systems.',
    image: '/images/product_14.png',
    tag: 'Precision',
    tagColor: '#E65100',
  },
  {
    id: 15,
    title: 'Farm-to-Table Traceability Software',
    description: 'Complete supply chain visibility platform enabling consumers to trace product origin, verify quality certifications, and access farm-level transparency.',
    image: '/images/product_15.png',
    tag: 'Traceability',
    tagColor: '#66BB6A',
  },
  {
    id: 16,
    title: 'Aquaculture Management & Monitoring',
    description: 'Smart aquaculture platform with water quality IoT sensors, feeding automation, fish health monitoring, stocking density optimization, and harvest planning.',
    image: '/images/product_16.png',
    tag: 'Aquaculture',
    tagColor: '#006064',
  },
  {
    id: 17,
    title: 'Agricultural Robotics & Automation',
    description: 'Autonomous agricultural robots for planting, weeding, harvesting, and sorting tasks with computer vision navigation and machine learning task execution.',
    image: '/images/product_17.png',
    tag: 'Robotics',
    tagColor: '#37474F',
  },
  {
    id: 18,
    title: 'Precision Fertilizer & Chemical Application',
    description: 'Variable-rate application system using AI-driven soil maps and GPS to apply the exact right amount of fertilizers and agrochemicals precisely where needed.',
    image: '/images/product_18.png',
    tag: 'Precision Ag',
    tagColor: '#558B2F',
  },
  {
    id: 19,
    title: 'Agricultural Market Intelligence',
    description: 'Real-time commodity pricing intelligence, market trend analysis, buyer-seller matchmaking, and AI-powered price forecasting for agribusiness decisions.',
    image: '/images/product_19.png',
    tag: 'Market Intel',
    tagColor: '#1565C0',
  },
  {
    id: 20,
    title: 'Remote Sensing & Satellite Agriculture Monitoring',
    description: 'Satellite-based NDVI analysis, crop stress mapping, field boundary detection, and change monitoring using multispectral and hyperspectral imagery.',
    image: '/images/product_20.png',
    tag: 'Satellite',
    tagColor: '#283593',
  },
];

export default function Products() {
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
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
