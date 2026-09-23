"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { DEMO_TESTIMONIALS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import TrustNetwork from "./TrustNetwork";

export default function TestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const quoteRef = useRef<HTMLDivElement>(null);
  
  // Handle smooth transition when index changes
  const handleIndexChange = (newIndex: number) => {
    if (newIndex === activeIndex || !quoteRef.current) return;
    
    gsap.to(quoteRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.3,
      onComplete: () => {
        setActiveIndex(newIndex);
        gsap.to(quoteRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out"
        });
      }
    });
  };

  const activeTestimonial = DEMO_TESTIMONIALS[activeIndex];

  return (
    <div className="relative w-full min-h-[60vh] md:min-h-[50vh] flex flex-col justify-between items-center rounded-3xl bg-white/[0.01] border border-white/5 overflow-hidden p-8 md:p-16">
      
      {/* Background Graphic */}
      <TrustNetwork activeIndex={activeIndex} />

      {/* Main Quote Content */}
      <div 
        ref={quoteRef} 
        className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center mt-12 md:mt-8"
      >
        {/* Subtle decorative quotation mark */}
        <div className="absolute -top-12 -left-4 md:-top-16 md:-left-8 text-8xl md:text-9xl text-white/[0.03] font-display font-bold pointer-events-none select-none">
          &quot;
        </div>
        {/* Warning Badge */}
        <div className="inline-block px-3 py-1 mb-8 text-[10px] font-mono font-bold tracking-widest uppercase bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 rounded-sm">
          Demo Testimonial
        </div>

        <h3 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold tracking-tighter leading-[1.1] mb-12">
          &quot;{activeTestimonial.quote}&quot;
        </h3>

        <div className="flex flex-col items-center">
          <div className="text-lg font-bold mb-1">{activeTestimonial.name}</div>
          <div className="text-sm font-mono text-muted uppercase tracking-wider">
            {activeTestimonial.role} <span className="text-white/20 mx-2">|</span> <span className="text-primary">{activeTestimonial.company}</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="relative z-10 flex items-center justify-center gap-4 mt-20">
        {DEMO_TESTIMONIALS.map((testimonial, i) => {
          const isActive = activeIndex === i;
          return (
            <button
              key={testimonial.id}
              onClick={() => handleIndexChange(i)}
              aria-label={`View testimonial ${i + 1}`}
              aria-current={isActive}
              className="group flex flex-col items-center gap-2 focus:outline-none"
            >
              <span className={cn(
                "text-xs font-mono tracking-widest transition-colors duration-300",
                isActive ? "text-text font-bold" : "text-muted group-hover:text-text/70"
              )}>
                {testimonial.id}
              </span>
              <div className="w-12 h-0.5 bg-white/10 overflow-hidden rounded-full">
                <div className={cn(
                  "h-full bg-primary transition-transform duration-500 ease-out",
                  isActive ? "translate-x-0" : "-translate-x-full"
                )} />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
