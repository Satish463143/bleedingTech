import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Calendar, Clock, Eye, Heart } from "lucide-react";
import Heading from "../../common/Heading/Heading";
import "./BlogList.css";

// Sample blog data - will be replaced with API
const blogs = [
  {
    id: 1,
    slug: "how-to-scale-your-business-with-digital-transformation",
    title: "How to Scale Your Business with Digital Transformation",
    excerpt: "Discover proven strategies for leveraging technology to accelerate growth, streamline operations, and stay ahead of the competition in today's digital-first world.",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    category: "Business",
    date: "Dec 8, 2024",
    readTime: "8 min read",
    views: 1250,
    likes: 89,
  },
  {
    id: 2,
    slug: "the-future-of-web-development-trends-2025",
    title: "The Future of Web Development: Trends to Watch in 2025",
    excerpt: "From AI-powered development to edge computing, explore the technologies that will shape the web development landscape in the coming year.",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
    category: "Technology",
    date: "Dec 5, 2024",
    readTime: "6 min read",
    views: 2340,
    likes: 156,
  },
  {
    id: 3,
    slug: "mastering-ui-ux-design-principles",
    title: "Mastering UI/UX Design Principles for Better Conversions",
    excerpt: "Learn how thoughtful design decisions can dramatically improve user engagement, reduce bounce rates, and boost your conversion metrics.",
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
    category: "Design",
    date: "Dec 2, 2024",
    readTime: "10 min read",
    views: 1890,
    likes: 134,
  },
  {
    id: 4,
    slug: "building-scalable-mobile-apps",
    title: "Building Scalable Mobile Apps: Architecture Best Practices",
    excerpt: "A comprehensive guide to building mobile applications that can handle growth, from choosing the right architecture to implementing efficient data management.",
    thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    category: "Development",
    date: "Nov 28, 2024",
    readTime: "12 min read",
    views: 980,
    likes: 67,
  },
  {
    id: 5,
    slug: "seo-strategies-that-actually-work",
    title: "SEO Strategies That Actually Work in 2024",
    excerpt: "Cut through the noise and focus on SEO tactics that deliver real results. From technical optimization to content strategy, here's what matters most.",
    thumbnail: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&h=400&fit=crop",
    category: "Marketing",
    date: "Nov 25, 2024",
    readTime: "9 min read",
    views: 3120,
    likes: 198,
  },
  {
    id: 6,
    slug: "cloud-architecture-patterns-for-modern-apps",
    title: "Cloud Architecture Patterns for Modern Applications",
    excerpt: "Explore cloud-native design patterns that help you build resilient, scalable, and cost-effective applications in AWS, Azure, or GCP.",
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
    category: "Cloud",
    date: "Nov 20, 2024",
    readTime: "11 min read",
    views: 1560,
    likes: 102,
  },
];

const BlogList = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <section ref={ref} className="blog-list-section">
      {/* Animated Background */}
      <div className="blog-list-bg">
        <div className="blog-list-grid" />
        
        <motion.div
          className="blog-list-orb blog-list-orb-1"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="blog-list-orb blog-list-orb-2"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />

        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="blog-list-particle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.1, 0.5, 0.1],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <Heading
          head="Latest Articles"
          subhead="From Our"
          title="Blog"
          desc="Stay informed with the latest insights, tutorials, and industry updates from our expert team."
        />

        {/* Blog Items - Unique Editorial Layout */}
        <motion.div
          className="blog-list-container"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {blogs.map((blog, index) => (
            <BlogItem key={blog.id} blog={blog} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Individual Blog Item - Editorial Style
const BlogItem = ({ blog, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const isEven = index % 2 === 0;

  const handleReadMore = () => {
    navigate(`/blogs-details/${blog.slug}/${blog.id}`);
  };

  return (
    <motion.article
      className={`blog-item ${isEven ? 'blog-item-left' : 'blog-item-right'}`}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleReadMore}
    >
      {/* Decorative Number */}
      <motion.span
        className="blog-item-number"
        animate={{ opacity: isHovered ? 0.15 : 0.05 }}
      >
        {String(index + 1).padStart(2, '0')}
      </motion.span>

      {/* Thumbnail */}
      <motion.div
        className="blog-item-thumbnail"
        animate={{
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ duration: 0.4 }}
      >
        <motion.img
          src={blog.thumbnail}
          alt={blog.title}
          animate={{
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.6 }}
        />
        <motion.div
          className="blog-item-thumbnail-overlay"
          animate={{ opacity: isHovered ? 0.3 : 0 }}
        />
        
        {/* Category Badge on Image */}
        <span className="blog-item-category-badge">{blog.category}</span>
      </motion.div>

      {/* Content */}
      <div className="blog-item-content">
        {/* Meta Info */}
        <div className="blog-item-meta">
          <span className="blog-item-category">{blog.category}</span>
          <span className="blog-item-separator">•</span>
          <span className="blog-item-date">
            <Calendar className="w-3.5 h-3.5" />
            {blog.date}
          </span>
          <span className="blog-item-separator">•</span>
          <span className="blog-item-read-time">
            <Clock className="w-3.5 h-3.5" />
            {blog.readTime}
          </span>
        </div>

        {/* Title */}
        <motion.h3
          className="blog-item-title"
          animate={{
            color: isHovered ? "hsl(var(--primary))" : "hsl(var(--foreground))",
          }}
          transition={{ duration: 0.3 }}
        >
          {blog.title}
        </motion.h3>

        {/* Decorative Line */}
        <motion.div
          className="blog-item-line"
          animate={{
            scaleX: isHovered ? 1 : 0.3,
            opacity: isHovered ? 1 : 0.5,
          }}
          transition={{ duration: 0.4 }}
        />

        {/* Excerpt */}
        <p className="blog-item-excerpt">{blog.excerpt}</p>

        {/* Footer */}
        <div className="blog-item-footer">
          {/* Stats */}
          <div className="blog-item-stats">
            <span className="blog-stat">
              <Eye className="w-4 h-4" />
              {blog.views.toLocaleString()}
            </span>
            <span className="blog-stat">
              <Heart className="w-4 h-4" />
              {blog.likes}
            </span>
          </div>

          {/* Read More Button */}
          <motion.button
            className="blog-item-button"
            onClick={(e) => {
              e.stopPropagation();
              handleReadMore();
            }}
            animate={{
              x: isHovered ? 5 : 0,
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Read More</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <motion.div
        className="blog-item-glow"
        animate={{ opacity: isHovered ? 0.4 : 0 }}
        transition={{ duration: 0.4 }}
      />

      {/* Border Accent */}
      <motion.div
        className="blog-item-accent"
        animate={{
          scaleY: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.article>
  );
};

export default BlogList;
