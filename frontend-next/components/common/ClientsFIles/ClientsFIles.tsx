"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Type definitions
interface Client {
  id: number;
  name: string;
  logo: string;
  color: string;
  size?: string;
}

interface GridLogoProps {
  client: Client;
  index: number;
  size: string;
}

interface MarqueeLogoProps {
  client: Client;
  index: number;
}

interface InfiniteMarqueeProps {
  clients: Client[];
}

// Grid Logo Component (Desktop)
export const GridLogo: React.FC<GridLogoProps> = ({ client, index, size }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Individual floating animation delay
  const floatDelay = index * 0.2;
  const floatDuration = 4 + (index % 3);
  const MotionImage = motion(Image);

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Floating animation */}
      <motion.div
        animate={{
          y: [-6, 6, -6],
        }}
        transition={{
          y: { duration: floatDuration, repeat: Infinity, ease: "easeInOut", delay: floatDelay },
        }}
      >
        {/* Glow effect */}
        <motion.div
          className="absolute -inset-4 rounded-3xl blur-2xl -z-10"
          style={{
            background: `radial-gradient(circle, ${client.color}, transparent 70%)`,
          }}
          animate={{
            opacity: isHovered ? 0.7 : 0,
            scale: isHovered ? 1.15 : 1,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Logo container with frame */}
        <motion.div
          className="relative cursor-pointer"
          whileHover={{
            scale: 1.05,
            y: -6,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          {/* Framed logo with border */}
          <div
            className={`relative ${size === 'large' ? 'p-5' : 'p-4'} rounded-2xl backdrop-blur-sm border overflow-hidden`}
            style={{
              background: "linear-gradient(135deg, hsl(var(--card) / 0.9), hsl(var(--card) / 0.7))",
              borderColor: "hsl(var(--border))",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
            }}
          >
            {/* Logo image with rounded corners */}
            <MotionImage
              loading="lazy"
              priority
              src={client.logo}
              alt={client.name}
              className="w-full h-auto object-contain rounded-xl"
              style={{
                filter: "brightness(0.95) contrast(1.05)",
                aspectRatio: "16/9",
                height: size === 'large' ? '120px' : '100px',
              }}
              whileHover={{
                filter: "brightness(1.05) contrast(1.1)",
              }}
            />

            {/* Shine effect on hover */}
            <motion.div
              className="absolute inset-0 rounded-2xl"
              style={{
                background: `linear-gradient(135deg, ${client.color}, transparent 60%)`,
                mixBlendMode: "overlay",
              }}
              animate={{
                opacity: isHovered ? 0.4 : 0,
              }}
              transition={{ duration: 0.3 }}
            />

            {/* Top border accent */}
            <motion.div
              className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
              style={{
                background: `linear-gradient(90deg, transparent, ${client.color}, transparent)`,
              }}
              animate={{
                opacity: isHovered ? 1 : 0.3,
              }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Client name label */}
          <motion.div
            className="mt-3 text-center"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.3 }}
          >
            <span
              className={`${size === 'large' ? 'text-sm' : 'text-xs'} font-semibold px-3 py-1 rounded-full backdrop-blur-md border inline-block`}
              style={{
                background: "hsl(var(--card) / 0.7)",
                borderColor: "hsl(var(--border))",
                color: "hsl(var(--foreground))",
              }}
            >
              {client.name}
            </span>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// Marquee Logo Component (Mobile)
const MarqueeLogo: React.FC<MarqueeLogoProps> = ({ client, index }) => {
  return (
    <motion.div
      className="flex-shrink-0"
      style={{ width: "180px" }}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
    >
      <motion.div
        className="relative"
        whileInView={{ scale: 1.08 }}
        viewport={{ amount: 0.5 }}
        transition={{ duration: 0.3 }}
      >
        {/* Glow */}
        <motion.div
          className="absolute -inset-4 rounded-2xl blur-xl -z-10"
          style={{
            background: `radial-gradient(circle, ${client.color}, transparent 70%)`,
            opacity: 0.5,
          }}
        />

        {/* Framed logo */}
        <div
          className="p-3 rounded-xl backdrop-blur-sm border"
          style={{
            background: "linear-gradient(135deg, hsl(var(--card) / 0.9), hsl(var(--card) / 0.7))",
            borderColor: "hsl(var(--border))",
            boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Logo with rounded corners */}
          <Image
            loading="lazy"
            priority
            src={client.logo}
            alt={client.name}
            className="w-full h-auto object-contain rounded-lg filter drop-shadow-sm"
            style={{
              aspectRatio: "16/9",
            }}
          />

          {/* Top accent line */}
          <div
            className="absolute top-0 left-0 right-0 h-[2px] rounded-t-xl"
            style={{
              background: `linear-gradient(90deg, transparent, ${client.color}, transparent)`,
              opacity: 0.6,
            }}
          />
        </div>

        {/* Client name */}
        <div className="mt-2 text-center">
          <span
            className="text-xs font-semibold px-2 py-1 rounded-full backdrop-blur-md border inline-block"
            style={{
              background: "hsl(var(--card) / 0.7)",
              borderColor: "hsl(var(--border))",
              color: "hsl(var(--foreground))",
            }}
          >
            {client.name}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Infinite Marquee Component (Mobile)
export const InfiniteMarquee: React.FC<InfiniteMarqueeProps> = ({ clients }) => {
  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <div className="relative w-full overflow-hidden pt-10 h-55">
      <motion.div
        className="flex gap-8"
        animate={{
          x: [0, -33.33 * clients.length * 16], // Move by 1/3 of total width
        }}
        transition={{
          x: {
            duration: 60, // Slowed down from 30s to 60s
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {duplicatedClients.map((client, index) => (
          <MarqueeLogo key={`${client.id}-${index}`} client={client} index={index} />
        ))}
      </motion.div>
    </div>
  );
};

