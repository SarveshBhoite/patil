import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/cta/CTASection";
import { SERVICES } from "@/lib/constants";
import { 
  Share2, Target, Search, Globe, Smartphone, MapPin, 
  CheckCircle2, ArrowRight, Zap, Shield, Sparkles, BarChart3, Clock, Cpu 
} from "lucide-react";

export function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

const SERVICE_META: Record<string, {
  tagline: string;
  challenge: string;
  architecture: { title: string; step: string; desc: string }[];
  deliverables: string[];
  metrics: { value: string; label: string }[];
}> = {
  "social-media-marketing": {
    tagline: "High-Authority Organic Reach & Community Conversion",
    challenge: "Random social posting burns creative hours with zero pipeline contribution. We transform social presence into an editorial distribution engine engineered to command category mindshare.",
    architecture: [
      { step: "01", title: "Content Narrative Positioning", desc: "Crafting distinct visual and intellectual IP that separates your executives and brand from generic competitors." },
      { step: "02", title: "High-Cadence Production", desc: "Turnkey motion design, short-form video hooks, and carousel frameworks tuned for maximum algorithm velocity." },
      { step: "03", title: "Audience Pipeline Funneling", desc: "Bridging follower attention into dedicated email captures, VIP communities, and high-intent sales conversations." },
    ],
    deliverables: ["Editorial Brand Matrix", "Daily Production Sprints", "Community Growth Playbook", "Executive Thought Leadership"],
    metrics: [{ value: "320%", label: "Avg Engagement Growth" }, { value: "4.2x", label: "Inbound Pipeline Velocity" }, { value: "100%", label: "Original Content IP" }]
  },
  "meta-ads": {
    tagline: "Algorithmic Direct-Response & Scaled Acquisition",
    challenge: "Rising CPMs and signal loss punish amateurs. We engineer full-funnel Meta architectures with server-side CAPI telemetry, ruthless creative testing, and value-based bidding.",
    architecture: [
      { step: "01", title: "Dynamic Creative Engine", desc: "Testing 20+ hooks, angle permutations, and visual frameworks per week to discover outlier converters." },
      { step: "02", title: "CAPI & Server-Side Telemetry", desc: "First-party data pass-through to feed Meta's machine learning model high-intent purchase signals." },
      { step: "03", title: "Capital Allocation Scaling", desc: "Algorithmic budget rules to scale winning ad sets without blowing out blended customer acquisition cost." },
    ],
    deliverables: ["Multi-angle Creative Library", "Conversions API Setup", "Custom LTV Audiences", "Weekly Attribution Audits"],
    metrics: [{ value: "4.6x", label: "Average Blended ROAS" }, { value: "-34%", label: "Target CAC Reduction" }, { value: "72h", label: "New Creative Iteration" }]
  },
  "google-ads": {
    tagline: "High-Intent Search Capture & Performance Max Scaling",
    challenge: "Bidding on generic search queries drains ad capital fast. We capture buyers at the exact moment of commercial intent with negative keyword filters and high-intent landing engines.",
    architecture: [
      { step: "01", title: "Intent Mining & Negative Filtering", desc: "Eliminating wasted clicks by pruning ambiguous terms and focusing exclusively on transactional queries." },
      { step: "02", title: "P-Max & Shopping Architecture", desc: "Segmented asset groups structured around margin profiles and product profitability rather than top-line revenue." },
      { step: "03", title: "Search-to-Landing Convergence", desc: "Message-matched landing page experiences that double quality scores and slash cost-per-click." },
    ],
    deliverables: ["Commercial Intent Query Map", "P-Max Asset Segmentation", "Competitor Conquesting", "Real-Time Bid Optimization"],
    metrics: [{ value: "68%", label: "Lead-to-Opportunity Rate" }, { value: "-42%", label: "Wasted Spend Eliminated" }, { value: "Top 5%", label: "Impression Share Captured" }]
  },
  "website-development": {
    tagline: "Sub-Second Next.js Architectures Engineered for Conversion",
    challenge: "Slow, bloated template sites lose 40% of traffic before the first fold renders. We engineer bespoke, edge-rendered web platforms that load in milliseconds and convert traffic on contact.",
    architecture: [
      { step: "01", title: "Full-Stack Next.js Engineering", desc: "Server-side rendering, edge caching, and semantic HTML crafted for sub-second Core Web Vitals." },
      { step: "02", title: "Conversion Architecture UI", desc: "Psychological hierarchy, friction-free forms, and high-contrast calls to action tailored for enterprise credibility." },
      { step: "03", title: "Headless CMS & Scalability", desc: "Intuitive content publishing pipelines that empower marketing teams to launch new landing pages in minutes." },
    ],
    deliverables: ["Bespoke Next.js Codebase", "99+ Lighthouse Performance", "Modular Headless CMS", "Enterprise Security Hardening"],
    metrics: [{ value: "0.4s", label: "Average First Paint" }, { value: "+180%", label: "On-Page Conversion Uplift" }, { value: "100%", label: "Codebase Ownership" }]
  },
  "app-development": {
    tagline: "Scalable Cross-Platform Mobile & Web Applications",
    challenge: "Building products without strict product-market loops yields dead apps. We develop responsive, robust mobile applications with intuitive UX and resilient cloud backends.",
    architecture: [
      { step: "01", title: "Rapid Prototyping & UX Wireframes", desc: "De-risking technical buildout through interactive prototypes and user-tested flow validations." },
      { step: "02", title: "Cross-Platform React Native/Flutter", desc: "Single maintainable codebase deploying natively to iOS and Android with 60fps fluidity." },
      { step: "03", title: "Secure Cloud API Infrastructure", desc: "Serverless endpoints, secure authentication, and scalable database schemas built on industry cloud standards." },
    ],
    deliverables: ["Native iOS & Android Builds", "Cloud API Gateway", "App Store Optimization (ASO)", "Continuous CI/CD Delivery"],
    metrics: [{ value: "99.9%", label: "Crash-Free Sessions" }, { value: "60 FPS", label: "Fluid Native Animation" }, { value: "2x", label: "Faster Market Deployment" }]
  },
  "google-business-profile": {
    tagline: "Dominant Local Map Pack Authority & Review Velocity",
    challenge: "Local competitors siphon nearby customers when your map ranking slips. We optimize Google Business Profiles for top 3 Map Pack dominance across high-value geo-coordinates.",
    architecture: [
      { step: "01", title: "Local Citation Geo-Targeting", desc: "Auditing and synchronizing NAP (Name, Address, Phone) consistency across hundreds of authoritative local directories." },
      { step: "02", title: "Review Acceleration Systems", desc: "Automating customer review requests to outpace local rivals in review velocity and sentimental score." },
      { step: "03", title: "Local Geo-Grid Tracking", desc: "Monitoring local search rankings pin-by-pin across your entire target geographic service radius." },
    ],
    deliverables: ["Top 3 Map Pack Optimization", "Automated Review Funnel", "Local Citation Building", "Geo-Grid Rank Telemetry"],
    metrics: [{ value: "+240%", label: "Direct Phone Inquiries" }, { value: "#1-#3", label: "Average Local Grid Rank" }, { value: "5.0★", label: "Target Reputation Score" }]
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  
  if (!service) {
    return { title: "Service Not Found | LeadSpire Digitals" };
  }

  return {
    title: `${service.title} | Systems & Capabilities | LeadSpire Digitals`,
    description: service.description,
  };
}

const SERVICE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Share2, Target, Search, Globe, Smartphone, MapPin,
};

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const meta = SERVICE_META[slug] || {
    tagline: "Engineered Growth Infrastructure",
    challenge: service.description,
    architecture: [
      { step: "01", title: "Diagnostic Audit", desc: "Identifying system bottlenecks and high-leverage revenue opportunities." },
      { step: "02", title: "Technical Deployment", desc: "Implementing conversion systems and precision telemetry." },
      { step: "03", title: "Iterative Scaling", desc: "Deploying high-velocity tests to maximize capital efficiency." },
    ],
    deliverables: ["System Architecture Blueprint", "Weekly Sprint Reports", "Dedicated Growth Channel"],
    metrics: [{ value: "3.5x+", label: "Target Growth Multiple" }, { value: "100%", label: "Transparency" }],
  };

  const Icon = SERVICE_ICONS[service.icon || "Globe"] || Globe;

  return (
    <main className="flex-1 w-full flex flex-col bg-[#07080C]">
      {/* ── Page Hero with Prism background ── */}
      <PageHero
        eyebrow={`CAPABILITY // 0${service.id}`}
        title={
          <>
            {service.title.toUpperCase()}{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #FFF1C5 0%, #F59E0B 50%, #FF5A36 100%)" }}
            >
              ARCHITECTURE.
            </span>
          </>
        }
        description={meta.tagline}
      >
        <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
          <Link href="/contact" tabIndex={-1}>
            <button className="btn-bronze-outline px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest">
              <span>Deploy This System</span>
            </button>
          </Link>
          <Link href="/services">
            <button className="px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#9DA6BA] hover:text-[#F3F5F9] border border-white/10 hover:border-white/20 transition-all bg-white/[0.02]">
              Back to Catalog
            </button>
          </Link>
        </div>
      </PageHero>

      {/* ── High-Impact Quantitative Proof Bar ── */}
      <section className="py-10 border-b border-white/[0.06] bg-[#0A0C13]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {meta.metrics.map((m, idx) => (
              <div key={idx} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-extrabold text-[#FDE68A] mb-1">
                  {m.value}
                </div>
                <div className="text-xs font-mono tracking-wider uppercase text-[#6B758E]">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Strategic Mandate & Problem Breakdown ── */}
      <section className="py-20 md:py-28 relative border-b border-white/[0.06] overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-44 h-44 md:w-56 md:h-56 rounded-3xl bg-[#0D0F17] border border-[#F59E0B]/30 flex items-center justify-center text-[#FDE68A] shadow-[0_0_50px_rgba(245,158,11,0.12)] group">
                <div className="absolute inset-0 rounded-3xl border border-[#F59E0B]/15 animate-ping pointer-events-none opacity-20" />
                <Icon className="w-20 h-20 group-hover:scale-110 transition-transform duration-500" />
              </div>
            </div>

            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#11141E] border border-[#F59E0B]/25">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
                <span className="text-[11px] font-mono font-bold tracking-widest text-[#FDE68A] uppercase">
                  Strategic Mandate
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-[#F3F5F9] leading-tight">
                Why Standard Tactics Fail in Modern Digital Markets
              </h2>
              <p className="text-[#9DA6BA] leading-relaxed text-base md:text-lg">
                {meta.challenge}
              </p>
              <div className="pt-2 flex items-center gap-3 text-xs font-mono text-[#FDE68A]">
                <Shield className="w-4 h-4 text-[#F59E0B]" />
                <span>Deterministic attribution & end-to-end telemetry verified</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Operational Architecture Steps ── */}
      <section className="py-20 md:py-28 relative border-b border-white/[0.06] bg-[#0A0C13]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#11141E] border border-[#F59E0B]/25 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#FDE68A] uppercase">
                The Engineering Framework
              </span>
            </div>
            <h3 className="font-display text-3xl md:text-4xl font-extrabold text-[#F3F5F9] uppercase tracking-tight">
              Deployment Architecture
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-7">
            {meta.architecture.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-[#07080C] border border-white/[0.08] hover:border-[#F59E0B]/40 transition-all duration-300 relative group overflow-hidden"
              >
                <div className="text-xs font-mono font-bold text-[#F59E0B] tracking-wider mb-6">
                  PHASE // {item.step}
                </div>
                <h4 className="font-display text-xl font-bold text-[#F3F5F9] mb-3 group-hover:text-[#FDE68A] transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs md:text-sm text-[#9DA6BA] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Deliverables & Expected Outcomes ── */}
      <section className="py-20 md:py-28 relative border-b border-white/[0.06] overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#11141E] border border-[#F59E0B]/25">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
                <span className="text-[11px] font-mono font-bold tracking-widest text-[#FDE68A] uppercase">
                  Institutional Assets
                </span>
              </div>
              <h3 className="font-display text-3xl md:text-4xl font-extrabold text-[#F3F5F9] tracking-tight">
                Turnkey Deliverables You Own 100%
              </h3>
              <p className="text-[#9DA6BA] text-sm md:text-base leading-relaxed">
                Everything we build is transferred to your organization with full documentation, unrestricted administrative access, and clean intellectual property rights.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {meta.deliverables.map((deliv, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-[#0D0F17] border border-white/[0.08] flex items-center gap-3 text-sm font-semibold text-[#F3F5F9]"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#F59E0B] flex-shrink-0" />
                  <span>{deliv}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
