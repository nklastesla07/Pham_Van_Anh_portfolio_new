"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight, Radio, UserRound } from "lucide-react"

const HIGHLIGHTS = ["IELTS Tutoring", "Data Literacy", "Power BI", "Python", "Gamified Learning"]

export function HeroSection() {
  return (
    <section className="relative mx-auto flex min-h-[92vh] w-full max-w-6xl flex-col justify-center px-5 py-24 sm:px-8">
      <div className="grid items-center gap-10 md:grid-cols-[1fr_auto] md:gap-14">
        <div className="order-2 animate-reveal md:order-1">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 glass px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.25em] text-primary text-glow-soft">
            <Radio className="h-3.5 w-3.5 animate-flicker" />
            Flight Log // Van Anh Pham
          </span>

          <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
            <span className="text-glow animate-flicker">Personal Portfolio</span>{" "}
            <span className="text-foreground text-glow-soft">Phạm Vân Anh</span>
          </h1>

          <p className="mt-5 max-w-2xl text-pretty font-mono text-sm leading-relaxed text-primary/90 sm:text-base">
            FTU International Economics student | IELTS Tutor | aspiring Data Analyst | Education &amp; communication strategist
          </p>

          <p className="mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
            I combine analytical thinking, tutoring experience, and community leadership to build a profile that bridges education, communication, and data. This portfolio highlights the skills and achievements that matter most in my CV and career direction.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://moral-jade-emrj0zvi.edgeone.dev/?fbclid=IwY2xjawTWQMRwZG9mBWV4dG4DYWVtAjEwAGJyaWQRMWdjQmgzY2d0M1ppbld3clNzcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEeHMF-KdPZ1C7G8x18e8lyC8BQ48OLepcD_PoG47xnCf3DZSk-2VGWfWqrlVU_aem_oVklx5YA9WBe4lrgG5QJvA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/20"
            >
              Open full portfolio CV
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#telemetry"
              className="rounded-full border border-primary/20 px-4 py-2 text-sm font-medium text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
            >
              See my journey
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {HIGHLIGHTS.map((item) => (
              <span key={item} className="rounded-full border border-primary/20 bg-background/40 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-primary/80">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="order-1 flex justify-center md:order-2">
          <div className="animate-float">
            <div className="relative h-52 w-52 rounded-2xl border border-primary/40 glass p-2 box-glow-strong sm:h-64 sm:w-64">
              <div className="absolute -inset-2 rounded-2xl border border-primary/20" aria-hidden />
              <div className="absolute -inset-5 rounded-3xl border border-primary/10" aria-hidden />
              <ProfilePhoto />
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-primary/40 glass px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-primary text-glow-soft">
                Data Analyst in the making
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProfilePhoto() {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-primary/40 text-center">
        <UserRound className="h-12 w-12 text-primary/70" />
        <span className="px-4 font-mono text-[10px] uppercase leading-relaxed tracking-wider text-muted-foreground">
          Add your photo at
          <br />
          /public/images/profile.jpg
        </span>
      </div>
    )
  }

  return (
    <Image
      src="/images/profile.jpg"
      alt="Van Anh Pham"
      width={256}
      height={256}
      className="h-full w-full rounded-xl object-cover"
      onError={() => setFailed(true)}
      priority
    />
  )
}
