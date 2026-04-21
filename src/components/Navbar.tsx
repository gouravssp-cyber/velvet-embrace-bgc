import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Companions", href: "#companions" },
  { label: "Experience", href: "#experience" },
  {
    label: "Blogs",
    children: [
      { label: "Dehradun Call", href: "/dehradun-call" },
      { label: "Mussoorie Weekend", href: "/mussoorie-weekend" },
    ],
  },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/90 backdrop-blur-md border-b border-border/30" : "bg-transparent"
        }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-12">
        <a href="#" className="text-2xl font-display italic text-foreground">
          ( ๏ 人 ๏ ) <span className="gold-gradient-text">Call Girl in Dehradun</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <div key={l.label} className="relative group">
              {l.children ? (
                <>
                  <span className="text-xs tracking-luxury uppercase font-body text-muted-foreground hover:text-primary cursor-pointer">
                    {l.label}
                  </span>

                  {/* Dropdown */}
                  <div className="absolute left-0 mt-2 pt-2 hidden group-hover:block">
                    <div className="bg-background border border-border/30 rounded-md shadow-lg min-w-[180px]">
                      {l.children.map((child) => (
                        <a key={child.label} href={child.href} className="block px-4 py-2 text-xs hover:bg-muted">
                          {child.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <a
                  href={l.href}
                  className="text-xs tracking-luxury uppercase font-body text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {l.label}
                </a>
              )}
            </div>
          ))}

          <a
            href="tel:+918057744241"
            className="border border-primary px-6 py-2.5 text-xs tracking-luxury uppercase font-body text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Book Now
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-background/95 backdrop-blur-md border-b border-border/30 px-6 pb-6"
        >
          {links.map((l) => (
            <div key={l.label}>
              {l.children ? (
                <>
                  <div className="py-3 text-sm uppercase text-muted-foreground">
                    {l.label}
                  </div>
                  {l.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      onClick={() => setOpen(false)}
                      className="block pl-4 py-2 text-sm text-muted-foreground hover:text-primary"
                    >
                      {child.label}
                    </a>
                  ))}
                </>
              ) : (
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm uppercase text-muted-foreground hover:text-primary"
                >
                  {l.label}
                </a>
              )}
            </div>
          ))}
          <a
            href="tel:+918057744241"
            className="mt-3 block border border-primary px-6 py-3 text-center text-xs tracking-luxury uppercase font-body text-primary"
          >
            Book Now
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
