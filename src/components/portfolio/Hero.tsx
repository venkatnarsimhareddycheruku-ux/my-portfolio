import { useEffect, useState } from "react";
import { ArrowRight, Download, Mail, Sparkles } from "lucide-react";

const rotating = [
  "Building End-to-End Solutions",
  "Python Developer",
  "Data Analyst",
  "Problem Solver",
  "AI Enthusiast",
];

export function Hero() {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = rotating[i % rotating.length];
    const speed = del ? 40 : 80;
    const t = setTimeout(() => {
      if (!del) {
        const next = word.slice(0, text.length + 1);
        setText(next);
        if (next === word) setTimeout(() => setDel(true), 1400);
      } else {
        const next = word.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDel(false);
          setI(i + 1);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i]);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero">
      <div className="absolute inset-0 grid-bg opacity-40 animate-grid-move" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-cyan/20 blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24 pb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-8 animate-fade-up">
          <Sparkles className="w-3.5 h-3.5 text-neon" />
          <span className="text-xs font-mono tracking-wider text-muted-foreground">
            AVAILABLE FOR OPPORTUNITIES
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-black leading-[1.05] tracking-tight animate-fade-up">
          <span className="block text-foreground">CHERUKU VENKATA</span>
          <span className="block text-gradient-shimmer">NARSIMHA REDDY</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-muted-foreground font-mono animate-fade-up">
          Machine Learning Enthusiast
        </p>
        <p className="mt-2 text-2xl md:text-3xl font-display font-semibold text-foreground animate-fade-up">
          Building Future with Code
        </p>

        <div className="mt-8 h-10 flex items-center justify-center font-mono text-base md:text-lg text-cyan animate-fade-up">
          <span className="text-muted-foreground mr-2">{`>`}</span>
          <span>{text}</span>
          <span className="ml-1 w-0.5 h-6 bg-neon animate-blink" />
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-fade-up">
          <button
            onClick={() => scrollTo("projects")}
            className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-gradient-primary text-primary-foreground font-semibold neon-glow hover:neon-glow-strong transition-all duration-300 hover:-translate-y-0.5"
          >
            View Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg glass-strong hover:border-neon/60 transition-all duration-300 hover:-translate-y-0.5 font-semibold"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
          <button
            onClick={() => scrollTo("contact")}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-border hover:border-neon/60 hover:text-neon transition-all duration-300 hover:-translate-y-0.5 font-semibold"
          >
            <Mail className="w-4 h-4" />
            Contact Me
          </button>
        </div>

        <div className="mt-20 flex flex-wrap justify-center gap-6 text-xs font-mono text-muted-foreground animate-fade-up">
          <span>{`{ status: "learning" }`}</span>
          <span className="text-neon">•</span>
          <span>{`{ stack: "Python | ML | AI" }`}</span>
          <span className="text-neon">•</span>
          <span>{`{ graduation: 2027 }`}</span>
        </div>
      </div>
    </section>
  );
}
