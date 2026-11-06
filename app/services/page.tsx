import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Share2, Target, Search, Globe, Smartphone, MapPin, Zap, Shield, Sparkles } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/cta/CTASection";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Digital Marketing & Growth Systems | ELEVATE05",
  description: "Explore our integrated systems: performance advertising, conversion web architectures, search dominance, and lifecycle funnels.",
};

const SERVICE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Share2,
  Target,
  Search,
  Globe,
  Smartphone,
  MapPin,
};

export default function ServicesPage() {
  return (
    <main className="flex-1 w-full flex flex-col bg-[#07080C]">
      {/* ── Page Hero with Prism background ── */}
      <PageHero
        eyebrow="CAPABILITIES & SYSTEMS"
        title={
          <>
            PRECISION ENGINES{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #FFF1C5 0%, #F59E0B 50%, #FF5A36 100%)" }}
            >
              ENGINEERED TO SCALE.
            </span>
          </>
        }
        description="We don't sell disconnected tactics. We deploy interconnected commercial systems that capture market demand, maximize conversion efficiency, and accelerate enterprise valuation."
      >
        <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
          <Link href="/contact" tabIndex={-1}>
            <button className="btn-bronze-outline px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest">
              <span>Request System Architecture</span>
            </button>
          </Link>
          <Link href="/work">
            <button className="px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#9DA6BA] hover:text-[#F3F5F9] border border-white/10 hover:border-white/20 transition-all bg-white/[0.02]">
              View Live Case Studies
            </button>
          </Link>
        </div>
      </PageHero>

      {/* ── Services Grid: Dark Luxury Obsidian Bento Grid ── */}
      <section className="py-20 md:py-28 relative border-b border-white/[0.06] overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#11141E] border border-[#F59E0B]/25 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
                <span className="text-[11px] font-mono font-bold tracking-widest text-[#FDE68A] uppercase">
                  Service Catalog
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-extrabold text-[#F3F5F9] uppercase tracking-tight">
                Modular Growth Infrastructure
              </h2>
            </div>
            <p className="text-sm md:text-base text-[#9DA6BA] max-w-md leading-relaxed">
              Every system is purpose-built to operate either standalone or orchestrated together for maximum customer acquisition leverage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {SERVICES.map((service, index) => {
              const Icon = SERVICE_ICONS[service.icon || "Globe"] || Globe;
              return (
                <Link
                  href={`/services/${service.slug}`}
                  key={service.id}
                  className="group flex flex-col bg-[#0D0F17]/85 hover:bg-[#121522] border border-white/[0.08] hover:border-[#F59E0B]/40 p-8 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_50px_rgba(245,158,11,0.12)] hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden"
                >
                  {/* Subtle top amber highlight */}
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#F59E0B]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="flex items-center justify-between mb-8">
                    <div className="w-13 h-13 p-3.5 rounded-xl bg-[#171B29] border border-white/[0.08] text-[#FDE68A] group-hover:border-[#F59E0B]/40 group-hover:text-[#F59E0B] transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-sm font-bold text-[#6B758E] group-hover:text-[#FDE68A] transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-[#F3F5F9] mb-3 group-hover:text-[#FDE68A] transition-colors leading-tight">
                    {service.title}
                  </h3>

                  <p className="text-sm text-[#9DA6BA] leading-relaxed mb-8 flex-1">
                    {service.description}
                  </p>

                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between mt-auto text-xs font-mono font-bold tracking-wider uppercase text-[#9DA6BA] group-hover:text-[#F3F5F9] transition-colors">
                    <span>Inspect Blueprint</span>
                    <ArrowRight className="w-4 h-4 text-[#F59E0B] group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── System Guarantee & SLA Matrix ── */}
      <section className="py-20 md:py-28 relative border-b border-white/[0.06] bg-[#0A0C13]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#11141E] border border-[#F59E0B]/25">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
                <span className="text-[11px] font-mono font-bold tracking-widest text-[#FDE68A] uppercase">Quality Standards</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-[#F3F5F9] tracking-tight">
                Enterprise Standards. Agile Velocity.
              </h2>
              <p className="text-sm md:text-base text-[#9DA6BA] leading-relaxed">
                We eliminate the typical agency bureaucracy. Clients receive direct engineering access, real-time live performance dashboards, and weekly sprint demos.
              </p>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
              {[
                { title: "Direct Lead Access", desc: "No junior account managers acting as telephone games. Direct comms with the strategist and builder." },
                { title: "Deterministic Tracking", desc: "Server-side tracking, Conversions API, and clean multi-touch attribution setup." },
                { title: "72-Hour Experiment Sprints", desc: "Live creative and audience hypotheses tested, analyzed, and optimized continuously." },
                { title: "Zero Lock-In Contracts", desc: "We earn partnership renewal every 30 days based exclusively on validated commercial performance." },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-xl bg-[#07080C] border border-white/[0.08] hover:border-[#F59E0B]/30 transition-all">
                  <div className="w-2 h-2 rounded-full bg-[#F59E0B] mb-3" />
                  <h4 className="text-base font-bold text-[#F3F5F9] mb-1.5">{item.title}</h4>
                  <p className="text-xs md:text-sm text-[#9DA6BA] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── Call To Action ── */}
      <CTASection />
    </main>
  );
}
