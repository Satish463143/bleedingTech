import React, { useEffect } from "react";
import { motion, useAnimation} from "framer-motion";
import { useInView } from "react-intersection-observer";
import Heading from "../../../common/Heading/Heading";
import "./Portfolio.css";
import ProjectCard from "../../../common/ProjectCard/ProjectCard";

const Portfolio = () => {
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
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  // Dummy project data - will be replaced with API later
  const projects = [
    {
      id: 1,
      title: "MayaWears E-Commerce Platform",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      tech: ["React", "Node.js", "MongoDB", "Tailwind", "Stripe"],
      description:
        "A modern, high-performance e-commerce platform with seamless shopping experience and advanced admin CMS.",
      features: [
        "Mobile-first responsive UI",
        "Advanced admin dashboard",
        "Secure payment integration",
        "SEO optimized architecture",
        "Real-time inventory tracking",
      ],
      liveLink: "#",
      caseStudyLink: "#",
      gradient: "from-blue-500 to-cyan-400",
      glowColor: "rgb(59, 130, 246, 0.4)",
    },
    {
      id: 2,
      title: "Travel Agency Corporate Website",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop",
      tech: ["Next.js", "Firebase", "Framer Motion", "TypeScript"],
      description:
        "Corporate website for a premium travel agency with integrated booking system and dynamic content management.",
      features: [
        "Dynamic route generation",
        "Smart booking workflow",
        "Lightning-fast performance",
        "Stunning micro-interactions",
        "Multi-language support",
      ],
      liveLink: "#",
      caseStudyLink: "#",
      gradient: "from-purple-500 to-pink-500",
      glowColor: "rgb(168, 85, 247, 0.4)",
    },
    {
      id: 3,
      title: "FinTech Dashboard & Analytics",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      tech: ["React", "D3.js", "Express", "PostgreSQL"],
      description:
        "Advanced financial analytics platform with real-time data visualization and predictive insights.",
      features: [
        "Real-time data streaming",
        "Interactive charts & graphs",
        "Predictive analytics AI",
        "Secure authentication",
        "Export & reporting tools",
      ],
      liveLink: "#",
      caseStudyLink: "#",
      gradient: "from-green-500 to-emerald-400",
      glowColor: "rgb(34, 197, 94, 0.4)",
    },
    {
      id: 4,
      title: "Healthcare Management System",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
      tech: ["Vue.js", "Django", "Redis", "Docker"],
      description:
        "Comprehensive healthcare platform for patient management, appointments, and medical records.",
      features: [
        "Patient portal & scheduling",
        "Electronic health records",
        "HIPAA compliant security",
        "Telemedicine integration",
        "Prescription management",
      ],
      liveLink: "#",
      caseStudyLink: "#",
      gradient: "from-orange-500 to-red-500",
      glowColor: "rgb(249, 115, 22, 0.4)",
    },
    {
      id: 5,
      title: "AI-Powered Content Platform",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      tech: ["Next.js", "OpenAI", "Supabase", "TailwindCSS"],
      description:
        "Next-generation content creation platform leveraging AI for copywriting, design, and optimization.",
      features: [
        "AI content generation",
        "Smart SEO suggestions",
        "Brand voice training",
        "Multi-format export",
        "Collaboration tools",
      ],
      liveLink: "#",
      caseStudyLink: "#",
      gradient: "from-indigo-500 to-purple-500",
      glowColor: "rgb(99, 102, 241, 0.4)",
    },
    {
      id: 6,
      title: "Real Estate Property Portal",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      tech: ["React", "GraphQL", "AWS", "Mapbox"],
      description:
        "Modern property listing platform with virtual tours, advanced search, and CRM integration.",
      features: [
        "Interactive map search",
        "360° virtual tours",
        "Advanced filtering system",
        "Agent CRM dashboard",
        "Mortgage calculator",
      ],
      liveLink: "#",
      caseStudyLink: "#",
      gradient: "from-cyan-500 to-blue-500",
      glowColor: "rgb(6, 182, 212, 0.4)",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-24 lg:py-20"
      style={{
        background:
          "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--bg-foreground) / 0.03) 50%, hsl(var(--background)) 100%)",
      }}
    >
      {/* ANIMATED BACKGROUND LAYERS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Radial gradient glow - top left */}
        <motion.div
          className="absolute top-0 left-0 w-[700px] h-[700px] opacity-25"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background:
              "radial-gradient(circle, hsl(var(--primary) / 0.15), transparent 70%)",
            filter: "blur(100px)",
          }}
        />

        {/* Radial gradient glow - bottom right */}
        <motion.div
          className="absolute bottom-0 right-0 w-[600px] h-[600px] opacity-20"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
          style={{
            background:
              "radial-gradient(circle, hsl(var(--primary-accent) / 0.2), transparent 70%)",
            filter: "blur(120px)",
          }}
        />

        {/* Diagonal beam */}
        <motion.div
          className="absolute top-1/3 -left-20 w-[120%] h-[400px] opacity-[0.08]"
          animate={{
            rotate: [0, 3, 0],
            opacity: [0.04, 0.12, 0.04],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, hsl(var(--primary) / 0.12) 50%, transparent 100%)",
            filter: "blur(60px)",
            transform: "rotate(-30deg)",
          }}
        />

        {/* Tech grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "100px 100px",
          }}
        />

        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: "hsl(var(--primary))",
              boxShadow: "0 0 6px hsl(var(--glow))",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 2, 1],
              y: [0, -40, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}

        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-40 right-[12%] w-20 h-20 opacity-15"
          animate={{
            y: [-15, 15, -15],
            rotate: [0, 180, 360],
          }}
          transition={{
            y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 16, repeat: Infinity, ease: "linear" },
          }}
        >
          <div
            className="w-full h-full rounded-xl"
            style={{
              background:
                "linear-gradient(135deg, hsl(var(--primary) / 0.3), hsl(var(--primary-accent) / 0.2))",
              border: "1px solid hsl(var(--primary) / 0.4)",
            }}
          />
        </motion.div>

        <motion.div
          className="absolute bottom-1/3 left-[8%] w-28 h-28 opacity-10"
          animate={{
            y: [15, -15, 15],
            rotate: [0, -90, -180],
          }}
          transition={{
            y: { duration: 9, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 18, repeat: Infinity, ease: "linear" },
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon
              points="50,10 90,90 10,90"
              fill="none"
              stroke="hsl(var(--primary-accent))"
              strokeWidth="1"
              opacity="0.5"
            />
          </svg>
        </motion.div>
      </div>

      {/* MAIN CONTENT */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <Heading
          head="Our Portfolio"
          subhead="Projects"
          title="That Define Excellence"
          desc="Showcasing high-performance digital solutions crafted with precision, innovation, and world-class engineering."
        />

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;