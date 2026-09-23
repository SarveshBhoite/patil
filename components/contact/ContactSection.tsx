"use client";

import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { InstagramIcon, FacebookIcon, LinkedinIcon, WhatsappIcon } from "@/components/ui/SocialIcons";
import { BRAND_CONFIG, SERVICE_OPTIONS } from "@/lib/constants";

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative w-full py-16 md:py-24 overflow-hidden bg-[#07080C]"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-[-5%] left-[-5%] w-[500px] h-[500px] rounded-full blur-[160px] opacity-[0.10]"
          style={{ background: "radial-gradient(circle, #F59E0B, transparent)" }}
        />
        <div
          className="absolute bottom-[-5%] right-[-5%] w-[400px] h-[400px] rounded-full blur-[140px] opacity-[0.08]"
          style={{ background: "radial-gradient(circle, #FF5A36, transparent)" }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 xl:px-14 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* ── Left: Info ── */}
          <div>
            <div
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full mb-8 bg-[#121520] border border-[#F59E0B]/20 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
              <span className="text-xs font-mono font-bold tracking-widest text-[#FDE68A] uppercase">Get In Touch</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.08] mb-6 text-[#F3F5F9]">
              Let&apos;s Build Something{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(135deg, #FFF1C5 0%, #F59E0B 50%, #FF5A36 100%)" }}
              >
                That Endures.
              </span>
            </h2>

            <p className="text-lg text-[#FDE68A] font-mono leading-relaxed mb-3">
              Direct Strategic Channel
            </p>
            <p className="text-base text-[#9DA6BA] leading-relaxed mb-10 font-normal">
              Have a high-impact project or ambitious growth goals? Let&apos;s map out your commercial roadmap. We review and respond within 24 business hours.
            </p>

            <div className="flex flex-col gap-5">
              {/* Email */}
              <a
                href={`mailto:${BRAND_CONFIG.email}`}
                className="flex items-center gap-4 group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#11141E] border border-white/10 group-hover:border-[#F59E0B]/40 group-hover:shadow-[0_4px_16px_rgba(245,158,11,0.2)] transition-all duration-200"
                >
                  <Mail className="w-5 h-5 text-[#F59E0B]" />
                </div>
                <div>
                  <div className="text-xs font-mono text-[#626C82] mb-0.5 uppercase tracking-wide">Direct Email</div>
                  <div className="text-[#F3F5F9] font-medium group-hover:text-[#FDE68A] transition-colors text-sm">
                    {BRAND_CONFIG.email}
                  </div>
                </div>
              </a>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#11141E] border border-white/10">
                  <Phone className="w-5 h-5 text-[#FF8A3D]" />
                </div>
                <div>
                  <div className="text-xs font-mono text-[#626C82] mb-0.5 uppercase tracking-wide">Direct Line</div>
                  <div className="text-[#F3F5F9] font-medium text-sm">{BRAND_CONFIG.phone}</div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#11141E] border border-white/10">
                  <MapPin className="w-5 h-5 text-[#FDE68A]" />
                </div>
                <div>
                  <div className="text-xs font-mono text-[#626C82] mb-0.5 uppercase tracking-wide">Headquarters</div>
                  <div className="text-[#F3F5F9] font-medium text-sm">{BRAND_CONFIG.location}</div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="mt-10 pt-8 border-t border-white/10">
              <p className="text-xs font-mono font-bold tracking-widest text-[#626C82] uppercase mb-4">Official Channels</p>
              <div className="flex gap-3">
                {[
                  { name: "Instagram", href: "#", icon: InstagramIcon },
                  { name: "Facebook", href: "#", icon: FacebookIcon },
                  { name: "LinkedIn", href: "#", icon: LinkedinIcon },
                  { name: "WhatsApp", href: "#", icon: WhatsappIcon },
                ].map(({ name, href, icon: Icon }) => (
                  <a
                    key={name}
                    href={href}
                    aria-label={name}
                    className="w-10 h-10 rounded-xl bg-[#11141E] border border-white/10 flex items-center justify-center text-[#9DA6BA] hover:text-[#FDE68A] hover:border-[#F59E0B]/35 hover:shadow-[0_4px_12px_rgba(245,158,11,0.2)] transition-all duration-200"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div className="relative p-8 md:p-10 rounded-[24px] bg-[#11141E]/90 backdrop-blur-xl border border-white/[0.08] shadow-[0_12px_40px_rgba(0,0,0,0.5)]">
            {/* Gradient top border */}
            <div
              className="absolute top-0 left-0 right-0 h-1 rounded-t-[24px]"
              style={{ background: "linear-gradient(90deg, #FDE68A, #F59E0B, #FF5A36)" }}
            />

            {submitted ? (
              <div className="text-center py-12">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 bg-[#F59E0B]/15 border border-[#F59E0B]/30"
                >
                  <Send className="w-7 h-7 text-[#FDE68A]" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#F3F5F9] mb-3">Transmission Received</h3>
                <p className="text-[#9DA6BA] font-normal">
                  Thank you for reaching out. A partner will contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-mono font-bold text-[#9DA6BA] uppercase tracking-wider" htmlFor="firstName">
                      FIRST NAME
                    </label>
                    <input id="firstName" name="firstName" type="text" placeholder="John" className="w-full px-4 py-3 rounded-xl text-sm text-[#F3F5F9] placeholder-[#626C82] bg-[#181C28] border border-white/10 outline-none transition-all duration-200 focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B]" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-mono font-bold text-[#9DA6BA] uppercase tracking-wider" htmlFor="lastName">
                      LAST NAME
                    </label>
                    <input id="lastName" name="lastName" type="text" placeholder="Doe" className="w-full px-4 py-3 rounded-xl text-sm text-[#F3F5F9] placeholder-[#626C82] bg-[#181C28] border border-white/10 outline-none transition-all duration-200 focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B]" />
                  </div>
                </div>

                {/* Email with Verification */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-mono font-bold text-[#9DA6BA] uppercase tracking-wider" htmlFor="email">
                    EMAIL ADDRESS <span className="text-[#FF5A36]">* (VERIFICATION MANDATORY)</span>
                  </label>
                  <input id="email" name="email" type="email" placeholder="john@example.com" required className="w-full px-4 py-3 rounded-xl text-sm text-[#F3F5F9] placeholder-[#626C82] bg-[#181C28] border border-white/10 outline-none transition-all duration-200 focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B]" />
                  
                  {/* Verification Banners */}
                  <div className="flex items-center justify-between p-3 mt-1 rounded-xl bg-[#181C28] border border-white/10">
                    <div className="flex items-center gap-2 text-sm text-[#9DA6BA] font-mono">
                      <svg className="w-4 h-4 text-[#F59E0B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Verification token required
                    </div>
                    <button type="button" className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-[#F59E0B] hover:bg-[#D97706] text-[#090A0F] text-xs font-mono font-bold transition-colors shadow-sm">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      Request Code
                    </button>
                  </div>
                </div>

                {/* Company Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-mono font-bold text-[#9DA6BA] uppercase tracking-wider" htmlFor="company">
                    ORGANIZATION / COMPANY
                  </label>
                  <input id="company" name="company" type="text" placeholder="Acme Studio" className="w-full px-4 py-3 rounded-xl text-sm text-[#F3F5F9] placeholder-[#626C82] bg-[#181C28] border border-white/10 outline-none transition-all duration-200 focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B]" />
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-mono font-bold text-[#9DA6BA] uppercase tracking-wider" htmlFor="subject">
                    PROJECT FOCUS
                  </label>
                  <select id="subject" name="subject" className="w-full px-4 py-3 rounded-xl text-sm text-[#F3F5F9] bg-[#181C28] border border-white/10 outline-none transition-all duration-200 focus:border-[#F59E0B] cursor-pointer">
                    <option value="" className="bg-[#11141E]">Select primary objective</option>
                    {SERVICE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#11141E]">{opt}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-mono font-bold text-[#9DA6BA] uppercase tracking-wider" htmlFor="message">
                    PROJECT SCOPE & TIMELINE
                  </label>
                  <textarea id="message" name="message" rows={4} placeholder="Briefly describe your goals, budget bracket, or current obstacles..." className="w-full px-4 py-3 rounded-xl text-sm text-[#F3F5F9] placeholder-[#626C82] bg-[#181C28] border border-white/10 outline-none transition-all duration-200 focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B] resize-none" />
                </div>

                <button
                  type="submit"
                  className="group w-full inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-[#090A0F] rounded-xl transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B]"
                  style={{
                    background: "linear-gradient(135deg, #FDE68A 0%, #F59E0B 55%, #FF7A45 100%)",
                    boxShadow: "0 6px 25px rgba(245,158,11,0.30)",
                  }}
                >
                  <span>Submit Inquiry</span>
                  <Send className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
