"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, Compass, Cpu, Layers } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const PILLARS = [
  {
    icon: Compass,
    title: "Strategy First",
    desc: "Rigorous market intelligence and architectural planning before a single line of code or creative asset is deployed.",
    stat: "100%",
    statLabel: "Commercial Focus",
    colSpan: "lg:col-span-7",
  },
  {
    icon: Cpu,
    title: "Algorithmic Precision",
    desc: "Campaign infrastructure tuned to modern auction dynamics and conversion models.",
    stat: "3.4×",
    statLabel: "Avg Pipeline ROAS",
    colSpan: "lg:col-span-5",
  },
  {
    icon: Layers,
    title: "Bespoke Full-Stack",
    desc: "Next-gen web platforms engineered for extreme velocity and conversion flows.",
    stat: "< 1s",
    statLabel: "Load Latency",
    colSpan: "lg:col-span-5",
  },
  {
    icon: Sparkles,
    title: "High-Craft Aesthetics",
    desc: "Elevating digital presence into an unmistakable luxury tier that commands attention and premium customer trust.",
    stat: "360°",
    statLabel: "Brand Resonance",
    colSpan: "lg:col-span-7",
  },
];

export default function AboutSection() {
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
        start: "top 78%",
        once: true,
        onEnter: () => {
          gsap.to(headerEls, { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: "power3.out" });
          gsap.to(cards, { y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: "power3.out", delay: 0.15 });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full py-14 md:py-20 overflow-hidden bg-[#07080C]"
    >
      {/* ── Ambient Radial Atmosphere ── */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full blur-[180px] opacity-[0.10]"
          style={{ background: "radial-gradient(circle, #F59E0B 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-10 right-10 w-[550px] h-[550px] rounded-full blur-[170px] opacity-[0.08]"
          style={{ background: "radial-gradient(circle, #3437A0 0%, transparent 70%)" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#07080C_95%)]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 xl:px-16 w-full relative z-10">

        {/* ── Header: Centered Editorial Presentation ── */}
        <div ref={headerRef} className="max-w-3xl mx-auto mb-10 md:mb-14 text-center flex flex-col items-center">
          <div
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full mb-4 bg-[#0E1119] border border-[#F59E0B]/30 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
            <span className="text-[11px] font-mono font-bold tracking-[0.22em] text-[#FDE68A] uppercase">
              About ELEVATE05
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#F3F5F9] uppercase leading-[1.08] mb-4 text-center">
            We Don&apos;t Just Market.{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #FFF1C5 0%, #F59E0B 50%, #FF8A3D 100%)" }}
            >
              We Engineer Momentum.
            </span>
          </h2>

          <p className="text-sm md:text-base text-[#8E97A8] max-w-2xl leading-relaxed font-normal text-center">
            ELEVATE05 bridges high-fashion artistic craftsmanship with rigorous algorithmic execution. Every touchpoint is built to make your business unmistakable and commercially dominant.
          </p>
        </div>

        {/* ── Asymmetric Bento Grid Architecture ── */}
        <div ref={gridRef} className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6">
          {PILLARS.map((pillar, index) => {
            const Icon = pillar.icon;

            return (
              <div
                key={index}
                className={`${pillar.colSpan} card-obsidian-luxury group relative p-7 md:p-8 flex flex-col justify-between border border-white/[0.08] hover:border-[#F59E0B]/45 transition-all duration-400 rounded-[24px] overflow-hidden`}
              >
                {/* Top Subtle Amber Beam */}
                <div
                  className="absolute top-0 left-0 w-full h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{ background: "linear-gradient(90deg, transparent, #F59E0B, transparent)" }}
                />
                <div
                  className="absolute -top-16 -right-16 w-36 h-36 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: "radial-gradient(circle, rgba(245,158,11,0.12), transparent)" }}
                />

                <div className="relative z-10">
                  {/* Icon & Stat Row */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#F59E0B]/10 border border-[#F59E0B]/25 flex items-center justify-center text-[#F59E0B] group-hover:scale-105 transition-transform duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="text-right">
                      <div
                        className="font-display text-2xl lg:text-3xl font-black text-transparent bg-clip-text"
                        style={{ backgroundImage: "linear-gradient(135deg, #FFFFFF 0%, #FFF1C5 40%, #F59E0B 100%)" }}
                      >
                        {pillar.stat}
                      </div>
                      <span className="font-mono text-[10px] tracking-wider uppercase text-[#8E97A8]">
                        {pillar.statLabel}
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display text-xl font-bold text-[#F3F5F9] uppercase tracking-tight mb-2.5 group-hover:text-[#FDE68A] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs md:text-sm text-[#8E97A8] leading-relaxed font-normal max-w-lg">
                    {pillar.desc}
                  </p>
                </div>

                {/* Bottom micro-indicator */}
                <div className="relative z-10 pt-5 mt-5 border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-[#626C82] group-hover:text-[#FDE68A] transition-colors">
                  <span className="uppercase tracking-widest">SYSTEM 0{index + 1}</span>
                  <span>✦ VERIFIED ARCHITECTURE</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Direct Action Strip ── */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-6 pt-6 border-t border-white/[0.08]">
          <div className="text-xs font-mono text-[#8E97A8]">
            LOOKING TO RESTRUCTURE YOUR DIGITAL ACQUISITION?
          </div>
          <Link href="/about">
            <button className="btn-bronze-outline px-6 py-2.5 text-xs font-mono uppercase tracking-widest font-bold">
              <span>Read Our Full Story →</span>
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}
