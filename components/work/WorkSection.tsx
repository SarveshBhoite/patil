"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface FeaturedWorkItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  metricPrimary: { value: string; label: string };
  metricSecondary: { value: string; label: string };
  description: string;
  image?: string;
  layout?: "metric" | "split" | "image-portrait";
}

const FEATURED_PROJECTS: FeaturedWorkItem[] = [
  {
    id: "01",
    slug: "aethel-fashion-house",
    title: "AETHEL",
    category: "Fashion House Rebrand",
    metricPrimary: { value: "250%", label: "Growth" },
    metricSecondary: { value: "50%", label: "ROI" },
    description:
      "Redefining luxury digital presence, modernizing connection, conversations, and creative omnichannel creativity.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop",
    layout: "image-portrait",
  },
  {
    id: "02",
    slug: "luna-arc",
    title: "LUNA ARC",
    category: "Digital Experience",
    metricPrimary: { value: "300%", label: "Growth" },
    metricSecondary: { value: "50%", label: "ROI" },
    description:
      "Digital experience collaborative and innovating growth across next-generation web architectures.",
    layout: "metric",
  },
  {
    id: "03",
    slug: "noir-and-co",
    title: "NOIR & CO.",
    category: "Identity & Visual System",
    metricPrimary: { value: "250%", label: "Growth" },
    metricSecondary: { value: "50%", label: "ROI" },
    description:
      "Driving growth for leading luxury brands through bespoke typography, identity systems, and global campaigns.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    layout: "split",
  },
  {
    id: "04",
    slug: "velveteen-atelier",
    title: "VALKYRIE",
    category: "High-Performance Flagship",
    metricPrimary: { value: "184%", label: "Conversions" },
    metricSecondary: { value: "3.2×", label: "ROAS" },
    description:
      "A headless e-commerce powerhouse built for extreme speed, tactile interactions, and uncompromised brand luxury.",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
    layout: "split",
  },
];

