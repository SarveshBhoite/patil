import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/cta/CTASection";

export const metadata: Metadata = {
  title: "Insights & Strategy | LeadSpire Digital",
  description: "Explore our latest thoughts, frameworks, and strategies on digital growth, performance marketing, and branding.",
};

export default function InsightsPage() {
  return (
    <main className="flex-1 w-full flex flex-col">
      <PageHero
        eyebrow="KNOWLEDGE BASE"
        title={
          <>
            INSIGHTS &<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
              STRATEGY.
            </span>
          </>
        }
        description="Our thinking on digital growth, performance marketing, branding, and the systems that move business forward."
      />

      <section className="py-24 md:py-32 container mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <div className="w-24 h-24 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-8 relative">
          <div className="absolute inset-0 rounded-full border border-primary/30 animate-[spin_4s_linear_infinite]" />
          <div className="absolute inset-2 rounded-full border border-primary/10 animate-[spin_8s_linear_infinite_reverse]" />
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
        </div>
        
        <h2 className="text-3xl font-display font-bold mb-6">Transmitting Soon</h2>
        <p className="text-muted leading-relaxed text-lg max-w-lg mb-12">
          We are currently compiling our internal playbooks, growth frameworks, and case study post-mortems into public insights. Check back soon for deep-dive strategies.
        </p>

        <div className="flex flex-wrap justify-center gap-3 max-w-2xl">
          {["Digital Marketing", "Social Media", "Performance Marketing", "Lead Generation", "Web", "Branding", "Growth Strategy"].map((tag, idx) => (
            <span key={idx} className="px-4 py-2 rounded-full bg-white/[0.02] border border-white/10 text-sm text-muted font-medium">
              {tag}
            </span>
          ))}
        </div>
      </section>

      <CTASection />
    </main>
  );
}
