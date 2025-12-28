"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation,type Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  MessageSquare,
  Lightbulb,
  PenTool,
  Code,
  TestTube,
  Rocket,
  Headphones,
} from "lucide-react";
import "./Workflow.css";
import Heading from "@/components/common/Heading/Heading";

const iconMap = {
  MessageSquare,
  Lightbulb,
  PenTool,
  Code,
  TestTube,
  Rocket,
  Headphones,
};

const Workflow = ({
  title = "Our Development Process",
  subtitle = "From concept to launch, we follow a proven methodology that ensures quality, transparency, and on-time delivery.",
  steps = [
    {
      stepNumber: "01",
      title: "Discovery & Planning",
      desc: "We analyze your requirements, define project scope, and create a detailed roadmap aligned with your business goals.",
      icon: "MessageSquare",
      color: "rgb(59, 130, 246, 0.5)",
    },
    {
      stepNumber: "02",
      title: "Strategy & Architecture",
      desc: "Our team designs the technical architecture and user experience strategy to ensure scalability and performance.",
      icon: "Lightbulb",
      color: "rgb(168, 85, 247, 0.5)",
    },
    {
      stepNumber: "03",
      title: "Design & Prototype",
      desc: "We create stunning UI designs and interactive prototypes for your approval before development begins.",
      icon: "PenTool",
      color: "rgb(236, 72, 153, 0.5)",
    },
    {
      stepNumber: "04",
      title: "Development & Coding",
      desc: "Expert developers build your solution using cutting-edge technologies with clean, maintainable code.",
      icon: "Code",
      color: "rgb(34, 197, 94, 0.5)",
    },
    {
      stepNumber: "05",
      title: "Testing & QA",
      desc: "Rigorous testing across devices and browsers ensures a bug-free, high-performance product.",
      icon: "TestTube",
      color: "rgb(249, 115, 22, 0.5)",
    },
    {
      stepNumber: "06",
      title: "Launch & Deploy",
      desc: "We handle deployment, optimization, and ensure a smooth launch with zero downtime.",
      icon: "Rocket",
      color: "rgb(99, 102, 241, 0.5)",
    },
  ],
}) => {
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
      className="relative overflow-hidden py-20 lg:py-28"
      style={{
        background:
          "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--bg-foreground) / 0.05) 100%)",
      }}
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-15"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background:
              "radial-gradient(circle, hsl(var(--primary) / 0.12), transparent 70%)",
            filter: "blur(100px)",
          }}
        />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
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
              top: `${20 + Math.random() * 60}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <Heading head='How We Work' subhead="Our Development " title="Process" desc="From concept to launch, we follow a proven methodology that ensures quality, transparency, and on-time delivery." />


        {/* Timeline */}
        <motion.div
          className="relative max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Center Line - Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2">
            <motion.div
              className="w-[2px] h-full"
              style={{
                background: `linear-gradient(180deg, transparent 0%, hsl(var(--primary) / 0.4) 10%, hsl(var(--primary) / 0.4) 90%, transparent 100%)`,
              }}
              initial={{ scaleY: 0, originY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />

            {/* Animated dot */}
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
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>

          {/* Mobile Line */}
          <div className="lg:hidden absolute left-6 top-0 bottom-0">
            <motion.div
              className="w-[2px] h-full"
              style={{
                background: `linear-gradient(180deg, transparent 0%, hsl(var(--primary) / 0.3) 5%, hsl(var(--primary) / 0.3) 95%, transparent 100%)`,
              }}
              initial={{ scaleY: 0, originY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>

          {/* Steps */}
          <div className="relative space-y-8 lg:space-y-0">
            {steps.map((step, index) => (
              <WorkflowStep
                key={index}
                step={step}
                index={index}
                isEven={index % 2 === 0}
                totalSteps={steps.length}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Workflow Step Component
type WorkflowStepProps = {
  step: {
    stepNumber: string;
    title: string;
    desc: string;
    icon: string;
    color: string;
  };
  index: number;
  isEven: boolean;
  totalSteps: number;

}
const WorkflowStep = ({ step, index, isEven,totalSteps }: WorkflowStepProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = iconMap[step.icon as keyof typeof iconMap] || MessageSquare;

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      x: isEven ? -60 : 60,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      className={`relative flex items-center lg:gap-12 ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
      variants={itemVariants}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Content */}
      <motion.div
        className={`flex-1 pl-16 lg:pl-0 ${isEven ? "lg:text-right lg:pr-12" : "lg:text-left lg:pl-12"}`}
        animate={{ y: isHovered ? -4 : 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        {/* Step Number */}
        <motion.span
          className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 ${
            isEven ? "lg:ml-auto" : ""
          }`}
          style={{
            background: `${step.color}30`,
            color: "hsl(var(--primary))",
          }}
        >
          Step {step.stepNumber}
        </motion.span>

        {/* Title */}
        <h3
          className="text-xl lg:text-2xl font-bold mb-2"
          style={{ color: "hsl(var(--foreground))" }}
        >
          {step.title}
        </h3>

        {/* Description */}
        <p
          className="text-sm lg:text-base leading-relaxed"
          style={{ color: "hsl(var(--muted-foreground))" }}
        >
          {step.desc}
        </p>
      </motion.div>

      {/* Center Icon Node */}
      <div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 flex items-center justify-center">
        {/* Connector line - Desktop */}
        <motion.div
          className={`hidden lg:block absolute w-12 h-[2px] ${
            isEven ? "right-full" : "left-full"
          }`}
          style={{
            background: `linear-gradient(${isEven ? "90deg" : "270deg"}, transparent, ${step.color})`,
          }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15, duration: 0.5 }}
        />

        {/* Icon */}
        <motion.div
          className="relative z-10"
          whileHover={{ scale: 1.15 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          {/* Glow ring */}
          <motion.div
            className="absolute -inset-2 rounded-full"
            style={{
              background: `radial-gradient(circle, ${step.color}, transparent 70%)`,
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
            className="relative w-12 h-12 rounded-xl flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${step.color}, hsl(var(--primary-accent) / 0.5))`,
              boxShadow: `0 4px 20px ${step.color}`,
            }}
          >
            <Icon className="w-5 h-5 text-white" />
          </div>
        </motion.div>
      </div>

      {/* Spacer */}
      <div className="hidden lg:block flex-1" />
    </motion.div>
  );
};

export default Workflow;
