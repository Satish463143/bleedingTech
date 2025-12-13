"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation, type Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Sparkles, 
  CheckCircle, 
  Zap, 
  Shield, 
  TrendingUp,
  Package,
  Layers,
  Settings,
  Rocket,
  Target,
  Award
} from "lucide-react";
import "./PackageIntro.css";



const PackageIntro = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const handleMouseMove = (e:any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left - rect.width / 2) / 25,
      y: (e.clientY - rect.top - rect.height / 2) / 25,
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const highlights = [
    { icon: Zap, label: "Transparent Pricing" },
    { icon: Shield, label: "No Hidden Fees" },
    { icon: TrendingUp, label: "Scalable Plans" },
  ];

  const benefits = [
    "Flexible engagement models to fit your budget",
    "Clear deliverables and timelines from day one",
    "Dedicated support throughout your project",
    "Upgrade or customize anytime as you grow",
  ];

  // Floating icons for the right side
  const floatingIcons = [
    { Icon: Package, delay: 0, x: 55, y: 15, size: 28 },
    { Icon: Layers, delay: 0.5, x: 80, y: 40, size: 24 },
    { Icon: Settings, delay: 1, x: 35, y: 65, size: 26 },
    { Icon: Rocket, delay: 1.5, x: 70, y: 75, size: 22 },
    { Icon: Target, delay: 2, x: 50, y: 45, size: 30 },
    { Icon: Award, delay: 0.8, x: 25, y: 30, size: 20 },
  ];

  return (
    <section
      ref={ref}
      className="package-intro-section"
      onMouseMove={handleMouseMove}
      style={{
        background:
          "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--bg-foreground) / 0.05) 100%)", marginTop:'-25px'
      }}
    >
      {/* Background Elements */}
      <div className="package-intro-bg">
        <div className="package-intro-grid" />
        
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="package-intro-particle"
            style={{
              top: `${20 + i * 12}%`,
              left: `${8 + i * 16}%`,
            }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              y: [0, -15, 0],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            {/* Badge */}
            <motion.div className="package-intro-badge" variants={fadeUpVariants}>
              <Sparkles className="w-4 h-4" />
              <span>Pricing & Plans</span>
            </motion.div>

            {/* Title */}
            <motion.h2 className="package-intro-title" variants={fadeUpVariants}>
              Transparent Packages,{" "}
              <span className="package-intro-title-accent">
                Real Results
              </span>
            </motion.h2>

            {/* Decorative line */}
            <motion.div
              className="package-intro-underline"
              initial={{ scaleX: 0, originX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            />

            {/* Description */}
            <motion.p className="package-intro-description" variants={fadeUpVariants}>
              We believe in straightforward pricing without surprises. Our packages are 
              designed to deliver maximum value at every stage of your business journey—from 
              ambitious startups to scaling enterprises. Choose the plan that fits your goals, 
              and let us handle the rest.
            </motion.p>

            {/* Benefits List */}
            <motion.div className="package-intro-benefits" variants={fadeUpVariants}>
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="package-intro-benefit"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <div className="benefit-check">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <span>{benefit}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Highlights */}
            <motion.div className="package-intro-highlights" variants={fadeUpVariants}>
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  className="package-intro-highlight"
                  whileHover={{
                    borderColor: "hsl(var(--primary) / 0.5)",
                    background: "hsl(var(--card) / 0.8)",
                    scale: 1.02,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <item.icon className="w-4 h-4 highlight-icon" />
                  <span>{item.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Interactive Design */}
          <motion.div
            className="package-intro-visual"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Central glow */}
            <motion.div
              className="visual-glow"
              style={{
                transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              }}
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Orbiting ring */}
            <motion.div
              className="visual-orbit-ring"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              <motion.div className="orbit-dot" />
            </motion.div>

            {/* Second ring */}
            <motion.div
              className="visual-orbit-ring-secondary"
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />

            {/* Center element - Package icon with price tag design */}
            <motion.div
              className="visual-center"
              style={{
                transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
              }}
            >
              <motion.div
                className="visual-center-box"
                animate={{
                  rotate: [0, 3, -3, 0],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Price tag shape */}
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <linearGradient id="priceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="hsl(var(--primary-accent))" stopOpacity="0.1" />
                    </linearGradient>
                  </defs>
                  <rect
                    x="10"
                    y="10"
                    width="80"
                    height="80"
                    rx="16"
                    fill="url(#priceGradient)"
                    stroke="hsl(var(--primary))"
                    strokeWidth="1"
                    opacity="0.8"
                  />
                  <rect
                    x="20"
                    y="20"
                    width="60"
                    height="60"
                    rx="10"
                    fill="none"
                    stroke="hsl(var(--primary-accent))"
                    strokeWidth="0.5"
                    opacity="0.5"
                  />
                </svg>
                <motion.div
                  className="visual-center-icon"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Package className="w-10 h-10" />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Floating icons */}
            {floatingIcons.map(({ Icon, delay, x, y, size }, index) => (
              <motion.div
                key={index}
                className="visual-floating-icon"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: `translate(${mousePosition.x * (0.3 + index * 0.1)}px, ${mousePosition.y * (0.3 + index * 0.1)}px)`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  y: [0, -8, 0],
                }}
                transition={{
                  opacity: { delay: delay + 0.5, duration: 0.5 },
                  scale: { delay: delay + 0.5, duration: 0.5 },
                  y: { duration: 3 + index * 0.5, repeat: Infinity, delay, ease: "easeInOut" },
                }}
                whileHover={{
                  scale: 1.15,
                  borderColor: "hsl(var(--primary) / 0.5)",
                  boxShadow: "0 8px 25px hsl(var(--glow))",
                }}
              >
                <Icon style={{ width: size, height: size }} />
              </motion.div>
            ))}

            {/* Connecting lines */}
            <svg className="visual-lines">
              <motion.line
                x1="50%" y1="50%" x2="55%" y2="15%"
                stroke="hsl(var(--primary))"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={inView ? { pathLength: 1 } : {}}
                transition={{ duration: 2, delay: 1 }}
              />
              <motion.line
                x1="50%" y1="50%" x2="80%" y2="40%"
                stroke="hsl(var(--primary))"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={inView ? { pathLength: 1 } : {}}
                transition={{ duration: 2, delay: 1.2 }}
              />
              <motion.line
                x1="50%" y1="50%" x2="35%" y2="65%"
                stroke="hsl(var(--primary))"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={inView ? { pathLength: 1 } : {}}
                transition={{ duration: 2, delay: 1.4 }}
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PackageIntro;
