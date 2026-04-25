
import { Phone, MapPin, Calendar, Heart } from "lucide-react";

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

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

import companionImg19 from "../assets/companion/img19.jpg";


const Moregirlscard = () => {
    return (
        <article className="bg-background min-h-screen">

          
            {/* ==================== PREMIUM SECOND SECTION ==================== */}
            <section className="max-w-7xl mx-auto px-6  bg-background">

                


                {/* Booking Process */}
                <div className="max-w-3xl mt-20 mx-auto mb-8">
                    <h2 className="text-5xl md:text-6xl font-display font-light italic text-center mb-16 text-foreground">
                        Booking Super Simple है
                    </h2>

                    <div className="space-y-10">
                        {[
                            "WhatsApp पर message कर दो।",
                            "Plan बताओ — Mussoorie weekend, कितने दिन, preference क्या (young fresh face, mature stylish, या कोई specific look)।",
                            "Real photos + short video demo free में मिल जाएगा — 100% sure हो जाओ।",
                            "Time और pickup fix करो।",
                            "Drive शुरू, मसूरी पहुंचो, और weekend rock करो!"
                        ].map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                className="flex gap-8 items-start"
                            >
                                <div className="flex-shrink-0 w-11 h-11 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center text-2xl font-medium text-primary mt-1">
                                    {i + 1}
                                </div>
                                <p className="text-[17px] md:text-lg text-muted-foreground leading-relaxed pt-1.5">
                                    {step}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <p className="text-center mt-16 text-xl text-primary font-medium tracking-wide">
                        पहली बार booking पर extra free 2-minute video call भी — पहले से face check कर लो।
                    </p>
                </div>
                           

                {/* Premium Image Gallery - Flex Layout */}
                <div className="mt-32">
                    <div className="flex flex-wrap gap-6 md:gap-8 justify-center">
                        {[companionImg07, companionImg08, companionImg09, companionImg10, companionImg11, companionImg12, companionImg13, companionImg14, companionImg15, companionImg16].map((img, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="flex-1 min-w-[260px] max-w-[320px] rounded-3xl overflow-hidden shadow-2xl border border-border hover:border-primary/40 transition-all duration-500"
                            >
                                <img
                                    src={img}
                                    alt={`Mussoorie Companion ${i + 7}`}
                                    className="w-full h-full object-cover aspect-[4/5] hover:scale-110 transition-transform duration-700"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>

            </section>
        </article>
    );
};

export default Moregirlscard;