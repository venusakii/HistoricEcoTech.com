"use client"

import { useState } from "react"
import { Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className="relative py-24 lg:py-32 bg-slate overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="blueprint" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#4D908E" strokeWidth="0.5" />
          </pattern>
          <rect width="100" height="100" fill="url(#blueprint)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-ivory mb-4">
            Harmony of Heritage + Innovation
          </h2>
          <p className="text-ivory/70 max-w-2xl mx-auto">
            Watch master artisans restore beauty while engineers install intelligence.
          </p>
        </div>

        {/* Video container */}
        <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate border border-ivory/10 shadow-2xl">
          {/* Video thumbnail/placeholder */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/heritage-mansion-restoration-artisan-technology.jpg')",
            }}
          />

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate/80 via-transparent to-slate/20" />

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            
          </div>

          {/* Caption overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <p className="font-serif text-2xl sm:text-3xl text-ivory text-center italic">
              Historic beauty. <span className="text-teal-glow">21st-century intelligence.</span>
            </p>
          </div>

          {/* Decorative corner frames */}
          <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-brass/50" />
          <div className="absolute top-4 right-4 w-12 h-12 border-r-2 border-t-2 border-brass/50" />
          <div className="absolute bottom-4 left-4 w-12 h-12 border-l-2 border-b-2 border-brass/50" />
          <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-brass/50" />
        </div>
      </div>
    </section>
  )
}
