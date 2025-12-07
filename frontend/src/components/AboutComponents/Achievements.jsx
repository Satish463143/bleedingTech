import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Sparkles, Briefcase, Users, Clock, ThumbsUp } from "lucide-react";
import "./Achievements.css";

// Custom hook for animated counter
const useCounter = (end, duration = 2000, start = 0, inView = false) => {
  const [count, setCount] = useState(start);
  const countRef = useRef(start);
  const startTimeRef = useRef(null);

  useEffect(() => {
    if (!inView) return;

    const animate = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const progress = Math.min((timestamp - startTimeRef.current) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(start + (end - start) * easeOutQuart);
      
      setCount(currentCount);
      countRef.current = currentCount;

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);

    return () => {
      startTimeRef.current = null;
    };
  }, [end, duration, start, inView]);

  return count;
};

const Achievements = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const stats = [
    {
      icon: Briefcase,
      value: 20,
      suffix: "+",
      label: "Projects Delivered",
      color: "rgb(59, 130, 246)",
    },
    {
      icon: Users,
      value: 10,
      suffix: "+",
      label: "Clients Served",
      color: "rgb(34, 197, 94)",
    },
    {
      icon: Clock,
      value: 6,
      suffix: "+",
      label: "Years Combined Experience",
      color: "rgb(168, 85, 247)",
    },
    {
      icon: ThumbsUp,
      value: 95,
      suffix: "%",
      label: "Client Satisfaction",
      color: "rgb(249, 115, 22)",
    },
  ];

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
      className="relative overflow-hidden py-20 lg:py-28"
      style={{
        background: "hsl(var(--bg-foreground) / 0.03)",
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-10"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background:
              "radial-gradient(circle, hsl(var(--primary-accent) / 0.15), transparent 70%)",
            filter: "blur(100px)",
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.012]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full"
            style={{
              background: "hsl(var(--primary))",
              boxShadow: "0 0 10px hsl(var(--glow))",
              top: `${15 + Math.random() * 70}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-md mb-6"
            style={{
              background: "hsl(var(--primary) / 0.08)",
              borderColor: "hsl(var(--primary) / 0.2)",
            }}
          >
            <Sparkles className="w-4 h-4" style={{ color: "hsl(var(--primary))" }} />
            <span
              className="text-sm font-semibold"
              style={{ color: "hsl(var(--primary))" }}
            >
              Our Impact
            </span>
          </motion.div>

          <h2
            className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4"
            style={{ color: "hsl(var(--foreground))" }}
          >
            Our Achievements
          </h2>

          <p
            className="text-base lg:text-lg max-w-2xl mx-auto mb-6"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            Milestones that reflect our journey and commitment.
          </p>

          {/* Underline */}
          <motion.div
            className="h-1 w-20 mx-auto rounded-full"
            style={{
              background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--primary-accent)))",
              boxShadow: "0 4px 20px hsl(var(--glow))",
            }}
            initial={{ width: 0, opacity: 0 }}
            animate={inView ? { width: 80, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} index={index} inView={inView} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Stat Card Component
const StatCard = ({ icon: Icon, value, suffix, label, color, index, inView }) => {
  const [isHovered, setIsHovered] = useState(false);
  const count = useCounter(value, 2000, 0, inView);

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      className="relative group"
      variants={cardVariants}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute -inset-2 rounded-3xl blur-2xl -z-10"
        style={{
          background: `radial-gradient(circle, ${color}30, transparent 70%)`,
        }}
        animate={{ opacity: isHovered ? 0.6 : 0.2 }}
        transition={{ duration: 0.3 }}
      />

      {/* Card */}
      <motion.div
        className="relative p-6 lg:p-8 rounded-3xl border backdrop-blur-xl text-center overflow-hidden"
        style={{
          background: "linear-gradient(135deg, hsl(var(--card) / 0.9), hsl(var(--card) / 0.7))",
          borderColor: isHovered ? `${color}40` : "hsl(var(--border))",
        }}
        animate={{
          y: isHovered ? -8 : 0,
          boxShadow: isHovered
            ? `0 25px 50px -12px ${color}30`
            : "0 10px 40px -10px hsl(var(--primary) / 0.05)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        {/* Top accent */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-1"
          style={{
            background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
          }}
          animate={{ opacity: isHovered ? 1 : 0.5 }}
        />

        {/* Icon */}
        <motion.div
          className="w-14 h-14 mx-auto rounded-2xl flex items-center justify-center mb-5"
          style={{
            background: `${color}15`,
            border: `1px solid ${color}30`,
          }}
          animate={{
            scale: isHovered ? 1.1 : 1,
            boxShadow: isHovered ? `0 8px 25px ${color}30` : "none",
          }}
          transition={{ duration: 0.3 }}
        >
          <Icon className="w-7 h-7" style={{ color }} />
        </motion.div>

        {/* Counter */}
        <div className="mb-3">
          <motion.span
            className="text-4xl lg:text-5xl font-black"
            style={{ color }}
          >
            {count}
            {suffix}
          </motion.span>
        </div>

        {/* Glowing underline */}
        <motion.div
          className="h-1 w-16 mx-auto rounded-full mb-4"
          style={{
            background: `linear-gradient(90deg, ${color}, ${color}80)`,
            boxShadow: `0 4px 15px ${color}40`,
          }}
          animate={{
            opacity: [0.6, 1, 0.6],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Label */}
        <p
          className="text-sm lg:text-base font-medium"
          style={{ color: "hsl(var(--muted-foreground))" }}
        >
          {label}
        </p>

        {/* Background decoration */}
        <motion.div
          className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full"
          style={{
            background: `radial-gradient(circle, ${color}10, transparent 70%)`,
          }}
          animate={{
            scale: isHovered ? 1.5 : 1,
            opacity: isHovered ? 0.6 : 0.3,
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Achievements;
