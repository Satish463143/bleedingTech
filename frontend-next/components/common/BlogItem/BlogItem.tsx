"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Calendar, Clock, Eye, Heart, ArrowRight } from "lucide-react";

type Blog = {
  _id: string | number;
  slug: string;
  thumbnail: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  views: number;
  likes: number;
};

type Props = {
  blog: Blog;
  index: number;
};

const BlogItem = ({ blog, index }: Props) => {
    const [isHovered, setIsHovered] = useState(false);
    const router = useRouter();
    const isEven = index % 2 === 0;
  
    const handleReadMore = () => {
      router.push(`/blogs-details?slug=${blog.slug}&id=${blog._id}`);
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
export default BlogItem