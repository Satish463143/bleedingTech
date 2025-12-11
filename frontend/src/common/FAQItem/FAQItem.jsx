import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus } from "lucide-react";

const FAQItem = ({ faq, index, isActive, onToggle }) => {
    const [isHovered, setIsHovered] = useState(false);
  
    const itemVariants = {
      hidden: { opacity: 0, y: 30, scale: 0.95 },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        },
      },
    };
  
    return (
      <motion.div
        className="relative"
        variants={itemVariants}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Glow effect */}
        <motion.div
          className="absolute -inset-2 rounded-3xl blur-2xl -z-10"
          style={{
            background: `radial-gradient(circle, ${faq.color}, transparent 70%)`,
          }}
          animate={{
            opacity: isActive ? 0.6 : isHovered ? 0.3 : 0,
            scale: isActive ? 1.05 : 1,
          }}
          transition={{ duration: 0.3 }}
        />
  
        {/* Main Card */}
        <motion.div
          className="relative rounded-2xl backdrop-blur-xl border overflow-hidden cursor-pointer"
          style={{
            background:
              "linear-gradient(135deg, hsl(var(--card) / 0.9), hsl(var(--card) / 0.6))",
            borderColor: isActive ? faq.color : "hsl(var(--border))",
            transition: "border-color 0.3s ease",
          }}
          animate={{
            y: isHovered && !isActive ? -4 : 0,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          onClick={onToggle}
        >
          {/* Gradient overlay */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${faq.color}, transparent 70%)`,
              mixBlendMode: "overlay",
            }}
            animate={{
              opacity: isActive ? 0.25 : isHovered ? 0.1 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
  
          {/* Top accent line */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-[2px]"
            style={{
              background: `linear-gradient(90deg, transparent, ${faq.color}, transparent)`,
            }}
            animate={{
              opacity: isActive ? 1 : isHovered ? 0.5 : 0.2,
            }}
            transition={{ duration: 0.3 }}
          />
  
          {/* Question Header */}
          <div className="relative p-6 flex items-center gap-4">
            {/* Minimal Line Indicator */}
            <motion.div
              className="flex-shrink-0 relative"
              animate={{
                scale: isActive ? 1.1 : 1,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              {/* Vertical accent line */}
              <motion.div
                className="w-1 h-10 rounded-full"
                style={{
                  background: isActive 
                    ? "linear-gradient(180deg, hsl(var(--primary)), hsl(var(--primary-accent)))"
                    : "hsl(var(--border))",
                  boxShadow: isActive ? "0 0 12px hsl(var(--glow))" : "none",
                }}
                animate={{
                  scaleY: isActive ? 1.2 : 1,
                }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Pulsing dot when active */}
              {isActive && (
                <motion.div
                  className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full"
                  style={{
                    background: "hsl(var(--primary))",
                    boxShadow: "0 0 8px hsl(var(--glow))",
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                />
              )}
            </motion.div>
  
            {/* Question Text */}
            <h3
              className="flex-1 text-base lg:text-lg font-semibold leading-snug"
              style={{ color: "hsl(var(--foreground))" }}
            >
              {faq.question}
            </h3>
  
            {/* Toggle Icon */}
            <motion.div
              className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md border"
              style={{
                background: isActive ? faq.color : "hsl(var(--muted) / 0.3)",
                borderColor: isActive ? "transparent" : "hsl(var(--border))",
              }}
              animate={{
                rotate: isActive ? 180 : 0,
                scale: isActive ? 1.1 : 1,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              {isActive ? (
                <Minus className="w-5 h-5 text-white" />
              ) : (
                <Plus
                  className="w-5 h-5"
                  style={{ color: "hsl(var(--muted-foreground))" }}
                />
              )}
            </motion.div>
          </div>
  
          {/* Answer Content */}
          <AnimatePresence initial={false}>
            {isActive && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{
                  height: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                  opacity: { duration: 0.3, delay: 0.1 },
                }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 pt-0">
                  <div
                    className="pl-6 ml-0.5 border-l-2"
                    style={{ borderColor: "hsl(var(--primary) / 0.3)" }}
                  >
                    <motion.p
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -20, opacity: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      className="text-sm lg:text-base leading-relaxed"
                      style={{ color: "hsl(var(--muted-foreground))" }}
                    >
                      {faq.answer}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
  
          {/* Corner accent */}
          <motion.div
            className="absolute bottom-0 right-0 w-24 h-24 opacity-20 pointer-events-none"
            style={{
              background: `radial-gradient(circle at bottom right, ${faq.color}, transparent 70%)`,
            }}
            animate={{
              opacity: isActive ? 0.3 : 0.1,
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </motion.div>
    );
  };
export default FAQItem;