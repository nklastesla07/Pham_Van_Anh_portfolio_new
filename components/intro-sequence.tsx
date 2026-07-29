"use client"

import { useEffect, useRef, useState } from "react"

type Phase = "idle" | "playing" | "flash" | "done"

type IntroSequenceProps = {
  onComplete?: () => void
}

export function IntroSequence({ onComplete }: IntroSequenceProps) {
  const [phase, setPhase] = useState<Phase>("idle")
  const videoRef = useRef<HTMLVideoElement>(null)

  // Lock scroll while the intro is on screen
  useEffect(() => {
    if (phase === "done") return
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = prev
    }
  }, [phase])

  const startFlash = () => {
    setPhase((p) => (p === "playing" || p === "idle" ? "flash" : p))
  }

  const startPlaying = async () => {
    setPhase((p) => (p === "idle" ? "playing" : p))

    const video = videoRef.current
    if (!video) return

      try {
      // Unmute and set a moderate volume on user gesture
      try {
        video.muted = false
      } catch {}
      try {
        video.volume = 0.5
      } catch {}

      await video.play()
    } catch {
      // ignore play failures
    }
  }

  useEffect(() => {
    if (phase !== "flash") return
    const t = setTimeout(() => {
      setPhase("done")
      onComplete?.()
    }, 900)
    return () => clearTimeout(t)
  }, [onComplete, phase])

  // Safety net: if the video never fires onEnded (autoplay blocked, decode
  // error), reveal the portfolio anyway after a max duration.
  useEffect(() => {
    if (phase !== "playing") return
    const t = setTimeout(startFlash, 12000)
    return () => clearTimeout(t)
  }, [phase])

  useEffect(() => {
    if (phase !== "playing") return

    return () => {
      const video = videoRef.current
      if (video) {
        video.pause()
        video.currentTime = 0
      }
    }
  }, [phase])

  if (phase === "done") return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
      role="presentation"
      aria-hidden
    >
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        playsInline
        onEnded={startFlash}
      >
        <source src="/videos/intro.mp4" type="video/mp4" />
      </video>

      {/* Click-to-start overlay shown before the intro begins */}
      {phase === "idle" && (
        <button
          onClick={startPlaying}
          className="absolute inset-0 z-20 flex items-center justify-center bg-background/80 font-mono text-sm uppercase tracking-[0.25em] text-primary transition-opacity hover:bg-background/70"
          aria-label="Click to start intro"
        >
          <span className="rounded-md border border-primary/40 bg-background/40 px-6 py-3 text-lg">Click to start</span>
        </button>
      )}

      {/* Skip control */}
      {phase === "playing" && (
        <button
          onClick={() => {
            startFlash()
          }}
          className="absolute bottom-6 right-6 rounded-full border border-primary/40 bg-background/40 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.25em] text-primary backdrop-blur-sm transition-colors hover:text-primary-foreground hover:bg-primary/80"
        >
          Skip Intro
        </button>
      )}

      {/* White light flash that opens into the portfolio */}
      <div
        className={
          phase === "flash"
            ? "pointer-events-none absolute inset-0 animate-[intro-flash_0.9s_ease-out_forwards] bg-white"
            : "pointer-events-none absolute inset-0 opacity-0 bg-white"
        }
      />
    </div>
  )
}
