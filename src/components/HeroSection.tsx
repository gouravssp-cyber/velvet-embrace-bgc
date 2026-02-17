import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import heroBg from "@/assets/video.mp4";
import heroPoster from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Lazy load video when component mounts
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Start playing after a small delay to avoid blocking page load
    const timer = setTimeout(() => {
      if (video.paused) {
        video.play().catch(() => {
          // Autoplay might be blocked, that's okay
          console.debug("Autoplay prevented");
        });
      }
    }, 500);

    const handleLoadedData = () => {
      setIsVideoLoaded(true);
    };

    video.addEventListener("loadeddata", handleLoadedData);
    return () => {
      clearTimeout(timer);
      video.removeEventListener("loadeddata", handleLoadedData);
    };
  }, []);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y }}>
        <video
          ref={videoRef}
          autoPlay={false}
          loop
          muted
          playsInline
          poster={heroPoster}
          preload="metadata"
          className="h-[130%] w-full object-cover"
          width={1920}
          height={1080}
        >
          <source src={heroBg} type="video/mp4" />
        </video>
        <div className="luxury-overlay absolute inset-0" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 text-sm tracking-luxury uppercase text-gold-light font-body"
        >
          Premium Escort & Companion Listings
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-6 text-5xl md:text-7xl lg:text-8xl font-display italic font-light leading-tight"
        >
          <span className="gold-gradient-text">Discover</span>{" "}
          <span className="text-foreground">Elite</span>
          <br />
          <span className="text-foreground">Companionship</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mb-10 max-w-lg text-lg font-light text-muted-foreground font-serif tracking-wide"
        >
          BabyCallGirl.com connects adults with exclusive companion profiles, 
          featuring verified listings, discreet booking options, and premium 
          escort services tailored for sophisticated private experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#companions"
            className="border border-primary bg-primary px-10 py-4 text-sm font-body tracking-luxury uppercase text-primary-foreground transition-all duration-300 hover:bg-gold-dark"
          >
            Explore Listings
          </a>
          <a
            href="#companions"
            className="border border-border px-10 py-4 text-sm font-body tracking-luxury uppercase text-foreground transition-all duration-300 hover:border-primary hover:text-primary"
          >
            View Profiles
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <ChevronDown className="h-6 w-6 text-primary animate-scroll-hint" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
