"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NewProjectCard from "../../common/NewProjectCard/NewProjectCard";
import "./FullProject.css";
import { useListAllQuery } from "@/components/api/project.api";

const FullProject = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const { data , isLoading, isError } = useListAllQuery({page: 1, limit: 12});
  const projects = data?.details || [];
  console.log(projects);

  // Filter categories
  const categories = [
    "All",
    "Web Development",
    "Mobile Apps",
    "E-Commerce",
    "UI-UX",
    "Custom Systems",
  ];

  // Filter projects
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p:any) => p.category === activeFilter);

      

  return (
    <section
      className="relative overflow-hidden py-20 lg:py-28"
      style={{
        background: "hsl(var(--bg-foreground) / 0.03)",
      }}
      
    >
      {/* Background - Even section style */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] opacity-10"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background:
              "radial-gradient(circle, hsl(var(--primary-accent) / 0.15), transparent 70%)",
            filter: "blur(80px)",
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.012]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10" id="portfolio-section">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-3xl lg:text-4xl font-bold mb-4"
            style={{ color: "hsl(var(--foreground))" }}
          >
            All Projects
          </h2>
          <p
            className="text-base max-w-2xl mx-auto"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            Browse through our complete portfolio of successful projects across various industries.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <FilterTab
              key={category}
              label={category}
              isActive={activeFilter === category}
              onClick={() => setActiveFilter(category)}
            />
          ))}
        </motion.div>

        {/* Projects Grid - Using NewProjectCard */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {filteredProjects.map((project:any, index:number) => (
              <NewProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p style={{ color: "hsl(var(--muted-foreground))" }}>
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

// Filter Tab Component
type FilterTabProps = {
  label: string;
  isActive: boolean;
  onClick: () => void;
}
const FilterTab = ({ label, isActive, onClick }: FilterTabProps) => {
  return (
    <motion.button
      onClick={onClick}
      className="relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300"
      style={{
        background: isActive
          ? "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary-accent)))"
          : "hsl(var(--card) / 0.5)",
        color: isActive ? "white" : "hsl(var(--muted-foreground))",
        border: isActive ? "none" : "1px solid hsl(var(--border))",
        boxShadow: isActive ? "0 8px 25px hsl(var(--glow))" : "none",
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: isActive
          ? "0 12px 35px hsl(var(--glow))"
          : "0 4px 15px hsl(var(--primary) / 0.1)",
      }}
      whileTap={{ scale: 0.98 }}
    >
      {label}
      
      {/* Active indicator line */}
      {isActive && (
        <motion.div
          className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full"
          style={{
            background: "white",
            opacity: 0.5,
          }}
          layoutId="activeFilterIndicator"
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      )}
    </motion.button>
  );
};

export default FullProject;
