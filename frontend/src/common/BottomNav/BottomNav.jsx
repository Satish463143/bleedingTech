import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Briefcase, FolderKanban, Package, Mail } from "lucide-react";
import "./BottomNav.css";

const bottomNavLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "Services", href: "/services", icon: Briefcase },
  { name: "Portfolio", href: "/portfolio", icon: FolderKanban },
  { name: "Package", href: "/packages", icon: Package },
  { name: "Contact", href: "/contact-us", icon: Mail },
];

const BottomNav = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeLink, setActiveLink] = useState("Home");
  const location = useLocation();

  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    // Debounce scroll event for performance
    const debouncedScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, 10);
    };

    window.addEventListener("scroll", debouncedScroll);
    return () => {
      window.removeEventListener("scroll", debouncedScroll);
      clearTimeout(timeoutId);
    };
  }, [lastScrollY]);

  // Set active link based on current location
  useEffect(() => {
    if (location.pathname === "/") {
      setActiveLink("Home");
    } else if (location.pathname === "/services") {
      setActiveLink("Services");
    } else if (location.pathname === "/portfolio") {
      setActiveLink("Portfolio");
    } else if (location.pathname === "/packages") {
      setActiveLink("Package");
    } else if (location.pathname === "/contact-us") {
      setActiveLink("Contact");
    }
  }, [location]);

  const handleNavClick = (linkName, href) => {
    setActiveLink(linkName);
    
    // Handle hash navigation for same page
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
          className="bottom-nav-container lg:hidden"
        >
          {/* Glass background with blur */}
          <div className="bottom-nav-background" />

          {/* Navigation items */}
          <div className="bottom-nav-content">
            {bottomNavLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeLink === link.name;

              return (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => handleNavClick(link.name, link.href)}
                  className="bottom-nav-item"
                >
                  <motion.div
                    className="bottom-nav-item-wrapper"
                    whileTap={{ scale: 0.9 }}
                    animate={isActive ? { y: -4 } : { y: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    {/* Active background indicator */}
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

                    {/* Icon container */}
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
                      <Icon className="bottom-nav-icon" strokeWidth={isActive ? 2.5 : 2} />
                      
                      {/* Glow effect for active icon */}
                      {isActive && (
                        <motion.div
                          className="bottom-nav-icon-glow"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                        />
                      )}
                    </motion.div>

                    {/* Label text */}
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

                    {/* Active dot indicator */}
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

          {/* Top border gradient */}
          <motion.div
            className="bottom-nav-border"
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
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
};

export default BottomNav;