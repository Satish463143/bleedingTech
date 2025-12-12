"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Sparkles, 
  Award, 
  Lightbulb, 
  Users, 
  MessageCircle, 
  TrendingUp 
} from "lucide-react";
import "./Values.css";

const Values = () => {
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
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const values = [
    {
      icon: Award,
      title: "Engineering Excellence",
      description: "We prioritize quality, performance, and clean code above all.",
      color: "rgb(59, 130, 246)",
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We experiment, break limits, and build smarter solutions.",
      color: "rgb(168, 85, 247)",
    },
    {
      icon: Users,
      title: "Client-Centric Approach",
      description: "Your goals define our blueprint.",
      color: "rgb(34, 197, 94)",
    },
    {
      icon: MessageCircle,
      title: "Transparent Communication",
      description: "Clear, honest updates throughout the entire lifecycle.",
      color: "rgb(249, 115, 22)",
    },
    {
      icon: TrendingUp,
      title: "Long-Term Thinking",
      description: "Every decision is future-ready and scalable.",
      color: "rgb(236, 72, 153)",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-20 lg:py-28"
      style={{
        background: "hsl(var(--background))",
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/3 right-1/4 w-[500px] h-[500px] opacity-10"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.08, 0.12, 0.08],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background:
              "radial-gradient(circle, hsl(var(--primary) / 0.12), transparent 70%)",
            filter: "blur(80px)",
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
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
              What Drives Us
            </span>
          </motion.div>

          <h2
            className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4"
            style={{ color: "hsl(var(--foreground))" }}
          >
            Our Core Values
          </h2>

          <p
            className="text-base lg:text-lg max-w-2xl mx-auto mb-6"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            Principles that shape our culture and guide every project.
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

        {/* Values Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {values.map((value, index) => (
            <ValueCard key={index} {...value} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Value Card Component
interface ValueCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
  index: number;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon: Icon, title, description, color, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1] as const,
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
        className="absolute -inset-1 rounded-2xl blur-xl -z-10"
        style={{
          background: `radial-gradient(circle, ${color}40, transparent 70%)`,
        }}
        animate={{ opacity: isHovered ? 0.6 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Card */}
      <motion.div
        className="relative p-6 lg:p-8 rounded-2xl border backdrop-blur-sm overflow-hidden h-full"
        style={{
          background: "hsl(var(--card) / 0.6)",
          borderColor: isHovered ? `${color}50` : "hsl(var(--border))",
        }}
        animate={{
          y: isHovered ? -6 : 0,
          boxShadow: isHovered
            ? `0 20px 40px -10px ${color}30`
            : "0 4px 20px -5px hsl(var(--primary) / 0.05)",
        }}
        transition={{ type: "spring" as const, stiffness: 400, damping: 25 }}
      >
        {/* Top accent line */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[2px]"
          style={{
            background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
          }}
          animate={{ opacity: isHovered ? 1 : 0.3 }}
        />

        {/* Icon */}
        <motion.div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
          style={{
            background: `${color}15`,
            border: `1px solid ${color}30`,
          }}
          animate={{
            scale: isHovered ? 1.1 : 1,
            boxShadow: isHovered ? `0 8px 20px ${color}30` : "none",
          }}
          transition={{ duration: 0.3 }}
        >
          <Icon
            className="w-6 h-6"
            style={{ color }}
          />
        </motion.div>

        {/* Title */}
        <h3
          className="text-lg lg:text-xl font-bold mb-3"
          style={{ color: "hsl(var(--foreground))" }}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="text-sm lg:text-base leading-relaxed"
          style={{ color: "hsl(var(--muted-foreground))" }}
        >
          {description}
        </p>

        {/* Corner decoration */}
        <motion.div
          className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full"
          style={{
            background: `radial-gradient(circle, ${color}10, transparent 70%)`,
          }}
          animate={{
            scale: isHovered ? 1.5 : 1,
            opacity: isHovered ? 0.8 : 0.4,
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Values;
