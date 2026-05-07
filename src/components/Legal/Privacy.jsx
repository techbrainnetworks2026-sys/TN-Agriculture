import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Legal.css';

const Privacy = ({ onBack }) => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="tp-legal-page">
      {/* <nav className="tp-legal-nav">
        <div className="tp-legal-container">
          <button onClick={() => navigate('/')} className="tp-legal-back-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Home
          </button>
        </div>
      </nav> */}

      <section className="tp-legal-hero">
        <div className="tp-legal-container">
          <div className="tp-legal-hero-content tp-legal-fade-in">
            <h1>Privacy <span>Policy</span></h1>
            <p>Your privacy is our priority. This document explains how Techbrain Networks handles your agricultural and personal data.</p>
          </div>
        </div>
      </section>

      <section className="tp-legal-content-section">
        <div className="tp-legal-container">
          <div className="tp-legal-card tp-legal-fade-in">

            <div className="tp-legal-section">
              <h3>1. INFORMATION COLLECTION</h3>
              <ul>
                <li><strong>Registration Data:</strong> We collect personal information you provide when creating an account, including name, email, and phone number.</li>
                <li><strong>Agricultural Data:</strong> We collect geolocation coordinates, field boundaries, and crop types for precision mapping.</li>
                <li><strong>Technical Data:</strong> Our IoT sensors automatically collect device IDs, IP addresses, and connectivity status during operation.</li>
              </ul>
            </div>

            <div className="tp-legal-section">
              <h3>2. INFORMATION USE</h3>
              <ul>
                <li><strong>Operational Accuracy:</strong> We use your data to generate precise AI-driven crop reports and autonomous drone flight plans.</li>
                <li><strong>System Support:</strong> Data helps us provide technical assistance, troubleshoot hardware issues, and improve platform performance.</li>
                <li><strong>Product Development:</strong> Aggregated, non-identifiable data is used to train our machine learning models for better yield prediction.</li>
              </ul>
            </div>

            <div className="tp-legal-section">
              <h3>3. INFORMATION SHARING</h3>
              <ul>
                <li><strong>Service Providers:</strong> We share data with trusted partners like cloud hosting and satellite imagery providers for core functionality.</li>
                <li><strong>Legal Compliance:</strong> Information may be disclosed to comply with aviation safety laws, court orders, or government regulations.</li>
                <li><strong>No Commercial Sale:</strong> Techbrain Networks never sells your personal or agricultural data to third-party marketing companies.</li>
              </ul>
            </div>

            <div className="tp-legal-section">
              <h3>4. INFORMATION SECURITY</h3>
              <ul>
                <li><strong>Encryption:</strong> All data transmitted between drones, sensors, and our cloud servers is protected by end-to-end encryption.</li>
                <li><strong>Access Control:</strong> We implement strict role-based access controls to ensure only authorized personnel can view sensitive farm data.</li>
                <li><strong>Regular Audits:</strong> Our infrastructure undergoes periodic security reviews to identify and mitigate potential vulnerabilities.</li>
              </ul>
            </div>

            <div className="tp-legal-section">
              <h3>5. COOKIES</h3>
              <ul>
                <li><strong>Session Management:</strong> We use cookies to keep you logged into your dashboard and maintain your current session state.</li>
                <li><strong>User Preferences:</strong> Cookies store your map settings, unit preferences, and personalized dashboard layouts.</li>
                <li><strong>Analytics:</strong> Anonymous cookies help us track platform usage patterns to improve navigation and user experience.</li>
              </ul>
            </div>

            <div className="tp-legal-section">
              <h3>6. LINKS TO OTHER WEBSITES</h3>
              <ul>
                <li><strong>External Resources:</strong> Our platform may link to external agricultural research sites or government weather departments.</li>
                <li><strong>Third-Party Privacy:</strong> We are not responsible for the privacy practices or content of any external websites linked from our platform.</li>
                <li><strong>Review Policy:</strong> We encourage users to read the privacy statements of every website they visit after leaving our domain.</li>
              </ul>
            </div>

            <div className="tp-legal-section">
              <h3>7. CHILDREN'S PRIVACY</h3>
              <ul>
                <li><strong>Age Restriction:</strong> Our services are designed for professionals and are not intended for users under the age of 18.</li>
                <li><strong>Data Deletion:</strong> If we learn that a minor has provided personal information, we will take steps to delete it immediately.</li>
                <li><strong>Reporting:</strong> If you believe we have inadvertently collected data from a child, please contact our support team right away.</li>
              </ul>
            </div>

            <div className="tp-legal-section">
              <h3>8. CHANGES TO THIS PRIVACY POLICY</h3>
              <ul>
                <li><strong>Periodic Updates:</strong> We may update this policy to reflect changes in our agricultural technology or legal requirements.</li>
                <li><strong>User Notification:</strong> Major changes will be communicated via email or a prominent notification on the platform dashboard.</li>
                <li><strong>Effective Date:</strong> Continued use of our services after updates signifies your acceptance of the revised Privacy Policy.</li>
              </ul>
            </div>

            <div className="tp-legal-section">
              <h3>9. YOUR RIGHTS</h3>
              <ul>
                <li><strong>Access & Correction:</strong> You have the right to request a copy of your data and ask us to correct any inaccuracies.</li>
                <li><strong>Data Erasure:</strong> You may request the deletion of your account and related agricultural data, subject to legal retentions.</li>
                <li><strong>Processing Restrictions:</strong> You have the right to object to or limit how your information is processed in certain scenarios.</li>
              </ul>
            </div>

            <div className="tp-legal-section">
              <h3>10. CONTACT</h3>
              <ul>
                <li><strong>Email Support:</strong> For all privacy inquiries, please reach out to us at contact@techbrainnetworks.com.</li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
