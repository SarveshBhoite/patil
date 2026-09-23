"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Plus, Minus } from "lucide-react";
import { INDUSTRIES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import GrowthMap from "./GrowthMap";

gsap.registerPlugin(ScrollTrigger);

export default function IndustriesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileExpandedIndex, setMobileExpandedIndex] = useState(0);

  const activeIndustry = INDUSTRIES[activeIndex];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      const headerElements = headerRef.current?.children ? Array.from(headerRef.current.children) : [];
      const navItems = navRef.current?.children ? Array.from(navRef.current.children) : [];

      gsap.set(headerElements, { y: 30, opacity: 0 });
      gsap.set(navItems, { x: -20, opacity: 0 });
      gsap.set(mapRef.current, { scale: 0.95, opacity: 0 });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 75%",
        once: true,
        onEnter: () => {
          const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

          tl.to(headerElements, { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 })
            .to(navItems, { x: 0, opacity: 1, duration: 0.6, stagger: 0.08 }, "-=0.5")
            .to(mapRef.current, { scale: 1, opacity: 1, duration: 1 }, "-=0.6");
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleMobileToggle = (index: number) => {
    setMobileExpandedIndex(mobileExpandedIndex === index ? -1 : index);
    setActiveIndex(index);
  };

  return (
    <section ref={sectionRef} className="relative w-full bg-background pt-32 pb-32 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">

        {/* Header */}
        <div ref={headerRef} className="max-w-3xl mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
            <span className="text-xs font-semibold tracking-widest text-muted uppercase">
              WHO WE HELP
            </span>
          </div>

          <h2 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] font-bold tracking-tighter leading-[1.05] mb-6">
            DIFFERENT BUSINESSES.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              ONE GROWTH MINDSET.
            </span>
          </h2>

          <p className="text-lg text-muted max-w-2xl leading-relaxed">
            Every business has a different audience, buying journey and growth challenge. Growth systems adapted to different business models. We adapt the strategy, creative and channels around the business—not the other way around.
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex gap-12 lg:gap-16">

          {/* Left: Industry Navigation */}
          <div ref={navRef} className="w-1/2 flex flex-col">
            {INDUSTRIES.map((industry, index) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={industry.id}
                  onClick={() => setActiveIndex(index)}
                  aria-pressed={isActive}
                  className={cn(
                    "group relative w-full text-left py-6 border-b border-white/10 transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm",
                    isActive ? "bg-white/[0.02]" : "hover:bg-white/[0.01]"
                  )}
                >
                  <div className="flex items-center justify-between px-6">
                    <div className="flex items-center gap-6">
                      <span className={cn(
                        "text-sm font-mono font-bold transition-colors duration-500",
                        isActive ? "text-primary" : "text-muted/40"
                      )}>
                        {industry.id}
                      </span>
                      <h3 className={cn(
                        "text-xl lg:text-2xl font-bold tracking-tight transition-all duration-300",
                        isActive ? "text-text translate-x-1" : "text-muted"
                      )}>
                        {industry.title}
                      </h3>
                    </div>
                    <div className={cn(
                      "w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300",
                      isActive ? "border-primary bg-primary/10 text-primary" : "border-white/10 text-muted group-hover:border-white/30"
                    )}>
                      <ArrowRight className={cn("w-4 h-4 transition-transform duration-300", isActive ? "-rotate-45" : "")} />
                    </div>
                  </div>

                  {/* Expanding description */}
                  <div className={cn(
                    "overflow-hidden transition-all duration-500 ease-out px-6",
                    isActive ? "max-h-32 opacity-100 mt-4" : "max-h-0 opacity-0"
                  )}>
                    <p className="text-muted leading-relaxed text-sm pb-2">
                      {industry.description}
                    </p>
                  </div>

                  {/* Active accent bar */}
                  <div className={cn(
                    "absolute left-0 top-0 w-0.5 h-full bg-primary transition-opacity duration-500",
                    isActive ? "opacity-100" : "opacity-0"
                  )} />
                </button>
              );
            })}
          </div>

          {/* Right: Growth Map Visual */}
          <div ref={mapRef} className="w-1/2 flex items-center justify-center sticky top-24 self-start min-h-[600px] bg-white/[0.01] border border-white/5 rounded-3xl p-8">
            <GrowthMap journey={activeIndustry.journey} activeIndex={activeIndex} />
          </div>
        </div>

        {/* Mobile Layout: Accordion */}
        <div className="md:hidden flex flex-col">
          {INDUSTRIES.map((industry, index) => {
            const isExpanded = mobileExpandedIndex === index;
            return (
              <div key={industry.id} className="border-b border-white/10">
                <button
                  onClick={() => handleMobileToggle(index)}
                  aria-expanded={isExpanded}
                  className="w-full flex items-center justify-between py-5 px-2 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                >
                  <div className="flex items-center gap-4">
                    <span className={cn(
                      "text-xs font-mono font-bold",
                      isExpanded ? "text-primary" : "text-muted/50"
                    )}>
                      {industry.id}
                    </span>
                    <h3 className={cn(
                      "text-lg font-bold tracking-tight transition-colors",
                      isExpanded ? "text-text" : "text-muted"
                    )}>
                      {industry.title}
                    </h3>
                  </div>
                  <div className={cn("transition-colors", isExpanded ? "text-primary" : "text-muted")}>
                    {isExpanded ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>

                <div className={cn(
                  "overflow-hidden transition-all duration-500 ease-out",
                  isExpanded ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                )}>
                  <div className="px-2 pb-6">
                    <p className="text-muted leading-relaxed text-sm mb-6">
                      {industry.description}
                    </p>
                    <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 flex justify-center">
                      <GrowthMap journey={industry.journey} activeIndex={index} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Outro */}
        <div className="mt-32 text-center max-w-3xl mx-auto">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter leading-[1.1] mb-6">
            YOUR BUSINESS<br />HAS A DIFFERENT STORY.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              LET&apos;S BUILD ITS NEXT CHAPTER.
            </span>
          </h3>
          <div className="mt-8 flex justify-center">
            <a
              href="/industries"
              className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full px-8 text-sm font-medium transition-all duration-300 ease-out bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20"
            >
              <span className="relative z-10 flex items-center gap-2">
                EXPLORE ALL INDUSTRIES
                <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
