import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Tag,
  Eye,
  Heart,
  Share2,
  Bookmark,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
  CheckCircle,
} from "lucide-react";
import CommonBanner from "../../common/CommonBanner/CommonBanner";
import RelatedBlogs from "../../components/BlogsComponent/RelatedBlogs";
import ContactCTA from "../../common/ContactCTA/ContactCTA";
import "./BlogsDetails.css";

// Sample blog data - will be replaced with API
const blogData = {
  1: {
    id: 1,
    slug: "how-to-scale-your-business-with-digital-transformation",
    title: "How to Scale Your Business with Digital Transformation",
    subtitle: "A strategic guide for modern enterprises",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&h=600&fit=crop",
    shortDescription: "Discover proven strategies for leveraging technology to accelerate growth, streamline operations, and stay ahead of the competition in today's digital-first world.",
    content: `
      <h2>Understanding Digital Transformation</h2>
      <p>Digital transformation is more than just adopting new technologies—it's about fundamentally changing how your business operates and delivers value to customers. In today's rapidly evolving market, businesses that fail to embrace digital transformation risk being left behind.</p>
      
      <p>The key to successful digital transformation lies in understanding that it's a journey, not a destination. It requires a strategic approach that aligns technology investments with business objectives, while also fostering a culture of innovation and continuous improvement.</p>
      
      <h2>Key Pillars of Digital Transformation</h2>
      
      <h3>1. Customer Experience</h3>
      <p>Modern customers expect seamless, personalized experiences across all touchpoints. Digital transformation enables businesses to collect and analyze customer data, understand preferences, and deliver tailored experiences that drive loyalty and growth.</p>
      
      <h3>2. Operational Efficiency</h3>
      <p>Automation and AI-powered solutions can significantly streamline operations, reduce costs, and improve accuracy. From automated customer service to intelligent supply chain management, the opportunities are vast.</p>
      
      <h3>3. Business Model Innovation</h3>
      <p>Digital technologies open doors to entirely new business models. Subscription services, platform economies, and data monetization are just a few examples of how digital transformation can create new revenue streams.</p>
      
      <h3>4. Workforce Enablement</h3>
      <p>Equipping your team with the right digital tools and skills is crucial. This includes not only technology training but also fostering a mindset of adaptability and continuous learning.</p>
      
      <h2>Implementation Strategies</h2>
      <p>Successful digital transformation requires a structured approach:</p>
      
      <ul>
        <li><strong>Assess Your Current State:</strong> Understand where you are today in terms of digital maturity.</li>
        <li><strong>Define Your Vision:</strong> Clearly articulate what digital transformation means for your business.</li>
        <li><strong>Prioritize Initiatives:</strong> Focus on high-impact, achievable projects first.</li>
        <li><strong>Build the Right Team:</strong> Combine internal talent with external expertise.</li>
        <li><strong>Measure and Iterate:</strong> Continuously track progress and adjust your approach.</li>
      </ul>
      
      <h2>Common Challenges and How to Overcome Them</h2>
      <p>Digital transformation isn't without its challenges. Resistance to change, legacy systems, and skill gaps are common obstacles. However, with the right leadership, clear communication, and a patient, systematic approach, these challenges can be overcome.</p>
      
      <blockquote>
        "The only way to win at digital transformation is to out-experiment and out-learn your competition."
      </blockquote>
      
      <h2>Conclusion</h2>
      <p>Digital transformation is not optional—it's imperative for survival and growth in today's business landscape. By taking a strategic, customer-centric approach and investing in the right technologies and talent, your business can not only adapt to the digital age but thrive in it.</p>
    `,
    author: {
      name: "Sarah Mitchell",
      avatar: "https://ui-avatars.com/api/?name=SM&background=3B82F6&color=fff&size=100",
      role: "Digital Strategy Lead",
      bio: "Sarah is a digital transformation expert with over 10 years of experience helping businesses leverage technology for growth.",
    },
    category: "Business",
    tags: ["Digital Transformation", "Business Strategy", "Technology", "Growth"],
    date: "Dec 8, 2024",
    readTime: "8 min read",
    views: 1250,
    likes: 89,
  },
  2: {
    id: 2,
    slug: "the-future-of-web-development-trends-2025",
    title: "The Future of Web Development: Trends to Watch in 2025",
    subtitle: "Emerging technologies shaping the web",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1400&h=600&fit=crop",
    shortDescription: "From AI-powered development to edge computing, explore the technologies that will shape the web development landscape in the coming year.",
    content: `
      <h2>The Evolution of Web Development</h2>
      <p>Web development continues to evolve at a rapid pace. As we look ahead to 2025, several key trends are emerging that will shape how we build and interact with web applications.</p>
      
      <h2>AI-Powered Development</h2>
      <p>Artificial intelligence is revolutionizing the development process itself. From code completion to automated testing, AI tools are making developers more productive than ever.</p>
      
      <h2>Edge Computing and Performance</h2>
      <p>With the rise of edge computing, web applications can now process data closer to users, resulting in faster load times and better user experiences.</p>
      
      <h2>WebAssembly and Beyond</h2>
      <p>WebAssembly continues to mature, enabling high-performance applications that were previously impossible in the browser.</p>
      
      <h2>The Rise of Micro-Frontends</h2>
      <p>Large organizations are increasingly adopting micro-frontend architectures to scale their development teams and improve maintainability.</p>
    `,
    author: {
      name: "Alex Thompson",
      avatar: "https://ui-avatars.com/api/?name=AT&background=8B5CF6&color=fff&size=100",
      role: "Lead Developer",
      bio: "Alex is a full-stack developer passionate about emerging technologies and their impact on web development.",
    },
    category: "Technology",
    tags: ["Web Development", "AI", "Edge Computing", "2025 Trends"],
    date: "Dec 5, 2024",
    readTime: "6 min read",
    views: 2340,
    likes: 156,
  },
};

