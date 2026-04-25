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
          
          preload="metadata"
          className="h-[130%] w-full object-cover"
          width={1920}
          height={1080}
        >
          <source src={heroBg} type="video/mp4" />
        </video>
        <div className="luxury-overlay absolute inset-0" />
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
