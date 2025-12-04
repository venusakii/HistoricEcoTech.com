import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Award, Users, Building2, Leaf } from "lucide-react"

const stats = [
  { value: "50+", label: "Heritage Estates Preserved", icon: Building2 },
  { value: "40%", label: "Average Energy Reduction", icon: Leaf },
  { value: "100+", label: "Conservation Partners", icon: Users },
  { value: "12", label: "Industry Awards", icon: Award },
]

const team = [
  {
    name: "Dr. Victoria Ashworth",
    role: "Founder & CEO",
    image: "/placeholder.svg?height=400&width=300",
    bio: "Conservation architect with 20 years of experience in heritage preservation.",
  },
  {
    name: "James Whitmore",
    role: "Chief Technology Officer",
    image: "/placeholder.svg?height=400&width=300",
    bio: "Former renewable energy researcher at Cambridge, pioneering invisible solar technology.",
  },
  {
    name: "Eleanor Sinclair",
    role: "Head of Heritage Relations",
    image: "/placeholder.svg?height=400&width=300",
    bio: "Former English Heritage advisor specializing in listed building consents.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-muted">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6">
              About <span className="heritage-text">HistoricEcoTech</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We believe that preserving our architectural heritage and embracing sustainable technology are not
              competing goals — they are two sides of the same mission: ensuring our historic buildings thrive for
              generations to come.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-3xl sm:text-4xl font-semibold mb-6">
                  Our <span className="text-verdigris">Mission</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  To bridge the gap between heritage preservation and sustainable innovation, ensuring that historic
                  architecture not only survives but thrives in the modern era.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Founded in 2018 after witnessing irreversible damage to a 200-year-old estate from outdated heating
                  systems, we set out to create technology that works with heritage buildings, not against them.
                </p>
              </div>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted border border-border">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: "url('/placeholder.svg?height=600&width=800')" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 lg:py-20 bg-slate">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat) => {
                const Icon = stat.icon
                return (
                  <div key={stat.label} className="text-center">
                    <div className="w-12 h-12 rounded-full bg-teal-glow/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-teal-glow" />
                    </div>
                    <p className="font-serif text-4xl font-semibold text-ivory mb-2">{stat.value}</p>
                    <p className="text-sm text-ivory/60">{stat.label}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold mb-4">
                Our <span className="heritage-text">Team</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Experts in heritage conservation, renewable energy, and smart technology working together to preserve
                the past.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="bg-card rounded-2xl overflow-hidden border border-border hover:border-brass/50 transition-colors"
                >
                  <div className="aspect-[3/4] bg-muted">
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url('${member.image}')` }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-sm text-brass mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-20 bg-muted">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold mb-4">Ready to Preserve Your Heritage?</h2>
            <p className="text-muted-foreground mb-8">
              Let us help you modernize your historic property with sustainable technology.
            </p>
            <Button size="lg" className="bg-verdigris hover:bg-verdigris/90 text-ivory" asChild>
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
