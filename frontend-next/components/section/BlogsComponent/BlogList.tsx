"use client";
import React, { useEffect, lazy, Suspense } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./BlogList.css";
import { useListAllQuery } from '../../api/blog.api';

// Lazy load components
const Heading = lazy(() => import("../../common/Heading/Heading"));
const BlogItem = lazy(() => import("../../common/BlogItem/BlogItem"));

// Import blogs data


const BlogList = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const {data, error, isLoading} = useListAllQuery({ page: 1, limit: 9999, search: '' });
  const blogs = data?.details || [];

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
        <Suspense fallback={<div className="text-center py-4">Loading...</div>}>
          <Heading
            head="Latest Articles"
            subhead="From Our"
            title="Blog"
            desc="Stay informed with the latest insights, tutorials, and industry updates from our expert team."
          />
        </Suspense>

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
          <Suspense fallback={<div className="text-center col-span-full">Loading blogs...</div>}>
            {blogs.map((blog: any, index: number) => (
              <BlogItem key={blog._id} blog={blog} index={index} />
            ))}
          </Suspense>
        </motion.div>
      </div>
    </section>
  );
};



export default BlogList;
