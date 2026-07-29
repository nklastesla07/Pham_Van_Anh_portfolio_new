"use client"

import { useState } from "react"
import { ArrowRight, BookOpen, Briefcase, Calendar, Cpu, GraduationCap, Orbit, Rocket, Target, Trophy } from "lucide-react"

const TABS = [
  { id: "journey", label: "Journey", icon: Rocket },
  { id: "skills", label: "Skills", icon: Orbit },
  { id: "achievements", label: "Achievements", icon: Trophy },
  { id: "academic", label: "Academic", icon: GraduationCap },
] as const

type TabId = (typeof TABS)[number]["id"]

const SKILL_GROUPS = [
  {
    icon: Cpu,
    title: "Data & Analysis",
    items: ["Excel for cleaning, summarizing, and reporting", "Power BI for dashboard design and storytelling", "Python for basic analysis and structured workflows"],
  },
  {
    icon: BookOpen,
    title: "Teaching & Communication",
    items: ["IELTS and English tutoring with clear learning roadmaps", "Gamified methods that keep learners engaged", "One-to-one coaching with measurable progress"],
  },
  {
    icon: Target,
    title: "Leadership & Impact",
    items: ["Community coordination and event execution", "Strategic communication and outreach", "Problem solving with empathy and accountability"],
  },
]

const JOURNEY_STEPS = [
  {
    title: "Student with a strong academic base",
    period: "2024 – Present",
    detail: "Studying International Economics while building a profile around analytical thinking, communication, and education.",
  },
  {
    title: "IELTS & English tutor",
    period: "Aug 2025 – Present",
    detail: "Supporting learners on 3.5–5.5+ IELTS routes with structured plans, practical feedback, and engaging study routines.",
  },
  {
    title: "Private tutoring and mentoring",
    period: "Dec 2025 – Present",
    detail: "Guiding exam candidates in Math, Physics, and English with personalized and consistent progress tracking.",
  },
  {
    title: "Community and communication leadership",
    period: "Nov 2025 – Jul 2026",
    detail: "Worked on communication and outreach for a large student network, strengthening teamwork and public-facing skills.",
  },
]

const ACHIEVEMENT_GROUPS = [
  {
    title: "Professional & Community",
    items: ["Built tutoring experience around student-centered learning", "Developed communication routines for outreach and engagement", "Strengthened collaboration, planning, and responsibility through community work"],
  },
  {
    title: "Competitive & Creative",
    items: ["Earned recognition in city-level academic and science competitions", "Developed a strong foundation in logic, presentation, and problem solving", "Showed consistency in learning and performance across multiple domains"],
  },
]

const ACADEMIC_GROUPS = [
  {
    title: "Academic Strength",
    items: ["GPA 3.72/4.0 at FTU in Year 1", "IELTS 7.0 with strong reading and listening foundations", "High performance in English and science-related subjects"],
  },
  {
    title: "Awards & Recognition",
    items: ["1st Prize — City Informatics Olympiad (Free Pascal)", "2nd Prize — City Science & Engineering Fair for an IoT attendance device", "3rd Prize — City English Olympiad"],
  },
]

