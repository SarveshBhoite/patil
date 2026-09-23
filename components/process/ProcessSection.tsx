"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Search, Compass, Palette, Rocket, Sliders, TrendingUp, CheckCircle2, ChevronRight } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const METHODOLOGY = [
  {
    step: "01",
    phase: "PHASE 01",
    title: "Diagnostic & Intelligence",
    tagline: "Uncovering market friction, competitor vulnerabilities, and high-margin conversion vectors.",
    icon: Search,
    timeframe: "Week 01",
    deliverables: [
      "Full funnel & conversion leak audit",
      "Competitor conquesting footprint",
      "Ideal Customer Profile (ICP) validation",
      "Benchmark metrics baseline",
    ],
    outcome: "Clear mathematical roadmap to revenue expansion.",
  },
  {
    step: "02",
    phase: "PHASE 02",
    title: "Strategic Architecture",
    tagline: "Engineering bespoke acquisition blueprints aligned directly to bottom-line profitability.",
    icon: Compass,
    timeframe: "Week 01-02",
    deliverables: [
      "Omnichannel media allocation strategy",
      "Unit economics & Target CAC modeling",
      "Custom tracking & CAPI architecture",
      "Creative direction & messaging angles",
    ],
    outcome: "Bulletproof growth hypothesis and channel mix.",
  },
  {
    step: "03",
    phase: "PHASE 03",
    title: "High-Craft Creation",
    tagline: "Developing luxury visual identities, conversion-focused landing pages, and cinematic assets.",
    icon: Palette,
    timeframe: "Week 02-03",
    deliverables: [
      "Dynamic ad creative matrix & hooks",
      "High-velocity Next.js platform builds",
      "Micro-interaction & UX polish",
      "Compelling direct-response copy",
    ],
    outcome: "Production assets engineered to stop the scroll.",
  },
  {
    step: "04",
    phase: "PHASE 04",
    title: "Precision Deployment",
    tagline: "Launching campaigns into the auction with algorithmic bidding and surgical audience clustering.",
    icon: Rocket,
    timeframe: "Week 03-04",
    deliverables: [
      "Segmented audience matrix launch",
      "Live server-side telemetry sync",
      "Pre-flight QA & latency validation",
      "Daily spend efficiency safeguards",
    ],
    outcome: "Immediate commercial momentum across channels.",
  },
  {
    step: "05",
    phase: "PHASE 05",
    title: "Algorithmic Optimization",
    tagline: "Relentless multivariate creative testing and daily bidding adjustments to slash cost per acquisition.",
    icon: Sliders,
    timeframe: "Ongoing Sprints",
    deliverables: [
      "Rapid creative fatigue mitigation",
      "Dynamic budget reallocation to winners",
      "LTV & cohort retention analysis",
      "Conversion rate optimization (CRO)",
    ],
    outcome: "Maximum capital efficiency and plummeting CAC.",
  },
  {
    step: "06",
    phase: "PHASE 06",
    title: "Compound Scaling",
    tagline: "Pouring fuel on winning vectors to create compounding, long-term enterprise value.",
    icon: TrendingUp,
    timeframe: "Scaling Horizon",
    deliverables: [
      "Horizontal & vertical budget scale",
      "New market & territory expansion",
      "Automated retention & referral loops",
      "Quarterly executive telemetry decks",
    ],
    outcome: "Predictable, dominant market leadership.",
  },
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      const headerEls = headerRef.current ? Array.from(headerRef.current.children) : [];

      gsap.set(headerEls, { y: 20, opacity: 0 });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 78%",
        once: true,
        onEnter: () => {
          gsap.to(headerEls, { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: "power3.out" });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const current = METHODOLOGY[activeStep];
  const IconComponent = current.icon;

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative w-full py-14 md:py-20 overflow-hidden bg-[#07080C]"
    >
      {/* ── Ambient Radial Atmosphere ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div
          className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full blur-[180px] opacity-[0.12]"
          style={{ background: "radial-gradient(circle, #F59E0B 0%, #3437A0 60%, transparent 80%)" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#07080C_95%)]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 xl:px-16 relative z-10">
        
        {/* ── Section Header ── */}
        <div ref={headerRef} className="max-w-3xl mb-12 md:mb-16 text-center mx-auto flex flex-col items-center">
          <div
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full mb-4 bg-[#0E1119] border border-[#F59E0B]/30 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse" />
            <span className="text-[11px] font-mono font-bold tracking-[0.22em] text-[#FDE68A] uppercase">
              Execution Framework
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#F3F5F9] uppercase leading-[1.08] mb-3 text-center">
            Our Precision{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #FFF1C5 0%, #F59E0B 50%, #FF8A3D 100%)" }}
            >
              Growth Methodology
            </span>
          </h2>

          <p className="text-sm md:text-base text-[#8E97A8] max-w-xl leading-relaxed font-normal text-center">
            A battle-tested six-phase operating system that transforms digital friction into predictable revenue momentum.
          </p>
        </div>

        {/* ── Horizontal Pipeline Timeline Tracker ── */}
        <div className="mb-8">
          <div className="relative flex items-center justify-between gap-2 overflow-x-auto pb-4 scrollbar-none">
            {/* Background connecting rail */}
            <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 h-[2px] bg-white/[0.08] z-0 hidden sm:block" />
            
            {METHODOLOGY.map((item, idx) => {
              const isSelected = activeStep === idx;
              const isPassed = activeStep > idx;

              return (
                <button
                  key={item.step}
                  onClick={() => setActiveStep(idx)}
                  className="relative z-10 flex flex-col items-center gap-2 group cursor-pointer flex-1 min-w-[100px] text-center"
                >
                  {/* Step Node */}
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 ${
                      isSelected
                        ? "bg-[#F59E0B] text-[#07080C] shadow-[0_0_20px_rgba(245,158,11,0.6)] scale-110"
                        : isPassed
                        ? "bg-[#161B26] text-[#FDE68A] border border-[#F59E0B]/50"
                        : "bg-[#0B0D14] text-[#8E97A8] border border-white/[0.1] group-hover:border-white/30"
                    }`}
                  >
                    {item.step}
                  </div>

                  {/* Step Label */}
                  <span
                    className={`text-[11px] font-bold uppercase tracking-wider transition-colors hidden sm:block ${
                      isSelected ? "text-white" : "text-[#8E97A8] group-hover:text-white"
                    }`}
                  >
                    {item.title.split(" ")[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Interactive Radar Console / Phase Card ── */}
        <div className="card-obsidian-luxury p-8 sm:p-10 lg:p-12 rounded-[28px] border border-white/[0.08] relative overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
          {/* Subtle warm glow sheen */}
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
            style={{ background: "radial-gradient(circle, #F59E0B 0%, transparent 70%)" }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Phase Identity & Core Objective */}
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-[#F59E0B]/15 border border-[#F59E0B]/30 flex items-center justify-center text-[#F59E0B]">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#FDE68A] uppercase block">
                    {current.phase} • {current.timeframe}
                  </span>
                  <span className="text-[11px] text-[#8E97A8] font-mono">
                    STAGE {current.step} OF 06
                  </span>
                </div>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F3F5F9] uppercase tracking-tight mb-3">
                {current.title}
              </h3>
              <p className="text-sm sm:text-base text-[#8E97A8] leading-relaxed mb-6">
                {current.tagline}
              </p>

              {/* Verified Outcome Callout */}
              <div className="p-4 rounded-xl bg-[#090B10]/80 border border-white/[0.06] flex items-start gap-3">
                <span className="text-xs font-mono font-bold text-[#F59E0B] uppercase tracking-widest mt-0.5">
                  DELIVERY TARGET:
                </span>
                <span className="text-xs sm:text-sm text-white font-medium">
                  {current.outcome}
                </span>
              </div>
            </div>

            {/* Right Column: Key Deliverables Console */}
            <div className="lg:col-span-6 flex flex-col justify-between h-full bg-[#080A10]/60 p-6 sm:p-8 rounded-2xl border border-white/[0.06]">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#FDE68A] block mb-4">
                  Phase Deliverables & Benchmarks
                </span>
                
                <div className="space-y-3">
                  {current.deliverables.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 rounded-xl bg-[#0F121C] border border-white/[0.04] transition-all hover:border-[#F59E0B]/30"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#F59E0B] flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-[#F3F5F9] font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-between">
                <div className="text-xs font-mono text-[#8E97A8]">
                  TAP ANY STAGE ABOVE TO INSPECT
                </div>

                <div className="flex items-center gap-3">
                  {activeStep > 0 && (
                    <button
                      onClick={() => setActiveStep(activeStep - 1)}
                      className="px-4 py-2 rounded-full border border-white/10 text-xs font-mono uppercase text-white hover:bg-white/10 transition-colors cursor-pointer"
                    >
                      ← Prev
                    </button>
                  )}
                  {activeStep < METHODOLOGY.length - 1 ? (
                    <button
                      onClick={() => setActiveStep(activeStep + 1)}
                      className="btn-bronze-outline px-5 py-2 text-xs font-mono uppercase tracking-wider font-bold cursor-pointer"
                    >
                      Next Phase →
                    </button>
                  ) : (
                    <Link href="/contact">
                      <button className="btn-bronze-outline px-5 py-2 text-xs font-mono uppercase tracking-wider font-bold cursor-pointer">
                        Initiate Sprint →
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
