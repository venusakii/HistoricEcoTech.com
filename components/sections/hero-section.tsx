"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building2 } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener("resize", resize)

    // Animated connecting line
    let progress = 0
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const clamp = (val: number) => Math.max(0, Math.min(1, val))

      // Draw connecting light line
      const gradient = ctx.createLinearGradient(0, canvas.height / 2, canvas.width, canvas.height / 2)
      gradient.addColorStop(clamp(progress - 0.1), "rgba(63, 255, 215, 0)")
      gradient.addColorStop(clamp(progress), "rgba(63, 255, 215, 0.8)")
      gradient.addColorStop(clamp(progress + 0.1), "rgba(63, 255, 215, 0)")

      ctx.strokeStyle = gradient
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.moveTo(0, canvas.height / 2)
      ctx.lineTo(canvas.width, canvas.height / 2)
      ctx.stroke()

      progress += 0.003
      if (progress > 1.1) progress = -0.1

      requestAnimationFrame(animate)
    }
    animate()

    return () => window.removeEventListener("resize", resize)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background - Split animation effect */}
      <div className="absolute inset-0">
        {/* Left - Vintage stone facade */}
        <div
          className="absolute inset-0 w-1/2 bg-cover bg-center"
          style={{
            backgroundImage: "url('/vintage-stone-mansion-facade-heritage-architecture.jpg')",
            filter: "sepia(0.3)",
          }}
        />
        {/* Right - Tech overlay */}
        <div
          className="absolute inset-0 left-1/2 w-1/2 bg-cover bg-center"
          style={{
            backgroundImage: "url('/solar-panel-circuits-blueprint-technology-grid-tea.jpg')",
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Connecting line canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-slate font-medium tracking-widest uppercase text-sm mb-6 animate-fade-in">
          Connecting Centuries
        </p>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-8 text-slate">
          Where History Learns to Sustain Itself
        </h1>

        <p className="text-lg sm:text-xl text-slate/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Sustainable energy and water management for historic homes. We modernize heritage estates without erasing
          their soul.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-medium group"
            asChild
          >
            <Link href="/solutions">
              Explore Innovations
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-brass text-brass hover:bg-brass hover:text-slate px-8 py-6 text-base font-medium group bg-transparent"
            asChild
          >
            <Link href="/projects">
              <Building2 className="mr-2 w-5 h-5" />
              View Case Studies
            </Link>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-brass/50 rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-brass rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
