import { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Star, Quote, Sparkles } from "lucide-react";

const TestimonialCard = ({ testimonial, index }) => {
    const [isHovered, setIsHovered] = useState(false);
  
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
  
    const rotateX = useTransform(mouseY, [-0.5, 0.5], [5, -5]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-5, 5]);
  
    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const mouseXPos = e.clientX - rect.left;
      const mouseYPos = e.clientY - rect.top;
      const xPct = (mouseXPos / width - 0.5) * 2;
      const yPct = (mouseYPos / height - 0.5) * 2;
      mouseX.set(xPct);
      mouseY.set(yPct);
    };
  
    const handleMouseLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
      setIsHovered(false);
    };
  
    return (
      <motion.div
        className="relative group"
        variants={{
          hidden: { opacity: 0, y: 50, scale: 0.95 },
          visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            },
          },
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          perspective: "1000px",
        }}
      >
        {/* Glow effect on hover */}
        <motion.div
          className="absolute -inset-2 rounded-3xl opacity-0 transition-opacity duration-500 blur-2xl -z-10"
          style={{
            background: `radial-gradient(circle, ${testimonial.glowColor}, transparent 70%)`,
            opacity: isHovered ? 1 : 0,
          }}
        />
  
        {/* Main card container */}
        <motion.div
          className="relative h-full p-6 lg:p-8 rounded-3xl backdrop-blur-xl border overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, hsl(var(--card) / 0.9), hsl(var(--card) / 0.6))",
            borderColor: "hsl(var(--border))",
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          whileHover={{
            borderColor: testimonial.glowColor,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {/* Gradient overlay animation */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{
              background: `linear-gradient(135deg, ${testimonial.glowColor}, transparent 60%)`,
              mixBlendMode: "overlay",
            }}
          />
  
          {/* Top decoration - Quote icon */}
          <motion.div
            className="absolute -top-4 -left-4 w-20 h-20 opacity-10"
            animate={{
              rotate: [0, 360],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Quote className="w-full h-full" style={{ color: "hsl(var(--primary))" }} />
          </motion.div>
  
          {/* Category badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md border mb-6"
            style={{
              background: "hsl(var(--muted) / 0.3)",
              borderColor: "hsl(var(--border))",
            }}
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-3 h-3" style={{ color: "hsl(var(--primary))" }} />
            <span
              className="text-xs font-semibold"
              style={{ color: "hsl(var(--primary))" }}
            >
              {testimonial.category}
            </span>
          </motion.div>
  
          {/* Star rating */}
          <div className="flex gap-1 mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                <Star
                  className="w-4 h-4 fill-current"
                  style={{ color: "hsl(var(--primary))" }}
                />
              </motion.div>
            ))}
          </div>
  
          {/* Review text */}
          <p
            className="text-sm lg:text-base leading-relaxed mb-6"
            style={{ color: "hsl(var(--foreground))" }}
          >
            "{testimonial.review}"
          </p>
  
          {/* Client info */}
          <div className="flex items-center gap-4 pt-6 border-t" style={{ borderColor: "hsl(var(--border))" }}>
            {/* Client photo */}
            <motion.div
              className="relative w-14 h-14 rounded-full overflow-hidden border-2"
              style={{ borderColor: testimonial.glowColor }}
              whileHover={{ scale: 1.1 }}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
              {/* Photo glow */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  background: `radial-gradient(circle, ${testimonial.glowColor}, transparent 70%)`,
                }}
              />
            </motion.div>
  
            {/* Name and role */}
            <div className="flex-1">
              <h4
                className="font-bold text-base"
                style={{ color: "hsl(var(--foreground))" }}
              >
                {testimonial.name}
              </h4>
              <p
                className="text-sm"
                style={{ color: "hsl(var(--muted-foreground))" }}
              >
                {testimonial.role}
              </p>
              <p
                className="text-xs font-semibold"
                style={{ color: "hsl(var(--primary))" }}
              >
                {testimonial.company}
              </p>
            </div>
          </div>
  
          {/* Bottom corner accent */}
          <motion.div
            className="absolute bottom-0 right-0 w-32 h-32 opacity-15 pointer-events-none"
            style={{
              background: `radial-gradient(circle at bottom right, ${testimonial.glowColor}, transparent 70%)`,
            }}
          />
  
          {/* Floating mini accent */}
          <motion.div
            className="absolute top-4 right-4 w-2 h-2 rounded-full"
            style={{ background: testimonial.glowColor }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: index * 0.2,
            }}
          />
        </motion.div>
      </motion.div>
    );
  };
export default TestimonialCard;