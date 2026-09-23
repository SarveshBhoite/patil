import { Metadata } from "next";
import Link from "next/link";
import { BRAND_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service | LeadSpire Digitals",
  description: "Terms of Service for LeadSpire Digitals.",
};

export default function TermsPage() {
  const lastUpdated = "September 2, 2026";

  return (
    <main className="flex-1 w-full flex flex-col bg-[#F8F7FF] pt-32 pb-24 px-6 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div
          className="absolute top-0 left-[-10%] w-[500px] h-[500px] rounded-full blur-[150px] opacity-[0.10]"
          style={{ background: "radial-gradient(circle, #367CFF, transparent)" }}
        />
        <div
          className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] rounded-full blur-[130px] opacity-[0.07]"
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
            <span className="w-2 h-2 rounded-full bg-[#367CFF]" />
            <span className="text-xs font-bold tracking-widest text-[#367CFF] uppercase">Legal</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#172033] tracking-tight mb-4">
            Terms of Service
          </h1>
          <p className="text-[#9AA4BD] font-medium text-sm">
            Last Updated: {lastUpdated}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none prose-headings:text-[#172033] prose-headings:font-bold prose-p:text-[#667085] prose-li:text-[#667085] prose-a:text-[#6C2CFF] prose-a:no-underline hover:prose-a:text-[#367CFF]">
          
          <p>
            Welcome to <strong>{BRAND_CONFIG.name}</strong>. These Terms of Service (&quot;Terms&quot;) govern your use of our website and the digital marketing, strategy, and development services we provide.
          </p>
          <p>
            By accessing or using our website and services, you agree to be bound by these Terms and our Privacy Policy.
          </p>

          <h2 className="text-2xl mt-10 mb-4">1. Services Provided</h2>
          <p>
            LeadSpire Digitals offers digital marketing, branding, website development, and related consulting services. Detailed scopes of work, deliverables, and timelines will be agreed upon separately in a formal proposal or Master Services Agreement (MSA) for active clients.
          </p>

          <h2 className="text-2xl mt-10 mb-4">2. Intellectual Property</h2>
          <p>
            Unless otherwise stated in a separate agreement, all materials, concepts, designs, and code produced by LeadSpire Digitals remain our intellectual property until full payment is received. Upon full payment, ownership of the final deliverables transfers to you, but we reserve the right to use the work for our portfolio and marketing purposes.
          </p>

          <h2 className="text-2xl mt-10 mb-4">3. User Responsibilities</h2>
          <p>As a user of our website or client of our services, you agree not to:</p>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>Use the website for any illegal or unauthorized purpose.</li>
            <li>Submit false, misleading, or deceptive information.</li>
            <li>Attempt to bypass or interfere with the security features of the website.</li>
            <li>Reproduce or distribute our copyrighted materials without written consent.</li>
          </ul>

          <h2 className="text-2xl mt-10 mb-4">4. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by applicable law, LeadSpire Digitals shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, resulting from your use of our services or website.
          </p>

          <h2 className="text-2xl mt-10 mb-4">5. Revisions and Errata</h2>
          <p>
            The materials appearing on our website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on our website are accurate, complete, or current. We may make changes to the materials contained on our website at any time without notice.
          </p>

          <h2 className="text-2xl mt-10 mb-4">6. Contact Information</h2>
          <p>
            If you have any questions about these Terms, please contact us at{" "}
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
