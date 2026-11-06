import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/cta/CTASection";
import WorkSection from "@/components/work/WorkSection";
import Link from "next/link";
import { ArrowUpRight, TrendingUp, DollarSign, Award, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies & Digital Growth Work | ELEVATE05",
  description: "Explore how we turn digital attention into measurable business growth through digital strategy, performance marketing, and high-conversion web development.",
};

const STATS_BANNER = [
  { metric: "$18.4M+", label: "Verified Revenue Generated" },
  { metric: "4.8x", label: "Average ROAS Across Verticals" },
  { metric: "140+", label: "Growth Sprints Shipped" },
  { metric: "99.2%", label: "Client SLA Compliance Rate" },
];

export default function WorkPage() {
  return (
    <main className="flex-1 w-full flex flex-col bg-[#07080C]">
      {/* ── Page Hero with Prism background ── */}
      <PageHero
        eyebrow="SELECTED CASE STUDIES"
        title={
          <>
            EVIDENCE OF{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #FFF1C5 0%, #F59E0B 50%, #FF5A36 100%)" }}
            >
              EXPONENTIAL IMPACT.
            </span>
          </>
        }
        description="A curated catalog of commercial turnarounds, high-scale direct response campaigns, and bespoke web platforms engineered for category leadership."
      >
        <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
          <Link href="/contact" tabIndex={-1}>
            <button className="btn-bronze-outline px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest">
              <span>Submit Project Brief</span>
            </button>
          </Link>
          <Link href="/pricing">
            <button className="px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#9DA6BA] hover:text-[#F3F5F9] border border-white/10 hover:border-white/20 transition-all bg-white/[0.02]">
              View Investment Tiers
            </button>
          </Link>
        </div>
      </PageHero>

      {/* ── High-Impact Quantitative Proof Bar ── */}
      <section className="py-10 border-b border-white/[0.06] bg-[#0A0C13]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS_BANNER.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-2xl md:text-4xl font-extrabold text-[#FDE68A] mb-1">
                  {s.metric}
                </div>
                <div className="text-xs font-mono tracking-wider uppercase text-[#6B758E]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Work Showcase Grid ── */}
      <div className="pt-8 pb-20">
        <WorkSection hideViewAll={true} />
      </div>

      <CTASection />
    </main>
  );
}
