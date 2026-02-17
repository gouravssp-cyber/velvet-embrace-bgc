import { Instagram, Twitter } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="px-6 py-12 md:px-12 bg-jet">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <a href="#" className="text-2xl font-display italic text-foreground">
              ( ๏ 人 ๏ ) <span className="gold-gradient-text">Call Girl in Dehradun</span>
            </a>

          </div>

         
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-body text-muted-foreground">
            © 2026 Call Girl in Dehradun. All rights reserved.
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
