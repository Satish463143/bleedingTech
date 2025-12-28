"use client";
import { useEffect, useState } from "react";
import { motion, useAnimation,type Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Zap,
  Shield,
  Clock,
  Users,
  Award,
  HeartHandshake,
  Rocket,
  CheckCircle,
} from "lucide-react";
import "./WhyChooseUs.css";
import Heading from "@/components/common/Heading/Heading";

const iconMap = {
  Zap,
  Shield,
  Clock,
  Users,
  Award,
  HeartHandshake,
  Rocket,
  CheckCircle,
};

const WhyChooseUs = ({
  title = "Why Choose Bleeding Tech",
  subtitle = "We deliver exceptional results through expertise, innovation, and unwavering commitment to your success.",
  reasons = [
    {
      icon: "Zap",
      title: "Rapid Delivery",
      desc: "Agile methodology ensures faster time-to-market without compromising quality.",
    },
    {
      icon: "Shield",
      title: "Enterprise Security",
      desc: "Bank-grade security protocols protect your data and users at every layer.",
    },
    {
      icon: "Clock",
      title: "24/7 Support",
      desc: "Round-the-clock technical support and maintenance for peace of mind.",
    },
    {
      icon: "Users",
      title: "Expert Team",
      desc: "50+ skilled engineers, designers, and strategists dedicated to your project.",
    },
    {
      icon: "Award",
      title: "Proven Track Record",
      desc: "500+ successful projects delivered across 20+ industries worldwide.",
    },
    {
      icon: "HeartHandshake",
      title: "Client-First Approach",
      desc: "Transparent communication and collaboration throughout your journey.",
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
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-20 lg:py-28"
      style={{
        background:
          "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--bg-foreground) / 0.03) 100%)",
      }}
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/3 right-1/4 w-[600px] h-[600px] opacity-15"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background:
              "radial-gradient(circle, hsl(var(--primary) / 0.15), transparent 70%)",
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
      

        <Heading head='Why Us' subhead="Why Choose" title="Bleeding Tech" desc="We deliver exceptional results through expertise, innovation, and unwavering commitment to your success." />


        {/* Reasons Grid - Minimal Line/Pill Style */}
        <motion.div
          className="max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {reasons.map((reason, index) => (
              <ReasonItem
                key={index}
                reason={reason}
                index={index}
                variants={itemVariants}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Reason Item Component - Minimal Pill Style
type ReasonItemProps = {
  reason: {
    icon: string;
    title: string;
    desc: string;
  };
  index: number;
  variants: Variants;
}
const ReasonItem = ({ reason, index, variants }: ReasonItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = iconMap[reason.icon as keyof typeof iconMap] || CheckCircle;

  const colors = [
    "rgb(59, 130, 246, 0.5)",
    "rgb(168, 85, 247, 0.5)",
    "rgb(34, 197, 94, 0.5)",
    "rgb(249, 115, 22, 0.5)",
    "rgb(236, 72, 153, 0.5)",
    "rgb(99, 102, 241, 0.5)",
  ];
  const color = colors[index % colors.length];

  return (
    <motion.div
      className="relative group"
      variants={variants}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Subtle glow on hover */}
      <motion.div
        className="absolute -inset-1 rounded-2xl blur-xl -z-10"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 70%)`,
        }}
        animate={{ opacity: isHovered ? 0.4 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Content */}
      <motion.div
        className="relative p-5 lg:p-6 rounded-2xl border transition-all duration-300"
        style={{
          background: isHovered
            ? "hsl(var(--card) / 0.8)"
            : "hsl(var(--card) / 0.4)",
          borderColor: isHovered ? `${color}` : "hsl(var(--border) / 0.5)",
        }}
        animate={{
          y: isHovered ? -4 : 0,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        {/* Top accent line */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
          style={{
            background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
          }}
          animate={{ opacity: isHovered ? 1 : 0.3 }}
          transition={{ duration: 0.3 }}
        />

        {/* Icon + Title Row */}
        <div className="flex items-center gap-3 mb-3">
          <motion.div
            className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${color}, transparent)`,
              border: "1px solid hsl(var(--border) / 0.5)",
            }}
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <Icon className="w-5 h-5" style={{ color: "hsl(var(--foreground))" }} />
          </motion.div>

          <h4
            className="text-base lg:text-lg font-semibold"
            style={{ color: "hsl(var(--foreground))" }}
          >
            {reason.title}
          </h4>
        </div>

        {/* Description */}
        <p
          className="text-sm leading-relaxed pl-13"
          style={{ color: "hsl(var(--muted-foreground))" }}
        >
          {reason.desc}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default WhyChooseUs;
