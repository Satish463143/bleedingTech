import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  TrendingUp,
  Code,
  Smartphone,
  Search,
  Palette,
  Network,
  Target,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import "./ServiceOverview.css";

const ServiceOverview = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  // Complete services data with detailed information
  const services = [
    {
      id: 1,
      icon: TrendingUp,
      title: "Digital Marketing & Growth Strategy",
      shortDesc: "Data-driven campaigns that scale your brand reach and accelerate revenue growth.",
      fullDesc: "We craft comprehensive digital marketing strategies that combine creativity with analytics. Our team specializes in multi-channel campaigns, content marketing, email automation, and conversion rate optimization to deliver measurable results and sustainable growth.",
      features: [
        "Social Media Marketing & Management",
        "Content Strategy & Brand Storytelling",
        "Email Marketing & Automation",
        "Analytics & Performance Tracking",
        "Conversion Rate Optimization",
        "Marketing Funnel Development",
      ],
      gradient: "from-[hsl(var(--primary))] to-[hsl(var(--primary-accent))]",
      glowColor: "hsl(var(--primary) / 0.4)",
      color: "rgb(59, 130, 246, 0.5)",
    },
    {
      id: 2,
      icon: Code,
      title: "Web Development & Optimization",
      shortDesc: "High-performance web solutions with modern frameworks and seamless integrations.",
      fullDesc: "From responsive websites to complex web applications, we build digital experiences that captivate users and drive conversions. Our development process emphasizes clean code, optimal performance, and scalable architecture using cutting-edge technologies.",
      features: [
        "Custom Website Development",
        "E-commerce Solutions & Platforms",
        "Progressive Web Apps (PWA)",
        "API Development & Integration",
        "WordPress & CMS Development",
        "Performance Optimization & Speed",
      ],
      gradient: "from-blue-500 to-cyan-400",
      glowColor: "rgb(59, 130, 246, 0.4)",
      color: "rgb(59, 130, 246, 0.5)",
    },
    {
      id: 3,
      icon: Smartphone,
      title: "Mobile App Development",
      shortDesc: "Native & cross-platform mobile apps designed for exceptional user engagement.",
      fullDesc: "We create mobile applications that users love. Whether you need a native iOS/Android app or a cross-platform solution, our team delivers intuitive, high-performance mobile experiences that keep users engaged and coming back.",
      features: [
        "iOS & Android Native Development",
        "React Native Cross-Platform Apps",
        "Flutter App Development",
        "App Store Optimization (ASO)",
        "Push Notifications & Engagement",
        "Mobile App Maintenance & Updates",
      ],
      gradient: "from-purple-500 to-pink-500",
      glowColor: "rgb(168, 85, 247, 0.4)",
      color: "rgb(168, 85, 247, 0.5)",
    },
    {
      id: 4,
      icon: Search,
      title: "SEO & Performance Ranking",
      shortDesc: "Advanced SEO strategies that dominate search rankings and maximize visibility.",
      fullDesc: "Our SEO experts use proven techniques and the latest algorithms to improve your search visibility. We focus on sustainable, white-hat strategies that build long-term organic traffic and establish your authority in search results.",
      features: [
        "Technical SEO & Site Audits",
        "On-Page & Off-Page Optimization",
        "Keyword Research & Strategy",
        "Local SEO & Google Business",
        "Link Building & Outreach",
        "SEO Analytics & Reporting",
      ],
      gradient: "from-green-500 to-emerald-400",
      glowColor: "rgb(34, 197, 94, 0.4)",
      color: "rgb(34, 197, 94, 0.5)",
    },
    {
      id: 5,
      icon: Palette,
      title: "UI/UX Design & Product Experience",
      shortDesc: "Stunning, intuitive interfaces crafted with user psychology and brand identity.",
      fullDesc: "Great design is invisible—it just works. Our design team creates user experiences that feel natural and delightful. We combine aesthetic excellence with user research to craft interfaces that convert visitors into loyal customers.",
      features: [
        "User Interface (UI) Design",
        "User Experience (UX) Research",
        "Wireframing & Prototyping",
        "Design Systems & Style Guides",
        "Interaction & Motion Design",
        "Usability Testing & Iteration",
      ],
      gradient: "from-orange-500 to-yellow-400",
      glowColor: "rgb(249, 115, 22, 0.4)",
      color: "rgb(249, 115, 22, 0.5)",
    },
    {
      id: 6,
      icon: Network,
      title: "System Architecture & Custom Development",
      shortDesc: "Robust, scalable infrastructure engineered for mission-critical applications.",
      fullDesc: "We architect systems that scale effortlessly and perform reliably under any load. Our engineers design and implement custom solutions using microservices, cloud-native technologies, and best-in-class DevOps practices.",
      features: [
        "Cloud Architecture (AWS, GCP, Azure)",
        "Microservices & API Design",
        "Database Design & Optimization",
        "DevOps & CI/CD Pipelines",
        "System Integration & Migration",
        "Security & Compliance Implementation",
      ],
      gradient: "from-indigo-500 to-blue-500",
      glowColor: "rgb(99, 102, 241, 0.4)",
      color: "rgb(99, 102, 241, 0.5)",
    },
    {
      id: 7,
      icon: Target,
      title: "Google & Meta Ads Management",
      shortDesc: "Precision-targeted ad campaigns optimized for maximum ROI and engagement.",
      fullDesc: "Our paid advertising specialists create and manage campaigns that deliver real results. We leverage advanced targeting, A/B testing, and continuous optimization to maximize your advertising budget and achieve your business goals.",
      features: [
        "Google Ads (Search, Display, Shopping)",
        "Meta Ads (Facebook & Instagram)",
        "YouTube & Video Advertising",
        "Remarketing & Retargeting Campaigns",
        "Landing Page Optimization",
        "ROI Tracking & Attribution",
      ],
      gradient: "from-red-500 to-pink-500",
      glowColor: "rgb(239, 68, 68, 0.4)",
      color: "rgb(239, 68, 68, 0.5)",
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
