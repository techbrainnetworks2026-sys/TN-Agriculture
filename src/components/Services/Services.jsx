import './Services.css';

const services = [
  {
    title: 'Software Development',
    description:
      'Techbrain Networks offers a full range of software development services, specializing in creating innovative and customized solutions for businesses across multiple industries. We develop robust, scalable, and secure applications for web, mobile, and desktop platforms, ensuring they are tailored to meet the unique requirements of each client. With a focus on quality and efficiency, our team leverages the latest technologies to deliver high-performing software that drives growth and optimizes operations.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=90&auto=format&fit=crop',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    color: '#2E7D32',
  },
  {
    title: 'Hardware Engineering',
    description:
      'Techbrain Networks offers expert hardware engineering services designed to bring innovative and reliable products to market. Our team specializes in end-to-end hardware development, from concept design and prototyping to testing and production. We work across industries, including aerospace, automotive, healthcare, and more, ensuring that our solutions meet stringent quality and safety standards.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=90&auto=format&fit=crop',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>
      </svg>
    ),
    color: '#0288D1',
  },
  {
    title: 'Product Design',
    description:
      'Techbrain Networks delivers innovative product design services, transforming ideas into market-ready solutions. Our team excels in creating user-centric designs that balance functionality, aesthetics, and usability. We handle everything from concept development and prototyping to final production, ensuring each product meets industry standards and client expectations. With a focus on cutting-edge design technologies and techniques.',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=90&auto=format&fit=crop',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
      </svg>
    ),
    color: '#E65100',
  },
  {
    title: 'Research & Development',
    description:
      'Techbrain Networks offers comprehensive Research & Development (R&D) services, driving innovation and technological advancements for businesses. Our team specializes in exploring new technologies, developing prototypes, and conducting in-depth testing to turn ideas into viable products. We focus on solving complex challenges across industries such as aerospace, healthcare, and technology, ensuring our R&D efforts lead to breakthroughs that enhance efficiency and performance.',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=90&auto=format&fit=crop',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"/>
      </svg>
    ),
    color: '#6A1B9A',
  },
];

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services-header fade-in">
          <span className="section-badge">⚙️ What We Do</span>
          <h2 className="section-title">Our <span>Services</span></h2>
          <div className="divider" />
          <p className="section-subtitle">
            We take pride in being an innovative organization where the digital revolution thrives
            and new advances are always on the horizon.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, i) => (
            <div
              key={i}
              className={`service-card fade-in ${i % 2 === 1 ? 'fade-in-right' : 'fade-in-left'}`}
              style={{ '--svc-color': service.color }}
            >
              {/* Image */}
              <div className="service-image">
                <img src={service.image} alt={service.title} loading="lazy" />
                <div className="service-image-overlay" />
              </div>

              {/* Content */}
              <div className="service-content">
                <div className="service-icon" style={{ color: service.color }}>
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <button className="btn btn-green-outline" style={{ '--primary': service.color, '--primary': service.color }}>
                  Learn More
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
