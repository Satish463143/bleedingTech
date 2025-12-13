"use client";
import React, { useState, useEffect, useRef, lazy, Suspense } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { blogs } from "../../../src/data/data";
import "./RelatedBlogs.css";

// Lazy load RelatedBlogCard
const RelatedBlogCard = lazy(() => import("../../common/RelatedBlogCard/RelatedBlogCard"));

// TypeScript interface for props
interface RelatedBlogsProps {
  currentBlogId: number;
  category?: string;
}

const RelatedBlogs: React.FC<RelatedBlogsProps> = ({ currentBlogId, category }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Filter related blogs (same category, excluding current)
  const relatedBlogs = blogs.filter(
    (blog) => blog.id !== currentBlogId
  ).slice(0, 6);

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const checkScrollButtons = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    window.addEventListener("resize", checkScrollButtons);
    return () => window.removeEventListener("resize", checkScrollButtons);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 350;
      (carouselRef.current as HTMLElement).scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      setTimeout(checkScrollButtons, 300);
    }
  };

  return (
    <section ref={ref} className="related-blogs-section">
      {/* Background */}
      <div className="related-blogs-bg">
        <div className="related-blogs-grid" />
        <motion.div
          className="related-blogs-orb"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          className="related-blogs-header"
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          <div>
            <span className="related-badge">You May Also Like</span>
            <h2 className="related-title">Related Articles</h2>
          </div>

          {/* Navigation Buttons */}
          <div className="carousel-nav">
            <motion.button
              className={`nav-btn ${!canScrollLeft ? 'disabled' : ''}`}
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              whileHover={{ scale: canScrollLeft ? 1.1 : 1 }}
              whileTap={{ scale: canScrollLeft ? 0.9 : 1 }}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <motion.button
              className={`nav-btn ${!canScrollRight ? 'disabled' : ''}`}
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              whileHover={{ scale: canScrollRight ? 1.1 : 1 }}
              whileTap={{ scale: canScrollRight ? 0.9 : 1 }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>

        {/* Carousel */}
        <motion.div
          className="related-carousel"
          ref={carouselRef}
          onScroll={checkScrollButtons}
          initial={{ opacity: 0 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, transition: { duration: 0.6, delay: 0.2 } },
          }}
        >
          <Suspense fallback={<div className="text-center w-full">Loading related blogs...</div>}>
            {relatedBlogs.map((blog, index) => (
              <RelatedBlogCard key={blog.id} blog={blog} index={index} />
            ))}
          </Suspense>
        </motion.div>
      </div>
    </section>
  );
};
export default RelatedBlogs;
