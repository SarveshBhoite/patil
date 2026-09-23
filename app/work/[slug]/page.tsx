import { notFound } from "next/navigation";
import { Metadata } from "next";
import { CASE_STUDIES } from "@/lib/constants";
import CaseStudyDetailClient from "./CaseStudyDetailClient";

// Pre-render the demo pages
export function generateStaticParams() {
  return CASE_STUDIES.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const study = CASE_STUDIES.find((c) => c.slug === slug);
  
  if (!study) {
    return { title: "Project Not Found | LeadSpire Digital" };
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://leadspire.digital";
  const url = `${baseUrl}/work/${study.slug}`;

  return {
    title: `${study.title} | LeadSpire Digital`,
    description: study.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${study.title} | LeadSpire Digital`,
      description: study.description,
      type: "article",
      url: url,
    },
    twitter: {
      card: "summary_large_image",
      title: `${study.title} | LeadSpire Digital`,
      description: study.description,
    },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = CASE_STUDIES.find((c) => c.slug === slug);
  
  if (!study) {
    notFound();
  }

  // Find next project
  const currentIndex = CASE_STUDIES.findIndex((c) => c.slug === slug);
  const nextProject = CASE_STUDIES[(currentIndex + 1) % CASE_STUDIES.length];

  return <CaseStudyDetailClient study={study} nextProject={nextProject} />;
}
