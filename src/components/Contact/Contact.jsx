import { useState } from 'react';
import './Contact.css';

const offices = [
  {
    country: 'India',
    city: 'Thanjavur',
    flag: '🇮🇳',
    address: '6/12 Papa vaikal Street, Ayyampettai Post\nPapanasam Taluk\nThanjavur 614201, Tamilnadu, India.',
    color: '#FF7043',
  },
  {
    country: 'United Kingdom',
    city: 'London',
    flag: '🇬🇧',
    address: '71-75 Shelton Street, Covent Garden,\nLondon, WC2H 9JQ,\nUnited Kingdom.',
    color: '#1565C0',
  },
];

const contactInfo = [
  {
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.18 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    label: 'Phone',
    value: '+91 8754906714',
    href: 'tel:+918754906714',
  },
  {
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: 'Email',
    value: 'contact@techbrainnetworks.com',
    href: 'mailto:contact@techbrainnetworks.com',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        {/* Header */}
        <div className="contact-header fade-in">
          <span className="section-badge">📬 Get In Touch</span>
          <h2 className="section-title">Contact <span>Us</span></h2>
          <div className="divider" />
          <p className="section-subtitle">
            Your all-in-one stop for digital products. We offer both digital and physical products
            that meet our customer's requirements.
          </p>
        </div>

        <div className="contact-layout">
          {/* Left: Info */}
          <div className="contact-info fade-in-left">
            {/* Contact Links */}
            <div className="contact-links">
              {contactInfo.map((item, i) => (
                <a key={i} href={item.href} className="contact-link-card">
                  <div className="contact-link-icon">{item.icon}</div>
                  <div>
                    <p className="contact-link-label">{item.label}</p>
                    <p className="contact-link-value">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Offices */}
            <h3 className="offices-title">Our Offices</h3>
            <div className="offices-grid">
              {offices.map((office, i) => (
                <div key={i} className="office-card" style={{ '--office-color': office.color }}>
                  <div className="office-flag">{office.flag}</div>
                  <div className="office-info">
                    <p className="office-country">{office.country}</p>
                    <p className="office-city">{office.city}</p>
                    <p className="office-address">{office.address}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact-form-wrap fade-in-right">
            {submitted ? (
              <div className="form-success">
                <div className="success-icon">✅</div>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. We'll get back to you shortly.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3 className="form-title">Send a Message</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact-name">Full Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-email">Email</label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="contact-subject">Subject</label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    placeholder="How can we help?"
                    value={form.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="5"
                    placeholder="Tell us about your project or inquiry..."
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary form-submit">
                  Send Message
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
