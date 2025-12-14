"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, type Variants } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  ArrowUpRight,
  Sparkles,
  Zap,
} from "lucide-react";
import "./Footer.css";



type SimpleLink = { name: string; href: string };
type Social = { name: string; icon: React.ElementType; href: string; color: string };

export default function Footer() {
  const companyLinks: SimpleLink[] = [
    { name: "About Us", href: "/about-us" },
    { name: "Our Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Clients", href: "/clients" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact-us" },
  ];

  const serviceLinks: SimpleLink[] = [
    { name: "Web Development", href: "#" },
    { name: "App Development", href: "#" },
    { name: "WordPress Development", href: "#" },
    { name: "SEO & Optimization", href: "#" },
    { name: "UI/UX Design", href: "#" },
    { name: "System Design", href: "#" },
    { name: "Digital Marketing", href: "#" },
    { name: "Google/Meta Ads", href: "#" },
  ];

  const quickLinks: SimpleLink[] = [
    { name: "Packages", href: "#packages" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "FAQs", href: "/#faq" },
    { name: "Blog", href: "#blog" },
    { name: "Careers", href: "#careers" },
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms & Conditions", href: "#terms" },
  ];

  const socialLinks: Social[] = [
    { name: "Facebook", icon: Facebook, href: "#", color: "#1877F2" },
    { name: "Instagram", icon: Instagram, href: "#", color: "#E4405F" },
    { name: "LinkedIn", icon: Linkedin, href: "#", color: "#0A66C2" },
    { name: "Twitter", icon: Twitter, href: "#", color: "#1DA1F2" },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <footer className="relative overflow-hidden pb-20 lg:pb-6">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--card) / 0.95) 100%)",
          }}
        />

        <motion.div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-30"
          animate={{ x: [0, 50, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background: "radial-gradient(circle, hsl(var(--primary) / 0.25), transparent 60%)",
            filter: "blur(80px)",
          }}
        />

        <motion.div
          className="absolute -bottom-20 -right-20 w-[500px] h-[500px] rounded-full opacity-25"
          animate={{ x: [0, -40, 0], y: [0, -30, 0], scale: [1.1, 1, 1.1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          style={{
            background:
              "radial-gradient(circle, hsl(var(--primary-accent) / 0.3), transparent 60%)",
            filter: "blur(100px)",
          }}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-20"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{
            background:
              "conic-gradient(from 0deg, hsl(var(--primary) / 0.15), hsl(var(--primary-accent) / 0.1), transparent, hsl(var(--primary) / 0.15))",
            filter: "blur(60px)",
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              hsl(var(--foreground)),
              hsl(var(--foreground)) 1px,
              transparent 1px,
              transparent 40px
            )`,
          }}
        />

        <svg
          className="absolute top-0 left-0 w-full h-24 opacity-50"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,50 C360,100 720,0 1080,50 C1260,75 1350,25 1440,50 L1440,0 L0,0 Z"
            fill="hsl(var(--background))"
            animate={{
              d: [
                "M0,50 C360,100 720,0 1080,50 C1260,75 1350,25 1440,50 L1440,0 L0,0 Z",
                "M0,60 C360,20 720,80 1080,40 C1260,60 1350,40 1440,60 L1440,0 L0,0 Z",
                "M0,50 C360,100 720,0 1080,50 C1260,75 1350,25 1440,50 L1440,0 L0,0 Z",
              ],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>

        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: "hsl(var(--primary))",
              boxShadow: "0 0 6px hsl(var(--glow))",
              top: `${20 + Math.random() * 60}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{ opacity: [0.2, 0.6, 0.2], y: [0, -20, 0] }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-20">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div className="inline-flex items-center gap-3 mb-4" whileHover={{ scale: 1.05 }}>
            <Zap className="w-8 h-8" style={{ color: "hsl(var(--primary))" }} />
            <h2 className="text-3xl lg:text-4xl font-black" style={{ color: "hsl(var(--foreground))" }}>
              Bleeding{" "}
              <span
                className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary-accent))] bg-clip-text text-transparent"
                style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
              >
                Tech
              </span>
            </h2>
          </motion.div>

          <p className="text-sm max-w-md mx-auto" style={{ color: "hsl(var(--muted-foreground))" }}>
            Transforming ideas into digital excellence. We build the future, one pixel at a time.
          </p>
        </motion.div>

        <motion.div
          className="h-[1px] mb-16 relative overflow-hidden"
          style={{ background: "hsl(var(--border))" }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, transparent, hsl(var(--primary)), hsl(var(--primary-accent)), transparent)",
            }}
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2" style={{ color: "hsl(var(--foreground))" }}>
              <span
                className="w-8 h-[2px] rounded-full"
                style={{ background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--primary-accent)))" }}
              />
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((l, i) => (
                <FooterLink key={i} href={l.href} name={l.name} />
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2" style={{ color: "hsl(var(--foreground))" }}>
              <span
                className="w-8 h-[2px] rounded-full"
                style={{ background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--primary-accent)))" }}
              />
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((l, i) => (
                <FooterLink key={i} href={l.href} name={l.name} />
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2" style={{ color: "hsl(var(--foreground))" }}>
              <span
                className="w-8 h-[2px] rounded-full"
                style={{ background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--primary-accent)))" }}
              />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((l, i) => (
                <FooterLink key={i} href={l.href} name={l.name} />
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2" style={{ color: "hsl(var(--foreground))" }}>
              <span
                className="w-8 h-[2px] rounded-full"
                style={{ background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--primary-accent)))" }}
              />
              Contact
            </h3>

            <ul className="space-y-4 mb-8">
              <ContactItem icon={Mail} text="support@bleedingtech.com" href="mailto:support@bleedingtech.com" />
              <ContactItem icon={Phone} text="+977-98XXXXXXXX" href="tel:+97798XXXXXXXX" />
              <ContactItem icon={MapPin} text="Kathmandu, Nepal" href="#" />
            </ul>

            <div className="flex gap-3">
              {socialLinks.map((s, i) => (
                <SocialIcon key={i} icon={s.icon} href={s.href} color={s.color} name={s.name} />
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="h-[1px] mb-8 relative overflow-hidden"
          style={{ background: "hsl(var(--border))" }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        />

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>
            © 2025 <span style={{ color: "hsl(var(--primary))" }}>Bleeding Tech</span>. All Rights Reserved.
          </p>

          <motion.div
            className="flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm"
            style={{ background: "hsl(var(--card) / 0.5)", borderColor: "hsl(var(--border))" }}
            whileHover={{ borderColor: "hsl(var(--primary) / 0.5)", boxShadow: "0 0 20px hsl(var(--glow))" }}
          >
            <Sparkles className="w-4 h-4" style={{ color: "hsl(var(--primary))" }} />
            <span className="text-xs font-medium" style={{ color: "hsl(var(--muted-foreground))" }}>
              Crafted with passion in Nepal
            </span>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}

type FooterLinkProps = { href: string; name: string };

function FooterLink({ href, name }: FooterLinkProps) {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const isExternal =
    href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
  const isHashOnly = href.startsWith("#");
  const hasPathWithHash = href.includes("#") && !isHashOnly && !isExternal;

  const scrollToElement = (id: string, attempts = 0) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    else if (attempts < 20) setTimeout(() => scrollToElement(id, attempts + 1), 100);
  };

  const handleHashNavigation = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!hasPathWithHash) return;

    e.preventDefault();
    const [path, hash] = href.split("#");
    const targetPath = path || "/";
    const hashId = hash || "";

    if (pathname === targetPath) {
      scrollToElement(hashId);
    } else {
      router.push(targetPath);
      setTimeout(() => scrollToElement(hashId), 50);
    }
  };

  const linkContent = (
    <>
      <span className="relative">
        {name}
        <motion.span
          className="absolute bottom-0 left-0 h-[1px] w-full origin-left"
          style={{ background: "hsl(var(--primary))" }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </span>
      <motion.span animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -5 }} transition={{ duration: 0.2 }}>
        <ArrowUpRight className="w-3 h-3" style={{ color: "hsl(var(--primary))" }} />
      </motion.span>
    </>
  );

  const commonMotionProps = {
    className: "group relative inline-flex items-center gap-2 text-sm transition-colors",
    style: { color: "hsl(var(--muted-foreground))" } as React.CSSProperties,
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
    whileHover: { x: 4 },
    transition: { type: "spring" as const, stiffness: 400, damping: 25 },
  };

  return (
    <li>
      {isExternal || isHashOnly ? (
        <motion.a href={href} {...commonMotionProps}>
          {linkContent}
        </motion.a>
      ) : hasPathWithHash ? (
        <motion.a href={href} onClick={handleHashNavigation} {...commonMotionProps}>
          {linkContent}
        </motion.a>
      ) : (        
          <motion.a {...commonMotionProps}>{linkContent}</motion.a>
      )}
    </li>
  );
}

type ContactItemProps = {
  icon: React.ElementType;
  text: string;
  href: string;
};

function ContactItem({ icon: Icon, text, href }: ContactItemProps) {
  return (
    <li>
      <motion.a
        href={href}
        className="flex items-center gap-3 text-sm group"
        style={{ color: "hsl(var(--muted-foreground))" }}
        whileHover={{ x: 4 }}
        transition={{ type: "spring" as const, stiffness: 400, damping: 25 }}
      >
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center backdrop-blur-sm border transition-all duration-300"
          style={{ background: "hsl(var(--card) / 0.5)", borderColor: "hsl(var(--border))" }}
        >
          <Icon
            className="w-4 h-4 transition-colors duration-300 group-hover:text-[hsl(var(--primary))]"
            style={{ color: "hsl(var(--muted-foreground))" }}
          />
        </div>
        <span className="group-hover:text-[hsl(var(--foreground))] transition-colors duration-300">
          {text}
        </span>
      </motion.a>
    </li>
  );
}

type SocialIconProps = {
  icon: React.ElementType;
  href: string;
  color: string;
  name: string;
};

function SocialIcon({ icon: Icon, href, color, name }: SocialIconProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={name}
      className="relative w-10 h-10 rounded-xl flex items-center justify-center backdrop-blur-sm border overflow-hidden"
      style={{
        background: "hsl(var(--card) / 0.5)",
        borderColor: isHovered ? color : "hsl(var(--border))",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.1, y: -3 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring" as const, stiffness: 400, damping: 25 }}
    >
      <motion.div
        className="absolute inset-0"
        style={{ background: color }}
        animate={{ opacity: isHovered ? 0.15 : 0 }}
        transition={{ duration: 0.3 }}
      />
      <Icon
        className="w-4 h-4 relative z-10 transition-colors duration-300"
        style={{ color: isHovered ? color : "hsl(var(--muted-foreground))" }}
      />
    </motion.a>
  );
}
