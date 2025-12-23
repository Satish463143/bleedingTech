"use client";

import { useEffect, useMemo, useState, lazy, Suspense } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import "./BlogsDetails.css";

import { blogs } from "../../src/data/data";

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

// ✅ Infer Blog type directly from your blogs array
type Blog = (typeof blogs)[number];

// ✅ Type guard: ensures blog is NOT null/undefined
function isBlog(value: Blog | undefined | null): value is Blog {
  return Boolean(value);
}

export default function BlogsDetails() {
  const router = useRouter();
  const params = useParams<{ slug: string; id: string }>();

  const slug = params?.slug;
  const idStr = params?.id;

  const blogId = useMemo(() => {
    const n = Number(idStr);
    return Number.isFinite(n) ? n : null;
  }, [idStr]);

  // ✅ Find blog (can be undefined)
  const foundBlog = useMemo(() => {
    if (blogId === null) return undefined;
    return blogs.find((b) => Number(b.id) === blogId);
  }, [blogId]);

  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [blogId, slug]);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  // ✅ If not found -> Not Found UI
  if (!isBlog(foundBlog)) {
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

  // ✅ After this line, blog is guaranteed NON-NULL and correctly typed
  const blog = foundBlog;

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
      name: blog.author?.name || "Bleeding Tech",
      jobTitle: blog.author?.role,
      description: blog.author?.bio,
      image: blog.author?.avatar,
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
        id={`blog-jsonld-${blog.id}`}
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
        setLiked={setLiked}
        saved={saved}
        setSaved={setSaved}
        copied={copied}
        handleCopyLink={handleCopyLink}
      />
      <MetaInfo
        blog={blog}
        liked={liked}
        setLiked={setLiked}
        saved={saved}
        setSaved={setSaved}
        copied={copied}
        handleCopyLink={handleCopyLink}
      />

      <ArticleContent
        blog={blog}
        liked={liked}
        setLiked={setLiked}
        saved={saved}
        setSaved={setSaved}
        copied={copied}
        handleCopyLink={handleCopyLink}
      />

      <AuthorSection
        blog={blog}
        liked={liked}
        setLiked={setLiked}
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
