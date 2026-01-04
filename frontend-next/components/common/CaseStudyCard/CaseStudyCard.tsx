"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

type Study = {
  id: string | number;
  slug: string;
  image: string;
  projectName: string;
  logo: string;
  companyName: string;
  tagline: string;
  category: string;
};

type Props = {
  study: Study;
  index: number;
};

export default function CaseStudyCard({ study, index }: Props) {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();
  const MotionImage = motion(Image);
  const handleViewCaseStudy = () => {
    router.push(`/case-study-detail?slug=${study.slug}&id=${study.id}`);
  };

  const cardVariants: Variants = {
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
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") handleViewCaseStudy();
      }}
    >
      <motion.div
        className="card-glow"
        animate={{ opacity: isHovered ? 0.5 : 0 }}
        transition={{ duration: 0.4 }}
      />

      <div className="card-inner">
        <motion.div
          className="card-image-wrapper"
          animate={{
            filter: isHovered
              ? "blur(2px) brightness(0.4)"
              : "blur(0px) brightness(1)",
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <MotionImage
            loading="lazy"
            priority
            src={study.image}
            alt={study.projectName}
            className="card-image"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </motion.div>

        <motion.div
          className="card-gradient-overlay"
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: isHovered ? "0%" : "-100%", opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />

        <motion.div
          className="card-content-overlay"
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: isHovered ? "0%" : "100%", opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="card-company"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <Image src={study.logo} alt={study.companyName} className="company-logo" />
            <span className="company-name">{study.companyName}</span>
          </motion.div>

          <motion.h3
            className="card-title"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            {study.projectName}
          </motion.h3>

          <motion.p
            className="card-tagline"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
          >
            {study.tagline}
          </motion.p>

          <motion.span
            className="card-category"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            {study.category}
          </motion.span>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4, delay: 0.35 }}
          >
            <button
              className="card-button"
              onClick={(e) => {
                e.stopPropagation();
                handleViewCaseStudy();
              }}
            >
              <span>View Case Study</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          className="card-default-content"
          animate={{ opacity: isHovered ? 0 : 1, y: isHovered ? -20 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <span className="default-category">{study.category}</span>

          <div className="default-company">
            <Image src={study.logo} alt={study.companyName} className="default-logo" />
            <span className="default-company-name">{study.companyName}</span>
          </div>

          <h3 className="default-title">{study.projectName}</h3>
        </motion.div>

        <motion.div
          className="card-accent-line"
          animate={{ scaleX: isHovered ? 1 : 0.3, opacity: isHovered ? 1 : 0.5 }}
          transition={{ duration: 0.4 }}
        />

        <motion.div
          className="card-corner"
          animate={{ opacity: isHovered ? 0.3 : 0.1 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
}
