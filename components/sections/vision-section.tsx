"use client"

import { useEffect, useRef, useState } from "react"

export function VisionSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const progress = Math.max(0, Math.min(1, 1 - rect.top / window.innerHeight))
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const eras = [
    { name: "Georgian", year: "1714" },
    { name: "Victorian", year: "1837" },
    { name: "Art Deco", year: "1920" },
    { name: "Smart Home", year: "2025" },
  ]

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden bg-muted">
      {/* Parallax layers */}
      <div className="absolute inset-0">
        {/* Architecture layers */}
        {eras.map((era, index) => (
          <div
            key={era.name}
            className="absolute inset-0 transition-opacity duration-700"
            style={{
              opacity: scrollProgress > index * 0.25 && scrollProgress <= (index + 1) * 0.25 ? 1 : 0.1,
              transform: `translateY(${(1 - scrollProgress) * (50 - index * 10)}px)`,
            }}
          >
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url('/--era-name--architecture-building-facade-elegant.jpg')`,
                filter: index < 3 ? "sepia(0.3)" : "none",
              }}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-muted via-muted/80 to-muted" />
      </div>

      {/* Growing vines of light */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          d="M10,100 Q20,80 15,60 T25,30 T20,10"
          fill="none"
          stroke="url(#vineGradient)"
          strokeWidth="0.3"
          strokeDasharray="100"
          strokeDashoffset={100 - scrollProgress * 100}
          className="transition-all duration-500"
        />
        <path
          d="M90,100 Q80,75 85,50 T75,25 T80,5"
          fill="none"
          stroke="url(#vineGradient)"
          strokeWidth="0.3"
          strokeDasharray="100"
          strokeDashoffset={100 - scrollProgress * 100}
          className="transition-all duration-500"
        />
        <defs>
          <linearGradient id="vineGradient" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#C2A26C" />
            <stop offset="100%" stopColor="#3FFFD7" />
          </linearGradient>
        </defs>
      </svg>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6">
          The Vision: <span className="heritage-text">Timeless Sustainability</span>
        </h2>

        {/* Era indicators */}
        <div className="flex justify-center gap-4 sm:gap-8 mb-12">
          {eras.map((era, index) => (
            <div
              key={era.name}
              className={`transition-all duration-500 ${
                scrollProgress > index * 0.25 ? "opacity-100 scale-100" : "opacity-40 scale-90"
              }`}
            >
              <p className="text-xs text-muted-foreground">{era.year}</p>
              <p className="text-sm font-medium text-brass">{era.name}</p>
            </div>
          ))}
        </div>

        <p
          className="font-serif text-xl sm:text-2xl lg:text-3xl text-foreground/90 leading-relaxed tracking-wide"
          style={{
            opacity: scrollProgress > 0.3 ? 1 : 0,
            transform: `translateY(${scrollProgress > 0.3 ? 0 : 20}px)`,
            transition: "all 0.7s ease-out",
          }}
        >
          We modernize heritage estates <span className="text-verdigris">without erasing their soul</span>.
        </p>
      </div>
    </section>
  )
}
