"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function LaunchCore() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !containerRef.current) return;

    const rings = containerRef.current.querySelectorAll(".orbit-ring");
    rings.forEach((ring, i) => {
      gsap.to(ring, {
        rotation: 360,
        duration: 12 + i * 6,
        repeat: -1,
        ease: "none",
        transformOrigin: "center center",
      });
    });

    const core = containerRef.current.querySelector(".core-pulse");
    if (core) {
      gsap.to(core, {
        scale: 1.15,
        opacity: 0.6,
        duration: 2,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
    }
  }, []);

  return (
    <div ref={containerRef} className="relative w-full max-w-[400px] aspect-square mx-auto">
      <svg viewBox="0 0 400 400" className="w-full h-full overflow-visible">
        <defs>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Background glow */}
        <circle cx="200" cy="200" r="160" fill="url(#coreGlow)" />

        {/* Orbit rings */}
        <g className="orbit-ring">
          <circle cx="200" cy="200" r="120" fill="none" stroke="#ffffff" strokeWidth="0.5" strokeOpacity="0.08" />
          <circle cx="200" cy="80" r="4" fill="#7C3AED" />
          <circle cx="320" cy="200" r="3" fill="#2563EB" />
        </g>
        <g className="orbit-ring">
          <circle cx="200" cy="200" r="80" fill="none" stroke="#ffffff" strokeWidth="0.5" strokeOpacity="0.06" strokeDasharray="4 8" />
          <circle cx="280" cy="200" r="3" fill="#22D3EE" />
        </g>
        <g className="orbit-ring">
          <circle cx="200" cy="200" r="150" fill="none" stroke="#ffffff" strokeWidth="0.5" strokeOpacity="0.04" />
          <circle cx="50" cy="200" r="2" fill="#FFFFFF" opacity="0.5" />
          <circle cx="200" cy="350" r="2" fill="#7C3AED" opacity="0.5" />
        </g>

        {/* Core */}
        <circle className="core-pulse" cx="200" cy="200" r="30" fill="#7C3AED" opacity="0.3" />
        <circle cx="200" cy="200" r="16" fill="#050507" stroke="#7C3AED" strokeWidth="2" />
        <circle cx="200" cy="200" r="6" fill="#FFFFFF" />

        {/* Incoming signal lines */}
        <path d="M 0 200 L 170 200" stroke="#7C3AED" strokeWidth="1" strokeOpacity="0.15" strokeDasharray="6 6" />
        <path d="M 400 200 L 230 200" stroke="#2563EB" strokeWidth="1" strokeOpacity="0.15" strokeDasharray="6 6" />
        <path d="M 200 0 L 200 170" stroke="#22D3EE" strokeWidth="1" strokeOpacity="0.15" strokeDasharray="6 6" />
        <path d="M 200 400 L 200 230" stroke="#7C3AED" strokeWidth="1" strokeOpacity="0.15" strokeDasharray="6 6" />
      </svg>
    </div>
  );
}
