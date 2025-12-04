"use client"

import type React from "react"

import { useState } from "react"
import { Sun, Thermometer, Cpu, Zap } from "lucide-react"

interface EnergyFeature {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  position: { top: string; left: string }
}

const features: EnergyFeature[] = [
  {
    id: "solar",
    title: "Solar-Integrated Roof Tiles",
    description: "Antique-looking tiles that seamlessly collect solar power while preserving heritage aesthetics.",
    icon: <Sun className="w-5 h-5" />,
    position: { top: "15%", left: "45%" },
  },
  {
    id: "geothermal",
    title: "Invisible Geothermal Loops",
    description: "Underground heating and cooling systems that leave no visible footprint on historic grounds.",
    icon: <Thermometer className="w-5 h-5" />,
    position: { top: "75%", left: "30%" },
  },
  {
    id: "vents",
    title: "AI-Controlled Heritage Vents",
    description: "Smart heating vents disguised as authentic 1900s design, with modern climate intelligence.",
    icon: <Cpu className="w-5 h-5" />,
    position: { top: "50%", left: "70%" },
  },
]

export function EnergySection() {
  const [activeFeature, setActiveFeature] = useState<string | null>(null)

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brass/10 rounded-full mb-6">
            <Zap className="w-4 h-4 text-brass" />
            <span className="text-sm font-medium text-brass">Energy Systems</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4">
            Invisible <span className="heritage-text">Power</span> Infrastructure
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Retrofitted energy components that honor the past while powering the future.
          </p>
        </div>

        {/* Interactive 3D-style isometric house */}
        <div className="relative max-w-4xl mx-auto">
          {/* House illustration */}
          <div className="relative aspect-[4/3] bg-muted rounded-2xl overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/isometric-heritage-mansion-cutaway-view-blueprint-.jpg')",
              }}
            />

            {/* Feature markers */}
            {features.map((feature) => (
              <button
                key={feature.id}
                className={`absolute w-10 h-10 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 group ${
                  activeFeature === feature.id ? "scale-125" : "hover:scale-110"
                }`}
                style={{ top: feature.position.top, left: feature.position.left }}
                onClick={() => setActiveFeature(activeFeature === feature.id ? null : feature.id)}
                onMouseEnter={() => setActiveFeature(feature.id)}
                onMouseLeave={() => setActiveFeature(null)}
              >
                {/* Outer glow ring */}
                <span
                  className={`absolute inset-0 rounded-full border-2 transition-all duration-300 ${
                    activeFeature === feature.id
                      ? "border-teal-glow shadow-[0_0_20px_rgba(63,255,215,0.5)]"
                      : "border-brass/50"
                  }`}
                />
                {/* Inner circle */}
                <span
                  className={`absolute inset-1 rounded-full flex items-center justify-center transition-all duration-300 ${
                    activeFeature === feature.id ? "bg-teal-glow text-slate" : "bg-brass/20 text-brass"
                  }`}
                >
                  {feature.icon}
                </span>
                {/* Pulse animation */}
                <span
                  className={`absolute inset-0 rounded-full animate-ping ${
                    activeFeature === feature.id ? "bg-teal-glow/30" : "bg-brass/20"
                  }`}
                  style={{ animationDuration: "2s" }}
                />
              </button>
            ))}
          </div>

          {/* Feature details panel */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.id}
                className={`p-6 rounded-xl border transition-all duration-300 copper-trace ${
                  activeFeature === feature.id
                    ? "bg-card border-teal-glow/50 shadow-lg shadow-teal-glow/10"
                    : "bg-card/50 border-border hover:border-brass/50"
                }`}
                onMouseEnter={() => setActiveFeature(feature.id)}
                onMouseLeave={() => setActiveFeature(null)}
              >
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors ${
                    activeFeature === feature.id ? "bg-teal-glow/20 text-teal-glow" : "bg-brass/10 text-brass"
                  }`}
                >
                  {feature.icon}
                </div>
                <h3 className="font-serif text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
