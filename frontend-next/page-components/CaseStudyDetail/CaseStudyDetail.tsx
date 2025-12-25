"use client";

import { useEffect, useMemo, useState, lazy, Suspense } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Script from "next/script";

import "./CaseStudyDetail.css";

import { useShowByIdQuery } from "../../components/api/caseStudies.api";


import {
  HeroImage,
  ProjectInfo,
  OverviewSection,
  ChallengeSolution,
  ResultsSection,
  TechSection,
  TestimonialSection,
} from "../../components/common/CaseStudyDetailFile/CaseStudyDetailFile";


const CommonBanner = lazy(
  () => import("../../components/common/CommonBanner/CommonBanner")
);
const ContactCTA = lazy(
  () => import("../../components/common/ContactCTA/ContactCTA")
);


export default function CaseStudyDetail() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const slug = searchParams.get('slug');
  
  
  const {data, isLoading, error} = useShowByIdQuery(id)
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

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

  // Map _id to id for consistency
  const caseStudy = useMemo(() => data?.details ? { ...data.details, id: data.details._id } : null, [data]);

  // ✅ Not Found (after loading is complete)
  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2
            className="text-2xl font-bold mb-4"
            style={{ color: "hsl(var(--foreground))" }}
          >
            Case Study Not Found
          </h2>
          <Link href="/case-studies" className="text-primary hover:underline">
            ← Back to Case Studies
          </Link>
        </div>
      </div>
    );
  }

  // ✅ study is now guaranteed to have data
  const study = caseStudy;

  // Optional: strict slug match (recommended if your caseStudies have slug)
  // if ("slug" in study && slug && study.slug !== slug) { ...not found... }
  const canonicalUrl = `https://bleedingtech.com.np/case-study-detail?slug=${study.slug}&id=${study.id}`;
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Case Studies", href: "/case-studies" },
    { label: study.projectName },
  ];
  // Case Study JSON-LD
  const caseStudyJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: study.projectName,
    description: study.tagline,
    url: canonicalUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    about: study.category,
    genre: study.industry,
    image: [study.heroImage || study.image],
    publisher: {
      "@type": "Organization",
      name: "Bleeding Tech",
      url: "https://bleedingtech.com.np",
      logo: {
        "@type": "ImageObject",
        url: "https://bleedingtech.com.np/logo.png",
      },
    },
    // Optional helpful extra info
    provider: {
      "@type": "Organization",
      name: "Bleeding Tech",
      url: "https://bleedingtech.com.np",
    },
  };

  return (
    <div className="min-h-screen">
      {/* Case Study JSON-LD */}
      <Script
        id={`case-study-jsonld-${study.id}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudyJsonLd) }}
      />
      {/* Hero Banner */}
      <Suspense fallback={null}>
        <CommonBanner
          title={study.projectName}
          slogan={study.tagline}
          breadcrumbs={breadcrumbs}
        />
      </Suspense>

      {/* Back Button */}
      <div className="container mx-auto px-6 lg:px-12 py-6">
        <button
          type="button"
          onClick={() => router.push("/case-studies")}
          className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
          style={{ color: "hsl(var(--muted-foreground))" }}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Case Studies</span>
        </button>
      </div>    

      {(() => {
        return (
          <>
            <HeroImage study={study} />
            <ProjectInfo study={study} />
            <OverviewSection study={study} />
            <ChallengeSolution study={study} />
            <ResultsSection study={study} />
            <TechSection study={study} />
            <TestimonialSection study={study} />
          </>
        );
      })()}

      {/* CTA */}
      <Suspense fallback={null}>
        <ContactCTA />
      </Suspense>
    </div>
  );
}
