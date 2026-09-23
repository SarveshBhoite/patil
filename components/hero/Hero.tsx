"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import GhostFibers from "./GhostFibers";
import StrokeText from "./StrokeText";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const brandOutlineRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (!prefersReducedMotion) {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        gsap.set(
          [eyebrowRef.current, h1Ref.current, brandOutlineRef.current, textRef.current, ctaRef.current],
          { y: 30, opacity: 0 }
        );

        tl.to(eyebrowRef.current, { y: 0, opacity: 1, duration: 0.7, delay: 0.2 })
          .to(h1Ref.current, { y: 0, opacity: 1, duration: 0.8 }, "-=0.4")
          .to(brandOutlineRef.current, { y: 0, opacity: 1, duration: 0.8 }, "-=0.5")
          .to(textRef.current, { y: 0, opacity: 1, duration: 0.7 }, "-=0.5")
          .to(ctaRef.current, { y: 0, opacity: 1, duration: 0.7 }, "-=0.5");
      } else {
        gsap.set(
          [eyebrowRef.current, h1Ref.current, brandOutlineRef.current, textRef.current, ctaRef.current],
          { opacity: 1, y: 0 }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[85vh] lg:min-h-[90vh] w-full flex flex-col justify-center pt-28 md:pt-32 pb-10 md:pb-14 overflow-hidden bg-[#07080C]"
    >
      {/* ── React Bits GhostFibers Visual Background ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <GhostFibers
          lineColor="#140E35"
          glowColor="#3437A0"
          speed={0.2}
          scale={2}
          rotation={0}
          rotationSpeed={0.25}
          layers={4}
          waveAmplitude={0.015}
          waveFrequency={3}
          waveSpeed={0.15}
          layerSpeed={0.08}
          twist={0.1}
          twistFrequency={5}
          twistSpeed={1.2}
          lineFrequency={5}
          lineSpacing={2}
          lineSharpness={16}
          glowFalloff={10}
          glowIntensity={1.6}
          brightness={2}
          blueBoost={1.25}
          vignette={0.8}
          grain={0.05}
          dpr={1}
          lightMode={false}
          fps={60}
          paused={false}
          className="w-full h-full"
        />
        {/* Subtle overlay gradient to blend with website background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#07080C_95%)] pointer-events-none" />
      </div>

      {/* ── Hero Foreground Content ── */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 xl:px-16 w-full relative z-10">
        <div className="max-w-2xl lg:max-w-3xl">
          
          {/* Eyebrow Tagline */}
          <div
            ref={eyebrowRef}
            className="text-[11px] md:text-xs font-mono font-bold tracking-[0.25em] text-[#9DA6BA] uppercase mb-4 flex items-center gap-2.5"
          >
            <span>WE AMPLIFY</span>
            <span className="w-8 h-px bg-white/20" />
          </div>

          {/* Crisp, Concise Headline */}
          <h1
            ref={h1Ref}
            className="font-display text-[clamp(2rem,4vw,3.4rem)] font-extrabold tracking-tight text-[#F3F5F9] uppercase leading-[1.08] mb-3"
          >
            Crafting Iconic<br />
            Digital Experiences
          </h1>

          {/* Animated StrokeText: LEADSPIRE looping letter-by-letter with fill */}
          <div ref={brandOutlineRef} className="my-2 select-none w-full overflow-visible">
            <StrokeText
              text="LEADSPIRE"
              strokeColor="#F59E0B"
              fillColor="#FDE68A"
              strokeWidth={1.8}
              drawDuration={1.2}
              fillDelay={0.15}
              stagger={0.14}
              ease="power2.out"
              trigger="loop"
              fillMode="wipe"
              fontSize={78}
              fontWeight={900}
              letterSpacing={3}
              reverse={false}
              className="font-display drop-shadow-[0_0_25px_rgba(245,158,11,0.35)]"
            />
          </div>

          {/* Concise Subtext */}
          <p
            ref={textRef}
            className="max-w-lg text-[0.95rem] md:text-[1.05rem] text-[#9DA6BA] mt-5 leading-relaxed font-normal"
          >
            Driving growth for leading luxury brands, tech disruptors, and forward-thinking enterprises through creativity.
          </p>

          {/* Actions */}
          <div ref={ctaRef} className="mt-8 flex flex-wrap items-center gap-5">
            <Link href="/contact">
              <button className="btn-bronze-outline group px-7 py-3 text-xs font-mono uppercase tracking-widest font-bold">
                <span>Start a Project</span>
                <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform duration-200 group-hover:translate-x-1 text-[#F59E0B]" />
              </button>
            </Link>
            <Link href="/work">
              <span className="text-xs font-mono text-white hover:text-[#FDE68A] transition-colors cursor-pointer flex items-center gap-1.5 underline-offset-4 hover:underline font-semibold">
                Explore Case Studies →
              </span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
