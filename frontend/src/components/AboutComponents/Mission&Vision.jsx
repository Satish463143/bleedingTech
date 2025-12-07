import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Target, Eye, Sparkles } from "lucide-react";
import "./MissionVision.css";

const MissionVision = () => {
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
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-24 lg:py-32"
      style={{
        background: "hsl(var(--bg-foreground) / 0.03)",
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Central gradient glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] opacity-15"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.18, 0.1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background:
              "radial-gradient(ellipse, hsl(var(--primary) / 0.12), transparent 70%)",
            filter: "blur(100px)",
          }}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: "hsl(var(--primary))",
              boxShadow: "0 0 8px hsl(var(--glow))",
              top: `${15 + Math.random() * 70}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Decorative lines */}
        <motion.div
          className="absolute top-20 left-0 w-[200px] h-[1px]"
          style={{
            background: "linear-gradient(90deg, transparent, hsl(var(--primary) / 0.2), transparent)",
          }}
          initial={{ x: -200, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.div
          className="absolute bottom-20 right-0 w-[200px] h-[1px]"
          style={{
            background: "linear-gradient(90deg, transparent, hsl(var(--primary) / 0.2), transparent)",
          }}
          initial={{ x: 200, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.7 }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20 lg:mb-28"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border backdrop-blur-md mb-8"
            style={{
              background: "hsl(var(--primary) / 0.08)",
              borderColor: "hsl(var(--primary) / 0.2)",
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4" style={{ color: "hsl(var(--primary))" }} />
            <span
              className="text-sm font-semibold tracking-wide"
              style={{ color: "hsl(var(--primary))" }}
            >
              Purpose & Direction
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-6"
            style={{ color: "hsl(var(--foreground))" }}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Our Mission{" "}
            <span
              className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary-accent))] bg-clip-text"
              style={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              & Vision
            </span>
          </motion.h2>

          {/* Soft Glow Underline */}
          <motion.div
            className="h-1 w-24 mx-auto rounded-full"
            style={{
              background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--primary-accent)))",
              boxShadow: "0 4px 25px hsl(var(--glow))",
            }}
            initial={{ width: 0, opacity: 0 }}
            animate={inView ? { width: 96, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </motion.div>

        {/* Mission & Vision Content - Editorial Layout */}
        <motion.div
          className="grid lg:grid-cols-2 gap-16 lg:gap-24 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Mission Block */}
          <MissionVisionBlock
            icon={Target}
            title="Our Mission"
            description="Empowering businesses with performance-driven digital experiences built on precision engineering, modern technology, and purposeful design. Our mission is to transform ideas into scalable, reliable systems that help brands innovate, compete, and grow without limitations."
            highlights={[
              "Precision Engineering",
              "Modern Technology",
              "Purposeful Design",
            ]}
            direction="left"
            delay={0}
          />

          {/* Vision Block */}
          <MissionVisionBlock
            icon={Eye}
            title="Our Vision"
            description="To become a globally trusted technology partner recognized for crafting future-ready digital products, transparent collaboration, and uncompromising engineering standards. We envision a world where every business—small or enterprise—can access powerful, intelligent, and beautifully crafted digital solutions."
            highlights={[
              "Future-Ready Products",
              "Transparent Collaboration",
              "Engineering Excellence",
            ]}
            direction="right"
            delay={0.2}
          />
        </motion.div>

        {/* Bottom decorative element */}
        <motion.div
          className="flex justify-center mt-20 lg:mt-28"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="flex items-center gap-4">
            <motion.div
              className="w-12 h-[1px]"
              style={{
                background: "linear-gradient(90deg, transparent, hsl(var(--primary) / 0.4))",
              }}
            />
            <motion.div
              className="w-2 h-2 rounded-full"
              style={{
                background: "hsl(var(--primary))",
                boxShadow: "0 0 15px hsl(var(--glow))",
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="w-12 h-[1px]"
              style={{
                background: "linear-gradient(90deg, hsl(var(--primary) / 0.4), transparent)",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Mission/Vision Block Component
const MissionVisionBlock = ({ icon: Icon, title, description, highlights, direction, delay }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const blockVariants = {
    hidden: { 
      opacity: 0, 
      x: direction === "left" ? -60 : 60,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.9,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="relative"
      variants={blockVariants}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Content Container */}
      <div className="relative pl-8 lg:pl-10">
        {/* Vertical Accent Line */}
        <motion.div
          className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full overflow-hidden"
          style={{
            background: "hsl(var(--border))",
          }}
        >
          <motion.div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              background: "linear-gradient(180deg, hsl(var(--primary)), hsl(var(--primary-accent)))",
              boxShadow: isHovered ? "0 0 20px hsl(var(--glow))" : "0 0 10px hsl(var(--glow))",
            }}
            initial={{ height: "0%" }}
            animate={inView ? { height: "100%" } : {}}
            transition={{ duration: 1, delay: delay + 0.3, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>

        {/* Icon */}
        <motion.div
          className="mb-8"
          animate={{
            y: [0, -5, 0],
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{
            y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 0.3 },
          }}
        >
          <div
            className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl"
            style={{
              background: "linear-gradient(135deg, hsl(var(--primary) / 0.12), hsl(var(--primary-accent) / 0.08))",
              border: "1px solid hsl(var(--primary) / 0.2)",
            }}
          >
            {/* Icon glow */}
            <motion.div
              className="absolute inset-0 rounded-2xl"
              style={{
                background: "radial-gradient(circle, hsl(var(--primary) / 0.3), transparent 70%)",
              }}
              animate={{
                opacity: isHovered ? 0.8 : 0.4,
                scale: isHovered ? 1.1 : 1,
              }}
              transition={{ duration: 0.3 }}
            />
            <Icon
              className="w-9 h-9 relative z-10"
              style={{ color: "hsl(var(--primary))" }}
            />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h3
          className="text-3xl lg:text-4xl font-bold mb-6 leading-tight"
          style={{ color: "hsl(var(--foreground))" }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: delay + 0.4 }}
        >
          {title}
        </motion.h3>

        {/* Description */}
        <motion.p
          className="text-lg lg:text-xl leading-relaxed mb-8"
          style={{ color: "hsl(var(--muted-foreground))" }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: delay + 0.5 }}
        >
          {description}
        </motion.p>

        {/* Highlights */}
        <motion.div
          className="flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: delay + 0.6 }}
        >
          {highlights.map((highlight, index) => (
            <motion.span
              key={index}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
              style={{
                background: "hsl(var(--primary) / 0.08)",
                color: "hsl(var(--primary))",
                border: "1px solid hsl(var(--primary) / 0.15)",
              }}
              whileHover={{
                background: "hsl(var(--primary) / 0.15)",
                borderColor: "hsl(var(--primary) / 0.3)",
                scale: 1.02,
              }}
              transition={{ duration: 0.2 }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "hsl(var(--primary))" }}
              />
              {highlight}
            </motion.span>
          ))}
        </motion.div>

        {/* Background hover glow */}
        <motion.div
          className="absolute -inset-4 rounded-3xl -z-10"
          style={{
            background: "radial-gradient(circle at 0% 50%, hsl(var(--primary) / 0.05), transparent 70%)",
          }}
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
};

export default MissionVision;
