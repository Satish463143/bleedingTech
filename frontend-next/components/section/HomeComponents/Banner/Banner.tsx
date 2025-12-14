"use client";
import React, { useEffect, useState} from "react";
import { motion, useAnimation, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, Zap, Sparkles, Play } from "lucide-react";
import "./Banner.css";

const Banner: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Fix hydration: Generate particles only on client side
  const [particles, setParticles] = useState<Array<{
    top: number;
    left: number;
    duration: number;
    delay: number;
  }>>([]);

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  // Generate random particles only on client side to avoid SSR hydration mismatch
  useEffect(() => {
    setParticles(
      Array.from({ length: 8 }, () => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        duration: 3 + Math.random() * 2,
        delay: Math.random() * 2,
      }))
    );
  }, []);

  // Smooth parallax mouse effect with spring physics
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left - rect.width / 2) / 50);
    mouseY.set((e.clientY - rect.top - rect.height / 2) / 50);
  };

  // Spring configuration for ultra-smooth motion
  const springConfig = { stiffness: 150, damping: 30, mass: 0.5 };
  const parallaxX = useSpring(useTransform(mouseX, [-1, 1], [-8, 8]), springConfig);
  const parallaxY = useSpring(useTransform(mouseY, [-1, 1], [-8, 8]), springConfig);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
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

  const fadeInVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  // Floating animation
  const floatingVariants = (delay = 0, duration = 4) => ({
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, 0, -5, 0],
      transition: {
        y: { duration, repeat: Infinity, ease: "easeInOut" },
        rotate: { duration: duration * 1.5, repeat: Infinity, ease: "easeInOut" },
        delay,
      },
    },
  });

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden min-h-screen flex items-center bg-background"
      style={{
        background: "linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--bg-foreground) / 0.8) 100%)",
      }}
    >
      {/* ANIMATED BACKGROUND LAYERS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Radial gradient glow */}
        <motion.div
          className="absolute top-1/4 left-1/3 w-[800px] h-[800px] opacity-40"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background: "radial-gradient(circle, hsl(var(--primary) / 0.15), transparent 70%)",
            filter: "blur(80px)",
          }}
        />

        {/* Secondary glow */}
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] opacity-30"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          style={{
            background: "radial-gradient(circle, hsl(var(--primary-accent) / 0.2), transparent 70%)",
            filter: "blur(100px)",
          }}
        />

        {/* Animated beam/light */}
        <motion.div
          className="absolute top-0 left-0 w-full h-[60%] opacity-20"
          animate={{
            rotate: [0, 5, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          style={{
            background: "linear-gradient(120deg, transparent 0%, hsl(var(--primary) / 0.1) 50%, transparent 100%)",
            filter: "blur(60px)",
            transform: "rotate(-15deg)",
          }}
        />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 right-[15%] w-32 h-32 opacity-40"
          style={{ x: parallaxX, y: parallaxY }}
          {...floatingVariants(0, 5)}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
                <stop offset="100%" stopColor="hsl(var(--primary-accent))" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <polygon points="50,5 95,75 5,75" fill="url(#grad1)" stroke="hsl(var(--primary))" strokeWidth="0.5" />
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-32 left-[10%] w-24 h-24 opacity-30"
          style={{ x: parallaxX, y: parallaxY }}
          {...floatingVariants(1.5, 6)}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="45" fill="none" stroke="hsl(var(--primary-accent))" strokeWidth="1" opacity="0.4" />
            <circle cx="50" cy="50" r="30" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.6" />
          </svg>
        </motion.div>

        <motion.div
          className="absolute top-1/2 left-[8%] w-20 h-20 opacity-25"
          {...floatingVariants(3, 7)}
        >
          <div
            className="w-full h-full rounded-2xl"
            style={{
              background: "linear-gradient(135deg, hsl(var(--primary) / 0.2), hsl(var(--primary-accent) / 0.1))",
              border: "1px solid hsl(var(--primary) / 0.3)",
              backdropFilter: "blur(10px)",
            }}
          />
        </motion.div>

        {/* Particle dots */}
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: "hsl(var(--primary))",
              boxShadow: "0 0 10px hsl(var(--glow))",
              top: `${particle.top}%`,
              left: `${particle.left}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* MAIN CONTENT */}
      <div className="container mx-auto px-6 lg:px-12 py-20 relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* LEFT: Text Content */}
          <motion.div className="space-y-8" variants={fadeUpVariants}>
            {/* Badge */}
            <motion.div
              className="inline-flex items-center lg:mt-7 mt-5 gap-3 px-4 py-2 rounded-full border backdrop-blur-md"
              style={{
                background: "hsl(var(--primary) / 0.05)",
                borderColor: "hsl(var(--primary) / 0.2)",
              }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px hsl(var(--glow))" }}
            >
              <Sparkles className="w-4 h-4" style={{ color: "hsl(var(--primary))" }} />
              <span className="text-sm font-semibold" style={{ color: "hsl(var(--primary))" }}>
                Next-Gen Technology
              </span>
              <motion.div
                className="w-2 h-2 rounded-full"
                style={{ background: "hsl(var(--primary))" }}
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>

            {/* Headline */}
            <motion.div variants={fadeUpVariants}>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight"
                style={{ color: "hsl(var(--foreground))" }}
              >
                Build the
                <br />
                <span
                  className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary-accent))] bg-clip-text text-transparent"
                  style={{
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Future of AI
                </span>
              </h1>
            </motion.div>

            {/* Subtext */}
            <motion.p
              className="text-lg md:text-xl max-w-xl leading-relaxed"
              style={{ color: "hsl(var(--muted-foreground))" }}
              variants={fadeUpVariants}
            >
              Unleash the power of intelligent automation, real-time analytics, and cutting-edge cloud orchestration.
              Transform your vision into reality.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div className="flex flex-wrap gap-4" variants={fadeUpVariants}>
              <motion.button
                className="group relative px-8 py-4 rounded-2xl font-bold text-lg overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary-accent)))",
                  color: "white",
                  boxShadow: "0 10px 40px hsl(var(--glow))",
                }}
                whileHover={{ scale: 1.05, boxShadow: "0 15px 50px hsl(var(--glow))" }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--primary-accent))] to-[hsl(var(--primary))] opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ zIndex: 0 }}
                />
              </motion.button>

              <motion.button
                className="group px-8 py-4 rounded-2xl font-bold text-lg border-2 backdrop-blur-md flex items-center gap-3"
                style={{
                  borderColor: "hsl(var(--border))",
                  color: "hsl(var(--foreground))",
                  background: "hsl(var(--background) / 0.5)",
                }}
                whileHover={{
                  scale: 1.05,
                  borderColor: "hsl(var(--primary))",
                  boxShadow: "0 0 30px hsl(var(--glow))",
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: "hsl(var(--primary) / 0.1)" }}
                >
                  <Play className="w-5 h-5" style={{ color: "hsl(var(--primary))" }} />
                </div>
                Watch Demo
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex flex-wrap gap-8 pt-8 border-t"
              style={{ borderColor: "hsl(var(--border))" }}
              variants={fadeUpVariants}
            >
              {[
                { value: "10M+", label: "API Calls" },
                { value: "99.9%", label: "Uptime" },
                { value: "150+", label: "Countries" },
              ].map((stat, idx) => (
                <div key={idx}>
                  <div
                    className="text-3xl font-bold bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary-accent))] bg-clip-text text-transparent"
                    style={{
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT: Floating 3D Card with Dashboard Preview */}
          <motion.div className="relative" variants={fadeInVariants}>
            <motion.div
              className="relative will-change-transform"
              style={{ x: parallaxX, y: parallaxY }}
            >
              {/* Main Glass Card */}
              <motion.div
                className="relative p-8 rounded-3xl backdrop-blur-xl border shadow-2xl will-change-transform"
                style={{
                  background: "linear-gradient(135deg, hsl(var(--card) / 0.8), hsl(var(--card) / 0.4))",
                  borderColor: "hsl(var(--border))",
                  boxShadow: "0 25px 50px -12px hsl(var(--primary) / 0.25)",
                }}
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ type: "spring" as const, stiffness: 400, damping: 30 }}
              >
                {/* Card Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{
                        background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary-accent)))",
                      }}
                    >
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-lg" style={{ color: "hsl(var(--foreground))" }}>
                        AI Dashboard
                      </div>
                      <div className="text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>
                        Real-time Analytics
                      </div>
                    </div>
                  </div>
                  <motion.div
                    className="px-3 py-1 rounded-full text-sm font-semibold"
                    style={{
                      background: "hsl(var(--primary) / 0.1)",
                      color: "hsl(var(--primary))",
                    }}
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    ● LIVE
                  </motion.div>
                </div>

                {/* Animated Chart */}
                <div className="mb-6">
                  <svg viewBox="0 0 400 120" className="w-full h-32">
                    <defs>
                      <linearGradient id="chartGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="hsl(var(--primary))" />
                        <stop offset="100%" stopColor="hsl(var(--primary-accent))" />
                      </linearGradient>
                      <linearGradient id="fillGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <motion.path
                      d="M0 80 Q50 60, 100 50 T200 40 T300 30 T400 20"
                      stroke="url(#chartGrad)"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                    />
                    <motion.path
                      d="M0 80 Q50 60, 100 50 T200 40 T300 30 T400 20 L400 120 L0 120 Z"
                      fill="url(#fillGrad)"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 2, delay: 0.5 }}
                    />
                  </svg>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: "Latency", value: "12ms", color: "hsl(var(--primary))" },
                    { label: "Requests", value: "2.4K", color: "hsl(var(--primary-accent))" },
                    { label: "Errors", value: "0.01%", color: "#10b981" },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      className="p-4 rounded-xl"
                      style={{
                        background: "hsl(var(--muted) / 0.3)",
                        border: "1px solid hsl(var(--border))",
                      }}
                      whileHover={{ scale: 1.05, borderColor: item.color }}
                    >
                      <div className="text-xs mb-1" style={{ color: "hsl(var(--muted-foreground))" }}>
                        {item.label}
                      </div>
                      <div className="text-xl font-bold" style={{ color: item.color }}>
                        {item.value}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Glow effect behind card */}
                <motion.div
                  className="absolute -inset-4 rounded-3xl opacity-30 -z-10 blur-3xl"
                  style={{
                    background: "radial-gradient(circle, hsl(var(--primary)), transparent 70%)",
                  }}
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </motion.div>

              {/* Floating mini cards */}
              <motion.div
                className="absolute -top-8 -right-8 p-4 rounded-2xl backdrop-blur-md border"
                style={{
                  background: "hsl(var(--card) / 0.8)",
                  borderColor: "hsl(var(--border))",
                }}
                {...floatingVariants(0.5, 4)}
              >
                <Sparkles className="w-8 h-8" style={{ color: "hsl(var(--primary))" }} />
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 p-3 rounded-xl backdrop-blur-md border"
                style={{
                  background: "hsl(var(--card) / 0.8)",
                  borderColor: "hsl(var(--border))",
                }}
                {...floatingVariants(1, 5)}
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-semibold" style={{ color: "hsl(var(--foreground))" }}>
                    Online
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 flex justify-center pt-2"
          style={{ borderColor: "hsl(var(--border))" }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1.5 h-2 rounded-full"
            style={{ background: "hsl(var(--primary))" }}
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Banner;
