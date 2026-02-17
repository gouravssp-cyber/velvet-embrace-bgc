import { Instagram, Twitter } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="px-6 py-12 md:px-12 bg-jet">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-display italic text-foreground mb-1">Élite</h3>
            <p className="text-xs tracking-luxury uppercase text-muted-foreground font-body">Exclusive Companions</p>
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-body text-muted-foreground">
            © 2026 Élite. All rights reserved.
          </p>
          <p className="text-xs font-body text-muted-foreground text-center">
            All interactions are strictly confidential. Your privacy is guaranteed.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
