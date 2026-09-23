"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import gsap from "gsap";

interface ServicesNetworkProps {
  activeIndex: number | null;
}

export default function ServicesNetwork({ activeIndex }: ServicesNetworkProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const nodes = [
    { id: 0, label: "STRATEGY", x: 20, y: 15 },
    { id: 1, label: "SOCIAL", x: 80, y: 30 },
    { id: 2, label: "PERFORMANCE", x: 15, y: 55 },
    { id: 3, label: "LEADS", x: 75, y: 70 },
    { id: 4, label: "WEB DEV", x: 30, y: 85 },
    { id: 5, label: "BRANDING", x: 85, y: 10 }, // Placed creatively
  ];

  const centerNode = { x: 50, y: 45, label: "GROWTH" };

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Subtle breathing animation for the entire network
    gsap.to(containerRef.current, {
      y: 10,
      rotation: 1,
      duration: 4,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut"
    });
  }, []);

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center pointer-events-none">
      <div ref={containerRef} className="absolute inset-0 w-full h-full">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          {/* Base lines connecting all nodes to center */}
          {nodes.map((node, i) => (
            <path
              key={`line-${i}`}
              d={`M ${centerNode.x} ${centerNode.y} Q ${(centerNode.x + node.x) / 2} ${(centerNode.y + node.y) / 2 + 10} ${node.x} ${node.y}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="0.2"
              className="text-white/10"
            />
          ))}
          
          {/* Active Highlight Lines */}
          {nodes.map((node, i) => (
            <path
              key={`line-active-${i}`}
              d={`M ${centerNode.x} ${centerNode.y} Q ${(centerNode.x + node.x) / 2} ${(centerNode.y + node.y) / 2 + 10} ${node.x} ${node.y}`}
              fill="none"
              stroke={activeIndex === i ? "#7C3AED" : "transparent"}
              strokeWidth="0.5"
              strokeDasharray="2 1"
              className="transition-all duration-700 ease-out"
              style={{
                strokeDashoffset: activeIndex === i ? 0 : 20,
                opacity: activeIndex === i ? 1 : 0
              }}
            />
          ))}

          {/* Central Growth Node */}
          <circle cx={centerNode.x} cy={centerNode.y} r="3" fill="#050507" stroke="#7C3AED" strokeWidth="0.5" />
          <circle 
            cx={centerNode.x} 
            cy={centerNode.y} 
            r="1.5" 
            fill="#7C3AED" 
            className={cn("transition-all duration-500", activeIndex !== null ? "animate-pulse shadow-[0_0_10px_#7c3aed]" : "")}
          />
          <text x={centerNode.x} y={centerNode.y - 5} fill="#FFFFFF" fontSize="3" fontWeight="bold" textAnchor="middle" letterSpacing="0.2">
            {centerNode.label}
          </text>

          {/* Outer Service Nodes */}
          {nodes.map((node, i) => (
            <g key={`node-${i}`} className="transition-all duration-500">
              <circle 
                cx={node.x} 
                cy={node.y} 
                r="1.5" 
                fill={activeIndex === i ? "#22D3EE" : "#050507"} 
                stroke={activeIndex === i ? "#22D3EE" : "#3F3F46"} 
                strokeWidth="0.3" 
                className="transition-colors duration-500"
              />
              <text 
                x={node.x} 
                y={node.y + 4} 
                fill={activeIndex === i ? "#FFFFFF" : "#71717A"} 
                fontSize="2.5" 
                fontWeight="500" 
                textAnchor="middle" 
                className="transition-colors duration-500"
              >
                {node.label}
              </text>
            </g>
          ))}
        </svg>

        {/* Dynamic Glow Behind Active Node (Approximated with absolute divs over the SVG) */}
        <div className="absolute inset-0 transition-opacity duration-700 mix-blend-screen opacity-50">
          <div 
            className="absolute w-[200px] h-[200px] bg-primary/20 rounded-full blur-[60px] transition-all duration-700 ease-out"
            style={{
              left: activeIndex !== null ? `${nodes[activeIndex].x}%` : '50%',
              top: activeIndex !== null ? `${nodes[activeIndex].y}%` : '50%',
              transform: 'translate(-50%, -50%)',
              opacity: activeIndex !== null ? 1 : 0
            }}
          />
        </div>
      </div>
    </div>
  );
}
