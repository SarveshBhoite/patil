"use client";

import { CaseStudy } from "@/types";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROJECT_VISUALS } from "@/components/work/ProjectVisuals";

gsap.registerPlugin(ScrollTrigger);

interface CaseStudyDetailClientProps {
  study: CaseStudy;
  nextProject: CaseStudy;
}

export default function CaseStudyDetailClient({ study, nextProject }: CaseStudyDetailClientProps) {
  
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Hero Entrance
      gsap.fromTo(
        ".cs-hero-reveal",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out", delay: 0.2 }
      );

      // Section Reveals
      const sections = document.querySelectorAll(".cs-section");
      sections.forEach((section) => {
        gsap.fromTo(
          section.querySelectorAll(".cs-reveal"),
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              once: true,
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, [study.slug]); // Re-run if slug changes

  const Visual = PROJECT_VISUALS[study.visualType] || PROJECT_VISUALS["performance"];

  return (
    <article className="w-full bg-background min-h-screen text-text pt-32 pb-0">
      
      {/* Back Navigation */}
      <div className="container mx-auto px-6 md:px-12 mb-12 cs-hero-reveal">
        <Link href="/#work" className="inline-flex items-center gap-2 text-sm font-mono text-muted hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm py-1">
          <ArrowLeft className="w-4 h-4" /> BACK TO WORK
        </Link>
      </div>

      {/* 01. HERO */}
      <header className="container mx-auto px-6 md:px-12 mb-24 md:mb-40">
        
        {/* Warning Badge */}
        <div className="cs-hero-reveal inline-block px-3 py-1 mb-8 text-[10px] font-mono font-bold tracking-widest uppercase bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 rounded-sm">
          Demo Case Study
        </div>
        
        <div className="cs-hero-reveal flex items-center gap-4 mb-8">
          <span className="w-2 h-2 rounded-full bg-primary" />
          <span className="text-xs font-semibold tracking-widest text-muted uppercase">
            {study.category}
          </span>
        </div>

        <h1 className="cs-hero-reveal font-display text-[clamp(2.5rem,7vw,6rem)] font-bold tracking-tighter leading-[1.05] mb-12 max-w-5xl">
          {study.title}
        </h1>

        <div className="cs-hero-reveal grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-white/10 mb-16">
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-mono text-muted uppercase tracking-widest">Client</span>
            <span className="text-sm font-medium">{study.client}</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-mono text-muted uppercase tracking-widest">Industry</span>
            <span className="text-sm font-medium">{study.industry}</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-mono text-muted uppercase tracking-widest">Services</span>
            <span className="text-sm font-medium">{study.services?.[0]} {study.services?.length ? `+${study.services.length - 1}` : ''}</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-mono text-muted uppercase tracking-widest">Year</span>
            <span className="text-sm font-medium">{study.year}</span>
          </div>
        </div>

        <div className="cs-hero-reveal w-full aspect-video md:aspect-[21/9] bg-[#0A0A0F] border border-white/5 rounded-3xl overflow-hidden relative">
          <Visual isActive={true} />
        </div>
      </header>

      {/* 02. CHALLENGE */}
      {study.challenge && (
        <section className="cs-section container mx-auto px-6 md:px-12 mb-24 md:mb-40 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-4 cs-reveal">
            <h2 className="text-sm font-mono font-bold tracking-widest text-muted uppercase">
              The Challenge
            </h2>
          </div>
          <div className="md:col-span-8 cs-reveal">
            <p className="text-2xl md:text-4xl leading-relaxed tracking-tight text-text/90">
              {study.challenge}
            </p>
          </div>
        </section>
      )}

      {/* 03. STRATEGY */}
      {study.strategy && (
        <section className="cs-section container mx-auto px-6 md:px-12 mb-24 md:mb-40 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-4 cs-reveal">
            <h2 className="text-sm font-mono font-bold tracking-widest text-muted uppercase">
              The Strategy
            </h2>
          </div>
          <div className="md:col-span-8 cs-reveal">
            <p className="text-xl leading-relaxed text-muted mb-12">
              {study.strategy.description}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 relative before:absolute before:inset-0 before:bg-white/5 before:-mx-8 before:-my-12 before:-z-10 before:rounded-3xl p-8 sm:p-12">
              {study.strategy.points.map((point, i) => (
                <div key={i} className="flex flex-col gap-4">
                  <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-primary font-mono text-sm">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h4 className="font-bold">{point}</h4>
                  <div className="w-12 h-px bg-white/10" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 04. EXECUTION */}
      {study.execution && study.execution.length > 0 && (
        <section className="cs-section container mx-auto px-6 md:px-12 mb-24 md:mb-40">
          <div className="cs-reveal mb-16 max-w-2xl">
            <h2 className="text-sm font-mono font-bold tracking-widest text-muted uppercase mb-6">
              The Execution
            </h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold tracking-tighter">
              BUILT TO MOVE.
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {study.execution.map((item, i) => (
              <div key={i} className="cs-reveal flex flex-col gap-6">
                <div className="aspect-[4/3] bg-white/[0.02] border border-white/5 rounded-2xl flex items-center justify-center p-12 overflow-hidden relative group">
                  {/* Abstract geometric visual representing execution assets */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="w-full h-full border border-dashed border-white/10 rounded-xl flex items-center justify-center relative">
                    <span className="text-[10px] font-mono text-muted/30 uppercase tracking-widest rotate-[-45deg] scale-150">
                      Execution Asset
                    </span>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border border-primary/20 rounded-full animate-ping opacity-20" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-muted leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 05. RESULTS */}
      <section className="cs-section container mx-auto px-6 md:px-12 mb-24 md:mb-40">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
          <div className="md:col-span-4 cs-reveal">
            <h2 className="text-sm font-mono font-bold tracking-widest text-muted uppercase mb-6">
              The Numbers
            </h2>
            
            {/* Warning Badge */}
            <div className="inline-block px-3 py-1 text-[10px] font-mono font-bold tracking-widest uppercase bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 rounded-sm">
              Illustrative Data
            </div>
          </div>
          
          <div className="md:col-span-8 cs-reveal">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {study.metrics.map((metric, i) => (
                <div key={i} className="flex flex-col gap-2 p-8 bg-white/[0.02] border border-white/5 rounded-2xl">
                  <div className="text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    {metric.prefix}{metric.value}{metric.suffix}
                  </div>
                  <div className="text-xs font-mono font-semibold tracking-widest text-muted uppercase">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 06. IMPACT */}
      {study.impact && (
        <section className="cs-section container mx-auto px-6 md:px-12 mb-32 md:mb-48 text-center max-w-4xl flex flex-col items-center">
          <div className="cs-reveal w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-12">
            <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
          </div>
          <h2 className="cs-reveal text-sm font-mono font-bold tracking-widest text-primary uppercase mb-8">
            FROM CAMPAIGN TO SYSTEM.
          </h2>
          <p className="cs-reveal text-2xl md:text-4xl leading-relaxed tracking-tight text-text/90">
            &quot;{study.impact}&quot;
          </p>
        </section>
      )}

      {/* 07. NEXT PROJECT */}
      <section className="border-t border-white/10">
        <Link 
          href={`/work/${nextProject.slug}`}
          className="group block w-full py-24 md:py-32 px-6 md:px-12 bg-white/[0.01] hover:bg-primary/5 transition-colors duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
        >
          <div className="container mx-auto flex flex-col items-center text-center">
            <span className="text-sm font-mono font-bold tracking-widest text-muted uppercase mb-6 group-hover:text-primary transition-colors">
              NEXT PROJECT
            </span>
            <h2 className="font-display text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter text-text/80 group-hover:text-text transition-colors flex items-center gap-4 md:gap-8">
              {nextProject.title.split(' ')[0]}...
              <div className="w-12 h-12 md:w-20 md:h-20 rounded-full border border-white/20 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all duration-500">
                <ArrowRight className="w-6 h-6 md:w-10 md:h-10 text-muted group-hover:text-primary transition-transform group-hover:translate-x-2" />
              </div>
            </h2>
          </div>
        </Link>
      </section>

    </article>
  );
}
