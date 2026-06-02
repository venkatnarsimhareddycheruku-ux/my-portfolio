import { SectionHeader } from "./About";
import { ArrowUpRight, GraduationCap, ShoppingCart, ListTodo, Globe } from "lucide-react";

const projects = [
  {
    icon: GraduationCap,
    title: "Student Management System",
    desc: "A system for managing academic details of students with dashboards and analytics. Built with Python and machine learning capabilities for data insights.",
    stack: ["Python", "Machine Learning", "HTML", "CSS", "Dashboard"],
    status: "Live",
    featured: true,
  },
  { icon: ShoppingCart, title: "E-Commerce Web App", desc: "Full-stack shopping experience with cart, payments, and admin panel.", stack: ["Coming Soon"], status: "Planned" },
  { icon: ListTodo, title: "Task Management System", desc: "Collaborative task tracker with realtime updates and team workflows.", stack: ["Coming Soon"], status: "Planned" },
  { icon: Globe, title: "Portfolio Website", desc: "This very site — a futuristic personal portfolio built from scratch.", stack: ["React", "TanStack", "Tailwind"], status: "Live" },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader tag="03 / WORK" title="Featured Projects" subtitle="Selected projects and what's coming next." />

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {projects.map((p, idx) => (
            <article
              key={p.title}
              className={`group relative glass rounded-2xl p-7 overflow-hidden hover:-translate-y-2 transition-all duration-500 ${
                p.featured ? "md:col-span-2 neon-glow" : ""
              }`}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-primary/10 blur-3xl group-hover:bg-primary/20 transition-colors" />
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-neon/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center neon-glow">
                  <p.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className={`px-2.5 py-1 rounded-md text-[10px] font-mono font-bold tracking-wider ${
                  p.status === "Live" ? "bg-cyan/20 text-cyan border border-cyan/40" : "bg-muted text-muted-foreground border border-border"
                }`}>
                  {p.status.toUpperCase()}
                </span>
              </div>

              <h3 className="relative font-display text-2xl font-bold mb-3 group-hover:text-gradient transition-all">
                {p.title}
              </h3>
              <p className="relative text-muted-foreground mb-5 leading-relaxed">{p.desc}</p>

              <div className="relative flex flex-wrap gap-2 mb-5">
                {p.stack.map((s) => (
                  <span key={s} className="px-2.5 py-1 rounded text-xs font-mono bg-secondary/50 border border-border/40">
                    {s}
                  </span>
                ))}
              </div>

              <div className="relative flex items-center gap-1 text-sm font-mono text-neon opacity-70 group-hover:opacity-100 transition-opacity">
                {p.status === "Live" ? "View Project" : "Coming Soon"}
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
