"use client";

import { useState } from "react";
import { motion, useMotionValue, useTransform, type Variants } from "framer-motion";
import { Sparkles, ExternalLink, FileText, Check, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const MotionImage = motion(Image);

type Project = {
  id?: number | string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  features: string[];
  liveLink: string;
  caseStudyLink: string; // can be "/case-study-detail/slug/id" or external
};

type Props = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: Props) {
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
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

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.08,
      },
    },
  };

  return (
    <motion.div
      className="relative group"
      variants={cardVariants}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="absolute -inset-2 rounded-3xl transition-opacity duration-500 blur-2xl -z-10"
        style={{
          background: `radial-gradient(circle, rgb(59, 130, 246, 0.4), transparent 70%)`,
          opacity: isHovered ? 1 : 0,
        }}
      />

      <motion.div
        className="relative overflow-hidden rounded-3xl backdrop-blur-xl border"
        style={{
          background:
            "linear-gradient(135deg, hsl(var(--card) / 0.9), hsl(var(--card) / 0.6))",
          borderColor: "hsl(var(--border))",
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ borderColor: "rgb(59, 130, 246, 0.4)" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, rgb(59, 130, 246, 0.4), transparent 60%)`,
            mixBlendMode: "overlay",
          }}
        />

        <div className="relative h-64 overflow-hidden">
          <MotionImage
            src={project.image}
            alt={project.title}
            priority={true}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            width={600}
            height={400}
          />

          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(180deg, transparent 0%, hsl(var(--card)) 100%)",
            }}
          />
          <motion.div
            className="absolute top-4 right-4 px-3 py-1.5 rounded-full backdrop-blur-md border flex items-center gap-2"
            style={{
              background: "hsl(var(--card) / 0.8)",
              borderColor: "hsl(var(--border))",
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Sparkles className="w-3 h-3" style={{ color: "hsl(var(--primary))" }} />
            <span className="text-xs font-semibold" style={{ color: "hsl(var(--primary))" }}>
              Featured
            </span>
          </motion.div>
        </div>

        <div className="p-6 lg:p-8">
          {project.id ? (
            <Link
              href={`/project-details?slug=${project.title.toLowerCase().replace(/\s+/g, "-")}&id=${project.id}`}
              className="group/title"
            >
              <h3 className="text-2xl font-bold mb-3 leading-tight transition-colors group-hover/title:text-[hsl(var(--primary))]" style={{ color: "hsl(var(--foreground))" }}>
                {project.title}
              </h3>
            </Link>
          ) : (
            <h3 className="text-2xl font-bold mb-3 leading-tight" style={{ color: "hsl(var(--foreground))" }}>
              {project.title}
            </h3>
          )}

          <p className="text-sm leading-relaxed mb-5" style={{ color: "hsl(var(--muted-foreground))" }}>
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-5">
            {project.tech.map((tech, i) => (
              <motion.span
                key={i}
                className="px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md border"
                style={{
                  background: "hsl(var(--muted) / 0.3)",
                  borderColor: "hsl(var(--border))",
                  color: "hsl(var(--foreground))",
                }}
                whileHover={{
                  scale: 1.05,
                  borderColor: "hsl(var(--primary))",
                  background: "hsl(var(--primary) / 0.1)",
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>

          <div className="mb-6 space-y-2">
            {project.features.map((feature, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-2"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0"
                  style={{ background: "hsl(var(--primary) / 0.1)" }}
                >
                  <Check className="w-3 h-3" style={{ color: "hsl(var(--primary))" }} />
                </div>
                <span className="text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {project.id ? (
              <Link
                href={`/project-details?slug=${project.title.toLowerCase().replace(/\s+/g, "-")}&id=${project.id}`}
                className="group/btn flex-1 min-w-[140px] px-5 py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
                style={{
                  background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary-accent)))",
                  color: "white",
                }}
              >
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                View Details
              </Link>
            ) : (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer group/btn flex-1 min-w-[140px] px-5 py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
                style={{
                  background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary-accent)))",
                  color: "white",
                }}
              >
                <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                View Live
              </a>
            )}

            {project.liveLink && project.liveLink !== "#" && project.id && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer group/btn flex-1 min-w-[120px] px-4 py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 border backdrop-blur-md transition-all duration-300"
                style={{
                  borderColor: "hsl(var(--border))",
                  color: "hsl(var(--foreground))",
                  background: "hsl(var(--background) / 0.5)",
                }}
              >
                <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                Live
              </a>
            )}

            {project.caseStudyLink && project.caseStudyLink !== "#" && (
              <motion.a
                href={project.caseStudyLink}
                className="group/btn flex-1 min-w-[120px] px-4 py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 border backdrop-blur-md"
                style={{
                  borderColor: "hsl(var(--border))",
                  color: "hsl(var(--foreground))",
                  background: "hsl(var(--background) / 0.5)",
                }}
                whileHover={{
                  scale: 1.03,
                  borderColor: "hsl(var(--primary))",
                  background: "hsl(var(--primary) / 0.05)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                <FileText className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                Case Study
              </motion.a>
            )}
          </div>
        </div>

        <motion.div
          className="absolute bottom-0 right-0 w-32 h-32 opacity-20 pointer-events-none"
          style={{
            background: `radial-gradient(circle at bottom right, rgb(59, 130, 246, 0.4), transparent 70%)`,
          }}
        />
      </motion.div>
    </motion.div>
  );
}
