import React, { useEffect, useState } from "react";
import { motion, useAnimation, useMotionValue, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star, Quote, Sparkles } from "lucide-react";
import Heading from "../../../common/Heading/Heading";
import "./Testimonal.css";

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

  // Dummy testimonials data - will be replaced with API later
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO & Founder",
      company: "TechVision Inc.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      review:
        "Working with this team transformed our digital presence completely. Their attention to detail and innovative approach exceeded all expectations. The results speak for themselves—our conversion rate increased by 340%.",
      rating: 5,
      category: "Web Development",
      gradient: "from-blue-500 to-cyan-400",
      glowColor: "rgb(59, 130, 246, 0.4)",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Marketing Director",
      company: "Growth Dynamics",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      review:
        "Exceptional service from start to finish. The SEO strategy they implemented brought us to the first page of Google within 3 months. Our organic traffic has tripled, and we're seeing real business growth.",
      rating: 5,
      category: "SEO & Digital Marketing",
      gradient: "from-purple-500 to-pink-500",
      glowColor: "rgb(168, 85, 247, 0.4)",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Product Manager",
      company: "InnovateLabs",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      review:
        "The mobile app they developed is not just functional—it's a work of art. User engagement is through the roof, and the app runs flawlessly across all devices. Truly world-class development.",
      rating: 5,
      category: "Mobile App Development",
      gradient: "from-green-500 to-emerald-400",
      glowColor: "rgb(34, 197, 94, 0.4)",
    },
    {
      id: 4,
      name: "David Park",
      role: "CTO",
      company: "CloudScale Systems",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      review:
        "Their system architecture expertise is unmatched. They rebuilt our entire infrastructure for massive scale, and it handles millions of requests daily without breaking a sweat. Incredible engineering.",
      rating: 5,
      category: "System Architecture",
      gradient: "from-orange-500 to-red-500",
      glowColor: "rgb(249, 115, 22, 0.4)",
    },
    {
      id: 5,
      name: "Jessica Williams",
      role: "Brand Strategist",
      company: "Creative Minds Co.",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
      review:
        "The UI/UX design work is phenomenal. Our users love the new interface—it's intuitive, beautiful, and significantly improved our user satisfaction scores. Design meets function perfectly.",
      rating: 5,
      category: "UI/UX Design",
      gradient: "from-indigo-500 to-purple-500",
      glowColor: "rgb(99, 102, 241, 0.4)",
    },
  ];

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
                style={{ color: "hsl(var(--muted-foreground))" }}
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

// Individual Testimonial Card Component
const TestimonialCard = ({ testimonial, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  // 3D Tilt effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-5, 5]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;
    const xPct = (mouseXPos / width - 0.5) * 2;
    const yPct = (mouseYPos / height - 0.5) * 2;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      className="relative group"
      variants={{
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: "1000px",
      }}
    >
      {/* Glow effect on hover */}
      <motion.div
        className="absolute -inset-2 rounded-3xl opacity-0 transition-opacity duration-500 blur-2xl -z-10"
        style={{
          background: `radial-gradient(circle, ${testimonial.glowColor}, transparent 70%)`,
          opacity: isHovered ? 1 : 0,
        }}
      />

      {/* Main card container */}
      <motion.div
        className="relative h-full p-6 lg:p-8 rounded-3xl backdrop-blur-xl border overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, hsl(var(--card) / 0.9), hsl(var(--card) / 0.6))",
          borderColor: "hsl(var(--border))",
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{
          borderColor: testimonial.glowColor,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Gradient overlay animation */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background: `linear-gradient(135deg, ${testimonial.glowColor}, transparent 60%)`,
            mixBlendMode: "overlay",
          }}
        />

        {/* Top decoration - Quote icon */}
        <motion.div
          className="absolute -top-4 -left-4 w-20 h-20 opacity-10"
          animate={{
            rotate: [0, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Quote className="w-full h-full" style={{ color: "hsl(var(--primary))" }} />
        </motion.div>

        {/* Category badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md border mb-6"
          style={{
            background: "hsl(var(--muted) / 0.3)",
            borderColor: "hsl(var(--border))",
          }}
          whileHover={{ scale: 1.05 }}
        >
          <Sparkles className="w-3 h-3" style={{ color: "hsl(var(--primary))" }} />
          <span
            className="text-xs font-semibold"
            style={{ color: "hsl(var(--primary))" }}
          >
            {testimonial.category}
          </span>
        </motion.div>

        {/* Star rating */}
        <div className="flex gap-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <Star
                className="w-4 h-4 fill-current"
                style={{ color: "hsl(var(--primary))" }}
              />
            </motion.div>
          ))}
        </div>

        {/* Review text */}
        <p
          className="text-sm lg:text-base leading-relaxed mb-6"
          style={{ color: "hsl(var(--foreground))" }}
        >
          "{testimonial.review}"
        </p>

        {/* Client info */}
        <div className="flex items-center gap-4 pt-6 border-t" style={{ borderColor: "hsl(var(--border))" }}>
          {/* Client photo */}
          <motion.div
            className="relative w-14 h-14 rounded-full overflow-hidden border-2"
            style={{ borderColor: testimonial.glowColor }}
            whileHover={{ scale: 1.1 }}
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-full h-full object-cover"
            />
            {/* Photo glow */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                background: `radial-gradient(circle, ${testimonial.glowColor}, transparent 70%)`,
              }}
            />
          </motion.div>

          {/* Name and role */}
          <div className="flex-1">
            <h4
              className="font-bold text-base"
              style={{ color: "hsl(var(--foreground))" }}
            >
              {testimonial.name}
            </h4>
            <p
              className="text-sm"
              style={{ color: "hsl(var(--muted-foreground))" }}
            >
              {testimonial.role}
            </p>
            <p
              className="text-xs font-semibold"
              style={{ color: "hsl(var(--primary))" }}
            >
              {testimonial.company}
            </p>
          </div>
        </div>

        {/* Bottom corner accent */}
        <motion.div
          className="absolute bottom-0 right-0 w-32 h-32 opacity-15 pointer-events-none"
          style={{
            background: `radial-gradient(circle at bottom right, ${testimonial.glowColor}, transparent 70%)`,
          }}
        />

        {/* Floating mini accent */}
        <motion.div
          className="absolute top-4 right-4 w-2 h-2 rounded-full"
          style={{ background: testimonial.glowColor }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            delay: index * 0.2,
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Testimonal;