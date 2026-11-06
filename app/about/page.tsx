import { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/cta/CTASection";
import { Shield, Sparkles, TrendingUp, Target, Users, Zap, CheckCircle2, Award, Compass, Cpu, Quote, Rocket, Eye } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | ELEVATE05",
  description: "Learn about our philosophy, engineering values, and how we architect digital growth engines.",
};

const PILLARS = [
  {
    num: "01",
    title: "Engineering Over Guesswork",
    desc: "We approach digital brand acceleration as an engineering discipline. Every touchpoint, ad dollar, and landing page is modeled as a conversion node within a unified commercial machine.",
    icon: Cpu,
  },
  {
    num: "02",
    title: "Radical Commercial Truth",
    desc: "We refuse vanity metrics. Impressions and likes don't scale enterprise balance sheets. We measure lifetime customer value, pipeline velocity, and return on capital deployed.",
    icon: Target,
  },
  {
    num: "03",
    title: "High-Frequency Iteration",
    desc: "Markets shift in days, not quarters. Our agile squad framework deploys live creative and code experiments every 72 hours to out-learn and out-maneuver industry competition.",
    icon: Zap,
  },
  {
    num: "04",
    title: "Bespoke Brand Gravitas",
    desc: "High conversions don't need to look cheap. We synthesize top-tier aesthetic craft with merciless direct-response psychology to command premium market pricing.",
    icon: Award,
  },
];

const METRICS_TIMELINE = [
  { year: "Phase 1", label: "Diagnostic Audit", detail: "Exposing revenue leakages, tracking breaks, and positioning deficits." },
  { year: "Phase 2", label: "Growth Architecture", detail: "Deploying high-converting web systems and multi-channel capture funnels." },
  { year: "Phase 3", label: "Algorithmic Scale", detail: "Activating cross-platform ad engines and precision attribution models." },
  { year: "Phase 4", label: "Market Dominance", detail: "Institutionalizing automated retention loops and category authority." },
];

