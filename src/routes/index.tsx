import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Education } from "@/components/portfolio/Education";
import { Goals } from "@/components/portfolio/Goals";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { ParticleBackground } from "@/components/portfolio/ParticleBackground";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cheruku Venkata Narsimha Reddy — ML Enthusiast & Python Developer" },
      { name: "description", content: "Portfolio of Cheruku Venkata Narsimha Reddy — Machine Learning Enthusiast, Python developer, and B.Tech AI & ML student building future-ready solutions." },
      { property: "og:title", content: "Cheruku Venkata Narsimha Reddy — ML Enthusiast" },
      { property: "og:description", content: "Building Future with Code. Python · Machine Learning · AI · Data Science." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700;900&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Cheruku Venkata Narsimha Reddy",
        jobTitle: "Machine Learning Enthusiast",
        url: "/",
        sameAs: [
          "https://www.linkedin.com/in/cheruku-venkata-narsimha-reddy-766225388",
          "https://github.com/venkatnarsimhareddycheruku-ux",
        ],
        email: "venkatnarsimhareddycheruku@gmail.com",
      }),
    }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen">
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Goals />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
