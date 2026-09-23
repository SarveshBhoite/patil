"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PRICING_PLANS } from "@/lib/constants";
import { Check, ShoppingCart, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function PricingSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".pricing-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-24 md:py-32 bg-[#090A0F]" ref={containerRef}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className="pricing-card flex flex-col bg-[#11141E]/85 backdrop-blur-md rounded-3xl border border-white/[0.08] p-8 shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:border-[#F59E0B]/40 hover:shadow-[0_20px_60px_rgba(0,0,0,0.7),0_0_24px_rgba(245,158,11,0.12)] transition-all duration-300 relative overflow-hidden"
            >
              {/* Top Accent / Icon */}
              <div className="w-14 h-14 rounded-2xl bg-[#F59E0B]/10 text-[#F59E0B] flex items-center justify-center mb-6 border border-[#F59E0B]/20">
                <Zap className="w-7 h-7" fill="currentColor" />
              </div>

              {/* Category */}
              <div className="font-mono text-[11px] font-bold text-[#FDE68A] uppercase tracking-widest mb-2">
                {plan.category}
              </div>

              {/* Title */}
              <h3 className="font-display text-2xl font-bold text-[#F3F5F9] mb-4 leading-tight">
                {plan.title}
              </h3>

              {/* Description */}
              <p className="text-[#9DA6BA] text-sm leading-relaxed mb-6 font-normal">
                {plan.description}
              </p>

              {/* What's included */}
              <div className="flex flex-col gap-3 mb-8 flex-1">
                <p className="font-mono text-xs font-bold text-[#FDE68A] uppercase tracking-wider">Deliverables included:</p>
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#F59E0B]/15 text-[#F59E0B] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-sm font-normal text-[#EAEFF8]">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="h-px w-full bg-white/[0.08] mb-6" />

              {/* Price & CTA */}
              <div className="flex flex-col gap-6">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-3xl font-extrabold text-[#F3F5F9]">
                    ₹{plan.price}
                  </span>
                  <span className="font-mono text-base font-medium text-[#626C82] line-through decoration-1">
                    ₹{plan.originalPrice}
                  </span>
                </div>

                <button className="btn-bronze-outline w-full py-4 text-xs font-mono uppercase tracking-widest font-bold flex items-center justify-center gap-2 rounded-full">
                  <ShoppingCart className="w-4 h-4 text-[#F59E0B]" />
                  <span>Select Package</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
