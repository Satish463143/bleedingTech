import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Users,
  Target,
  CheckCircle,
  TrendingUp,
  Award,
  ExternalLink,
  Quote,
} from "lucide-react";
import CommonBanner from "../../common/CommonBanner/CommonBanner";
import ContactCTA from "../../common/ContactCTA/ContactCTA";
import "./CaseStudyDetail.css";

// Sample case study data - will be replaced with API
const caseStudyData = {
  1: {
    id: 1,
    slug: "ecommerce-growth-strategy",
    projectName: "E-Commerce Growth Strategy",
    companyName: "TechMart Solutions",
    logo: "https://ui-avatars.com/api/?name=TM&background=3B82F6&color=fff&size=80",
    heroImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop",
    tagline: "300% revenue increase through strategic digital transformation",
    category: "E-Commerce",
    industry: "Retail Technology",
    duration: "6 months",
    teamSize: "8 specialists",
    year: "2024",
    gradient: "from-blue-500 to-cyan-400",
    glowColor: "rgb(59, 130, 246, 0.5)",
    overview: "TechMart Solutions, a mid-sized electronics retailer, was struggling with stagnant online sales and a declining market share. Their outdated e-commerce platform was causing high cart abandonment rates and poor user experience. They needed a complete digital transformation to compete in the modern retail landscape.",
    challenge: [
      "Legacy e-commerce platform with poor mobile experience",
      "High cart abandonment rate of 78%",
      "Slow page load times affecting SEO rankings",
      "No personalization or recommendation engine",
      "Fragmented inventory management system",
    ],
    solution: [
      "Built a modern, headless e-commerce architecture using Next.js and Shopify",
      "Implemented AI-powered product recommendations",
      "Created a seamless mobile-first checkout experience",
      "Integrated real-time inventory sync across all channels",
      "Deployed advanced analytics and conversion tracking",
    ],
    results: [
      { metric: "300%", label: "Revenue Increase" },
      { metric: "65%", label: "Cart Abandonment Reduced" },
      { metric: "2.5s", label: "Page Load Time" },
      { metric: "180%", label: "Mobile Conversions Up" },
    ],
    technologies: ["Next.js", "Shopify Plus", "Node.js", "AWS", "TailwindCSS", "Algolia"],
    testimonial: {
      quote: "Bleeding Tech transformed our entire digital presence. The new platform not only looks stunning but has dramatically improved our bottom line. Their team's expertise and dedication exceeded all expectations.",
      author: "Michael Chen",
      role: "CEO, TechMart Solutions",
      avatar: "https://ui-avatars.com/api/?name=MC&background=3B82F6&color=fff&size=60",
    },
  },
  2: {
    id: 2,
    slug: "saas-platform-redesign",
    projectName: "SaaS Platform Redesign",
    companyName: "CloudSync Pro",
    logo: "https://ui-avatars.com/api/?name=CS&background=8B5CF6&color=fff&size=80",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
    tagline: "User engagement up 180% with intuitive UI/UX overhaul",
    category: "SaaS",
    industry: "Cloud Technology",
    duration: "4 months",
    teamSize: "6 specialists",
    year: "2024",
    gradient: "from-purple-500 to-pink-500",
    glowColor: "rgb(139, 92, 246, 0.5)",
    overview: "CloudSync Pro, a B2B cloud storage and collaboration platform, was experiencing user churn due to a complicated interface and lack of modern features. Their competitors were gaining market share with more intuitive solutions.",
    challenge: [
      "Complex navigation causing user frustration",
      "High learning curve for new users",
      "Outdated visual design affecting brand perception",
      "Poor mobile responsiveness",
      "Lack of collaborative features users demanded",
    ],
    solution: [
      "Complete UI/UX redesign based on extensive user research",
      "Implemented intuitive drag-and-drop interface",
      "Added real-time collaboration features",
      "Created comprehensive onboarding flow",
      "Built responsive design for all devices",
    ],
    results: [
      { metric: "180%", label: "User Engagement Up" },
      { metric: "45%", label: "Churn Rate Reduced" },
      { metric: "92%", label: "User Satisfaction" },
      { metric: "3x", label: "Feature Adoption" },
    ],
    technologies: ["React", "TypeScript", "Figma", "Framer Motion", "Node.js", "PostgreSQL"],
    testimonial: {
      quote: "The redesign was a game-changer for us. Our users love the new interface, and we've seen incredible improvements in all our key metrics. Bleeding Tech truly understood our vision.",
      author: "Sarah Johnson",
      role: "Product Director, CloudSync Pro",
      avatar: "https://ui-avatars.com/api/?name=SJ&background=8B5CF6&color=fff&size=60",
    },
  },
  // Add more case studies as needed
};

