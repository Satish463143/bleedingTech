import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Quote } from "lucide-react";
import Heading from "../../../common/Heading/Heading";
import "./Testimonal.css";
import { testimonials } from "../../../assets/dummyData.js/data";
import TestimonialCard from "../../../common/TestimonialCard/TestimonialCard";

const Testimonal = () => {
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
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section
      id="testimonials"
      ref={ref}
      className="relative overflow-hidden py-24 lg:py-20"
      style={{
        background: "linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--bg-foreground) / 0.8) 100%)",
      }}
    >
      {/* ANIMATED BACKGROUND LAYERS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Radial gradient glow - top right */}
        <motion.div
          className="absolute top-1/4 right-1/3 w-[700px] h-[700px] opacity-40"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background: "radial-gradient(circle, hsl(var(--primary) / 0.15), transparent 70%)",
            filter: "blur(90px)",
          }}
        />

        {/* Secondary glow - bottom left */}
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] opacity-30"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          style={{
            background: "radial-gradient(circle, hsl(var(--primary-accent) / 0.2), transparent 70%)",
            filter: "blur(110px)",
          }}
        />

        {/* Animated beam/light - diagonal */}
        <motion.div
          className="absolute top-0 right-0 w-full h-[50%] opacity-20"
          animate={{
            rotate: [0, 4, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          style={{
            background: "linear-gradient(110deg, transparent 0%, hsl(var(--primary) / 0.1) 50%, transparent 100%)",
            filter: "blur(70px)",
            transform: "rotate(-20deg)",
          }}
        />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating geometric shapes - Different from Banner */}
        
        {/* Hexagon shape - top left */}
        <motion.div
          className="absolute top-24 left-[8%] w-28 h-28 opacity-30"
          animate={{
            y: [-12, 12, -12],
            rotate: [0, 60, 120],
          }}
          transition={{
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 12, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <linearGradient id="testimonialGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
                <stop offset="100%" stopColor="hsl(var(--primary-accent))" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <polygon 
              points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5" 
              fill="none" 
              stroke="url(#testimonialGrad1)" 
              strokeWidth="1" 
            />
          </svg>
        </motion.div>

        {/* Star shape - bottom right */}
        <motion.div
          className="absolute bottom-28 right-[12%] w-32 h-32 opacity-25"
          animate={{
            y: [10, -10, 10],
            rotate: [0, 180, 360],
          }}
          transition={{
            y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <linearGradient id="testimonialGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary-accent))" stopOpacity="0.5" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <polygon 
              points="50,10 61,40 92,40 67,60 78,90 50,70 22,90 33,60 8,40 39,40" 
              fill="none" 
              stroke="url(#testimonialGrad2)" 
              strokeWidth="1" 
            />
          </svg>
        </motion.div>

        {/* Diamond shape - top right */}
        <motion.div
          className="absolute top-1/3 right-[15%] w-24 h-24 opacity-35"
          animate={{
            y: [-8, 8, -8],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 16, repeat: Infinity, ease: "linear" },
          }}
        >
          <div
            className="w-full h-full"
            style={{
              background: "linear-gradient(135deg, hsl(var(--primary) / 0.2), hsl(var(--primary-accent) / 0.1))",
              border: "1px solid hsl(var(--primary) / 0.3)",
              transform: "rotate(45deg)",
              backdropFilter: "blur(10px)",
            }}
          />
        </motion.div>

        {/* Rounded square - middle left */}
        <motion.div
          className="absolute top-1/2 left-[5%] w-20 h-20 opacity-25"
          animate={{
            y: [12, -12, 12],
            rotate: [0, -45, -90],
          }}
          transition={{
            y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 15, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <div
            className="w-full h-full rounded-2xl"
            style={{
              background: "linear-gradient(135deg, hsl(var(--primary) / 0.2), hsl(var(--primary-accent) / 0.1))",
              border: "1px solid hsl(var(--primary) / 0.3)",
              backdropFilter: "blur(10px)",
            }}
          />
        </motion.div>

        {/* Concentric circles - bottom left */}
        <motion.div
          className="absolute bottom-1/3 left-[18%] w-28 h-28 opacity-20"
          animate={{
            y: [-10, 10, -10],
            scale: [1, 1.1, 1],
          }}
          transition={{
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 9, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="45" fill="none" stroke="hsl(var(--primary-accent))" strokeWidth="0.5" opacity="0.4" />
            <circle cx="50" cy="50" r="30" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.6" />
            <circle cx="50" cy="50" r="15" fill="none" stroke="hsl(var(--primary-accent))" strokeWidth="0.5" opacity="0.8" />
          </svg>
        </motion.div>

        {/* Particle dots */}
        {[...Array(12)].map((_, i) => (
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

        {/* Floating quote marks - smaller and subtle */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`quote-${i}`}
            className="absolute"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${10 + Math.random() * 80}%`,
              opacity: 0.04,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 8, 0],
              opacity: [0.02, 0.06, 0.02],
            }}
            transition={{
              duration: 10 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          >
            <Quote className="w-12 h-12" style={{ color: "hsl(var(--primary))" }} />
          </motion.div>
        ))}
      </div>

      {/* MAIN CONTENT */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <Heading
          head="Testimonials"
          subhead="Client Voices"
          title="Experiences That Define Us"
          desc="From startups to established brands, our clients appreciate our structured approach, on-time delivery, and exceptional attention to detail."
        />

        {/* Testimonials Bento Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </motion.div>

        {/* Bottom stats/social proof */}
        <motion.div
          className="mt-16 lg:mt-20 flex flex-wrap items-center justify-center gap-8 lg:gap-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {[
            { value: "500+", label: "Happy Clients" },
            { value: "4.9/5", label: "Average Rating" },
            { value: "98%", label: "Client Retention" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div
                className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary-accent))] bg-clip-text text-transparent mb-2"
                style={{
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {stat.value}
              </div>
              <div
                className="text-sm font-medium"
                style={{ color: "#fff" }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default Testimonal;