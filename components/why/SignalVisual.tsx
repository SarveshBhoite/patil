"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SignalVisualProps {
  sectionRef: React.RefObject<HTMLElement | null>;
}

export default function SignalVisual({ sectionRef }: SignalVisualProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !sectionRef.current) return;
    
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = canvas.getContext("2d", { alpha: false }); // alpha false for performance, we draw bg manually if needed, wait, we want transparent bg? Let's use alpha: true.
    if (!ctx) return;

    // Reset alpha: true for blending with the section background
    const canvasCtx = canvas.getContext("2d", { alpha: true });
    if (!canvasCtx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    canvas.width = width;
    canvas.height = height;

    const PARTICLE_COUNT = window.innerWidth < 768 ? 400 : 1200;
    
    interface Particle {
      xChaos: number;
      yChaos: number;
      xTarget: number;
      yTarget: number;
      size: number;
      speed: number;
      offset: number;
      color: string;
    }

    const particles: Particle[] = [];
    
    // Colors
    const colors = ["#7C3AED", "#2563EB", "#22D3EE", "#FFFFFF", "#A1A1AA"];

    // Initialize particles
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      // Target positions (Growth curve: exponential from bottom left to top right)
      // Normalize t from 0 to 1
      const t = i / PARTICLE_COUNT;
      // Exponential curve: y = e^(t*x) ...
      // Let's make an elegant sweeping curve
      const xTarget = width * 0.1 + (width * 0.8 * t);
      // y follows an inverted exponential or cubic curve for "growth"
      // t^3 gives a slow start and fast rise
      const yTarget = height * 0.8 - (height * 0.6 * Math.pow(t, 3));
      
      // Add slight noise to the target so it's a glowing band, not a single pixel line
      const targetNoiseX = (Math.random() - 0.5) * 40;
      const targetNoiseY = (Math.random() - 0.5) * 40;

      particles.push({
        xChaos: Math.random() * width,
        yChaos: Math.random() * height,
        xTarget: xTarget + targetNoiseX,
        yTarget: yTarget + targetNoiseY,
        size: Math.random() * 1.5 + 0.5,
        speed: Math.random() * 0.02 + 0.01,
        offset: Math.random() * Math.PI * 2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    // Proxy object for GSAP to animate
    const progressObj = { value: prefersReducedMotion ? 1 : 0 };

    if (!prefersReducedMotion) {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        animation: gsap.to(progressObj, { value: 1, ease: "none" }),
      });
    }

    let time = 0;

    const render = () => {
      time += 0.01;
      canvasCtx.clearRect(0, 0, width, height);
      
      const p = progressObj.value; // 0 (chaos) to 1 (signal)
      
      // Easing function for smoother transition
      const easeP = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;

      particles.forEach((particle) => {
        // Continuous organic movement
        const waveX = Math.sin(time * particle.speed + particle.offset) * 20;
        const waveY = Math.cos(time * particle.speed + particle.offset) * 20;
        
        // Chaos position keeps drifting slightly
        const currentChaosX = particle.xChaos + waveX * 2;
        const currentChaosY = particle.yChaos + waveY * 2;
        
        // Target position pulses slightly
        const currentTargetX = particle.xTarget + waveX * (1 - easeP);
        const currentTargetY = particle.yTarget + waveY;

        // Interpolate
        const x = currentChaosX + (currentTargetX - currentChaosX) * easeP;
        const y = currentChaosY + (currentTargetY - currentChaosY) * easeP;
        
        // Size and opacity pulse based on progress
        const alpha = 0.3 + (easeP * 0.5) + (Math.sin(time * 5 + particle.offset) * 0.2);
        
        canvasCtx.beginPath();
        canvasCtx.arc(x, y, particle.size, 0, Math.PI * 2);
        canvasCtx.fillStyle = particle.color;
        canvasCtx.globalAlpha = Math.max(0, Math.min(1, alpha));
        canvasCtx.fill();
      });
      
      // Draw connection lines between nearby particles when in signal mode
      if (easeP > 0.7 && !prefersReducedMotion && window.innerWidth > 768) {
        canvasCtx.lineWidth = 0.5;
        canvasCtx.globalAlpha = (easeP - 0.7) * 0.3; // fade in lines at the end
        
        // Only check a subset of particles for lines to save performance
        const step = 10; 
        for (let i = 0; i < PARTICLE_COUNT; i += step) {
          for (let j = i + step; j < PARTICLE_COUNT; j += step) {
            const dx = particles[i].xTarget - particles[j].xTarget;
            const dy = particles[i].yTarget - particles[j].yTarget;
            const dist = dx * dx + dy * dy;
            
            if (dist < 10000) { // roughly 100px
              canvasCtx.beginPath();
              canvasCtx.strokeStyle = particles[i].color;
              
              const x1 = particles[i].xChaos + (particles[i].xTarget - particles[i].xChaos) * easeP;
              const y1 = particles[i].yChaos + (particles[i].yTarget - particles[i].yChaos) * easeP;
              const x2 = particles[j].xChaos + (particles[j].xTarget - particles[j].xChaos) * easeP;
              const y2 = particles[j].yChaos + (particles[j].yTarget - particles[j].yChaos) * easeP;
              
              canvasCtx.moveTo(x1, y1);
              canvasCtx.lineTo(x2, y2);
              canvasCtx.stroke();
            }
          }
        }
      }

      canvasCtx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      
      // Re-calculate targets on resize
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const t = i / PARTICLE_COUNT;
        particles[i].xTarget = width * 0.1 + (width * 0.8 * t) + (Math.random() - 0.5) * 40;
        particles[i].yTarget = height * 0.8 - (height * 0.6 * Math.pow(t, 3)) + (Math.random() - 0.5) * 40;
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, [sectionRef]);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
