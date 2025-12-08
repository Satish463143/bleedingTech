import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink, Layers } from "lucide-react";
import "./NewProjectCard.css";

const NewProjectCard = ({ project, index = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);

  const {
    title = "Project Title",
    description = "Project description goes here.",
    image = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tech = ["React", "Node.js"],
    category = "Web Development",
    glowColor = "rgb(59, 130, 246, 0.4)",
    liveLink = "#",
  } = project || {};

  return (
    <motion.div
      className="new-project-card relative h-[520px] rounded-2xl overflow-hidden cursor-pointer group"
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        border: "1px solid hsl(var(--border))",
      }}
    >
      {/* Background Glow */}
      <motion.div
        className="absolute -inset-2 rounded-3xl blur-2xl -z-10"
        style={{
          background: `radial-gradient(circle, ${glowColor}, transparent 70%)`,
        }}
        animate={{ opacity: isHovered ? 0.5 : 0 }}
        transition={{ duration: 0.4 }}
      />

      {/* Card Container */}
      <div
        className="relative w-full h-full overflow-hidden"
        style={{
          background: "hsl(var(--card))",
        }}
      >
        {/* Image Layer - Slides Right on Hover */}
        <motion.div
          className="absolute inset-0 z-10"
          animate={{
            x: isHovered ? "50%" : "0%",
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          
          {/* Image Overlay Gradient */}
          <div
            className="absolute inset-0"
            style={{
              background: isHovered
                ? "linear-gradient(90deg, hsl(var(--card)) 0%, transparent 30%)"
                : "linear-gradient(180deg, transparent 40%, hsl(var(--card) / 0.9) 100%)",
              transition: "background 0.5s ease",
            }}
          />
        </motion.div>

        {/* Default State - Title on Image */}
        <AnimatePresence>
          {!isHovered && (
            <motion.div
              className="absolute bottom-0 left-0 right-0 p-6 z-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Category Badge */}
              <motion.span
                className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3"
                style={{
                  background: `${glowColor}`,
                  color: "white",
                }}
              >
                {category}
              </motion.span>

              {/* Title */}
              <h3
                className="text-xl lg:text-2xl font-bold leading-tight"
                style={{ color: "hsl(var(--foreground))" }}
              >
                {title}
              </h3>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hover State - Content Panel Slides In */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute inset-0 z-20 p-6 lg:p-8 flex flex-col justify-between"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: "linear-gradient(90deg, hsl(var(--card)) 60%, transparent 100%)",
              }}
            >
              {/* Top Content */}
              <div className="max-w-[60%]">
                {/* Category Badge */}
                <motion.span
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
                  style={{
                    background: `${glowColor}`,
                    color: "white",
                  }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {category}
                </motion.span>

                {/* Title */}
                <motion.h3
                  className="text-xl lg:text-2xl font-bold leading-tight mb-4"
                  style={{ color: "hsl(var(--foreground))" }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  {title}
                </motion.h3>

                {/* Description */}
                <motion.p
                  className="text-sm lg:text-base leading-relaxed mb-5 "
                  style={{ color: "hsl(var(--muted-foreground))" }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {description}
                </motion.p>

                {/* Tech Stack */}
                <motion.div
                  className="flex flex-wrap gap-2 mb-6"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  {tech.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-xs font-medium"
                      style={{
                        background: "hsl(var(--muted) / 0.5)",
                        color: "hsl(var(--foreground))",
                        border: "1px solid hsl(var(--border))",
                      }}
                    >
                      {item}
                    </span>
                  ))}
                  
                </motion.div>
              </div>

              {/* Bottom - CTA Button */}
              <motion.div
                className="max-w-[60%]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <motion.a
                  href={liveLink}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm"
                  style={{
                    background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary-accent)))",
                    color: "white",
                    boxShadow: "0 8px 20px hsl(var(--glow))",
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 12px 30px hsl(var(--glow))",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Explore Project
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hover Indicator - Bottom Right */}
        <motion.div
          className="absolute bottom-4 right-4 z-30"
          animate={{
            opacity: isHovered ? 0 : 1,
            scale: isHovered ? 0.8 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md"
            style={{
              background: "hsl(var(--card) / 0.8)",
              border: "1px solid hsl(var(--border))",
            }}
          >
            <Layers className="w-4 h-4" style={{ color: "hsl(var(--primary))" }} />
          </div>
        </motion.div>

        {/* Top Accent Line */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[3px] z-30"
          style={{
            background: `linear-gradient(90deg, ${glowColor}, transparent)`,
          }}
          animate={{
            opacity: isHovered ? 1 : 0.5,
            scaleX: isHovered ? 1 : 0.3,
          }}
          transition={{ duration: 0.4 }}
        />
      </div>
    </motion.div>
  );
};

export default NewProjectCard;