export default function WorkSection({ hideViewAll = false }: { hideViewAll?: boolean }) {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      const headerEls = headerRef.current ? Array.from(headerRef.current.children) : [];
      const cards = gridRef.current ? Array.from(gridRef.current.children) : [];

      gsap.set(headerEls, { y: 20, opacity: 0 });
      gsap.set(cards, { y: 30, opacity: 0 });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 75%",
        once: true,
        onEnter: () => {
          gsap.to(headerEls, { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" });
          gsap.to(cards, { y: 0, opacity: 1, duration: 0.7, stagger: 0.15, ease: "power3.out", delay: 0.2 });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative w-full py-14 md:py-20 overflow-hidden bg-[#07080C]"
    >
      {/* Background ambient luxury warmth */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full blur-[180px] opacity-[0.12]"
          style={{ background: "radial-gradient(circle, #F59E0B 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-10 left-10 w-[500px] h-[500px] rounded-full blur-[160px] opacity-[0.08]"
          style={{ background: "radial-gradient(circle, #D97706 0%, transparent 70%)" }}
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 xl:px-16 relative z-10">
        
        {/* Section Header matching the reference: "Featured Work" with sparkle stars */}
        <div
          ref={headerRef}
          className="flex items-center justify-between border-b border-white/[0.06] pb-8 mb-14"
        >
          <div>
            <span className="text-[11px] font-mono tracking-[0.25em] text-[#F59E0B] uppercase block mb-2 font-bold">
              PORTFOLIO SELECTIONS
            </span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F3F5F9]">
              Featured Work
            </h2>
          </div>

          {/* Sparkling gold four-point stars from mockup */}
          <div className="flex items-center gap-2 text-[#F59E0B] select-none text-xl md:text-2xl animate-pulse">
            <span>✦</span>
            <span>✦</span>
          </div>
        </div>

        {/* Featured Work Grid — Exact structure matching the mockup */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FEATURED_PROJECTS.map((item) => {
            if (item.layout === "split" && item.image) {
              return (
                <div
                  key={item.id}
                  className="card-obsidian-luxury md:col-span-2 group overflow-hidden flex flex-col lg:flex-row items-stretch min-h-[380px] p-6 lg:p-8 gap-8 border border-white/[0.07] hover:border-[#F59E0B]/50 transition-all duration-500 rounded-[28px]"
                >
                  {/* Left: Dark luxury photography / typography card */}
                  <div className="relative w-full lg:w-5/12 h-[260px] lg:h-auto rounded-[20px] overflow-hidden bg-[#0A0C13] border border-white/[0.06] flex items-center justify-center group-hover:border-[#F59E0B]/30 transition-colors">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-700 opacity-70 group-hover:opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07080C] via-[#07080C]/40 to-transparent" />
                    <div className="relative z-10 text-center px-4">
                      <span className="font-display text-2xl lg:text-3xl font-black tracking-widest text-[#F3F5F9] uppercase drop-shadow-md">
                        {item.title}
                      </span>
                    </div>
                  </div>

                  {/* Right: Metrics, summary and bronze button */}
                  <div className="w-full lg:w-7/12 flex flex-col justify-between py-2">
                    <div>
                      {/* Title & Category */}
                      <div className="mb-6">
                        <h3 className="font-display text-2xl lg:text-3xl font-extrabold text-[#F3F5F9] tracking-tight uppercase group-hover:text-[#FDE68A] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm font-sans text-[#8E97A8] tracking-wide mt-1">
                          {item.category}
                        </p>
                      </div>

                      {/* Side-by-side Metrics */}
                      <div className="flex items-start gap-12 mb-6">
                        <div>
                          <div className="font-display text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FDE68A] via-[#F59E0B] to-[#FF8A3D] drop-shadow-[0_2px_12px_rgba(245,158,11,0.25)]">
                            {item.metricPrimary.value}
                          </div>
                          <div className="text-xs font-mono uppercase tracking-widest text-[#8E97A8] mt-1 font-semibold">
                            {item.metricPrimary.label}
                          </div>
                        </div>

                        <div>
                          <div className="font-display text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FDE68A] via-[#F59E0B] to-[#FF8A3D] flex items-center drop-shadow-[0_2px_12px_rgba(245,158,11,0.25)]">
                            <span>{item.metricSecondary.value}</span>
                            <ArrowUpRight className="w-6 h-6 ml-1 text-[#F59E0B]" />
                          </div>
                          <div className="text-xs font-mono uppercase tracking-widest text-[#8E97A8] mt-1 font-semibold">
                            {item.metricSecondary.label}
                          </div>
                        </div>
                      </div>

                      {/* Editorial description */}
                      <p className="text-[#8E97A8] text-sm md:text-base leading-relaxed font-normal max-w-xl">
                        {item.description}
                      </p>
                    </div>

                    {/* Self-contained Project Footer / Deliverables Tag */}
                    <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                        <span className="text-xs font-mono font-semibold tracking-wider text-[#A6AFBF] uppercase">
                          Live Ecosystem
                        </span>
                      </div>
                      <span className="text-xs font-mono text-[#FDE68A] uppercase tracking-wider font-bold">
                        Production Deployed
                      </span>
                    </div>
                  </div>
                </div>
              );
            }

            if (item.layout === "image-portrait" && item.image) {
              return (
                <div
                  key={item.id}
                  className="card-obsidian-luxury group p-7 lg:p-8 border border-white/[0.07] hover:border-[#F59E0B]/50 transition-all duration-500 rounded-[28px] flex flex-col justify-between"
                >
                  <div>
                    {/* Header */}
                    <div className="mb-6">
                      <h3 className="font-display text-2xl lg:text-3xl font-extrabold text-[#F3F5F9] tracking-tight uppercase group-hover:text-[#FDE68A] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm font-sans text-[#8E97A8] tracking-wide mt-1">
                        {item.category}
                      </p>
                    </div>

                    {/* Side-by-side Metrics */}
                    <div className="flex items-start gap-10 mb-6">
                      <div>
                        <div className="font-display text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FDE68A] via-[#F59E0B] to-[#FF8A3D] drop-shadow-[0_2px_10px_rgba(245,158,11,0.2)]">
                          {item.metricPrimary.value}
                        </div>
                        <div className="text-xs font-mono uppercase tracking-widest text-[#8E97A8] mt-1 font-semibold">
                          {item.metricPrimary.label}
                        </div>
                      </div>

                      <div>
                        <div className="font-display text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FDE68A] via-[#F59E0B] to-[#FF8A3D] flex items-center drop-shadow-[0_2px_10px_rgba(245,158,11,0.2)]">
                          <span>{item.metricSecondary.value}</span>
                          <ArrowUpRight className="w-5 h-5 ml-1 text-[#F59E0B]" />
                        </div>
                        <div className="text-xs font-mono uppercase tracking-widest text-[#8E97A8] mt-1 font-semibold">
                          {item.metricSecondary.label}
                        </div>
                      </div>
                    </div>

                    {/* Image embedded in card */}
                    <div className="relative w-full h-[180px] rounded-xl overflow-hidden bg-[#0A0C13] mb-5 border border-white/[0.05]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-700 opacity-80"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#07080C]/80 via-transparent to-transparent" />
                    </div>

                    {/* Description */}
                    <p className="text-[#8E97A8] text-sm leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>

                  {/* Self-contained Project Footer / Deliverables Tag */}
                  <div className="mt-8 pt-5 border-t border-white/[0.06] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                      <span className="text-xs font-mono font-semibold tracking-wider text-[#A6AFBF] uppercase">
                        Verified Metric
                      </span>
                    </div>
                    <span className="text-xs font-mono text-[#FDE68A] uppercase tracking-wider font-bold">
                      Omnichannel Scale
                    </span>
                  </div>
                </div>
              );
            }

            // Standard Metric Glass Card (LUNA ARC style)
            return (
              <div
                key={item.id}
                className="card-obsidian-luxury group p-7 lg:p-8 border border-white/[0.07] hover:border-[#F59E0B]/50 transition-all duration-500 rounded-[28px] flex flex-col justify-between"
              >
                <div>
                  {/* Header */}
                  <div className="mb-8">
                    <h3 className="font-display text-2xl lg:text-3xl font-extrabold text-[#F3F5F9] tracking-tight uppercase group-hover:text-[#FDE68A] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm font-sans text-[#8E97A8] tracking-wide mt-1">
                      {item.category}
                    </p>
                  </div>

                  {/* Side-by-side Metrics */}
                  <div className="flex items-start gap-12 mb-8">
                    <div>
                      <div className="font-display text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FDE68A] via-[#F59E0B] to-[#FF8A3D] drop-shadow-[0_2px_12px_rgba(245,158,11,0.25)]">
                        {item.metricPrimary.value}
                      </div>
                      <div className="text-xs font-mono uppercase tracking-widest text-[#8E97A8] mt-1 font-semibold">
                        {item.metricPrimary.label}
                      </div>
                    </div>

                    <div>
                      <div className="font-display text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FDE68A] via-[#F59E0B] to-[#FF8A3D] flex items-center drop-shadow-[0_2px_12px_rgba(245,158,11,0.25)]">
                        <span>{item.metricSecondary.value}</span>
                        <ArrowUpRight className="w-6 h-6 ml-1 text-[#F59E0B]" />
                      </div>
                      <div className="text-xs font-mono uppercase tracking-widest text-[#8E97A8] mt-1 font-semibold">
                        {item.metricSecondary.label}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[#8E97A8] text-sm md:text-base leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Self-contained Project Footer / Deliverables Tag */}
                <div className="mt-8 pt-5 border-t border-white/[0.06] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                    <span className="text-xs font-mono font-semibold tracking-wider text-[#A6AFBF] uppercase">
                      Audited Result
                    </span>
                  </div>
                  <span className="text-xs font-mono text-[#FDE68A] uppercase tracking-wider font-bold">
                    Direct Response
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        {!hideViewAll && (
          <div className="mt-16 text-center">
            <Link href="/work">
              <button className="btn-bronze-outline px-8 py-3.5 text-xs font-mono uppercase tracking-widest">
                <span>Explore All Case Studies →</span>
              </button>
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
