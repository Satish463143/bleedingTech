import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "../../common/ProjectCard/ProjectCard";
import "./FullProject.css";

const FullProject = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  // Filter categories
  const categories = [
    "All",
    "Web Development",
    "Mobile Apps",
    "E-commerce",
    "UI/UX",
    "Custom Systems",
  ];

  // Projects data
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured online shopping platform with advanced product filtering, cart management, and secure payment integration.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      features: ["Real-time inventory", "Multi-vendor support", "Analytics dashboard"],
      category: "E-commerce",
      glowColor: "rgb(59, 130, 246, 0.4)",
      liveLink: "#",
      caseStudyLink: "#",
    },
    {
      id: 2,
      title: "Healthcare Mobile App",
      description: "A comprehensive healthcare application connecting patients with doctors, featuring appointment booking and telemedicine.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
      tech: ["React Native", "Firebase", "Node.js"],
      features: ["Video consultations", "Prescription management", "Health tracking"],
      category: "Mobile Apps",
      glowColor: "rgb(34, 197, 94, 0.4)",
      liveLink: "#",
      caseStudyLink: "#",
    },
    {
      id: 3,
      title: "FinTech Dashboard",
      description: "Advanced financial analytics dashboard with real-time market data, portfolio tracking, and AI-powered insights.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      tech: ["Next.js", "TypeScript", "TailwindCSS", "D3.js"],
      features: ["Real-time charts", "Portfolio analytics", "Risk assessment"],
      category: "Web Development",
      glowColor: "rgb(168, 85, 247, 0.4)",
      liveLink: "#",
      caseStudyLink: "#",
    },
    {
      id: 4,
      title: "Restaurant Ordering System",
      description: "Digital menu and ordering system for restaurants with table management and kitchen display integration.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
      tech: ["React", "Express", "PostgreSQL", "Socket.io"],
      features: ["QR code ordering", "Kitchen display", "Payment integration"],
      category: "Custom Systems",
      glowColor: "rgb(249, 115, 22, 0.4)",
      liveLink: "#",
      caseStudyLink: "#",
    },
    {
      id: 5,
      title: "SaaS Analytics Platform",
      description: "Comprehensive analytics platform for businesses to track user behavior, conversions, and performance metrics.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      tech: ["Vue.js", "Python", "AWS", "Redis"],
      features: ["Custom dashboards", "A/B testing", "Funnel analysis"],
      category: "Web Development",
      glowColor: "rgb(99, 102, 241, 0.4)",
      liveLink: "#",
      caseStudyLink: "#",
    },
    {
      id: 6,
      title: "Travel Booking App",
      description: "Mobile-first travel booking platform with flight, hotel, and activity reservations in one seamless experience.",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop",
      tech: ["Flutter", "Node.js", "MongoDB", "Google Maps"],
      features: ["Multi-destination trips", "Price alerts", "Offline access"],
      category: "Mobile Apps",
      glowColor: "rgb(236, 72, 153, 0.4)",
      liveLink: "#",
      caseStudyLink: "#",
    },
    {
      id: 7,
      title: "Brand Identity System",
      description: "Complete brand identity design including logo, style guide, and digital asset library for a tech startup.",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop",
      tech: ["Figma", "Illustrator", "After Effects"],
      features: ["Logo design", "Style guide", "Motion graphics"],
      category: "UI/UX",
      glowColor: "rgb(20, 184, 166, 0.4)",
      liveLink: "#",
      caseStudyLink: "#",
    },
    {
      id: 8,
      title: "Inventory Management System",
      description: "Enterprise-grade inventory management with barcode scanning, automated reordering, and multi-warehouse support.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
      tech: ["React", "Node.js", "MySQL", "Docker"],
      features: ["Barcode scanning", "Auto-reorder", "Multi-location"],
      category: "Custom Systems",
      glowColor: "rgb(239, 68, 68, 0.4)",
      liveLink: "#",
      caseStudyLink: "#",
    },
    {
      id: 9,
      title: "Fashion E-commerce Store",
      description: "Luxury fashion e-commerce with AR try-on features, personalized recommendations, and seamless checkout.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      tech: ["Next.js", "Shopify", "TailwindCSS", "AR.js"],
      features: ["AR try-on", "Size recommendation", "Wishlist sync"],
      category: "E-commerce",
      glowColor: "rgb(168, 85, 247, 0.4)",
      liveLink: "#",
      caseStudyLink: "#",
    },
  ];

  // Filter projects
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      className="relative overflow-hidden py-20 lg:py-28"
      style={{
        background: "hsl(var(--bg-foreground) / 0.03)",
      }}
    >
      {/* Background - Even section style */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] opacity-10"
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
            All Projects
          </h2>
          <p
            className="text-base max-w-2xl mx-auto"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            Browse through our complete portfolio of successful projects across various industries.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <FilterTab
              key={category}
              label={category}
              isActive={activeFilter === category}
              onClick={() => setActiveFilter(category)}
            />
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p style={{ color: "hsl(var(--muted-foreground))" }}>
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

// Filter Tab Component
const FilterTab = ({ label, isActive, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      className="relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300"
      style={{
        background: isActive
          ? "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary-accent)))"
          : "hsl(var(--card) / 0.5)",
        color: isActive ? "white" : "hsl(var(--muted-foreground))",
        border: isActive ? "none" : "1px solid hsl(var(--border))",
        boxShadow: isActive ? "0 8px 25px hsl(var(--glow))" : "none",
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: isActive
          ? "0 12px 35px hsl(var(--glow))"
          : "0 4px 15px hsl(var(--primary) / 0.1)",
      }}
      whileTap={{ scale: 0.98 }}
    >
      {label}
      
      {/* Active indicator line */}
      {isActive && (
        <motion.div
          className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full"
          style={{
            background: "white",
            opacity: 0.5,
          }}
          layoutId="activeFilterIndicator"
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      )}
    </motion.button>
  );
};

export default FullProject;
