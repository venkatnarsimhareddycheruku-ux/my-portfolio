import { SectionHeader } from "./About";
import {
  Brain, Database, Code, Cloud, Cpu, Wrench, Bot, GitBranch,
} from "lucide-react";

const groups = [
  {
    icon: Brain,
    title: "AI / Machine Learning",
    skills: ["Machine Learning", "Deep Learning", "Artificial Intelligence", "Classification", "Regression Models", "Data Classification", "Data Science", "ML Algorithms"],
  },
  {
    icon: Code,
    title: "Languages & Core",
    skills: ["Python", "Java", "C", "Data Structures", "OOP", "Problem Solving", "Automata & Compiler Design", "Computer Graphics"],
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["MySQL", "MongoDB", "DBMS"],
  },
  {
    icon: Cloud,
    title: "Cloud & Systems",
    skills: ["Cloud Computing", "Operating Systems", "Blockchain"],
  },
  {
    icon: Wrench,
    title: "Tools & Workflow",
    skills: ["Git", "GitHub", "VS Code", "Jupyter", "REST APIs", "Responsive Design"],
  },
  {
    icon: Bot,
    title: "AI Tools",
    skills: ["ChatGPT", "Grok", "NotebookLM", "Collaborative Problem Solving"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative max-w-7xl mx-auto">
        <SectionHeader tag="02 / SKILLS" title="Tech Stack" subtitle="A growing toolkit of languages, frameworks, and AI capabilities." />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((g, idx) => (
            <div
              key={g.title}
              className="group relative glass rounded-2xl p-6 hover:border-neon/50 hover:-translate-y-1 transition-all duration-500"
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-primary/10 to-cyan/10 pointer-events-none" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-lg bg-gradient-primary/20 border border-neon/30 flex items-center justify-center group-hover:neon-glow transition-shadow">
                    <g.icon className="w-5 h-5 text-neon" />
                  </div>
                  <h3 className="font-display font-bold text-lg">{g.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {g.skills.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-secondary/50 border border-border/40 text-muted-foreground hover:text-neon hover:border-neon/40 transition-colors"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
