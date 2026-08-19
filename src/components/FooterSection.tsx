import { Instagram, Twitter } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="px-6 py-12 md:px-12 bg-jet">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-2">
            <a
              href="#"
              className="w-fit text-2xl font-display italic text-foreground transition-opacity hover:opacity-80"
            >
              ( ๏ 人 ๏ ) <span className="gold-gradient-text">Call Girl in Dehradun</span>
            </a>

            <div className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="mt-0.5 h-4 w-4 shrink-0 text-primary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11Z"
                />
                <circle cx="12" cy="10" r="2.2" />
              </svg>

              <span>
                Saharanpur Rd, Laal Pul, Patel Nagar,
                <br />
                Dehradun, Uttarakhand 248001
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h2>Blogs</h2>

            <a href="/dehradun-call-girls" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
              Dehradun Call Girls Service
            </a>

            <a href="/mussoorie-weekend-call-girls" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
              Mussoorie Weekend Call Girls
            </a>

            <a href="/dehradun-2026-college-girls-short-vs-full-night-offer" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
              2026 College Girls Short vs Full Night Offer
            </a>

            <a href="/sexy-call-girl-in-dehradun-24/7-Delivery-and-Cash" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
              24/7 Delivery and Cash Service
            </a>

            <a href="/dehradun-call-girls-service-real-photos-COD" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
              Real Photos & COD Service
            </a>

            <a href="/partner-se-sex-par-openly-baat-kaise-kare-guide" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
              Partner Se Sex Par Baat Kaise Kare (Guide)
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
