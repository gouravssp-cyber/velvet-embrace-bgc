import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "An absolutely unforgettable evening. The level of sophistication and discretion was beyond anything I've experienced. Truly world-class.",
    author: "J. M.",
    location: "London",
  },
  {
    text: "From the moment I reached out, every detail was handled with impeccable care. My companion was charming, intelligent, and stunning.",
    author: "R. K.",
    location: "Dubai",
  },
  {
    text: "The pinnacle of luxury companionship. I felt like royalty the entire evening. I will absolutely return.",
    author: "A. S.",
    location: "Monaco",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-background" id="testimonials">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-sm tracking-luxury uppercase text-primary font-body"
          >
            Testimonials
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-4 text-4xl md:text-5xl font-display italic font-light text-foreground"
          >
            What Our Clients Say
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="gold-line-wide mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-card p-8 relative"
            >
              <div className="gold-line mb-6" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, si) => (
                  <Star key={si} className="h-3.5 w-3.5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-base font-serif font-light text-secondary-foreground leading-relaxed italic mb-6">
                "{t.text}"
              </p>
              <div>
                <p className="text-sm font-body font-medium text-foreground">{t.author}</p>
                <p className="text-xs font-body text-muted-foreground">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
