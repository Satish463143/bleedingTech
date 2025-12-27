"use client";
import { lazy, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./FeaturedProject.css";
import { useListAllQuery } from "@/components/api/project.api";



const FeaturedProjectCard = lazy(() => import ("../../common/FeaturedProjectCard/FeaturedProjectCard"));
const Heading = dynamic(() => import("../../common/Heading/Heading"), {
  ssr: false,
});



const FeaturedProject = () => {


  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const { data , isLoading, isError } = useListAllQuery({page: 1, limit: 12});
  const projects = data?.details || [];

    // Get featured projects (with isFeatured flag or first 3)
  const featuredProjects = projects.filter((p:any) => p.isFeatured).length > 0
  ? projects.filter((p:any) => p.isFeatured).slice(0, 3)
  : projects.slice(0, 3);

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
       

        <Heading head='Featured Work' subhead='Case' title='Studies' desc='Deep dive into our most impactful projects and the results we delivered.'/>

        {/* Featured Projects */}
        <motion.div
          className="space-y-16 lg:space-y-24"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {featuredProjects.map((project:any, index:number) => (
            <FeaturedProjectCard
              key={project._id}
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
