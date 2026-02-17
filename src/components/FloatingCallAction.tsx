import { Phone } from "lucide-react";
import { useState, useEffect } from "react";

const FloatingCallAction = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed right-6 bottom-8 z-50 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12 pointer-events-none"
      }`}
    >
      <a
        href="tel:+1234567890"
        className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-primary to-gold-dark text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 group hover:scale-110 active:scale-95"
        title="Call us"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6 group-hover:animate-pulse" />
      </a>

      {/* Pulse animation ring */}
      <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse" />
    </div>
  );
};

export default FloatingCallAction;
