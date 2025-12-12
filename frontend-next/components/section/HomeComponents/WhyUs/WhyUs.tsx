"use client";
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Cpu,
  Rocket,
  Users,
  MessageCircle,
  TrendingUp,
  Shield,
} from "lucide-react";
import Heading from "../../../common/Heading/Heading";
import "./WhyUs.css";

const WhyUs: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  // Why Us points data - will be replaced with API later
  const whyUsPoints = [
    {
      id: 1,
      icon: Cpu,
      title: "Cutting-edge Technology Stack",
      description:
        "We leverage the latest frameworks, AI tools, and cloud-native architectures to build future-proof solutions.",
      color: "rgb(59, 130, 246, 0.5)",
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      id: 2,
      icon: Rocket,
      title: "Fast, Reliable Project Delivery",
      description:
        "Agile methodology meets precision engineering — delivering on time, every time, without compromising quality.",
      color: "rgb(168, 85, 247, 0.5)",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      icon: Users,
      title: "Expert Team of Developers & Designers",
      description:
        "A passionate crew of 50+ engineers, designers, and strategists dedicated to your success.",
      color: "rgb(34, 197, 94, 0.5)",
      gradient: "from-green-500 to-emerald-400",
    },
    {
      id: 4,
      icon: MessageCircle,
      title: "Transparent Communication & Process",
      description:
        "Clear timelines, regular updates, and open collaboration — you're always in the loop.",
      color: "rgb(249, 115, 22, 0.5)",
      gradient: "from-orange-500 to-amber-400",
    },
    {
      id: 5,
      icon: TrendingUp,
      title: "Scalable Solutions for Long-Term Growth",
      description:
        "Architecture designed to grow with you — from startup MVP to enterprise-scale systems.",
      color: "rgb(236, 72, 153, 0.5)",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      id: 6,
      icon: Shield,
      title: "Strong Focus on Performance & Security",
      description:
        "Bank-grade security protocols and optimized performance baked into every project.",
      color: "rgb(99, 102, 241, 0.5)",
      gradient: "from-indigo-500 to-purple-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-24 lg:py-20 bg-background"
      style={{
        background:
          "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--bg-foreground) / 0.05) 100%)",
      }}
    >
      {/* ANIMATED BACKGROUND LAYERS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Radial gradient glow */}
        <motion.div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] opacity-25"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background:
              "radial-gradient(circle, hsl(var(--primary) / 0.12), transparent 70%)",
            filter: "blur(100px)",
          }}
        />

        {/* Tech grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating particles */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full"
            style={{
              background: "hsl(var(--primary))",
              boxShadow: "0 0 10px hsl(var(--glow))",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.7, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* MAIN CONTENT */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <Heading
          head="Why Bleeding Tech"
          subhead="Where"
          title="Innovation Meets Precision"
          desc="Discover what sets us apart — a commitment to quality, speed, creativity, and engineering excellence that powers your business forward"
        />

        {/* Zig-Zag Timeline Layout */}
        <motion.div
          className="relative max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Animated Center Line (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2">
            <motion.div
              className="w-[2px] h-full relative"
              style={{
                background: `linear-gradient(180deg, transparent 0%, hsl(var(--primary) / 0.3) 10%, hsl(var(--primary) / 0.5) 50%, hsl(var(--primary) / 0.3) 90%, transparent 100%)`,
              }}
              initial={{ scaleY: 0, originY: 0 }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              {/* Animated pulse traveling down the line */}
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full"
                style={{
                  background: "hsl(var(--primary))",
                  boxShadow: "0 0 20px hsl(var(--glow)), 0 0 40px hsl(var(--glow))",
                }}
                animate={{
                  top: ["0%", "100%"],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </motion.div>
          </div>

          {/* Why Us Points */}
          <div className="relative space-y-8 lg:space-y-0">
            {whyUsPoints.map((point, index) => (
              <WhyItem
                key={point.id}
                point={point}
                index={index}
                isEven={index % 2 === 0}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Individual Why Item Component
interface WhyItemProps {
  point: {
    id: number;
    icon: React.ElementType;
    title: string;
    description: string;
    color: string;
    gradient: string;
  };
  index: number;
  isEven: boolean;
}

const WhyItem: React.FC<WhyItemProps> = ({ point, index, isEven }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = point.icon;

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: isEven ? -100 : 100,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <motion.div
      className={`relative flex items-center lg:gap-16 ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
      variants={itemVariants}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Content Card */}
      <motion.div
        className={`flex-1 ${isEven ? "lg:text-right" : "lg:text-left"}`}
        animate={{
          y: isHovered ? -8 : 0,
        }}
        transition={{ type: "spring" as const, stiffness: 400, damping: 25 }}
      >
        {/* Glow effect */}
        <motion.div
          className="absolute -inset-4 rounded-3xl blur-2xl -z-10"
          style={{
            background: `radial-gradient(circle, ${point.color}, transparent 70%)`,
          }}
          animate={{
            opacity: isHovered ? 0.6 : 0,
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Card */}
        <div
          className="relative p-6 lg:p-8 rounded-2xl backdrop-blur-xl border overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, hsl(var(--card) / 0.9), hsl(var(--card) / 0.6))",
            borderColor: isHovered ? point.color : "hsl(var(--border))",
            transition: "border-color 0.3s ease",
          }}
        >
          {/* Mobile: Icon inside card */}
          <div className="lg:hidden flex items-center gap-4 mb-4">
            <div
              className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${point.gradient}`}
            >
              <Icon className="w-7 h-7 text-white" />
            </div>
            <div className="flex-1">
              <span
                className="text-xs font-semibold px-2 py-1 rounded-full"
                style={{
                  background: `${point.color}30`,
                  color: "hsl(var(--primary))",
                }}
              >
                0{index + 1}
              </span>
            </div>
          </div>

          {/* Number badge - Desktop */}
          <div
            className={`hidden lg:inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 ${
              isEven ? "ml-auto" : ""
            }`}
            style={{
              background: `${point.color}30`,
              color: "hsl(var(--primary))",
            }}
          >
            0{index + 1}
          </div>

          {/* Title */}
          <h3
            className="text-xl lg:text-2xl font-bold mb-3"
            style={{ color: "hsl(var(--foreground))" }}
          >
            {point.title}
          </h3>

          {/* Description */}
          <p
            className="text-sm lg:text-base leading-relaxed"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            {point.description}
          </p>

          {/* Gradient overlay */}
          <motion.div
            className="absolute inset-0 rounded-2xl"
            style={{
              background: `linear-gradient(135deg, ${point.color}, transparent 70%)`,
              mixBlendMode: "overlay",
            }}
            animate={{
              opacity: isHovered ? 0.3 : 0,
            }}
            transition={{ duration: 0.3 }}
          />

          {/* Top accent line */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-[2px]"
            style={{
              background: `linear-gradient(90deg, transparent, ${point.color}, transparent)`,
            }}
            animate={{
              opacity: isHovered ? 1 : 0.3,
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>

      {/* Center Node - Desktop Only */}
      <div className="hidden lg:flex items-center justify-center relative">
        {/* Connector Line to Node */}
        <motion.div
          className={`absolute w-16 h-[2px] ${isEven ? "right-full" : "left-full"}`}
          style={{
            background: `linear-gradient(${isEven ? "90deg" : "270deg"}, transparent, ${point.color})`,
          }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        />

        {/* Icon Node */}
        <motion.div
          className="relative z-10"
          whileHover={{ scale: 1.15 }}
          transition={{ type: "spring" as const, stiffness: 400, damping: 25 }}
        >
          {/* Outer glow ring */}
          <motion.div
            className="absolute -inset-3 rounded-full"
            style={{
              background: `radial-gradient(circle, ${point.color}, transparent 70%)`,
            }}
            animate={{
              opacity: isHovered ? 0.8 : 0.3,
              scale: [1, 1.2, 1],
            }}
            transition={{
              opacity: { duration: 0.3 },
              scale: { duration: 2, repeat: Infinity },
            }}
          />

          {/* Icon container */}
          <div
            className={`relative w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${point.gradient} shadow-lg`}
            style={{
              boxShadow: `0 8px 32px ${point.color}`,
            }}
          >
            <Icon className="w-8 h-8 text-white" />

            {/* Pulse rings */}
            <motion.div
              className="absolute inset-0 rounded-2xl border-2"
              style={{ borderColor: point.color }}
              animate={{
                scale: [1, 1.5],
                opacity: [0.5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.3,
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Spacer for opposite side */}
      <div className="hidden lg:block flex-1" />
    </motion.div>
  );
};

export default WhyUs;