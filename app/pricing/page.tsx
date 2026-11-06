import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import PricingSection from "@/components/pricing/PricingSection";
import CTASection from "@/components/cta/CTASection";
import Link from "next/link";
import { ShieldCheck, Zap, RefreshCw, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing & Investment Architecture | ELEVATE05",
  description: "Transparent, predictable growth plans for startups, scaleups, and market leaders with zero hidden retainers.",
};

const FAQ_ITEMS = [
  {
    q: "How fast can we launch after onboarding?",
    a: "Our sprint setup completes within 5-7 business days. Technical audit, tracking pixel telemetry, and initial ad architectures deploy in Week 1.",
  },
  {
    q: "Do you require long-term lock-in contracts?",
    a: "No. All core growth partnerships operate on month-to-month terms with a 30-day notice. We believe retention is earned solely through performance.",
  },
  {
    q: "Who owns the ad accounts and creative assets?",
    a: "You own 100% of all intellectual property, data warehouses, and advertising accounts from day one.",
  },
  {
    q: "What ad spend budgets do you manage?",
    a: "We manage monthly spends ranging from ₹50,000 to ₹25,00,000+ across Meta, Google Ads, YouTube, LinkedIn, and programmatic channels.",
  },
];

export default function PricingPage() {
  return (
    <main className="flex-1 w-full flex flex-col bg-[#07080C]">
      {/* ── Page Hero with Prism background ── */}
      <PageHero
        eyebrow="TRANSPARENT PRICING"
        title={
          <>
            PREDICTABLE CAPITAL.{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #FFF1C5 0%, #F59E0B 50%, #FF5A36 100%)" }}
            >
              UNLIMITED SCALE.
            </span>
          </>
        }
        description="Clear, flat-rate tiers built to maximize your ROI. No hidden fees, no opaque agency markups, and zero lock-in contracts."
      >
        <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
          <Link href="#pricing-tiers" tabIndex={-1}>
            <button className="btn-bronze-outline px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest">
              <span>View Packages</span>
            </button>
          </Link>
          <Link href="/contact">
            <button className="px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#9DA6BA] hover:text-[#F3F5F9] border border-white/10 hover:border-white/20 transition-all bg-white/[0.02]">
              Schedule Consultation
            </button>
          </Link>
        </div>
      </PageHero>

      {/* ── Pricing Matrix Section ── */}
      <div id="pricing-tiers">
        <PricingSection />
      </div>

      {/* ── FAQ & Guarantee Section ── */}
      <section className="py-20 md:py-28 relative border-t border-white/[0.06] bg-[#0A0C13]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#11141E] border border-[#F59E0B]/25 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#FDE68A] uppercase">
                Frequently Asked Questions
              </span>
            </div>
            <h3 className="font-display text-3xl md:text-4xl font-extrabold text-[#F3F5F9] uppercase tracking-tight">
              Commercial Clarity
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {FAQ_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-[#07080C] border border-white/[0.08] hover:border-[#F59E0B]/30 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-6 h-6 rounded-full bg-[#151926] text-[#FDE68A] flex items-center justify-center font-mono text-xs font-bold border border-white/5">
                    ?
                  </span>
                  <h4 className="text-base font-bold text-[#F3F5F9]">{item.q}</h4>
                </div>
                <p className="text-xs md:text-sm text-[#9DA6BA] leading-relaxed pl-9">
                  {item.a}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>
      
      <CTASection />
    </main>
  );
}
