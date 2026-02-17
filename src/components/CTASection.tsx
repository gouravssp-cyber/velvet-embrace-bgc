import { motion } from "framer-motion";
import { MessageCircle, Send } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding bg-secondary relative overflow-hidden" id="contact">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="mx-auto max-w-3xl text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 text-sm tracking-luxury uppercase text-primary font-body"
        >
          Begin Your Experience
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-4 text-4xl md:text-6xl font-display italic font-light text-foreground leading-tight"
        >
          Ready to Be <span className="gold-gradient-text">Captivated</span>?
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="gold-line-wide mx-auto mb-8"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-10 text-lg font-serif font-light text-muted-foreground leading-relaxed"
        >
          Your perfect companion awaits. Reach out to our discreet concierge team and let us arrange an extraordinary encounter.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
        >
          <a
            href="#"
            className="border border-primary bg-primary px-10 py-4 text-sm font-body tracking-luxury uppercase text-primary-foreground transition-all duration-300 hover:bg-gold-dark inline-flex items-center justify-center gap-3"
          >
            Book Now
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex justify-center gap-6"
        >
          <a href="#" className="flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-primary transition-colors">
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
          <a href="#" className="flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-primary transition-colors">
            <Send className="h-4 w-4" />
            Telegram
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
