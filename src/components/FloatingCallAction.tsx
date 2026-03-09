import { Phone } from "lucide-react";
import { useState, useEffect } from "react";
import whatsappIcon from "@/assets/whatsapp-svgrepo-com.svg";

const FloatingCallAction = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handlePhoneClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const isMobile = /iPhone|iPad|iPod|Android|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      window.location.href = "tel:+918057744241";
    } else {
      // On desktop, copy phone number to clipboard
      navigator.clipboard.writeText("+91 8057744241");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      className={`fixed right-6 bottom-8 z-50 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12 pointer-events-none"
      }`}
    >
      <div className="flex flex-col items-center gap-3">
        <div className="relative">
          <button
            onClick={handlePhoneClick}
            className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-primary to-gold-dark text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 group hover:scale-110 active:scale-95"
            title={copied ? "Copied!" : "Call us"}
            aria-label="Call us"
          >
            <Phone className="w-6 h-6 group-hover:animate-pulse" />
          </button>
          <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse" />
        </div>

        <a
          href="https://api.whatsapp.com/send?phone=918057744241"
          className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 group hover:scale-110 active:scale-95"
          title="Chat on WhatsApp"
          aria-label="Chat on WhatsApp"
        >
          <img src={whatsappIcon} alt="WhatsApp" className="w-6 h-6 group-hover:animate-pulse" />
        </a>
      </div>
    </div>
  );
};

export default FloatingCallAction;