const BlogsDetails = () => {
  const { slug, id } = useParams();
  const [blog, setBlog] = useState(null);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const data = blogData[id];
    setBlog(data);
    window.scrollTo(0, 0);
  }, [id]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ color: "hsl(var(--foreground))" }}>
            Blog Not Found
          </h2>
          <Link to="/blogs" className="text-primary hover:underline">
            ← Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blogs" },
    { label: blog.title },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <CommonBanner
        title={blog.title}
        slogan={blog.subtitle}
        breadcrumbs={breadcrumbs}
      />

      {/* Back Button */}
      <div className="container mx-auto px-6 lg:px-12 py-6">
        <Link
          to="/blogs"
          className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
          style={{ color: "hsl(var(--muted-foreground))" }}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Blog</span>
        </Link>
      </div>

      {/* Hero Image */}
      <HeroImage blog={blog} />

      {/* Meta Info */}
      <MetaInfo blog={blog} />

      {/* Content */}
      <ArticleContent
        blog={blog}
        liked={liked}
        setLiked={setLiked}
        saved={saved}
        setSaved={setSaved}
        copied={copied}
        handleCopyLink={handleCopyLink}
      />

      {/* Author Section */}
      <AuthorSection blog={blog} />

      {/* Related Blogs */}
      <RelatedBlogs currentBlogId={blog.id} category={blog.category} />

      {/* CTA */}
      <ContactCTA />
    </div>
  );
};

// Hero Image Section
const HeroImage = ({ blog }) => {
  return (
    <section className="blog-detail-hero">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          className="hero-image-wrapper"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={blog.heroImage} alt={blog.title} className="hero-image" />
          <div className="hero-image-overlay" />
          <span className="hero-category">{blog.category}</span>
        </motion.div>
      </div>
    </section>
  );
};

// Meta Info Bar
const MetaInfo = ({ blog }) => {
  return (
    <section className="blog-detail-meta">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          className="meta-grid"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="meta-item">
            <User className="meta-icon" />
            <span>{blog.author.name}</span>
          </div>
          <div className="meta-item">
            <Calendar className="meta-icon" />
            <span>{blog.date}</span>
          </div>
          <div className="meta-item">
            <Clock className="meta-icon" />
            <span>{blog.readTime}</span>
          </div>
          <div className="meta-item">
            <Eye className="meta-icon" />
            <span>{blog.views.toLocaleString()} views</span>
          </div>
          <div className="meta-item">
            <Heart className="meta-icon" />
            <span>{blog.likes} likes</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Article Content
const ArticleContent = ({ blog, liked, setLiked, saved, setSaved, copied, handleCopyLink }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <section ref={ref} className="blog-detail-content">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="content-grid">
          {/* Main Content */}
          <motion.article
            className="article-body"
            initial={{ opacity: 0, y: 30 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {/* Sidebar */}
          <aside className="article-sidebar">
            {/* Share & Actions */}
            <motion.div
              className="sidebar-card"
              initial={{ opacity: 0, x: 30 }}
              animate={controls}
              variants={{
                visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.3 } },
              }}
            >
              <h4 className="sidebar-title">Share Article</h4>
              <div className="share-buttons">
                <button className="share-btn facebook">
                  <Facebook className="w-4 h-4" />
                </button>
                <button className="share-btn twitter">
                  <Twitter className="w-4 h-4" />
                </button>
                <button className="share-btn linkedin">
                  <Linkedin className="w-4 h-4" />
                </button>
                <button className="share-btn copy" onClick={handleCopyLink}>
                  {copied ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="action-buttons">
                <button
                  className={`action-btn ${liked ? 'active' : ''}`}
                  onClick={() => setLiked(!liked)}
                >
                  <Heart className="w-4 h-4" fill={liked ? "currentColor" : "none"} />
                  <span>{liked ? 'Liked' : 'Like'}</span>
                </button>
                <button
                  className={`action-btn ${saved ? 'active' : ''}`}
                  onClick={() => setSaved(!saved)}
                >
                  <Bookmark className="w-4 h-4" fill={saved ? "currentColor" : "none"} />
                  <span>{saved ? 'Saved' : 'Save'}</span>
                </button>
              </div>
            </motion.div>

            {/* Tags */}
            <motion.div
              className="sidebar-card"
              initial={{ opacity: 0, x: 30 }}
              animate={controls}
              variants={{
                visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.4 } },
              }}
            >
              <h4 className="sidebar-title">Tags</h4>
              <div className="tags-list">
                {blog.tags.map((tag, index) => (
                  <span key={index} className="tag-item">
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </aside>
        </div>
      </div>
    </section>
  );
};

// Author Section
const AuthorSection = ({ blog }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <section ref={ref} className="blog-detail-author">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          className="author-card"
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
        >
          <img
            src={blog.author.avatar}
            alt={blog.author.name}
            className="author-avatar"
          />
          <div className="author-info">
            <span className="author-label">Written by</span>
            <h3 className="author-name">{blog.author.name}</h3>
            <span className="author-role">{blog.author.role}</span>
            <p className="author-bio">{blog.author.bio}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogsDetails;
