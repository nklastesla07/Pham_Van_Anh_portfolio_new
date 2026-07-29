"use client"

import { useEffect, useRef, useState } from "react"
import { IntroSequence } from "@/components/intro-sequence"
import { StarField } from "@/components/star-field"
import { HeroSection } from "@/components/hero-section"
import { MetricsStrip } from "@/components/metrics-strip"
import { DashboardSection } from "@/components/dashboard-section"
import { ContactSection } from "@/components/contact-section"

export default function Page() {
  const [introFinished, setIntroFinished] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (!introFinished) return

    const audio = audioRef.current
    if (!audio) return

    const playAudio = async () => {
      audio.loop = true
      audio.volume = 0.5
      audio.muted = false

      try {
        await audio.play()
      } catch {
        // Browsers may block autoplay until the first user interaction.
      }
    }

    void playAudio()
  }, [introFinished])

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* Intro video → light flash → reveals the portfolio */}
      <IntroSequence onComplete={() => setIntroFinished(true)} />

      {introFinished && <audio ref={audioRef} preload="auto" src="/videos/nen.mp4" />}

      {/* Interstellar video background — autoplay + loop */}
      <video
        aria-hidden
        className="fixed inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster="/images/gargantua-bg.png"
      >
        <source src="/videos/interstellar-bg.mp4" type="video/mp4" />
      </video>
      {/* Gargantua fallback layer behind video */}
      <div
        aria-hidden
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/gargantua-bg.png')" }}
      />
      {/* Lighter overlay + subtle vignette — keeps the Interstellar glow visible */}
      <div
        aria-hidden
        className="fixed inset-0 bg-background/35"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 65% 35%, transparent 0%, oklch(0.14 0.03 265 / 30%) 60%, oklch(0.11 0.02 265 / 72%) 100%)",
        }}
      />
      <StarField />

      <div className="relative z-10">
        <HeroSection />
        <MetricsStrip />
        <DashboardSection />
        <ContactSection />
      </div>
    </main>
  )
}
