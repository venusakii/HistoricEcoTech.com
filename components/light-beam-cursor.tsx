"use client"

import { useEffect, useState } from "react"
import { useTimeOfDay } from "./time-responsive-provider"

export function LightBeamCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const { timeOfDay } = useTimeOfDay()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.body.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.body.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  // Different glow colors based on time of day
  const glowColors = {
    morning: "rgba(255, 236, 179, 0.12)",
    afternoon: "rgba(255, 255, 255, 0.08)",
    evening: "rgba(194, 162, 108, 0.15)",
    night: "rgba(63, 255, 215, 0.12)",
  }

  if (!isVisible) return null

  return (
    <div
      className="fixed pointer-events-none z-[55] transition-opacity duration-300 hidden lg:block"
      style={{
        left: position.x - 150,
        top: position.y - 150,
        width: 300,
        height: 300,
        background: `radial-gradient(circle, ${glowColors[timeOfDay]} 0%, transparent 70%)`,
        opacity: isVisible ? 1 : 0,
      }}
    />
  )
}
