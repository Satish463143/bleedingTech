"use client";
import { useEffect,lazy, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Heading = lazy(() => import ("../../common/Heading/Heading"));
import "./CaseStudyList.css";
import { useListAllQuery} from '../../api/caseStudies.api';
const CaseStudyCard = lazy(()=> import ('../../common/CaseStudyCard/CaseStudyCard'))


const CaseStudyList = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const {data, error, isLoading} = useListAllQuery({  })
  // Map _id to id for consistency with the routing
  const caseStudiesList = (data?.details || []).map((study: any) => ({
    ...study,
    id: study._id, // Add id field from _id for URL routing
  }))
  console.log(caseStudiesList)

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
      className="case-study-list-section"
    >
      {/* Animated Background */}
      <div className="case-study-list-bg">
        {/* Grid pattern */}
        <div className="case-study-list-grid" />
        
        {/* Animated gradient orbs */}
        <motion.div
          className="case-study-orb case-study-orb-1"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.3, 0.15],
            x: [0, 50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="case-study-orb case-study-orb-2"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.25, 0.1],
            y: [0, -30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="case-study-orb case-study-orb-3"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />

        {/* Diagonal beam */}
        <motion.div
          className="case-study-beam"
          animate={{
            opacity: [0.03, 0.08, 0.03],
            rotate: [0, 1, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />

        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="case-study-particle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.1, 0.6, 0.1],
              y: [0, -25, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}

        {/* Floating geometric shapes */}
        <motion.div
          className="case-study-shape case-study-shape-1"
          animate={{
            y: [-10, 10, -10],
            rotate: [0, 90, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 12, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <rect
              x="25"
              y="25"
              width="50"
              height="50"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="1"
              opacity="0.5"
            />
          </svg>
        </motion.div>

        <motion.div
          className="case-study-shape case-study-shape-2"
          animate={{
            y: [10, -10, 10],
            rotate: [0, -45, 0],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{
            y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 14, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 5, repeat: Infinity, ease: "easeInOut" },
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
            />
            <circle
              cx="50"
              cy="50"
              r="25"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="0.5"
            />
          </svg>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <Heading
          head="Case Studies"
          subhead="Our"
          title="Success Stories"
          desc="Explore how we've helped businesses achieve remarkable results through innovative digital solutions."
        />

        {/* Case Studies Grid */}
        <motion.div
          className="case-study-grid"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {caseStudiesList.map((study: any, index: number) => (
            <CaseStudyCard key={study._id} study={study} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudyList;
