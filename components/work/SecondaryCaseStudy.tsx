"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { PROJECT_VISUALS } from "./ProjectVisuals";
import { NumberTicker } from "@/components/ui/NumberTicker";
import { CaseStudy, Metric } from "@/types";

interface SecondaryCaseStudyProps {
  project: CaseStudy;
}

export default function SecondaryCaseStudy({ project }: SecondaryCaseStudyProps) {
  const [isHovered, setIsHovered] = useState(false);
  const Visual = PROJECT_VISUALS[project.visualType] || PROJECT_VISUALS["performance"];

  return (
    <Link 
      href={`/work/${project.slug}`}
      className="group flex flex-col gap-6 p-6 md:p-8 rounded-3xl bg-white/[0.01] border border-white/5 transition-all duration-500 hover:bg-white/[0.02] hover:border-white/10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full aspect-video relative rounded-xl overflow-hidden border border-white/10">
        <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
          <Visual isActive={isHovered} />
        </div>
      </div>
      
      <div>
        <div className="text-xs font-mono text-secondary mb-3 uppercase tracking-widest font-semibold">
          {project.category}
        </div>
        
        <h4 className="text-2xl font-bold tracking-tight mb-6 transition-transform duration-500 group-hover:translate-x-1">
          {project.title}
        </h4>
        
        <div className="grid grid-cols-3 gap-4 mb-8">
          {project.metrics.map((metric: Metric, i: number) => (
            <div key={i} className="flex flex-col gap-1 border-t border-white/10 pt-3 transition-colors duration-500 group-hover:border-secondary/50">
              <div className={cn(
                "text-xl font-display font-bold transition-colors duration-500",
                isHovered ? "text-secondary" : "text-text"
              )}>
                <NumberTicker 
                  value={metric.value} 
                  prefix={metric.prefix} 
                  suffix={metric.suffix} 
                  decimals={metric.value % 1 !== 0 ? 1 : 0} 
                />
              </div>
              <div className="text-[10px] text-muted font-mono uppercase tracking-wider">{metric.label}</div>
            </div>
          ))}
        </div>
        
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-colors duration-500 group-hover:text-secondary">
          VIEW CASE STUDY 
          <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
