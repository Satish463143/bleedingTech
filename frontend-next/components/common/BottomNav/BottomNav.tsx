"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Briefcase, FolderKanban, Package, Mail } from "lucide-react";
import "./BottomNav.css";

const bottomNavLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "Services", href: "/services", icon: Briefcase },
  { name: "Portfolio", href: "/portfolio", icon: FolderKanban },
  { name: "Package", href: "/packages", icon: Package },
  { name: "Contact", href: "/contact-us", icon: Mail },
] as const;

export default function BottomNav() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const pathname = usePathname();

  // Show/hide on scroll
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    const debouncedScroll = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, 10);
    };

    window.addEventListener("scroll", debouncedScroll);
    return () => {
      window.removeEventListener("scroll", debouncedScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [lastScrollY]);

  // Active link based on current route
  const activeLink =
    bottomNavLinks.find((l) => l.href === pathname)?.name ??
    (pathname === "/" ? "Home" : "");

  const handleNavClick = (href: string) => {
    // Optional: smooth-scroll for hash links
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="bottom-nav-container lg:hidden"
        >
          <div className="bottom-nav-background" />

          <div className="bottom-nav-content">
            {bottomNavLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeLink === link.name;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="bottom-nav-item"
                >
                  <motion.div
                    className="bottom-nav-item-wrapper"
                    whileTap={{ scale: 0.9 }}
                    animate={isActive ? { y: -4 } : { y: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="bottomNavActive"
                        className="bottom-nav-active-bg"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}

                    <motion.div
                      className="bottom-nav-icon-container"
                      animate={{
                        scale: isActive ? 1.1 : 1,
                        color: isActive
                          ? "hsl(var(--primary))"
                          : "hsl(var(--muted-foreground))",
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon
                        className="bottom-nav-icon"
                        strokeWidth={isActive ? 2.5 : 2}
                      />

                      {isActive && (
                        <motion.div
                          className="bottom-nav-icon-glow"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                        />
                      )}
                    </motion.div>

                    <motion.span
                      className="bottom-nav-label"
                      animate={{
                        color: isActive
                          ? "hsl(var(--primary))"
                          : "hsl(var(--muted-foreground))",
                        fontWeight: isActive ? 600 : 500,
                        scale: isActive ? 1.05 : 1,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.name}
                    </motion.span>

                    {isActive && (
                      <motion.div
                        className="bottom-nav-active-dot"
                        layoutId="bottomNavDot"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                  </motion.div>
                </Link>
              );
            })}
          </div>

          <motion.div
            className="bottom-nav-border"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
