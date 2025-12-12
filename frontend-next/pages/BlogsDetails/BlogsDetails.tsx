import React, { useEffect, useState,lazy } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft,} from "lucide-react";
const CommonBanner = lazy(() => import ("../../common/CommonBanner/CommonBanner"));
const RelatedBlogs = lazy(() => import ("../../components/BlogsComponent/RelatedBlogs"));
const ContactCTA = lazy(() => import ("../../common/ContactCTA/ContactCTA"));
import { blogs } from "../../assets/dummyData.js/data";
import "./BlogsDetails.css";
import { HeroImage, MetaInfo, ArticleContent, AuthorSection } from "../../components/BlogsDetails/BlogsDetails";


const BlogsDetails = () => {
  const { slug, id } = useParams();
  const [blog, setBlog] = useState(null);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Find blog by id from the blogs array
    const data = blogs.find((b) => b.id === parseInt(id));
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
export default BlogsDetails;
