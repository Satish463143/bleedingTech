"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Sparkles } from "lucide-react";
import "./Navbar.css";

// Next.js Link + Framer Motion
const MotionLink = motion(Link);

const navLinks = [
  { name: "About Us", href: "/about-us" },
  { name: "Services", href: "/services" },
  { name: "Package", href: "/packages" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Blogs", href: "/blogs" },
] as const;

type NavName = (typeof navLinks)[number]["name"];

export default function Navbar() {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<NavName | "">("");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Active link derived from pathname (no "location" in Next)
  const activeLink: NavName | "" = useMemo(() => {
    if (!pathname) return "";

    if (pathname === "/") return "";
    if (pathname.startsWith("/blogs")) return "Blogs";
    if (pathname.startsWith("/case-study-detail") || pathname.startsWith("/case-studies"))
      return "Case Studies";
    if (pathname.startsWith("/about-us")) return "About Us";
    if (pathname.startsWith("/services")) return "Services";
    if (pathname.startsWith("/packages")) return "Package";
    if (pathname.startsWith("/portfolio")) return "Portfolio";

    return "";
  }, [pathname]);

  // Theme + scroll
  useEffect(() => {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const initialTheme: "light" | "dark" = savedTheme ?? (isDark ? "dark" : "light");

    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");

    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme: "light" | "dark" = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen((v) => !v);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`navbar-container ${isScrolled ? "scrolled" : ""}`}
      >
        <div className="navbar-content container">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/" className="navbar-logo" aria-label="Go to home">
              <Sparkles className="logo-icon" />
              <span className="logo-text">Bleeding Tech</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="navbar-links-container">
            <div className="navbar-links-pill">
              {navLinks.map((link, index) => {
                const isActive = (hoveredLink || activeLink) === link.name;

                return (
                  <MotionLink
                    key={link.name}
                    href={link.href}
                    className={`nav-link ${activeLink === link.name ? "active" : ""}`}
                    onMouseEnter={() => setHoveredLink(link.name)}
                    onMouseLeave={() => setHoveredLink("")}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        className="nav-link-bg"
                        layoutId="navLinkBg"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </MotionLink>
                );
              })}
            </div>
          </div>

          {/* Right Actions */}
          <div className="navbar-actions">
            {/* Theme Toggle */}
            <motion.button
              type="button"
              className="theme-toggle"
              onClick={toggleTheme}
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                {theme === "light" ? (
                  <motion.div
                    key="moon"
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 180, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Moon size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 180, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Sun size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Contact Us Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact-us" className="btn-signup">
                Contact Us
              </Link>
            </motion.div>

            {/* Mobile Menu Toggle */}
            <motion.button
              type="button"
              className="mobile-menu-toggle"
              onClick={toggleMobileMenu}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle mobile menu"
            >
              <motion.div
                className="menu-icon-circle"
                animate={isMobileMenuOpen ? { rotate: 90 } : { rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.span
                  className="menu-dot"
                  animate={isMobileMenuOpen ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
                />
                <motion.span
                  className="menu-dot"
                  animate={isMobileMenuOpen ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
                  transition={{ delay: 0.05 }}
                />
                <motion.span
                  className="menu-dot"
                  animate={isMobileMenuOpen ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                />
                <motion.div
                  className="menu-close-icon"
                  animate={
                    isMobileMenuOpen
                      ? { scale: 1, opacity: 1, rotate: 0 }
                      : { scale: 0, opacity: 0, rotate: -90 }
                  }
                />
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="mobile-menu-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMobileMenu}
            />

            <motion.div
              className="mobile-menu"
              initial={{ scale: 0, opacity: 0, borderRadius: "100%" }}
              animate={{ scale: 1, opacity: 1, borderRadius: "0%" }}
              exit={{ scale: 0, opacity: 0, borderRadius: "100%" }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              <div className="mobile_menu_overlay" onClick={toggleMobileMenu} />
              <div className="mobile-menu-content">
                <button type="button" className="mobile-menu-close" onClick={toggleMobileMenu} />

                {navLinks.map((link, index) => (
                  <MotionLink
                    key={link.name}
                    href={link.href}
                    className={`mobile-nav-link ${activeLink === link.name ? "active" : ""}`}
                    onClick={toggleMobileMenu}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                    whileHover={{ scale: 1.05, x: 10 }}
                  >
                    {link.name}
                  </MotionLink>
                ))}

                <div className="mobile-menu-divider" />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/contact-us" className="mobile-btn-signup" onClick={toggleMobileMenu}>
                    Contact Us
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
