import React from "react";
import CommonBanner from "../../common/CommonBanner/CommonBanner";
import ContactCards from "../../components/ContactComponents/ContactCards";
import ContactForm from "../../components/ContactComponents/ContactForm";
import MapSection from "../../components/ContactComponents/MapSection";
import GetinTouchCTA from "../../components/ContactComponents/GetinTouchCTA";

const ContactUs = () => {
  // Breadcrumb data
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Contact Us" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <CommonBanner
        title="Contact Us"
        slogan="Let's build something great together. Reach out and let's start a conversation."
        breadcrumbs={breadcrumbs}
      />

      {/* Contact Info Cards */}
      <ContactCards />

      {/* Contact Form Section */}
      <ContactForm />

      {/* Map Section */}
      <MapSection
        title="Find Us Here"
        subtitle="Visit our office in the heart of Kathmandu or schedule a virtual meeting"
      />

      {/* CTA Section */}
      <GetinTouchCTA
        title="Ready to Start Your Project?"
        subtitle="Transform your ideas into reality with our expert team by your side."
        buttonText="Get Free Quote"
        buttonLink="/contact-us"
      />

    </div>
  );
};

export default ContactUs;
