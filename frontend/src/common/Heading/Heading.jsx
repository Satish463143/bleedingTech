import React from 'react'
import { motion } from "framer-motion";

const Heading = ({head, subhead, title, desc}) => {
  return (
    <div>
         {/* Section Header */}
         <motion.div
          className="text-center max-w-4xl mx-auto mb-16 lg:mb-15"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Small badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-md mb-6"
            style={{
              background: "hsl(var(--primary) / 0.05)",
              borderColor: "hsl(var(--primary) / 0.2)",
            }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="w-2 h-2 rounded-full"
              style={{ background: "hsl(var(--primary))" }}
              animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span
              className="text-sm font-semibold"
              style={{ color: "hsl(var(--primary))" }}
            >
              {head}
            </span>
          </motion.div>

          {/* Main headline */}
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6"
            style={{ color: "hsl(var(--foreground))" }}
          >
            {subhead}{" "}
            <span
              className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary-accent))] bg-clip-text text-transparent"
              style={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {title}
            </span>
          </h2>

          {/* Subtitle */}
          <p
            className="text-lg md:text-xl leading-relaxed"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            {desc}
          </p>
        </motion.div>
    </div>
  )
}

export default Heading