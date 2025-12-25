"use client";

import { useEffect, useMemo, lazy, Suspense } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Script from "next/script";

import "./ProjectDetails.css";

import { projects } from "../../src/data/data";

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

// ✅ Infer type from your data (best for production + no mismatch)
type Project = (typeof projects)[number];

// ✅ Type guard: ensures project is NOT null/undefined
function isProject(value: Project | undefined | null): value is Project {
  return Boolean(value);
}

export default function ProjectDetails() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const slug = searchParams.get('slug');
  const idStr = searchParams.get('id');

  const projectId = useMemo(() => {
    const n = Number(idStr);
    return Number.isFinite(n) ? n : null;
  }, [idStr]);

  // ✅ compute project from params (no extra state needed)
  const foundProject = useMemo(() => {
    if (projectId === null) return undefined;
    return projects.find((p) => Number(p.id) === projectId);
  }, [projectId]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [projectId, slug]);

  // ✅ Not Found
  if (!isProject(foundProject)) {
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

  // ✅ project is guaranteed correct + non-null
  const project = foundProject;

  // Generate slug from title if not present (for URL compatibility)
  const projectSlug =
    slug || project.title.toLowerCase().replace(/\s+/g, "-");

  const canonicalUrl = `https://bleedingtech.com.np/project-details?slug=${projectSlug}&id=${project.id}`;
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Portfolio", href: "/portfolio" },
    { label: project.title },
  ];

  // Project JSON-LD for SEO
  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    url: canonicalUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    about: project.category,
    image: [project.image],
    publisher: {
      "@type": "Organization",
      name: "Bleeding Tech",
      url: "https://bleedingtech.com.np",
      logo: {
        "@type": "ImageObject",
        url: "https://bleedingtech.com.np/logo.png",
      },
    },
    keywords: project.tech.join(", "),
    workExample: {
      "@type": "CreativeWork",
      name: project.title,
      description: project.subtitle,
    },
  };

  return (
    <div className="min-h-screen">
      {/* Project JSON-LD */}
      <Script
        id={`project-jsonld-${project.id}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />

      {/* Hero Banner */}
      <Suspense fallback={null}>
        <CommonBanner
          title={project.title}
          slogan={project.subtitle}
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
      <HeroImage project={project} />

      {/* Project Info Bar */}
      <ProjectInfo project={project} />

      {/* Overview Section */}
      <OverviewSection project={project} />

      {/* Project Stats */}
      <ProjectStats project={project} />

      {/* Features & Achievements */}
      <FeaturesAchievements project={project} />

      {/* Tech Stack */}
      <TechStackSection project={project} />

      {/* Project Links */}
      <ProjectLinks project={project} />

      {/* CTA */}
      <Suspense fallback={null}>
        <ContactCTA />
      </Suspense>
    </div>
  );
}

