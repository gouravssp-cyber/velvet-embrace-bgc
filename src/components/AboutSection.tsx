import { motion } from "framer-motion";
import { Shield, Star, Clock, CheckCircle } from "lucide-react";

const features = [
  { 
    icon: Shield, 
    title: "Complete Privacy & Discretion", 
    desc: "We prioritize your confidentiality with secure communication, discreet listings, and private booking options designed for adults seeking absolute privacy." 
  },
  { 
    icon: Star, 
    title: "Curated Premium Listings", 
    desc: "Explore a refined selection of independent companions and agency profiles, carefully presented to ensure quality, elegance, and authenticity." 
  },
  { 
    icon: Clock, 
    title: "Easy & Flexible Booking", 
    desc: "Browse profiles anytime and connect directly through streamlined contact options for seamless scheduling and personalized arrangements." 
  },
  { 
    icon: CheckCircle, 
    title: "Verified & Detailed Profiles", 
    desc: "Each listing features comprehensive details, clear photos, and verified information to help you make confident and informed choices." 
  },
];

const AboutSection = () => {
  return (
    <section className="section-padding bg-background" id="about">
      <div className="mx-auto max-w-6xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-sm tracking-luxury uppercase text-primary font-body"
        >
          Why Choose BabyCallGirl.com
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4 text-4xl md:text-5xl font-display italic font-light text-foreground"
        >
          A Refined Adult Companion Directory
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="gold-line-wide mx-auto mb-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mb-16 max-w-2xl text-lg font-serif font-light text-muted-foreground leading-relaxed"
        >
          BabyCallGirl.com serves as a premium escort listing platform connecting adults with 
          sophisticated companion profiles across various cities and regions. 
          Whether you are seeking independent call girl listings or agency-based companions, 
          our platform is structured to provide clarity, discretion, and an elevated browsing experience.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="glass-card p-8 text-center group transition-all duration-500 hover:border-primary/30"
            >
              <div className="mb-5 flex justify-center">
                <f.icon className="h-8 w-8 text-primary transition-transform duration-500 group-hover:scale-110" />
              </div>
              <h3 className="mb-3 text-lg font-display font-medium text-foreground">{f.title}</h3>
              <p className="text-sm font-body font-light text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
