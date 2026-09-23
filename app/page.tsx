import Hero from "@/components/hero/Hero";
import ResultsSection from "@/components/results/ResultsSection";
import AboutSection from "@/components/about/AboutSection";
import ServicesSection from "@/components/services/ServicesSection";
import WhySection from "@/components/why/WhySection";
import ProcessSection from "@/components/process/ProcessSection";
import WorkSection from "@/components/work/WorkSection";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";
import CTASection from "@/components/cta/CTASection";
import ContactSection from "@/components/contact/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ResultsSection />
      <AboutSection />
      <ServicesSection />
      <WhySection />
      <ProcessSection />
      <WorkSection />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
    </>
  );
}
