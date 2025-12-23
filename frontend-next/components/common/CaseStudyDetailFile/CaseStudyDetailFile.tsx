"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Users, Clock, Calendar, CheckCircle, Target, TrendingUp, Quote } from "lucide-react";
import { useAnimation } from "framer-motion";

type Study = {
  id: number;
  slug: string;
  image: string;
  heroImage: string;
  logo: string;
  tagline: string;
  category: string;
  projectName: string;
  companyName: string;
  industry: string;
  duration: string;
  year: string;
  overview: string;
  challenge: string[];
  solution: string[];
  results: {
    metric: number;
    label: string;
  }[];
  technologies: string[];
  testimonialQuote:string;
  testimonialAuthor:string;
  testimonialRole:string;
  testimonialAvatar:string;
};

type Props = {
  study: Study;
};

export const HeroImage = ({ study }: Props) => {
    return (
      <section className="case-detail-hero-image">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            className="hero-image-wrapper"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img src={study.heroImage} alt={study.projectName} className="hero-image" />
            <div className={`hero-image-overlay bg-gradient-to-t from-green-500 to-emerald-400`} />
          </motion.div>
        </div>
      </section>
    );
  };
  
  // Project Info Bar
  export const ProjectInfo = ({ study }: Props) => {
    const infoItems = [
      { icon: Users, label: "Client", value: study.companyName },
      { icon: Target, label: "Industry", value: study.industry },
      { icon: Clock, label: "Duration", value: study.duration },
      { icon: Calendar, label: "Year", value: study.year },
    ];
  
    return (
      <section className="case-detail-info">
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
  export const OverviewSection = ({ study }: Props) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  
    useEffect(() => {
      if (inView) controls.start("visible");
    }, [controls, inView]);
  
    return (
      <section ref={ref} className="case-detail-overview">
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
            <h2 className="section-title">About This Project</h2>
            <div className="overview-line" />
            <p className="overview-text">{study.overview}</p>
          </motion.div>
        </div>
      </section>
    );
  };
  
  
  // Challenge & Solution Section
  export const ChallengeSolution = ({ study }: Props) => {
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
      <section ref={ref} className="case-detail-challenge-solution">
        <div className="case-detail-bg">
          <div className="case-detail-grid" />
        </div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="challenge-solution-grid">
            {/* Challenge */}
            <motion.div
              className="challenge-card"
              variants={containerVariants}
              initial="hidden"
              animate={controls}
            >
              <div className="card-header challenge-header">
                <Target className="card-icon" />
                <h3>The Challenge</h3>
              </div>
              <ul className="card-list">
                {study.challenge.map((item, index) => (
                  <motion.li key={index} variants={itemVariants}>
                    <span className="list-bullet challenge-bullet" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
  
            {/* Solution */}
            <motion.div
              className="solution-card"
              variants={containerVariants}
              initial="hidden"
              animate={controls}
            >
              <div className="card-header solution-header">
                <CheckCircle className="card-icon" />
                <h3>Our Solution</h3>
              </div>
              <ul className="card-list">
                {study.solution.map((item, index) => (
                  <motion.li key={index} variants={itemVariants}>
                    <span className="list-bullet solution-bullet" />
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
  
  // Results Section
  export const ResultsSection = ({ study }: Props) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  
    useEffect(() => {
      if (inView) controls.start("visible");
    }, [controls, inView]);
  
    return (
      <section ref={ref} className="case-detail-results">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            <span className="section-badge">Results</span>
            <h2 className="section-title">Measurable Impact</h2>
          </motion.div>
  
          <motion.div
            className="results-grid"
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
            {study.results.map((result, index) => (
              <motion.div
                key={index}
                className="result-card"
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
                <TrendingUp className="result-icon" />
                <span className="result-metric">{result.metric}</span>
                <span className="result-label">{result.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    );
  };
  
  // Technologies Section
  export const TechSection = ({ study }: Props) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  
    useEffect(() => {
      if (inView) controls.start("visible");
    }, [controls, inView]);
  
    return (
      <section ref={ref} className="case-detail-tech">
        <div className="case-detail-bg">
          <div className="case-detail-grid" />
        </div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
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
            {study.technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="tech-item"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    );
  };
  
  // Testimonial Section
  export const TestimonialSection = ({ study }: Props) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  
    useEffect(() => {
      if (inView) controls.start("visible");
    }, [controls, inView]);
  
    return (
      <section ref={ref} className="case-detail-testimonial">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            className="testimonial-card"
            initial={{ opacity: 0, y: 30 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
          >
            <Quote className="quote-icon" />
            <blockquote className="testimonial-quote">
              "{study.testimonialQuote}"
            </blockquote>
            <div className="testimonial-author">
              <img
                src={study.testimonialAvatar}
                alt={study.testimonialAuthor}
                className="author-avatar"
              />
              <div>
                <span className="author-name">{study.testimonialAuthor}</span>
                <span className="author-role">{study.testimonialRole}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  };