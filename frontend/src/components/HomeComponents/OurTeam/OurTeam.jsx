import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Linkedin, Twitter, Github, Mail } from "lucide-react";
import Heading from "../../../common/Heading/Heading";
import satish from "../../../assets/image/satish.jpg";
import "./OurTeam.css";

const OurTeam = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1);

  // Dummy team data - will be replaced with API later
  const teamMembers = [
    {
      id: 1,
      name: "Satish Mahato",
      position: "CEO & Full-Stack Developer (MERN)",
      tagline: `A MERN full-stack developer with 2+ years of experience, specializing in modern, scalable digital solutions. He leads Bleeding Tech’s technical direction and ensures high-quality product engineering.`,
      image: satish,
      color: "rgb(59, 130, 246, 0.5)",
      gradient: "from-blue-500 to-cyan-400",
      social: {
        linkedin: "https://www.linkedin.com/in/satish-mahato-233151257/",
        twitter: "#",
        github: "https://github.com/Satish463143",
        email: "mahatosatish463@gmail.com",
      },
    },
    {
      id: 2,
      name: "Sunil Budha",
      position: "Founder & WordPress Developer",
      tagline:`A skilled WordPress developer with 4+ years of experience, focused on building fast, optimized, and business-ready websites. He drives Bleeding Tech’s creative and strategic foundation.`,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      color: "rgb(168, 85, 247, 0.5)",
      gradient: "from-purple-500 to-pink-500",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "michael@example.com",
      },
    }
  ];

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

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 800 : -800,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
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
        <Heading
          head="Our Team"
          subhead="People"
          title="Behind the Innovation"
          desc="Meet the minds powering our creativity, engineering, and world-class digital solutions."
        />

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
              <TeamMemberCard
                key={currentIndex}
                member={teamMembers[currentIndex]}
                direction={direction}
                variants={slideVariants}
              />
            </AnimatePresence>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {teamMembers.map((_, index) => (
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

// Team Member Card Component
const TeamMemberCard = ({ member, direction, variants }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        x: { type: "spring", stiffness: 200, damping: 35 },
        opacity: { duration: 0.6 },
        scale: { duration: 0.6 },
      }}
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute -inset-8 rounded-[3rem] blur-3xl -z-10"
        style={{
          background: `radial-gradient(circle, ${member.color}, transparent 70%)`,
        }}
        animate={{
          opacity: isHovered ? 0.8 : 0.4,
          scale: isHovered ? 1.2 : 1,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Main Card */}
      <motion.div
        className="relative p-8 lg:p-12 rounded-[2.5rem] backdrop-blur-xl border overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, hsl(var(--card) / 0.9), hsl(var(--card) / 0.6))",
          borderColor: "hsl(var(--border))",
        }}
        animate={{
          y: isHovered ? -8 : 0,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        {/* Gradient overlay */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${member.color}, transparent 60%)`,
            mixBlendMode: "overlay",
          }}
          animate={{
            opacity: isHovered ? 0.3 : 0.1,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Top accent line */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[3px]"
          style={{
            background: `linear-gradient(90deg, transparent, ${member.color}, transparent)`,
          }}
          animate={{
            opacity: isHovered ? 1 : 0.5,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Content */}
        <div className="relative flex flex-col md:flex-row items-center gap-8 lg:gap-12">
          {/* Image Container */}
          <motion.div
            className="relative flex-shrink-0"
            animate={{
              scale: isHovered ? 1.05 : 1,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            {/* Rotating ring */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: `linear-gradient(135deg, ${member.color}, transparent)`,
                padding: "4px",
              }}
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div
                className="w-full h-full rounded-full"
                style={{ background: "hsl(var(--card))" }}
              />
            </motion.div>

            {/* Profile Image */}
            <div className="relative w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4"
              style={{ borderColor: "hsl(var(--border))" }}
            >
              <motion.img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
                animate={{
                  scale: isHovered ? 1.1 : 1,
                }}
                transition={{ duration: 0.4 }}
              />

              {/* Image glow overlay */}
              <motion.div
                className="absolute inset-0"
                style={{
                  background: `radial-gradient(circle, ${member.color}, transparent 70%)`,
                  mixBlendMode: "overlay",
                }}
                animate={{
                  opacity: isHovered ? 0.4 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-2 -right-2 px-4 py-2 rounded-full backdrop-blur-md border"
              style={{
                background: `linear-gradient(135deg, hsl(var(--card) / 0.9), hsl(var(--card) / 0.7))`,
                borderColor: "hsl(var(--border))",
              }}
              animate={{
                y: [-2, 2, -2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span
                className="text-xs font-bold bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary-accent))] bg-clip-text text-transparent"
                style={{
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Core Team
              </span>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <div className="flex-1 text-center md:text-left space-y-4">
            {/* Name */}
            <motion.h3
              className="text-3xl lg:text-4xl font-black"
              style={{ color: "hsl(var(--foreground))" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {member.name}
            </motion.h3>

            {/* Position */}
            <motion.div
              className="inline-block px-4 py-2 rounded-full backdrop-blur-md border"
              style={{
                background: `linear-gradient(135deg, hsl(var(--primary) / 0.1), hsl(var(--primary-accent) / 0.05))`,
                borderColor: "hsl(var(--primary) / 0.3)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span
                className="text-sm lg:text-base font-semibold"
                style={{ color: "hsl(var(--primary))" }}
              >
                {member.position}
              </span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              className="text-lg lg:text-xl leading-relaxed max-w-md mx-auto md:mx-0"
              style={{ color: "hsl(var(--muted-foreground))" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              "{member.tagline}"
            </motion.p>

            {/* Social Links */}
            <motion.div
              className="flex gap-3 justify-center md:justify-start pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {member.social.linkedin && (
                <SocialIcon href={member.social.linkedin} Icon={Linkedin} color={member.color} />
              )}
              {member.social.twitter && (
                <SocialIcon href={member.social.twitter} Icon={Twitter} color={member.color} />
              )}
              {member.social.github && (
                <SocialIcon href={member.social.github} Icon={Github} color={member.color} />
              )}
              {member.social.email && (
                <SocialIcon href={`mailto:${member.social.email}`} Icon={Mail} color={member.color} />
              )}
            </motion.div>
          </div>
        </div>

        {/* Bottom corner accent */}
        <motion.div
          className="absolute bottom-0 right-0 w-32 h-32 opacity-20 pointer-events-none"
          style={{
            background: `radial-gradient(circle at bottom right, ${member.color}, transparent 70%)`,
          }}
        />
      </motion.div>
    </motion.div>
  );
};

// Social Icon Component
const SocialIcon = ({ href, Icon, color }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full backdrop-blur-md border flex items-center justify-center"
      style={{
        background: "hsl(var(--card) / 0.6)",
        borderColor: "hsl(var(--border))",
      }}
      whileHover={{
        scale: 1.1,
        borderColor: color,
        background: `${color}20`,
      }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon className="w-4 h-4" style={{ color: "hsl(var(--foreground))" }} />
    </motion.a>
  );
};

export default OurTeam;