"use client";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/navigation";
import { ArrowRight, Calendar, Clock, Eye, Heart, Star } from "lucide-react";
import "./FeaturedBlog.css";
import { useListAllQuery } from '../../api/blog.api';
import Image from "next/image";

// Get the featured blog from blogs data


const FeaturedBlog = () => {
  const MotionImage = motion(Image);
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();
  const {data, error, isLoading} = useListAllQuery({ page: 1, limit: 9999, search: '' });
  const blogs = data?.details || [];
  const featuredBlog = blogs.find((blog: any) => blog.isFeatured === true) || blogs[0];
  console.log(featuredBlog);


  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);


  // Show loading or empty state if no featured blog
  if (isLoading) {
    return <div className="text-center py-20">Loading...</div>;
  }

  if (!featuredBlog) {
    return null;
  }

  return (
    <section ref={ref} className="featured-blog-section">
      {/* Background */}
      <div className="featured-blog-bg">
        <div className="featured-blog-grid" />
        <motion.div
          className="featured-blog-orb"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          className="featured-blog-header"
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          <div className="featured-badge">
            <Star className="w-4 h-4" />
            <span>Featured Article</span>
          </div>
          <h2 className="featured-section-title">Editor's Pick</h2>
        </motion.div>

        {/* Featured Card */}
        <motion.article
          className="featured-blog-card"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => router.push(`/blogs-details?slug=${featuredBlog?.slug}&id=${featuredBlog?._id}`)}
        >
          {/* Glow Effect */}
          <motion.div
            className="featured-card-glow"
            animate={{ opacity: isHovered ? 0.5 : 0 }}
          />

          {/* Image Section */}
          <div className="featured-card-image">
            <MotionImage
              src={featuredBlog?.thumbnail}
              alt={featuredBlog?.title}
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.6 }}
              className="featured-card-image-image"
            />
            <motion.div
              className="featured-image-overlay"
              animate={{ opacity: isHovered ? 0.4 : 0.2 }}
            />
            
            {/* Category Badge */}
            <span className="featured-category-badge">{featuredBlog?.category}</span>
            
            {/* Featured Label */}
            <div className="featured-label">
              <Star className="w-4 h-4" />
              <span>Featured</span>
            </div>
          </div>

          {/* Content Section */}
          <div className="featured-card-content">
            {/* Meta */}
            <div className="featured-meta">
              <span className="featured-date">
                <Calendar className="w-4 h-4" />
                {featuredBlog?.date}
              </span>
              <span className="featured-separator">•</span>
              <span className="featured-read-time">
                <Clock className="w-4 h-4" />
                {featuredBlog?.readTime}
              </span>
            </div>

            {/* Title */}
            <motion.h3
              className="featured-title"
              animate={{
                color: isHovered ? "hsl(var(--primary))" : "hsl(var(--foreground))",
              }}
            >
              {featuredBlog?.title}
            </motion.h3>

            {/* Subtitle */}
            <p className="featured-subtitle">{featuredBlog?.subtitle}</p>

            {/* Decorative Line */}
            <motion.div
              className="featured-line"
              animate={{ scaleX: isHovered ? 1 : 0.5 }}
            />

            {/* Excerpt */}
            <p className="featured-excerpt">{featuredBlog?.excerpt}</p>

            {/* Tags */}
            <div className="featured-tags">
              {featuredBlog?.tags?.map((tag: string, index: number) => (
                <span key={index} className="featured-tag">
                  {tag}
                </span>
              ))}
            </div>

            {/* Footer */}
            <div className="featured-footer">
              {/* Author */}
              <div className="featured-author">
                <Image
                  src={featuredBlog?.authorAvatar}
                  alt={featuredBlog?.authorName}
                  className="author-avatar"
                />
                <div>
                  <span className="author-name">{featuredBlog?.authorName}</span>
                  <span className="author-role">{featuredBlog?.authorRole}</span>
                </div>
              </div>

              {/* Stats & Button */}
              <div className="featured-actions">
                <div className="featured-stats">
                  <span className="featured-stat">
                    <Eye className="w-4 h-4" />
                    {featuredBlog?.views?.toLocaleString() || 0}
                  </span>
                  <span className="featured-stat">
                    <Heart className="w-4 h-4" />
                    {featuredBlog?.likes || 0}
                  </span>
                </div>

                <motion.button
                  className="featured-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    router.push(`/blogs-details?slug=${featuredBlog?.slug}&id=${featuredBlog?._id}`);
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </div>

          {/* Accent Border */}
          <motion.div
            className="featured-accent"
            animate={{ scaleX: isHovered ? 1 : 0.3 }}
          />
        </motion.article>
      </div>
    </section>
  );
};

export default FeaturedBlog;
