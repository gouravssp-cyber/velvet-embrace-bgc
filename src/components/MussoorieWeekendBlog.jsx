
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


const MussoorieWeekendBlog = () => {
    return (
        <article className="bg-background min-h-screen">

            {/* ==================== HERO SECTION ==================== */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <motion.img
                    src={companionImg01Webp}
                    alt="Mussoorie Weekend with Dehradun Call Girls"
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 20, ease: "linear" }}
                />

                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

                <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block px-8 py-3 bg-primary text-white text-sm tracking-[4px] uppercase font-medium rounded-full mb-6">
                            WEEKEND SPECIAL • CASH ON DELIVERY
                        </span>

                        <h1 className="text-5xl md:text-7xl font-display font-light italic leading-none text-white mb-6">
                            Mussoorie Weekend Trip
                        </h1>
                        <p className="text-3xl md:text-5xl font-display font-light text-primary mb-8">
                            Dehradun Call Girls ke Saath
                        </p>

                        <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-serif">
                            Outstation Package – Romantic Drive • Scenic Views • Full Privacy • Unlimited Fun
                        </p>
                    </motion.div>

                    <motion.a
                        href="https://wa.me/918449203324"
                        target="_blank"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="mt-12 inline-flex items-center gap-4 bg-white hover:bg-primary hover:text-white text-black font-medium px-10 py-5 rounded-full text-lg transition-all duration-300 group"
                    >
                        <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                        Book Now on WhatsApp +91-8449203324
                    </motion.a>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 flex flex-col items-center">
                    <span className="text-xs tracking-widest">SCROLL TO EXPLORE</span>
                    <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/50 to-transparent mt-3" />
                </div>
            </section>

            {/* ==================== FIRST CONTENT SECTION (Magazine Style) ==================== */}
            <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-display font-light italic leading-tight text-foreground">
                        Weekend Mussoorie Trip Special
                    </h2>
                    <p className="text-2xl md:text-4xl font-display font-light italic text-primary mt-3">
                        Dehradun Call Girls ke Saath Outstation Package - Cash on Delivery
                    </p>
                    <div className="gold-line-wide mx-auto mt-10" />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-16">

                    {/* Left - Text Content */}
                    <div className="lg:col-span-7 mb-10 space-y-9 text-[17px] md:text-lg font-serif leading-relaxed text-muted-foreground">

                        <p>
                            भाई, weekend आ रहा है और मन बेकरार है कुछ खास करने का? देहरादून से मसूरी सिर्फ 33-35 किमी दूर है -
                            रोड से करीब 1 से 1.5 घंटे लगते हैं। पहाड़ी रास्ता, घुमावदार सड़कें, ठंडी हवा और चारों तरफ हरे-भरे जंगल -
                            <strong>Queen of Hills</strong> का पूरा माहौल!
                        </p>

                        <p>
                            ज्यादातर लोग अकेले या friends के साथ घूमने जाते हैं, लेकिन अगर तुम चाहते हो कि ये weekend पूरी तरह से यादगार और
                            <span className="text-primary">romantic</span> बने, तो देहरादून call girls को साथ लेकर outstation package बुक कर लो।
                            ये स्पेशल package अभी चल रहा है —
                            <a href="https://callgirlindehradunescort.info/" className="text-primary hover:underline font-medium">
                                पूरा weekend companion, romantic vibes
                            </a>, और हर चीज tension-free!
                        </p>

                        <p>
                            कल्पना करो: Friday evening देहरादून से कार निकालते हो, लड़की तैयार होकर तुम्हारे साथ join हो जाती है।
                            रास्ते में songs बजाते हो, baatein करते हो, हंसी-मजाक चलता रहता है। मसूरी पहुंचते ही Mall Road पर उतरते हो -
                            lights चमक रही हैं, दुकानें, cafes, street food का मज़ा लेते हो। साथ में घूमते हुए हाथ में हाथ, coffee पीते हुए
                            या maggi खाते हुए - वो छोटे-छोटे moments कितने special लगते हैं!
                        </p>

                        <p>
                            रात को hotel में check-in, private room में full privacy - massage, passionate moments, shower together,
                            multiple rounds - जो मन करे, mutual consent में सब allowed। Unlimited मज़ा, सुबह तक cuddle और hot coffee के साथ goodbye तक!
                        </p>

                        <p>
                            सुबह fresh होकर निकल पड़ो। सबसे पहले <strong>Kempty Falls</strong> - 15 किमी दूर, 40 फीट ऊंचा झरना।
                            ठंडी हवा में साथ बैठना, पानी की आवाज सुनते हुए baatein करना - कितना romantic!
                        </p>

                        <p>
                            फिर <strong>Gun Hill Point</strong> - cable car ride, Garhwal Himalayan ranges के stunning views,
                            sunset के साथ hug - ये moment दिल को छू जाता है।
                        </p>

                        <p>
                            अगर थोड़ा शांत जगह चाहिए, तो <strong>Lal Tibba Scenic Point</strong>, <strong>Cloud’s End</strong>,
                            <strong>George Everest Peak</strong>, <strong>Camel’s Back Road</strong> — सब जगह romantic vibes और peaceful moments का पूरा मजा।
                        </p>

                        <p>
                            Mall Road पर shopping, Landour Bakehouse में fresh pastries और coffee, या Mussoorie Adventure Park में zip-lining —
                            जो मन करे, सब साथ में!
                        </p>
                    </div>

                    {/* Right - Image Stack */}
                    <div className="lg:col-span-5 flex gap-6 items-stretch">

                        {/* Card 1 */}
                        <div className="relative flex-1 h-[420px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 group">
                            <motion.img
                                src={companionImg02}
                                alt="Kempty Falls Mussoorie"
                                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            <div className="absolute bottom-6 left-6 text-white">
                                <p className="uppercase text-xs tracking-widest opacity-80">Kempty Falls</p>
                                <p className="text-xl font-semibold">Romantic Waterfall Escape</p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="relative flex-1 h-[420px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 group">
                            <motion.img
                                src={companionImg03}
                                alt="Gun Hill Point Mussoorie"
                                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            <div className="absolute bottom-6 left-6 text-white">
                                <p className="uppercase text-xs tracking-widest opacity-80">Gun Hill Point</p>
                                <p className="text-xl font-semibold">Himalayan Sunset Magic</p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="relative flex-1 h-[420px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 group">
                            <motion.img
                                src={companionImg06}
                                alt="Lal Tibba Mussoorie"
                                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            <div className="absolute bottom-6 left-6 text-white">
                                <p className="uppercase text-xs tracking-widest opacity-80">Lal Tibba</p>
                                <p className="text-xl font-semibold">Panoramic Peaceful Views</p>
                            </div>
                        </div>

                    </div>


                </div>
            </section>


            {/* ==================== PREMIUM SECOND SECTION ==================== */}
            <section className="max-w-7xl mx-auto px-6 py-24 md:py-32 bg-background">

                {/* Why This Package is Mast */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20 "
                >
                    <h2 className="text-5xl md:text-6xl font-display font-light italic tracking-tight text-foreground">
                        ये Package क्यों इतना <span className="text-primary">Mast</span> है?
                    </h2>
                    <div className="gold-line-wide mx-auto mt-10 w-24" />
                </motion.div>

                {/* Feature Cards */}
                <div className="grid my-10 md:grid-cols-2 gap-8 lg:gap-10 mb-24">
                    {[
                        {
                            title: "Outstation Companion",
                            desc: "वो पूरा weekend तुम्हारे साथ, drive से लेकर sightseeing तक। Travel add-on में car या cab sorted।"
                        },
                        {
                            title: "Romantic Spots Full Cover",
                            desc: "Mall Road evening walk, Kempty Falls picnic, Gun Hill cable car sunset, Lal Tibba views, Cloud’s End nature, George Everest starry nights, Camel’s Back Road stroll, Landour cozy cafes — सब शामिल।"
                        },
                        {
                            title: "Full Facilities",
                            desc: "Hotel privacy top-notch, sensual massage, intimate fun, shower together, unlimited rounds full night में। सुबह cuddle, coffee और sweet goodbye।"
                        },
                        {
                            title: "Paisa Vasool",
                            desc: "Weekend package में पूरा value मिलता है। Local experience से compare करो तो ये level का fun budget-friendly। Caring attitude, fresh vibe, zero drama — सब sorted।"
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-card p-10 mt-6 rounded-3xl border border-border hover:border-primary/30 transition-all duration-300 group"
                        >
                            <h3 className="text-2xl md:text-3xl font-medium text-foreground mb-6 group-hover:text-primary transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed text-[17px] md:text-lg">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>



                {/* Booking Process */}
                <div className="max-w-3xl mt-20 mx-auto mb-28">
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

                {/* Highlight Box */}
                <section className="px-6 md:px-10 lg:px-0 my-20">
                    <div className="max-w-4xl mx-auto bg-card border border-primary/20 rounded-3xl p-8 md:p-12 lg:p-16 text-center shadow-lg">

                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-foreground leading-snug">
                            और सबसे आसान बात —
                            <span className="text-primary font-semibold"> Cash on Delivery</span>
                        </h2>

                        <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                            कोई advance payment नहीं। पूरी service enjoy करने के बाद ही payment करें।
                            Simple, safe और hassle-free experience।
                        </p>

                    </div>
                </section>


                {/* Testimonials */}
                <section className="px-6 md:px-10 lg:px-0 my-24">
                    <div className="max-w-3xl mx-auto bg-card border border-border rounded-3xl p-8 md:p-12 lg:p-16 shadow-md">

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display italic text-center text-foreground mb-12">
                            Real Feedback
                        </h2>

                        <div className="space-y-8 border-l-4 border-primary pl-6 text-muted-foreground italic text-base md:text-lg leading-relaxed">
                            <p>
                                “Weekend trip was amazing — smooth experience and no stress at all.”
                            </p>
                            <p>
                                “Everything was well managed, totally worth it. Will try again!”
                            </p>
                        </div>

                        <div className="mt-14 text-center space-y-6">
                            <p className="text-xl md:text-2xl text-foreground leading-relaxed">
                                अपना weekend यादगार बनाओ — easy booking, full privacy और smooth experience।
                            </p>

                            <p className="text-xl font-medium text-primary">
                                Limited slots — अभी contact करो!
                            </p>
                        </div>

                    </div>
                </section>


                {/* CTA */}
                <section className="text-center px-6 md:px-10 lg:px-0 mb-24">
                    <div className="flex flex-col items-center gap-6">

                        <a
                            href="tel:+910000000000"
                            className="inline-flex items-center gap-4 bg-primary hover:bg-accent text-primary-foreground text-lg md:text-2xl font-medium px-10 md:px-14 py-5 md:py-6 rounded-2xl shadow-xl transition-all duration-300 hover:scale-105"
                        >
                            📞 Contact Now
                        </a>

                        <p className="text-muted-foreground text-sm md:text-base">
                            (Direct message पर सभी details मिल जाएंगी)
                        </p>

                    </div>
                </section>


                

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

export default MussoorieWeekendBlog;