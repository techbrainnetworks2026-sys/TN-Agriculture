import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkClick = (id) => {
    if (location.pathname === '/') {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(`/#${id}`);
    }
  };

  return (
    <footer className="footer" id="contact">
      {/* Wave Divider */}
      <div className="footer-wave">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            fill="#F5FBEF"
            d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,80C1120,85,1280,75,1360,69.3L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className="footer-inner">
        <div className="container">
          <div className="footer-grid">
            {/* Brand Section */}
            <div className="footer-col footer-brand">
              <div className="footer-logo">
                <div className="footer-logo-icon">
                  <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="18" cy="18" r="18" fill="#2E7D32" />
                    <path d="M18 8C18 8 10 14 10 20C10 24.4 13.6 28 18 28C22.4 28 26 24.4 26 20C26 14 18 8 18 8Z" fill="#A5D6A7" />
                    <path d="M18 8V28M14 13L18 17M22 13L18 17" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="footer-logo-text">
                  <div className="footer-logo-main">Techbrain Networks</div>
                  <div className="footer-logo-sub">AGRICULTURE</div>
                </div>
              </div>
              <p className="footer-tagline">
                Pioneering the future of precision agriculture with AI-driven drone intelligence and sustainable farming solutions.
              </p>
              <div className="footer-socials">
                <a href="https://www.linkedin.com/company/techbrainnetworks" className="social-btn" aria-label="Follow Techbrain Networks on LinkedIn" target="_blank" rel="noopener noreferrer">
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
                </a>
                <a href="https://twitter.com/techbrainnetworks" className="social-btn" aria-label="Follow Techbrain Networks on Twitter" target="_blank" rel="noopener noreferrer">
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>
                </a>
                <a href="https://www.instagram.com/techbrainnetworks" className="social-btn" aria-label="Follow Techbrain Networks on Instagram" target="_blank" rel="noopener noreferrer">
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-col">
              <h4 className="footer-col-title">Solutions</h4>
              <ul className="footer-links-list">
                <li><button onClick={() => handleLinkClick('products')} className="footer-link-btn">Precision Monitoring <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7" /></svg></button></li>
                <li><button onClick={() => handleLinkClick('products')} className="footer-link-btn">Autonomous Spraying <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7" /></svg></button></li>
                <li><button onClick={() => handleLinkClick('products')} className="footer-link-btn">Yield Analytics <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7" /></svg></button></li>
                <li><button onClick={() => handleLinkClick('services')} className="footer-link-btn">IoT Integration <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7" /></svg></button></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-col">
              <h4 className="footer-col-title">Get in Touch</h4>
              <ul className="footer-contact-list">
                <li>
                  <span className="footer-contact-icon" aria-hidden="true">📍</span>
                  <span>6/12 Papa vaikal Street, Ayyampettai Post
                    Papanasam Taluk
                    Thanjavur 614201, Tamilnadu, India.</span>
                </li>
                <li>
                  <span className="footer-contact-icon" aria-hidden="true">📧</span>
                  <a href="mailto:contact@techbrainnetworks.com">contact@techbrainnetworks.com</a>
                </li>
                <li>
                  <span className="footer-contact-icon" aria-hidden="true">📞</span>
                  <a href="tel:+918754906714">+91 8754906714</a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="footer-col">
              <h4 className="footer-col-title">Stay Updated</h4>
              <p className="footer-newsletter-text">
                Subscribe to our newsletter for the latest agri-tech innovations and updates.
              </p>
              <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Enter your email" id="footer-email" />
                <button type="submit" aria-label="Subscribe">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {new Date().getFullYear()} Techbrain Networks. All rights reserved.</p>
          <div className="footer-legal-links">
            <button onClick={() => navigate('/privacy-policy')}>Privacy Policy</button>
            <button onClick={() => navigate('/terms-and-conditions')}>Terms & Conditions</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
