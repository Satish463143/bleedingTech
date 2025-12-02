import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Plus, Minus, HelpCircle } from "lucide-react";
import Heading from "../../../common/Heading/Heading";
import "./FAQ.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  // FAQ data - will be replaced with API later
  const faqs = [
    {
      id: 1,
      question: "What services does Bleeding Tech provide?",
      answer:
        "We offer complete digital solutions including web/app development, WordPress development, SEO, UI/UX, system design, and digital marketing.",
      color: "rgb(59, 130, 246, 0.5)",
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      id: 2,
      question: "How long does it take to complete a project?",
      answer:
        "Timeline depends on project size, but most websites take 2–4 weeks, while advanced systems may take longer.",
      color: "rgb(168, 85, 247, 0.5)",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      question: "Do you provide post-launch support or maintenance?",
      answer:
        "Yes. We offer ongoing maintenance, updates, security checks, and performance optimization.",
      color: "rgb(34, 197, 94, 0.5)",
      gradient: "from-green-500 to-emerald-400",
    },
    {
      id: 4,
      question: "Can you redesign or fix an existing website or app?",
      answer:
        "Absolutely. We can upgrade, redesign, or optimize your existing platform—whether custom-built or WordPress.",
      color: "rgb(249, 115, 22, 0.5)",
      gradient: "from-orange-500 to-amber-400",
    },
    {
      id: 5,
      question: "What technologies do you use?",
      answer:
        "We work with MERN, React Native, WordPress, Node.js, and modern design tools to deliver optimized solutions.",
      color: "rgb(236, 72, 153, 0.5)",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      id: 6,
      question: "How do I get started with Bleeding Tech?",
      answer:
        "Simply contact us with your requirements. We'll discuss your goals and create a custom plan or package that fits your needs.",
      color: "rgb(99, 102, 241, 0.5)",
      gradient: "from-indigo-500 to-purple-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
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
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-20"
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

        {/* Floating question marks */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-[0.03]"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${10 + Math.random() * 80}%`,
            }}
            animate={{
              y: [-15, 15, -15],
              rotate: [-10, 10, -10],
              opacity: [0.02, 0.05, 0.02],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            <HelpCircle className="w-16 h-16" style={{ color: "hsl(var(--primary))" }} />
          </motion.div>
        ))}

        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
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
          head="Frequently Asked Questions"
          subhead="Answers"
          title="That Matter"
          desc="Quick responses to the most common queries about our services, process, and workflow."
        />

        {/* FAQ Grid */}
        <motion.div
          className="max-w-4xl mx-auto space-y-5"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              index={index}
              isActive={activeIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <p
            className="text-base mb-4"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            Still have questions?
          </p>
          <motion.button
            className="px-8 py-3 rounded-xl font-semibold text-sm"
            style={{
              background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary-accent)))",
              color: "white",
              boxShadow: "0 8px 30px hsl(var(--glow))",
            }}
            whileHover={{ scale: 1.05, boxShadow: "0 12px 40px hsl(var(--glow))" }}
            whileTap={{ scale: 0.98 }}
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

// Individual FAQ Item Component
const FAQItem = ({ faq, index, isActive, onToggle }) => {
  const [isHovered, setIsHovered] = useState(false);

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      className="relative"
      variants={itemVariants}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute -inset-2 rounded-3xl blur-2xl -z-10"
        style={{
          background: `radial-gradient(circle, ${faq.color}, transparent 70%)`,
        }}
        animate={{
          opacity: isActive ? 0.6 : isHovered ? 0.3 : 0,
          scale: isActive ? 1.05 : 1,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Main Card */}
      <motion.div
        className="relative rounded-2xl backdrop-blur-xl border overflow-hidden cursor-pointer"
        style={{
          background:
            "linear-gradient(135deg, hsl(var(--card) / 0.9), hsl(var(--card) / 0.6))",
          borderColor: isActive ? faq.color : "hsl(var(--border))",
          transition: "border-color 0.3s ease",
        }}
        animate={{
          y: isHovered && !isActive ? -4 : 0,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        onClick={onToggle}
      >
        {/* Gradient overlay */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${faq.color}, transparent 70%)`,
            mixBlendMode: "overlay",
          }}
          animate={{
            opacity: isActive ? 0.25 : isHovered ? 0.1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Top accent line */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[2px]"
          style={{
            background: `linear-gradient(90deg, transparent, ${faq.color}, transparent)`,
          }}
          animate={{
            opacity: isActive ? 1 : isHovered ? 0.5 : 0.2,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Question Header */}
        <div className="relative p-6 flex items-center gap-4">
          {/* Minimal Line Indicator */}
          <motion.div
            className="flex-shrink-0 relative"
            animate={{
              scale: isActive ? 1.1 : 1,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            {/* Vertical accent line */}
            <motion.div
              className="w-1 h-10 rounded-full"
              style={{
                background: isActive 
                  ? "linear-gradient(180deg, hsl(var(--primary)), hsl(var(--primary-accent)))"
                  : "hsl(var(--border))",
                boxShadow: isActive ? "0 0 12px hsl(var(--glow))" : "none",
              }}
              animate={{
                scaleY: isActive ? 1.2 : 1,
              }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Pulsing dot when active */}
            {isActive && (
              <motion.div
                className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full"
                style={{
                  background: "hsl(var(--primary))",
                  boxShadow: "0 0 8px hsl(var(--glow))",
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              />
            )}
          </motion.div>

          {/* Question Text */}
          <h3
            className="flex-1 text-base lg:text-lg font-semibold leading-snug"
            style={{ color: "hsl(var(--foreground))" }}
          >
            {faq.question}
          </h3>

          {/* Toggle Icon */}
          <motion.div
            className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md border"
            style={{
              background: isActive ? faq.color : "hsl(var(--muted) / 0.3)",
              borderColor: isActive ? "transparent" : "hsl(var(--border))",
            }}
            animate={{
              rotate: isActive ? 180 : 0,
              scale: isActive ? 1.1 : 1,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            {isActive ? (
              <Minus className="w-5 h-5 text-white" />
            ) : (
              <Plus
                className="w-5 h-5"
                style={{ color: "hsl(var(--muted-foreground))" }}
              />
            )}
          </motion.div>
        </div>

        {/* Answer Content */}
        <AnimatePresence initial={false}>
          {isActive && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                height: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                opacity: { duration: 0.3, delay: 0.1 },
              }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6 pt-0">
                <div
                  className="pl-6 ml-0.5 border-l-2"
                  style={{ borderColor: "hsl(var(--primary) / 0.3)" }}
                >
                  <motion.p
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="text-sm lg:text-base leading-relaxed"
                    style={{ color: "hsl(var(--muted-foreground))" }}
                  >
                    {faq.answer}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Corner accent */}
        <motion.div
          className="absolute bottom-0 right-0 w-24 h-24 opacity-20 pointer-events-none"
          style={{
            background: `radial-gradient(circle at bottom right, ${faq.color}, transparent 70%)`,
          }}
          animate={{
            opacity: isActive ? 0.3 : 0.1,
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default FAQ;