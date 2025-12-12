import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import CommonBanner from "../../common/CommonBanner/CommonBanner";
import ContactCTA from "../../common/ContactCTA/ContactCTA";
import { caseStudies } from "../../assets/dummyData.js/data";
import "./CaseStudyDetail.css";
import { HeroImage, ProjectInfo, OverviewSection, ChallengeSolution, ResultsSection, TechSection, TestimonialSection } from "../../common/CaseStudyDetailFile/CaseStudyDetailFile";

const CaseStudyDetail = () => {
  const { slug, id } = useParams();
  const [study, setStudy] = useState(null);

  useEffect(() => {
    // Find case study by id
    const data = caseStudies.find(cs => cs.id === parseInt(id));
    setStudy(data);
    window.scrollTo(0, 0);
  }, [id]);

  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ color: "hsl(var(--foreground))" }}>
            Case Study Not Found
          </h2>
          <Link to="/case-studies" className="text-primary hover:underline">
            ← Back to Case Studies
          </Link>
        </div>
      </div>
    );
  }

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Case Studies", href: "/case-studies" },
    { label: study.projectName },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <CommonBanner
        title={study.projectName}
        slogan={study.tagline}
        breadcrumbs={breadcrumbs}
      />

      {/* Back Button */}
      <div className="container mx-auto px-6 lg:px-12 py-6">
        <Link
          to="/case-studies"
          className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
          style={{ color: "hsl(var(--muted-foreground))" }}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Case Studies</span>
        </Link>
      </div>

      {/* Hero Image */}
      <HeroImage study={study} />

      {/* Project Info */}
      <ProjectInfo study={study} />

      {/* Overview Section */}
      <OverviewSection study={study} />

      {/* Challenge & Solution */}
      <ChallengeSolution study={study} />

      {/* Results */}
      <ResultsSection study={study} />

      {/* Technologies */}
      <TechSection study={study} />

      {/* Testimonial */}
      <TestimonialSection study={study} />

      {/* CTA */}
      <ContactCTA />
    </div>
  );
};
export default CaseStudyDetail;
