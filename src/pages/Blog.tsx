import CTASection from "@/components/CTASection";
import FloatingCallAction from "@/components/FloatingCallAction";
import FooterSection from "@/components/FooterSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import MussoorieWeekendBlog from "@/components/MussoorieWeekendBlog";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Blog = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Mussoorie Weekend Call Girls from Dehradun - COD Package</title>
                <meta name="description" content="Mussoorie weekend from Dehradun with Call Girls from Dehradun: scenic drive, Kempty Falls romance, Gun Hill sunset, private hotel fun. COD, full privacy!." />
                <meta property="og:title" content="Mussoorie Weekend Call Girls from Dehradun - COD Package" />
                <meta property="og:description" content="Mussoorie weekend from Dehradun with Call Girls from Dehradun: scenic drive, Kempty Falls romance, Gun Hill sunset, private hotel fun. COD, full privacy!." />
                <link rel="canonical" href="/blog" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Mussoorie Weekend Call Girls from Dehradun - COD Package" />
                <meta name="twitter:description" content="Mussoorie weekend from Dehradun with Call Girls from Dehradun: scenic drive, Kempty Falls romance, Gun Hill sunset, private hotel fun. COD, full privacy!." />
            </Helmet>

            <main className="bg-background min-h-screen px-4 py-16 text-primary">
                <Navbar />
                <MussoorieWeekendBlog />
                <CTASection />
                <FooterSection />
                <FloatingCallAction />
            </main>
        </HelmetProvider>
    );
};

export default Blog;
