"use client";
import  { useState, useEffect, lazy } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./Testimonal.css";
import { testimonials } from "../../../src/data/data";
const TestimonialCard = lazy(() => import("./TestimonialCard"));

const Testimonal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  // Auto-advance
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <section
      className="relative overflow-hidden py-20 lg:py-28"
      style={{
        background: "hsl(var(--background))",
      }}
    >
      {/* Background - Odd section style */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] opacity-10"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.06, 0.12, 0.06],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background:
              "radial-gradient(circle, hsl(var(--primary) / 0.1), transparent 70%)",
            filter: "blur(60px)",
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
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-3xl lg:text-4xl font-bold mb-4"
            style={{ color: "hsl(var(--foreground))" }}
          >
            Client Testimonials
          </h2>
          <p
            className="text-base max-w-xl mx-auto"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            What our clients say about working with us.
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation */}
          <motion.button
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 lg:w-12 lg:h-12 rounded-full backdrop-blur-md border flex items-center justify-center -ml-2 lg:-ml-16"
            style={{
              background: "hsl(var(--card) / 0.8)",
              borderColor: "hsl(var(--border))",
            }}
            whileHover={{
              scale: 1.1,
              borderColor: "hsl(var(--primary))",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={prevSlide}
          >
            <ChevronLeft className="w-5 h-5" style={{ color: "hsl(var(--primary))" }} />
          </motion.button>

          <motion.button
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 lg:w-12 lg:h-12 rounded-full backdrop-blur-md border flex items-center justify-center -mr-2 lg:-mr-16"
            style={{
              background: "hsl(var(--card) / 0.8)",
              borderColor: "hsl(var(--border))",
            }}
            whileHover={{
              scale: 1.1,
              borderColor: "hsl(var(--primary))",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={nextSlide}
          >
            <ChevronRight className="w-5 h-5" style={{ color: "hsl(var(--primary))" }} />
          </motion.button>

          {/* Testimonial Card */}
          <div className="overflow-hidden py-8">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 35 },
                  opacity: { duration: 0.4 },
                }}
              >
                <TestimonialCard testimonial={testimonials[currentIndex]} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "w-6" : ""
                }`}
                style={{
                  background:
                    index === currentIndex
                      ? "hsl(var(--primary))"
                      : "hsl(var(--muted-foreground) / 0.3)",
                }}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonal;
