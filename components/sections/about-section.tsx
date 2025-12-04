"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-slate overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-ivory mb-4">
            About <span className="text-teal-glow glow-accent">HistoricEcoTech</span>
          </h2>
        </div>

        <div className="relative">
          <div className="bg-ivory/5 backdrop-blur-sm rounded-2xl border border-ivory/10 p-8 lg:p-12">
            <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-ivory mb-6">Our Mission</h3>

            <p className="text-ivory/70 leading-relaxed text-lg max-w-2xl">
              To bridge the gap between heritage preservation and sustainable innovation, ensuring that historic
              architecture not only survives but thrives in the modern era.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" className="bg-teal-glow hover:bg-teal-glow/90 text-slate" asChild>
            <Link href="/about">
              Learn Our Full Story
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
