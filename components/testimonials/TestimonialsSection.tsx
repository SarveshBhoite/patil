"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DEMO_TESTIMONIALS } from "@/lib/constants";
import Image from "next/image";
import { Star, Quote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function TestimonialsSection() {
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
      gsap.set(cards, { y: 25, opacity: 0 });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 78%",
        once: true,
        onEnter: () => {
          gsap.to(headerEls, { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: "power3.out" });
          gsap.to(cards, { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: "power3.out", delay: 0.15 });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative w-full py-14 md:py-20 overflow-hidden bg-[#07080C]"
    >
      {/* ── Ambient Radial Atmosphere ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-[170px] opacity-[0.10]"
          style={{ background: "radial-gradient(circle, #F59E0B 0%, #3437A0 65%, transparent 80%)" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#07080C_95%)]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 xl:px-16 relative z-10">
        
        {/* ── Section Header ── */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-10 md:mb-12 flex flex-col items-center">
          <div
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full mb-4 bg-[#0E1119] border border-[#F59E0B]/30 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
            <span className="text-[11px] font-mono font-bold tracking-[0.22em] text-[#FDE68A] uppercase">
              Client Endorsements
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#F3F5F9] uppercase leading-[1.08] mb-3 text-center">
            What Industry Leaders{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #FFF1C5 0%, #F59E0B 50%, #FF8A3D 100%)" }}
            >
              Say About Us
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-[#8E97A8] max-w-lg leading-relaxed font-normal text-center">
            Direct commercial feedback from enterprise founders, CMOs, and marketing executives we scale with.
          </p>
        </div>

        {/* ── Compact Multi-Card Grid (4 Endorsements in One Frame) ── */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5"
        >
          {DEMO_TESTIMONIALS.map((t, idx) => (
            <div
              key={t.id}
              className="card-obsidian-luxury group relative p-5 lg:p-6 rounded-[22px] border border-white/[0.07] hover:border-[#F59E0B]/45 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.5)]"
            >
              {/* Subtle top amber highlight beam */}
              <div
                className="absolute top-0 left-0 w-full h-[1.5px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(90deg, transparent, #F59E0B, transparent)" }}
              />

              <div>
                {/* Top: Stars & Quote Watermark */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
                    ))}
                  </div>
                  <Quote className="w-4 h-4 text-white/20 group-hover:text-[#F59E0B]/40 transition-colors" />
                </div>

                {/* Quote Text - compact, crisp, readable */}
                <p className="text-xs sm:text-[13px] text-[#DCE2EE] leading-relaxed font-normal mb-5">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author Row */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center gap-3">
                <div className="relative w-9 h-9 rounded-full overflow-hidden border border-[#F59E0B]/30 flex-shrink-0">
                  <Image
                    src={t.image || "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=250&auto=format&fit=crop"}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <div className="font-display font-bold text-[#F3F5F9] text-xs uppercase tracking-wide truncate group-hover:text-[#FDE68A] transition-colors">
                    {t.name}
                  </div>
                  <div className="text-[10px] font-mono text-[#8E97A8] truncate">
                    {t.role} • <span className="text-[#FDE68A]">{t.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Compact Trust Metric Strip ── */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 px-2 text-[11px] font-mono text-[#8E97A8] border-t border-white/[0.06] pt-5">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] animate-ping" />
            <span>100% VERIFIED CLIENT SATISFACTION</span>
          </div>
          <div className="flex items-center gap-5">
            <span>AVERAGE NET PROMOTER SCORE: 92</span>
            <span className="hidden sm:inline">•</span>
            <span>NO RETAINER LOCK-INS</span>
          </div>
        </div>

      </div>
    </section>
  );
}
