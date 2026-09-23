import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ContactSection from "@/components/contact/ContactSection";
import { Clock, ShieldCheck, Mail, Phone, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Initiate Partnership | LeadSpire Digitals",
  description: "Ready to scale your business? Connect directly with LeadSpire Digitals growth architects for a strategic evaluation.",
};

export default function ContactPage() {
  return (
    <main className="flex-1 w-full flex flex-col bg-[#07080C]">
      {/* ── Page Hero with Prism background ── */}
      <PageHero
        eyebrow="COMMERCIAL INQUIRIES"
        title={
          <>
            INITIATE{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #FFF1C5 0%, #F59E0B 50%, #FF5A36 100%)" }}
            >
              STRATEGIC ENGAGEMENT.
            </span>
          </>
        }
        description="Whether you require an end-to-end performance engine or a complete bespoke web overhaul, our principal strategists are ready to evaluate your roadmap."
      >
        <div className="flex flex-wrap items-center justify-center gap-6 mt-6">
          <div className="flex items-center gap-2 text-xs font-mono text-[#FDE68A]">
            <Clock className="w-4 h-4 text-[#F59E0B]" />
            <span>Response within 24 business hours</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#9DA6BA]">
            <ShieldCheck className="w-4 h-4 text-[#F59E0B]" />
            <span>Strict NDA upon request</span>
          </div>
        </div>
      </PageHero>
      
      {/* ── Contact Section with form and direct channels ── */}
      <div className="relative z-10 -mt-10 pb-20">
        <ContactSection />
      </div>
    </main>
  );
}
