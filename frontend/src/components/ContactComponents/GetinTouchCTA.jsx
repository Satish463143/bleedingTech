import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Rocket, Zap } from "lucide-react";
import "./GetinTouchCTA.css";

const GetinTouchCTA = ({
  title = "Have a project in mind?",
  subtitle = "Let's build something amazing together.",
  buttonText = "Let's Talk",
  buttonLink = "/contact-us",
  onClick = null,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-20 lg:py-28"
      style={{
        background:
          "linear-gradient(180deg, hsl(var(--bg-foreground) / 0.05) 0%, hsl(var(--background)) 50%, hsl(var(--bg-foreground) / 0.03) 100%)",
      }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large gradient orb */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] opacity-25"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.35, 0.2],
            rotate: [0, 10, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background:
              "radial-gradient(ellipse, hsl(var(--primary) / 0.25), transparent 60%)",
            filter: "blur(80px)",
          }}
        />

        {/* Secondary orb */}
        <motion.div
          className="absolute -bottom-20 -left-20 w-[400px] h-[400px] opacity-20"
          animate={{
            scale: [1.1, 1, 1.1],
            x: [-20, 20, -20],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          style={{
            background:
              "radial-gradient(circle, hsl(var(--primary-accent) / 0.3), transparent 70%)",
            filter: "blur(100px)",
          }}
        />

        {/* Tertiary orb */}
        <motion.div
          className="absolute -top-10 -right-10 w-[300px] h-[300px] opacity-15"
          animate={{
            scale: [1, 1.3, 1],
            y: [-10, 10, -10],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          style={{
            background:
              "radial-gradient(circle, hsl(var(--primary) / 0.2), transparent 60%)",
            filter: "blur(60px)",
          }}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Floating icons */}
        <motion.div
          className="absolute top-[20%] left-[15%] opacity-[0.06]"
          animate={{
            y: [-15, 15, -15],
            rotate: [-10, 10, -10],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          <Rocket className="w-16 h-16" style={{ color: "hsl(var(--primary))" }} />
        </motion.div>

        <motion.div
          className="absolute bottom-[25%] right-[12%] opacity-[0.05]"
          animate={{
            y: [10, -10, 10],
            rotate: [5, -5, 5],
          }}
          transition={{ duration: 7, repeat: Infinity, delay: 1 }}
        >
          <Zap className="w-14 h-14" style={{ color: "hsl(var(--primary-accent))" }} />
        </motion.div>

        {/* Floating particles */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 2 + "px",
              height: Math.random() * 4 + 2 + "px",
              background: "hsl(var(--primary))",
              boxShadow: "0 0 10px hsl(var(--glow))",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 1.5, 1],
              y: [0, -25, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-md mb-8"
            style={{
              background: "hsl(var(--primary) / 0.08)",
              borderColor: "hsl(var(--primary) / 0.2)",
            }}
            variants={itemVariants}
          >
            <Sparkles className="w-4 h-4" style={{ color: "hsl(var(--primary))" }} />
            <span
              className="text-sm font-semibold"
              style={{ color: "hsl(var(--primary))" }}
            >
              Start Your Journey
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight"
            variants={itemVariants}
          >
            <span style={{ color: "hsl(var(--foreground))" }}>{title}</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="text-lg sm:text-xl lg:text-2xl mb-10 max-w-2xl mx-auto"
            style={{ color: "hsl(var(--muted-foreground))" }}
            variants={itemVariants}
          >
            {subtitle}
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={itemVariants}>
            {onClick ? (
              <motion.button
                onClick={onClick}
                className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-bold text-lg overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary-accent)))",
                  color: "white",
                  boxShadow: "0 15px 50px hsl(var(--glow))",
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 60px hsl(var(--glow))",
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">{buttonText}</span>
                <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform" />

                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--primary-accent))] to-[hsl(var(--primary))] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            ) : (
              <Link to={buttonLink}>
                <motion.span
                  className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-bold text-lg overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary-accent)))",
                    color: "white",
                    boxShadow: "0 15px 50px hsl(var(--glow))",
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 60px hsl(var(--glow))",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">{buttonText}</span>
                  <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform" />

                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--primary-accent))] to-[hsl(var(--primary))] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.span>
              </Link>
            )}
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="mt-12 flex flex-wrap items-center justify-center gap-6"
            variants={itemVariants}
          >
            {[
              { label: "Free Consultation", icon: "✓" },
              { label: "24/7 Support", icon: "✓" },
              { label: "100% Satisfaction", icon: "✓" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <span
                  className="w-5 h-5 rounded-full flex items-center justify-center text-xs"
                  style={{
                    background: "hsl(var(--primary) / 0.15)",
                    color: "hsl(var(--primary))",
                  }}
                >
                  {item.icon}
                </span>
                <span
                  className="text-sm font-medium"
                  style={{ color: "hsl(var(--muted-foreground))" }}
                >
                  {item.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GetinTouchCTA;

