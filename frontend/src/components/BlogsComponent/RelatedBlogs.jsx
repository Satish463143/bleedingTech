import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ArrowLeft, Calendar, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import "./RelatedBlogs.css";

// Sample related blogs data
const allBlogs = [
  {
    id: 1,
    slug: "how-to-scale-your-business-with-digital-transformation",
    title: "How to Scale Your Business with Digital Transformation",
    excerpt: "Discover proven strategies for leveraging technology to accelerate growth.",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
    category: "Business",
    date: "Dec 8, 2024",
    readTime: "8 min",
  },
  {
    id: 2,
    slug: "the-future-of-web-development-trends-2025",
    title: "The Future of Web Development: Trends to Watch in 2025",
    excerpt: "Explore the technologies that will shape web development in the coming year.",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
    category: "Technology",
    date: "Dec 5, 2024",
    readTime: "6 min",
  },
  {
    id: 3,
    slug: "mastering-ui-ux-design-principles",
    title: "Mastering UI/UX Design Principles for Better Conversions",
    excerpt: "Learn how thoughtful design decisions can dramatically improve user engagement.",
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop",
    category: "Design",
    date: "Dec 2, 2024",
    readTime: "10 min",
  },
  {
    id: 4,
    slug: "building-scalable-mobile-apps",
    title: "Building Scalable Mobile Apps: Architecture Best Practices",
    excerpt: "A comprehensive guide to building mobile applications that can handle growth.",
    thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
    category: "Development",
    date: "Nov 28, 2024",
    readTime: "12 min",
  },
  {
    id: 5,
    slug: "seo-strategies-that-actually-work",
    title: "SEO Strategies That Actually Work in 2024",
    excerpt: "Cut through the noise and focus on SEO tactics that deliver real results.",
    thumbnail: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=400&h=250&fit=crop",
    category: "Marketing",
    date: "Nov 25, 2024",
    readTime: "9 min",
  },
  {
    id: 6,
    slug: "cloud-architecture-patterns",
    title: "Cloud Architecture Patterns for Modern Applications",
    excerpt: "Explore cloud-native design patterns for resilient applications.",
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop",
    category: "Cloud",
    date: "Nov 20, 2024",
    readTime: "11 min",
  },
];

const RelatedBlogs = ({ currentBlogId, category }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Filter related blogs (same category, excluding current)
  const relatedBlogs = allBlogs.filter(
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

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 350;
      carouselRef.current.scrollBy({
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
          {relatedBlogs.map((blog, index) => (
            <RelatedBlogCard key={blog.id} blog={blog} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Related Blog Card
const RelatedBlogCard = ({ blog, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blogs-details/${blog.slug}/${blog.id}`);
  };

  return (
    <motion.article
      className="related-card"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {/* Image */}
      <div className="related-card-image">
        <motion.img
          src={blog.thumbnail}
          alt={blog.title}
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          className="related-card-overlay"
          animate={{ opacity: isHovered ? 0.3 : 0 }}
        />
        <span className="related-card-category">{blog.category}</span>
      </div>

      {/* Content */}
      <div className="related-card-content">
        {/* Meta */}
        <div className="related-card-meta">
          <span>
            <Calendar className="w-3.5 h-3.5" />
            {blog.date}
          </span>
          <span>
            <Clock className="w-3.5 h-3.5" />
            {blog.readTime}
          </span>
        </div>

        {/* Title */}
        <motion.h3
          className="related-card-title"
          animate={{
            color: isHovered ? "hsl(var(--primary))" : "hsl(var(--foreground))",
          }}
        >
          {blog.title}
        </motion.h3>

        {/* Excerpt */}
        <p className="related-card-excerpt">{blog.excerpt}</p>

        {/* Read More */}
        <motion.span
          className="related-card-link"
          animate={{ x: isHovered ? 5 : 0 }}
        >
          Read More
          <ArrowRight className="w-4 h-4" />
        </motion.span>
      </div>

      {/* Glow Effect */}
      <motion.div
        className="related-card-glow"
        animate={{ opacity: isHovered ? 0.4 : 0 }}
      />
    </motion.article>
  );
};

export default RelatedBlogs;
