import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border py-12 px-6">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <div className="font-display font-bold text-lg">
            <span className="text-gradient">CHERUKU VENKATA NARSIMHA REDDY</span>
          </div>
          <p className="text-sm text-muted-foreground mt-1 flex items-center gap-1 justify-center md:justify-start">
            © 2027 — Built with <Heart className="w-3.5 h-3.5 text-neon fill-current" /> passion and code.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <SocialBtn href="mailto:venkatnarsimhareddycheruku@gmail.com" icon={Mail} />
          <SocialBtn href="https://github.com/venkatnarsimhareddycheruku-ux" icon={Github} />
          <SocialBtn href="https://www.linkedin.com/in/cheruku-venkata-narsimha-reddy-766225388" icon={Linkedin} />
        </div>
      </div>
    </footer>
  );
}

function SocialBtn({ href, icon: Icon }: any) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:border-neon/60 hover:text-neon hover:-translate-y-0.5 transition-all"
    >
      <Icon className="w-4 h-4" />
    </a>
  );
}
