"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface GrowthMapProps {
  journey: string[];
  activeIndex: number;
}

export default function GrowthMap({ journey, activeIndex }: GrowthMapProps) {
  const pathRef = useRef<SVGPathElement>(null);
  const prevIndexRef = useRef(activeIndex);

  useEffect(() => {
    if (!pathRef.current) return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const pathLength = pathRef.current.getTotalLength();
    
    if (prefersReducedMotion) {
      pathRef.current.style.strokeDasharray = `${pathLength}`;
      pathRef.current.style.strokeDashoffset = "0";
      prevIndexRef.current = activeIndex;
      return;
    }

    // Animate path drawing when industry changes
    if (prevIndexRef.current !== activeIndex) {
      gsap.fromTo(
        pathRef.current,
        { strokeDasharray: pathLength, strokeDashoffset: pathLength },
        { strokeDashoffset: 0, duration: 1.2, ease: "power2.inOut" }
      );
      prevIndexRef.current = activeIndex;
    }
  }, [activeIndex, journey]);

  // Generate a smooth cubic bezier path through 5 journey nodes
  // Nodes are arranged vertically with slight horizontal variation for visual interest
  const nodePositions = journey.map((_, i) => {
    const t = i / (journey.length - 1);
    const x = 200 + Math.sin(t * Math.PI * 1.5) * 80;
    const y = 40 + t * 420;
    return { x, y };
  });

  // Build SVG path string through the nodes
  const buildPath = () => {
    if (nodePositions.length < 2) return "";
    let d = `M ${nodePositions[0].x} ${nodePositions[0].y}`;
    for (let i = 1; i < nodePositions.length; i++) {
      const prev = nodePositions[i - 1];
      const curr = nodePositions[i];
      const cpY = (prev.y + curr.y) / 2;
      d += ` C ${prev.x} ${cpY}, ${curr.x} ${cpY}, ${curr.x} ${curr.y}`;
    }
    return d;
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 400 500" className="w-full max-w-[300px] md:max-w-[400px] h-auto overflow-visible">
        <defs>
          <linearGradient id="mapGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="50%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#22D3EE" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background path (faint) */}
        <path d={buildPath()} fill="none" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.05" />

        {/* Animated primary path */}
        <path
          ref={pathRef}
          d={buildPath()}
          fill="none"
          stroke="url(#mapGrad)"
          strokeWidth="3"
          strokeLinecap="round"
          filter="url(#glow)"
        />

        {/* Journey Nodes */}
        {nodePositions.map((pos, i) => (
          <g key={`node-${activeIndex}-${i}`}>
            {/* Outer pulse */}
            <circle
              cx={pos.x}
              cy={pos.y}
              r="18"
              fill="#7C3AED"
              opacity="0"
              className="animate-[ping_2s_ease-in-out_infinite]"
              style={{ animationDelay: `${i * 0.3}s`, opacity: 0.1 }}
            />
            {/* Node circle */}
            <circle
              cx={pos.x}
              cy={pos.y}
              r="6"
              fill="#050507"
              stroke={i === journey.length - 1 ? "#22D3EE" : "#7C3AED"}
              strokeWidth="2"
            />
            {/* Inner dot */}
            <circle
              cx={pos.x}
              cy={pos.y}
              r="2"
              fill={i === journey.length - 1 ? "#22D3EE" : "#FFFFFF"}
            />
            {/* Label */}
            <text
              x={i % 2 === 0 ? pos.x + 20 : pos.x - 20}
              y={pos.y + 4}
              fill="#FFFFFF"
              fontSize="11"
              fontWeight="600"
              textAnchor={i % 2 === 0 ? "start" : "end"}
              letterSpacing="0.1em"
              className="font-mono"
            >
              {journey[i]}
            </text>
            {/* Step number */}
            <text
              x={i % 2 === 0 ? pos.x + 20 : pos.x - 20}
              y={pos.y + 18}
              fill="#A1A1AA"
              fontSize="8"
              textAnchor={i % 2 === 0 ? "start" : "end"}
              letterSpacing="0.15em"
              className="font-mono"
            >
              STEP {String(i + 1).padStart(2, "0")}
            </text>
          </g>
        ))}

        {/* Final growth arrow at the bottom */}
        <g>
          <path
            d={`M ${nodePositions[nodePositions.length - 1].x - 6} ${nodePositions[nodePositions.length - 1].y + 20} L ${nodePositions[nodePositions.length - 1].x} ${nodePositions[nodePositions.length - 1].y + 35} L ${nodePositions[nodePositions.length - 1].x + 6} ${nodePositions[nodePositions.length - 1].y + 20}`}
            fill="none"
            stroke="#22D3EE"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}
