"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"

export function TimelineSection() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const [soundEnabled, setSoundEnabled] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = (clientX: number) => {
    if (!containerRef.current || !isDragging) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    const percentage = (x / rect.width) * 100
    setSliderPosition(percentage)
  }

  const handleMouseMove = (e: React.MouseEvent) => handleMove(e.clientX)
  const handleTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX)

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false)
    window.addEventListener("mouseup", handleMouseUp)
    window.addEventListener("touchend", handleMouseUp)
    return () => {
      window.removeEventListener("mouseup", handleMouseUp)
      window.removeEventListener("touchend", handleMouseUp)
    }
  }, [])

  return (
    <section className="py-24 lg:py-32 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4">
            Before & After: <span className="heritage-text">Interactive Timeline</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Drag the slider to reveal the transformation from heritage to smart technology.
          </p>
        </div>

        {/* Interactive slider */}
        <div
          ref={containerRef}
          className="relative max-w-4xl mx-auto aspect-[16/10] rounded-2xl overflow-hidden cursor-ew-resize select-none shadow-2xl"
          onMouseDown={() => setIsDragging(true)}
          onMouseMove={handleMouseMove}
          onTouchStart={() => setIsDragging(true)}
          onTouchMove={handleTouchMove}
        >
          {/* Before image (sepia/past) */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/heritage-mansion-before-renovation-sepia.jpg')",
              filter: "sepia(0.5)",
            }}
          />

          {/* After image (illuminated/smart tech) */}
          

          {/* Slider handle */}

          {/* Labels */}
          <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-slate/80 backdrop-blur-sm rounded-full">
            <span className="text-xs font-medium text-ivory">Heritage</span>
          </div>
          <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-teal-glow/80 backdrop-blur-sm rounded-full">
            <span className="text-xs font-medium text-slate">Smart Tech</span>
          </div>

          {/* Sound toggle - ambient effect */}
        </div>

        {/* Ambient description */}
        <p className="text-center text-sm text-muted-foreground mt-6 italic">
          {sliderPosition < 50
            ? "Hear the ticking of antique clocks..."
            : "...transitioning to the gentle hum of smart systems."}
        </p>
      </div>
    </section>
  )
}
