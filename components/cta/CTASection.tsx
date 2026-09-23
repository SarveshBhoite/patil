"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";
import { BRAND_CONFIG } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      const els = contentRef.current ? Array.from(contentRef.current.children) : [];
      gsap.set(els, { y: 30, opacity: 0 });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 75%",
        once: true,
        onEnter: () => {
          gsap.to(els, { y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: "power3.out" });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="cta"
      className="relative w-full py-16 md:py-24 overflow-hidden bg-[#07080C]"
    >
      {/* Decorative ambient orbs */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full blur-[200px] opacity-[0.14]"
          style={{ background: "radial-gradient(circle, #F59E0B 0%, #B45309 50%, transparent 80%)" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#07080C_95%)]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 text-center">
        <div ref={contentRef} className="max-w-4xl mx-auto">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full mb-10 bg-[#0E1119] border border-[#F59E0B]/30 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#FDE68A] uppercase">START A COLLABORATION</span>
          </div>

          {/* Headline */}
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.04] mb-8 text-[#F3F5F9] uppercase">
            Ready to Build{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #FFF1C5 0%, #F59E0B 50%, #FF8A3D 100%)" }}
            >
              Something Iconic?
            </span>
          </h2>

          <p className="text-lg md:text-xl text-[#8E97A8] max-w-2xl mx-auto mb-12 leading-relaxed font-normal">
            Let&apos;s engineer your brand into an unmistakable market leader with bespoke design and high-converting technology.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link href="/contact" className="w-full sm:w-auto">
              <button
                className="btn-bronze-outline w-full sm:w-auto px-10 py-4 text-xs font-mono uppercase tracking-widest font-bold shadow-[0_0_30px_rgba(245,158,11,0.25)]"
              >
                <span>Initiate Consultation</span>
                <ArrowRight className="w-4 h-4 ml-2 text-[#F59E0B]" />
              </button>
            </Link>

            <Link href="/work" className="w-full sm:w-auto">
              <button
                className="w-full sm:w-auto px-9 py-4 text-xs font-mono uppercase tracking-widest font-bold text-[#8E97A8] hover:text-[#F3F5F9] rounded-full border border-white/10 hover:border-white/30 transition-all duration-300"
              >
                <span>View Portfolio Archive</span>
              </button>
            </Link>
          </div>

          {/* Email nudge */}
          <div className="mt-12 flex items-center justify-center gap-2 text-[#9DA6BA] text-sm font-mono">
            <MessageSquare className="w-4 h-4 text-[#F59E0B]" />
            <span>Direct channel:</span>
            <a
              href={`mailto:${BRAND_CONFIG.email}`}
              className="text-[#FDE68A] hover:underline font-semibold"
            >
              {BRAND_CONFIG.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
