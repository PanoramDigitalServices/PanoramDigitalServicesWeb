import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Twitter, Instagram, ArrowUpRight, Facebook } from "lucide-react";
import logo from "@/assets/panoram-logo-mark.png";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.96a8.24 8.24 0 004.82 1.55V7.07a4.85 4.85 0 01-1.05-.38z" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative mt-32 px-4 pb-10">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl glass-strong p-10 md:p-16 shadow-elegant noise">
          <div className="absolute -top-40 left-1/2 h-[400px] w-[700px] -translate-x-1/2 bg-glow opacity-60 pointer-events-none" />
          <div className="relative grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
            <div>
              <div className="flex items-center gap-3">
                <img src={logo} alt="Panoram" className="h-10 w-10 drop-shadow-[0_0_14px_oklch(0.62_0.18_245/0.7)]" />
                <div className="font-display text-2xl font-bold">Panoram</div>
              </div>
              <p className="mt-4 max-w-sm text-sm text-muted-foreground leading-relaxed">
                We engineer digital dominance. Cinematic websites, intelligent systems, and growth marketing for brands that refuse average.
              </p>
              <div className="mt-6 flex gap-3">
                {[
                  { Icon: Linkedin, href: "https://www.linkedin.com/company/panoram-digital-services/posts/?feedView=all" },
                  { Icon: Instagram, href: "https://www.instagram.com/panoram_digital_services?igsh=YXBoY2hpZmU2dG14" },
                  { Icon: Facebook, href: "https://www.facebook.com/panoramdigitalservices?mibextid=ZbWKwL" },
                  { Icon: TikTokIcon, href: "https://www.tiktok.com/@panoram77?_r=1&_t=ZS-97HHtbz1i45" },
                ].map(({ Icon, href }, i) => (
                  <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="group flex h-10 w-10 items-center justify-center rounded-full border border-border transition-all hover:border-primary hover:bg-primary/10">
                    <Icon className="h-4 w-4 transition-transform group-hover:scale-110" />
                  </a>
                ))}
              </div>
            </div>

            <FooterCol title="Solutions" links={[
              { label: "Web Development", to: "/" },
              { label: "POS Systems", to: "/" },
              { label: "Digital Marketing", to: "/" },
              { label: "AI Chatbots", to: "/" },
            ]} />
            <FooterCol title="Company" links={[
              { label: "What we do", to: "/" },
              { label: "Community", to: "/community" },
              { label: "Blog", to: "/blog" },
              { label: "Book a Demo", to: "/contact" },
            ]} />
            {/* <FooterCol title="Coming Soon" links={[
              { label: "Cloud & DevOps", to: "/" },
              { label: "Mobile Apps", to: "/" },
              { label: "ERP Systems", to: "/" },
              { label: "AI Consulting", to: "/" },
            ]} /> */}
          </div>

          <div className="relative mt-12 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground font-mono uppercase tracking-wider">
            <div>© {new Date().getFullYear()} Panoram Digital Services. All rights reserved.</div>
            <div className="flex items-center gap-2">
              <span>Built for cinematic ambition</span>
              <ArrowUpRight className="h-3 w-3" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; to: string }[] }) {
  return (
    <div>
      <h4 className="font-mono text-xs uppercase tracking-[0.18em] text-primary-glow">{title}</h4>
      <ul className="mt-4 space-y-2.5 text-sm">
        {links.map((l) => (
          <li key={l.label}>
            <Link to={l.to} className="text-foreground/80 transition-colors hover:text-primary-glow">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
