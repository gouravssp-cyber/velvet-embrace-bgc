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
import { Helmet, HelmetProvider } from "react-helmet-async";

const Index = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Call Girls in Dehradun Cash Payment Quick Delivery ₹1999</title>
        <meta name="description" content="Hire independent call girls in Dehradun with full cash payment, no advance. Safe, private & premium companions available instantly. " />
        <meta property="og:title" content="Call Girls in Dehradun Cash Payment Quick Delivery ₹1999" />
        <meta property="og:description" content="Hire independent call girls in Dehradun with full cash payment, no advance. Safe, private & premium companions available instantly. " />
        
          <link rel="icon" type="image/png" href="https://www.babycallgirl.com/images/22.jpg" alt="Escort Girl"></link>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Call Girls in Dehradun Cash Payment Quick Delivery ₹1999" />
        <meta name="twitter:description" content="Hire independent call girls in Dehradun with full cash payment, no advance. Safe, private & premium companions available instantly. " />
      </Helmet>
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
    </HelmetProvider>
  );
};

export default Index;
