"use client";
import React, { useEffect, lazy } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useListAllQuery } from "@/components/api/project.api";
const NewProjectCard = lazy(() => import("../../common/NewProjectCard/NewProjectCard"));
import "./MiniPortfolioPreview.css";
import Heading from "@/components/common/Heading/Heading";


const MiniPortfolioPreview = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const { data , isLoading, isError } = useListAllQuery({page: 1, limit:3});
  const projects = data?.details || [];

    // Get featured projects (with isFeatured flag or first 3)
  const featuredProjects = projects.filter((p:any) => p.isFeatured).length > 0
  ? projects.filter((p:any) => p.isFeatured)
  : projects.slice(0, 3);

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
      className="relative overflow-hidden py-20 lg:py-28"
      style={{
        background: "hsl(var(--bg-foreground) / 0.03)",
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/3 right-1/4 w-[500px] h-[500px] opacity-10"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background:
              "radial-gradient(circle, hsl(var(--primary-accent) / 0.15), transparent 70%)",
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
      
        <Heading head='Our Work' subhead="Featured " title="Project" desc=" A glimpse of our recent work showcasing our expertise across different domains." />


        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {featuredProjects.map((project: any, index: number) => (
            <NewProjectCard key={project._id} project={project} index={index} />
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link href="/portfolio">
            <motion.button
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm"
              style={{
                background: "transparent",
                color: "hsl(var(--primary))",
                border: "2px solid hsl(var(--primary))",
              }}
              whileHover={{
                background: "hsl(var(--primary))",
                color: "white",
                scale: 1.02,
              }}
              whileTap={{ scale: 0.98 }}
            >
              View All Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default MiniPortfolioPreview;
