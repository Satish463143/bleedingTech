"use client";
import React, { useState, useEffect, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
const Heading = lazy(() => import("../../../common/Heading/Heading"));
const TeamMemberCard = lazy(() => import("../../../common/TeamMemberCard/TeamMemberCard"));
import { teamMembers } from "../../../../src/data/data";
import "./OurTeam.css";

const OurTeam: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1); 

  // Auto-advance carousel
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        nextSlide();
      }, 4000); // 4 seconds viewing time + smooth transition

      return () => clearInterval(interval);
    }
  }, [currentIndex, isPaused]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 800 : -800,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -800 : 800,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <section
      className="relative overflow-hidden py-24 lg:py-20"
      style={{
        background:
          "linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--bg-foreground) / 0.8) 100%)",
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ANIMATED BACKGROUND LAYERS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Radial gradient glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background:
              "radial-gradient(circle, hsl(var(--primary) / 0.15), transparent 70%)",
            filter: "blur(90px)",
          }}
        />

        {/* Tech grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
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
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: "hsl(var(--primary))",
              boxShadow: "0 0 10px hsl(var(--glow))",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* MAIN CONTENT */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <Suspense fallback={<div>Loading...</div>}>
          <Heading
            head="Our Team"
            subhead="People"
            title="Behind the Innovation"
            desc="Meet the minds powering our creativity, engineering, and world-class digital solutions."
          />
        </Suspense>

        {/* Carousel Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Arrows */}
          <motion.button
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full backdrop-blur-md border flex items-center justify-center -ml-2 md:-ml-4 xl:-ml-20"
            style={{
              background: "hsl(var(--card) / 0.8)",
              borderColor: "hsl(var(--border))",
            }}
            whileHover={{
              scale: 1.1,
              borderColor: "hsl(var(--primary))",
              boxShadow: "0 0 20px hsl(var(--glow))",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={prevSlide}
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" style={{ color: "hsl(var(--primary))" }} />
          </motion.button>

          <motion.button
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full backdrop-blur-md border flex items-center justify-center -mr-2 md:-mr-4 xl:-mr-20"
            style={{
              background: "hsl(var(--card) / 0.8)",
              borderColor: "hsl(var(--border))",
            }}
            whileHover={{
              scale: 1.1,
              borderColor: "hsl(var(--primary))",
              boxShadow: "0 0 20px hsl(var(--glow))",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={nextSlide}
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" style={{ color: "hsl(var(--primary))" }} />
          </motion.button>

          {/* Carousel */}
          <div className="relative overflow-hidden py-12">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring" as const, stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 },
                }}
              >
                <Suspense fallback={<div>Loading...</div>}>
                  <TeamMemberCard
                    member={teamMembers[currentIndex]}
                    index={currentIndex}
                  />
                </Suspense>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {teamMembers.map((_: any, index: number) => (
              <motion.button
                key={index}
                className="relative"
                onClick={() => goToSlide(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <div
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "w-8" : ""
                  }`}
                  style={{
                    background:
                      index === currentIndex
                        ? "hsl(var(--primary))"
                        : "hsl(var(--muted-foreground))",
                    opacity: index === currentIndex ? 1 : 0.4,
                  }}
                />
                {index === currentIndex && (
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: "hsl(var(--primary))",
                      filter: "blur(4px)",
                    }}
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default OurTeam;