import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "goals", label: "Goals" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const y = window.scrollY + 120;
      for (const l of links) {
        const el = document.getElementById(l.id);
        if (el && el.offsetTop <= y && el.offsetTop + el.offsetHeight > y) {
          setActive(l.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-strong py-3" : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <button onClick={() => go("home")} className="font-display text-lg font-bold tracking-wider">
          <span className="text-gradient">CVNR</span>
          <span className="text-neon">.</span>
        </button>
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                active === l.id ? "text-neon" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
              {active === l.id && (
                <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-neon shadow-[0_0_8px_var(--neon)]" />
              )}
            </button>
          ))}
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground" aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden glass-strong border-t border-border mt-3 animate-fade-up">
          <div className="flex flex-col p-4 gap-2">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className={`text-left px-4 py-2 rounded-md ${
                  active === l.id ? "bg-primary/10 text-neon" : "text-muted-foreground"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
