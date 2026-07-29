"use client"

import { useEffect, useState } from "react"

type Star = {
  top: string
  left: string
  size: number
  delay: string
  duration: string
}

export function StarField() {
  const [stars, setStars] = useState<Star[]>([])

  useEffect(() => {
    const seeded = (i: number) => {
      const x = Math.sin(i * 12.9898) * 43758.5453
      return x - Math.floor(x)
    }
    setStars(
      Array.from({ length: 90 }, (_, i) => ({
        top: `${seeded(i) * 100}%`,
        left: `${seeded(i + 100) * 100}%`,
        size: seeded(i + 200) * 2 + 1,
        delay: `${seeded(i + 300) * 5}s`,
        duration: `${seeded(i + 400) * 4 + 2}s`,
      })),
    )
  }, [])

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {stars.map((star, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-foreground"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animation: `twinkle ${star.duration} ease-in-out ${star.delay} infinite`,
          }}
        />
      ))}
    </div>
  )
}
