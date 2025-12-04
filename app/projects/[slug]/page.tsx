import { notFound } from "next/navigation"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, MapPin, Calendar, Tag } from "lucide-react"

const projects = [
  {
    slug: "thornwood-manor",
    title: "Thornwood Manor",
    category: "Hybrid Estates",
    year: "2024",
    location: "Cotswolds, England",
    description:
      "Complete sustainable transformation of an 1850s Georgian manor, integrating solar tiles, geothermal heating, and smart water management while preserving every original architectural detail.",
    challenge:
      "The owners of this Grade II listed Georgian manor needed to reduce their carbon footprint by 50% without altering the building's historic character or disrupting the protected gardens.",
    solution:
      "We installed Heritage Solar Tiles matching the original Cotswold slate, an Invisible Geothermal System threaded beneath the formal gardens, and Victorian Smart Vents throughout the 42-room property.",
    results: [
      "60% reduction in energy costs",
      "Carbon neutral within first year",
      "Zero visible alterations to historic facade",
      "Heritage England approved",
    ],
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    slug: "ashbury-hall",
    title: "Ashbury Hall",
    category: "Solar Retrofits",
    year: "2024",
    location: "Yorkshire, England",
    description: "Heritage solar tiles integrated into Grade II listed roof.",
    challenge:
      "A sprawling Victorian estate with complex rooflines needed clean energy without compromising its architectural heritage.",
    solution:
      "Custom-manufactured Heritage Solar Tiles to match the estate's original Welsh slate, installed across 400m² of roof area.",
    results: [
      "8kW solar capacity",
      "45% energy independence",
      "Seamless visual integration",
      "Listed building consent granted",
    ],
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
]

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Breadcrumb */}
        <div className="bg-muted border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link
              href="/projects"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-verdigris transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Link>
          </div>
        </div>

        {/* Hero */}
        <section className="relative py-16 lg:py-24 bg-slate">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-brass/20 rounded-full text-sm text-brass">
                    <Tag className="w-3 h-3" />
                    {project.category}
                  </span>
                  <span className="inline-flex items-center gap-2 text-sm text-ivory/60">
                    <Calendar className="w-3 h-3" />
                    {project.year}
                  </span>
                  <span className="inline-flex items-center gap-2 text-sm text-ivory/60">
                    <MapPin className="w-3 h-3" />
                    {project.location}
                  </span>
                </div>

                <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-ivory mb-6">{project.title}</h1>

                <p className="text-lg text-ivory/80 leading-relaxed">{project.description}</p>
              </div>

              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-ivory/10">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url('${project.images[0]}')` }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Challenge & Solution */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="font-serif text-2xl font-semibold mb-4 text-brass">The Challenge</h2>
                <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
              </div>
              <div>
                <h2 className="font-serif text-2xl font-semibold mb-4 text-verdigris">Our Solution</h2>
                <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-16 lg:py-24 bg-muted">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-semibold text-center mb-12">
              The <span className="heritage-text">Results</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {project.results.map((result, index) => (
                <div key={index} className="bg-card rounded-xl p-6 border border-border text-center">
                  <p className="text-foreground font-medium">{result}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-semibold text-center mb-12">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.images.map((image, index) => (
                <div key={index} className="aspect-[4/3] rounded-xl overflow-hidden border border-border">
                  <div
                    className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url('${image}')` }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-20 bg-slate">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-ivory mb-4">
              Inspired by This Transformation?
            </h2>
            <p className="text-ivory/70 mb-8">
              Let us help you preserve your heritage property with sustainable technology.
            </p>
            <Button size="lg" className="bg-teal-glow hover:bg-teal-glow/90 text-slate" asChild>
              <Link href="/contact">Start Your Project</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
