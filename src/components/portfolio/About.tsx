import { GraduationCap, Rocket, Users, Zap, Code2 } from "lucide-react";

const stats = [
  { icon: Rocket, label: "Fresher", value: "2027" },
  { icon: GraduationCap, label: "B.Tech CSE", value: "AI & ML" },
  { icon: Zap, label: "Fast Learner", value: "100%" },
  { icon: Users, label: "Team Player", value: "Always" },
];

export function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader tag="01 / ABOUT" title="About Me" />

        <div className="mt-16 grid lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-3 space-y-6">
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              Hi, I'm <span className="text-foreground font-semibold">Cheruku Venkata Narsimha Reddy</span>, a passionate{" "}
              <span className="text-neon">Machine Learning Enthusiast</span> and Python coder focused on
              building modern, scalable, problem-solving systems.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
              I enjoy turning ideas into real digital solutions through clean code and creative design.
              Currently, I am continuously learning and improving my skills — exploring the intersection
              of artificial intelligence, data science, and software engineering.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {["Python", "Machine Learning", "Data Science", "AI", "Problem Solving"].map((t) => (
                <span key={t} className="px-3 py-1.5 rounded-md glass text-sm font-mono text-cyan">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="relative glass-strong rounded-2xl p-8 neon-glow">
              <div className="absolute -top-3 left-6 px-3 py-1 rounded-md bg-gradient-primary text-primary-foreground text-xs font-mono font-bold">
                PROFILE
              </div>
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border">
                <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center neon-glow">
                  <Code2 className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-display font-bold text-lg">CVNR</div>
                  <div className="text-xs text-muted-foreground font-mono">@narsimhareddy</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s) => (
                  <div key={s.label} className="p-3 rounded-lg bg-secondary/40 border border-border/40">
                    <s.icon className="w-4 h-4 text-neon mb-2" />
                    <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
                      {s.label}
                    </div>
                    <div className="text-sm font-semibold">{s.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({ tag, title, subtitle }: { tag: string; title: string; subtitle?: string }) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <div className="inline-block px-3 py-1 rounded-md glass font-mono text-xs tracking-[0.3em] text-neon mb-4">
        {tag}
      </div>
      <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight">
        <span className="text-gradient">{title}</span>
      </h2>
      {subtitle && <p className="mt-4 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
