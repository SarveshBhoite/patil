"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { BRAND_CONFIG, NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";
import { useTheme } from "@/components/providers/ThemeProvider";
import gsap from "gsap";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      gsap.fromTo(
        ".mobile-nav-item",
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.45, stagger: 0.06, ease: "power2.out" }
      );
    }
  }, [mobileMenuOpen]);

  const handleMobileLinkClick = () => setMobileMenuOpen(false);

  return (
    <>
      {/* ── Fixed Navbar ── */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-[999] transition-all duration-400 ease-out",
          scrolled
            ? "h-[74px] md:h-[84px] bg-[#07080C]/85 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_12px_40px_rgba(0,0,0,0.8)]"
            : "h-[86px] md:h-[96px] bg-transparent border-b border-transparent"
        )}
      >
        <div className="max-w-[1400px] h-full mx-auto px-6 md:px-8 lg:px-12 flex items-center justify-between gap-4 lg:gap-8 xl:gap-12">

          {/* ── Logo: Crisp luxury typographic brand ── */}
          <Link
            href="/"
            className="flex-shrink-0 flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] rounded-lg group"
            aria-label="LeadSpire Digitals — Home"
          >
            <span className="font-display text-xl md:text-2xl font-black tracking-[0.22em] text-[#F3F5F9] uppercase transition-colors group-hover:text-[#FDE68A]">
              LEADSPIRE
            </span>
          </Link>

          {/* ── Desktop Navigation ── */}
          <nav
            className="hidden lg:flex items-center gap-9 flex-1 justify-center"
            role="navigation"
            aria-label="Main navigation"
          >
            {[
              { name: "Work", href: "/work" },
              { name: "Services", href: "/services" },
              { name: "About", href: "/about" },
              { name: "Pricing", href: "/pricing" },
              { name: "Contact", href: "/contact" },
            ].map((link) => {
              const isActive =
                (link.href === "/" && pathname === "/") ||
                (link.href !== "/" && pathname?.startsWith(link.href));

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "relative text-[13px] font-bold tracking-wider uppercase transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] rounded px-1 py-1 group whitespace-nowrap drop-shadow-sm",
                    isActive ? "text-[#FDE68A]" : "text-white hover:text-[#FDE68A]"
                  )}
                >
                  {link.name}
                  {/* Underline indicator */}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-[2px] bg-[#F59E0B] transition-all duration-300 rounded-full",
                      isActive ? "w-full shadow-[0_0_8px_rgba(245,158,11,0.7)]" : "w-0 group-hover:w-full"
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          {/* ── Desktop CTAs & Theme Toggle ── */}
          <div className="hidden lg:flex flex-shrink-0 items-center gap-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full border border-[#F59E0B]/30 bg-[#121520]/80 hover:border-[#F59E0B] text-[#FDE68A] transition-all hover:scale-105 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B]"
              aria-label={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
              title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-[#FDE68A] animate-spin-slow" />
              ) : (
                <Moon className="w-4 h-4 text-[#F59E0B]" />
              )}
            </button>

            <Link href="/contact" tabIndex={-1}>
              <button
                className="btn-bronze-outline text-xs uppercase tracking-widest font-bold px-6 py-2.5 rounded-full"
              >
                <span>Start a Project</span>
              </button>
            </Link>
          </div>

          {/* ── Mobile Controls (Theme Toggle + Hamburger) ── */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-[#F59E0B]/30 bg-[#121520]/80 text-[#FDE68A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B]"
              aria-label={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              className="p-2 -mr-1 text-[#F3F5F9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Full-Screen Overlay (Dark Theme) ── */}
      <div
        className={cn(
          "fixed inset-0 z-[1000] flex flex-col lg:hidden overflow-hidden transition-all duration-500 ease-in-out",
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        style={{ background: "#0B0F19" }}
        aria-hidden={!mobileMenuOpen}
      >
        {/* Subtle ambient glows */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full blur-[100px] opacity-[0.20]"
            style={{ background: "radial-gradient(circle, #6C2CFF, transparent)" }}
          />
          <div
            className="absolute bottom-[-5%] left-[-5%] w-[50vw] h-[50vw] rounded-full blur-[80px] opacity-[0.15]"
            style={{ background: "radial-gradient(circle, #12D9E8, transparent)" }}
          />
        </div>

        {/* Mobile header row */}
        <div className="relative z-10 flex items-center justify-between px-6 py-4 border-b border-white/10">
          <Link href="/" onClick={handleMobileLinkClick} aria-label="LeadSpire Digitals — Home">
            <Image
              src="/logo.png"
              alt="LeadSpire Digitals"
              width={320}
              height={120}
              className="w-[150px] h-auto object-contain"
            />
          </Link>
          <button
            className="p-2 -mr-1 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] rounded-lg hover:bg-white/10 transition-colors"
            onClick={handleMobileLinkClick}
            aria-label="Close navigation menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile nav links */}
        <div className="relative z-10 flex-1 flex flex-col justify-center px-8 gap-5">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={handleMobileLinkClick}
              className="mobile-nav-item text-3xl font-bold text-white hover:text-[#FDE68A] transition-colors tracking-tight"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/login"
            onClick={handleMobileLinkClick}
            className="mobile-nav-item text-3xl font-bold text-white hover:text-[#FDE68A] transition-colors tracking-tight"
          >
            Login
          </Link>

          {/* CTA inside mobile menu */}
          <div className="mobile-nav-item mt-6 pt-6 border-t border-white/10">
            <Link href="/contact" onClick={handleMobileLinkClick} className="inline-flex w-full">
              <button
                className="btn-bronze-outline inline-flex w-full justify-center items-center gap-2 px-6 py-4 text-sm font-bold uppercase tracking-widest text-white rounded-full shadow-md"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 text-[#F59E0B]" />
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile footer strip */}
        <div className="relative z-10 px-8 py-6 border-t border-white/10">
          <p className="text-xs font-semibold tracking-widest text-white/50 uppercase mb-3">
            {BRAND_CONFIG.tagline}
          </p>
          <div className="flex gap-5">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-white/70 hover:text-white transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
