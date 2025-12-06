import React, { useEffect } from "react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { ChevronRight, ArrowRight, Sparkles } from "lucide-react";
import "./CommonBanner.css";

const CommonBanner = ({
  title = "Page Title",
  slogan = "Your compelling tagline here",
  breadcrumbs = null,
  cta = null,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  // Parallax effect on scroll
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityRange = useTransform(scrollY, [0, 400], [1, 0.3]);

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  // Animation variants
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

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const sloganVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      ref={ref}
      className="common-banner relative overflow-hidden flex items-center justify-center"
      style={{
        minHeight: "45vh",
        background:
          "linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--bg-foreground) / 0.15) 100%)",
      }}
    >
      {/* ANIMATED BACKGROUND LAYERS */}
      <motion.div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{ y: backgroundY, opacity: opacityRange }}
      >
        {/* Primary radial gradient glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] opacity-40"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background:
              "radial-gradient(ellipse, hsl(var(--primary) / 0.2), transparent 60%)",
            filter: "blur(100px)",
          }}
        />

        {/* Secondary accent glow */}
        <motion.div
          className="absolute -bottom-20 -right-20 w-[500px] h-[400px] opacity-30"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          style={{
            background:
              "radial-gradient(circle, hsl(var(--primary-accent) / 0.25), transparent 70%)",
            filter: "blur(80px)",
          }}
        />

        {/* Tertiary glow - top left */}
        <motion.div
          className="absolute -top-10 -left-20 w-[400px] h-[300px] opacity-25"
          animate={{
            scale: [1, 1.2, 1],
            x: [-20, 20, -20],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          style={{
            background:
              "radial-gradient(circle, hsl(var(--primary) / 0.15), transparent 60%)",
            filter: "blur(60px)",
          }}
        />

        {/* Animated light beam */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full opacity-10"
          animate={{
            rotate: [-5, 5, -5],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{
            background:
              "linear-gradient(120deg, transparent 30%, hsl(var(--primary) / 0.15) 50%, transparent 70%)",
            filter: "blur(40px)",
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

        {/* Diagonal lines pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              hsl(var(--foreground)),
              hsl(var(--foreground)) 1px,
              transparent 1px,
              transparent 60px
            )`,
          }}
        />

        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-[20%] right-[15%] w-20 h-20 opacity-20"
          animate={{
            y: [-15, 15, -15],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon
              points="50,10 90,90 10,90"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="1"
              opacity="0.5"
            />
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-[25%] left-[10%] w-16 h-16 opacity-15"
          animate={{
            y: [10, -10, 10],
            rotate: [45, 90, 45],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <div
            className="w-full h-full rounded-lg"
            style={{
              border: "1px solid hsl(var(--primary-accent))",
              transform: "rotate(45deg)",
            }}
          />
        </motion.div>

        <motion.div
          className="absolute top-[60%] right-[8%] w-24 h-24 opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="1"
            />
            <circle
              cx="50"
              cy="50"
              r="25"
              fill="none"
              stroke="hsl(var(--primary-accent))"
              strokeWidth="1"
            />
          </svg>
        </motion.div>

        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 2 + "px",
              height: Math.random() * 4 + 2 + "px",
              background: "hsl(var(--primary))",
              boxShadow: "0 0 10px hsl(var(--glow))",
              top: `${10 + Math.random() * 80}%`,
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

        {/* Orbiting dots */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-[300px] h-[300px] -translate-x-1/2 -translate-y-1/2"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <div
            className="absolute top-0 left-1/2 w-2 h-2 rounded-full -translate-x-1/2"
            style={{
              background: "hsl(var(--primary))",
              boxShadow: "0 0 15px hsl(var(--glow))",
              opacity: 0.4,
            }}
          />
          <div
            className="absolute bottom-0 left-1/2 w-1.5 h-1.5 rounded-full -translate-x-1/2"
            style={{
              background: "hsl(var(--primary-accent))",
              boxShadow: "0 0 10px hsl(var(--glow))",
              opacity: 0.3,
            }}
          />
        </motion.div>
      </motion.div>

      {/* GLASSMORPHISM CONTENT CONTAINER */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10 py-16 lg:py-20">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Glass overlay behind text */}
          <motion.div
            className="absolute inset-0 mx-auto max-w-3xl rounded-3xl -z-10"
            style={{
              background: "hsl(var(--card) / 0.03)",
              backdropFilter: "blur(2px)",
              border: "1px solid hsl(var(--border) / 0.1)",
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          />

          {/* Decorative badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-md mb-6 lg:mt-9"
            style={{
              background: "hsl(var(--primary) / 0.05)",
              borderColor: "hsl(var(--primary) / 0.2)",
            }}
            variants={fadeUpVariants}
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px hsl(var(--glow))" }}
          >
            <Sparkles
              className="w-4 h-4"
              style={{ color: "hsl(var(--primary))" }}
            />
            <span
              className="text-xs font-semibold tracking-wide uppercase"
              style={{ color: "hsl(var(--primary))" }}
            >
              Bleeding Tech
            </span>
            <motion.div
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "hsl(var(--primary))" }}
              animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          {/* MAIN TITLE */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] tracking-tight mb-6"
            variants={titleVariants}
          >
            <span
              className="inline-block bg-gradient-to-r from-[hsl(var(--foreground))] via-[hsl(var(--foreground))] to-[hsl(var(--muted-foreground))] bg-clip-text"
              style={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 80px hsl(var(--primary) / 0.3)",
              }}
            >
              {title}
            </span>
          </motion.h1>

          {/* SLOGAN */}
          <motion.p
            className="text-lg sm:text-xl lg:text-2xl max-w-2xl mx-auto leading-relaxed mb-8"
            style={{
              color: "hsl(var(--muted-foreground))",
              textShadow: "0 0 40px hsl(var(--primary) / 0.15)",
            }}
            variants={sloganVariants}
          >
            <span className="relative">
              {slogan}
              {/* Subtle glow effect on slogan */}
              <motion.span
                className="absolute inset-0 blur-xl opacity-20 -z-10"
                style={{ background: "hsl(var(--primary))" }}
                animate={{ opacity: [0.1, 0.25, 0.1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </span>
          </motion.p>

          {/* BREADCRUMBS */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <motion.nav
              className="flex items-center justify-center gap-2 flex-wrap mb-8"
              variants={fadeUpVariants}
              aria-label="Breadcrumb"
            >
              {breadcrumbs.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  {index > 0 && (
                    <ChevronRight
                      className="w-4 h-4"
                      style={{ color: "hsl(var(--muted-foreground) / 0.5)" }}
                    />
                  )}
                  {item.href ? (
                    <Link
                      to={item.href}
                      className="breadcrumb-link text-sm font-medium px-3 py-1.5 rounded-lg transition-all duration-300"
                      style={{
                        color: "hsl(var(--muted-foreground))",
                        background: "transparent",
                      }}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span
                      className="text-sm font-semibold px-3 py-1.5 rounded-lg"
                      style={{
                        color: "hsl(var(--primary))",
                        background: "hsl(var(--primary) / 0.1)",
                      }}
                    >
                      {item.label}
                    </span>
                  )}
                </div>
              ))}
            </motion.nav>
          )}

          {/* CTA BUTTON */}
          {cta && (
            <motion.div variants={fadeUpVariants}>
              <motion.button
                className="group relative px-8 py-4 rounded-2xl font-bold text-base overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary-accent)))",
                  color: "white",
                  boxShadow: "0 10px 40px hsl(var(--glow))",
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 15px 50px hsl(var(--glow))",
                }}
                whileTap={{ scale: 0.98 }}
                onClick={cta.onClick}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {cta.label}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                {/* Hover gradient overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--primary-accent))] to-[hsl(var(--primary))] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ zIndex: 0 }}
                />
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-30"
                  style={{
                    background:
                      "linear-gradient(45deg, transparent 30%, white 50%, transparent 70%)",
                  }}
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                />
              </motion.button>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* BOTTOM CURVED DIVIDER */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-16 lg:h-24"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          {/* Gradient definition */}
          <defs>
            <linearGradient id="dividerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
              <stop offset="50%" stopColor="hsl(var(--primary-accent))" stopOpacity="0.15" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          
          {/* Main wave fill */}
          <motion.path
            d="M0,60 C200,120 400,0 600,60 C800,120 1000,0 1200,60 L1200,120 L0,120 Z"
            fill="hsl(var(--background))"
            initial={{ d: "M0,80 C200,120 400,40 600,80 C800,120 1000,40 1200,80 L1200,120 L0,120 Z" }}
            animate={{
              d: [
                "M0,60 C200,120 400,0 600,60 C800,120 1000,0 1200,60 L1200,120 L0,120 Z",
                "M0,70 C200,30 400,110 600,70 C800,30 1000,110 1200,70 L1200,120 L0,120 Z",
                "M0,60 C200,120 400,0 600,60 C800,120 1000,0 1200,60 L1200,120 L0,120 Z",
              ],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Accent wave line */}
          <motion.path
            d="M0,65 C200,125 400,5 600,65 C800,125 1000,5 1200,65"
            fill="none"
            stroke="url(#dividerGradient)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
        </svg>

        {/* Gradient fade overlay */}
        <div
          className="absolute bottom-0 left-0 w-full h-20"
          style={{
            background:
              "linear-gradient(to top, hsl(var(--background)), transparent)",
          }}
        />
      </div>

      {/* Corner decorative elements */}
      <motion.div
        className="absolute top-6 left-6 w-12 h-12 opacity-20"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div
          className="w-full h-full border-2 rounded-lg"
          style={{ borderColor: "hsl(var(--primary))" }}
        />
      </motion.div>

      <motion.div
        className="absolute top-6 right-6 w-8 h-8 opacity-15"
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background: "hsl(var(--primary))",
            boxShadow: "0 0 20px hsl(var(--glow))",
          }}
        />
      </motion.div>
    </section>
  );
};

export default CommonBanner;
