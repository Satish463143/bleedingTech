import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, CheckCircle, ExternalLink, Sparkles } from "lucide-react";
import "./FeaturedProject.css";

const FeaturedProject = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  // Featured projects data
  const featuredProjects = [
    {
      id: 1,
      title: "Enterprise SaaS Platform",
      subtitle: "Complete Business Management Solution",
      description:
        "A comprehensive SaaS platform designed to streamline business operations, featuring advanced analytics, team collaboration tools, and automated workflows that increased client productivity by 40%.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
      achievements: [
        "Reduced operational costs by 35%",
        "Onboarded 10,000+ active users",
        "99.9% uptime since launch",
      ],
      tech: ["React", "Node.js", "PostgreSQL", "AWS"],
      color: "rgb(59, 130, 246, 0.5)",
      link: "#",
    },
    {
      id: 2,
      title: "Healthcare Telemedicine App",
      subtitle: "Connecting Patients with Healthcare",
      description:
        "Revolutionary telemedicine platform enabling virtual consultations, prescription management, and health monitoring. The app serves over 50,000 patients with seamless video consultations.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&h=800&fit=crop",
      achievements: [
        "50,000+ monthly active users",
        "4.8 star rating on app stores",
        "Reduced wait times by 60%",
      ],
      tech: ["React Native", "Firebase", "WebRTC", "Node.js"],
      color: "rgb(34, 197, 94, 0.5)",
      link: "#",
    },
    {
      id: 3,
      title: "Luxury E-Commerce Experience",
      subtitle: "Premium Online Shopping Platform",
      description:
        "High-end e-commerce platform with AR try-on features, personalized recommendations, and a seamless checkout experience that increased conversion rates by 45%.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=800&fit=crop",
      achievements: [
        "45% increase in conversions",
        "$2M+ monthly transactions",
        "Average order value up 30%",
      ],
      tech: ["Next.js", "Shopify", "TailwindCSS", "Stripe"],
      color: "rgb(168, 85, 247, 0.5)",
      link: "#",
    },
  ];

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
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-md mb-6"
            style={{
              background: "hsl(var(--primary) / 0.08)",
              borderColor: "hsl(var(--primary) / 0.2)",
            }}
          >
            <Sparkles className="w-4 h-4" style={{ color: "hsl(var(--primary))" }} />
            <span
              className="text-sm font-semibold"
              style={{ color: "hsl(var(--primary))" }}
            >
              Featured Work
            </span>
          </motion.div>

          <h2
            className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4"
            style={{ color: "hsl(var(--foreground))" }}
          >
            Case Studies
          </h2>
          <p
            className="text-base lg:text-lg max-w-2xl mx-auto"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            Deep dive into our most impactful projects and the results we delivered.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          className="space-y-16 lg:space-y-24"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {featuredProjects.map((project, index) => (
            <FeaturedProjectCard
              key={project.id}
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

// Featured Project Card Component
const FeaturedProjectCard = ({ project, index, isReversed }) => {
  const [isHovered, setIsHovered] = useState(false);

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
        isReversed ? "" : ""
      }`}
      variants={itemVariants}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Side */}
      <motion.div
        className={`relative ${isReversed ? "lg:order-2" : "lg:order-1"}`}
        initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Glow effect */}
        <motion.div
          className="absolute -inset-4 rounded-3xl blur-3xl -z-10"
          style={{
            background: `radial-gradient(circle, ${project.color}, transparent 70%)`,
          }}
          animate={{ opacity: isHovered ? 0.5 : 0.2 }}
          transition={{ duration: 0.3 }}
        />

        {/* Image container */}
        <div
          className="relative rounded-3xl overflow-hidden border"
          style={{
            borderColor: isHovered ? project.color : "hsl(var(--border))",
            boxShadow: isHovered
              ? `0 25px 50px -12px ${project.color}`
              : "0 25px 50px -12px hsl(var(--primary) / 0.1)",
            transition: "all 0.3s ease",
          }}
        >
          {/* Top accent */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-[3px] z-10"
            style={{
              background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
            }}
            animate={{ opacity: isHovered ? 1 : 0.5 }}
          />

          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full aspect-[4/3] object-cover"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />

          {/* Overlay gradient */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, transparent 50%, hsl(var(--card) / 0.3) 100%)",
            }}
          />
        </div>
      </motion.div>

      {/* Content Side */}
      <motion.div
        className={`space-y-6 ${isReversed ? "lg:order-1" : "lg:order-2"}`}
        initial={{ opacity: 0, x: isReversed ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {/* Subtitle */}
        <span
          className="text-sm font-semibold uppercase tracking-wider"
          style={{ color: "hsl(var(--primary))" }}
        >
          {project.subtitle}
        </span>

        {/* Title */}
        <h3
          className="text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight"
          style={{ color: "hsl(var(--foreground))" }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          className="text-base lg:text-lg leading-relaxed"
          style={{ color: "hsl(var(--muted-foreground))" }}
        >
          {project.description}
        </p>

        {/* Achievements */}
        <div className="space-y-3 py-4">
          <h4
            className="text-sm font-semibold uppercase tracking-wider"
            style={{ color: "hsl(var(--primary))" }}
          >
            Key Achievements
          </h4>
          {project.achievements.map((achievement, idx) => (
            <motion.div
              key={idx}
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + idx * 0.1 }}
            >
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: `${project.color}30` }}
              >
                <CheckCircle
                  className="w-4 h-4"
                  style={{ color: "hsl(var(--primary))" }}
                />
              </div>
              <span style={{ color: "hsl(var(--foreground))" }}>
                {achievement}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-full text-xs font-semibold"
              style={{
                background: "hsl(var(--muted) / 0.3)",
                color: "hsl(var(--foreground))",
                border: "1px solid hsl(var(--border))",
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA Button */}
        <motion.a
          href={project.link}
          className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm"
          style={{
            background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary-accent)))",
            color: "white",
            boxShadow: "0 8px 25px hsl(var(--glow))",
          }}
          whileHover={{ scale: 1.05, boxShadow: "0 12px 35px hsl(var(--glow))" }}
          whileTap={{ scale: 0.98 }}
        >
          View Project
          <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default FeaturedProject;
