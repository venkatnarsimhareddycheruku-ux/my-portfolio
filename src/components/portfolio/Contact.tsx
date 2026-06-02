import { useState, type FormEvent } from "react";
import { SectionHeader } from "./About";
import { Mail, Linkedin, Github, Send, Briefcase } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Portfolio message from ${data.get("name")}`);
    const body = encodeURIComponent(`${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`);
    window.location.href = `mailto:venkatnarsimhareddycheruku@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader tag="06 / CONTACT" title="Get In Touch" subtitle="Have a role or a project? Let's build something." />

        <div className="mt-16 grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <ContactCard icon={Mail} label="Email" value="venkatnarsimhareddycheruku@gmail.com" href="mailto:venkatnarsimhareddycheruku@gmail.com" />
            <ContactCard icon={Linkedin} label="LinkedIn" value="cheruku-venkata-narsimha-reddy" href="https://www.linkedin.com/in/cheruku-venkata-narsimha-reddy-766225388" />
            <ContactCard icon={Github} label="GitHub" value="venkatnarsimhareddycheruku-ux" href="https://github.com/venkatnarsimhareddycheruku-ux" />
          </div>

          <form onSubmit={onSubmit} className="lg:col-span-3 glass-strong rounded-2xl p-8 space-y-5 neon-glow">
            <Field name="name" label="Your Name" placeholder="John Doe" required />
            <Field name="email" type="email" label="Email Address" placeholder="john@company.com" required />
            <Field name="message" label="Message" placeholder="Tell me about the opportunity..." textarea required />

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                type="submit"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-primary text-primary-foreground font-semibold neon-glow hover:neon-glow-strong transition-all hover:-translate-y-0.5"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
              <a
                href="mailto:venkatnarsimhareddycheruku@gmail.com?subject=Hiring Opportunity"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg glass hover:border-neon/60 transition-all hover:-translate-y-0.5 font-semibold"
              >
                <Briefcase className="w-4 h-4" />
                Hire Me
              </a>
            </div>
            {sent && <p className="text-sm text-cyan font-mono">Opening your mail client...</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactCard({ icon: Icon, label, value, href }: any) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group block glass rounded-xl p-5 hover:border-neon/60 hover:-translate-y-0.5 transition-all"
    >
      <div className="flex items-center gap-4">
        <div className="w-11 h-11 rounded-lg bg-gradient-primary/20 border border-neon/30 flex items-center justify-center group-hover:neon-glow transition-shadow">
          <Icon className="w-5 h-5 text-neon" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">{label}</div>
          <div className="text-sm truncate group-hover:text-neon transition-colors">{value}</div>
        </div>
      </div>
    </a>
  );
}

function Field({ name, label, placeholder, type = "text", textarea, required }: any) {
  const cls = "w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-neon focus:outline-none focus:ring-2 focus:ring-neon/30 focus:shadow-[0_0_20px_rgba(120,180,255,0.2)] transition-all font-mono text-sm";
  return (
    <div>
      <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">{label}</label>
      {textarea ? (
        <textarea name={name} required={required} rows={5} placeholder={placeholder} className={cls} />
      ) : (
        <input name={name} type={type} required={required} placeholder={placeholder} className={cls} />
      )}
    </div>
  );
}
