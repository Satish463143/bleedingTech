import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import {
  TrendingUp,
  Code,
  Smartphone,
  Search,
  Palette,
  Network,
  Target,
} from "lucide-react";
import "./Services.css";
import Heading from "../../../common/Heading/Heading";

const Services = () => {
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


  const services = [
    {
      icon: TrendingUp,
      title: "Digital Marketing & Growth Strategy",
      description:
        "Data-driven campaigns that scale your brand reach, boost conversions, and accelerate revenue growth.",
      gradient: "from-[hsl(var(--primary))] to-[hsl(var(--primary-accent))]",
      glowColor: "hsl(var(--primary) / 0.4)",
    },
    {
      icon: Code,
      title: "Web Development, Management & Optimization",
      description:
        "High-performance web solutions with modern frameworks, seamless integrations, and continuous optimization.",
      gradient: "from-blue-500 to-cyan-400",
      glowColor: "rgb(59, 130, 246, 0.4)",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development & Lifecycle Management",
      description:
        "Native & cross-platform mobile apps designed for scalability, performance, and exceptional user engagement.",
      gradient: "from-purple-500 to-pink-500",
      glowColor: "rgb(168, 85, 247, 0.4)",
    },
    {
      icon: Search,
      title: "Search Engine Optimization (SEO) & Performance Ranking",
      description:
        "Advanced SEO strategies that dominate search rankings, drive organic traffic, and maximize visibility.",
      gradient: "from-green-500 to-emerald-400",
      glowColor: "rgb(34, 197, 94, 0.4)",
    },
    {
      icon: Palette,
      title: "UI/UX Design & Product Experience Engineering",
      description:
        "Stunning, intuitive interfaces crafted with user psychology, brand identity, and conversion optimization.",
      gradient: "from-orange-500 to-yellow-400",
      glowColor: "rgb(249, 115, 22, 0.4)",
    },
    {
      icon: Network,
      title: "System Architecture, Engineering & Custom Development",
      description:
        "Robust, scalable infrastructure and custom-built solutions engineered for mission-critical applications.",
      gradient: "from-indigo-500 to-blue-500",
      glowColor: "rgb(99, 102, 241, 0.4)",
    },
    {
      icon: Target,
      title: "Google & Meta Ads Campaign Management",
      description:
        "Precision-targeted ad campaigns optimized for maximum ROI, audience engagement, and brand awareness.",
      gradient: "from-red-500 to-pink-500",
      glowColor: "rgb(239, 68, 68, 0.4)",
    },
  ];

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
        {/* Radial gradient glow - top */}
        <motion.div
          className="absolute -top-32 left-1/4 w-[600px] h-[600px] opacity-30"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background:
              "radial-gradient(circle, hsl(var(--primary) / 0.15), transparent 70%)",
            filter: "blur(80px)",
          }}
        />

        {/* Radial gradient glow - bottom right */}
        <motion.div
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] opacity-25"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
          style={{
            background:
              "radial-gradient(circle, hsl(var(--primary-accent) / 0.2), transparent 70%)",
            filter: "blur(100px)",
          }}
        />

        {/* Diagonal beam */}
        <motion.div
          className="absolute -top-20 -right-20 w-[150%] h-[300px] opacity-10"
          animate={{
            rotate: [0, 2, 0],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, hsl(var(--primary) / 0.15) 50%, transparent 100%)",
            filter: "blur(50px)",
            transform: "rotate(-25deg)",
          }}
        />

        {/* Tech grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full"
            style={{
              background: "hsl(var(--primary))",
              boxShadow: "0 0 8px hsl(var(--glow))",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.1, 0.6, 0.1],
              scale: [1, 1.5, 1],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}

        {/* Floating geometric shape - top right */}
        <motion.div
          className="absolute top-32 right-[10%] w-24 h-24 opacity-20"
          animate={{
            y: [-10, 10, -10],
            rotate: [0, 90, 0],
          }}
          transition={{
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 12, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <linearGradient id="serviceGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
                <stop offset="100%" stopColor="hsl(var(--primary-accent))" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <rect
              x="25"
              y="25"
              width="50"
              height="50"
              fill="none"
              stroke="url(#serviceGrad1)"
              strokeWidth="1"
            />
          </svg>
        </motion.div>

        {/* Floating geometric shape - bottom left */}
        <motion.div
          className="absolute bottom-40 left-[8%] w-32 h-32 opacity-15"
          animate={{
            y: [10, -10, 10],
            rotate: [0, -45, 0],
          }}
          transition={{
            y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 14, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="hsl(var(--primary-accent))"
              strokeWidth="0.5"
              opacity="0.5"
            />
            <circle
              cx="50"
              cy="50"
              r="25"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="0.5"
              opacity="0.7"
            />
          </svg>
        </motion.div>
      </div>

      {/* MAIN CONTENT */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
       
       <Heading head="Our Expertise" subhead="Premium" title="Tech Solutions" desc="Cutting-edge services engineered to transform your digital presence,
            accelerate growth, and dominate your market." />

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Individual Service Card Component
const ServiceCard = ({ service, index }) => {
  const Icon = service.icon;

  return (
    <motion.div
      className="relative group"
      variants={{
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
    >
      {/* Glow effect on hover */}
      <motion.div
        className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"
        style={{
          background: `radial-gradient(circle, ${service.glowColor}, transparent 70%)`,
        }}
      />

      {/* Main card container */}
      <motion.div
        className="relative h-full p-8 rounded-3xl backdrop-blur-xl border overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, hsl(var(--card) / 0.8), hsl(var(--card) / 0.4))",
          borderColor: "hsl(var(--border))",
        }}
        whileHover={{
          scale: 1.02,
          y: -5,
          borderColor: service.glowColor,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        {/* Animated gradient border overlay */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(135deg, ${service.glowColor}, transparent)`,
            mixBlendMode: "overlay",
          }}
        />

        {/* Top accent line */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[2px]"
          style={{
            background: `linear-gradient(90deg, transparent, ${service.glowColor}, transparent)`,
          }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: index * 0.1 }}
        />

        {/* Icon container with animation */}
        <motion.div
          className={`relative w-16 h-16 mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-br ${service.gradient}`}
          whileHover={{
            rotate: [0, -10, 10, -10, 0],
            scale: 1.1,
          }}
          transition={{ duration: 0.5 }}
        >
          <Icon className="w-8 h-8 text-white" />

          {/* Icon glow pulse */}
          <motion.div
            className="absolute inset-0 rounded-2xl"
            style={{
              background: `linear-gradient(135deg, ${service.glowColor}, transparent)`,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>

        {/* Service title */}
        <h3
          className="text-xl font-bold mb-3 leading-tight"
          style={{ color: "hsl(var(--foreground))" }}
        >
          {service.title}
        </h3>

        {/* Service description */}
        <p
          className="text-sm leading-relaxed mb-6"
          style={{ color: "hsl(var(--muted-foreground))" }}
        >
          {service.description}
        </p>

        {/* Learn more CTA */}
        <Link 
          to="/services#services-section"
          className="inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all duration-300 cursor-pointer relative z-10"
          style={{ color: "hsl(var(--primary))" }}
        >
          <span>Learn more</span>
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>

        {/* Bottom corner accent */}
        <motion.div
          className="absolute bottom-0 right-0 w-24 h-24 opacity-20"
          style={{
            background: `radial-gradient(circle at bottom right, ${service.glowColor}, transparent 70%)`,
          }}
        />

        {/* Floating mini accent dot */}
        <motion.div
          className="absolute top-4 right-4 w-2 h-2 rounded-full"
          style={{ background: service.glowColor }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.2,
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Services;