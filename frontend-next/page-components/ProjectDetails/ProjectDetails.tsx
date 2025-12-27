"use client";

import { useEffect, useMemo, lazy, Suspense } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Script from "next/script";

import "./ProjectDetails.css";

import { useShowByIdQuery } from "../../components/api/project.api";

import {
  HeroImage,
  ProjectInfo,
  OverviewSection,
  FeaturesAchievements,
  TechStackSection,
  ProjectStats,
  ProjectLinks,
} from "../../components/section/ProjectDetailsComponents/ProjectDetailsComponents";

const CommonBanner = lazy(
  () => import("../../components/common/CommonBanner/CommonBanner")
);
const ContactCTA = lazy(
  () => import("../../components/common/ContactCTA/ContactCTA")
);



export default function ProjectDetails() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const {data, isLoading, error} = useShowByIdQuery(id)  

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  const projects = useMemo(() => data?.details ? { ...data.details, id: data.details._id } : null, [data]);

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
            Error loading case study
          </h2>
          <Link href="/case-studies" className="text-primary hover:underline">
            ← Back to Case Studies
          </Link>
        </div>
      </div>
    );
  }

   // ✅ Not Found (after loading is complete)
   if (!projects) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2
            className="text-2xl font-bold mb-4"
            style={{ color: "hsl(var(--foreground))" }}
          >
            Project Not Found
          </h2>
          <Link href="/portfolio" className="text-primary hover:underline">
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  const canonicalUrl = `https://bleedingtech.com.np/project-details?slug=${projects.slug}&id=${projects.id}`;
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Portfolio", href: "/portfolio" },
    { label: projects.title },
  ];

  // Project JSON-LD for SEO
  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: projects.title,
    description: projects.description,
    url: canonicalUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    about: projects.category,
    image: [projects.image],
    publisher: {
      "@type": "Organization",
      name: "Bleeding Tech",
      url: "https://bleedingtech.com.np",
      logo: {
        "@type": "ImageObject",
        url: "https://bleedingtech.com.np/logo.png",
      },
    },
    keywords: projects.tech.join(", "),
    workExample: {
      "@type": "CreativeWork",
      name: projects.title,
      description: projects.subtitle,
    },
  };

  return (
    <div className="min-h-screen">
      {/* Project JSON-LD */}
      <Script
        id={`project-jsonld-${projects.id}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />

      {/* Hero Banner */}
      <Suspense fallback={null}>
        <CommonBanner
          title={projects.title}
          slogan={projects.subtitle}
          breadcrumbs={breadcrumbs}
        />
      </Suspense>

      {/* Back Button */}
      <div className="container mx-auto px-6 lg:px-12 py-6">
        <button
          type="button"
          onClick={() => router.push("/portfolio")}
          className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
          style={{ color: "hsl(var(--muted-foreground))" }}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio</span>
        </button>
      </div>

      {/* Hero Image */}
      <HeroImage project={projects} />

      {/* Project Info Bar */}
      <ProjectInfo project={projects} />

      {/* Overview Section */}
      <OverviewSection project={projects} />

      {/* Project Stats */}
      <ProjectStats project={projects} />

      {/* Features & Achievements */}
      <FeaturesAchievements project={projects} />

      {/* Tech Stack */}
      <TechStackSection project={projects} />

      {/* Project Links */}
      <ProjectLinks project={projects} />

      {/* CTA */}
      <Suspense fallback={null}>
        <ContactCTA />
      </Suspense>
    </div>
  );
}

