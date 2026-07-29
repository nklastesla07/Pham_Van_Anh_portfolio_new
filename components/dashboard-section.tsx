"use client"

import { useState } from "react"
import { Orbit, Rocket, Trophy, Cpu, BookOpen, Target, Briefcase, Calendar } from "lucide-react"

const TABS = [
  { id: "skills", label: "Core Skills", icon: Orbit },
  { id: "logs", label: "Experience", icon: Rocket },
  { id: "milestones", label: "Achievements", icon: Trophy },
] as const

type TabId = (typeof TABS)[number]["id"]

const SKILL_GROUPS = [
  {
    icon: Cpu,
    title: "Data Analytics",
    items: ["Excel for data cleaning, summarizing, and reporting", "Power BI for dashboards and visual storytelling", "Python for basic analysis and data workflows"],
  },
  {
    icon: BookOpen,
    title: "Teaching & Communication",
    items: ["IELTS and English tutoring with clear, personalized roadmaps", "Gamified learning methods to keep students engaged", "1-on-1 and group coaching with measurable progress"],
  },
  {
    icon: Target,
    title: "Leadership & Impact",
    items: ["Community project coordination and event execution", "Strategic communication for outreach and partnerships", "Problem solving with empathy and high accountability"],
  },
]

const FLIGHT_LOGS = [
  {
    role: "English & IELTS Tutor / TA",
    period: "Aug 2025 – Present",
    detail: "Supporting learners on 3.5–5.5+ IELTS routes with structured plans, practical feedback, and gamified engagement.",
  },
  {
    role: "Private Tutor – Math, Physics, English",
    period: "Dec 2025 – Present",
    detail: "Guiding 9th-grade exam candidates through personalized study routines for admission preparation.",
  },
  {
    role: "Freelance English Tutor",
    period: "2024 – Present",
    detail: "Working directly with multiple students on speaking, vocabulary, and IELTS progress tracking.",
  },
  {
    role: "MarCom Associate @ BNA Vietnam",
    period: "Nov 2025 – Jul 2026",
    detail: "Collaborating on communication and outreach for a nationwide network of 180+ clubs.",
  },
]

const MILESTONES = [
  {
    title: "Academic Excellence",
    items: ["GPA 3.72/4.0 at FTU in Year 1", "IELTS 7.0 with strong reading and listening foundation", "High academic performance in English and science subjects"],
  },
  {
    title: "STEM & Technology",
    items: ["1st Prize — City Informatics Olympiad (Free Pascal)", "2nd Prize — City Science & Engineering Fair for an IoT attendance device", "Built a strong logical thinking foundation through STEM competitions"],
  },
  {
    title: "Language & Leadership",
    items: ["3rd Prize — City English Olympiad", "2nd Prize — City Literature Competition", "Experience leading student community initiatives and communication work"],
  },
]

export function DashboardSection() {
  const [active, setActive] = useState<TabId>("skills")

  return (
    <section id="telemetry" className="mx-auto w-full max-w-6xl scroll-mt-8 px-5 py-16 sm:px-8">
      <div className="mb-8 flex flex-col items-center text-center">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary text-glow-soft">
          // Onboard Telemetry
        </span>
        <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-glow sm:text-4xl">
          My Journey, Skills, and Impact
        </h2>
      </div>

      <div className="mb-8 rounded-2xl border border-primary/25 glass p-6 box-glow animate-reveal">
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          I am shaping my path toward a career in data analysis by combining strong academic foundations, tutoring experience, and community leadership. My work is guided by curiosity, empathy, and a desire to turn information into meaningful progress.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {[
            "Data-driven mindset",
            "Education-focused communication",
            "Reliable teamwork",
            "Growth-oriented learner",
          ].map((item) => (
            <span key={item} className="rounded-full border border-primary/20 bg-background/40 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-primary/80">
              {item}
            </span>
          ))}
        </div>
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

      {/* Panels */}
      <div className="mt-8">
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

        {active === "logs" && (
          <div className="relative space-y-4 before:absolute before:left-[9px] before:top-2 before:h-full before:w-px before:bg-primary/25 sm:before:left-[11px]">
            {FLIGHT_LOGS.map((log) => (
              <div key={log.role} className="relative pl-8 sm:pl-10">
                <span className="absolute left-0 top-2 grid h-5 w-5 place-items-center rounded-full border border-primary/50 bg-background text-primary shadow-[0_0_12px_var(--amber-glow)] sm:h-6 sm:w-6">
                  <Briefcase className="h-3 w-3" />
                </span>
                <div className="rounded-xl border border-primary/25 glass p-5 box-glow transition-all duration-300 hover:box-glow-strong">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="font-semibold text-foreground glow-interactive">{log.role}</h3>
                    <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-primary/90">
                      <Calendar className="h-3.5 w-3.5" />
                      {log.period}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{log.detail}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {active === "milestones" && (
          <div className="grid gap-5 md:grid-cols-3">
            {MILESTONES.map((group) => (
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
      </div>
    </section>
  )
}