export default function AboutPage() {
  return (
    <main className="flex-1 w-full flex flex-col bg-[#07080C]">
      {/* ── Page Hero with Prism background ── */}
      <PageHero
        eyebrow="ABOUT ELEVATE05"
        title={
          <>
            We Don&apos;t Just Build Brands,{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #FFF1C5 0%, #F59E0B 50%, #FF5A36 100%)" }}
            >
              We Build Digital Success.
            </span>
          </>
        }
        description="We are passionate about helping businesses grow, connect, and stand out in the digital world. Through creative thinking, innovative strategies, and the right digital solutions, we turn your business goals into meaningful results."
      >
        <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
          <Link href="/contact" tabIndex={-1}>
            <button className="btn-bronze-outline px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest">
              <span>Initiate Strategic Audit</span>
            </button>
          </Link>
          <Link href="/services">
            <button className="px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#9DA6BA] hover:text-[#F3F5F9] border border-white/10 hover:border-white/20 transition-all bg-white/[0.02]">
              Explore Systems
            </button>
          </Link>
        </div>
      </PageHero>

      {/* ── Who We Are / Founder Section: 45% Photo | 55% Story ── */}
      <section className="py-14 sm:py-20 md:py-28 relative border-b border-white/[0.06] overflow-hidden bg-[#080A10]">
        {/* Subtle brand ambient glows */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute top-1/4 -left-20 w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] rounded-full blur-[140px] sm:blur-[180px] opacity-[0.14]"
            style={{ background: "radial-gradient(circle, #F59E0B 0%, transparent 70%)" }}
          />
          <div
            className="absolute bottom-1/4 -right-20 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full blur-[140px] sm:blur-[180px] opacity-[0.10]"
            style={{ background: "radial-gradient(circle, #FF5A36 0%, transparent 70%)" }}
          />
        </div>

        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 lg:gap-16 items-center">

            {/* Left side (45% on desktop): Owner's professional photograph */}
            <div className="lg:col-span-5 flex justify-center w-full">
              <div className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[480px] group mx-auto">
                {/* Ambient back glow behind portrait */}
                <div className="absolute -inset-2 rounded-[28px] sm:rounded-[32px] bg-gradient-to-tr from-[#F59E0B]/30 via-[#FF8A3D]/20 to-transparent blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Portrait Card */}
                <div className="relative rounded-[22px] sm:rounded-[28px] overflow-hidden border border-white/10 bg-[#0E1119] shadow-[0_20px_60px_rgba(0,0,0,0.7)]">
                  <div className="relative aspect-[4/5] w-full">
                    <Image
                      src="/about.png"
                      alt="Parth Patil — Founder & CEO of ELEVATE05"
                      fill
                      priority
                      className="object-cover object-top filter grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700"
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 45vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07080C] via-[#07080C]/20 to-transparent opacity-85" />
                  </div>

                  {/* Bottom glass badge */}
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#07080C]/85 backdrop-blur-md border border-white/10 flex items-center justify-between">
                    <div>
                      <h4 className="font-display text-base sm:text-lg font-bold text-[#F3F5F9] tracking-wide">
                        Parth Patil
                      </h4>
                      <p className="text-[11px] sm:text-xs font-mono text-[#FDE68A] uppercase tracking-wider">
                        Founder &amp; CEO
                      </p>
                    </div>
                    <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#10B981] animate-pulse" title="Active" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right side (55% on desktop): Who We Are heading, agency intro & founder bio */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#11141E] border border-[#F59E0B]/30 shadow-sm mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
                  <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.2em] text-[#FDE68A] uppercase">
                    Who We Are
                  </span>
                </div>

                <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#F3F5F9] leading-[1.15] sm:leading-[1.1] tracking-tight">
                  We Believe Every Brand{" "}
                  <span
                    className="text-transparent bg-clip-text"
                    style={{ backgroundImage: "linear-gradient(135deg, #FFF1C5 0%, #F59E0B 50%, #FF8A3D 100%)" }}
                  >
                    Deserves to Grow.
                  </span>
                </h2>
              </div>

              <p className="text-sm sm:text-base md:text-lg text-[#9DA6BA] leading-relaxed font-normal">
                We are a passionate digital marketing agency committed to helping businesses build a strong digital presence, connect with their audience, and achieve meaningful growth.
              </p>

              <p className="text-xs sm:text-sm md:text-base text-[#8E97A8] leading-relaxed">
                By combining creativity, technology, and strategic thinking, we create digital solutions that help brands stand out in today&apos;s competitive market. From building brand identities to executing result-driven marketing campaigns, we focus on turning business goals into digital success.
              </p>

              {/* Founder Spotlight Card */}
              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/[0.08] relative">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[11px] sm:text-xs font-mono font-bold text-[#F59E0B] tracking-widest uppercase">
                    Meet Our Founder
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-black text-[#F3F5F9] tracking-tight">
                      Parth Patil
                    </h3>
                    <p className="text-[11px] sm:text-xs font-mono text-[#FDE68A] uppercase tracking-wider font-semibold">
                      Founder &amp; CEO
                    </p>
                  </div>

                  {/* Stylized Handwritten Founder Signature */}
                  <div className="select-none font-serif italic text-xl sm:text-2xl md:text-3xl text-[#FDE68A]/85 tracking-wider whitespace-nowrap">
                    Parth Patil
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#9DA6BA] leading-relaxed font-normal bg-[#0E1119]/70 p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-white/[0.06]">
                  Driven by a vision to empower businesses through digital innovation, Parth Patil founded the agency with a mission to make impactful digital marketing accessible to businesses of all sizes. His focus on creativity, innovation, and client success drives the agency&apos;s approach to every project.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ── Mission & Vision Section: Two Separate Cards + Tagline ── */}
      <section className="py-16 sm:py-20 md:py-24 relative border-b border-white/[0.06] overflow-hidden bg-[#07080C]">
        {/* Ambient subtle back glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full blur-[180px] opacity-[0.12]"
            style={{ background: "radial-gradient(circle, #F59E0B 0%, #3437A0 60%, transparent 80%)" }}
          />
        </div>

        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 relative z-10">

          {/* Top Badge */}
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#11141E] border border-[#F59E0B]/30 shadow-sm mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
              <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.2em] text-[#FDE68A] uppercase">
                Purpose &amp; Direction
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#F3F5F9] uppercase tracking-tight">
               &ldquo;Your growth is our purpose. Your success is our motivation.&rdquo;
            </h2>
          </div>

          {/* Two Separate Cards: Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">

            {/* Mission Card */}
            <div className="relative p-7 sm:p-9 rounded-[24px] bg-[#0D0F17]/90 border border-white/[0.08] hover:border-[#F59E0B]/45 transition-all duration-400 group overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.5)] flex flex-col justify-between">
              {/* Subtle top gold beam */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{ background: "linear-gradient(90deg, transparent, #F59E0B, transparent)" }}
              />

              <div>
                {/* Header with simple icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#151926] border border-[#F59E0B]/30 flex items-center justify-center text-[#FDE68A] group-hover:border-[#F59E0B] group-hover:scale-105 transition-all">
                    <Rocket className="w-5 h-5 text-[#F59E0B]" />
                  </div>
                  <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-[#F59E0B] uppercase">
                    OUR MISSION
                  </span>
                </div>

                {/* Highlighted Main Heading */}
                <h3 className="font-display text-xl sm:text-2xl font-black text-[#F3F5F9] leading-snug mb-4 group-hover:text-[#FDE68A] transition-colors">
                  Helping Businesses Grow, One Step at a Time.
                </h3>

                {/* 3-4 lines description */}
                <p className="text-sm sm:text-[15px] text-[#9DA6BA] leading-relaxed font-normal">
                  Our mission is to help businesses find their place in the digital world. We believe every brand has a story worth sharing, and we&apos;re here to bring those stories to life through creative ideas, smart strategies, and meaningful digital experiences.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
                <span className="text-[11px] font-mono text-[#8E97A8] uppercase tracking-wider">
                  Strategic Execution Focus
                </span>
              </div>
            </div>

            {/* Vision Card */}
            <div className="relative p-7 sm:p-9 rounded-[24px] bg-[#0D0F17]/90 border border-white/[0.08] hover:border-[#F59E0B]/45 transition-all duration-400 group overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.5)] flex flex-col justify-between">
              {/* Subtle top gold beam */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{ background: "linear-gradient(90deg, transparent, #F59E0B, transparent)" }}
              />

              <div>
                {/* Header with simple icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#151926] border border-[#F59E0B]/30 flex items-center justify-center text-[#FDE68A] group-hover:border-[#F59E0B] group-hover:scale-105 transition-all">
                    <Eye className="w-5 h-5 text-[#FDE68A]" />
                  </div>
                  <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-[#FDE68A] uppercase">
                    OUR VISION
                  </span>
                </div>

                {/* Highlighted Main Heading */}
                <h3 className="font-display text-xl sm:text-2xl font-black text-[#F3F5F9] leading-snug mb-4 group-hover:text-[#FDE68A] transition-colors">
                  Making Every Brand&apos;s Digital Journey Meaningful.
                </h3>

                {/* 3-4 lines description */}
                <p className="text-sm sm:text-[15px] text-[#9DA6BA] leading-relaxed font-normal">
                  We dream of building a future where businesses of every size can grow with confidence in the digital space. Our vision is to become a trusted digital partner for brands, helping them turn their ideas into opportunities and their ambitions into reality.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                <span className="text-[11px] font-mono text-[#8E97A8] uppercase tracking-wider">
                  Long-Term Impact &amp; Trust
                </span>
              </div>
            </div>

          </div>

        

        </div>
      </section>

      {/* ── Manifesto Section: Deep Obsidian Editorial Layout ── */}
      <section className="py-20 md:py-28 relative border-b border-white/[0.06] overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#11141E] border border-[#F59E0B]/25">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
                <span className="text-[11px] font-mono font-bold tracking-widest text-[#FDE68A] uppercase">The Manifesto</span>
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-extrabold text-[#F3F5F9] leading-[1.1] tracking-tight">
                Attention is cheap.{" "}
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #FFF1C5, #F59E0B)" }}>
                  Conversion is power.
                </span>
              </h2>
              <p className="text-base md:text-lg text-[#9DA6BA] leading-relaxed">
                Most agencies burn venture funding or operating profit on bloated retainers, vague reports, and vanity metrics that never hit the bank. We started ELEVATE05 to eradicate agency ambiguity.
              </p>
              <p className="text-sm md:text-base text-[#6B758E] leading-relaxed">
                Every line of code we ship, every creative asset we render, and every campaign dollar we deploy is tied to a singular mandate: producing measurable, compounding commercial velocity for our partners.
              </p>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
              {PILLARS.map((p) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.num}
                    className="p-7 rounded-2xl bg-[#0D0F17]/80 border border-white/[0.08] hover:border-[#F59E0B]/35 transition-all duration-300 relative group overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#F59E0B]/5 rounded-bl-full pointer-events-none group-hover:bg-[#F59E0B]/10 transition-colors" />
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-xs font-mono font-bold text-[#F59E0B] tracking-wider">{p.num}</span>
                      <Icon className="w-5 h-5 text-[#FDE68A] group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="text-lg font-bold text-[#F3F5F9] mb-2.5 group-hover:text-[#FDE68A] transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-xs md:text-sm text-[#9DA6BA] leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ── Operational Architecture Roadmap ── */}
      <section className="py-20 md:py-28 relative border-b border-white/[0.06] bg-[#0A0C13]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#11141E] border border-[#F59E0B]/25 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#FDE68A] uppercase">How We Operate</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-[#F3F5F9] uppercase tracking-tight mb-4">
              The ELEVATE05 Growth Protocol
            </h2>
            <p className="text-[#9DA6BA] text-sm md:text-base">
              A systematic 4-phase deployment built to de-risk investments and scale customer acquisition predictably.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {METRICS_TIMELINE.map((step, idx) => (
              <div
                key={step.year}
                className="relative p-6 rounded-2xl bg-[#07080C] border border-white/[0.08] hover:border-[#F59E0B]/40 transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-[#151926] text-[#FDE68A] border border-white/5">
                    {step.year}
                  </span>
                  <span className="text-xs font-mono text-[#6B758E]">0{idx + 1}</span>
                </div>
                <h4 className="text-base font-bold text-[#F3F5F9] mb-2 group-hover:text-[#FDE68A] transition-colors">
                  {step.label}
                </h4>
                <p className="text-xs md:text-sm text-[#9DA6BA] leading-relaxed">
                  {step.detail}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Call To Action ── */}
      <CTASection />
    </main>
  );
}
