import { motion } from "framer-motion";
import companion1 from "@/assets/companion/img01.jpeg";
import companion2 from "@/assets/companion/img02.webp";
import companion3 from "@/assets/companion/img03.webp";
import companion4 from "@/assets/companion/img04.webp";
import companion5 from "@/assets/companion/img05.jpg";
import companion6 from "@/assets/companion/img06.webp";
import companion7 from "@/assets/companion/img07.jpg";
import companion8 from "@/assets/companion/img08.jpg";
import companion9 from "@/assets/companion/img09.webp";
import companion10 from "@/assets/companion/img10.jpg";
import companion11 from "@/assets/companion/img11.jpg";
import companion12 from "@/assets/companion/img12.webp";
import companion13 from "@/assets/companion/img13.jpg";
import companion14 from "@/assets/companion/img14.webp";
import companion15 from "@/assets/companion/img15.jpg";
import companion16 from "@/assets/companion/img16.jpg";
import companion17 from "@/assets/companion/img17.webp";
import companion18 from "@/assets/companion/img18.jpg";
import companion19 from "@/assets/companion/img19.jpg";

const companions = [
  { name: "Priya", age: 24, location: "Dehradun", img: companion1 },
  { name: "Kavya", age: 23, location: "Dehradun", img: companion3 },
  { name: "Neha", age: 26, location: "Dehradun", img: companion4 },
  { name: "Pooja", age: 22, location: "Dehradun", img: companion5 },
  { name: "Divya", age: 27, location: "Dehradun", img: companion6 },
  { name: "Meera", age: 24, location: "Dehradun", img: companion7 },
  { name: "Isha", age: 23, location: "Dehradun", img: companion8 },
  { name: "Sakshi", age: 25, location: "Dehradun", img: companion9 },
  { name: "Ritika", age: 28, location: "Dehradun", img: companion10 },
  { name: "Shreya", age: 26, location: "Dehradun", img: companion11 },
  { name: "Deepika", age: 24, location: "Dehradun", img: companion2 },
  { name: "Ananya", age: 22, location: "Dehradun", img: companion13 },
  { name: "Swati", age: 27, location: "Dehradun", img: companion14 },
  { name: "Radhika", age: 25, location: "Dehradun", img: companion15 },
  { name: "Trisha", age: 23, location: "Dehradun", img: companion16 },
  { name: "Veena", age: 26, location: "Dehradun", img: companion17 },
  { name: "Yasmin", age: 24, location: "Dehradun", img: companion18 },
  { name: "Zara", age: 28, location: "Dehradun", img: companion19 },
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
              onClick={() => window.location.href = "tel:+918057744241"}
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
                  <a href="tel:+918057744241"  className="mt-3 text-sm tracking-luxury uppercase text-primary font-body hover:text-gold-light transition-colors">
                    View Details →
                  </a>
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
