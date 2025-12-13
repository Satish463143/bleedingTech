"use client";
import React, { useEffect } from "react";
import { motion, useAnimation,type Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  CheckCircle,
  Zap,
  Shield,
  Gauge,
  Code,
  Layers,
  Globe,
  Smartphone,
} from "lucide-react";
import "./DetailedServiceSection.css";

const iconMap = {
  CheckCircle,
  Zap,
  Shield,
  Gauge,
  Code,
  Layers,
  Globe,
  Smartphone,
};

const DetailedServiceSection = ({
  headline = "What We Deliver",
  longDescription = "Our development process combines technical excellence with creative problem-solving. We build solutions that are not just functional but exceptional—engineered for performance, scalability, and long-term success. Every line of code is written with purpose, every design decision backed by data and user research.",
  keyFeatures = [
    {
      icon: "Code",
      title: "Clean, Maintainable Code",
      desc: "Industry-standard practices ensuring your codebase remains scalable.",
    },
    {
      icon: "Gauge",
      title: "Optimized Performance",
      desc: "Lightning-fast load times and smooth interactions across all devices.",
    },
    {
      icon: "Shield",
      title: "Security First Approach",
      desc: "Enterprise-grade security protocols protecting your data and users.",
    },
    {
      icon: "Layers",
      title: "Scalable Architecture",
      desc: "Built to grow with your business from startup to enterprise.",
    },
  ],
  benefits = [
    "Dedicated project manager for seamless communication",
    "Agile methodology with weekly progress updates",
    "Comprehensive documentation and training",
    "Post-launch support and maintenance included",
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
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-20 lg:py-28"
      style={{
        background:
          "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--bg-foreground) / 0.05) 100%)", marginTop:'-25px'
      }}
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] opacity-15"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background:
              "radial-gradient(circle, hsl(var(--primary-accent) / 0.2), transparent 70%)",
            filter: "blur(80px)",
          }}
        />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          className="grid lg:grid-cols-2 gap-16 lg:gap-24"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Left Column - Headline & Description */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <motion.span
                className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6"
                style={{
                  background: "hsl(var(--primary) / 0.1)",
                  color: "hsl(var(--primary))",
                  border: "1px solid hsl(var(--primary) / 0.2)",
                }}
              >
                Service Details
              </motion.span>

              <h2
                className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-6"
                style={{ color: "hsl(var(--foreground))" }}
              >
                {headline}
              </h2>

              {/* Decorative line */}
              <motion.div
                className="w-20 h-1 rounded-full mb-8"
                style={{
                  background:
                    "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--primary-accent)))",
                }}
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />

              <p
                className="text-base lg:text-lg leading-relaxed"
                style={{ color: "hsl(var(--muted-foreground))" }}
              >
                {longDescription}
              </p>
            </motion.div>

            {/* Benefits List */}
            <motion.div className="space-y-4 pt-4" variants={itemVariants}>
              <h4
                className="text-sm font-semibold uppercase tracking-wider mb-4"
                style={{ color: "hsl(var(--primary))" }}
              >
                What's Included
              </h4>
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <CheckCircle
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                    style={{ color: "hsl(var(--primary))" }}
                  />
                  <span
                    className="text-sm lg:text-base"
                    style={{ color: "hsl(var(--muted-foreground))" }}
                  >
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Key Features */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <h4
              className="text-sm font-semibold uppercase tracking-wider mb-6"
              style={{ color: "hsl(var(--primary))" }}
            >
              Key Features
            </h4>

            <div className="space-y-5">
              {keyFeatures.map((feature, index) => {
                const Icon = iconMap[feature.icon as keyof typeof iconMap] || CheckCircle;
                return (
                  <FeatureItem
                    key={index}
                    icon={Icon}
                    title={feature.title}
                    desc={feature.desc}
                    index={index}
                  />
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

type FeatureItemProps = {
  icon: any;
  title: string;
  desc: string;
  index: number;
}
// Feature Item Component
const FeatureItem = ({ icon: Icon, title, desc, index }: FeatureItemProps) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Hover glow */}
      <motion.div
        className="absolute -inset-3 rounded-2xl blur-xl -z-10"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary) / 0.15), transparent 70%)",
        }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      <div
        className="flex items-start gap-4 p-5 rounded-2xl border transition-all duration-300"
        style={{
          background: isHovered
            ? "hsl(var(--card) / 0.8)"
            : "hsl(var(--card) / 0.3)",
          borderColor: isHovered
            ? "hsl(var(--primary) / 0.3)"
            : "hsl(var(--border) / 0.5)",
        }}
      >
        {/* Icon */}
        <motion.div
          className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
          style={{
            background:
              "linear-gradient(135deg, hsl(var(--primary) / 0.15), hsl(var(--primary-accent) / 0.1))",
            border: "1px solid hsl(var(--primary) / 0.2)",
          }}
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <Icon className="w-5 h-5" style={{ color: "hsl(var(--primary))" }} />
        </motion.div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h5
            className="text-base lg:text-lg font-semibold mb-1"
            style={{ color: "hsl(var(--foreground))" }}
          >
            {title}
          </h5>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            {desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default DetailedServiceSection;
