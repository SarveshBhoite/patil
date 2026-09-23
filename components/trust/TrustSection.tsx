"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TestimonialSlider from "./TestimonialSlider";

gsap.registerPlugin(ScrollTrigger);

export default function TrustSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const outroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Setup
      const headerElements = headerRef.current?.children ? Array.from(headerRef.current.children) : [];
      
      gsap.set(headerElements, { y: 30, opacity: 0 });
      gsap.set(sliderRef.current, { y: 40, opacity: 0 });

      // Entrance sequence
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 75%",
        once: true,
        onEnter: () => {
          const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
          
          tl.to(headerElements, { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 })
            .to(sliderRef.current, { y: 0, opacity: 1, duration: 1 }, "-=0.6");
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full bg-background pt-32 pb-32 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div ref={headerRef} className="max-w-3xl mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-xs font-semibold tracking-widest text-muted uppercase">
              TRUSTED BY PEOPLE WHO BUILD
            </span>
          </div>
          
          <h2 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] font-bold tracking-tighter leading-[1.05] mb-6">
            GOOD WORK<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              GETS TALKED ABOUT.
            </span>
          </h2>
          
          <p className="text-lg text-muted max-w-xl leading-relaxed">
            The strongest relationships are built through clear communication, meaningful work and measurable progress.
          </p>
        </div>

        {/* Featured Testimonial Slider */}
        <div ref={sliderRef} className="w-full mb-8">
          <TestimonialSlider />
        </div>

        {/* Section Outro Transition to next section (Industries) */}
        <div ref={outroRef} className="mt-32 w-full flex flex-col items-center justify-center opacity-30">
          <div className="w-px h-24 bg-gradient-to-b from-primary to-transparent mb-8" />
          <p className="text-xs font-mono tracking-widest uppercase text-muted">
            Businesses we help
          </p>
        </div>

      </div>
    </section>
  );
}
