import { createFileRoute } from "@tanstack/react-router";
import {
  Header,
  Hero,
  About,
  Experience,
  Projects,
  Skills,
  Education,
  Contact,
  Footer,
} from "@/components/portfolio/Portfolio";
import { LanguageProvider } from "@/components/portfolio/language";
import { MotionEffects } from "@/components/portfolio/effects";

const title = "Augusto D' Amices — Python, Machine Learning & AI Engineering";
const description =
  "Portfolio of Augusto D' Amices: Python, Machine Learning, AI engineering, Oracle SQL / PL/SQL, REST APIs and system integrations.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <LanguageProvider>
      <MotionEffects />
      <div className="min-h-screen overflow-x-clip">
        <Header />
        <main className="mx-auto max-w-5xl px-5">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
