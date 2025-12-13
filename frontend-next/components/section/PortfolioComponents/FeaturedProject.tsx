"use client";
import { lazy, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Sparkles } from "lucide-react";
import { projects } from "../../../src/data/data";
import "./FeaturedProject.css";
const FeaturedProjectCard = lazy(() => import ("../../common/FeaturedProjectCard/FeaturedProjectCard"));

// Get featured projects (with isFeatured flag or first 3)
const featuredProjects = projects.filter(p => p.isFeatured).length > 0
  ? projects.filter(p => p.isFeatured).slice(0, 3)
  : projects.slice(0, 3);

const FeaturedProject = () => {
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
        staggerChildren: 0.3,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-20 lg:py-28"
      style={{
        background: "hsl(var(--background))",
      }}
    >
      {/* Background - Odd section style */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/3 w-[500px] h-[500px] opacity-10"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.08, 0.12, 0.08],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background:
              "radial-gradient(circle, hsl(var(--primary) / 0.12), transparent 70%)",
            filter: "blur(80px)",
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
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
              Featured Work
            </span>
          </motion.div>

          <h2
            className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4"
            style={{ color: "hsl(var(--foreground))" }}
          >
            Case Studies
          </h2>
          <p
            className="text-base lg:text-lg max-w-2xl mx-auto"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            Deep dive into our most impactful projects and the results we delivered.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          className="space-y-16 lg:space-y-24"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {featuredProjects.map((project, index) => (
            <FeaturedProjectCard
              key={project.id}
              project={project}
              index={index}
              isReversed={index % 2 !== 0}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProject;
