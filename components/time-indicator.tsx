"use client"

import { useTimeOfDay } from "./time-responsive-provider"
import { Sun, Sunset, Moon, Sunrise } from "lucide-react"

const timeConfig = {
  morning: {
    icon: Sunrise,
    label: "Morning Light",
    description: "Warm sunlight filters through windows",
  },
  afternoon: {
    icon: Sun,
    label: "Afternoon Glow",
    description: "Shadows move across architectural textures",
  },
  evening: {
    icon: Sunset,
    label: "Evening Amber",
    description: "Soft teal and amber from lanterns and LEDs",
  },
  night: {
    icon: Moon,
    label: "Night Mode",
    description: "Energy flows pulse gently through walls",
  },
}

export function TimeIndicator() {
  const { timeOfDay, hour } = useTimeOfDay()
  const config = timeConfig[timeOfDay]
  const Icon = config.icon

  return (
    <div className="fixed bottom-4 right-4 z-50 hidden md:block">
      <div className="group relative">
        <button className="w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm border border-border flex items-center justify-center hover:border-brass/50 transition-colors">
          <Icon className={`w-5 h-5 ${timeOfDay === "night" ? "text-teal-glow" : "text-brass"}`} />
        </button>

        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
          <div className="bg-card/95 backdrop-blur-sm border border-border rounded-lg p-3 shadow-lg min-w-[200px]">
            <p className="text-sm font-medium text-foreground">{config.label}</p>
            <p className="text-xs text-muted-foreground mt-1">{config.description}</p>
            <p className="text-xs text-brass mt-2">Local time: {hour}:00</p>
          </div>
        </div>
      </div>
    </div>
  )
}
