import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, ExternalLink } from "lucide-react";


const FeaturedProjectCard = ({ project, index, isReversed }) => {
    const [isHovered, setIsHovered] = useState(false);
    // Use color from project or fallback to glowColor
    const projectColor = project.color || project.glowColor || "rgb(59, 130, 246, 0.5)";
    const projectLink = project.link || project.liveLink || "#";
  
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
              background: `radial-gradient(circle, ${projectColor}, transparent 70%)`,
            }}
            animate={{ opacity: isHovered ? 0.5 : 0.2 }}
            transition={{ duration: 0.3 }}
          />
  
          {/* Image container */}
          <div
            className="relative rounded-3xl overflow-hidden border"
            style={{
              borderColor: isHovered ? projectColor : "hsl(var(--border))",
              boxShadow: isHovered
                ? `0 25px 50px -12px ${projectColor}`
                : "0 25px 50px -12px hsl(var(--primary) / 0.1)",
              transition: "all 0.3s ease",
            }}
          >
            {/* Top accent */}
            <motion.div
              className="absolute top-0 left-0 right-0 h-[3px] z-10"
              style={{
                background: `linear-gradient(90deg, transparent, ${projectColor}, transparent)`,
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
          {project.achievements && project.achievements.length > 0 && (
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
                    style={{ background: `${projectColor}30` }}
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
          )}
  
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
            href={projectLink}
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

  export default FeaturedProjectCard;