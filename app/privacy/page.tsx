import { Metadata } from "next";
import Link from "next/link";
import { BRAND_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy | LeadSpire Digitals",
  description: "Privacy Policy for LeadSpire Digitals.",
};

export default function PrivacyPage() {
  const lastUpdated = "September 2, 2026";

  return (
    <main className="flex-1 w-full flex flex-col bg-[#F8F7FF] pt-32 pb-24 px-6 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div
          className="absolute top-0 right-[-10%] w-[500px] h-[500px] rounded-full blur-[150px] opacity-[0.10]"
          style={{ background: "radial-gradient(circle, #6C2CFF, transparent)" }}
        />
        <div
          className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] rounded-full blur-[130px] opacity-[0.07]"
          style={{ background: "radial-gradient(circle, #12D9E8, transparent)" }}
        />
      </div>

      <div className="max-w-3xl mx-auto w-full relative z-10 bg-white rounded-3xl p-8 md:p-16 shadow-[0_8px_40px_rgba(108,44,255,0.06)] border border-[#E5E7F0]">
        
        {/* Header */}
        <div className="mb-12 border-b border-[#E5E7F0] pb-8">
          <div
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full mb-6 bg-[#F8F7FF] border shadow-sm"
            style={{ borderColor: "rgba(108,44,255,0.18)" }}
          >
            <span className="w-2 h-2 rounded-full bg-[#6C2CFF]" />
            <span className="text-xs font-bold tracking-widest text-[#6C2CFF] uppercase">Legal</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#172033] tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-[#9AA4BD] font-medium text-sm">
            Last Updated: {lastUpdated}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none prose-headings:text-[#172033] prose-headings:font-bold prose-p:text-[#667085] prose-li:text-[#667085] prose-a:text-[#6C2CFF] prose-a:no-underline hover:prose-a:text-[#367CFF]">
          
          <p>
            At <strong>{BRAND_CONFIG.name}</strong>, we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services.
          </p>

          <h2 className="text-2xl mt-10 mb-4">1. Information We Collect</h2>
          <p>
            We may collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our services, or when you contact us via our website forms (e.g., name, email address, phone number, and company name).
          </p>
          <p>
            We also automatically collect certain information when you visit, use, or navigate the site. This information does not reveal your specific identity but may include device and usage information, such as your IP address, browser and device characteristics, and operating system.
          </p>

          <h2 className="text-2xl mt-10 mb-4">2. How We Use Your Information</h2>
          <p>We use personal information collected via our website for a variety of business purposes described below:</p>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>To respond to your inquiries and offer support.</li>
            <li>To send administrative information to you.</li>
            <li>To fulfill and manage any contracts or projects we execute together.</li>
            <li>To deliver targeted advertising or marketing communications to you (if you have opted in).</li>
            <li>To protect our Services and ensure compliance with our legal obligations.</li>
          </ul>

          <h2 className="text-2xl mt-10 mb-4">3. Sharing Your Information</h2>
          <p>
            We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We do not sell your personal data to third-party vendors.
          </p>

          <h2 className="text-2xl mt-10 mb-4">4. Cookies and Tracking Technologies</h2>
          <p>
            We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies.
          </p>

          <h2 className="text-2xl mt-10 mb-4">5. Contact Us</h2>
          <p>
            If you have questions or comments about this notice, you may email us at{" "}
            <a href={`mailto:${BRAND_CONFIG.email}`}>{BRAND_CONFIG.email}</a>.
          </p>
          
        </div>

        {/* Back Link */}
        <div className="mt-16 pt-8 border-t border-[#E5E7F0] text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-[#6C2CFF] hover:text-[#367CFF] transition-colors">
            <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            Return to Homepage
          </Link>
        </div>

      </div>
    </main>
  );
}
