"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type TechItemProps = {
  tech: any;
  variants: any;
}
const TechItem = ({ tech, variants }: TechItemProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const MotionImage = motion(Image);
  
    return (
      <motion.div
        className="relative"
        variants={variants}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Glow effect */}
        <motion.div
          className="absolute -inset-2 rounded-2xl blur-xl -z-10"
          style={{
            background: `radial-gradient(circle, ${tech.color}, transparent 70%)`,
          }}
          animate={{ opacity: isHovered ? 0.6 : 0 }}
          transition={{ duration: 0.3 }}
        />
  
        {/* Card */}
        <motion.div
          className="relative p-4 lg:p-6 rounded-2xl border backdrop-blur-sm flex flex-col items-center gap-3"
          style={{
            background: "hsl(var(--card) / 0.5)",
            borderColor: isHovered ? tech.color : "hsl(var(--border))",
          }}
          animate={{
            y: isHovered ? -6 : 0,
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          {/* Icon */}
          <MotionImage
            loading="lazy"
            priority
            src={tech.icon}
            alt={tech.name}
            className="w-10 h-10 lg:w-12 lg:h-12 object-contain"
            style={{
              filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.1))",
            }}
            animate={{ rotate: isHovered ? 5 : 0 }}
            transition={{ duration: 0.2 }}
          />
  
          {/* Label */}
          <span
            className="text-xs lg:text-sm font-medium text-center"
            style={{ color: "hsl(var(--foreground))" }}
          >
            {tech.name}
          </span>
        </motion.div>
      </motion.div>
    );
  };
  export default TechItem;