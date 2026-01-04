"use client";
import { motion,useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Calendar,
    Clock,
    User,
    Tag,
    Eye,
    Heart,
    Bookmark,
    Facebook,
    Twitter,
    Linkedin,
    Copy,
    CheckCircle, 
} from "lucide-react";
import Image from "next/image";

// Helper function to decode HTML entities
const decodeHTMLEntities = (text: string): string => {
  const textarea = document.createElement('textarea');
  textarea.innerHTML = text;
  return textarea.value;
};

type Blog = {
    title: string;
    category: string;
    authorName: string;
    authorAvatar: string;
    authorRole: string;
    authorBio: string;
    date: string;
    readTime: string;
    heroImage: string;
    content: string;
    tags: string[];
    views: number;
    likes: number;
};
type BlogProps = {
    blog: Blog;
    liked: boolean;
    setLiked: (liked: boolean) => void;
    saved: boolean;
    setSaved: (saved: boolean) => void;
    copied: boolean;
    handleCopyLink: () => void;
};

export const HeroImage = ({ blog }: BlogProps) => {
    return (
      <section className="blog-detail-hero">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            className="hero-image-wrapper"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image src={blog.heroImage} alt={blog.title} className="hero-image" />
            <div className="hero-image-overlay" />
            <span className="hero-category">{blog.category}</span>
          </motion.div>
        </div>
      </section>
    );
  };
  
  // Meta Info Bar
export  const MetaInfo = ({ blog }: BlogProps) => {
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
              <span>{blog.authorName}</span>
            </div>
            <div className="meta-item">
              <Calendar className="meta-icon" />
              <span>{blog.date.slice(0,10)}</span>
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
 export  const ArticleContent = ({ blog, liked, setLiked, saved, setSaved, copied, handleCopyLink }: BlogProps) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  
    useEffect(() => {
      if (inView) controls.start("visible");
    }, [controls, inView]);

    // Decode HTML entities in the content
    const decodedContent = decodeHTMLEntities(blog.content);
  
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
              dangerouslySetInnerHTML={{ __html: decodedContent }}
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
export   const AuthorSection = ({ blog }: BlogProps) => {
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
            <Image
              src={blog.authorAvatar}
              alt={blog.authorName}
              className="author-avatar"
            />
            <div className="author-info">
              <span className="author-label">Written by</span>
              <h3 className="author-name">{blog.authorName}</h3>
              <span className="author-role">{blog.authorRole}</span>
              <p className="author-bio">{blog.authorBio}</p>
            </div>
          </motion.div>
        </div>
      </section>
    );
  };
