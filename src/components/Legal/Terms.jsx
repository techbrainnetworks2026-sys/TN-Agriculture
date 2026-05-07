import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Legal.css';

const Terms = ({ onBack }) => {
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
            <h1>Terms & <span>Conditions</span></h1>
            <p>Please review these terms carefully as they govern your use of the Techbrain Networks agricultural platform.</p>
          </div>
        </div>
      </section>

      <section className="tp-legal-content-section">
        <div className="tp-legal-container">
          <div className="tp-legal-card tp-legal-fade-in">

            <div className="tp-legal-section">
              <h3>1. INTRODUCTION</h3>
              <ul>
                <li><strong>Binding Agreement:</strong> By accessing this platform, you agree to be bound by these Terms and Conditions and all applicable laws.</li>
                <li><strong>Purpose:</strong> These terms govern all services provided by Techbrain Networks, including drone control and precision farming software.</li>
                <li><strong>Updates:</strong> We reserve the right to modify these terms at any time. Continued use of the site constitutes acceptance of new terms.</li>
              </ul>
            </div>

            <div className="tp-legal-section">
              <h3>2. USE OF THE WEBSITE</h3>
              <ul>
                <li><strong>Eligibility:</strong> You must be at least 18 years old and have the legal authority to enter into this agreement.</li>
                <li><strong>Account Security:</strong> You are responsible for maintaining the confidentiality of your account credentials and all activities under your account.</li>
                <li><strong>Prohibited Conduct:</strong> Users may not use the platform for any illegal purpose, including unauthorized drone operations or data harvesting.</li>
              </ul>
            </div>

            <div className="tp-legal-section">
              <h3>3. INTELLECTUAL PROPERTY</h3>
              <ul>
                <li><strong>Ownership:</strong> All software, designs, algorithms, and content on this platform are the exclusive property of Techbrain Networks.</li>
                <li><strong>License:</strong> We grant you a limited, non-exclusive license to use our services for your own agricultural business operations.</li>
                <li><strong>Restrictions:</strong> You may not copy, modify, distribute, or reverse engineer any part of our technology without written permission.</li>
              </ul>
            </div>

            <div className="tp-legal-section">
              <h3>4. DISCLAIMER OF WARRANTIES</h3>
              <ul>
                <li><strong>"As Is" Basis:</strong> Our services are provided without any warranties, express or implied, including fitness for a particular agricultural purpose.</li>
                <li><strong>Data Accuracy:</strong> While we strive for precision, we do not guarantee that crop health data or weather predictions will be 100% accurate.</li>
                <li><strong>System Availability:</strong> We do not warrant that the platform will be uninterrupted, timely, secure, or free from technical errors or bugs.</li>
              </ul>
            </div>

            <div className="tp-legal-section">
              <h3>5. LIMITATION OF LIABILITY</h3>
              <ul>
                <li><strong>Direct Damages:</strong> Techbrain Networks is not liable for any indirect, incidental, or special damages arising from your use of the platform.</li>
                <li><strong>Operational Loss:</strong> We are not responsible for crop loss, equipment damage, or financial loss resulting from reliance on our automated systems.</li>
                <li><strong>Liability Cap:</strong> In any event, our total liability shall not exceed the amount paid by you for the services in the past 12 months.</li>
              </ul>
            </div>

            <div className="tp-legal-section">
              <h3>6. LINKS TO THIRD-PARTY WEBSITES</h3>
              <ul>
                <li><strong>External Content:</strong> We may provide links to third-party tools or research sites for your convenience and additional insight.</li>
                <li><strong>No Endorsement:</strong> Inclusion of these links does not imply our endorsement of the third-party content or their business practices.</li>
                <li><strong>User Responsibility:</strong> Accessing third-party sites is at your own risk, and you should review their terms and privacy policies.</li>
              </ul>
            </div>

            <div className="tp-legal-section">
              <h3>7. PRIVACY POLICY</h3>
              <ul>
                <li><strong>Data Handling:</strong> Your use of the platform is also governed by our Privacy Policy, which outlines how we collect and use your data.</li>
                <li><strong>Consent:</strong> By using our services, you consent to the collection and use of your information as described in the Privacy Policy.</li>
                <li><strong>Updates:</strong> Any changes to our privacy practices will be reflected in the Privacy Policy document available on our website.</li>
              </ul>
            </div>

            <div className="tp-legal-section">
              <h3>8. INDEMNIFICATION</h3>
              <ul>
                <li><strong>User Responsibility:</strong> You agree to indemnify and hold Techbrain Networks harmless from any claims arising from your breach of these terms.</li>
                <li><strong>Legal Costs:</strong> This includes covering all legal fees and damages resulting from unauthorized drone flight or data misuse.</li>
                <li><strong>Cooperation:</strong> You agree to cooperate fully in the defense of any claim that is subject to indemnification by you.</li>
              </ul>
            </div>

            <div className="tp-legal-section">
              <h3>9. GOVERNING LAW AND JURISDICTION</h3>
              <ul>
                <li><strong>Legal Jurisdiction:</strong> These terms are governed by and construed in accordance with the laws of our registered business location.</li>
                <li><strong>Dispute Resolution:</strong> Any disputes arising from these terms shall be resolved in the competent courts within our primary jurisdiction.</li>
                <li><strong>Aviation Laws:</strong> Users must also comply with all local and international aviation regulations governing drone flight and safety.</li>
              </ul>
            </div>

            <div className="tp-legal-section">
              <h3>10. ENTIRE AGREEMENT</h3>
              <ul>
                <li><strong>Complete Document:</strong> These Terms and Conditions constitute the entire agreement between you and Techbrain Networks regarding the platform.</li>
                <li><strong>Supersedes:</strong> This document supersedes all prior or contemporaneous communications and proposals, whether electronic, oral, or written.</li>
                <li><strong>No Modifications:</strong> No oral modifications or waivers shall be effective unless documented in writing by an authorized representative.</li>
              </ul>
            </div>

            <div className="tp-legal-section">
              <h3>11. SEVERABILITY</h3>
              <ul>
                <li><strong>Validity:</strong> If any provision of these terms is found to be invalid or unenforceable, the remaining provisions will remain in full force.</li>
                <li><strong>Interpretation:</strong> The invalid provision shall be interpreted to reflect the original intent of the parties as closely as possible.</li>
                <li><strong>Independent Clauses:</strong> Each clause of this agreement operates independently and survives the invalidity of any other part.</li>
              </ul>
            </div>

            <div className="tp-legal-section">
              <h3>12. WAIVER</h3>
              <ul>
                <li><strong>No Automatic Waiver:</strong> Our failure to enforce any right or provision of these terms will not be considered a waiver of those rights.</li>
                <li><strong>Specific Waiver:</strong> Any waiver of a breach must be in writing and signed by Techbrain Networks to be legally effective.</li>
                <li><strong>Future Enforcement:</strong> A waiver of a specific breach does not waive our right to enforce that provision in the future.</li>
              </ul>
            </div>

            <div className="tp-legal-section">
              <h3>13. ASSIGNMENT</h3>
              <ul>
                <li><strong>Transfer of Rights:</strong> We may assign or transfer our rights and obligations under these terms without your prior consent.</li>
                <li><strong>Restriction on Users:</strong> You may not assign your rights or obligations to any third party without our express written approval.</li>
                <li><strong>Successors:</strong> This agreement is binding upon and inures to the benefit of the respective successors and permitted assigns.</li>
              </ul>
            </div>

            <div className="tp-legal-section">
              <h3>14. CONTACT US</h3>
              <ul>
                <li><strong>Direct Inquiry:</strong> For any questions regarding these Terms & Conditions, please contact us at contact@techbrainnetworks.com.</li>
              </ul>
            </div>

            <div className="tp-legal-section">
              <h3>15. ACKNOWLEDGEMENT</h3>
              <ul>
                <li><strong>Understanding:</strong> By using our services, you acknowledge that you have read and understood these Terms & Conditions.</li>
                <li><strong>Agreement:</strong> You confirm your intent to be legally bound by all provisions stated in this and related legal documents.</li>
                <li><strong>Continuous Review:</strong> You acknowledge your responsibility to check for updates to these terms periodically.</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

     
    </div>
  );
};

export default Terms;
