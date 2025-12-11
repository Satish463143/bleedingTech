import React, { useState, useEffect,lazy } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { HelpCircle } from "lucide-react";
const Heading = lazy(() => import ("../../../common/Heading/Heading"));
import { Link } from "react-router-dom";
import "./FAQ.css";
import { defaultFaqs, faqColors } from "../../../assets/dummyData.js/data";
const FAQItem = lazy(() => import ("../../../common/FAQItem/FAQItem"));



const FAQ = ({ 
  customFaqs = null, 
  title = "Frequently Asked Questions",
  subhead = "Answers",
  headTitle = "That Matter",
  description = "Quick responses to the most common queries about our services, process, and workflow."
}) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  // Use custom FAQs if provided, otherwise use defaults
  const faqs = customFaqs 
    ? customFaqs.map((faq, index) => ({
        ...faq,
        id: faq.id || index + 1,
        color: faq.color || faqColors[index % faqColors.length].color,
        gradient: faq.gradient || faqColors[index % faqColors.length].gradient,
      }))
    : defaultFaqs;

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
      id="faq"
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
          head={title}
          subhead={subhead}
          title={headTitle}
          desc={description}
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
            <Link to ="/contact-us">Contact Us</Link>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
export default FAQ;