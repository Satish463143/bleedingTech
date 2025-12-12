"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Sparkles, Code, Layers, Cpu, Zap } from "lucide-react";
import "./WhoWeAre.css";

const WhoWeAre = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left - rect.width / 2) / 30,
      y: (e.clientY - rect.top - rect.height / 2) / 30,
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
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const floatingElements = [
    { Icon: Code, x: 15, y: 20, delay: 0 },
    { Icon: Layers, x: 75, y: 15, delay: 0.3 },
    { Icon: Cpu, x: 85, y: 60, delay: 0.6 },
    { Icon: Zap, x: 25, y: 75, delay: 0.9 },
  ];

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-20 lg:py-28"
      onMouseMove={handleMouseMove}
      style={{
        background: "hsl(var(--background))",
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
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
              top: `${20 + i * 15}%`,
              left: `${5 + i * 20}%`,
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
          {/* Left Column - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            {/* Section Label */}
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
                About Us
              </span>
            </motion.div>

            {/* Title with Underline */}
            <motion.div className="mb-8" variants={fadeUpVariants}>
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight mb-4"
                style={{ color: "hsl(var(--foreground))" }}
              >
                Who We Are
              </h2>
              {/* Elegant Underline */}
              <motion.div
                className="h-1.5 w-24 rounded-full"
                style={{
                  background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--primary-accent)))",
                  boxShadow: "0 4px 15px hsl(var(--glow))",
                }}
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 96, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-lg lg:text-xl leading-relaxed mb-8"
              style={{ color: "hsl(var(--muted-foreground))" }}
              variants={fadeUpVariants}
            >
              <span className="font-semibold" style={{ color: "hsl(var(--primary))" }}>
                Bleeding Tech
              </span>{" "}
              is a modern digital engineering studio delivering high-performance websites, 
              apps, and systems with precision and purpose. Our approach blends clean engineering, 
              creative thinking, and user-focused design to build solutions that scale and stand out.
            </motion.p>

            {/* Quick Stats */}
            <motion.div
              className="flex flex-wrap gap-6"
              variants={fadeUpVariants}
            >
              {[
                { value: "6+", label: "Years Experience" },
                { value: "20+", label: "Projects Delivered" },
                { value: "95%", label: "Client Satisfaction" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div
                    className="text-2xl lg:text-3xl font-black"
                    style={{ color: "hsl(var(--primary))" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-xs font-medium uppercase tracking-wider"
                    style={{ color: "hsl(var(--muted-foreground))" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Abstract Design */}
          <motion.div
            className="relative hidden lg:flex items-center justify-center min-h-[450px]"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Central Gradient Box */}
            <motion.div
              className="relative w-80 h-80 rounded-3xl"
              style={{
                background: "linear-gradient(135deg, hsl(var(--primary) / 0.1), hsl(var(--primary-accent) / 0.05))",
                border: "1px solid hsl(var(--primary) / 0.15)",
                transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              }}
              animate={{
                boxShadow: [
                  "0 20px 60px hsl(var(--glow))",
                  "0 30px 80px hsl(var(--glow))",
                  "0 20px 60px hsl(var(--glow))",
                ],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Inner glow */}
              <motion.div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background: "radial-gradient(circle at 30% 30%, hsl(var(--primary) / 0.15), transparent 60%)",
                }}
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Geometric patterns inside */}
              <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.15 }}>
                <defs>
                  <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" />
                    <stop offset="100%" stopColor="hsl(var(--primary-accent))" />
                  </linearGradient>
                </defs>
                {/* Grid lines */}
                {[...Array(6)].map((_, i) => (
                  <motion.line
                    key={`h-${i}`}
                    x1="0"
                    y1={`${(i + 1) * 16.66}%`}
                    x2="100%"
                    y2={`${(i + 1) * 16.66}%`}
                    stroke="url(#gridGradient)"
                    strokeWidth="0.5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: i * 0.1 }}
                  />
                ))}
                {[...Array(6)].map((_, i) => (
                  <motion.line
                    key={`v-${i}`}
                    x1={`${(i + 1) * 16.66}%`}
                    y1="0"
                    x2={`${(i + 1) * 16.66}%`}
                    y2="100%"
                    stroke="url(#gridGradient)"
                    strokeWidth="0.5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: i * 0.1 + 0.5 }}
                  />
                ))}
              </svg>

              {/* Center icon */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              >
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary-accent)))",
                    boxShadow: "0 10px 30px hsl(var(--glow))",
                  }}
                >
                  <Code className="w-10 h-10 text-white" />
                </div>
              </motion.div>
            </motion.div>

            {/* Orbiting ring */}
            <motion.div
              className="absolute w-[360px] h-[360px] rounded-full pointer-events-none"
              style={{
                border: "1px dashed hsl(var(--primary) / 0.2)",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
              <motion.div
                className="absolute -top-2 left-1/2 w-4 h-4 rounded-full -translate-x-1/2"
                style={{
                  background: "hsl(var(--primary))",
                  boxShadow: "0 0 20px hsl(var(--glow))",
                }}
              />
            </motion.div>

            {/* Second ring */}
            <motion.div
              className="absolute w-[420px] h-[420px] rounded-full pointer-events-none"
              style={{
                border: "1px solid hsl(var(--primary) / 0.08)",
              }}
              animate={{ rotate: -360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            />

            {/* Floating icon tiles */}
            {floatingElements.map(({ Icon, x, y, delay }, index) => (
              <motion.div
                key={index}
                className="absolute p-3 rounded-xl backdrop-blur-sm border"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  background: "hsl(var(--card) / 0.7)",
                  borderColor: "hsl(var(--border))",
                  transform: `translate(${mousePosition.x * (0.3 + index * 0.1)}px, ${mousePosition.y * (0.3 + index * 0.1)}px)`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -10, 0],
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
                <Icon className="w-5 h-5" style={{ color: "hsl(var(--primary))" }} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