const CaseStudyDetail = () => {
  const { slug, id } = useParams();
  const [study, setStudy] = useState(null);

  useEffect(() => {
    // Fetch case study data - replace with API call
    const data = caseStudyData[id];
    setStudy(data);
    window.scrollTo(0, 0);
  }, [id]);

  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ color: "hsl(var(--foreground))" }}>
            Case Study Not Found
          </h2>
          <Link to="/case-studies" className="text-primary hover:underline">
            ← Back to Case Studies
          </Link>
        </div>
      </div>
    );
  }

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Case Studies", href: "/case-studies" },
    { label: study.projectName },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <CommonBanner
        title={study.projectName}
        slogan={study.tagline}
        breadcrumbs={breadcrumbs}
      />

      {/* Back Button */}
      <div className="container mx-auto px-6 lg:px-12 py-6">
        <Link
          to="/case-studies"
          className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
          style={{ color: "hsl(var(--muted-foreground))" }}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Case Studies</span>
        </Link>
      </div>

      {/* Hero Image */}
      <HeroImage study={study} />

      {/* Project Info */}
      <ProjectInfo study={study} />

      {/* Overview Section */}
      <OverviewSection study={study} />

      {/* Challenge & Solution */}
      <ChallengeSolution study={study} />

      {/* Results */}
      <ResultsSection study={study} />

      {/* Technologies */}
      <TechSection study={study} />

      {/* Testimonial */}
      <TestimonialSection study={study} />

      {/* CTA */}
      <ContactCTA />
    </div>
  );
};

// Hero Image Section
const HeroImage = ({ study }) => {
  return (
    <section className="case-detail-hero-image">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          className="hero-image-wrapper"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={study.heroImage} alt={study.projectName} className="hero-image" />
          <div className={`hero-image-overlay bg-gradient-to-t ${study.gradient}`} />
        </motion.div>
      </div>
    </section>
  );
};

// Project Info Bar
const ProjectInfo = ({ study }) => {
  const infoItems = [
    { icon: Users, label: "Client", value: study.companyName },
    { icon: Target, label: "Industry", value: study.industry },
    { icon: Clock, label: "Duration", value: study.duration },
    { icon: Calendar, label: "Year", value: study.year },
  ];

  return (
    <section className="case-detail-info">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          className="info-grid"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {infoItems.map((item, index) => (
            <div key={index} className="info-item">
              <item.icon className="info-icon" />
              <div>
                <span className="info-label">{item.label}</span>
                <span className="info-value">{item.value}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Overview Section
const OverviewSection = ({ study }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <section ref={ref} className="case-detail-overview">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
        >
          <span className="section-badge">Project Overview</span>
          <h2 className="section-title">About This Project</h2>
          <div className="overview-line" />
          <p className="overview-text">{study.overview}</p>
        </motion.div>
      </div>
    </section>
  );
};

// Challenge & Solution Section
const ChallengeSolution = ({ study }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section ref={ref} className="case-detail-challenge-solution">
      <div className="case-detail-bg">
        <div className="case-detail-grid" />
      </div>
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="challenge-solution-grid">
          {/* Challenge */}
          <motion.div
            className="challenge-card"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            <div className="card-header challenge-header">
              <Target className="card-icon" />
              <h3>The Challenge</h3>
            </div>
            <ul className="card-list">
              {study.challenge.map((item, index) => (
                <motion.li key={index} variants={itemVariants}>
                  <span className="list-bullet challenge-bullet" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Solution */}
          <motion.div
            className="solution-card"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            <div className="card-header solution-header">
              <CheckCircle className="card-icon" />
              <h3>Our Solution</h3>
            </div>
            <ul className="card-list">
              {study.solution.map((item, index) => (
                <motion.li key={index} variants={itemVariants}>
                  <span className="list-bullet solution-bullet" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Results Section
const ResultsSection = ({ study }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <section ref={ref} className="case-detail-results">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          <span className="section-badge">Results</span>
          <h2 className="section-title">Measurable Impact</h2>
        </motion.div>

        <motion.div
          className="results-grid"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {study.results.map((result, index) => (
            <motion.div
              key={index}
              className="result-card"
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.9 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.6 },
                },
              }}
            >
              <TrendingUp className="result-icon" />
              <span className="result-metric">{result.metric}</span>
              <span className="result-label">{result.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Technologies Section
const TechSection = ({ study }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <section ref={ref} className="case-detail-tech">
      <div className="case-detail-bg">
        <div className="case-detail-grid" />
      </div>
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          <span className="section-badge">Tech Stack</span>
          <h2 className="section-title">Technologies Used</h2>
        </motion.div>

        <motion.div
          className="tech-grid"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {study.technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="tech-item"
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              {tech}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Testimonial Section
const TestimonialSection = ({ study }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <section ref={ref} className="case-detail-testimonial">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          className="testimonial-card"
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
        >
          <Quote className="quote-icon" />
          <blockquote className="testimonial-quote">
            "{study.testimonial.quote}"
          </blockquote>
          <div className="testimonial-author">
            <img
              src={study.testimonial.avatar}
              alt={study.testimonial.author}
              className="author-avatar"
            />
            <div>
              <span className="author-name">{study.testimonial.author}</span>
              <span className="author-role">{study.testimonial.role}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudyDetail;
