import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

// Custom counter hook with animation
const useCounter = (end, duration = 2000, start = 0, inView = false) => {
  const [count, setCount] = useState(start);
  const countRef = useRef(start);
  const startTimeRef = useRef(null);

  useEffect(() => {
    if (!inView) return;

    const animate = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const progress = Math.min((timestamp - startTimeRef.current) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(start + (end - start) * easeOutQuart);

      setCount(currentCount);
      countRef.current = currentCount;

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);

    return () => {
      startTimeRef.current = null;
    };
  }, [end, duration, start, inView]);

  return count;
};

const StatCard = ({ icon: Icon, value, suffix, label, color, index, inView }) => {
    const [isHovered, setIsHovered] = useState(false);
    const count = useCounter(value, 2000, 0, inView);
  
    const cardVariants = {
      hidden: { opacity: 0, y: 40, scale: 0.9 },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.6,
          delay: index * 0.1,
          ease: [0.22, 1, 0.36, 1],
        },
      },
    };
  
    return (
      <motion.div
        className="relative group"
        variants={cardVariants}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Glow effect */}
        <motion.div
          className="absolute -inset-2 rounded-3xl blur-2xl -z-10"
          style={{
            background: `radial-gradient(circle, ${color}30, transparent 70%)`,
          }}
          animate={{ opacity: isHovered ? 0.6 : 0.2 }}
          transition={{ duration: 0.3 }}
        />
  
        {/* Card */}
        <motion.div
          className="relative p-6 lg:p-8 rounded-3xl border backdrop-blur-xl text-center overflow-hidden"
          style={{
            background: "linear-gradient(135deg, hsl(var(--card) / 0.9), hsl(var(--card) / 0.7))",
            borderColor: isHovered ? `${color}40` : "hsl(var(--border))",
          }}
          animate={{
            y: isHovered ? -8 : 0,
            boxShadow: isHovered
              ? `0 25px 50px -12px ${color}30`
              : "0 10px 40px -10px hsl(var(--primary) / 0.05)",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          {/* Top accent */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-1"
            style={{
              background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
            }}
            animate={{ opacity: isHovered ? 1 : 0.5 }}
          />
  
          {/* Icon */}
          <motion.div
            className="w-14 h-14 mx-auto rounded-2xl flex items-center justify-center mb-5"
            style={{
              background: `${color}15`,
              border: `1px solid ${color}30`,
            }}
            animate={{
              scale: isHovered ? 1.1 : 1,
              boxShadow: isHovered ? `0 8px 25px ${color}30` : "none",
            }}
            transition={{ duration: 0.3 }}
          >
            <Icon className="w-7 h-7" style={{ color }} />
          </motion.div>
  
          {/* Counter */}
          <div className="mb-3">
            <motion.span
              className="text-4xl lg:text-5xl font-black"
              style={{ color }}
            >
              {count}
              {suffix}
            </motion.span>
          </div>
  
          {/* Glowing underline */}
          <motion.div
            className="h-1 w-16 mx-auto rounded-full mb-4"
            style={{
              background: `linear-gradient(90deg, ${color}, ${color}80)`,
              boxShadow: `0 4px 15px ${color}40`,
            }}
            animate={{
              opacity: [0.6, 1, 0.6],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
  
          {/* Label */}
          <p
            className="text-sm lg:text-base font-medium"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            {label}
          </p>
  
          {/* Background decoration */}
          <motion.div
            className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full"
            style={{
              background: `radial-gradient(circle, ${color}10, transparent 70%)`,
            }}
            animate={{
              scale: isHovered ? 1.5 : 1,
              opacity: isHovered ? 0.6 : 0.3,
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </motion.div>
    );
  };

  export default StatCard;