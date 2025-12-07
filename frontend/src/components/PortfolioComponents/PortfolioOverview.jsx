import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Sparkles, Target, Zap, Shield, Code, Layers, Palette, Rocket, Globe, Database } from "lucide-react";
import "./PortfolioOverview.css";

const PortfolioOverview = () => {
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
    { icon: Target, label: "Quality-First Approach" },
    { icon: Zap, label: "Performance-Focused" },
    { icon: Shield, label: "Scalable Solutions" },
  ];

  // Floating icons for the right side
  const floatingIcons = [
    { Icon: Code, delay: 0, x: 60, y: 20, size: 28 },
    { Icon: Layers, delay: 0.5, x: 85, y: 45, size: 24 },
    { Icon: Palette, delay: 1, x: 40, y: 70, size: 26 },
    { Icon: Rocket, delay: 1.5, x: 75, y: 80, size: 22 },
    { Icon: Globe, delay: 2, x: 55, y: 50, size: 30 },
    { Icon: Database, delay: 0.8, x: 30, y: 35, size: 20 },
  ];

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-16 lg:py-24 "
      onMouseMove={handleMouseMove}
      style={{
        background: "hsl(var(--background))",
      }}
    >
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Grid pattern - very subtle */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Floating particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: "hsl(var(--primary))",
              boxShadow: "0 0 8px hsl(var(--glow))",
              top: `${25 + i * 15}%`,
              left: `${10 + i * 18}%`,
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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-md mb-6"
              style={{
                background: "hsl(var(--primary) / 0.08)",
                borderColor: "hsl(var(--primary) / 0.2)",
              }}
              variants={fadeUpVariants}
            >
              <Sparkles className="w-4 h-4" style={{ color: "hsl(var(--primary))" }} />
              <span
                className="text-sm font-semibold"
                style={{ color: "hsl(var(--primary))" }}
              >
                Our Work
              </span>
            </motion.div>

            {/* Title */}
            <motion.h2
              className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight mb-6"
              style={{ color: "hsl(var(--foreground))" }}
              variants={fadeUpVariants}
            >
              Showcasing Our{" "}
              <span
                className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary-accent))] bg-clip-text"
                style={{
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Best Work
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-lg lg:text-xl leading-relaxed mb-10"
              style={{ color: "hsl(var(--muted-foreground))" }}
              variants={fadeUpVariants}
            >
              Every project we undertake is crafted with precision, creativity, and a commitment to excellence. 
              We focus on building solutions that not only look stunning but perform exceptionally—delivering 
              real business value and lasting impact.
            </motion.p>

            {/* Highlights */}
            <motion.div
              className="flex flex-wrap gap-4"
              variants={fadeUpVariants}
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl border backdrop-blur-sm"
                  style={{
                    background: "hsl(var(--card) / 0.5)",
                    borderColor: "hsl(var(--border))",
                  }}
                  whileHover={{
                    borderColor: "hsl(var(--primary) / 0.5)",
                    background: "hsl(var(--card) / 0.8)",
                    scale: 1.02,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <item.icon
                    className="w-4 h-4"
                    style={{ color: "hsl(var(--primary))" }}
                  />
                  <span
                    className="text-sm font-medium"
                    style={{ color: "hsl(var(--foreground))" }}
                  >
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Interactive Design */}
          <motion.div
            className="relative hidden lg:flex items-center justify-center min-h-[400px]"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Central glow */}
            <motion.div
              className="absolute w-[300px] h-[300px] rounded-full"
              style={{
                background: "radial-gradient(circle, hsl(var(--primary) / 0.15), transparent 70%)",
                filter: "blur(60px)",
                transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              }}
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Orbiting ring */}
            <motion.div
              className="absolute w-[280px] h-[280px] rounded-full"
              style={{
                border: "1px solid hsl(var(--primary) / 0.15)",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              <motion.div
                className="absolute -top-1.5 left-1/2 w-3 h-3 rounded-full -translate-x-1/2"
                style={{
                  background: "hsl(var(--primary))",
                  boxShadow: "0 0 15px hsl(var(--glow))",
                }}
              />
            </motion.div>

            {/* Second ring */}
            <motion.div
              className="absolute w-[200px] h-[200px] rounded-full"
              style={{
                border: "1px dashed hsl(var(--primary) / 0.1)",
              }}
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />

            {/* Center hexagon */}
            <motion.div
              className="relative z-10"
              style={{
                transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
              }}
            >
              <motion.div
                className="w-24 h-24 flex items-center justify-center"
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="hsl(var(--primary-accent))" stopOpacity="0.1" />
                    </linearGradient>
                  </defs>
                  <polygon
                    points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
                    fill="url(#hexGradient)"
                    stroke="hsl(var(--primary))"
                    strokeWidth="1"
                    opacity="0.8"
                  />
                  <polygon
                    points="50,20 80,35 80,65 50,80 20,65 20,35"
                    fill="none"
                    stroke="hsl(var(--primary-accent))"
                    strokeWidth="0.5"
                    opacity="0.5"
                  />
                </svg>
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Sparkles className="w-8 h-8" style={{ color: "hsl(var(--primary))" }} />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Floating icons */}
            {floatingIcons.map(({ Icon, delay, x, y, size }, index) => (
              <motion.div
                key={index}
                className="absolute p-3 rounded-xl backdrop-blur-sm border"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  background: "hsl(var(--card) / 0.6)",
                  borderColor: "hsl(var(--border))",
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
                  y: { duration: 3 + index * 0.5, repeat: Infinity, delay: delay, ease: "easeInOut" },
                }}
                whileHover={{
                  scale: 1.15,
                  borderColor: "hsl(var(--primary) / 0.5)",
                  boxShadow: "0 8px 25px hsl(var(--glow))",
                }}
              >
                <Icon
                  style={{
                    width: size,
                    height: size,
                    color: "hsl(var(--primary))",
                  }}
                />
              </motion.div>
            ))}

            {/* Connecting lines (decorative) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.1 }}>
              <motion.line
                x1="50%" y1="50%" x2="60%" y2="20%"
                stroke="hsl(var(--primary))"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1 }}
              />
              <motion.line
                x1="50%" y1="50%" x2="85%" y2="45%"
                stroke="hsl(var(--primary))"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1.2 }}
              />
              <motion.line
                x1="50%" y1="50%" x2="40%" y2="70%"
                stroke="hsl(var(--primary))"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1.4 }}
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioOverview;
