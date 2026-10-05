import { Fragment, useState, type ReactNode } from "react";
import { Mail, ArrowRight, Menu, X, GraduationCap, Check } from "lucide-react";
import { profile, type Lang } from "@/content/portfolio";
import { useLanguage } from "./language";

function GithubIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.4-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}
function LinkedinIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-border py-16 md:py-24">
      <h2 className="mb-10 font-mono text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded border border-border bg-secondary px-2 py-0.5 font-mono text-xs text-secondary-foreground">
      {children}
    </span>
  );
}

const btn =
  "inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";
const btnPrimary = `${btn} bg-foreground text-background hover:bg-foreground/85`;
const btnOutline = `${btn} border border-border bg-card text-foreground hover:bg-accent`;
const external = { target: "_blank", rel: "noreferrer" } as const;

const navIds = ["about", "experience", "projects", "skills", "contact"] as const;

function LanguageToggle() {
  const { lang, setLang } = useLanguage();
  const options: Lang[] = ["en", "pt"];
  return (
    <div
      className="flex rounded-md border border-border p-0.5 font-mono text-xs"
      role="group"
      aria-label="Language"
    >
      {options.map((o) => (
        <button
          key={o}
          type="button"
          onClick={() => setLang(o)}
          aria-pressed={lang === o}
          className={`rounded px-2 py-1 uppercase transition-colors ${
            lang === o
              ? "bg-foreground text-background"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {o}
        </button>
      ))}
    </div>
  );
}

export function Header() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-5">
        <a href="#top" className="font-semibold tracking-tight" onClick={() => setOpen(false)}>
          {profile.name}
        </a>
        <nav className="hidden gap-7 text-sm text-muted-foreground md:flex">
          {navIds.map((id) => (
            <a key={id} href={`#${id}`} className="transition-colors hover:text-foreground">
              {t.nav[id]}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3 text-muted-foreground">
          <LanguageToggle />
          <a
            href={profile.github}
            {...external}
            aria-label="GitHub"
            className="hidden hover:text-foreground sm:block"
          >
            <GithubIcon />
          </a>
          <a
            href={profile.linkedin}
            {...external}
            aria-label="LinkedIn"
            className="hidden hover:text-foreground sm:block"
          >
            <LinkedinIcon />
          </a>
          <button
            type="button"
            className="-mr-2 p-2 hover:text-foreground md:hidden"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={t.menu}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-nav" className="border-t border-border px-5 py-2 md:hidden">
          {navIds.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm text-muted-foreground hover:text-foreground"
            >
              {t.nav[id]}
            </a>
          ))}
          <div className="flex gap-5 border-t border-border py-3 text-sm text-muted-foreground">
            <a href={profile.github} {...external} className="hover:text-foreground">
              GitHub
            </a>
            <a href={profile.linkedin} {...external} className="hover:text-foreground">
              LinkedIn
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

export function Hero() {
  const { t } = useLanguage();
  return (
    <section id="top" className="py-20 md:py-32">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {/* keep each item on one line so wrapping only happens between items */}
        {t.hero.eyebrow.split(" · ").map((item, i) => (
          <Fragment key={item}>
            {i > 0 && " · "}
            <span className="whitespace-nowrap">{item}</span>
          </Fragment>
        ))}
      </p>
      <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
        {profile.name}
      </h1>
      <p className="mt-5 max-w-3xl text-xl leading-snug text-foreground/80 sm:text-2xl">
        {t.hero.title}
      </p>
      <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">{t.hero.intro}</p>
      <div className="mt-9 flex flex-wrap gap-3">
        <a href="#projects" className={btnPrimary}>
          {t.hero.ctaProjects} <ArrowRight className="h-4 w-4" />
        </a>
        <a href="#contact" className={btnOutline}>
          {t.hero.ctaContact}
        </a>
        <a href={profile.github} {...external} className={btnOutline}>
          <GithubIcon /> GitHub
        </a>
      </div>
      <p className="mt-12 flex max-w-2xl items-start gap-3 text-sm text-muted-foreground">
        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />
        {t.hero.current}
      </p>
    </section>
  );
}

export function About() {
  const { t } = useLanguage();
  return (
    <Section id="about" title={t.about.title}>
      <div className="grid gap-10 md:grid-cols-5 md:gap-12">
        <div className="space-y-5 leading-relaxed text-foreground/80 md:col-span-3">
          {t.about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <div className="md:col-span-2">
          <h3 className="mb-4 text-sm font-semibold">{t.about.focusTitle}</h3>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            {t.about.focus.map((f) => (
              <li key={f} className="flex gap-2.5">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

export function Experience() {
  const { t } = useLanguage();
  return (
    <Section id="experience" title={t.experience.title}>
      <div className="space-y-12">
        {t.experience.jobs.map((job) => (
          <article key={job.role + job.company} className="grid gap-4 md:grid-cols-4 md:gap-8">
            <div className="md:pt-0.5">
              <p className="font-mono text-xs text-muted-foreground">{job.period}</p>
              <p className="mt-1 text-sm font-medium">{job.company}</p>
            </div>
            <div className="md:col-span-3">
              <h3 className="text-lg font-semibold">{job.role}</h3>
              <p className="mt-2 leading-relaxed text-foreground/80">{job.summary}</p>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                {job.highlights.map((h) => (
                  <li key={h} className="flex gap-3">
                    <span
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground"
                      aria-hidden="true"
                    />
                    {h}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {job.tech.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function Projects() {
  const { t } = useLanguage();
  const p = t.projects.featured;
  return (
    <Section id="projects" title={t.projects.title}>
      <article className="rounded-lg border border-border border-t-2 border-t-primary bg-card p-6 shadow-sm md:p-10">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
          {t.projects.featuredLabel}
        </p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">{p.name}</h3>
        <div className="mt-6 grid gap-8 md:grid-cols-5 md:gap-10">
          <div className="md:col-span-3">
            <p className="leading-relaxed text-foreground/80">{p.description}</p>
            <ul className="mt-6 space-y-2.5 text-sm text-muted-foreground">
              {p.highlights.map((h) => (
                <li key={h} className="flex gap-2.5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6 md:col-span-2">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {p.architectureLabel}
              </p>
              <p className="rounded-md border border-border bg-secondary px-3 py-2.5 font-mono text-xs leading-relaxed text-secondary-foreground">
                {p.architecture}
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {p.tech.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-6">
          <a href={p.repositoryUrl} {...external} className={btnPrimary}>
            <GithubIcon /> {p.github}
          </a>
        </div>
      </article>
    </Section>
  );
}

export function Skills() {
  const { t } = useLanguage();
  return (
    <Section id="skills" title={t.skills.title}>
      <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {t.skills.groups.map((g) => (
          <div key={g.name}>
            <h3 className="mb-3 text-sm font-semibold">{g.name}</h3>
            <div className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <Tag key={s}>{s}</Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Education() {
  const { t } = useLanguage();
  const e = t.education;
  return (
    <Section id="education" title={e.title}>
      <div className="grid gap-6 rounded-lg border border-border bg-card p-6 md:grid-cols-2 md:gap-10">
        <div>
          <GraduationCap className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
          <h3 className="mt-4 font-semibold">{e.degree}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{e.school}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {e.studyingLabel}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {e.studying.map((s) => (
              <Tag key={s}>{s}</Tag>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export function Contact() {
  const { t } = useLanguage();
  return (
    <Section id="contact" title={t.contact.title}>
      <p className="max-w-2xl text-xl leading-relaxed sm:text-2xl">{t.contact.text}</p>
      <a
        href={`mailto:${profile.email}`}
        className="mt-6 inline-block break-all font-mono text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
      >
        {profile.email}
      </a>
      <div className="mt-8 flex flex-wrap gap-3">
        <a href={`mailto:${profile.email}`} className={btnPrimary}>
          <Mail className="h-4 w-4" /> {t.contact.email}
        </a>
        <a href={profile.linkedin} {...external} className={btnOutline}>
          <LinkedinIcon /> LinkedIn
        </a>
        <a href={profile.github} {...external} className={btnOutline}>
          <GithubIcon /> GitHub
        </a>
      </div>
    </Section>
  );
}

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-5 py-8 text-sm text-muted-foreground">
        <span>
          {t.footer.builtBy} {profile.name} · {new Date().getFullYear()}
        </span>
        <div className="flex gap-5">
          <a href={profile.github} {...external} className="hover:text-foreground">
            GitHub
          </a>
          <a href={profile.linkedin} {...external} className="hover:text-foreground">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-foreground">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
