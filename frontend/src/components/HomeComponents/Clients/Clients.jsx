import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Heading from "../../../common/Heading/Heading";
import "./Clients.css";

const Clients = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Dummy client data with positioning for constellation layout
  const clients = [
    {
      id: 1,
      name: "TechVision",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=80&fit=crop&q=80",
      size: "large",
      cluster: 1,
      desktopPos: { top: "15%", left: "12%", rotate: -5 },
      color: "rgb(59, 130, 246, 0.5)",
    },
    {
      id: 2,
      name: "InnovateLabs",
      logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=180&h=70&fit=crop&q=80",
      size: "medium",
      cluster: 1,
      desktopPos: { top: "35%", left: "8%", rotate: 3 },
      color: "rgb(139, 92, 246, 0.5)",
    },
    {
      id: 3,
      name: "CloudScale",
      logo: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=190&h=75&fit=crop&q=80",
      size: "medium",
      cluster: 1,
      desktopPos: { top: "25%", left: "25%", rotate: -2 },
      color: "rgb(16, 185, 129, 0.5)",
    },
    {
      id: 4,
      name: "QuantumLeap",
      logo: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?w=210&h=85&fit=crop&q=80",
      size: "large",
      cluster: 2,
      desktopPos: { top: "20%", left: "48%", rotate: 4 },
      color: "rgb(99, 102, 241, 0.5)",
    },
    {
      id: 5,
      name: "DataFlow",
      logo: "https://images.unsplash.com/photo-1633265486064-086b219458ec?w=170&h=65&fit=crop&q=80",
      size: "small",
      cluster: 2,
      desktopPos: { top: "42%", left: "52%", rotate: -4 },
      color: "rgb(245, 158, 11, 0.5)",
    },
    {
      id: 6,
      name: "SecureNet",
      logo: "https://images.unsplash.com/photo-1614064548237-7e91b1c73c7c?w=185&h=70&fit=crop&q=80",
      size: "medium",
      cluster: 2,
      desktopPos: { top: "38%", left: "38%", rotate: 2 },
      color: "rgb(239, 68, 68, 0.5)",
    },
    {
      id: 7,
      name: "FinTech Pro",
      logo: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=195&h=75&fit=crop&q=80",
      size: "medium",
      cluster: 3,
      desktopPos: { top: "18%", left: "72%", rotate: -3 },
      color: "rgb(20, 184, 166, 0.5)",
    },
    {
      id: 8,
      name: "MediaWave",
      logo: "https://images.unsplash.com/photo-1614680376739-414d95ff43df?w=205&h=80&fit=crop&q=80",
      size: "large",
      cluster: 3,
      desktopPos: { top: "38%", left: "75%", rotate: 5 },
      color: "rgb(249, 115, 22, 0.5)",
    },
    {
      id: 9,
      name: "EcoSmart",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=180&h=68&fit=crop&q=80",
      size: "small",
      cluster: 3,
      desktopPos: { top: "32%", left: "88%", rotate: -2 },
      color: "rgb(34, 197, 94, 0.5)",
    },
    {
      id: 10,
      name: "HealthTech",
      logo: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?w=190&h=72&fit=crop&q=80",
      size: "medium",
      cluster: 1,
      desktopPos: { top: "52%", left: "15%", rotate: 3 },
      color: "rgb(6, 182, 212, 0.5)",
    },
    {
      id: 11,
      name: "RetailFlow",
      logo: "https://images.unsplash.com/photo-1614064548237-7e91b1c73c7c?w=185&h=70&fit=crop&q=80",
      size: "small",
      cluster: 2,
      desktopPos: { top: "58%", left: "45%", rotate: -5 },
      color: "rgb(168, 85, 247, 0.5)",
    },
    {
      id: 12,
      name: "AI Dynamics",
      logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=200&h=76&fit=crop&q=80",
      size: "medium",
      cluster: 3,
      desktopPos: { top: "55%", left: "78%", rotate: 4 },
      color: "rgb(236, 72, 153, 0.5)",
    },
  ];

  return (
    <section
      className="relative overflow-hidden py-24 lg:py-20 bg-background"
      style={{
        background:
          "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--bg-foreground) / 0.05) 100%)",
      }}
    >
      {/* ANIMATED BACKGROUND LAYERS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Radial gradient glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background:
              "radial-gradient(circle, hsl(var(--primary) / 0.1), transparent 70%)",
            filter: "blur(80px)",
          }}
        />

        {/* Tech grid */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Floating particles */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: "hsl(var(--primary))",
              boxShadow: "0 0 8px hsl(var(--glow))",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 1.5, 1],
              y: [0, -25, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* MAIN CONTENT */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <Heading
          head="Our Clients"
          subhead="Brands"
          title="That Trust Our Expertise"
          desc="Showcasing the organizations and businesses that rely on our technology, creativity, and engineering to power their digital success."
        />

        {/* Desktop: Grid Layout */}
        {!isMobile ? (
          <div className="hidden lg:block w-full">
            {/* Row 1: 3 columns (larger) */}
            <div className="grid grid-cols-3 gap-8 mb-8">
              {clients.slice(0, 3).map((client, index) => (
                <GridLogo key={client.id} client={client} index={index} size="large" />
              ))}
            </div>
            
            {/* Row 2: 4 columns (smaller) */}
            <div className="grid grid-cols-4 gap-6 mb-8">
              {clients.slice(3, 7).map((client, index) => (
                <GridLogo key={client.id} client={client} index={index + 3} size="small" />
              ))}
            </div>
            
            {/* Row 3: 3 columns (larger) */}
            <div className="grid grid-cols-3 gap-8 mb-8">
              {clients.slice(7, 10).map((client, index) => (
                <GridLogo key={client.id} client={client} index={index + 7} size="large" />
              ))}
            </div>
            
            {/* Row 4: 4 columns (smaller) - if more clients */}
            {clients.length > 10 && (
              <div className="grid grid-cols-4 gap-6">
                {clients.slice(10).map((client, index) => (
                  <GridLogo key={client.id} client={client} index={index + 10} size="small" />
                ))}
              </div>
            )}
          </div>
        ) : (
          /* Mobile: Infinite Marquee */
          <div className="block lg:hidden overflow-hidden py-8">
            <InfiniteMarquee clients={clients} />
          </div>
        )}

        {/* Trust Badge */}
        <motion.div
          className="mt-16 lg:mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-md border"
            style={{
              background: "hsl(var(--card) / 0.5)",
              borderColor: "hsl(var(--border))",
            }}
          >
            <Sparkles className="w-5 h-5" style={{ color: "hsl(var(--primary))" }} />
            <span
              className="text-sm font-semibold"
              style={{ color: "hsl(var(--foreground))" }}
            >
              Trusted by 500+ companies worldwide
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Grid Logo Component (Desktop)
const GridLogo = ({ client, index, size }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Individual floating animation delay
  const floatDelay = index * 0.2;
  const floatDuration = 4 + (index % 3);

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
            <motion.img
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

// Infinite Marquee Component (Mobile)
const InfiniteMarquee = ({ clients }) => {
  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <div className="relative w-full overflow-hidden">
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

// Marquee Logo Component (Mobile)
const MarqueeLogo = ({ client, index }) => {
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
          <img
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

export default Clients;