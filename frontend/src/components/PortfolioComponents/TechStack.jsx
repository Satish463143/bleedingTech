import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Sparkles } from "lucide-react";
import "./TechStack.css";

const TechStack = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  // Technologies data
  const technologies = [
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color: "rgb(97, 218, 251, 0.5)",
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      color: "rgb(100, 100, 100, 0.5)",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      color: "rgb(104, 160, 99, 0.5)",
    },
    {
      name: "Express",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      color: "rgb(100, 100, 100, 0.5)",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      color: "rgb(77, 179, 61, 0.5)",
    },
    {
      name: "TailwindCSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      color: "rgb(56, 189, 248, 0.5)",
    },
    {
      name: "Firebase",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      color: "rgb(255, 196, 0, 0.5)",
    },
    {
      name: "AWS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
      color: "rgb(255, 153, 0, 0.5)",
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      color: "rgb(240, 80, 51, 0.5)",
    },
    {
      name: "Figma",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      color: "rgb(162, 89, 255, 0.5)",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      color: "rgb(49, 120, 198, 0.5)",
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      color: "rgb(51, 103, 145, 0.5)",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-20 lg:py-28"
      style={{
        background: "hsl(var(--bg-foreground) / 0.03)",
      }}
    >
      {/* Background - Even section style */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] opacity-10"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background:
              "radial-gradient(circle, hsl(var(--primary-accent) / 0.12), transparent 70%)",
            filter: "blur(80px)",
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.012]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-14"
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
              Our Stack
            </span>
          </motion.div>

          <h2
            className="text-3xl lg:text-4xl font-bold mb-4"
            style={{ color: "hsl(var(--foreground))" }}
          >
            Technologies We Use
          </h2>
          <p
            className="text-base max-w-2xl mx-auto"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            Modern, battle-tested technologies to build scalable digital solutions.
          </p>
        </motion.div>

        {/* Tech Grid */}
        <motion.div
          className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-6 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {technologies.map((tech, index) => (
            <TechItem key={index} tech={tech} variants={itemVariants} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Tech Item Component
const TechItem = ({ tech, variants }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative"
      variants={variants}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute -inset-2 rounded-2xl blur-xl -z-10"
        style={{
          background: `radial-gradient(circle, ${tech.color}, transparent 70%)`,
        }}
        animate={{ opacity: isHovered ? 0.6 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Card */}
      <motion.div
        className="relative p-4 lg:p-6 rounded-2xl border backdrop-blur-sm flex flex-col items-center gap-3"
        style={{
          background: "hsl(var(--card) / 0.5)",
          borderColor: isHovered ? tech.color : "hsl(var(--border))",
        }}
        animate={{
          y: isHovered ? -6 : 0,
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        {/* Icon */}
        <motion.img
          src={tech.icon}
          alt={tech.name}
          className="w-10 h-10 lg:w-12 lg:h-12 object-contain"
          style={{
            filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.1))",
          }}
          animate={{ rotate: isHovered ? 5 : 0 }}
          transition={{ duration: 0.2 }}
        />

        {/* Label */}
        <span
          className="text-xs lg:text-sm font-medium text-center"
          style={{ color: "hsl(var(--foreground))" }}
        >
          {tech.name}
        </span>
      </motion.div>
    </motion.div>
  );
};

export default TechStack;
