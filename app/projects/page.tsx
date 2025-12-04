"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

const categories = ["All", "Solar Retrofits", "Water Systems", "Smart Monitoring", "Hybrid Estates"]

const projects = [
  {
    slug: "thornwood-manor",
    title: "Thornwood Manor",
    category: "Hybrid Estates",
    year: "2024",
    location: "Cotswolds, England",
    description: "Complete sustainable transformation of an 1850s Georgian manor.",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    slug: "ashbury-hall",
    title: "Ashbury Hall",
    category: "Solar Retrofits",
    year: "2024",
    location: "Yorkshire, England",
    description: "Heritage solar tiles integrated into Grade II listed roof.",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    slug: "riverside-estate",
    title: "Riverside Estate",
    category: "Water Systems",
    year: "2023",
    location: "Thames Valley, England",
    description: "Smart rainwater harvesting for a Victorian riverside mansion.",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    slug: "clocktower-residence",
    title: "Clocktower Residence",
    category: "Smart Monitoring",
    year: "2023",
    location: "Edinburgh, Scotland",
    description: "Masonry monitoring system for a 19th-century converted clocktower.",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    slug: "willowbrook-cottage",
    title: "Willowbrook Cottage",
    category: "Solar Retrofits",
    year: "2023",
    location: "Lake District, England",
    description: "Slate-matching solar integration for a Wordsworth-era cottage.",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    slug: "hartfield-gardens",
    title: "Hartfield Gardens",
    category: "Water Systems",
    year: "2024",
    location: "Sussex, England",
    description: "Heritage garden irrigation system with Victorian-era pump house restoration.",
    image: "/placeholder.svg?height=600&width=800",
  },
]

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects = activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory)

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6">
              Our <span className="heritage-text">Projects</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore our portfolio of heritage transformations across the British Isles and beyond.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 border-b border-border sticky top-16 lg:top-20 bg-background/95 backdrop-blur-sm z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(category)}
                  className={
                    activeCategory === category
                      ? "bg-verdigris text-ivory hover:bg-verdigris/90"
                      : "border-brass/30 hover:border-brass hover:bg-brass/10"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredProjects.map((project, index) => (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="group relative aspect-[16/10] rounded-2xl overflow-hidden copper-trace"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* Blueprint frame */}
                  <div className="absolute inset-3 border border-brass/30 rounded-xl z-10 group-hover:border-teal-glow/50 transition-colors" />

                  {/* Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${project.image}')` }}
                  />

                  {/* Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate via-slate/50 to-transparent" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-xs font-medium text-brass">{project.category}</span>
                      <span className="w-1 h-1 rounded-full bg-ivory/30" />
                      <span className="text-xs text-ivory/60">{project.year}</span>
                    </div>
                    <h3 className="font-serif text-2xl font-semibold text-ivory mb-2 group-hover:text-teal-glow transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-ivory/70 mb-1">{project.location}</p>
                    <p className="text-sm text-ivory/60 line-clamp-2">{project.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
