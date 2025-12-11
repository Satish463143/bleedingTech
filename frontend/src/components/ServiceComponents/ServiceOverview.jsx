import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CheckCircle, Sparkles } from "lucide-react";
import { services } from "../../assets/dummyData.js/data";
import "./ServiceOverview.css";

const ServiceOverview = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

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
      id="services-section"
      className="relative overflow-hidden py-20 lg:py-28"
      style={{
        background:
          "linear-gradient(180deg, hsl(var(--bg-foreground) / 0.03) 0%, hsl(var(--background)) 100%)",
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Radial glow */}
        <motion.div
          className="absolute top-1/4 left-1/3 w-[700px] h-[700px] opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background:
              "radial-gradient(circle, hsl(var(--primary) / 0.15), transparent 70%)",
            filter: "blur(100px)",
          }}
        />

        {/* Secondary glow */}
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] opacity-15"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          style={{
            background:
              "radial-gradient(circle, hsl(var(--primary-accent) / 0.2), transparent 70%)",
            filter: "blur(80px)",
          }}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
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
              top: `${20 + Math.random() * 60}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
              y: [0, -25, 0],
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
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
              Our Expertise
            </span>
          </motion.div>

          <h2
            className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4"
            style={{ color: "hsl(var(--foreground))" }}
          >
            Comprehensive Digital Solutions
          </h2>
          <p
            className="text-base lg:text-lg max-w-3xl mx-auto"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            From strategy to execution, we deliver end-to-end services that transform your digital presence and accelerate business growth.
          </p>
        </motion.div>

        {/* Services List */}
        <motion.div
          className="space-y-16 lg:space-y-24"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {services.map((service, index) => (
            <ServiceItem
              key={service.id}
              service={service}
              index={index}
              isReversed={index % 2 !== 0}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Individual Service Item Component
const ServiceItem = ({ service, index, isReversed }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = service.icon;

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
        isReversed ? "lg:flex-row-reverse" : ""
      }`}
      variants={itemVariants}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Content Side */}
      <div className={`space-y-6 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
        {/* Service Number & Icon */}
        <div className="flex items-center gap-4">
          <motion.div
            className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${service.gradient}`}
            style={{
              boxShadow: `0 8px 30px ${service.color}`,
            }}
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <Icon className="w-8 h-8 text-white" />
          </motion.div>

          <span
            className="text-sm font-bold px-3 py-1 rounded-full"
            style={{
              background: `${service.color}30`,
              color: "hsl(var(--primary))",
            }}
          >
            0{index + 1}
          </span>
        </div>

        {/* Title */}
        <h3
          className="text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight"
          style={{ color: "hsl(var(--foreground))" }}
        >
          {service.title}
        </h3>

        {/* Description */}
        <p
          className="text-base lg:text-lg leading-relaxed"
          style={{ color: "hsl(var(--muted-foreground))" }}
        >
          {service.fullDesc}
        </p>

        {/* Decorative line */}
        <motion.div
          className="w-16 h-1 rounded-full"
          style={{
            background: `linear-gradient(90deg, ${service.glowColor}, transparent)`,
          }}
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </div>

      {/* Features Side */}
      <div className={`${isReversed ? "lg:order-1" : "lg:order-2"}`}>
        {/* Glow effect */}
        <motion.div
          className="absolute -inset-4 rounded-3xl blur-3xl -z-10"
          style={{
            background: `radial-gradient(circle, ${service.color}, transparent 70%)`,
          }}
          animate={{ opacity: isHovered ? 0.3 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Features Card */}
        <motion.div
          className="relative p-6 lg:p-8 rounded-3xl backdrop-blur-xl border overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, hsl(var(--card) / 0.9), hsl(var(--card) / 0.6))",
            borderColor: isHovered ? service.color : "hsl(var(--border))",
          }}
          animate={{ y: isHovered ? -4 : 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          {/* Top accent line */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-[2px]"
            style={{
              background: `linear-gradient(90deg, transparent, ${service.glowColor}, transparent)`,
            }}
            animate={{ opacity: isHovered ? 1 : 0.4 }}
            transition={{ duration: 0.3 }}
          />

          {/* Features Header */}
          <h4
            className="text-sm font-semibold uppercase tracking-wider mb-6"
            style={{ color: "hsl(var(--primary))" }}
          >
            What's Included
          </h4>

          {/* Features List */}
          <div className="space-y-4">
            {service.features.map((feature, idx) => (
              <motion.div
                key={idx}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + idx * 0.05 }}
              >
                <div
                  className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                  style={{
                    background: `${service.color}30`,
                  }}
                >
                  <CheckCircle
                    className="w-4 h-4"
                    style={{ color: "hsl(var(--primary))" }}
                  />
                </div>
                <span
                  className="text-sm lg:text-base"
                  style={{ color: "hsl(var(--foreground))" }}
                >
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Corner accent */}
          <motion.div
            className="absolute bottom-0 right-0 w-32 h-32 opacity-20 pointer-events-none"
            style={{
              background: `radial-gradient(circle at bottom right, ${service.color}, transparent 70%)`,
            }}
            animate={{ opacity: isHovered ? 0.4 : 0.15 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ServiceOverview;
