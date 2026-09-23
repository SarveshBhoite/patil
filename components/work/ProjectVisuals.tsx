import * as React from "react";
import { cn } from "@/lib/utils";

interface VisualProps extends React.HTMLAttributes<HTMLDivElement> {
  isActive?: boolean;
}

export const PerformanceVisual = ({ isActive, className, ...props }: VisualProps) => (
  <div className={cn("w-full h-full relative overflow-hidden bg-background/50", className)} {...props}>
    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-50" />
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute bottom-0 w-full h-[80%]">
      {/* Grid lines */}
      <path d="M0 25 L100 25 M0 50 L100 50 M0 75 L100 75" stroke="#ffffff" strokeWidth="0.5" strokeOpacity="0.1" />
      {/* Animated Graph Line */}
      <path 
        d="M0 90 Q 20 80, 40 50 T 70 30 T 100 10" 
        fill="none" 
        stroke="url(#perfGrad)" 
        strokeWidth="2"
        className="transition-all duration-1000 ease-out"
        style={{ strokeDasharray: 200, strokeDashoffset: isActive ? 0 : 200 }}
      />
      {/* Area under the line */}
      <path 
        d="M0 90 Q 20 80, 40 50 T 70 30 T 100 10 L 100 100 L 0 100 Z" 
        fill="url(#perfArea)" 
        className={cn("transition-opacity duration-1000", isActive ? "opacity-100" : "opacity-0")}
      />
      <defs>
        <linearGradient id="perfGrad" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#22D3EE" />
        </linearGradient>
        <linearGradient id="perfArea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
    {/* Data points */}
    <div className={cn("absolute w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_#22D3EE] transition-all duration-700 delay-500", isActive ? "opacity-100 scale-100" : "opacity-0 scale-50")} style={{ top: '30%', left: '70%' }} />
    <div className={cn("absolute w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_#22D3EE] transition-all duration-700 delay-700", isActive ? "opacity-100 scale-100" : "opacity-0 scale-50")} style={{ top: '10%', left: '98%' }} />
  </div>
);

export const SocialVisual = ({ isActive, className, ...props }: VisualProps) => (
  <div className={cn("w-full h-full relative overflow-hidden bg-background/50 flex items-center justify-center", className)} {...props}>
    <svg viewBox="0 0 100 100" className="w-[80%] h-[80%]">
      <circle cx="50" cy="50" r="30" stroke="#ffffff" strokeWidth="0.5" strokeOpacity="0.1" fill="none" className={isActive ? "animate-[spin_10s_linear_infinite]" : ""} />
      <circle cx="50" cy="50" r="15" stroke="#ffffff" strokeWidth="0.5" strokeOpacity="0.1" fill="none" className={isActive ? "animate-[spin_15s_linear_infinite_reverse]" : ""} />
      
      {/* Nodes connecting */}
      <path d="M50 50 L30 30 M50 50 L75 40 M50 50 L40 75 M75 40 L65 20 M30 30 L20 45" stroke="#2563EB" strokeWidth="0.5" className={cn("transition-all duration-1000", isActive ? "opacity-100 stroke-dashoffset-0" : "opacity-0")} style={{ strokeDasharray: 50, strokeDashoffset: isActive ? 0 : 50 }} />
      
      <circle cx="50" cy="50" r="4" fill="#7C3AED" className={cn("transition-transform duration-700", isActive ? "scale-110" : "scale-100")} />
      <circle cx="30" cy="30" r="2" fill="#2563EB" className={cn("transition-all duration-500 delay-200", isActive ? "opacity-100 scale-100" : "opacity-0 scale-50")} />
      <circle cx="75" cy="40" r="2" fill="#22D3EE" className={cn("transition-all duration-500 delay-300", isActive ? "opacity-100 scale-100" : "opacity-0 scale-50")} />
      <circle cx="40" cy="75" r="2" fill="#2563EB" className={cn("transition-all duration-500 delay-400", isActive ? "opacity-100 scale-100" : "opacity-0 scale-50")} />
      <circle cx="65" cy="20" r="1" fill="#FFFFFF" className={cn("transition-all duration-500 delay-500", isActive ? "opacity-100 scale-100" : "opacity-0 scale-50")} />
      <circle cx="20" cy="45" r="1" fill="#FFFFFF" className={cn("transition-all duration-500 delay-600", isActive ? "opacity-100 scale-100" : "opacity-0 scale-50")} />
    </svg>
  </div>
);

export const WebVisual = ({ isActive, className, ...props }: VisualProps) => (
  <div className={cn("w-full h-full relative overflow-hidden bg-background/50", className)} {...props}>
    <div className={cn("absolute inset-4 border border-white/10 rounded-xl overflow-hidden transition-all duration-700 bg-white/[0.02]", isActive ? "border-white/30 shadow-[0_0_30px_rgba(37,99,235,0.1)]" : "")}>
      <div className="h-6 border-b border-white/10 flex items-center px-3 gap-1.5 bg-white/5">
        <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
        <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
        <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
      </div>
      <div className="p-4 flex flex-col gap-3">
        <div className={cn("h-4 bg-primary/20 rounded transition-all duration-700", isActive ? "w-1/3 opacity-100" : "w-0 opacity-0")} />
        <div className={cn("h-16 bg-white/5 rounded transition-all duration-700 delay-200", isActive ? "w-full opacity-100" : "w-0 opacity-0")} />
        <div className="flex gap-3">
          <div className={cn("h-8 bg-secondary/20 rounded transition-all duration-700 delay-400", isActive ? "w-1/2 opacity-100" : "w-0 opacity-0")} />
          <div className={cn("h-8 bg-accent/20 rounded transition-all duration-700 delay-500", isActive ? "w-1/2 opacity-100" : "w-0 opacity-0")} />
        </div>
      </div>
    </div>
  </div>
);

export const LeadsVisual = ({ isActive, className, ...props }: VisualProps) => (
  <div className={cn("w-full h-full relative overflow-hidden bg-background/50 flex flex-col items-center justify-center", className)} {...props}>
    <svg viewBox="0 0 100 100" className="w-[60%] h-[80%]">
      {/* Funnel Outline */}
      <path d="M10 10 L90 10 L60 60 L60 90 L40 90 L40 60 Z" fill="none" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.1" />
      
      {/* Particles entering */}
      <circle cx="30" cy={isActive ? "30" : "0"} r="2" fill="#7C3AED" className="transition-all duration-1000 ease-in opacity-50" />
      <circle cx="70" cy={isActive ? "40" : "0"} r="2" fill="#2563EB" className="transition-all duration-1000 delay-100 ease-in opacity-50" />
      <circle cx="50" cy={isActive ? "50" : "0"} r="2" fill="#22D3EE" className="transition-all duration-1000 delay-200 ease-in opacity-50" />
      
      {/* Qualified Lead emerging */}
      <circle cx="50" cy="90" r="4" fill="#22D3EE" className={cn("transition-all duration-500 delay-1000 shadow-[0_0_15px_#22D3EE]", isActive ? "opacity-100 scale-100" : "opacity-0 scale-50")} />
      
      {/* Connection line downwards */}
      <path d="M50 60 L50 90" stroke="#22D3EE" strokeWidth="2" className={cn("transition-all duration-500 delay-700", isActive ? "opacity-100" : "opacity-0")} style={{ strokeDasharray: 30, strokeDashoffset: isActive ? 0 : 30 }} />
    </svg>
  </div>
);

export const PROJECT_VISUALS: Record<string, React.FC<VisualProps>> = {
  "performance": PerformanceVisual,
  "social": SocialVisual,
  "web": WebVisual,
  "leads": LeadsVisual,
};
