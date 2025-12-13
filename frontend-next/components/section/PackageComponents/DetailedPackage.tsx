"use client";
import { useState, useEffect,lazy } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { packageCategories } from "../../../src/data/data";
const CategoryTab = lazy(() => import ("./CategoryTab"));
const PackageCard = lazy(() => import ("./PackageCard"));
import { Sparkles,ArrowRight,} from "lucide-react";
import "./DetailedPackage.css";

const DetailedPackage = () => {
  const [activeCategory, setActiveCategory] = useState("digital-marketing");
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const activeData = packageCategories.find((cat) => cat.id === activeCategory);

  return (
    <section
      ref={ref}
      className="detailed-package-section"
      style={{
        background:
          "linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--bg-foreground) / 0.8) 100%)",
      }}
    >
      {/* Background Elements */}
      <div className="">
        <motion.div
          className="detailed-package-glow"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="detailed-package-grid" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          className="detailed-package-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div className="detailed-package-badge">
            <Sparkles className="w-4 h-4" />
            <span>Pricing & Packages</span>
          </motion.div>

          <h2 className="detailed-package-title">
            Our{" "}
            <span className="detailed-package-title-accent">Packages</span>
          </h2>

          <p className="detailed-package-subtitle">
            Flexible, scalable plans tailored to every stage of digital growth.
          </p>

          <motion.div
            className="detailed-package-underline"
            initial={{ width: 0, opacity: 0 }}
            animate={inView ? { width: 80, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="package-categories-container"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <div className="package-categories-tabs">
            {packageCategories.map((category) => (
              <CategoryTab
                key={category.id}
                category={category}
                isActive={activeCategory === category.id}
                onClick={() => setActiveCategory(category.id)}
              />
            ))}
          </div>
        </motion.div>

        {/* Package Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="package-cards-grid"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {activeData?.packages.map((pkg, index) => (
              <PackageCard
                key={pkg.tier}
                pkg={pkg}
                index={index.toString()}
                categoryColor={activeData.color}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Comparison CTA */}
        <motion.div
          className="package-comparison-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="comparison-cta-content">
            <h3 className="comparison-cta-title">Need Help Choosing?</h3>
            <p className="comparison-cta-text">
              Our team can help you find the perfect package for your business needs.
            </p>
          </div>
          <motion.button
            className="comparison-cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
           <Link href ="/contact-us">Schedule a Consultation</Link>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
export default DetailedPackage;
