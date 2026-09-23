import { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/cta/CTASection";
import { INDUSTRIES } from "@/lib/constants";

export function generateStaticParams() {
  return INDUSTRIES.map((industry) => ({
    slug: industry.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const industry = INDUSTRIES.find((i) => i.slug === slug);
  
  if (!industry) {
    return { title: "Industry Not Found | LeadSpire Digital" };
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://leadspire.digital";
  const url = `${baseUrl}/industries/${industry.slug}`;

  // Capitalize first letter of each word for the title
  const formattedTitle = industry.title
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    title: `${formattedTitle} Digital Growth | LeadSpire Digital`,
    description: industry.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${formattedTitle} Digital Growth | LeadSpire Digital`,
      description: industry.description,
      url: url,
    },
    twitter: {
      title: `${formattedTitle} Digital Growth | LeadSpire Digital`,
      description: industry.description,
    },
  };
}

export default async function IndustryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = INDUSTRIES.find((i) => i.slug === slug);

  if (!industry) {
    notFound();
  }

  return (
    <main className="flex-1 w-full flex flex-col">
      <PageHero
        eyebrow={`INDUSTRY // ${industry.id}`}
        title={industry.title}
        description={industry.description}
      />

      <section className="py-24 md:py-32 container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto space-y-24">
          
          <div className="space-y-8">
            <h2 className="text-3xl font-display font-bold">The Digital Opportunity</h2>
            <p className="text-muted leading-relaxed text-lg">
              In the <strong>{industry.title.toLowerCase()}</strong> sector, attention is highly fragmented and competition is fierce. Standard marketing campaigns often fail because they don't map correctly to the unique buying journey of your specific audience. Our approach systematically targets high-intent prospects and guides them toward conversion.
            </p>
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl font-display font-bold">The Typical Journey</h2>
            <div className="bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-2xl">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                {industry.journey.map((step, idx) => (
                  <div key={idx} className="flex flex-col md:flex-row items-center gap-6 w-full md:w-auto">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-mono text-sm font-bold mb-4">
                        0{idx + 1}
                      </div>
                      <span className="text-sm font-semibold tracking-widest text-muted-foreground uppercase">{step}</span>
                    </div>
                    {idx < industry.journey.length - 1 && (
                      <div className="h-12 w-px md:h-px md:w-12 bg-gradient-to-b md:bg-gradient-to-r from-primary/30 to-transparent my-2 md:my-0" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8 border-t border-white/10 pt-16">
            <h2 className="text-3xl font-display font-bold">LeadSpire's Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/[0.02] border border-white/5 p-8 rounded-2xl">
                <h3 className="text-xl font-bold mb-4">Precision Targeting</h3>
                <p className="text-muted leading-relaxed">
                  We leverage platform algorithms and deep audience research to place your brand directly in front of the people most likely to engage, eliminating wasted ad spend.
                </p>
              </div>
              <div className="bg-white/[0.02] border border-white/5 p-8 rounded-2xl">
                <h3 className="text-xl font-bold mb-4">Frictionless Conversion</h3>
                <p className="text-muted leading-relaxed">
                  Traffic is useless if it doesn't convert. We optimize landing pages, forms, and digital experiences to remove friction and accelerate the path to becoming a client.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <CTASection />
    </main>
  );
}
