"use client"

import { useEffect, useRef, useState } from "react"
import { Droplets, Gauge, LocateFixed } from "lucide-react"

const features = [
  {
    icon: <Droplets className="w-6 h-6" />,
    title: "Rain Harvesting in Slate Roofs",
    description:
      "Traditional slate roofing integrated with hidden collection systems for sustainable water management.",
  },
  {
    icon: <Gauge className="w-6 h-6" />,
    title: "Smart Pressure Monitoring",
    description:
      "AI-powered pressure sensors that detect irregularities and optimize water flow throughout the estate.",
  },
  {
    icon: <LocateFixed className="w-6 h-6" />,
    title: "Leak Detection in Masonry",
    description: "Non-invasive sensors embedded within historic stonework to identify and prevent water damage.",
  },
]

export function WaterSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [waveProgress, setWaveProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const progress = Math.max(0, Math.min(1, 1 - rect.top / window.innerHeight))
      setWaveProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 bg-slate overflow-hidden">
      {/* Animated wave transition */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="absolute top-0 left-0 w-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{ height: "120px" }}
        >
          <path
            d={`M0,${60 - waveProgress * 30} C300,${100 - waveProgress * 50} 600,${20 + waveProgress * 40} 900,${60 - waveProgress * 20} L900,0 L0,0 Z`}
            fill="#F5F3EE"
            className="transition-all duration-300"
          />
          <path
            d={`M0,${70 - waveProgress * 20} C400,${110 - waveProgress * 40} 700,${30 + waveProgress * 30} 1200,${50 - waveProgress * 10} L1200,0 L0,0 Z`}
            fill="#4D908E"
            fillOpacity="0.1"
            className="transition-all duration-500"
          />
        </svg>

        {/* Flowing data streams */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 opacity-20"
          style={{
            background: `linear-gradient(180deg, transparent 0%, rgba(63, 255, 215, ${waveProgress * 0.3}) 100%)`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-verdigris/20 rounded-full mb-6">
            <Droplets className="w-4 h-4 text-teal-glow" />
            <span className="text-sm font-medium text-teal-glow">Water Intelligence</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-ivory mb-4">
            From Marble Fountains to <span className="text-teal-glow glow-accent">Data Streams</span>
          </h2>
          <p className="text-ivory/70 max-w-2xl mx-auto">
            Smart water management systems that preserve historic beauty while preventing damage and waste.
          </p>
        </div>

        {/* Fountain to digital transition illustration */}
        <div className="relative max-w-3xl mx-auto mb-16">
          <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-slate border border-ivory/10">
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-700"
              style={{
                backgroundImage: "url('/marble-fountain-transforming-into-digital-water-da.jpg')",
                clipPath: `inset(0 ${100 - waveProgress * 100}% 0 0)`,
              }}
            />
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/classic-marble-stone-fountain-heritage-garden-sepi.jpg')",
                clipPath: `inset(0 0 0 ${waveProgress * 100}%)`,
              }}
            />
          </div>
        </div>

        {/* Features as droplets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="relative group"
              style={{
                opacity: waveProgress > 0.3 + index * 0.1 ? 1 : 0,
                transform: `translateY(${waveProgress > 0.3 + index * 0.1 ? 0 : 30}px)`,
                transition: "all 0.5s ease-out",
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Droplet shape container */}
              <div className="relative p-6 bg-ivory/5 rounded-2xl border border-ivory/10 hover:border-teal-glow/30 transition-colors">
                {/* Icon */}
                <div className="w-14 h-14 rounded-full bg-teal-glow/10 flex items-center justify-center mb-4 group-hover:bg-teal-glow/20 transition-colors">
                  <div className="text-teal-glow">{feature.icon}</div>
                </div>

                <h3 className="font-serif text-xl font-semibold text-ivory mb-3">{feature.title}</h3>
                <p className="text-sm text-ivory/60 leading-relaxed">{feature.description}</p>

                {/* Subtle water ripple effect on hover */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-teal-glow/30 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
