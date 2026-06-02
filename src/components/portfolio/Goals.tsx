import { SectionHeader } from "./About";
import { Target, TrendingUp, Lightbulb, Handshake } from "lucide-react";

const goals = [
  { icon: Target, title: "Contribute", desc: "Bring fresh ideas and strong fundamentals to impactful teams." },
  { icon: Lightbulb, title: "Learn", desc: "Absorb industry practices and grow through real-world challenges." },
  { icon: TrendingUp, title: "Grow", desc: "Develop deep expertise in ML, AI, and scalable software." },
  { icon: Handshake, title: "Collaborate", desc: "Build alongside great engineers and ship products that matter." },
];

export function Goals() {
  return (
    <section id="goals" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader tag="05 / GOALS" title="Career Objective" />

        <div className="mt-12 glass-strong rounded-3xl p-8 md:p-12 neon-glow relative overflow-hidden">
          <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-cyan/10 blur-3xl" />
          <p className="relative text-xl md:text-2xl leading-relaxed text-center font-display font-light">
            "Seeking opportunities as a{" "}
            <span className="text-gradient font-semibold">Machine Learning Enthusiast</span>{" "}
            where I can contribute, learn, and grow by building impactful software solutions."
          </p>

          <div className="relative mt-12 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {goals.map((g) => (
              <div key={g.title} className="text-center p-4 rounded-xl glass hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-primary flex items-center justify-center neon-glow">
                  <g.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div className="font-display font-bold mb-1">{g.title}</div>
                <div className="text-xs text-muted-foreground">{g.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
