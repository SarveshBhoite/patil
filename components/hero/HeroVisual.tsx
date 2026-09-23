"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import the Canvas and Scene to avoid SSR issues and improve initial load
const Canvas = dynamic(() => import("@react-three/fiber").then((mod) => mod.Canvas), {
  ssr: false,
});

const GrowthEngine = dynamic(() => import("./GrowthEngine"), {
  ssr: false,
});

export default function HeroVisual() {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768;
    
    // Only render 3D if user hasn't requested reduced motion AND device is not mobile
    if (!prefersReducedMotion && !isMobile) {
      // Delay mounting slightly to prioritize text rendering
      const timer = setTimeout(() => setShouldRender(true), 100);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!shouldRender) {
    return (
      <div className="w-full h-full flex items-center justify-center opacity-30">
        <div className="w-[300px] h-[300px] rounded-full bg-primary/20 blur-[100px]" />
      </div>
    );
  }

  return (
    <div className="w-full h-full absolute inset-0 z-0 opacity-0" id="hero-visual-container">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ alpha: true, antialias: false, powerPreference: "high-performance" }}
        dpr={[1, 2]}
      >
        <GrowthEngine />
      </Canvas>
    </div>
  );
}
