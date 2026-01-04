"use client";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Image from "next/image";
import {
  CheckCircle,
  Target,
  TrendingUp,
  Code,
  ExternalLink,
  Sparkles,
  Layers,
  Zap,
} from "lucide-react";
import Link from "next/link";

type Project = {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  tech: string[];
  description: string;
  features: string[];
  achievements: string[];
  category: string;
  isFeatured: boolean;
  liveLink: string;
  caseStudyLink: string;
};

type Props = {
  project: Project;
};

// Hero Image Section
export const HeroImage = ({ project }: Props) => {
  return (
    <section className="project-detail-hero-image">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          className="hero-image-wrapper"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image src={project.image} alt={project.title} className="hero-image" />
          <div
            className={`hero-image-overlay bg-gradient-to-t from-blue-500 to-cyan-400`}
          />
          <span className="hero-category">{project.category}</span>
          {project.isFeatured && (
            <span className="hero-featured">
              <Sparkles className="w-3 h-3" />
              Featured Project
            </span>
          )}
        </motion.div>
      </div>
    </section>
  );
};

// Project Info Bar
export const ProjectInfo = ({ project }: Props) => {
  const infoItems = [
    { icon: Layers, label: "Category", value: project.category },
    { icon: Code, label: "Technologies", value: `${project.tech.length} Stack` },
    { icon: CheckCircle, label: "Status", value: "Completed" },
    { icon: Target, label: "Type", value: project.isFeatured ? "Featured" : "Standard" },
  ];

  return (
    <section className="project-detail-info">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          className="info-grid"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {infoItems.map((item, index) => (
            <div key={index} className="info-item">
              <item.icon className="info-icon" />
              <div>
                <span className="info-label">{item.label}</span>
                <span className="info-value">{item.value}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Overview Section
export const OverviewSection = ({ project }: Props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <section ref={ref} className="project-detail-overview">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
          initial="hidden"
          animate={controls}
        >
          <span className="section-badge">Project Overview</span>
          <h2 className="section-title">{project.subtitle}</h2>
          <div className="overview-line" />
          <p className="overview-text">{project.description}</p>
        </motion.div>
      </div>
    </section>
  );
};

// Features & Achievements Section
export const FeaturesAchievements = ({ project }: Props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section ref={ref} className="project-detail-features-achievements">
      <div className="project-detail-bg">
        <div className="project-detail-grid" />
      </div>
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="features-achievements-grid">
          {/* Features */}
          <motion.div
            className="features-card"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            <div className="card-header features-header">
              <Zap className="card-icon" />
              <h3>Key Features</h3>
            </div>
            <ul className="card-list">
              {project.features.map((item, index) => (
                <motion.li key={index} variants={itemVariants}>
                  <span className="list-bullet features-bullet" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Achievements */}
          <motion.div
            className="achievements-card"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            <div className="card-header achievements-header">
              <TrendingUp className="card-icon" />
              <h3>Achievements</h3>
            </div>
            <ul className="card-list">
              {project.achievements.map((item, index) => (
                <motion.li key={index} variants={itemVariants}>
                  <span className="list-bullet achievements-bullet" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Tech Stack Section
export const TechStackSection = ({ project }: Props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <section ref={ref} className="project-detail-tech">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          <span className="section-badge">Tech Stack</span>
          <h2 className="section-title">Technologies Used</h2>
        </motion.div>

        <motion.div
          className="tech-grid"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {project.tech.map((tech, index) => (
            <motion.div
              key={index}
              className="tech-item"
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Code className="tech-icon" />
              {tech}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Project Links Section
export const ProjectLinks = ({ project }: Props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <section ref={ref} className="project-detail-links">
      <div className="project-detail-bg">
        <div className="project-detail-grid" />
      </div>
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          className="links-card"
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
        >
          <h3 className="links-title">Explore More</h3>
          <p className="links-description">
            Check out the live project or read the detailed case study to learn more
            about our process and results.
          </p>
          <div className="links-buttons">
            {project.liveLink && project.liveLink !== "" && project.liveLink !== "#" && (
              <Link
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="link-button primary-button"
              >
                <ExternalLink className="w-5 h-5" />
                View Live Project
              </Link>
            )}
            {project.caseStudyLink && project.caseStudyLink !== "" && project.caseStudyLink !== "#" && (
              <Link
                href={project.caseStudyLink}
                className="link-button secondary-button"
              >
                <Target className="w-5 h-5" />
                Read Case Study
              </Link>
            )}            
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Project Stats Section (Optional visual enhancement)
export const ProjectStats = ({ project }: Props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const stats = [
    { icon: Layers, label: "Features", value: project.features.length },
    { icon: TrendingUp, label: "Achievements", value: project.achievements.length },
    { icon: Code, label: "Technologies", value: project.tech.length },
    { icon: Sparkles, label: "Category", value: project.category },
  ];

  return (
    <section ref={ref} className="project-detail-stats">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          <span className="section-badge">Project Highlights</span>
          <h2 className="section-title">At a Glance</h2>
        </motion.div>

        <motion.div
          className="stats-grid"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.9 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.6 },
                },
              }}
            >
              <stat.icon className="stat-icon" />
              <span className="stat-value">
                {typeof stat.value === "number" ? stat.value : stat.value}
              </span>
              <span className="stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

