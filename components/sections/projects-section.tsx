"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const categories = ["All", "Solar Retrofits", "Water Systems", "Smart Monitoring", "Hybrid Estates"]

const projects = [
  {
    slug: "thornwood-manor",
    title: "Thornwood Manor",
    category: "Hybrid Estates",
    year: "2024",
    image: "/projects/thornwood-manor.jpg",
  },
  {
    slug: "ashbury-hall",
    title: "Ashbury Hall",
    category: "Solar Retrofits",
    year: "2024",
    image: "/projects/ashbury-hall.jpg",
  },
  {
    slug: "riverside-estate",
    title: "Riverside Estate",
    category: "Water Systems",
    year: "2023",
    image: "/projects/riverside-estate.jpg",
  },
  {
    slug: "clocktower-residence",
    title: "Clocktower Residence",
    category: "Smart Monitoring",
    year: "2023",
    image: "/projects/clocktower-residence.jpg",
  },
  {
    slug: "willowbrook-cottage",
    title: "Willowbrook Cottage",
    category: "Solar Retrofits",
    year: "2023",
    image: "/projects/willowbrook-cottage.jpg",
  },
  {
    slug: "hartfield-gardens",
    title: "Hartfield Gardens",
    category: "Water Systems",
    year: "2024",
    image: "/projects/hartfield-gardens.jpg",
  },
  {
    slug: "pemberton-house",
    title: "Pemberton House",
    category: "Hybrid Estates",
    year: "2024",
    image: "/projects/pemberton-house.jpg",
  },
  {
    slug: "stonebridge-manor",
    title: "Stonebridge Manor",
    category: "Smart Monitoring",
    year: "2023",
    image: "/projects/stonebridge-manor.jpg",
  },
  {
    slug: "oakridge-estate",
    title: "Oakridge Estate",
    category: "Hybrid Estates",
    year: "2024",
    image: "/projects/oakridge-estate.jpg",
  },
]

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects = activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory)

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4">
            Our <span className="heritage-text">Signature Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Heritage estates transformed with sustainable technology, preserving history for future generations.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className={
                activeCategory === category
                  ? "bg-verdigris text-ivory hover:bg-verdigris/90"
                  : "border-brass/30 text-foreground hover:border-brass hover:bg-brass/10"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects grid - Blueprint style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-muted copper-trace"
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              {/* Blueprint frame border */}
              <div className="absolute inset-2 border border-brass/30 rounded-lg pointer-events-none z-10 group-hover:border-teal-glow/50 transition-colors" />

              {/* Project image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url('${project.image}')` }}
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate via-slate/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <p className="text-xs font-medium text-brass mb-1">{project.category}</p>
                <h3 className="font-serif text-xl font-semibold text-ivory group-hover:text-teal-glow transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-ivory/60 mt-1">{project.year}</p>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="absolute inset-0 border-2 border-teal-glow/30 rounded-xl" />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-teal-glow to-transparent" />
              </div>
            </Link>
          ))}
        </div>

        {/* View all CTA */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-brass text-brass hover:bg-brass hover:text-slate bg-transparent"
            asChild
          >
            <Link href="/projects">
              View All Projects
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
