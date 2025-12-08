import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import {
  Sparkles,
  Check,
  Megaphone,
  Globe,
  Smartphone,
  Palette,
  Search,
  Code,
  ArrowRight,
  Star,
} from "lucide-react";
import "./DetailedPackage.css";

// Package Data - Expanded with detailed features
const packageCategories = [
  {
    id: "digital-marketing",
    title: "Digital Marketing Packages",
    icon: Megaphone,
    color: "rgb(59, 130, 246)",
    packages: [
      {
        tier: "Starter Growth",
        price: "Starting from $499/mo",
        description: "Perfect for small businesses starting their digital journey. Build your online presence with essential marketing tools.",
        features: [
          "8 Custom Social Media Posts/month",
          "Basic Marketing Strategy & Planning",
          "1 Platform Ads Setup (Facebook/Instagram)",
          "Basic Keyword Research (20 keywords)",
          "Monthly Performance Report",
          "Content Calendar Planning",
          "Basic Competitor Analysis",
          "Email Support",
        ],
        popular: false,
      },
      {
        tier: "Business Growth",
        price: "Starting from $999/mo",
        description: "Ideal for growing businesses seeking consistent online presence and measurable results across multiple platforms.",
        features: [
          "12–16 Custom Posts/month",
          "2 Platforms Ads Management",
          "On-Page SEO (5 Pages)",
          "Conversion Rate Optimization",
          "Monthly Strategy Review Call",
          "Social Media Community Management",
          "Google My Business Optimization",
          "A/B Testing for Ads",
          "Detailed Analytics Dashboard",
          "Bi-weekly Performance Reports",
        ],
        popular: true,
      },
      {
        tier: "Premium Growth",
        price: "Starting from $1,999/mo",
        description: "Comprehensive marketing solution for established brands looking to dominate their market and maximize ROI.",
        features: [
          "Full Social Media Management (All Platforms)",
          "3 Platforms Ads Management & Optimization",
          "Complete SEO (On-Page + Off-Page)",
          "Sales Funnel Design & Optimization",
          "Email Marketing Setup & Automation",
          "Influencer Outreach & Collaboration",
          "Video Content Creation (2/month)",
          "Landing Page Optimization",
          "Weekly Strategy Calls",
          "Dedicated Account Manager",
          "Custom Analytics & Reporting",
        ],
        popular: false,
      },
    ],
  },
  {
    id: "web-development",
    title: "Web Development Packages",
    icon: Globe,
    color: "rgb(34, 197, 94)",
    packages: [
      {
        tier: "Basic Website",
        price: "Starting from $1,499",
        description: "Essential web presence for startups and small businesses. Get online quickly with a professional, responsive website.",
        features: [
          "5–7 Custom Designed Pages",
          "Fully Responsive Design (Mobile + Desktop)",
          "Modern UI/UX Design",
          "Contact Form with Email Notifications",
          "Basic On-Page SEO Setup",
          "Social Media Integration",
          "Google Analytics Setup",
          "SSL Certificate (HTTPS)",
          "1 Month Free Maintenance",
          "Basic Speed Optimization",
        ],
        popular: false,
      },
      {
        tier: "Professional Website",
        price: "Starting from $3,499",
        description: "Feature-rich website with custom design, CMS integration, and advanced functionality for growing businesses.",
        features: [
          "10–15 Custom Designed Pages",
          "Premium Custom UI/UX Design",
          "CMS Integration (WordPress/Custom)",
          "Blog System with Categories",
          "Advanced Speed Optimization",
          "Complete On-Page SEO",
          "Newsletter Integration",
          "Live Chat Integration",
          "Multi-language Support",
          "Custom Animations & Interactions",
          "3 Months Free Maintenance",
          "Training & Documentation",
        ],
        popular: true,
      },
      {
        tier: "E-Commerce Solution",
        price: "Starting from $5,999",
        description: "Complete online store with all essential features to start selling online and grow your e-commerce business.",
        features: [
          "Unlimited Product Listings",
          "Advanced Product Management",
          "Shopping Cart & Secure Checkout",
          "Multiple Payment Gateways",
          "Inventory Management System",
          "Order Tracking & Notifications",
          "Customer Account Dashboard",
          "Discount & Coupon System",
          "Product Reviews & Ratings",
          "Analytics & Sales Dashboard",
          "Email Marketing Integration",
          "6 Months Free Maintenance",
          "Staff Training Sessions",
        ],
        popular: false,
      },
    ],
  },
  {
    id: "mobile-app",
    title: "Mobile App Packages",
    icon: Smartphone,
    color: "rgb(168, 85, 247)",
    packages: [
      {
        tier: "MVP App",
        price: "Starting from $4,999",
        description: "Launch your minimum viable product quickly. Perfect for validating your idea and getting early user feedback.",
        features: [
          "iOS or Android Platform",
          "User Authentication System",
          "Up to 5 Core Features",
          "Basic Admin Panel",
          "Clean, Functional UI Design",
          "Basic Push Notifications",
          "App Store Publishing Support",
          "1 Month Bug Fixes",
          "Basic Analytics Integration",
          "Documentation & Handover",
        ],
        popular: false,
      },
      {
        tier: "Professional App",
        price: "Starting from $9,999",
        description: "Full-featured mobile application for your business. Cross-platform solution with premium design and functionality.",
        features: [
          "iOS + Android (Cross-Platform)",
          "Premium UI/UX Design",
          "Unlimited Core Features",
          "Advanced Admin Dashboard",
          "Third-Party API Integrations",
          "Push Notifications System",
          "Real-time Database Sync",
          "In-App Payments Integration",
          "Advanced Analytics & Tracking",
          "Social Login Integration",
          "Offline Mode Capability",
          "3 Months Free Support",
          "App Store Optimization",
        ],
        popular: true,
      },
      {
        tier: "Enterprise App",
        price: "Custom Pricing",
        description: "Scalable enterprise-grade mobile solution with advanced security, custom architecture, and dedicated support.",
        features: [
          "Custom Architecture Design",
          "Multi-Platform Development",
          "Advanced Security Features",
          "Role-Based Access Control",
          "Offline-First Architecture",
          "Cloud Infrastructure Setup",
          "CI/CD Pipeline Setup",
          "Load Testing & Optimization",
          "White-Label Options",
          "Custom Integrations (ERP/CRM)",
          "Dedicated Development Team",
          "12 Months Premium Support",
          "SLA & Priority Response",
        ],
        popular: false,
      },
    ],
  },
  {
    id: "ui-ux",
    title: "UI/UX Design Packages",
    icon: Palette,
    color: "rgb(249, 115, 22)",
    packages: [
      {
        tier: "Starter Design",
        price: "Starting from $799",
        description: "Essential design foundations for your project. Get professional wireframes and layouts to kickstart your product.",
        features: [
          "User Research & Analysis",
          "Low-Fidelity Wireframes",
          "Basic Information Architecture",
          "Up to 5 Screen Designs",
          "1 Design Revision Round",
          "Design Handoff (Figma)",
          "Basic Style Guide",
          "Mobile-First Approach",
        ],
        popular: false,
      },
      {
        tier: "Professional Design",
        price: "Starting from $2,499",
        description: "Complete design system for web and mobile. Premium designs with interactive prototypes and comprehensive documentation.",
        features: [
          "In-Depth User Research",
          "Competitive Analysis",
          "User Personas & Journey Maps",
          "High-Fidelity Wireframes",
          "Up to 15 Screen Designs",
          "Interactive Prototypes (Figma)",
          "Mobile + Web Responsive Designs",
          "Complete UI Component Library",
          "3 Design Revision Rounds",
          "Design System Documentation",
          "Developer Handoff Support",
          "Micro-Interaction Designs",
        ],
        popular: true,
      },
      {
        tier: "Product Experience",
        price: "Starting from $4,999",
        description: "End-to-end product design and user experience. Transform your vision into a world-class digital product.",
        features: [
          "Comprehensive UX Research",
          "User Testing & Interviews",
          "Full Design System Creation",
          "User Journey Mapping",
          "Advanced Interaction Design",
          "Motion & Animation Design",
          "Unlimited Screen Designs",
          "Usability Testing (3 Rounds)",
          "A/B Testing Recommendations",
          "Accessibility Compliance (WCAG)",
          "Brand Identity Integration",
          "Unlimited Revisions",
          "Ongoing Design Consultation",
        ],
        popular: false,
      },
    ],
  },
  {
    id: "seo",
    title: "SEO & Performance Packages",
    icon: Search,
    color: "rgb(236, 72, 153)",
    packages: [
      {
        tier: "Basic SEO",
        price: "Starting from $399/mo",
        description: "Essential SEO setup for small websites. Get found on Google with fundamental optimization and tracking.",
        features: [
          "5 Pages On-Page Optimization",
          "Meta Tags & Descriptions",
          "Keyword Research (30 Keywords)",
          "Google Search Console Setup",
          "Google Analytics Configuration",
          "XML Sitemap Creation",
          "Robots.txt Optimization",
          "Monthly Ranking Report",
          "Basic Technical SEO Audit",
        ],
        popular: false,
      },
      {
        tier: "Standard SEO",
        price: "Starting from $799/mo",
        description: "Comprehensive SEO for growing businesses. Improve rankings with technical optimization and quality backlinks.",
        features: [
          "10–15 Pages Optimization",
          "Advanced Technical SEO",
          "Quality Backlink Building (10/mo)",
          "Content Optimization & Strategy",
          "Local SEO Setup (GMB)",
          "Schema Markup Implementation",
          "Page Speed Optimization",
          "Mobile SEO Optimization",
          "Competitor Backlink Analysis",
          "Bi-Weekly Progress Reports",
          "Keyword Tracking Dashboard",
          "Content Recommendations",
        ],
        popular: true,
      },
      {
        tier: "Premium SEO",
        price: "Starting from $1,499/mo",
        description: "Full-scale SEO for maximum visibility. Dominate search results with advanced strategies and dedicated support.",
        features: [
          "Full Website SEO Optimization",
          "Advanced Competitor Analysis",
          "Premium Backlink Building (25/mo)",
          "Content Creation (4 Articles/mo)",
          "Video SEO Optimization",
          "E-commerce SEO (if applicable)",
          "International SEO Setup",
          "Conversion Rate Optimization",
          "Weekly Performance Reports",
          "Custom Analytics Dashboard",
          "Dedicated SEO Specialist",
          "Monthly Strategy Calls",
          "Google Penalty Recovery",
        ],
        popular: false,
      },
    ],
  },
  {
    id: "custom-dev",
    title: "Custom Development",
    icon: Code,
    color: "rgb(20, 184, 166)",
    packages: [
      {
        tier: "Custom Architecture",
        price: "Contact for Quote",
        description: "Tailored solutions for unique business requirements. Build exactly what you need with our expert development team.",
        features: [
          "Custom Backend Development",
          "RESTful API Development",
          "GraphQL Implementation",
          "Admin Dashboards & Portals",
          "Third-Party Integrations",
          "Database Design & Optimization",
          "Microservices Architecture",
          "Cloud Deployment (AWS/GCP/Azure)",
          "CI/CD Pipeline Setup",
          "Security Implementation",
          "Performance Optimization",
          "Documentation & Training",
          "Dedicated Project Manager",
          "Flexible Engagement Models",
        ],
        popular: false,
        isCustom: true,
      },
    ],
  },
];

