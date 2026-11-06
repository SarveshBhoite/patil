"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DEMO_METRICS } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

interface CounterProps {
  end: number;
  decimals?: number;
  duration?: number;
  trigger: boolean;
}

function AnimatedCounter({ end, decimals = 0, duration = 1.8, trigger }: CounterProps) {
  const [val, setVal] = useState(0);
  const valRef = useRef({ value: 0 });

  useEffect(() => {
    if (!trigger) return;
    valRef.current.value = 0;
    gsap.to(valRef.current, {
      value: end,
      duration,
      ease: "power2.out",
      onUpdate: () => {
        setVal(valRef.current.value);
      }
    });
  }, [trigger, end, duration]);

  return (
    <span className="tabular-nums">
      {decimals > 0 ? val.toFixed(decimals) : Math.round(val)}
    </span>
  );
}

export default function ResultsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const headerEls = headerRef.current ? Array.from(headerRef.current.children) : [];
      const items = gsap.utils.toArray<HTMLElement>(".metric-flow-item");

      gsap.set(headerEls, { y: 20, opacity: 0 });
      gsap.set(items, { y: 25, opacity: 0 });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        once: true,
        onEnter: () => {
          setInView(true);
          gsap.to(headerEls, { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: "power3.out" });
          gsap.to(items, {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.08,
            ease: "power3.out",
            delay: 0.15,
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-14 md:py-18 overflow-hidden bg-[#07080C]"
    >
      {/* ── Ambient Radial Atmosphere ── */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full blur-[170px] opacity-[0.14]"
          style={{ background: "radial-gradient(circle, #F59E0B 0%, #3437A0 60%, transparent 80%)" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,#07080C_95%)]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 xl:px-16 w-full relative z-10 flex flex-col justify-between my-auto">

        {/* ── Compact Header ── */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-10 md:mb-14 flex flex-col items-center">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full mb-4 bg-[#0E1119] border border-[#F59E0B]/30 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse" />
            <span className="text-[10px] font-mono font-bold tracking-[0.22em] text-[#FDE68A] uppercase">
              Proven Impact
            </span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#F3F5F9] uppercase mb-2.5">
            Measured in Growth.{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #FFF1C5 0%, #F59E0B 50%, #FF8A3D 100%)" }}
            >
              Built for Scale.
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-[#8E97A8] max-w-md leading-relaxed font-normal">
            Every campaign and platform sprint is engineered for definitive performance and verifiable returns.
          </p>
        </div>

        {/* ── Responsive Flow Grid: 2 Columns on Mobile, 3 on Tablet, 5 on Desktop ── */}
        <div className="relative border border-white/[0.08] lg:border-x-0 lg:border-y rounded-2xl lg:rounded-none overflow-hidden grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 backdrop-blur-sm divide-x divide-y divide-white/[0.08] lg:divide-y-0">
          {DEMO_METRICS.map((metric, index) => {
            const hasDecimals = Number(metric.value) % 1 !== 0;
            const isLastOdd = index === DEMO_METRICS.length - 1;

            return (
              <div
                key={index}
                className={`metric-flow-item group relative py-6 sm:py-8 md:py-10 px-3 sm:px-4 lg:px-6 flex flex-col justify-between items-center text-center transition-all duration-400 hover:bg-white/[0.02] ${
                  isLastOdd ? "col-span-2 md:col-span-1" : ""
                }`}
              >
                {/* Subtle Amber Glow Beam on Hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{ background: "linear-gradient(90deg, transparent, #F59E0B, transparent)" }}
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: "radial-gradient(circle at 50% 30%, rgba(245,158,11,0.06), transparent 70%)" }}
                />

                {/* Index tag */}
                <span className="font-mono text-[9px] tracking-[0.2em] text-[#626C82] group-hover:text-[#F59E0B] transition-colors mb-3 uppercase font-bold">
                  0{index + 1}
                </span>

                {/* Counter Up Stat - inline flex preventing text wrap or congestion */}
                <div className="relative my-1 flex items-baseline justify-center whitespace-nowrap">
                  <div
                    className="font-display text-2xl sm:text-4xl lg:text-[2.75rem] font-black tracking-normal text-transparent bg-clip-text drop-shadow-[0_4px_16px_rgba(245,158,11,0.2)] transition-transform duration-400 group-hover:scale-105 inline-flex items-baseline"
                    style={{ backgroundImage: "linear-gradient(135deg, #FFFFFF 0%, #FFF1C5 35%, #F59E0B 100%)" }}
                  >
                    <span>{metric.prefix}</span>
                    <AnimatedCounter
                      end={Number(metric.value)}
                      decimals={hasDecimals ? 1 : 0}
                      duration={1.6 + index * 0.1}
                      trigger={inView}
                    />
                    <span>{metric.suffix}</span>
                  </div>
                </div>

                {/* Metric Label */}
                <div className="mt-2 sm:mt-3 flex flex-col items-center gap-0.5 sm:gap-1">
                  <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-[0.15em] sm:tracking-[0.18em] text-white uppercase group-hover:text-[#FDE68A] transition-colors">
                    {metric.label}
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-[#8E97A8] font-sans">
                    Average Verified Lift
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Compact Bottom Telemetry Strip ── */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 px-2 text-[11px] font-mono text-[#8E97A8]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] animate-ping" />
            <span>REAL-TIME AUDITED TELEMETRY</span>
          </div>
          <div className="flex items-center gap-5">
            <span>99.4% CLIENT RETENTION</span>
            <span className="hidden sm:inline">•</span>
            <span>Q1-Q4 BENCHMARK VERIFIED</span>
          </div>
        </div>

      </div>
    </section>
  );
}
