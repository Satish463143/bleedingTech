"use client";

import dynamic from "next/dynamic";
import React, { useEffect, useMemo, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { HelpCircle } from "lucide-react";
import Link from "next/link";
import "./FAQ.css";

import { defaultFaqs, faqColors } from "../../../../src/data/data";

// Lazy components (no Suspense needed by default)
const Heading = dynamic(() => import("../../../common/Heading/Heading"), {
  ssr: false,
});
const FAQItem = dynamic(() => import("../../../common/FAQItem/FAQItem"), {
  ssr: false,
});

// ================= TYPES =================
export interface FAQItemType {
  id: number;
  question: string;
  answer: string;
  color: string;
  gradient: string;
}

export interface FAQProps {
  customFaqs?: Array<{
    id?: number;
    question: string;
    answer: string;
    color?: string;
    gradient?: string;
  }> | null;
  title?: string;
  subhead?: string;
  headTitle?: string;
  description?: string;
}

// ================= COMPONENT =================
const FAQ: React.FC<FAQProps> = ({
  customFaqs = null,
  title = "Frequently Asked Questions",
  subhead = "Answers",
  headTitle = "That Matter",
  description = "Quick responses to the most common queries about our services, process, and workflow.",
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  // ✅ Normalize FAQs to always include id, color, gradient
  const faqs: FAQItemType[] = useMemo(() => {
    const source = customFaqs && customFaqs.length > 0 ? customFaqs : defaultFaqs;

    return source.map((faq: any, index: number) => ({
      id: faq.id ?? index + 1,
      question: faq.question,
      answer: faq.answer,
      color: faq.color ?? faqColors[index % faqColors.length].color,
      gradient: faq.gradient ?? faqColors[index % faqColors.length].gradient,
    }));
  }, [customFaqs]);

  // ✅ Stable random positions (avoid re-renders changing layout)
  const floatingPositions = useMemo(
    () =>
      Array.from({ length: 6 }).map(() => ({
        top: `${20 + Math.random() * 60}%`,
        left: `${10 + Math.random() * 80}%`,
      })),
    []
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const handleToggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      ref={ref}
      className="relative overflow-hidden py-24 lg:py-20"
      style={{
        background:
          "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--bg-foreground) / 0.05) 100%)",
      }}
    >
      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background:
              "radial-gradient(circle, hsl(var(--primary) / 0.12), transparent 70%)",
            filter: "blur(100px)",
          }}
        />

        {floatingPositions.map((pos, i) => (
          <motion.div
            key={i}
            className="absolute opacity-[0.03]"
            style={{ top: pos.top, left: pos.left }}
            animate={{ y: [-15, 15, -15], rotate: [-10, 10, -10] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          >
            <HelpCircle className="w-16 h-16" style={{ color: "hsl(var(--primary))" }} />
          </motion.div>
        ))}
      </div>

      {/* CONTENT */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <Heading head={title} subhead={subhead} title={headTitle} desc={description} />

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

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <Link href="/contact-us">
            <motion.span
              className="inline-block px-8 py-3 rounded-xl font-semibold text-sm cursor-pointer"
              style={{
                background:
                  "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary-accent)))",
                color: "white",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Us
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
