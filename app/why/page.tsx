import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import WhySection from "@/components/why/WhySection";
import CTASection from "@/components/cta/CTASection";
import Link from "next/link";
import { ShieldCheck, Zap, Award, Target, Rocket } from "lucide-react";

export const metadata: Metadata = {
  title: "Why LeadSpire Digitals? | Strategic Asymmetry",
  description: "Discover the architectural, technical, and strategic advantages that make LeadSpire Digitals the preferred growth partner for visionary founders.",
};

const DIFFERENTIATORS = [
  {
    icon: Zap,
    title: "Agile 72-Hour Sprints",
    description: "While traditional agencies spend 6 weeks in planning meetings, our teams ship, test, and optimize in 72-hour execution windows.",
  },
  {
    icon: Target,
    title: "Outcome-Aligned Economics",
    description: "Our commercial framework aligns directly with your revenue metrics. We prioritize bottom-line margin over hollow vanity reach.",
  },
  {
    icon: Award,
    title: "Senior Craftsperson Squads",
    description: "Every account is led directly by principal developers and elite media buyers. Zero outsourced work, zero junior handoffs.",
  },
];

export default function WhyUsPage() {
  return (
    <main className="flex-1 w-full flex flex-col bg-[#07080C]">
      {/* ── Page Hero with Prism background ── */}
      <PageHero
        eyebrow="THE STRATEGIC ADVANTAGE"
        title={
          <>
            WHY VISIONARY BRANDS{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #FFF1C5 0%, #F59E0B 50%, #FF5A36 100%)" }}
            >
              CHOOSE LEADSPIRE.
            </span>
          </>
        }
        description="In an era of generic agencies and commoditized ads, we provide the strategic asymmetry and technical precision required to outperform legacy competitors."
      >
        <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
          <Link href="/contact" tabIndex={-1}>
            <button className="btn-bronze-outline px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest">
              <span>Partner With Us</span>
            </button>
          </Link>
          <Link href="/work">
            <button className="px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#9DA6BA] hover:text-[#F3F5F9] border border-white/10 hover:border-white/20 transition-all bg-white/[0.02]">
              Review Case Studies
            </button>
          </Link>
        </div>
      </PageHero>

      {/* ── Three Pillars Callout ── */}
      <section className="py-14 border-b border-white/[0.06] bg-[#0A0C13]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-8">
            {DIFFERENTIATORS.map((d, i) => {
              const Icon = d.icon;
              return (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-[#171B29] border border-[#F59E0B]/30 flex items-center justify-center text-[#FDE68A] flex-shrink-0 mt-1">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#F3F5F9] mb-1.5">{d.title}</h3>
                    <p className="text-xs md:text-sm text-[#9DA6BA] leading-relaxed">{d.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* ── Why Section Bento Grid ── */}
      <div className="py-8">
        <WhySection />
      </div>

      <CTASection />
    </main>
  );
}
