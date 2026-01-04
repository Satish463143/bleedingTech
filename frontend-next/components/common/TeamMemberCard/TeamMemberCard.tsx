"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { Linkedin, Github, Mail, Instagram } from "lucide-react";
import Image from "next/image";

type Member = {
  id: number;
  name: string;
  position: string;
  tagline: string;
  image: string 
  linkedin?: string;
  instagram?: string;
  github?: string;
  email?: string;
};

type Props = {
  member: Member;
  index: number;
};

const variants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function TeamMemberCard({ member, index }: Props) {
  const [isHovered, setIsHovered] = useState(false);
  const MotionImage = motion(Image);

  return (
    <motion.div
      className="relative"
      custom={index}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute -inset-8 rounded-[3rem] blur-3xl -z-10"
        style={{
          background: `radial-gradient(circle, rgb(59, 130, 246, 0.5), transparent 70%)`,
        }}
        animate={{
          opacity: isHovered ? 0.8 : 0.4,
          scale: isHovered ? 1.2 : 1,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Main Card */}
      <motion.div
        className="relative p-8 lg:p-12 rounded-[2.5rem] backdrop-blur-xl border overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, hsl(var(--card) / 0.9), hsl(var(--card) / 0.6))",
          borderColor: "hsl(var(--border))",
        }}
        animate={{ y: isHovered ? -8 : 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        {/* Gradient overlay */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, rgb(59, 130, 246, 0.5), transparent 60%)`,
            mixBlendMode: "overlay",
          }}
          animate={{ opacity: isHovered ? 0.3 : 0.1 }}
          transition={{ duration: 0.3 }}
        />

        {/* Top accent line */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[3px]"
          style={{
            background: `linear-gradient(90deg, transparent, rgb(59, 130, 246, 0.5), transparent)`,
          }}
          animate={{ opacity: isHovered ? 1 : 0.5 }}
          transition={{ duration: 0.3 }}
        />

        {/* Content */}
        <div className="relative flex flex-col md:flex-row items-center gap-8 lg:gap-12">
          {/* Image Container */}
          <motion.div
            className="relative flex-shrink-0"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            {/* Rotating ring */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: `linear-gradient(135deg, rgb(59, 130, 246, 0.5), transparent)`,
                padding: "4px",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-full h-full rounded-full" style={{ background: "hsl(var(--card))" }} />
            </motion.div>

            {/* Profile Image */}
            <div
              className="relative w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4"
              style={{ borderColor: "hsl(var(--border))" }}
            >
              <MotionImage
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
                animate={{ scale: isHovered ? 1.1 : 1 }}
                transition={{ duration: 0.4 }}
              />

              {/* Image glow overlay */}
              <motion.div
                className="absolute inset-0"
                style={{
                  background: `radial-gradient(circle, rgb(59, 130, 246, 0.5), transparent 70%)`,
                  mixBlendMode: "overlay",
                }}
                animate={{ opacity: isHovered ? 0.4 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-2 -right-2 px-4 py-2 rounded-full backdrop-blur-md border"
              style={{
                background:
                  "linear-gradient(135deg, hsl(var(--card) / 0.9), hsl(var(--card) / 0.7))",
                borderColor: "hsl(var(--border))",
              }}
              animate={{ y: [-2, 2, -2] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <span
                className="text-xs font-bold bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary-accent))] bg-clip-text text-transparent"
                style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
              >
                Core Team
              </span>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <div className="flex-1 text-center md:text-left space-y-4">
            <motion.h3
              className="text-3xl lg:text-4xl font-black"
              style={{ color: "hsl(var(--foreground))" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {member.name}
            </motion.h3>

            <motion.div
              className="inline-block px-4 py-2 rounded-full backdrop-blur-md border"
              style={{
                background:
                  "linear-gradient(135deg, hsl(var(--primary) / 0.1), hsl(var(--primary-accent) / 0.05))",
                borderColor: "hsl(var(--primary) / 0.3)",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-sm lg:text-base font-semibold" style={{ color: "hsl(var(--primary))" }}>
                {member.position}
              </span>
            </motion.div>

            <motion.p
              className="text-lg lg:text-xl leading-relaxed max-w-md mx-auto md:mx-0"
              style={{ color: "hsl(var(--muted-foreground))" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              "{member.tagline}"
            </motion.p>

            <motion.div
              className="flex gap-3 justify-center md:justify-start pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              {member.linkedin && (
                <SocialIcon href={member.linkedin} Icon={Linkedin} color="rgb(59, 130, 246, 0.5)" />
              )}
              {member.instagram && (
                <SocialIcon href={member.instagram} Icon={Instagram} color="rgb(59, 130, 246, 0.5)" />
              )}
              {member.github && (
                <SocialIcon href={member.github} Icon={Github} color="rgb(59, 130, 246, 0.5)" />
              )}
              {member.email && (
                <SocialIcon href={`mailto:${member.email}`} Icon={Mail} color="rgb(59, 130, 246, 0.5)" />
              )}
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-0 right-0 w-32 h-32 opacity-20 pointer-events-none"
          style={{
            background: `radial-gradient(circle at bottom right,rgb(59, 130, 246, 0.5), transparent 70%)`,
          }}
        />
      </motion.div>
    </motion.div>
  );
}

type SocialIconProps = {
  href: string;
  Icon: React.ElementType;
  color: string;
};

function SocialIcon({ href, Icon, color }: SocialIconProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full backdrop-blur-md border flex items-center justify-center"
      style={{ background: "hsl(var(--card) / 0.6)", borderColor: "hsl(var(--border))" }}
      whileHover={{ scale: 1.1, borderColor: color, background: `${color}20` }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon className="w-4 h-4" style={{ color: "hsl(var(--foreground))" }} />
    </motion.a>
  );
}
