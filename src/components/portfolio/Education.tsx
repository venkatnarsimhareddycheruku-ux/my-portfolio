import { SectionHeader } from "./About";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader tag="04 / EDUCATION" title="Academic Journey" />

        <div className="mt-16 relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neon/50 to-transparent" />

          <TimelineItem
            side="right"
            year="2023 — 2027"
            title="B.Tech in Computer Science Engineering"
            spec="Artificial Intelligence & Machine Learning"
            place="Sree Chaitanya Institute Of Technological Sciences"
            current
          />
        </div>
      </div>
    </section>
  );
}

function TimelineItem({
  year, title, spec, place, side, current,
}: { year: string; title: string; spec: string; place: string; side: "left" | "right"; current?: boolean }) {
  return (
    <div className={`relative flex ${side === "left" ? "md:flex-row-reverse" : ""} items-start gap-6 mb-12`}>
      <div className="absolute left-6 md:left-1/2 w-4 h-4 -translate-x-1/2 mt-6 rounded-full bg-gradient-primary neon-glow ring-4 ring-background" />
      <div className={`ml-16 md:ml-0 md:w-1/2 ${side === "right" ? "md:pl-12" : "md:pr-12"}`}>
        <div className="glass-strong rounded-2xl p-6 hover:neon-glow transition-all duration-500">
          <div className="flex items-center gap-2 text-xs font-mono text-neon mb-3">
            <Calendar className="w-3.5 h-3.5" />
            {year}
            {current && (
              <span className="ml-2 px-2 py-0.5 rounded-full bg-cyan/20 text-cyan text-[10px] border border-cyan/40">
                ONGOING
              </span>
            )}
          </div>
          <h3 className="font-display text-xl font-bold mb-1">{title}</h3>
          <div className="text-cyan text-sm font-mono mb-3">{spec}</div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-3.5 h-3.5" />
            {place}
          </div>
          <div className="mt-4 flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-neon" />
            <span className="text-xs font-mono text-muted-foreground">Graduating Class of 2027</span>
          </div>
        </div>
      </div>
    </div>
  );
}
