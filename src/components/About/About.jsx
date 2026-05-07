import './About.css';

const pillars = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4"/>
      </svg>
    ),
    title: 'Vision',
    letter: 'V',
    color: '#2E7D32',
    text: 'We aspire to be a global leader in technology innovation, setting new benchmarks for excellence. Our goal is to create a future where technology elevates the quality of life, fosters sustainability, and drives growth and collaboration on a global scale, shaping a smarter, more connected world.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    title: 'Mission',
    letter: 'M',
    color: '#0288D1',
    text: 'We are dedicated to empowering businesses and individuals globally with cutting-edge technology solutions that drive innovation, efficiency, and sustainability. Our commitment is to deliver reliable, scalable, and secure products across diverse industries, enabling our clients to excel in a rapidly evolving digital landscape.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    title: 'Passion',
    letter: 'P',
    color: '#E65100',
    text: "Our passion for research and development fuels our relentless pursuit of elegant solutions to complex challenges. Every product and service reflects our commitment to innovation and excellence. We push the boundaries of what's possible to inspire the future of technology and build a world where possibilities are limitless.",
  },
];

const highlights = [
  { number: '480+', label: 'Innovative Products' },
  { number: '24',   label: 'Industries Served' },
  { number: '30+',  label: 'Countries by 2027' },
  { number: '2027', label: 'Global Launch Year' },
];

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        {/* Header */}
        <div className="about-header fade-in">
          <span className="section-badge">🌿 About Us</span>
          <h2 className="section-title">About <span>Techbrain Networks</span></h2>
          <div className="divider" />
          <p className="section-subtitle">
            A leading Software Product Development company specializing in AI, IoT, Big Data,
            Blockchain, Cloud Computing, Quantum Computing and Digital Marketing.
          </p>
        </div>

        {/* Highlights */}
        <div className="about-highlights fade-in">
          {highlights.map((h, i) => (
            <div key={i} className="highlight-card">
              <span className="highlight-number">{h.number}</span>
              <span className="highlight-label">{h.label}</span>
            </div>
          ))}
        </div>

        {/* Team Banner */}
        <div className="about-team-banner fade-in">
          <div className="team-banner-image">
            <img
              src="/images/team-photo.png"
              alt="Professional team at Techbrain Networks office collaborating on smart agriculture projects"
              width="800"
              height="533"
              loading="lazy"
            />
            <div className="team-banner-overlay">
              <div className="team-quote">
                "Revolutionizing the future of technology — one innovation at a time."
              </div>
            </div>
          </div>
          <div className="team-banner-content">
            <p className="team-description">
              We are revolutionizing the future of technology with <strong>480 innovative products</strong> spanning{' '}
              <strong>24 industries</strong>. Starting in <strong>2027</strong>, our solutions will reach{' '}
              <strong>30 countries</strong>, transforming industries and improving lives. Our mission is to make
              advanced technology accessible to all, creating a global impact and shaping a brighter future.
            </p>
            <div className="founder-card">
              <div className="founder-avatar">
                <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="30" cy="30" r="30" fill="linear-gradient(135deg, #2E7D32, #66BB6A)"/>
                  <circle cx="30" cy="24" r="10" fill="#A5D6A7"/>
                  <path d="M10 52C10 40 20 34 30 34C40 34 50 40 50 52" fill="#2E7D32"/>
                </svg>
              </div>
              <div className="founder-info">
                <p className="founder-name">Ramkumar Arunachalam</p>
                <p className="founder-title">Founder, Techbrain Networks</p>
              </div>
            </div>
          </div>
        </div>

        {/* Vision Mission Passion */}
        <div className="vmp-grid">
          {pillars.map((pillar, i) => (
            <div key={i} className={`vmp-card fade-in`} style={{ '--card-color': pillar.color }}>
              <div className="vmp-icon" style={{ color: pillar.color }}>
                {pillar.icon}
              </div>
              <div className="vmp-accent-letter">{pillar.letter}</div>
              <h3 className="vmp-title">{pillar.title}</h3>
              <p className="vmp-text">{pillar.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
