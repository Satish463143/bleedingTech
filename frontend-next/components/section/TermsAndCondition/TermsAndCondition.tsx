"use client";
import { Scale  } from "lucide-react";
import "./TermsAndCondition.css";
import { termSections } from "@/src/data/data";

const TermsAndCondition = () => {
  
  const sections= termSections

  return (
    <section className="terms-section" id="terms&conditions">
      <div className="terms-container">
        {/* Header */}
        <div className="terms-header">
          <div className="terms-icon-wrapper">
            <Scale className="terms-main-icon" />
          </div>
          <h1 className="terms-main-title">Terms and Conditions</h1>
          <p className="terms-intro">
            These Terms and Conditions govern your use of <strong>Bleeding Tech's</strong> services, website, and digital solutions. 
            Please read these terms carefully before engaging our services. By using our services, you agree to comply with and be 
            bound by these terms.
          </p>
          <p className="terms-effective-date">
            <strong>Effective Date:</strong> January 1, 2024 | <strong>Last Updated:</strong> December 28, 2024
          </p>
        </div>

        {/* Content Sections */}
        {sections.map((section, index) => (
          <div key={index} className="terms-section-block">
            <div className="terms-section-header">
              <section.icon className="terms-section-icon" />
              <h2 className="terms-section-title">{section.title}</h2>
            </div>
            {section.content.map((item, idx) => (
              <div key={idx} className="terms-content-block">
                {item.subtitle && (
                  <h3 className="terms-subtitle">{item.subtitle}</h3>
                )}
                <p className="terms-text">{item.text}</p>
              </div>
            ))}
          </div>
        ))}

        {/* Contact Information */}
        <div className="terms-contact-section">
          <h2 className="terms-contact-title">13. Contact Information</h2>
          <p className="terms-contact-text">
            For questions or concerns regarding these Terms and Conditions, please contact:
          </p>
          <div className="terms-contact-details">
            <p><strong>Bleeding Tech</strong></p>
            <p>Email: <a href="mailto:bleeding.tech77@gmail.com">bleeding.tech77@gmail.com</a></p>
            <p>Number: <a href="tel:+9779809673319">+977 9809673319</a></p>
          </div>
        </div>

        {/* Changes Notice */}
        <div className="terms-changes-section">
          <h2 className="terms-changes-title">14. Amendments to Terms</h2>
          <p className="terms-changes-text">
            Bleeding Tech reserves the right to modify these Terms and Conditions at any time. Updated terms will be posted 
            on our website with a revised "Last Updated" date. Material changes will be communicated to active clients via email. 
            Continued use of our services after modifications constitutes acceptance of the updated terms.
          </p>
        </div>

        {/* Footer Note */}
        <div className="terms-footer-note">
          <p>
            By engaging Bleeding Tech's services, you acknowledge that you have read, understood, and agree to these 
            Terms and Conditions. These terms, together with our Privacy Policy and any specific service agreements, 
            constitute the complete agreement between you and Bleeding Tech.
          </p>
          <p className="terms-footer-emphasis">
            <strong>Thank you for choosing Bleeding Tech as your technology partner.</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TermsAndCondition;