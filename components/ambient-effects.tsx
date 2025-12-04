"use client"

import { useTimeOfDay } from "./time-responsive-provider"
import { useEffect, useState } from "react"

export function AmbientEffects() {
  const { timeOfDay } = useTimeOfDay()
  const [pulseOpacity, setPulseOpacity] = useState(0.3)

  // Gentle pulsing for night mode energy lines
  useEffect(() => {
    if (timeOfDay !== "night") return

    const interval = setInterval(() => {
      setPulseOpacity((prev) => (prev === 0.3 ? 0.6 : 0.3))
    }, 3000)

    return () => clearInterval(interval)
  }, [timeOfDay])

  if (timeOfDay !== "night") return null

  return (
    <div className="fixed inset-0 pointer-events-none z-[45] overflow-hidden">
      {/* Subtle energy flow lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {/* Vertical energy lines */}
        <line
          x1="10"
          y1="0"
          x2="10"
          y2="100"
          stroke="#3FFFD7"
          strokeWidth="0.1"
          style={{ opacity: pulseOpacity, transition: "opacity 3s ease-in-out" }}
        />
        <line
          x1="30"
          y1="0"
          x2="30"
          y2="100"
          stroke="#3FFFD7"
          strokeWidth="0.05"
          style={{ opacity: pulseOpacity * 0.5, transition: "opacity 3s ease-in-out" }}
        />
        <line
          x1="70"
          y1="0"
          x2="70"
          y2="100"
          stroke="#3FFFD7"
          strokeWidth="0.05"
          style={{ opacity: pulseOpacity * 0.5, transition: "opacity 3s ease-in-out" }}
        />
        <line
          x1="90"
          y1="0"
          x2="90"
          y2="100"
          stroke="#3FFFD7"
          strokeWidth="0.1"
          style={{ opacity: pulseOpacity, transition: "opacity 3s ease-in-out" }}
        />
      </svg>
    </div>
  )
}