export function DashboardSection() {
  const [active, setActive] = useState<TabId>("journey")

  return (
    <section id="telemetry" className="mx-auto w-full max-w-6xl scroll-mt-8 px-5 py-16 sm:px-8">
      <div className="mb-8 flex flex-col items-center text-center">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary text-glow-soft">
          // Profile Overview
        </span>
        <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-glow sm:text-4xl">
          Journey, Skills, and Achievements
        </h2>
      </div>

      <div className="mb-8 rounded-2xl border border-primary/25 glass p-6 box-glow animate-reveal">
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          My profile is shaped by three strong pillars: education, communication, and analytical thinking. I am building toward a future where I can combine tutoring expertise, data literacy, and practical problem solving in a meaningful way.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {[
            "Education-focused",
            "Data-minded",
            "Communication-driven",
            "Growth-oriented",
          ].map((item) => (
            <span key={item} className="rounded-full border border-primary/20 bg-background/40 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-primary/80">
              {item}
            </span>
          ))}
        </div>
        <a
          href="https://moral-jade-emrj0zvi.edgeone.dev/?fbclid=IwY2xjawTWQMRwZG9mBWV4dG4DYWVtAjEwAGJyaWQRMWdjQmgzY2d0M1ppbld3clNzcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEeHMF-KdPZ1C7G8x18e8lyC8BQ48OLepcD_PoG47xnCf3DZSk-2VGWfWqrlVU_aem_oVklx5YA9WBe4lrgG5QJvA"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
        >
          Open the full Portfolio CV
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        {TABS.map((tab) => {
          const Icon = tab.icon
          const isActive = active === tab.id
          return (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              aria-pressed={isActive}
              className={`inline-flex items-center gap-2 rounded-lg border px-4 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                isActive
                  ? "border-primary/60 bg-primary/15 text-primary text-glow box-glow-strong"
                  : "border-primary/25 glass text-muted-foreground glow-interactive hover:text-primary"
              }`}
            >
              <Icon className="h-4 w-4" />
              {tab.label}
            </button>
          )
        })}
      </div>

      <div className="mt-8">
        {active === "journey" && (
          <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative space-y-4 before:absolute before:left-[9px] before:top-2 before:h-full before:w-px before:bg-primary/25 sm:before:left-[11px]">
              {JOURNEY_STEPS.map((step) => (
                <div key={step.title} className="relative pl-8 sm:pl-10">
                  <span className="absolute left-0 top-2 grid h-5 w-5 place-items-center rounded-full border border-primary/50 bg-background text-primary shadow-[0_0_12px_var(--amber-glow)] sm:h-6 sm:w-6">
                    <Briefcase className="h-3 w-3" />
                  </span>
                  <div className="rounded-xl border border-primary/25 glass p-5 box-glow transition-all duration-300 hover:box-glow-strong">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="font-semibold text-foreground glow-interactive">{step.title}</h3>
                      <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-primary/90">
                        <Calendar className="h-3.5 w-3.5" />
                        {step.period}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-primary/25 glass p-6 box-glow">
              <h3 className="font-mono text-sm font-semibold uppercase tracking-wider text-primary">Positioning</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                My path is a blend of academic strength, learner support, and communication capability. This makes me especially suited for roles that need both empathy and structure.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>• Strong learner with a clear growth mindset</li>
                <li>• Educational experience with measurable learner impact</li>
                <li>• Emerging data profile with practical analytical tools</li>
              </ul>
            </div>
          </div>
        )}

        {active === "skills" && (
          <div className="grid gap-5 md:grid-cols-3">
            {SKILL_GROUPS.map((group) => {
              const Icon = group.icon
              return (
                <div
                  key={group.title}
                  className="rounded-xl border border-primary/25 glass p-6 box-glow transition-all duration-300 hover:-translate-y-1 hover:box-glow-strong"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-lg border border-primary/30 bg-primary/10 text-primary text-glow-soft">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-mono text-sm font-semibold uppercase tracking-wider text-foreground">
                      {group.title}
                    </h3>
                  </div>
                  <ul className="space-y-2.5">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary text-glow-soft shadow-[0_0_8px_var(--amber-glow)]" />
                        <span className="glow-interactive">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        )}

        {active === "achievements" && (
          <div className="grid gap-5 md:grid-cols-2">
            {ACHIEVEMENT_GROUPS.map((group) => (
              <div
                key={group.title}
                className="rounded-xl border border-primary/25 glass p-6 box-glow transition-all duration-300 hover:-translate-y-1 hover:box-glow-strong"
              >
                <div className="mb-4 flex items-center gap-3">
                  <Trophy className="h-5 w-5 text-primary text-glow-soft" />
                  <h3 className="font-mono text-sm font-semibold uppercase tracking-wider text-glow">{group.title}</h3>
                </div>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary shadow-[0_0_8px_var(--amber-glow)]" />
                      <span className="glow-interactive">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {active === "academic" && (
          <div className="grid gap-5 md:grid-cols-2">
            {ACADEMIC_GROUPS.map((group) => (
              <div
                key={group.title}
                className="rounded-xl border border-primary/25 glass p-6 box-glow transition-all duration-300 hover:-translate-y-1 hover:box-glow-strong"
              >
                <div className="mb-4 flex items-center gap-3">
                  <BookOpen className="h-5 w-5 text-primary text-glow-soft" />
                  <h3 className="font-mono text-sm font-semibold uppercase tracking-wider text-glow">{group.title}</h3>
                </div>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary shadow-[0_0_8px_var(--amber-glow)]" />
                      <span className="glow-interactive">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
