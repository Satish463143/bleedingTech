import React, { useEffect, useState } from "react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Sparkles, 
  Search, 
  PenTool, 
  Code, 
  TestTube, 
  Rocket 
} from "lucide-react";
import "./WorkingProcess.css";

const WorkingProcess = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  // Auto-advance active step for visual effect
  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
      }, 800);
      return () => clearInterval(interval);
    }
  }, [inView]);

  const steps = [
    {
      icon: Search,
      number: "01",
      title: "Discovery",
      description: "Understanding your goals, audience, and challenges.",
      color: "rgb(59, 130, 246)",
    },
    {
      icon: PenTool,
      number: "02",
      title: "Design",
      description: "Crafting intuitive experiences and scalable interfaces.",
      color: "rgb(168, 85, 247)",
    },
    {
      icon: Code,
      number: "03",
      title: "Development",
      description: "Engineering clean, optimized, and future-ready solutions.",
      color: "rgb(34, 197, 94)",
    },
    {
      icon: TestTube,
      number: "04",
      title: "Testing",
      description: "Ensuring performance, reliability, and security.",
      color: "rgb(249, 115, 22)",
    },
    {
      icon: Rocket,
      number: "05",
      title: "Launch & Support",
      description: "Deployment, monitoring, and long-term upkeep.",
      color: "rgb(236, 72, 153)",
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
        background: "hsl(var(--background))",
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] opacity-10"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.06, 0.12, 0.06],
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
              Our Process
            </span>
          </motion.div>

          <h2
            className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4"
            style={{ color: "hsl(var(--foreground))" }}
          >
            How We Work
          </h2>

          <p
            className="text-base lg:text-lg max-w-2xl mx-auto mb-6"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            A clear, structured, and efficient process for delivering excellence.
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

        {/* Desktop: Horizontal Stepper */}
        <motion.div
          className="hidden lg:block relative"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Connecting Line */}
          <div className="absolute top-16 left-0 right-0 h-[2px] mx-20">
            <div
              className="absolute inset-0"
              style={{
                background: "hsl(var(--border))",
              }}
            />
            <motion.div
              className="absolute top-0 left-0 h-full"
              style={{
                background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--primary-accent)))",
                boxShadow: "0 0 15px hsl(var(--glow))",
              }}
              initial={{ width: "0%" }}
              animate={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>

          {/* Steps */}
          <div className="grid grid-cols-5 gap-4">
            {steps.map((step, index) => (
              <StepCard
                key={index}
                {...step}
                index={index}
                isActive={index <= activeStep}
                isLast={index === steps.length - 1}
              />
            ))}
          </div>
        </motion.div>

        {/* Mobile: Vertical Stepper */}
        <motion.div
          className="lg:hidden relative"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Vertical Line */}
          <div className="absolute top-0 bottom-0 left-6 w-[2px]">
            <div
              className="absolute inset-0"
              style={{
                background: "hsl(var(--border))",
              }}
            />
            <motion.div
              className="absolute top-0 left-0 w-full"
              style={{
                background: "linear-gradient(180deg, hsl(var(--primary)), hsl(var(--primary-accent)))",
                boxShadow: "0 0 15px hsl(var(--glow))",
              }}
              initial={{ height: "0%" }}
              animate={{ height: `${(activeStep / (steps.length - 1)) * 100}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <MobileStepCard
                key={index}
                {...step}
                index={index}
                isActive={index <= activeStep}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Desktop Step Card Component
const StepCard = ({ icon: Icon, number, title, description, color, index, isActive }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      className="relative text-center"
      variants={cardVariants}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Step Circle */}
      <motion.div
        className="relative w-32 h-32 mx-auto mb-6"
        animate={{
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        {/* Glow ring */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: `radial-gradient(circle, ${color}30, transparent 70%)`,
          }}
          animate={{
            scale: isActive ? [1, 1.2, 1] : 1,
            opacity: isActive ? [0.3, 0.6, 0.3] : 0.2,
          }}
          transition={{ duration: 2, repeat: isActive ? Infinity : 0, ease: "easeInOut" }}
        />

        {/* Main circle */}
        <motion.div
          className="absolute inset-4 rounded-full flex items-center justify-center border-2"
          style={{
            background: isActive
              ? `linear-gradient(135deg, ${color}20, ${color}10)`
              : "hsl(var(--card) / 0.5)",
            borderColor: isActive ? color : "hsl(var(--border))",
            boxShadow: isActive ? `0 8px 30px ${color}30` : "none",
          }}
        >
          <Icon
            className="w-8 h-8"
            style={{ color: isActive ? color : "hsl(var(--muted-foreground))" }}
          />
        </motion.div>

        {/* Step number badge */}
        <motion.div
          className="absolute -top-1 -right-1 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
          style={{
            background: isActive
              ? `linear-gradient(135deg, ${color}, ${color}cc)`
              : "hsl(var(--muted))",
            color: isActive ? "white" : "hsl(var(--muted-foreground))",
            boxShadow: isActive ? `0 4px 15px ${color}40` : "none",
          }}
        >
          {number}
        </motion.div>
      </motion.div>

      {/* Content */}
      <h3
        className="text-lg font-bold mb-2"
        style={{
          color: isActive ? "hsl(var(--foreground))" : "hsl(var(--muted-foreground))",
        }}
      >
        {title}
      </h3>
      <p
        className="text-sm leading-relaxed px-2"
        style={{ color: "hsl(var(--muted-foreground))" }}
      >
        {description}
      </p>
    </motion.div>
  );
};

// Mobile Step Card Component
const MobileStepCard = ({ icon: Icon, number, title, description, color, index, isActive }) => {
  const cardVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      className="relative flex items-start gap-6 pl-12"
      variants={cardVariants}
    >
      {/* Step Circle (positioned on the line) */}
      <motion.div
        className="absolute left-0 w-12 h-12 rounded-full flex items-center justify-center border-2"
        style={{
          background: isActive
            ? `linear-gradient(135deg, ${color}20, ${color}10)`
            : "hsl(var(--card))",
          borderColor: isActive ? color : "hsl(var(--border))",
          boxShadow: isActive ? `0 4px 20px ${color}30` : "none",
        }}
      >
        <Icon
          className="w-5 h-5"
          style={{ color: isActive ? color : "hsl(var(--muted-foreground))" }}
        />
      </motion.div>

      {/* Content Card */}
      <div
        className="flex-1 p-5 rounded-2xl border backdrop-blur-sm"
        style={{
          background: isActive ? "hsl(var(--card) / 0.8)" : "hsl(var(--card) / 0.4)",
          borderColor: isActive ? `${color}30` : "hsl(var(--border))",
        }}
      >
        <div className="flex items-center gap-3 mb-2">
          <span
            className="text-xs font-bold px-2 py-1 rounded-md"
            style={{
              background: isActive ? `${color}20` : "hsl(var(--muted))",
              color: isActive ? color : "hsl(var(--muted-foreground))",
            }}
          >
            {number}
          </span>
          <h3
            className="text-lg font-bold"
            style={{
              color: isActive ? "hsl(var(--foreground))" : "hsl(var(--muted-foreground))",
            }}
          >
            {title}
          </h3>
        </div>
        <p
          className="text-sm leading-relaxed"
          style={{ color: "hsl(var(--muted-foreground))" }}
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default WorkingProcess;
