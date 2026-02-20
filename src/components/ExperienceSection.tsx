import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import experienceBg from "@/assets/meta-1280x720.jpg";
import { Gem, Wine, Globe, Heart } from "lucide-react";

const experiences = [
  { icon: Wine, text: "Private dinner companionship" },
  { icon: Globe, text: "Travel & getaway partners" },
  { icon: Gem, text: "VIP event accompaniment" },
  { icon: Heart, text: "Personalized luxury experiences" },
];

const ExperienceSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className="relative overflow-hidden" id="experience">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        {/* Image side */}
        <div className="relative h-[50vh] lg:h-auto overflow-hidden">
          <motion.img
            src={experienceBg}
            alt="Luxury experience"
            className="absolute inset-0 h-[120%] w-full object-cover"
            style={{ y: imgY }}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-background/30" />
        </div>

        {/* Content side */}
        <div className="flex items-center bg-background section-padding">
          <div className="max-w-lg">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 text-sm tracking-luxury uppercase text-primary font-body"
            >
              The Experience
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mb-4 text-4xl md:text-5xl font-display italic font-light text-foreground leading-tight"
            >
              Beyond the Ordinary
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="gold-line-wide mb-8"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mb-10 text-lg font-serif font-light text-muted-foreground leading-relaxed"
            >
              Our companions are more than beautiful — they are cultured, multilingual, and impeccably presented.
              Whether for an intimate evening or a grand occasion, every moment is crafted to perfection.
            </motion.p>

           
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
