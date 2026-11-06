"use client";

import Link from "next/link";
import Image from "next/image";
import { BRAND_CONFIG, SERVICES } from "@/lib/constants";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { InstagramIcon, FacebookIcon, LinkedinIcon, WhatsappIcon } from "@/components/ui/SocialIcons";

const COMPANY_LINKS = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  { name: "Portfolio", href: "/work" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full pt-16 pb-10 overflow-hidden border-t border-white/[0.08] bg-[#07080C]">
      {/* ── Ambient Radial Atmosphere ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[350px] rounded-full blur-[180px] opacity-[0.10]"
          style={{ background: "radial-gradient(circle, #F59E0B 0%, #3437A0 60%, transparent 80%)" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#07080C_95%)]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 xl:px-16 relative z-10">

        {/* ── Top Row: High-Impact Monogram & Quick Consultation CTA ── */}
        <div className="pb-12 mb-12 border-b border-white/[0.08] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Image
              src="/logo.png"
              alt="ELEVATE05 Logo"
              width={180}
              height={50}
              className="h-10 w-auto object-contain"
            />
            <div>
              <span className="font-display text-2xl lg:text-3xl font-black tracking-[0.22em] text-[#F3F5F9] uppercase">
                ELEVATE05
              </span>
              <p className="text-xs font-mono text-[#8E97A8] tracking-widest mt-1 uppercase">
                HIGH-IMPACT DIGITAL ARCHITECTURE & COMMERCIAL GROWTH
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/contact">
              <button className="btn-bronze-outline px-6 py-2.5 text-xs font-mono uppercase tracking-widest font-bold flex items-center gap-2 rounded-full cursor-pointer">
                <span>Start a Project</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#F59E0B]" />
              </button>
            </Link>
          </div>
        </div>

        {/* ── 4-Column Navigation Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12">

          {/* ── Col 1: Brand Philosophy (4 cols) ── */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#FDE68A]">
              Mission
            </h4>
            <p className="text-sm text-[#8E97A8] font-normal leading-relaxed max-w-sm">
              We eliminate standard agency bureaucracy to partner directly with ambitious brands — combining high-craft design systems with algorithmic performance scale.
            </p>

            {/* Social Channels */}
            <div className="flex items-center gap-2.5 mt-2">
              {[
                { name: "Instagram", href: "https://www.instagram.com/elevate05_/?utm_source=ig_web_button_share_sheet", icon: InstagramIcon },
                { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61596303621992", icon: FacebookIcon },
                { name: "LinkedIn", href: "#", icon: LinkedinIcon },
                { name: "WhatsApp", href: "https://wa.me/917030265985", icon: WhatsappIcon },
              ].map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="w-9 h-9 rounded-xl bg-[#0E1119] border border-white/[0.08] flex items-center justify-center text-[#8E97A8] hover:text-[#FDE68A] hover:border-[#F59E0B]/40 hover:shadow-[0_0_15px_rgba(245,158,11,0.15)] transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* ── Col 2: Navigation (2 cols) ── */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#FDE68A]">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2.5">
              {COMPANY_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs font-mono uppercase tracking-wider text-[#8E97A8] hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Capabilities (3 cols) ── */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#FDE68A]">
              Capabilities
            </h4>
            <ul className="flex flex-col gap-2.5">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-xs font-mono uppercase tracking-wider text-[#8E97A8] hover:text-white transition-colors duration-200"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 4: Direct Channel (3 cols) ── */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#FDE68A]">
              Direct Contact
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${BRAND_CONFIG.email}`}
                className="group flex items-center gap-3 text-xs font-mono text-[#8E97A8] hover:text-white transition-colors"
              >
                <div className="w-7 h-7 rounded-lg bg-[#0E1119] border border-white/[0.08] flex items-center justify-center text-[#F59E0B] group-hover:border-[#F59E0B]/40 transition-all">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span>{BRAND_CONFIG.email}</span>
              </a>

              <a
                href={`tel:${BRAND_CONFIG.phone.replace(/\s+/g, '')}`}
                className="group flex items-center gap-3 text-xs font-mono text-[#8E97A8] hover:text-white transition-colors"
              >
                <div className="w-7 h-7 rounded-lg bg-[#0E1119] border border-white/[0.08] flex items-center justify-center text-[#FF8A3D] group-hover:border-[#FF8A3D]/40 transition-all">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>{BRAND_CONFIG.phone}</span>
              </a>

              <div className="flex items-center gap-3 text-xs font-mono text-[#8E97A8]">
                <div className="w-7 h-7 rounded-lg bg-[#0E1119] border border-white/[0.08] flex items-center justify-center text-[#F59E0B]">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span>{BRAND_CONFIG.location}</span>
              </div>
            </div>

            <div className="mt-3 p-3.5 rounded-xl bg-[#0A0C13] border border-white/[0.06] flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-ping" />
              <span className="text-[11px] font-mono text-[#8E97A8]">
                Currently Accepting Q2-Q3 Partnerships
              </span>
            </div>
          </div>

        </div>

        {/* ── Bottom Strip: Legal & Watermark ── */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-[#626C82]">
          <p>
            &copy; {currentYear} {BRAND_CONFIG.name}. Engineered for Distinction.
          </p>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
