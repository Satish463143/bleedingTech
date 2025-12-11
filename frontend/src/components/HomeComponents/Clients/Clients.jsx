import React, { useEffect, useState, lazy } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
const Heading = lazy(() => import ("../../../common/Heading/Heading"));
import { GridLogo, InfiniteMarquee } from "../../../common/ClientsFIles/ClientsFIles";
import { clients } from "../../../assets/dummyData.js/data";
import "./Clients.css";

const Clients = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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
          <div className="block lg:hidden overflow-hidden marquee_height">
            <InfiniteMarquee clients={clients} />
          </div>
        )}

        {/* Trust Badge */}
        <motion.div
          className="mt-10 lg:mt-20 text-center"
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

export default Clients;
