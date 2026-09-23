import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/cta/CTASection";
import ProcessSection from "@/components/process/ProcessSection";

export const metadata: Metadata = {
  title: "Growth Process | LeadSpire Digital",
  description: "From idea to measurable growth. Discover the 6-step protocol we use to build, launch, and scale digital growth systems.",
};

export default function ProcessPage() {
  return (
    <main className="flex-1 w-full flex flex-col">
      <PageHero
        eyebrow="GROWTH PROTOCOL"
        title={
          <>
            FROM IDEA TO<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
              MEASURABLE GROWTH.
            </span>
          </>
        }
        description="We don't rely on guesswork. We follow a systematic, 6-stage protocol designed to identify opportunities, execute with precision, and scale what works."
      />

      <div className="py-12">
        <ProcessSection />
      </div>

      <CTASection />
    </main>
  );
}
