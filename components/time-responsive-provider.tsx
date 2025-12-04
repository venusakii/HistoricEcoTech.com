"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

type TimeOfDay = "morning" | "afternoon" | "evening" | "night"

interface TimeContextValue {
  timeOfDay: TimeOfDay
  hour: number
}

const TimeContext = createContext<TimeContextValue>({
  timeOfDay: "afternoon",
  hour: 12,
})

export function useTimeOfDay() {
  return useContext(TimeContext)
}

function getTimeOfDay(hour: number): TimeOfDay {
  if (hour >= 5 && hour < 12) return "morning"
  if (hour >= 12 && hour < 17) return "afternoon"
  if (hour >= 17 && hour < 21) return "evening"
  return "night"
}

export function TimeResponsiveProvider({ children }: { children: ReactNode }) {
  const [hour, setHour] = useState(12)
  const [timeOfDay, setTimeOfDay] = useState<TimeOfDay>("afternoon")

  useEffect(() => {
    const updateTime = () => {
      const currentHour = new Date().getHours()
      setHour(currentHour)
      setTimeOfDay(getTimeOfDay(currentHour))
    }

    updateTime()
    const interval = setInterval(updateTime, 60000) // Update every minute

    return () => clearInterval(interval)
  }, [])

  return <TimeContext.Provider value={{ timeOfDay, hour }}>{children}</TimeContext.Provider>
}
