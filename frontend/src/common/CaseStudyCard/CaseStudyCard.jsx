import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
const CaseStudyCard = ({ study, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();
  
    const handleViewCaseStudy = () => {
      navigate(`/case-study-detail/${study.slug}/${study.id}`);
    };
  
    const cardVariants = {
      hidden: { opacity: 0, y: 50, scale: 0.95 },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
          delay: index * 0.1,
        },
      },
    };
  
    return (
      <motion.div
        className="case-study-card"
        variants={cardVariants}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleViewCaseStudy}
      >
        {/* Glow effect */}
        <motion.div
          className="card-glow"
          animate={{ opacity: isHovered ? 0.5 : 0 }}
          transition={{ duration: 0.4 }}
        />
  
        {/* Main card */}
        <div className="card-inner">
          {/* Background Image */}
          <motion.div
            className="card-image-wrapper"
            animate={{
              filter: isHovered ? "blur(2px) brightness(0.4)" : "blur(0px) brightness(1)",
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <motion.img
              src={study.image}
              alt={study.projectName}
              className="card-image"
              animate={{
                scale: isHovered ? 1.1 : 1,
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </motion.div>
  
          {/* Single color overlay from left (colliding effect) */}
          <motion.div
            className="card-gradient-overlay"
            initial={{ x: "-100%", opacity: 0 }}
            animate={{
              x: isHovered ? "0%" : "-100%",
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />
  
          {/* Content from right (colliding effect) */}
          <motion.div
            className="card-content-overlay"
            initial={{ x: "100%", opacity: 0 }}
            animate={{
              x: isHovered ? "0%" : "100%",
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Company Logo & Name */}
            <motion.div
              className="card-company"
              initial={{ y: 20, opacity: 0 }}
              animate={{
                y: isHovered ? 0 : 20,
                opacity: isHovered ? 1 : 0,
              }}
              transition={{ duration: 0.4, delay: 0.15 }}
            >
              <img src={study.logo} alt={study.companyName} className="company-logo" />
              <span className="company-name">{study.companyName}</span>
            </motion.div>
  
            {/* Project Name */}
            <motion.h3
              className="card-title"
              initial={{ y: 20, opacity: 0 }}
              animate={{
                y: isHovered ? 0 : 20,
                opacity: isHovered ? 1 : 0,
              }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              {study.projectName}
            </motion.h3>
  
            {/* Tagline */}
            <motion.p
              className="card-tagline"
              initial={{ y: 20, opacity: 0 }}
              animate={{
                y: isHovered ? 0 : 20,
                opacity: isHovered ? 1 : 0,
              }}
              transition={{ duration: 0.4, delay: 0.25 }}
            >
              {study.tagline}
            </motion.p>
  
            {/* Category Badge */}
            <motion.span
              className="card-category"
              initial={{ y: 20, opacity: 0 }}
              animate={{
                y: isHovered ? 0 : 20,
                opacity: isHovered ? 1 : 0,
              }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              {study.category}
            </motion.span>
  
            {/* View Button */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{
                y: isHovered ? 0 : 20,
                opacity: isHovered ? 1 : 0,
              }}
              transition={{ duration: 0.4, delay: 0.35 }}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleViewCaseStudy();
                }}
                className="card-button"
              >
                <span>View Case Study</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </motion.div>
  
          {/* Default visible content (before hover) */}
          <motion.div
            className="card-default-content"
            animate={{
              opacity: isHovered ? 0 : 1,
              y: isHovered ? -20 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Category badge */}
            <span className="default-category">
              {study.category}
            </span>
  
            {/* Company info */}
            <div className="default-company">
              <img src={study.logo} alt={study.companyName} className="default-logo" />
              <span className="default-company-name">{study.companyName}</span>
            </div>
  
            {/* Project name */}
            <h3 className="default-title">{study.projectName}</h3>
          </motion.div>
  
          {/* Top accent line */}
          <motion.div
            className="card-accent-line"
            animate={{
              scaleX: isHovered ? 1 : 0.3,
              opacity: isHovered ? 1 : 0.5,
            }}
            transition={{ duration: 0.4 }}
          />
  
          {/* Corner decoration */}
          <motion.div
            className="card-corner"
            animate={{ opacity: isHovered ? 0.3 : 0.1 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>
    );
  };

export default CaseStudyCard;