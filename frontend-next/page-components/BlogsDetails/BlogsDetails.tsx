"use client";

import { useEffect, useMemo, useState, lazy, Suspense } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import "./BlogsDetails.css";
import { useShowByIdQuery, useLikeBlogMutation, useViewBlogMutation } from "@/components/api/blog.api";


import {
  HeroImage,
  MetaInfo,
  ArticleContent,
  AuthorSection,
} from "../../components/section/BlogsDetails/BlogsDetails";
import Script from "next/script";

const CommonBanner = lazy(
  () => import("../../components/common/CommonBanner/CommonBanner")
);
const RelatedBlogs = lazy(
  () => import("../../components/section/BlogsComponent/RelatedBlogs")
);
const ContactCTA = lazy(
  () => import("../../components/common/ContactCTA/ContactCTA")
);




export default function BlogsDetails() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  
  
  const {data, isLoading, error} = useShowByIdQuery(id)
  const [likeBlog] = useLikeBlogMutation()
  const [viewBlog] = useViewBlogMutation()


  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    
    // Track page view when blog is loaded
    if (id && !isLoading && !error) {
      viewBlog(id).catch(() => {
        // Silently fail - view tracking shouldn't block user experience
      });
    }
  }, [id, isLoading, error, viewBlog]);
  
  // Map _id to id for consistency
  const blog = useMemo(() => data?.details ? { ...data.details, id: data.details._id } : null, [data]);


  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [copied, setCopied] = useState(false);

  // Handle like functionality
  const handleLike = async () => {
    if (!id) return;
    
    try {
      // Check if already liked (from localStorage)
      const likedBlogs = JSON.parse(localStorage.getItem('likedBlogs') || '[]');
      const isAlreadyLiked = likedBlogs.includes(id);
      
      if (isAlreadyLiked) {
        // Already liked, show feedback
        return;
      }
      
      // Call the API
      await likeBlog(id).unwrap();
      
      // Update local state
      setLiked(true);
      
      // Store in localStorage to prevent multiple likes
      likedBlogs.push(id);
      localStorage.setItem('likedBlogs', JSON.stringify(likedBlogs));
    } catch (err) {
      console.error('Failed to like blog:', err);
    }
  };

  // Check if blog is already liked on mount
  useEffect(() => {
    if (id) {
      const likedBlogs = JSON.parse(localStorage.getItem('likedBlogs') || '[]');
      setLiked(likedBlogs.includes(id));
    }
  }, [id]);


  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  // ✅ Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2
            className="text-2xl font-bold mb-4"
            style={{ color: "hsl(var(--foreground))" }}
          >
            Loading...
          </h2>
        </div>
      </div>
    );
  }
  // ✅ Handle error state
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2
            className="text-2xl font-bold mb-4"
            style={{ color: "hsl(var(--foreground))" }}
          >
            Error loading blog
          </h2>
          <Link href="/blogs" className="text-primary hover:underline">
            ← Back to Blogs
          </Link>
        </div>
      </div>
    );
  }
// ✅ Not Found (after loading is complete)
if (!blog) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2
          className="text-2xl font-bold mb-4"
          style={{ color: "hsl(var(--foreground))" }}
        >
          Blog Not Found
        </h2>
        <Link href="/blogs" className="text-primary hover:underline">
          ← Back to Blogs
        </Link>
      </div>
    </div>
  );
}

  // Optional: if you want strict slug match (uncomment if your blog has slug)
  // if ("slug" in blog && slug && blog.slug !== slug) { ... show not found ... }

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blogs" },
    { label: blog.title },
  ];
  const canonicalUrl = `https://bleedingtech.com.np/blogs-details/${blog.slug}/${blog.id}`;

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    alternativeHeadline: blog.subtitle,
    description: blog.excerpt,
    image: [blog.heroImage || blog.thumbnail],
    url: canonicalUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    datePublished: blog.date, // better if you store ISO in future
    dateModified: blog.date,
    author: {
      "@type": "Person",
      name: blog.authorName || "Bleeding Tech",
      jobTitle: blog.authorRole,
      description: blog.authorBio,
      image: blog.authorAvatar,
    },
    publisher: {
      "@type": "Organization",
      name: "Bleeding Tech",
      url: "https://bleedingtech.com.np",
      logo: {
        "@type": "ImageObject",
        url: "https://bleedingtech.com.np/logo.png",
      },
    },
    keywords: Array.isArray(blog.tags) ? blog.tags.join(", ") : undefined,
    articleSection: blog.category,
    isAccessibleForFree: true,
    // optional: "wordCount" if you have it later
  };



  return (
    <div className="min-h-screen">
      {/* Blog JSON-LD */}
      <Script
        id={`blog-jsonld-${blog._id}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <Suspense fallback={null}>
        <CommonBanner title={blog.title} slogan={blog.subtitle} breadcrumbs={breadcrumbs} />
      </Suspense>

      {/* Back Button */}
      <div className="container mx-auto px-6 lg:px-12 py-6">
        <button
          type="button"
          onClick={() => router.push("/blogs")}
          className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
          style={{ color: "hsl(var(--muted-foreground))" }}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Blog</span>
        </button>
      </div>

      {/* Pass all required BlogProps to HeroImage, MetaInfo, and AuthorSection */}
      <HeroImage
        blog={blog}
        liked={liked}
        setLiked={handleLike}
        saved={saved}
        setSaved={setSaved}
        copied={copied}
        handleCopyLink={handleCopyLink}
      />
      <MetaInfo
        blog={blog}
        liked={liked}
        setLiked={handleLike}
        saved={saved}
        setSaved={setSaved}
        copied={copied}
        handleCopyLink={handleCopyLink}
      />

      <ArticleContent
        blog={blog}
        liked={liked}
        setLiked={handleLike}
        saved={saved}
        setSaved={setSaved}
        copied={copied}
        handleCopyLink={handleCopyLink}
      />

      <AuthorSection
        blog={blog}
        liked={liked}
        setLiked={handleLike}
        saved={saved}
        setSaved={setSaved}
        copied={copied}
        handleCopyLink={handleCopyLink}
      />

      <Suspense fallback={null}>
        <RelatedBlogs currentBlogId={blog.id} category={blog.category} />
      </Suspense>

      <Suspense fallback={null}>
        <ContactCTA />
      </Suspense>
    </div>
  );
}
