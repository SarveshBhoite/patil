"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Prism from "@/components/hero/Prism";
import { useTheme } from "@/components/providers/ThemeProvider";

interface PageHeroProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  children?: React.ReactNode;
  align?: "center" | "left";
  heightVh?: string;
}

export default function PageHero({
  eyebrow,
  title,
  description,
  children,
  align = "center",
  heightVh = "min-h-[72vh] md:min-h-[76vh]",
}: PageHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-element",
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.08, ease: "power3.out" }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className={`relative ${heightVh} w-full flex flex-col justify-center items-center overflow-hidden bg-[#07080C] pt-24 pb-12 border-b border-white/[0.08]`}
    >
      {/* ── WebGL Prism Background Canvas (Bright, Vivid & Highly Visible) ── */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-90">
        <Prism
          animationType="rotate"
          timeScale={0.5}
          height={3.5}
          baseWidth={5.5}
          scale={3.7}
          hueShift={0}
          colorFrequency={1.2}
          noise={0.15}
          glow={1.4}
          bloom={1.3}
          transparent={true}
          lightMode={theme === "light"}
        />
      </div>

      {/* ── Soft Radial Vignette for text contrast while keeping Prism vivid ── */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(7,8,12,0.18) 0%, rgba(7,8,12,0.65) 65%, rgba(7,8,12,0.92) 100%)",
        }}
      />

      {/* ── Ambient warm champagne gold glow ── */}
      <div className="absolute inset-0 pointer-events-none z-[2] overflow-hidden">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] rounded-full blur-[160px] opacity-[0.20]"
          style={{ background: "radial-gradient(circle, #F59E0B, transparent 70%)" }}
        />
      </div>

      {/* ── Hero Foreground Content ── */}
      <div
        className={`container relative z-10 mx-auto px-6 md:px-12 flex flex-col ${
          align === "center" ? "items-center text-center" : "items-start text-left"
        }`}
      >
        {eyebrow && (
          <div className="hero-element inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full mb-5 bg-[#11141E]/80 border border-[#F59E0B]/30 shadow-[0_0_20px_rgba(245,158,11,0.12)] backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] animate-pulse" />
            <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-[#FDE68A] uppercase">
              {eyebrow}
            </span>
          </div>
        )}

        <h1 className="hero-element font-display text-[clamp(2rem,4vw,3.6rem)] font-extrabold tracking-tight leading-[1.1] mb-5 text-[#F3F5F9] max-w-4xl drop-shadow-md">
          {title}
        </h1>

        {description && (
          <p className="hero-element text-base md:text-lg text-[#A6AFBF] max-w-2xl leading-relaxed mb-6 font-normal drop-shadow-sm">
            {description}
          </p>
        )}

        {children && <div className="hero-element mt-1 w-full">{children}</div>}
      </div>
    </section>
  );
}
