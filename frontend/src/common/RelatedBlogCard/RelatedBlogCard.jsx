import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
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
  export default RelatedBlogCard;