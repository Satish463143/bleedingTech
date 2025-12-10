import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Heading from "../../common/Heading/Heading";
import "./CaseStudyList.css";

// Sample case study data - will be replaced with API
const caseStudies = [
  {
    id: 1,
    slug: "ecommerce-growth-strategy",
    projectName: "E-Commerce Growth Strategy",
    companyName: "TechMart Solutions",
    logo: "https://ui-avatars.com/api/?name=TM&background=3B82F6&color=fff&size=80",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    tagline: "300% revenue increase through strategic digital transformation",
    category: "E-Commerce",
  },
  {
    id: 2,
    slug: "saas-platform-redesign",
    projectName: "SaaS Platform Redesign",
    companyName: "CloudSync Pro",
    logo: "https://ui-avatars.com/api/?name=CS&background=8B5CF6&color=fff&size=80",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    tagline: "User engagement up 180% with intuitive UI/UX overhaul",
    category: "SaaS",
  },
  {
    id: 3,
    slug: "fintech-mobile-app",
    projectName: "FinTech Mobile App",
    companyName: "PayFlow Finance",
    logo: "https://ui-avatars.com/api/?name=PF&background=10B981&color=fff&size=80",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
    tagline: "50K+ downloads in first month with seamless payment solution",
    category: "FinTech",
  },
  {
    id: 4,
    slug: "healthcare-portal",
    projectName: "Healthcare Portal",
    companyName: "MediCare Plus",
    logo: "https://ui-avatars.com/api/?name=MC&background=F59E0B&color=fff&size=80",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
    tagline: "Patient satisfaction improved 95% with digital health platform",
    category: "Healthcare",
  },
  {
    id: 5,
    slug: "real-estate-platform",
    projectName: "Real Estate Platform",
    companyName: "PropTech Homes",
    logo: "https://ui-avatars.com/api/?name=PT&background=EF4444&color=fff&size=80",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    tagline: "Reduced property search time by 60% with AI recommendations",
    category: "Real Estate",
  },
  {
    id: 6,
    slug: "edtech-learning-system",
    projectName: "EdTech Learning System",
    companyName: "LearnSphere",
    logo: "https://ui-avatars.com/api/?name=LS&background=6366F1&color=fff&size=80",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
    tagline: "Achieved 40% higher course completion rates with gamification",
    category: "Education",
  },
];

const CaseStudyList = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section
      ref={ref}
      className="case-study-list-section"
    >
      {/* Animated Background */}
      <div className="case-study-list-bg">
        {/* Grid pattern */}
        <div className="case-study-list-grid" />
        
        {/* Animated gradient orbs */}
        <motion.div
          className="case-study-orb case-study-orb-1"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.3, 0.15],
            x: [0, 50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="case-study-orb case-study-orb-2"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.25, 0.1],
            y: [0, -30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="case-study-orb case-study-orb-3"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />

        {/* Diagonal beam */}
        <motion.div
          className="case-study-beam"
          animate={{
            opacity: [0.03, 0.08, 0.03],
            rotate: [0, 1, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />

        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="case-study-particle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.1, 0.6, 0.1],
              y: [0, -25, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}

        {/* Floating geometric shapes */}
        <motion.div
          className="case-study-shape case-study-shape-1"
          animate={{
            y: [-10, 10, -10],
            rotate: [0, 90, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 12, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <rect
              x="25"
              y="25"
              width="50"
              height="50"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="1"
              opacity="0.5"
            />
          </svg>
        </motion.div>

        <motion.div
          className="case-study-shape case-study-shape-2"
          animate={{
            y: [10, -10, 10],
            rotate: [0, -45, 0],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{
            y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 14, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="hsl(var(--primary-accent))"
              strokeWidth="0.5"
            />
            <circle
              cx="50"
              cy="50"
              r="25"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="0.5"
            />
          </svg>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <Heading
          head="Case Studies"
          subhead="Our"
          title="Success Stories"
          desc="Explore how we've helped businesses achieve remarkable results through innovative digital solutions."
        />

        {/* Case Studies Grid */}
        <motion.div
          className="case-study-grid"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={study.id} study={study} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Individual Case Study Card with unique hover effect
const CaseStudyCard = ({ study, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleViewCaseStudy = () => {
    navigate(`/case-study-detail/${study.slug}/${study.id}`);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.div
      className="case-study-card"
      variants={cardVariants}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleViewCaseStudy}
    >
      {/* Glow effect */}
      <motion.div
        className="card-glow"
        animate={{ opacity: isHovered ? 0.5 : 0 }}
        transition={{ duration: 0.4 }}
      />

      {/* Main card */}
      <div className="card-inner">
        {/* Background Image */}
        <motion.div
          className="card-image-wrapper"
          animate={{
            filter: isHovered ? "blur(2px) brightness(0.4)" : "blur(0px) brightness(1)",
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <motion.img
            src={study.image}
            alt={study.projectName}
            className="card-image"
            animate={{
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </motion.div>

        {/* Single color overlay from left (colliding effect) */}
        <motion.div
          className="card-gradient-overlay"
          initial={{ x: "-100%", opacity: 0 }}
          animate={{
            x: isHovered ? "0%" : "-100%",
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Content from right (colliding effect) */}
        <motion.div
          className="card-content-overlay"
          initial={{ x: "100%", opacity: 0 }}
          animate={{
            x: isHovered ? "0%" : "100%",
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Company Logo & Name */}
          <motion.div
            className="card-company"
            initial={{ y: 20, opacity: 0 }}
            animate={{
              y: isHovered ? 0 : 20,
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <img src={study.logo} alt={study.companyName} className="company-logo" />
            <span className="company-name">{study.companyName}</span>
          </motion.div>

          {/* Project Name */}
          <motion.h3
            className="card-title"
            initial={{ y: 20, opacity: 0 }}
            animate={{
              y: isHovered ? 0 : 20,
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            {study.projectName}
          </motion.h3>

          {/* Tagline */}
          <motion.p
            className="card-tagline"
            initial={{ y: 20, opacity: 0 }}
            animate={{
              y: isHovered ? 0 : 20,
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.4, delay: 0.25 }}
          >
            {study.tagline}
          </motion.p>

          {/* Category Badge */}
          <motion.span
            className="card-category"
            initial={{ y: 20, opacity: 0 }}
            animate={{
              y: isHovered ? 0 : 20,
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            {study.category}
          </motion.span>

          {/* View Button */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{
              y: isHovered ? 0 : 20,
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.4, delay: 0.35 }}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleViewCaseStudy();
              }}
              className="card-button"
            >
              <span>View Case Study</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </motion.div>

        {/* Default visible content (before hover) */}
        <motion.div
          className="card-default-content"
          animate={{
            opacity: isHovered ? 0 : 1,
            y: isHovered ? -20 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Category badge */}
          <span className="default-category">
            {study.category}
          </span>

          {/* Company info */}
          <div className="default-company">
            <img src={study.logo} alt={study.companyName} className="default-logo" />
            <span className="default-company-name">{study.companyName}</span>
          </div>

          {/* Project name */}
          <h3 className="default-title">{study.projectName}</h3>
        </motion.div>

        {/* Top accent line */}
        <motion.div
          className="card-accent-line"
          animate={{
            scaleX: isHovered ? 1 : 0.3,
            opacity: isHovered ? 1 : 0.5,
          }}
          transition={{ duration: 0.4 }}
        />

        {/* Corner decoration */}
        <motion.div
          className="card-corner"
          animate={{ opacity: isHovered ? 0.3 : 0.1 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
};

export default CaseStudyList;
