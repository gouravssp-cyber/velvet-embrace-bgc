import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CompanionsSection from "@/components/CompanionsSection";
import { motion } from "framer-motion";
import ExperienceSection from "@/components/ExperienceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";
import SeoSection from "@/components/SeoSection";
import FloatingCallAction from "@/components/FloatingCallAction";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Girlscard from "@/components/Girlscard";
import Moregirlscard from "@/components/Moregirlscard";

const Index = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Special Offer: Call Girls in Dehradun - Starting ₹2399</title>
        <meta name="description" content="No.1 Call Girls in Dehradun - COD Incall/Outcall, Real Photos, Low Rates from ₹2999, 24/7 Free Delivery & Full Privacy Guaranteed!" />
        <meta property="og:title" content="Call Girls in Dehradun Cash Payment Quick Delivery ₹1999" />
        <meta property="og:description" content="No.1 Call Girls in Dehradun - COD Incall/Outcall, Real Photos, Low Rates from ₹2999, 24/7 Free Delivery & Full Privacy Guaranteed!" />

        <link rel="icon" type="image/png" href="https://www.babycallgirl.com/images/22.jpg" ></link>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Call Girls in Dehradun Cash Payment Quick Delivery ₹1999" />
        <meta name="twitter:description" content="No.1 Call Girls in Dehradun - COD Incall/Outcall, Real Photos, Low Rates from ₹2999, 24/7 Free Delivery & Full Privacy Guaranteed!" />
 <style>
                            {`
                    p {
                      font-family: Arial, sans-serif;
                      font-size: 16px;
                      line-height: 1.6;
                      color: #fff;
                      margin-bottom: 12px;
                    }
        
                    strong {
                      font-weight: bold;
                      color: #fff;
                    }
        
                    h2 {
                      font-size: 24px;
                      font-weight: 600;
                      margin: 20px 0 10px;
                      color: #fff;
                    }
        
                    a {
                      color: #007BFF;
                      text-decoration: none;
                    }
        
                    a:hover {
                      text-decoration: underline;
                      color: #0056b3;
                    }
        
                    ol {
                      margin: 10px 0 10px 20px;
                      padding-left: 20px;
                    }
        
                    li {
                      margin-bottom: 6px;
                      font-size: 15px;
                    }
                  `}
                        </style>
                    
      </Helmet>
      <main className="bg-background min-h-screen">
        <Navbar />
        <HeroSection />
        <CompanionsSection />
        <Girlscard />        
        <Moregirlscard />

        {/* Rate Chart Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-6 text-4xl md:text-5xl font-display italic font-light text-foreground leading-tight text-center"
          >
            Dehradun Call Girls Rate Chart 2026 (Cash Payment)
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="gold-line-wide mx-auto mb-12"
          />

          <div className="bg-muted/30 rounded-3xl p-8 lg:p-12">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px] text-left border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="pb-6 text-lg font-medium text-foreground">Service Type</th>
                    <th className="pb-6 text-lg font-medium text-foreground">Duration</th>
                    <th className="pb-6 text-lg font-medium text-foreground text-right">Starting Price</th>
                  </tr>
                </thead>
                <tbody className="text-lg font-serif font-light text-muted-foreground">
                  <tr className="border-b border-border/60">
                    <td className="py-5">Short Time</td>
                    <td className="py-5">1-2 Hours</td>
                    <td className="py-5 text-right font-medium text-foreground">₹2499</td>
                  </tr>
                  <tr className="border-b border-border/60">
                    <td className="py-5">Extended Short Time</td>
                    <td className="py-5">3-4 Hours</td>
                    <td className="py-5 text-right font-medium text-foreground">₹3999</td>
                  </tr>
                  <tr className="border-b border-border/60">
                    <td className="py-5">Full Night</td>
                    <td className="py-5">8-10 Hours</td>
                    <td className="py-5 text-right font-medium text-foreground">₹5999</td>
                  </tr>
                  <tr className="border-b border-border/60">
                    <td className="py-5">Russian / Model / VIP</td>
                    <td className="py-5">Full Night</td>
                    <td className="py-5 text-right font-medium text-foreground">₹8999</td>
                  </tr>
                  <tr className="border-b border-border/60">
                    <td className="py-5">Overnight GFE Package</td>
                    <td className="py-5">12+ Hours</td>
                    <td className="py-5 text-right font-medium text-foreground">₹11999</td>
                  </tr>
                  <tr>
                    <td className="py-5">Extra Night / Day</td>
                    <td className="py-5">Per 24 Hours</td>
                    <td className="py-5 text-right font-medium text-foreground">₹14999</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-8 text-center text-muted-foreground font-light">
              Prices are negotiable according to girl's category and your requirements.
              <span className="block mt-1 text-sm">No hidden charges. Full rate transparency before booking.</span>
            </p>
          </div>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-4 mt-16">
          <AccordionItem value="experience" className="overflow-hidden rounded-3xl border border-border/60 bg-muted/10">
            <AccordionTrigger className="px-6">Trusted Luxury Companionship & Private Booking Support</AccordionTrigger>
            <AccordionContent className="px-6">
              <ExperienceSection />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="seo" className="overflow-hidden rounded-3xl border border-border/60 bg-muted/10">
            <AccordionTrigger className="px-6">Read about the services </AccordionTrigger>
            <AccordionContent className="px-6">
              <SeoSection />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="about" className="overflow-hidden rounded-3xl border border-border/60 bg-muted/10">
            <AccordionTrigger className="px-6">Know about Us</AccordionTrigger>
            <AccordionContent className="px-6">
              <AboutSection />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="testimonials" className="overflow-hidden rounded-3xl border border-border/60 bg-muted/10">
            <AccordionTrigger className="px-6">Read Testimonials</AccordionTrigger>
            <AccordionContent className="px-6">
              <TestimonialsSection />
            </AccordionContent>
          </AccordionItem>

        </Accordion>

        {/* Final CTA / Closing Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display italic font-light text-foreground leading-tight mb-8"
            >
              Ready for an Unforgettable Experience?
            </motion.h2>

            <div className="space-y-6 text-lg font-serif font-light text-muted-foreground leading-relaxed mb-10">
              <p>
                If you are in Dehradun and looking for real fun, relaxation, and ultimate pleasure,
                then don’t waste time searching random numbers. Contact the most trusted call girls
                in Dehradun agency today.
              </p>
              <p>
                We promise you the best service, the hottest girls, complete satisfaction, and
                memories that will last a long time.
              </p>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <a
                href="https://wa.me/918057744241" // ← Replace with your WhatsApp number
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-medium text-lg px-10 py-4 rounded-2xl transition-all duration-300"
              >
                📲 Book Now on WhatsApp
              </a>

              <a
                href="tel:+918057744241" // ← Replace with your phone number
                className="inline-flex items-center justify-center border border-foreground/30 hover:bg-foreground/5 font-medium text-lg px-10 py-4 rounded-2xl transition-all duration-300"
              >
                📞 Call Now
              </a>
            </div>

            <div className="text-sm uppercase tracking-widest text-muted-foreground font-light mb-4">
              Cash Payment • Free Delivery • 24×7 Service • Real Photos
            </div>

            <p className="text-xl md:text-2xl font-light italic text-foreground">
              Get ready to enjoy the most beautiful and professional Dehradun escorts and call girls
            </p>

            <p className="mt-3 text-muted-foreground font-light">
              Your Secret Pleasure Partner in the Capital of Uttarakhand
            </p>
          </div>
        </motion.div>

        <FooterSection />
        <FloatingCallAction />

      </main>
    </HelmetProvider>
  );
};

export default Index;
