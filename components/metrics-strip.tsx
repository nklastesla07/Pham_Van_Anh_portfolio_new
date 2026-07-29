"use client"

import { useEffect, useRef, useState } from "react"
import { GraduationCap, Languages, Users, Award } from "lucide-react"

type Metric = {
  icon: typeof GraduationCap
  value: number
  suffix: string
  decimals?: number
  label: string
  sub: string
}

const METRICS: Metric[] = [
  { icon: GraduationCap, value: 3.72, suffix: " / 4.0", decimals: 2, label: "GPA", sub: "FTU – Year 1" },
  { icon: Languages, value: 7.0, suffix: " IELTS", decimals: 1, label: "English Level", sub: "Reading 7.5 • Speaking 6.5" },
  { icon: Users, value: 3, suffix: "+ subjects", label: "Tutoring Scope", sub: "Math • Physics • English" },
  { icon: Award, value: 10, suffix: "+ awards", label: "Competition Honors", sub: "City & provincial achievements" },
]

export function MetricsStrip() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-8 sm:px-8">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {METRICS.map((metric) => (
          <MetricCard key={metric.label} metric={metric} />
        ))}
      </div>
    </section>
  )
}

function MetricCard({ metric }: { metric: Metric }) {
  const ref = useRef<HTMLDivElement>(null)
  const [display, setDisplay] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true)
      },
      { threshold: 0.4 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    const duration = 1200
    const start = performance.now()
    let frame: number
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(metric.value * eased)
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [started, metric.value])

  const Icon = metric.icon

  return (
    <div
      ref={ref}
      className="group flex flex-col gap-2 rounded-xl border border-primary/25 glass p-5 box-glow transition-all duration-300 hover:-translate-y-1 hover:box-glow-strong"
    >
      <Icon className="h-5 w-5 text-primary text-glow-soft" />
      <div className="font-mono text-2xl font-bold tabular-nums text-glow sm:text-3xl">
        {display.toFixed(metric.decimals ?? 0)}
        <span className="text-base text-primary/80">{metric.suffix}</span>
      </div>
      <div className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground">{metric.label}</div>
      <div className="text-xs leading-relaxed text-muted-foreground">{metric.sub}</div>
    </div>
  )
}
