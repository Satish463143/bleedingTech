"use client";
import React, { useEffect, lazy, Suspense } from "react";
import { motion, useAnimation} from "framer-motion";
import { useInView } from "react-intersection-observer";
const Heading = lazy(() => import ("../../../common/Heading/Heading"));
import "./Portfolio.css";
const ProjectCard = lazy(() => import ("../../../common/ProjectCard/ProjectCard"));
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "../../../../public/assets/dummyData/data";

const Portfolio: React.FC = () => {
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
  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };
  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-24 lg:py-20"
      style={{
        background:
          "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--bg-foreground) / 0.03) 50%, hsl(var(--background)) 100%)",
      }}
    >
      {/* ANIMATED BACKGROUND LAYERS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Radial gradient glow - top left */}
        <motion.div
          className="absolute top-0 left-0 w-[700px] h-[700px] opacity-25"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background:
              "radial-gradient(circle, hsl(var(--primary) / 0.15), transparent 70%)",
            filter: "blur(100px)",
          }}
        />

        {/* Radial gradient glow - bottom right */}
        <motion.div
          className="absolute bottom-0 right-0 w-[600px] h-[600px] opacity-20"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
          style={{
            background:
              "radial-gradient(circle, hsl(var(--primary-accent) / 0.2), transparent 70%)",
            filter: "blur(120px)",
          }}
        />

        {/* Diagonal beam */}
        <motion.div
          className="absolute top-1/3 -left-20 w-[120%] h-[400px] opacity-[0.08]"
          animate={{
            rotate: [0, 3, 0],
            opacity: [0.04, 0.12, 0.04],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, hsl(var(--primary) / 0.12) 50%, transparent 100%)",
            filter: "blur(60px)",
            transform: "rotate(-30deg)",
          }}
        />

        {/* Tech grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "100px 100px",
          }}
        />

        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: "hsl(var(--primary))",
              boxShadow: "0 0 6px hsl(var(--glow))",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 2, 1],
              y: [0, -40, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}

        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-40 right-[12%] w-20 h-20 opacity-15"
          animate={{
            y: [-15, 15, -15],
            rotate: [0, 180, 360],
          }}
          transition={{
            y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 16, repeat: Infinity, ease: "linear" },
          }}
        >
          <div
            className="w-full h-full rounded-xl"
            style={{
              background:
                "linear-gradient(135deg, hsl(var(--primary) / 0.3), hsl(var(--primary-accent) / 0.2))",
              border: "1px solid hsl(var(--primary) / 0.4)",
            }}
          />
        </motion.div>

        <motion.div
          className="absolute bottom-1/3 left-[8%] w-28 h-28 opacity-10"
          animate={{
            y: [15, -15, 15],
            rotate: [0, -90, -180],
          }}
          transition={{
            y: { duration: 9, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 18, repeat: Infinity, ease: "linear" },
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon
              points="50,10 90,90 10,90"
              fill="none"
              stroke="hsl(var(--primary-accent))"
              strokeWidth="1"
              opacity="0.5"
            />
          </svg>
        </motion.div>
      </div>

      {/* MAIN CONTENT */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <Suspense fallback={<div>Loading...</div>}>
          <Heading
            head="Our Portfolio"
            subhead="Projects"
            title="That Define Excellence"
            desc="Showcasing high-performance digital solutions crafted with precision, innovation, and world-class engineering."
          />
        </Suspense>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <Suspense fallback={<div>Loading projects...</div>}>
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </Suspense>
        </motion.div>
        <motion.div variants={itemVariants} className="flex justify-center items-center mt-10">
            <Link href="/portfolio#portfolio-section">
              <motion.span
                className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-bold text-lg overflow-hidden cursor-pointer"
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
                <span className="relative z-10">View All Projects</span>
                <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform" />

                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--primary-accent))] to-[hsl(var(--primary))] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.span>
            </Link>
        </motion.div>
      </div>
    </section>
  );
};
export default Portfolio;