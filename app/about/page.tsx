import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/cta/CTASection";
import { Shield, Sparkles, TrendingUp, Target, Users, Zap, CheckCircle2, Award, Compass, Cpu } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | ELEVATE05",
  description: "Learn about our philosophy, engineering values, and how we architect digital growth engines.",
};

const PILLARS = [
  {
    num: "01",
    title: "Engineering Over Guesswork",
    desc: "We approach digital brand acceleration as an engineering discipline. Every touchpoint, ad dollar, and landing page is modeled as a conversion node within a unified commercial machine.",
    icon: Cpu,
  },
  {
    num: "02",
    title: "Radical Commercial Truth",
    desc: "We refuse vanity metrics. Impressions and likes don't scale enterprise balance sheets. We measure lifetime customer value, pipeline velocity, and return on capital deployed.",
    icon: Target,
  },
  {
    num: "03",
    title: "High-Frequency Iteration",
    desc: "Markets shift in days, not quarters. Our agile squad framework deploys live creative and code experiments every 72 hours to out-learn and out-maneuver industry competition.",
    icon: Zap,
  },
  {
    num: "04",
    title: "Bespoke Brand Gravitas",
    desc: "High conversions don't need to look cheap. We synthesize top-tier aesthetic craft with merciless direct-response psychology to command premium market pricing.",
    icon: Award,
  },
];

const METRICS_TIMELINE = [
  { year: "Phase 1", label: "Diagnostic Audit", detail: "Exposing revenue leakages, tracking breaks, and positioning deficits." },
  { year: "Phase 2", label: "Growth Architecture", detail: "Deploying high-converting web systems and multi-channel capture funnels." },
  { year: "Phase 3", label: "Algorithmic Scale", detail: "Activating cross-platform ad engines and precision attribution models." },
  { year: "Phase 4", label: "Market Dominance", detail: "Institutionalizing automated retention loops and category authority." },
];

export default function AboutPage() {
  return (
    <main className="flex-1 w-full flex flex-col bg-[#07080C]">
      {/* ── Page Hero with Prism background ── */}
      <PageHero
        eyebrow="ABOUT ELEVATE05"
        title={
          <>
            ARCHITECTING{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #FFF1C5 0%, #F59E0B 50%, #FF5A36 100%)" }}
            >
              UNFAIR ADVANTAGE.
            </span>
          </>
        }
        description="We are not a traditional marketing agency. We are a specialized digital growth engineering lab combining bespoke design aesthetics with merciless revenue performance."
      >
        <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
          <Link href="/contact" tabIndex={-1}>
            <button className="btn-bronze-outline px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest">
              <span>Initiate Strategic Audit</span>
            </button>
          </Link>
          <Link href="/services">
            <button className="px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#9DA6BA] hover:text-[#F3F5F9] border border-white/10 hover:border-white/20 transition-all bg-white/[0.02]">
              Explore Systems
            </button>
          </Link>
        </div>
      </PageHero>

      {/* ── Manifesto Section: Deep Obsidian Editorial Layout ── */}
      <section className="py-20 md:py-28 relative border-b border-white/[0.06] overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#11141E] border border-[#F59E0B]/25">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
                <span className="text-[11px] font-mono font-bold tracking-widest text-[#FDE68A] uppercase">The Manifesto</span>
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-extrabold text-[#F3F5F9] leading-[1.1] tracking-tight">
                Attention is cheap.{" "}
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #FFF1C5, #F59E0B)" }}>
                  Conversion is power.
                </span>
              </h2>
              <p className="text-base md:text-lg text-[#9DA6BA] leading-relaxed">
                Most agencies burn venture funding or operating profit on bloated retainers, vague reports, and vanity metrics that never hit the bank. We started ELEVATE05 to eradicate agency ambiguity.
              </p>
              <p className="text-sm md:text-base text-[#6B758E] leading-relaxed">
                Every line of code we ship, every creative asset we render, and every campaign dollar we deploy is tied to a singular mandate: producing measurable, compounding commercial velocity for our partners.
              </p>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
              {PILLARS.map((p) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.num}
                    className="p-7 rounded-2xl bg-[#0D0F17]/80 border border-white/[0.08] hover:border-[#F59E0B]/35 transition-all duration-300 relative group overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#F59E0B]/5 rounded-bl-full pointer-events-none group-hover:bg-[#F59E0B]/10 transition-colors" />
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-xs font-mono font-bold text-[#F59E0B] tracking-wider">{p.num}</span>
                      <Icon className="w-5 h-5 text-[#FDE68A] group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="text-lg font-bold text-[#F3F5F9] mb-2.5 group-hover:text-[#FDE68A] transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-xs md:text-sm text-[#9DA6BA] leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ── Operational Architecture Roadmap ── */}
      <section className="py-20 md:py-28 relative border-b border-white/[0.06] bg-[#0A0C13]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#11141E] border border-[#F59E0B]/25 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#FDE68A] uppercase">How We Operate</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-[#F3F5F9] uppercase tracking-tight mb-4">
              The ELEVATE05 Growth Protocol
            </h2>
            <p className="text-[#9DA6BA] text-sm md:text-base">
              A systematic 4-phase deployment built to de-risk investments and scale customer acquisition predictably.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {METRICS_TIMELINE.map((step, idx) => (
              <div
                key={step.year}
                className="relative p-6 rounded-2xl bg-[#07080C] border border-white/[0.08] hover:border-[#F59E0B]/40 transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-[#151926] text-[#FDE68A] border border-white/5">
                    {step.year}
                  </span>
                  <span className="text-xs font-mono text-[#6B758E]">0{idx + 1}</span>
                </div>
                <h4 className="text-base font-bold text-[#F3F5F9] mb-2 group-hover:text-[#FDE68A] transition-colors">
                  {step.label}
                </h4>
                <p className="text-xs md:text-sm text-[#9DA6BA] leading-relaxed">
                  {step.detail}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Call To Action ── */}
      <CTASection />
    </main>
  );
}
