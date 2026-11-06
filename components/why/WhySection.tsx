"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Target, Sparkles, BarChart2, TrendingUp, MessageSquare, Rocket, Zap, ShieldCheck } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function WhySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      const headerEls = headerRef.current ? Array.from(headerRef.current.children) : [];
      const cards = gridRef.current ? Array.from(gridRef.current.children) : [];

      gsap.set(headerEls, { y: 20, opacity: 0 });
      gsap.set(cards, { y: 30, opacity: 0 });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 75%",
        once: true,
        onEnter: () => {
          gsap.to(headerEls, { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" });
          gsap.to(cards, { y: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: "power3.out", delay: 0.15 });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="why"
      className="relative w-full py-14 md:py-20 overflow-hidden bg-[#07080C]"
    >
      {/* Subtle ambient amber glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full blur-[170px] opacity-[0.10]"
          style={{ background: "radial-gradient(circle, #F59E0B 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-10 left-10 w-[450px] h-[450px] rounded-full blur-[150px] opacity-[0.08]"
          style={{ background: "radial-gradient(circle, #D97706 0%, transparent 70%)" }}
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 xl:px-16 relative z-10">
        
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16 md:mb-20 flex flex-col items-center">
          <div
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full mb-6 bg-[#0E1119] border border-[#F59E0B]/30 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
            <span className="text-[11px] font-mono font-bold tracking-[0.22em] text-[#FDE68A] uppercase">THE STRATEGIC ADVANTAGE</span>
          </div>

          <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-[#F3F5F9] uppercase leading-[1.1] mb-5">
            Why Visionary Brands{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #FFF1C5 0%, #F59E0B 50%, #FF8A3D 100%)" }}
            >
              Choose ELEVATE05
            </span>
          </h2>
          <p className="text-sm md:text-base text-[#8E97A8] max-w-xl leading-relaxed font-normal">
            We reject bureaucratic agency bloat. We partner directly as an agile growth engine obsessed with measurable revenue.
          </p>
        </div>

        {/* ── Bento Grid: Why Us ── */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Bento Card 1: Fast Execution (Span 2 cols on lg) */}
          <div className="card-obsidian-luxury lg:col-span-2 group p-8 lg:p-10 flex flex-col justify-between border border-white/[0.07] hover:border-[#F59E0B]/50 transition-all duration-500 rounded-[28px] relative overflow-hidden">
            <div className="flex items-start justify-between mb-8">
              <div className="w-13 h-13 rounded-2xl bg-[#F59E0B]/10 border border-[#F59E0B]/30 flex items-center justify-center text-[#F59E0B] group-hover:scale-105 transition-transform duration-300">
                <Rocket className="w-6 h-6" />
              </div>
              <div className="font-display text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FDE68A] via-[#F59E0B] to-[#FF8A3D]">
                3× Faster
              </div>
            </div>

            <div>
              <h3 className="font-display text-2xl lg:text-3xl font-extrabold text-[#F3F5F9] uppercase tracking-tight mb-3 group-hover:text-[#FDE68A] transition-colors">
                Agile Velocity & Zero Bureaucracy
              </h3>
              <p className="text-[#8E97A8] text-sm md:text-base leading-relaxed max-w-xl">
                No endless meetings, no junior pass-offs. You collaborate directly with principal strategists and senior engineers who build and deploy at startup speed.
              </p>
            </div>

            <div className="flex items-center gap-6 pt-6 mt-6 border-t border-white/[0.06]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#FDE68A]">
                <Zap className="w-4 h-4 text-[#F59E0B]" />
                <span>Immediate Sprint Cycles</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#8E97A8]">
                <ShieldCheck className="w-4 h-4 text-[#F59E0B]" />
                <span>Guaranteed Direct Communication</span>
              </div>
            </div>
          </div>

          {/* Bento Card 2: Data-Backed Passion */}
          <div className="card-obsidian-luxury group p-8 flex flex-col justify-between border border-white/[0.07] hover:border-[#F59E0B]/50 transition-all duration-500 rounded-[28px]">
            <div>
              <div className="w-13 h-13 rounded-2xl bg-[#F59E0B]/10 border border-[#F59E0B]/30 flex items-center justify-center text-[#F59E0B] mb-8 group-hover:scale-105 transition-transform duration-300">
                <BarChart2 className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl lg:text-2xl font-extrabold text-[#F3F5F9] uppercase tracking-tight mb-3 group-hover:text-[#FDE68A] transition-colors">
                Data-Backed Precision
              </h3>
              <p className="text-[#8E97A8] text-sm leading-relaxed mb-6">
                Every creative choice and campaign dollar is governed by empirical conversion data, analytics attribution, and rigorous testing.
              </p>
            </div>
            <div className="pt-5 border-t border-white/[0.06] text-xs font-mono text-[#FDE68A]">
              100% Attribution Transparency
            </div>
          </div>

          {/* Bento Card 3: Fresh Artistic Perspective */}
          <div className="card-obsidian-luxury group p-8 flex flex-col justify-between border border-white/[0.07] hover:border-[#F59E0B]/50 transition-all duration-500 rounded-[28px]">
            <div>
              <div className="w-13 h-13 rounded-2xl bg-[#F59E0B]/10 border border-[#F59E0B]/30 flex items-center justify-center text-[#F59E0B] mb-8 group-hover:scale-105 transition-transform duration-300">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl lg:text-2xl font-extrabold text-[#F3F5F9] uppercase tracking-tight mb-3 group-hover:text-[#FDE68A] transition-colors">
                High-Craft Aesthetics
              </h3>
              <p className="text-[#8E97A8] text-sm leading-relaxed mb-6">
                We bridge the gap between world-class visual luxury and ruthless conversion engineering so your brand looks unforgettable.
              </p>
            </div>
            <div className="pt-5 border-t border-white/[0.06] text-xs font-mono text-[#FDE68A]">
              Artistic Identity Systems
            </div>
          </div>

          {/* Bento Card 4: Dedicated Growth Partner (Span 2 cols on lg) */}
          <div className="card-obsidian-luxury lg:col-span-2 group p-8 lg:p-10 flex flex-col justify-between border border-white/[0.07] hover:border-[#F59E0B]/50 transition-all duration-500 rounded-[28px]">
            <div className="flex items-start justify-between mb-8">
              <div className="w-13 h-13 rounded-2xl bg-[#F59E0B]/10 border border-[#F59E0B]/30 flex items-center justify-center text-[#F59E0B] group-hover:scale-105 transition-transform duration-300">
                <Target className="w-6 h-6" />
              </div>
              <div className="font-display text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FDE68A] via-[#F59E0B] to-[#FF8A3D]">
                50+ Builds
              </div>
            </div>

            <div>
              <h3 className="font-display text-2xl lg:text-3xl font-extrabold text-[#F3F5F9] uppercase tracking-tight mb-3 group-hover:text-[#FDE68A] transition-colors">
                Obsessive Founders Mentality
              </h3>
              <p className="text-[#8E97A8] text-sm md:text-base leading-relaxed max-w-xl">
                We treat your metrics like our own. You receive proactive recommendations, continuous optimization sprints, and dedicated attention every step of the journey.
              </p>
            </div>

            <div className="flex items-center gap-6 pt-6 mt-6 border-t border-white/[0.06]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#FDE68A]">
                <TrendingUp className="w-4 h-4 text-[#F59E0B]" />
                <span>Measurable Quarter-over-Quarter Growth</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#8E97A8]">
                <MessageSquare className="w-4 h-4 text-[#F59E0B]" />
                <span>Dedicated Slack/WhatsApp Channel</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
