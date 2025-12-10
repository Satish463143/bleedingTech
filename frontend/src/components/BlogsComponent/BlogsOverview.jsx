import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Sparkles, 
  BookOpen, 
  TrendingUp, 
  Lightbulb,
  PenTool,
  Layers,
  Zap,
  MessageSquare
} from "lucide-react";
import "./BlogsOverview.css";

const BlogsOverview = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const handleMouseMove = (e) => {
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

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const highlights = [
    { icon: Lightbulb, label: "Expert Insights" },
    { icon: TrendingUp, label: "Industry Trends" },
    { icon: Zap, label: "Tech Updates" },
  ];

  const floatingIcons = [
    { Icon: BookOpen, delay: 0, x: 55, y: 15, size: 28 },
    { Icon: PenTool, delay: 0.5, x: 80, y: 40, size: 24 },
    { Icon: Layers, delay: 1, x: 35, y: 65, size: 26 },
    { Icon: MessageSquare, delay: 1.5, x: 70, y: 75, size: 22 },
    { Icon: Lightbulb, delay: 2, x: 50, y: 45, size: 30 },
    { Icon: Zap, delay: 0.8, x: 25, y: 30, size: 20 },
  ];

  return (
    <section
      ref={ref}
      className="blogs-overview-section"
      onMouseMove={handleMouseMove}
    >
      {/* Background Elements */}
      <div className="blogs-overview-bg">
        <div className="blogs-overview-grid" />
        
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="blogs-overview-particle"
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
            <motion.div className="blogs-overview-badge" variants={fadeUpVariants}>
              <Sparkles className="w-4 h-4" />
              <span>Our Blog</span>
            </motion.div>

            {/* Title */}
            <motion.h2 className="blogs-overview-title" variants={fadeUpVariants}>
              Insights &{" "}
              <span className="blogs-overview-title-accent">
                Ideas
              </span>
            </motion.h2>

            {/* Decorative line */}
            <motion.div
              className="blogs-overview-underline"
              initial={{ scaleX: 0, originX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            />

            {/* Description */}
            <motion.p className="blogs-overview-description" variants={fadeUpVariants}>
              Discover expert perspectives on technology, design, and digital strategy. 
              Our blog covers the latest trends, best practices, and actionable insights 
              to help your business thrive in the digital landscape.
            </motion.p>

            {/* Highlights */}
            <motion.div className="blogs-overview-highlights" variants={fadeUpVariants}>
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  className="blogs-overview-highlight"
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
            className="blogs-overview-visual"
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

            {/* Center element */}
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
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <linearGradient id="blogGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="hsl(var(--primary-accent))" stopOpacity="0.1" />
                    </linearGradient>
                  </defs>
                  <rect
                    x="15"
                    y="10"
                    width="70"
                    height="80"
                    rx="8"
                    fill="url(#blogGradient)"
                    stroke="hsl(var(--primary))"
                    strokeWidth="1"
                    opacity="0.8"
                  />
                  <line x1="25" y1="25" x2="75" y2="25" stroke="hsl(var(--primary-accent))" strokeWidth="0.5" opacity="0.6" />
                  <line x1="25" y1="35" x2="65" y2="35" stroke="hsl(var(--primary-accent))" strokeWidth="0.5" opacity="0.4" />
                  <line x1="25" y1="45" x2="70" y2="45" stroke="hsl(var(--primary-accent))" strokeWidth="0.5" opacity="0.4" />
                  <rect x="25" y="55" width="50" height="25" rx="4" fill="hsl(var(--primary))" opacity="0.2" />
                </svg>
                <motion.div
                  className="visual-center-icon"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <BookOpen className="w-10 h-10" />
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

export default BlogsOverview;
