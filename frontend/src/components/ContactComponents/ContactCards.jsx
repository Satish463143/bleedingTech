import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";
import "./ContactCards.css";

const ContactCards = ({
  cards = null, // Optional: pass custom cards data
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  // Default contact info data
  const defaultCards = [
    {
      id: 1,
      icon: MapPin,
      title: "Visit Our Office",
      details: ["Kathmandu, Nepal", "Thamel, Street 123"],
      color: "rgb(59, 130, 246, 0.5)",
      link: "https://maps.google.com",
      linkText: "Get Directions",
    },
    {
      id: 2,
      icon: Phone,
      title: "Call Us Directly",
      details: ["+977-98XXXXXXXX", "+977-01-XXXXXX"],
      color: "rgb(16, 185, 129, 0.5)",
      link: "tel:+97798XXXXXXXX",
      linkText: "Call Now",
    },
    {
      id: 3,
      icon: Mail,
      title: "Email Us",
      details: ["support@bleedingtech.com", "hello@bleedingtech.com"],
      color: "rgb(168, 85, 247, 0.5)",
      link: "mailto:support@bleedingtech.com",
      linkText: "Send Email",
    },
    {
      id: 4,
      icon: Clock,
      title: "Working Hours",
      details: ["Sun - Fri: 9:00 AM - 6:00 PM", "Saturday: Closed"],
      color: "rgb(249, 115, 22, 0.5)",
      link: null,
      linkText: null,
    },
  ];

  const contactData = cards || defaultCards;

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

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-20 lg:py-24"
      style={{
        background:
          "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--bg-foreground) / 0.03) 100%)",
      }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] opacity-15"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background:
              "radial-gradient(circle, hsl(var(--primary) / 0.15), transparent 70%)",
            filter: "blur(80px)",
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
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
            style={{
              background: "hsl(var(--primary) / 0.1)",
              color: "hsl(var(--primary))",
              border: "1px solid hsl(var(--primary) / 0.2)",
            }}
          >
            Contact Information
          </motion.span>
          <h2
            className="text-3xl lg:text-4xl font-bold mb-4"
            style={{ color: "hsl(var(--foreground))" }}
          >
            Get in Touch With Us
          </h2>
          <p
            className="text-base max-w-2xl mx-auto"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            We're here to help bring your ideas to life. Reach out through any of the channels below.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {contactData.map((card) => (
            <ContactCard key={card.id} card={card} variants={itemVariants} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Individual Contact Card Component
const ContactCard = ({ card, variants }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = card.icon;

  return (
    <motion.div
      className="relative h-full"
      variants={variants}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute -inset-2 rounded-3xl blur-2xl -z-10"
        style={{
          background: `radial-gradient(circle, ${card.color}, transparent 70%)`,
        }}
        animate={{
          opacity: isHovered ? 0.6 : 0,
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Card */}
      <motion.div
        className="relative h-full p-6 rounded-2xl backdrop-blur-xl border overflow-hidden cursor-pointer"
        style={{
          background:
            "linear-gradient(135deg, hsl(var(--card) / 0.9), hsl(var(--card) / 0.6))",
          borderColor: isHovered ? card.color : "hsl(var(--border))",
        }}
        animate={{
          y: isHovered ? -8 : 0,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        {/* Top accent line */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[2px]"
          style={{
            background: `linear-gradient(90deg, transparent, ${card.color}, transparent)`,
          }}
          animate={{
            opacity: isHovered ? 1 : 0.4,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Icon Container */}
        <motion.div
          className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
          style={{
            background: `linear-gradient(135deg, ${card.color}, transparent)`,
            border: "1px solid hsl(var(--border))",
          }}
          animate={{
            scale: isHovered ? 1.1 : 1,
            rotate: isHovered ? 5 : 0,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <Icon
            className="w-6 h-6"
            style={{ color: "hsl(var(--foreground))" }}
          />
        </motion.div>

        {/* Title */}
        <h3
          className="text-lg font-bold mb-3"
          style={{ color: "hsl(var(--foreground))" }}
        >
          {card.title}
        </h3>

        {/* Details */}
        <div className="space-y-1 mb-4">
          {card.details.map((detail, index) => (
            <p
              key={index}
              className="text-sm"
              style={{ color: "hsl(var(--muted-foreground))" }}
            >
              {detail}
            </p>
          ))}
        </div>

        {/* Link */}
        {card.link && (
          <motion.a
            href={card.link}
            target={card.link.startsWith("http") ? "_blank" : undefined}
            rel={card.link.startsWith("http") ? "noopener noreferrer" : undefined}
            className="inline-flex items-center gap-2 text-sm font-semibold group"
            style={{ color: "hsl(var(--primary))" }}
            whileHover={{ x: 4 }}
          >
            {card.linkText}
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>
        )}

        {/* Corner gradient */}
        <motion.div
          className="absolute bottom-0 right-0 w-24 h-24 opacity-20 pointer-events-none"
          style={{
            background: `radial-gradient(circle at bottom right, ${card.color}, transparent 70%)`,
          }}
          animate={{
            opacity: isHovered ? 0.4 : 0.15,
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default ContactCards;

