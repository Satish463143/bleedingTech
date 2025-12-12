"use client";
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Send, Sparkles, CheckCircle, Bell } from "lucide-react";
import "./NewsLetter.css";

const NewsLetter = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubscribed(true);
    setEmail("");

    // Reset after 5 seconds
    setTimeout(() => setIsSubscribed(false), 5000);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section ref={ref} className="newsletter-section">
      {/* Animated Background */}
      <div className="newsletter-bg">
        <div className="newsletter-grid" />
        
        {/* Gradient orbs */}
        <motion.div
          className="newsletter-orb newsletter-orb-1"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="newsletter-orb newsletter-orb-2"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        {/* Floating particles */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="newsletter-particle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.1, 0.5, 0.1],
              y: [0, -20, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Floating icons */}
        <motion.div
          className="newsletter-float-icon icon-1"
          animate={{
            y: [-10, 10, -10],
            rotate: [0, 10, 0],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Mail className="w-6 h-6" />
        </motion.div>
        <motion.div
          className="newsletter-float-icon icon-2"
          animate={{
            y: [10, -10, 10],
            rotate: [0, -10, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <Bell className="w-5 h-5" />
        </motion.div>
        <motion.div
          className="newsletter-float-icon icon-3"
          animate={{
            y: [-5, 15, -5],
            rotate: [0, 15, 0],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <Sparkles className="w-5 h-5" />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          className="newsletter-card"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Icon */}
          <motion.div
            className="newsletter-icon-wrapper"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Mail className="newsletter-icon" />
            <div className="newsletter-icon-glow" />
          </motion.div>

          {/* Content */}
          <motion.h2
            className="newsletter-title"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Stay Updated
          </motion.h2>

          <motion.p
            className="newsletter-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Get our latest insights directly in your inbox.
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            className="newsletter-line"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          />

          {/* Form */}
          <motion.form
            className="newsletter-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {isSubscribed ? (
              <motion.div
                className="newsletter-success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring" as const, stiffness: 400, damping: 25 }}
              >
                <CheckCircle className="w-6 h-6" />
                <span>Thank you for subscribing!</span>
              </motion.div>
            ) : (
              <>
                <div className="newsletter-input-wrapper">
                  <Mail className="input-icon" />
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="newsletter-input"
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  className="newsletter-button"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <motion.div
                      className="button-spinner"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                  ) : (
                    <>
                      <span>Subscribe</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </motion.button>
              </>
            )}
          </motion.form>

          {/* Privacy Note */}
          <motion.p
            className="newsletter-privacy"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            No spam, ever. Unsubscribe anytime.
          </motion.p>

          {/* Decorative corners */}
          <div className="newsletter-corner corner-tl" />
          <div className="newsletter-corner corner-tr" />
          <div className="newsletter-corner corner-bl" />
          <div className="newsletter-corner corner-br" />
        </motion.div>
      </div>
    </section>
  );
};

export default NewsLetter;
