import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import "./Testimonal.css";

const Testimonal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      projectType: "E-commerce Platform",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      quote:
        "Bleeding Tech transformed our vision into reality. The e-commerce platform they built exceeded our expectations, resulting in a 200% increase in online sales within the first quarter.",
      rating: 5,
      color: "rgb(59, 130, 246, 0.5)",
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Founder, HealthHub",
      projectType: "Healthcare App",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      quote:
        "The mobile app they developed has been a game-changer for our healthcare services. Professional team, excellent communication, and outstanding results. Highly recommended!",
      rating: 5,
      color: "rgb(34, 197, 94, 0.5)",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Marketing Director, Luxe Brand",
      projectType: "Brand Identity",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      quote:
        "Working with Bleeding Tech was an absolute pleasure. They understood our brand vision perfectly and delivered a stunning digital presence that truly represents who we are.",
      rating: 5,
      color: "rgb(168, 85, 247, 0.5)",
    },
  ];

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
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
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

// Testimonial Card Component
const TestimonialCard = ({ testimonial }) => {
  return (
    <div
      className="relative p-8 lg:p-10 rounded-3xl backdrop-blur-xl border text-center"
      style={{
        background:
          "linear-gradient(135deg, hsl(var(--card) / 0.9), hsl(var(--card) / 0.6))",
        borderColor: "hsl(var(--border))",
      }}
    >
      {/* Quote icon */}
      <div
        className="absolute top-6 left-6 opacity-10"
        style={{ color: "hsl(var(--primary))" }}
      >
        <Quote className="w-12 h-12" />
      </div>

      {/* Top accent */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{
          background: `linear-gradient(90deg, transparent, ${testimonial.color}, transparent)`,
        }}
      />

      {/* Avatar */}
      <div className="flex justify-center mb-6">
        <div
          className="relative w-20 h-20 rounded-full overflow-hidden border-2"
          style={{ borderColor: testimonial.color }}
        >
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Rating */}
      <div className="flex justify-center gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4 fill-current"
            style={{ color: "hsl(var(--primary))" }}
          />
        ))}
      </div>

      {/* Quote */}
      <p
        className="text-base lg:text-lg leading-relaxed mb-6 max-w-2xl mx-auto"
        style={{ color: "hsl(var(--muted-foreground))" }}
      >
        "{testimonial.quote}"
      </p>

      {/* Author */}
      <div>
        <h4
          className="text-lg font-bold"
          style={{ color: "hsl(var(--foreground))" }}
        >
          {testimonial.name}
        </h4>
        <p
          className="text-sm"
          style={{ color: "hsl(var(--muted-foreground))" }}
        >
          {testimonial.position}
        </p>
        <span
          className="inline-block mt-2 text-xs font-medium px-3 py-1 rounded-full"
          style={{
            background: "hsl(var(--primary) / 0.1)",
            color: "hsl(var(--primary))",
          }}
        >
          {testimonial.projectType}
        </span>
      </div>
    </div>
  );
};

export default Testimonal;
