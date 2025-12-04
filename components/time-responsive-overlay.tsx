"use client"

import { useTimeOfDay } from "./time-responsive-provider"

export function TimeResponsiveOverlay() {
  const { timeOfDay } = useTimeOfDay()

  const overlayStyles = {
    morning: {
      background: "radial-gradient(ellipse at top, rgba(255, 236, 179, 0.15) 0%, transparent 60%)",
      filter: "brightness(1.05)",
    },
    afternoon: {
      background: "radial-gradient(ellipse at top right, rgba(255, 255, 255, 0.08) 0%, transparent 50%)",
      filter: "brightness(1)",
    },
    evening: {
      background:
        "radial-gradient(ellipse at bottom, rgba(63, 255, 215, 0.08) 0%, rgba(194, 162, 108, 0.08) 50%, transparent 100%)",
      filter: "brightness(0.98)",
    },
    night: {
      background: "radial-gradient(ellipse at top, rgba(30, 31, 29, 0.3) 0%, transparent 60%)",
      filter: "brightness(0.92)",
    },
  }

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[60] transition-all duration-[3000ms]"
      style={overlayStyles[timeOfDay]}
    />
  )
}
