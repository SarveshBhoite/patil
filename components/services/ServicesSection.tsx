"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Share2,
  Target,
  Search,
  Globe,
  Smartphone,
  MapPin,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const CAPABILITIES = [
  {
    id: "01",
    slug: "meta-ads",
    title: "Meta Ads & Performance Scale",
    tagline: "Algorithmic acquisition delivering high-ticket qualified conversions.",
    icon: Target,
    stats: { main: "3.8×", label: "Average Campaign ROAS" },
    deliverables: [
      "Dynamic creative testing & hooks",
      "Lookalike & first-party data models",
      "Server-side Conversions API (CAPI)",
      "Omnichannel retargeting funnels",
    ],
    highlight: "35% Lower Cost Per Acquisition",
  },
  {
    id: "02",
    slug: "website-development",
    title: "Bespoke Web & Digital Flagships",
    tagline: "Ultra-fast Next.js architecture built for extreme speed and conversions.",
    icon: Globe,
    stats: { main: "< 0.8s", label: "Page Load Benchmark" },
    deliverables: [
      "Headless Next.js & React frameworks",
      "Interactive 3D WebGL & GSAP animations",
      "High-converting checkout architecture",
      "Full Core Web Vitals 99+ score",
    ],
    highlight: "68% Average Conversion Increase",
  },
  {
    id: "03",
    slug: "social-media-marketing",
    title: "Social Media & Community Engine",
    tagline: "Building cultural resonance and viral attention across platforms.",
    icon: Share2,
    stats: { main: "+184%", label: "Average Organic Reach" },
    deliverables: [
      "Cinematic short-form video & reels",
      "Executive personal brand authority",
      "Influencer seeding & co-marketing",
      "Active community retention loops",
    ],
    highlight: "10M+ Organic Impressions Generated",
  },
  {
    id: "04",
    slug: "google-ads",
    title: "Google Ads & High-Intent Search",
    tagline: "Harvesting buyers at exact moment of commercial purchase intent.",
    icon: Search,
    stats: { main: "94%", label: "Impression Share in Target Geo" },
    deliverables: [
      "Search, Shopping & Performance Max",
      "Negative keyword & waste budget pruning",
      "Competitor conquesting strategies",
      "High-converting landing page pairs",
    ],
    highlight: "40% Cheaper High-Intent Leads",
  },
  {
    id: "05",
    slug: "app-development",
    title: "Custom App Development & SaaS",
    tagline: "Scalable iOS, Android & cloud solutions engineered for enterprise resilience.",
    icon: Smartphone,
    stats: { main: "99.9%", label: "Uptime Cloud Reliability" },
    deliverables: [
      "Cross-platform React Native & Flutter",
      "Real-time database sync & offline-first",
      "Stripe & merchant payment gateways",
      "App Store & Play Store optimization",
    ],
    highlight: "Zero-Latency Mobile Architecture",
  },
  {
    id: "06",
    slug: "google-business-profile",
    title: "Local Search & Map Pack Dominance",
    tagline: "Commanding the local map pack to monopolize high-ticket local clientele.",
    icon: MapPin,
    stats: { main: "#1", label: "Target Map Pack Placement" },
    deliverables: [
      "Local citations & schema microdata",
      "Automated client review flywheel",
      "Google Maps keyword rank expansion",
      "Direct call & visit lead tracking",
    ],
    highlight: "2.4× Inbound Local Call Volume",
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const contentCardRef = useRef<HTMLDivElement>(null);

  // Keyboard navigation & autoplay
  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % CAPABILITIES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [autoplay]);

  // Smooth slide change animation
  useEffect(() => {
    if (!contentCardRef.current) return;
    gsap.fromTo(
      contentCardRef.current,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" }
    );
  }, [activeIndex]);

  const activeService = CAPABILITIES[activeIndex];
  const IconComponent = activeService.icon;

  const nextSlide = () => {
    setAutoplay(false);
    setActiveIndex((prev) => (prev + 1) % CAPABILITIES.length);
  };

  const prevSlide = () => {
    setAutoplay(false);
    setActiveIndex((prev) => (prev - 1 + CAPABILITIES.length) % CAPABILITIES.length);
  };

  const selectSlide = (index: number) => {
    setAutoplay(false);
    setActiveIndex(index);
  };

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative w-full py-14 md:py-20 overflow-hidden bg-[#07080C]"
    >
      {/* ── Ambient Radial Atmosphere ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] rounded-full blur-[190px] opacity-[0.14]"
          style={{ background: "radial-gradient(circle, #F59E0B 0%, #3437A0 65%, transparent 80%)" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#07080C_95%)]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 xl:px-16 relative z-10">
        
        {/* ── Header: Centered & Crisp ── */}
        <div ref={headerRef} className="max-w-3xl mb-10 md:mb-14 text-center mx-auto flex flex-col items-center">
          <div
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full mb-4 bg-[#0E1119] border border-[#F59E0B]/30 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse" />
            <span className="text-[11px] font-mono font-bold tracking-[0.22em] text-[#FDE68A] uppercase">
              CAPABILITIES & SYSTEMS
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#F3F5F9] uppercase leading-[1.08] mb-3 text-center">
            Digital Solutions{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #FFF1C5 0%, #F59E0B 50%, #FF8A3D 100%)" }}
            >
              Engineered for Scale
            </span>
          </h2>

          <p className="text-sm md:text-base text-[#8E97A8] max-w-xl leading-relaxed font-normal text-center">
            Explore our specialized capability verticals, from algorithmic performance media to high-craft digital architectures.
          </p>
        </div>

        {/* ── Interactive Showcase Carousel / Stage Layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* ── Left Navigation Selector Pills ── */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-2.5">
            <div className="flex flex-col gap-2">
              {CAPABILITIES.map((service, index) => {
                const isCurrent = activeIndex === index;
                const ServiceIcon = service.icon;

                return (
                  <button
                    key={service.id}
                    onClick={() => selectSlide(index)}
                    className={`group w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between gap-4 cursor-pointer relative overflow-hidden ${
                      isCurrent
                        ? "bg-[#11141E] border-[#F59E0B]/60 shadow-[0_0_25px_rgba(245,158,11,0.18)]"
                        : "bg-[#090B10]/60 border-white/[0.06] hover:border-white/[0.18] hover:bg-[#0E1119]"
                    }`}
                  >
                    {/* Active left indicator accent bar */}
                    {isCurrent && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FDE68A] to-[#F59E0B]" />
                    )}

                    <div className="flex items-center gap-3.5 min-w-0">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                          isCurrent
                            ? "bg-[#F59E0B] text-[#07080C]"
                            : "bg-white/[0.04] text-[#8E97A8] group-hover:text-white"
                        }`}
                      >
                        <ServiceIcon className="w-4 h-4" />
                      </div>
                      <div className="truncate">
                        <div
                          className={`text-xs md:text-sm font-bold uppercase tracking-wide truncate transition-colors ${
                            isCurrent ? "text-white" : "text-[#8E97A8] group-hover:text-white"
                          }`}
                        >
                          {service.title}
                        </div>
                        <div className="text-[10px] font-mono text-[#626C82]">
                          SYSTEM {service.id}
                        </div>
                      </div>
                    </div>

                    <span
                      className={`text-xs font-mono font-bold transition-all ${
                        isCurrent ? "text-[#FDE68A] translate-x-0" : "text-[#626C82] group-hover:translate-x-1"
                      }`}
                    >
                      →
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Carousel Arrow Controls & Indicators */}
            <div className="flex items-center justify-between px-2 pt-4 border-t border-white/[0.06]">
              <div className="flex items-center gap-2">
                {CAPABILITIES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => selectSlide(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeIndex === idx ? "w-7 bg-[#F59E0B]" : "w-2 bg-white/20 hover:bg-white/40"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  className="w-8 h-8 rounded-full border border-white/10 hover:border-[#F59E0B]/50 hover:bg-[#F59E0B]/10 flex items-center justify-center text-white transition-all cursor-pointer"
                  aria-label="Previous capability"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-8 h-8 rounded-full border border-white/10 hover:border-[#F59E0B]/50 hover:bg-[#F59E0B]/10 flex items-center justify-center text-white transition-all cursor-pointer"
                  aria-label="Next capability"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* ── Right: Spotlight Stage Showcase Card ── */}
          <div className="lg:col-span-8 flex flex-col">
            <div
              ref={contentCardRef}
              className="card-obsidian-luxury flex-1 p-8 sm:p-10 lg:p-12 rounded-[28px] border border-white/[0.08] relative overflow-hidden flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
            >
              {/* Glowing decorative ambient corner */}
              <div
                className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-20 pointer-events-none"
                style={{ background: "radial-gradient(circle, #F59E0B 0%, transparent 70%)" }}
              />

              {/* Stage Top: System Code & Badge */}
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#F59E0B]/15 border border-[#F59E0B]/30 flex items-center justify-center text-[#F59E0B]">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono tracking-[0.25em] text-[#FDE68A] uppercase block font-bold">
                        SYSTEM ARCHITECTURE {activeService.id}
                      </span>
                      <span className="text-xs text-[#8E97A8] font-mono">
                        VERIFIED PRODUCTION CAPABILITY
                      </span>
                    </div>
                  </div>

                  <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#07080C] border border-[#F59E0B]/30 text-[#FDE68A]">
                    <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
                    <span>{activeService.highlight}</span>
                  </div>
                </div>

                {/* Main Showcase Title & Tagline */}
                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F3F5F9] uppercase tracking-tight mb-3">
                  {activeService.title}
                </h3>
                <p className="text-sm sm:text-base text-[#8E97A8] leading-relaxed max-w-2xl mb-8">
                  {activeService.tagline}
                </p>

                {/* Key Deliverables Check Grid */}
                <div className="mb-8">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#FDE68A] block mb-3">
                    Key Execution Deliverables
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeService.deliverables.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2.5 p-3 rounded-xl bg-[#090B10]/70 border border-white/[0.05]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#F59E0B] flex-shrink-0" />
                        <span className="text-xs text-[#F3F5F9] font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Stage Bottom: Primary Stat & Direct Link */}
              <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-6">
                <div>
                  <div className="font-display text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#FFF1C5] to-[#F59E0B]">
                    {activeService.stats.main}
                  </div>
                  <div className="text-xs font-mono uppercase tracking-wider text-[#8E97A8] mt-0.5">
                    {activeService.stats.label}
                  </div>
                </div>

                <Link href={`/services/${activeService.slug}`}>
                  <button className="btn-bronze-outline px-7 py-3 text-xs font-mono uppercase tracking-widest font-bold flex items-center gap-2 rounded-full cursor-pointer">
                    <span>Deploy Solution</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#F59E0B]" />
                  </button>
                </Link>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
