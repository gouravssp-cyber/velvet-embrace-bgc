import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CompanionsSection from "@/components/CompanionsSection";
import ExperienceSection from "@/components/ExperienceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";
import SeoSection from "@/components/SeoSection";
import FloatingCallAction from "@/components/FloatingCallAction";

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CompanionsSection />
      <ExperienceSection />
      <SeoSection />
      <TestimonialsSection />
      <CTASection />
      <FooterSection />
      <FloatingCallAction />
    </main>
  );
};

export default Index;
