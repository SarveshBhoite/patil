"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

interface TrustNetworkProps {
  activeIndex: number;
}

export default function TrustNetwork({ activeIndex }: TrustNetworkProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const nodesGroupRef = useRef<SVGGElement>(null);

  const nodes = [
    { x: 20, y: 30 },
    { x: 40, y: 20 },
    { x: 60, y: 40 },
    { x: 80, y: 25 },
    { x: 30, y: 60 },
    { x: 50, y: 70 },
    { x: 75, y: 65 },
    { x: 90, y: 80 },
    { x: 15, y: 80 },
  ];

  // Which nodes are highlighted for which testimonial
  const highlightedNodeSets = [
    [1, 2, 5],
    [3, 6, 7],
    [0, 4, 8],
    [2, 5, 6],
  ];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !nodesGroupRef.current) return;

    // Subtle breathing animation for the entire network
    gsap.to(nodesGroupRef.current, {
      y: 10,
      rotation: 1,
      duration: 6,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut"
    });
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
      <svg 
        viewBox="0 0 100 100" 
        preserveAspectRatio="xMidYMid slice" 
        className="w-full h-full"
      >
        <g ref={nodesGroupRef}>
          {/* Connecting Lines */}
          {nodes.map((node, i) => (
            nodes.map((target, j) => {
              if (i < j) {
                const distance = Math.hypot(node.x - target.x, node.y - target.y);
                if (distance < 40) {
                  return (
                    <line 
                      key={`line-${i}-${j}`}
                      x1={node.x} 
                      y1={node.y} 
                      x2={target.x} 
                      y2={target.y} 
                      stroke="#ffffff" 
                      strokeWidth="0.1" 
                      opacity="0.1"
                    />
                  );
                }
              }
              return null;
            })
          ))}

          {/* Active Highlight Connections */}
          {highlightedNodeSets[activeIndex]?.map((nodeIndex, i, arr) => {
            const node = nodes[nodeIndex];
            const nextNode = nodes[arr[(i + 1) % arr.length]];
            return (
              <line 
                key={`hl-line-${i}`}
                x1={node.x} 
                y1={node.y} 
                x2={nextNode.x} 
                y2={nextNode.y} 
                stroke="#22D3EE" 
                strokeWidth="0.2" 
                className="transition-all duration-1000 ease-in-out"
                opacity="0.5"
              />
            );
          })}

          {/* Nodes */}
          {nodes.map((node, i) => {
            const isHighlighted = highlightedNodeSets[activeIndex]?.includes(i);
            return (
              <g key={`node-${i}`}>
                <circle 
                  cx={node.x} 
                  cy={node.y} 
                  r={isHighlighted ? 1 : 0.5} 
                  fill={isHighlighted ? "#FFFFFF" : "#3F3F46"} 
                  className="transition-all duration-700 ease-out"
                />
                <circle 
                  cx={node.x} 
                  cy={node.y} 
                  r={isHighlighted ? 3 : 0} 
                  fill="#7C3AED" 
                  className={cn("transition-all duration-700 ease-out", isHighlighted ? "opacity-30" : "opacity-0")}
                />
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
}
