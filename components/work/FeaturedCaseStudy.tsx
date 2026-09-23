"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { PROJECT_VISUALS } from "./ProjectVisuals";
import { NumberTicker } from "@/components/ui/NumberTicker";
import { CaseStudy, Metric } from "@/types";

interface FeaturedCaseStudyProps {
  project: CaseStudy;
}

export default function FeaturedCaseStudy({ project }: FeaturedCaseStudyProps) {
  const [isHovered, setIsHovered] = useState(false);
  const visualRef = useRef<HTMLDivElement>(null);
  
  const Visual = PROJECT_VISUALS[project.visualType] || PROJECT_VISUALS["performance"];

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!visualRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = visualRef.current.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    
    visualRef.current.style.transform = `perspective(1000px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (!visualRef.current) return;
    visualRef.current.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)`;
  };

  return (
    <Link 
      href={`/work/${project.slug}`}
      className="group relative flex flex-col lg:flex-row gap-8 lg:gap-16 items-center p-6 md:p-12 rounded-3xl bg-white/[0.01] border border-white/5 transition-colors duration-500 hover:bg-white/[0.03] hover:border-white/10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {/* Visual Side */}
      <div className="w-full lg:w-1/2 aspect-square md:aspect-video lg:aspect-square relative rounded-2xl overflow-hidden border border-white/10">
        <div 
          ref={visualRef}
          className="absolute inset-0 w-full h-full transition-transform duration-300 ease-out"
        >
          <Visual isActive={isHovered} />
        </div>
      </div>

      {/* Content Side */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <div className="text-sm font-mono text-primary mb-4 uppercase tracking-widest font-semibold flex items-center gap-2">
          {project.category}
          {project.isFeatured && <span className="px-2 py-0.5 rounded-full bg-primary/20 text-xs">FEATURED</span>}
        </div>
        
        <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.1] mb-8 transition-transform duration-500 group-hover:translate-x-2">
          {project.title}
        </h3>
        
        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {project.metrics.map((metric: Metric, i: number) => (
            <div key={i} className="flex flex-col gap-1 border-l border-white/10 pl-4 transition-colors duration-500 group-hover:border-primary/50">
              <div className={cn(
                "text-3xl md:text-4xl font-display font-bold transition-colors duration-500",
                isHovered ? "text-primary" : "text-text"
              )}>
                <NumberTicker 
                  value={metric.value} 
                  prefix={metric.prefix} 
                  suffix={metric.suffix} 
                  decimals={metric.value % 1 !== 0 ? 1 : 0} 
                />
              </div>
              <div className="text-xs text-muted font-mono uppercase tracking-wider">{metric.label}</div>
            </div>
          ))}
        </div>
        
        <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest transition-colors duration-500 group-hover:text-primary">
          VIEW CASE STUDY 
          <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-2" />
        </div>
      </div>
    </Link>
  );
}
