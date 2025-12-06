import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin, Navigation } from "lucide-react";
import "./MapSection.css";

const MapSection = ({
  embedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.456518697043!2d85.30903867546856!3d27.70496297618544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a5e0f1bb2b%3A0x6f9a6c7c4b8d0a8b!2sThamel%2C%20Kathmandu%2044600%2C%20Nepal!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus",
  title = "Find Us Here",
  subtitle = "Visit our office in the heart of Kathmandu",
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
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
    <section
      ref={ref}
      className="relative overflow-hidden py-20 lg:py-24"
      style={{
        background:
          "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--bg-foreground) / 0.05) 100%)",
      }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/3 right-1/3 w-[500px] h-[500px] opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background:
              "radial-gradient(circle, hsl(var(--primary) / 0.2), transparent 70%)",
            filter: "blur(100px)",
          }}
        />

        {/* Floating location pins */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-[0.04]"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${10 + Math.random() * 80}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              rotate: [-5, 5, -5],
            }}
            transition={{
              duration: 6 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <MapPin
              className="w-12 h-12"
              style={{ color: "hsl(var(--primary))" }}
            />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-4"
            style={{
              background: "hsl(var(--primary) / 0.1)",
              color: "hsl(var(--primary))",
              border: "1px solid hsl(var(--primary) / 0.2)",
            }}
          >
            <Navigation className="w-4 h-4" />
            Our Location
          </motion.span>
          <h2
            className="text-3xl lg:text-4xl font-bold mb-4"
            style={{ color: "hsl(var(--foreground))" }}
          >
            {title}
          </h2>
          <p
            className="text-base max-w-2xl mx-auto"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            {subtitle}
          </p>
        </motion.div>

        {/* Map Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="relative"
        >
          {/* Glow effect */}
          <motion.div
            className="absolute -inset-4 rounded-3xl blur-3xl -z-10 opacity-30"
            style={{
              background:
                "radial-gradient(circle, hsl(var(--primary) / 0.3), transparent 70%)",
            }}
            animate={{
              opacity: [0.2, 0.4, 0.2],
              scale: [1, 1.02, 1],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          {/* Map Frame */}
          <div
            className="relative rounded-3xl overflow-hidden border"
            style={{
              borderColor: "hsl(var(--border))",
              boxShadow: "0 25px 50px -12px hsl(var(--primary) / 0.15)",
            }}
          >
            {/* Top accent line */}
            <div
              className="absolute top-0 left-0 right-0 h-[3px] z-10"
              style={{
                background:
                  "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--primary-accent)), hsl(var(--primary)))",
              }}
            />

            {/* Map iframe */}
            <div className="relative aspect-[16/9] lg:aspect-[21/9]">
              <iframe
                src={embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location Map"
                className="absolute inset-0 w-full h-full"
              />

              {/* Overlay gradient for blend */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, hsl(var(--background) / 0.1) 0%, transparent 20%, transparent 80%, hsl(var(--background) / 0.2) 100%)",
                }}
              />
            </div>

            {/* Bottom info bar */}
            <motion.div
              className="relative px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 backdrop-blur-md"
              style={{
                background: "hsl(var(--card) / 0.9)",
                borderTop: "1px solid hsl(var(--border))",
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary-accent)))",
                  }}
                >
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: "hsl(var(--foreground))" }}
                  >
                    Bleeding Tech Office
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "hsl(var(--muted-foreground))" }}
                  >
                    Thamel, Kathmandu, Nepal
                  </p>
                </div>
              </div>

              <motion.a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2"
                style={{
                  background: "hsl(var(--primary) / 0.1)",
                  color: "hsl(var(--primary))",
                  border: "1px solid hsl(var(--primary) / 0.3)",
                }}
                whileHover={{
                  scale: 1.05,
                  background: "hsl(var(--primary))",
                  color: "white",
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Navigation className="w-4 h-4" />
                Get Directions
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MapSection;

