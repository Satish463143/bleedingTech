"use client";
import { Shield } from "lucide-react";
import "./PrivcyPolicy.css";
import { privacySections } from "@/src/data/data";

const PrivcyAndPolicy = () => {
  

  const sections = privacySections

  return (
    <section className="privacy-policy-section mt-9" >
      <div className="privacy-container">
        {/* Header */}
        <div className="privacy-header">
          <div className="privacy-icon-wrapper">
            <Shield className="privacy-main-icon" />
          </div>
          <h1 className="privacy-main-title">Privacy Policy</h1>
          <p className="privacy-intro">
            At <strong>Bleeding Tech</strong>, we are committed to protecting your privacy and ensuring the security of your personal information. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you use our services or visit our website.
          </p>
          <p className="privacy-effective-date">
            <strong>Effective Date:</strong> January 1, 2024 | <strong>Last Updated:</strong> December 28, 2024
          </p>
        </div>

        {/* Content Sections */}
        {sections.map((section, index) => (
          <div key={index} className="privacy-section">
            <div className="privacy-section-header">
              <section.icon className="privacy-section-icon" />
              <h2 className="privacy-section-title">{section.title}</h2>
            </div>
            {section.content.map((item, idx) => (
              <div key={idx} className="privacy-content-block">
                {item.subtitle && (
                  <h3 className="privacy-subtitle">{item.subtitle}</h3>
                )}
                <p className="privacy-text">{item.text}</p>
              </div>
            ))}
          </div>
        ))}

        {/* Contact Information */}
        <div className="privacy-contact-section">
          <h2 className="privacy-contact-title">9. Contact Us</h2>
          <p className="privacy-contact-text">
            If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, 
            please contact us:
          </p>
          <div className="privacy-contact-details">
            <p><strong>Bleeding Tech</strong></p>
            <p>Email: <a href="mailto:bleeding.tech77@gmail.com">bleeding.tech77@gmail.com</a></p>
            <p>Number: <a href="tel:+9779809673319">+977 9809673319</a></p>
          </div>
        </div>

        {/* Changes Notice */}
        <div className="privacy-changes-section">
          <h2 className="privacy-changes-title">10. Changes to This Privacy Policy</h2>
          <p className="privacy-changes-text">
            Bleeding Tech reserves the right to update or modify this Privacy Policy at any time. 
            We will notify you of any material changes by posting the updated policy on our website and updating 
            the "Last Updated" date. Your continued use of our services after such modifications constitutes 
            your acceptance of the updated Privacy Policy. We encourage you to review this policy periodically.
          </p>
        </div>

        {/* Footer Note */}
        <div className="privacy-footer-note">
          <p>
            By using Bleeding Tech's services, you acknowledge that you have read, understood, and agree to be 
            bound by this Privacy Policy. This policy works in conjunction with our Terms and Conditions to 
            govern your relationship with Bleeding Tech.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivcyAndPolicy;