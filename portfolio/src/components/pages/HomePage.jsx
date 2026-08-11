import PageLayout from "../layout/PageLayout";
import Hero from "../sections/Hero";
import AboutSection from "../sections/AboutSection";
import FeaturedProjects from "../sections/FeaturedProjects";
import ServicesSection from "../sections/ServicesSection";
import BlogSection from "../sections/BlogSection";
import TechnologiesSection from "../sections/TechnologiesSection";
import CertificationsSection from "../sections/CertificationsSection";
import CTASection from "../sections/CTASection";

export default function HomePage() {
  return (
    <PageLayout>
      <div className="relative z-10">
        <Hero />
        <AboutSection />
        <FeaturedProjects />
        <ServicesSection />
        <BlogSection />
        <TechnologiesSection />
        <CertificationsSection />
        <CTASection />
      </div>
    </PageLayout>
  );
}