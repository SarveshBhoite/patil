"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface GrowthCurveProps {
  sectionRef: React.RefObject<HTMLElement | null>;
  activeMetricIndex: number | null;
  onMetricActive: (index: number) => void;
  className?: string;
}

// Coordinates for the 6 demo metrics along the curve
const NODES = [
  { cx: 100, cy: 380, delay: 0.1 },
  { cx: 300, cy: 360, delay: 0.25 },
  { cx: 500, cy: 300, delay: 0.4 },
  { cx: 650, cy: 220, delay: 0.55 },
  { cx: 800, cy: 120, delay: 0.75 },
  { cx: 950, cy: 40, delay: 0.9 },
];

export default function GrowthCurve({ sectionRef, activeMetricIndex, onMetricActive, className }: GrowthCurveProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const areaRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !sectionRef.current || !pathRef.current) return;

    // The length of the SVG path
    const pathLength = pathRef.current.getTotalLength();
    
    // Set initial states
    gsap.set(pathRef.current, { strokeDasharray: pathLength, strokeDashoffset: pathLength });
    gsap.set(areaRef.current, { opacity: 0 });

    const ctx = gsap.context(() => {
      // Create a proxy object to track scroll progress (0 to 1)
      const progressObj = { value: 0 };

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 60%",
        end: "bottom 80%",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          progressObj.value = progress;
          
          // Animate the path
          gsap.to(pathRef.current, {
            strokeDashoffset: pathLength * (1 - progress),
            duration: 0.1,
            overwrite: "auto"
          });
          
          // Animate the area opacity
          gsap.to(areaRef.current, {
            opacity: progress,
            duration: 0.1,
            overwrite: "auto"
          });

          // Determine which nodes are active based on progress
          // We trigger onMetricActive when the line passes a node
          NODES.forEach((node, index) => {
            if (progress >= node.delay && progress < node.delay + 0.15) {
              // Note: This fires very frequently during scrub.
              // We rely on React state batching or just let it fire.
              onMetricActive(index);
            }
          });
          
          // Clear active state if we scroll way past or before
          if (progress < NODES[0].delay || progress > 0.98) {
            onMetricActive(-1);
          }
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [sectionRef, onMetricActive]);

  return (
    <div ref={containerRef} className={cn("w-full h-full relative", className)}>
      <svg 
        viewBox="0 0 1000 500" 
        preserveAspectRatio="xMidYMid meet" 
        className="w-full h-full overflow-visible drop-shadow-2xl"
      >
        <defs>
          <linearGradient id="curveGradient" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="50%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#22D3EE" />
          </linearGradient>
          <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Faint Background Grid */}
        <path d="M0 100 L1000 100 M0 200 L1000 200 M0 300 L1000 300 M0 400 L1000 400" stroke="#ffffff" strokeWidth="0.5" strokeOpacity="0.05" />
        <path d="M200 0 L200 500 M400 0 L400 500 M600 0 L600 500 M800 0 L800 500" stroke="#ffffff" strokeWidth="0.5" strokeOpacity="0.05" />

        {/* Area under curve */}
        <path 
          ref={areaRef}
          d="M 0 450 Q 300 420, 500 300 T 800 120 T 1000 20 L 1000 500 L 0 500 Z" 
          fill="url(#areaGradient)" 
        />

        {/* Main Growth Curve */}
        <path 
          ref={pathRef}
          d="M 0 450 Q 300 420, 500 300 T 800 120 T 1000 20" 
          fill="none" 
          stroke="url(#curveGradient)" 
          strokeWidth="4" 
          strokeLinecap="round"
        />

        {/* Interactive Data Nodes */}
        {NODES.map((node, index) => {
          const isActive = activeMetricIndex === index;
          return (
            <g 
              key={`node-${index}`} 
              className="transition-all duration-500 ease-out"
              style={{ transform: isActive ? 'scale(1.2)' : 'scale(1)', transformOrigin: `${node.cx}px ${node.cy}px` }}
            >
              {/* Pulse effect */}
              <circle 
                cx={node.cx} 
                cy={node.cy} 
                r={isActive ? 25 : 0} 
                fill="#22D3EE" 
                className={cn("transition-all duration-700 ease-out", isActive ? "opacity-20" : "opacity-0")}
              />
              {/* Outer ring */}
              <circle 
                cx={node.cx} 
                cy={node.cy} 
                r={isActive ? 12 : 6} 
                fill="#050507" 
                stroke={isActive ? "#22D3EE" : "#3F3F46"} 
                strokeWidth="2" 
                className="transition-all duration-300"
              />
              {/* Inner dot */}
              <circle 
                cx={node.cx} 
                cy={node.cy} 
                r={isActive ? 4 : 2} 
                fill={isActive ? "#FFFFFF" : "#A1A1AA"} 
                className="transition-colors duration-300"
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
