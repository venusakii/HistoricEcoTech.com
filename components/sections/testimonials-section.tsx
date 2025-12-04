"use client"

import { useState } from "react"
import { Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Eleanor Finch",
    title: "Owner, Thornwood Manor",
    image: "/testimonials/eleanor-finch.jpg",
    quote:
      "HistoricEcoTech preserved our 1860s home's charm — and cut energy waste by 40%. The craftsmanship is extraordinary.",
  },
  {
    id: 2,
    name: "Dr. Henry Lowell",
    title: "Heritage Conservationist",
    image: "/testimonials/henry-lowell.jpg",
    quote:
      "I've never seen technology integrate so seamlessly with period architecture. They understand both history and innovation.",
  },
  {
    id: 3,
    name: "Architect James Gray",
    title: "Gray & Associates",
    image: "/testimonials/james-gray.jpg",
    quote:
      "Their water management system saved a Georgian estate from structural damage while remaining completely invisible. Masterful work.",
  },
]

export function TestimonialsSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section className="py-24 lg:py-32 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4">
            Voices from the <span className="heritage-text">Past & Present</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Homeowners and experts share their experiences with our heritage preservation technology.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative group"
              onMouseEnter={() => setHoveredId(testimonial.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="bg-card rounded-2xl p-8 border border-border hover:border-brass/50 transition-all duration-500 h-full flex flex-col">
                {/* Quote icon */}
                <Quote className="w-10 h-10 text-brass/30 mb-6" />

                {/* Quote text */}
                <blockquote className="font-serif text-lg text-foreground/90 leading-relaxed mb-8 flex-1 italic">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  {/* Engraved oval portrait */}
                  <div className="relative">
                    <div
                      className={`w-16 h-20 rounded-[50%] overflow-hidden border-2 transition-all duration-500 ${
                        hoveredId === testimonial.id
                          ? "border-teal-glow shadow-[0_0_20px_rgba(63,255,215,0.3)]"
                          : "border-brass/50"
                      }`}
                    >
                      <div
                        className={`w-full h-full bg-cover bg-center transition-all duration-500 ${
                          hoveredId === testimonial.id ? "filter-none scale-105" : "sepia grayscale-[30%]"
                        }`}
                        style={{ backgroundImage: `url('${testimonial.image}')` }}
                      />
                    </div>
                    {/* Decorative frame corners */}
                    <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-brass/30" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 border-t border-r border-brass/30" />
                    <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b border-l border-brass/30" />
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-brass/30" />
                  </div>

                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
