import CTASection from "@/components/CTASection";
import FloatingCallAction from "@/components/FloatingCallAction";
import FooterSection from "@/components/FooterSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

import DehradunCall from "@/components/DehradunCall";
import { Helmet, HelmetProvider } from "react-helmet-async";
import DehradunCallGirlsBlog from "@/components/DehradunCallGirlsBlog";

const Blognew = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Dehradun Call Girls Service – Real Photos, COD from ₹1999</title>
                <meta name="description" content="Premium Call Girls in Dehradun: Real photos, COD available from 1999. College girls & Russian escorts 24/7 in Rajpur Road, Sahastradhara & Dehradun hotels." />
                <meta property="og:title" content="Dehradun Call Girls Service – Real Photos, COD from ₹1999" />
                <meta property="og:description" content="Premium Call Girls in Dehradun: Real photos, COD available from 1999. College girls & Russian escorts 24/7 in Rajpur Road, Sahastradhara & Dehradun hotels." />
                <link rel="canonical" href="/blog" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Dehradun Call Girls Service – Real Photos, COD from ₹1999" />
                <meta name="twitter:description" content="Premium Call Girls in Dehradun: Real photos, COD available from 1999. College girls & Russian escorts 24/7 in Rajpur Road, Sahastradhara & Dehradun hotels." />
            </Helmet>

            <main className="bg-background min-h-screen px-4 py-16 text-primary">
                <Navbar />
                {/* <DehradunCall /> */}
                <DehradunCallGirlsBlog/>
                <CTASection />
                <FooterSection />
                <FloatingCallAction />
            </main>
        </HelmetProvider>
    );
};

export default Blognew;