const DetailedPackage = () => {
  const [activeCategory, setActiveCategory] = useState("digital-marketing");
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const activeData = packageCategories.find((cat) => cat.id === activeCategory);

  return (
    <section
      ref={ref}
      className="detailed-package-section"
      style={{
        background:
          "linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--bg-foreground) / 0.8) 100%)",
      }}
    >
      {/* Background Elements */}
      <div className="">
        <motion.div
          className="detailed-package-glow"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="detailed-package-grid" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          className="detailed-package-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div className="detailed-package-badge">
            <Sparkles className="w-4 h-4" />
            <span>Pricing & Packages</span>
          </motion.div>

          <h2 className="detailed-package-title">
            Our{" "}
            <span className="detailed-package-title-accent">Packages</span>
          </h2>

          <p className="detailed-package-subtitle">
            Flexible, scalable plans tailored to every stage of digital growth.
          </p>

          <motion.div
            className="detailed-package-underline"
            initial={{ width: 0, opacity: 0 }}
            animate={inView ? { width: 80, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="package-categories-container"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <div className="package-categories-tabs">
            {packageCategories.map((category) => (
              <CategoryTab
                key={category.id}
                category={category}
                isActive={activeCategory === category.id}
                onClick={() => setActiveCategory(category.id)}
              />
            ))}
          </div>
        </motion.div>

        {/* Package Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="package-cards-grid"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {activeData?.packages.map((pkg, index) => (
              <PackageCard
                key={pkg.tier}
                pkg={pkg}
                index={index}
                categoryColor={activeData.color}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Comparison CTA */}
        <motion.div
          className="package-comparison-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="comparison-cta-content">
            <h3 className="comparison-cta-title">Need Help Choosing?</h3>
            <p className="comparison-cta-text">
              Our team can help you find the perfect package for your business needs.
            </p>
          </div>
          <motion.button
            className="comparison-cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
           <Link to ="/contact-us">Schedule a Consultation</Link>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

// Category Tab Component
const CategoryTab = ({ category, isActive, onClick }) => {
  const Icon = category.icon;

  return (
    <motion.button
      className={`category-tab ${isActive ? "active" : ""}`}
      onClick={onClick}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      style={{
        "--category-color": category.color,
      }}
    >
      <div className="category-tab-icon">
        <Icon className="w-5 h-5" />
      </div>
      <span className="category-tab-label">{category.title}</span>
      {isActive && (
        <motion.div
          className="category-tab-indicator"
          layoutId="categoryIndicator"
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      )}
    </motion.button>
  );
};

// Package Card Component
const PackageCard = ({ pkg, index, categoryColor }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`package-card ${pkg.popular ? "popular" : ""} ${pkg.isCustom ? "custom" : ""}`}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        "--card-accent": categoryColor,
      }}
    >
      {/* Popular Badge */}
      {pkg.popular && (
        <div className="package-popular-badge">
          <Star className="w-3 h-3" />
          <span>Most Popular</span>
        </div>
      )}

      {/* Card Glow */}
      <motion.div
        className="package-card-glow"
        animate={{ opacity: isHovered ? 0.4 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Top Accent Line */}
      <div className="package-card-accent" />

      {/* Card Content */}
      <div className="package-card-content">
        {/* Tier & Price */}
        <div className="package-card-header">
          <h3 className="package-tier">{pkg.tier}</h3>
          <p className="package-price">{pkg.price}</p>
        </div>

        {/* Description */}
        <p className="package-description">{pkg.description}</p>

        {/* Features */}
        <ul className="package-features">
          {pkg.features.map((feature, idx) => (
            <motion.li
              key={idx}
              className="package-feature"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + idx * 0.05 }}
            >
              <div className="feature-check">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span>{feature}</span>
            </motion.li>
          ))}
        </ul>

        {/* CTA Button */}
        <motion.button
          className={`package-cta ${pkg.isCustom ? "custom-cta" : ""}`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link to ="/contact-us">{pkg.isCustom ? "Contact Us" : "Get This Package"}</Link>
          <ArrowRight className="w-4 h-4" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default DetailedPackage;
