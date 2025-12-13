"use client";
import React, { useEffect, lazy, Suspense } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Services.css";
const Heading = lazy(() => import("../../../common/Heading/Heading"));
const ServiceCard = lazy(() => import("../../../common/ServiceCard/ServiceCard"));
import { services } from "../../../../src/data/data";


const Services: React.FC = () => {
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
       
       <Suspense fallback={<div>Loading...</div>}>
         <Heading head="Our Expertise" subhead="Premium" title="Tech Solutions" desc="Cutting-edge services engineered to transform your digital presence,
            accelerate growth, and dominate your market." />
       </Suspense>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <Suspense fallback={<div>Loading services...</div>}>
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </Suspense>
        </motion.div>
      </div>
    </section>
  );
};



export default Services;