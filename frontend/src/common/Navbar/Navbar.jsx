import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Create motion-enabled Link component
const MotionLink = motion.create(Link);

const navLinks = [
    { name: "About Us", href: "/about-us" },
    { name: "Services", href: "/services" },
    { name: "Package", href: "/packages" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Clients", href: "/clients" },
    { name: "Blogs", href: "/blogs" },
];


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [theme, setTheme] = useState("light");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Detect initial theme
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const savedTheme = localStorage.getItem("theme");
    const initialTheme = savedTheme || (isDark ? "dark" : "light");
    
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    }

    // Scroll handler
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", newTheme);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  useEffect(() => {
    if (location.pathname === "/about-us") {
      setActiveLink("About Us");
    } else if (location.pathname === "/services") {
      setActiveLink("Services");
    } else if (location.pathname === "/packages") {
      setActiveLink("Package");
    } else if (location.pathname === "/portfolio") {
      setActiveLink("Portfolio");
    } else if (location.pathname === "/clients") {
      setActiveLink("Clients");
    } else if (location.pathname === "/blogs") {
      setActiveLink("Blogs");
    }
  }, [location.pathname]);

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
          
            <motion.div
              
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/">
                <div className="navbar-logo">
                  <Sparkles className="logo-icon" />

                  <span className="logo-text">Bleeding Tech</span>
                </div>
              </Link>
            </motion.div>
          

          {/* Desktop Navigation */}
          <div className="navbar-links-container">
            <div className="navbar-links-pill">
              {navLinks.map((link, index) => (
                <MotionLink
                  key={link.name}
                  to={link.href}
                  className={`nav-link ${activeLink === link.name ? "active" : ""}`}
                  onMouseEnter={() => setActiveLink(link.name)}
                  onMouseLeave={() => setActiveLink("")}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {link.name}
                  {activeLink === link.name && (
                    <motion.div
                      className="nav-link-bg"
                      layoutId="navLinkBg"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </MotionLink>
              ))}
            </div>
          </div>

          {/* Right Actions */}
          <div className="navbar-actions">
            {/* Theme Toggle */}
            <motion.button
              className="theme-toggle"
              onClick={toggleTheme}
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
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
            <motion.button
              className="btn-signup"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px hsl(var(--glow))" }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/contact-us">Contact Us</Link>
            </motion.button>

            {/* Mobile Menu Toggle - Unique Circular Design */}
            <motion.button
              className="mobile-menu-toggle"
              onClick={toggleMobileMenu}
              whileTap={{ scale: 0.9 }}
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
                  animate={isMobileMenuOpen ? { scale: 1, opacity: 1, rotate: 0 } : { scale: 0, opacity: 0, rotate: -90 }}
                />
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu - Circular Expanding Overlay */}
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
              <div className="mobile_menu_overlay" onClick={toggleMobileMenu}></div>
              <div className="mobile-menu-content">
                <button className="mobile-menu-close" onClick={toggleMobileMenu}>
                  
                </button>
                {navLinks.map((link, index) => (
                  <MotionLink
                    key={link.name}
                    to={link.href}
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

                <motion.button
                  className="mobile-btn-signup"
                  onClick={toggleMobileMenu}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link to="/contact-us">Contact Us</Link>
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
export default Navbar;