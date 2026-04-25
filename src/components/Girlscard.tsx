import React from "react";

// Explicit imports with unique names for each companion image
import companionImg01Jpeg from "../assets/companion/img01.jpeg";
import companionImg01Webp from "../assets/companion/img01.webp";
import companionImg02 from "../assets/companion/img02.webp";
import companionImg03 from "../assets/companion/img03.webp";
import companionImg04 from "../assets/companion/img04.webp";
import companionImg05 from "../assets/companion/img05.jpg";
import companionImg06 from "../assets/companion/img06.webp";
import companionImg07 from "../assets/companion/img07.jpg";
import companionImg08 from "../assets/companion/img08.jpg";
import companionImg09 from "../assets/companion/img09.webp";
import companionImg10 from "../assets/companion/img10.jpg";
import companionImg11 from "../assets/companion/img11.jpg";
import companionImg12 from "../assets/companion/img12.webp";
import companionImg13 from "../assets/companion/img13.jpg";
import companionImg14 from "../assets/companion/img14.webp";
import companionImg15 from "../assets/companion/img15.jpg";
import companionImg16 from "../assets/companion/img16.jpg";
import companionImg17 from "../assets/companion/img17.webp";
import companionImg18 from "../assets/companion/img18.jpg";

const Girlscard: React.FC = () => {
    // Companion images for gallery (using WebP where available for performance)
    const companionImages = [
        { src: companionImg01Webp, fallback: companionImg01Jpeg, alt: "Premium College Call Girl Dehradun" },
        { src: companionImg02, fallback: null, alt: "Hot Housewife Escort Dehradun" },
        { src: companionImg03, fallback: null, alt: "Russian Call Girl Dehradun" },
        { src: companionImg04, fallback: null, alt: "VIP Model Call Girl Dehradun" },
        { src: companionImg05, fallback: null, alt: "Punjabi Bhabhi Escort Dehradun" },
        { src: companionImg06, fallback: null, alt: "Air Hostess Call Girl Dehradun" },
        { src: companionImg07, fallback: null, alt: "Mature MILF Escort Dehradun" },
        { src: companionImg08, fallback: null, alt: "Elegant Independent Call Girl Dehradun" },
        { src: companionImg09, fallback: null, alt: "Young College Girl Dehradun" },
        { src: companionImg10, fallback: null, alt: "Stunning Russian Beauty Dehradun" },
        { src: companionImg11, fallback: null, alt: "Sexy Housewife Dehradun" },
        { src: companionImg12, fallback: null, alt: "VIP Model Dehradun" },
        { src: companionImg13, fallback: null, alt: "Premium Escort Dehradun" },
        { src: companionImg14, fallback: null, alt: "Hot Call Girl Dehradun" },
        { src: companionImg15, fallback: null, alt: "Luxury Companion Dehradun" },
        { src: companionImg16, fallback: null, alt: "College Student Escort Dehradun" },
        { src: companionImg17, fallback: null, alt: "Russian Call Girl Dehradun" },
        { src: companionImg18, fallback: null, alt: "Premium Dehradun Escort" },
    ];

    return (
        <div className="min-h-screen bg-background text-foreground font-sans">

            <div className="max-w-7xl mx-auto px-6 py-12">

                {/* WIDE RANGE SECTION + GALLERY */}
                <div className="mb-20">
                    <h2 className="text-4xl font-semibold text-center mb-4">Wide Range of Hot Call Girls in Dehradun</h2>
                    <p className="text-center text-muted-foreground text-lg max-w-2xl mx-auto mb-12">
                        College girls, housewives, Russian beauties, Punjabi bhabhis, VIP models, air hostesses and more. All with real photos, age, height and figure details.
                    </p>

                    {/* Gallery Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {companionImages.map((img, index) => (
                            <a key={index} href="tel:+918057744241" className="group relative rounded-3xl overflow-hidden border border-border bg-card hover:border-accent transition-all duration-300">
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="w-full aspect-[4/5] object-cover transition-all group-hover:scale-105"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        if (img.fallback && target.src !== img.fallback) {
                                            target.src = img.fallback;
                                        }
                                    }}
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent h-2/5"></div>
                                <div className="absolute bottom-4 left-4 right-4 text-white text-sm font-medium">
                                    {img.alt}
                                </div>
                                <div className="absolute top-4 right-4 bg-emerald-500 text-white text-[10px] font-bold px-3 py-1 rounded-2xl flex items-center gap-1">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                                    </span>
                                    AVAILABLE
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

            </div>
            {/* Footer */}
        </div>
    );
};

export default Girlscard;