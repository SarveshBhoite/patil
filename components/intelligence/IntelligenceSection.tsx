"use client";

import { useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DEMO_METRICS } from "@/lib/constants";
import GrowthCurve from "./GrowthCurve";
import { NumberTicker } from "@/components/ui/NumberTicker";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export default function IntelligenceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleMetricActive = useCallback((index: number) => {
    setActiveIndex(index === -1 ? null : index);
  }, []);

  // Percentage coordinates mapping to the SVG nodes for placing HTML metrics
  const metricPositions = [
    { left: "10%", top: "82%" }, // Under the first node
    { left: "30%", top: "60%" }, // Above the second node
    { left: "50%", top: "70%" }, // Under the third node
    { left: "65%", top: "30%" }, // Above the fourth node
    { left: "80%", top: "35%" }, // Under the fifth node
    { left: "88%", top: "0%" },  // Above the last node
  ];

  return (
    <section ref={sectionRef} className="relative w-full bg-background pt-32 pb-32 overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 mb-16 md:mb-24">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-semibold tracking-widest text-muted uppercase">
              GROWTH INTELLIGENCE
            </span>
          </div>
          
          <h2 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] font-bold tracking-tighter leading-[1.05] mb-6">
            ATTENTION<br />
            <span className="text-muted/50">ISN&apos;T THE GOAL.</span><br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
              GROWTH IS.
            </span>
          </h2>
          
          <p className="text-lg text-muted max-w-xl leading-relaxed">
            Every campaign creates data. We turn that data into decisions, improvements and measurable business momentum.
          </p>
        </div>
      </div>

      {/* Main Visualization Area */}
      <div className="w-full max-w-6xl mx-auto px-6 md:px-12">
        <div className="relative w-full aspect-square md:aspect-[2/1] rounded-3xl bg-white/[0.01] border border-white/5 p-4 md:p-8">
          
          <GrowthCurve 
            sectionRef={sectionRef} 
            activeMetricIndex={activeIndex}
            onMetricActive={handleMetricActive}
          />

          {/* HTML Overlay Metrics (Desktop) */}
          <div className="absolute inset-0 hidden md:block pointer-events-none p-4 md:p-8">
            {DEMO_METRICS.map((metric, i) => {
              const isActive = activeIndex === i;
              return (
                <div 
                  key={i}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
                  style={{ left: metricPositions[i].left, top: metricPositions[i].top }}
                  onMouseEnter={() => setActiveIndex(i)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  <div className={cn(
                    "flex flex-col items-center bg-background/80 backdrop-blur-md px-4 py-3 rounded-2xl border transition-all duration-500",
                    isActive ? "border-primary/50 shadow-[0_0_30px_rgba(34,211,238,0.15)] scale-110" : "border-white/10 scale-100 opacity-60"
                  )}>
                    <div className={cn(
                      "text-3xl font-display font-bold transition-colors duration-500",
                      isActive ? "text-text" : "text-muted"
                    )}>
                      {isActive ? (
                        <NumberTicker 
                          value={metric.value} 
                          prefix={metric.prefix} 
                          suffix={metric.suffix} 
                          decimals={metric.value % 1 !== 0 ? 1 : 0} 
                        />
                      ) : (
                        <span>{metric.prefix}{metric.value}{metric.suffix}</span>
                      )}
                    </div>
                    <div className={cn(
                      "text-[10px] font-mono uppercase tracking-widest mt-1 transition-colors duration-500",
                      isActive ? "text-accent" : "text-muted/50"
                    )}>
                      {metric.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Metrics List */}
        <div className="md:hidden grid grid-cols-2 gap-4 mt-8">
          {DEMO_METRICS.map((metric, i) => (
            <div key={i} className="flex flex-col bg-white/[0.02] border border-white/5 p-4 rounded-2xl">
              <div className="text-2xl font-display font-bold text-text mb-1">
                <NumberTicker 
                  value={metric.value} 
                  prefix={metric.prefix} 
                  suffix={metric.suffix} 
                  decimals={metric.value % 1 !== 0 ? 1 : 0} 
                />
              </div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-accent/80">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <p className="text-xs font-mono text-muted/40 uppercase tracking-widest">
            * Illustrative performance model
          </p>
        </div>
      </div>

      {/* Outro Transition */}
      <div className="container mx-auto px-6 md:px-12 mt-32 text-center">
        <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-muted">
          DATA SHOWS WHAT HAPPENED.<br />
          <span className="text-text">INSIGHT SHOWS WHAT TO DO NEXT.</span>
        </h3>
      </div>
    </section>
  );
}
