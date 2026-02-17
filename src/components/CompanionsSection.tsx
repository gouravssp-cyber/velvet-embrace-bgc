import { motion } from "framer-motion";
import companion1 from "@/assets/companion-1.jpg";
import companion2 from "@/assets/companion-2.jpg";
import companion3 from "@/assets/companion-3.jpg";
import companion4 from "@/assets/companion-4.jpg";
import companion5 from "@/assets/companion-5.jpg";
import companion6 from "@/assets/companion-6.jpg";

const companions = [
  { name: "Valentina", age: 24, location: "Milan", img: companion1 },
  { name: "Scarlett", age: 26, location: "London", img: companion2 },
  { name: "Isabella", age: 23, location: "Paris", img: companion3 },
  { name: "Natasha", age: 27, location: "Monaco", img: companion4 },
  { name: "Emerald", age: 25, location: "Dubai", img: companion5 },
  { name: "Aurelia", age: 22, location: "New York", img: companion6 },
];

const CompanionsSection = () => {
  return (
    <section className="section-padding bg-secondary" id="companions">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-sm tracking-luxury uppercase text-primary font-body"
          >
            Our Collection
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-4 text-4xl md:text-5xl font-display italic font-light text-foreground"
          >
            Featured Companions
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="gold-line-wide mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {companions.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden cursor-pointer"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={c.img}
                  alt={c.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              {/* Overlay on hover */}
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="p-6">
                  <p className="text-sm tracking-luxury uppercase text-primary font-body mb-1">{c.location}</p>
                  <h3 className="text-2xl font-display italic text-foreground">{c.name}, {c.age}</h3>
                  <div className="mt-4 gold-line" />
                  <p className="mt-3 text-sm tracking-luxury uppercase text-primary font-body hover:text-gold-light transition-colors">
                    View Details →
                  </p>
                </div>
              </div>
              {/* Always visible name bar */}
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-background/80 to-transparent group-hover:opacity-0 transition-opacity duration-500">
                <h3 className="text-xl font-display italic text-foreground">{c.name}</h3>
                <p className="text-xs tracking-luxury uppercase text-muted-foreground font-body">{c.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanionsSection;
