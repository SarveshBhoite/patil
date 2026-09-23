import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/cta/CTASection";
import { INDUSTRIES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Industries | LeadSpire Digital",
  description: "Growth systems adapted to different business models, including startups, education, real estate, healthcare, automotive, and local businesses.",
};

export default function IndustriesPage() {
  return (
    <main className="flex-1 w-full flex flex-col">
      <PageHero
        eyebrow="WHO WE HELP"
        title={
          <>
            DIFFERENT BUSINESSES.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
              ONE GROWTH MINDSET.
            </span>
          </>
        }
        description="Every business has a different audience, buying journey, and growth challenge. We adapt our digital strategy, creative execution, and channels around your specific business model—not the other way around."
      />

      <section className="py-24 md:py-32 container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {INDUSTRIES.map((industry) => (
            <Link
              href={`/industries/${industry.slug}`}
              key={industry.id}
              className="group relative flex flex-col bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 hover:border-white/10 p-8 md:p-12 rounded-3xl transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="flex items-center justify-between mb-8 relative z-10">
                <span className="text-sm font-mono text-muted/50">{industry.id}</span>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors duration-300">
                  <ArrowRight className="w-4 h-4 text-muted group-hover:text-white transition-colors" />
                </div>
              </div>
              
              <h2 className="text-2xl font-bold font-display mb-4 relative z-10">{industry.title}</h2>
              <p className="text-muted leading-relaxed mb-8 flex-1 relative z-10">
                {industry.description}
              </p>
              
              <div className="pt-8 border-t border-white/10 relative z-10">
                <div className="text-xs font-semibold tracking-widest text-muted uppercase mb-4">TYPICAL JOURNEY</div>
                <div className="flex flex-wrap gap-2">
                  {industry.journey.map((step, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-muted-foreground whitespace-nowrap">
                        {step}
                      </span>
                      {idx < industry.journey.length - 1 && (
                        <ArrowRight className="w-3 h-3 text-muted/30 shrink-0" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CTASection />
    </main>
  );
}
