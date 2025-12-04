import { notFound } from "next/navigation"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getProductBySlug, products } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Leaf, Settings, Building2, Play } from "lucide-react"

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
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
              href="/solutions"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-verdigris transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Solutions
            </Link>
          </div>
        </div>

        {/* Hero - Image carousel placeholder */}
        <section className="bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image gallery */}
              <div className="space-y-4">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-card border border-border">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url('${product.images[0]}')` }}
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {product.images.slice(0, 3).map((image, index) => (
                    <div
                      key={index}
                      className="aspect-[4/3] rounded-lg overflow-hidden bg-card border border-border hover:border-brass/50 transition-colors cursor-pointer"
                    >
                      <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url('${image}')` }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Product info */}
              <div>
                <p className="text-sm font-medium text-brass uppercase tracking-wider mb-3">{product.category}</p>
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6">{product.title}</h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">{product.description}</p>

                {product.amazonUrl && (
                  <Button size="lg" className="bg-verdigris hover:bg-verdigris/90 text-ivory group" asChild>
                    <a href={product.amazonUrl} target="_blank" rel="noopener noreferrer">
                      View on Amazon
                      <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Features, Sustainability, Compatibility */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Features */}
              <div className="bg-card rounded-2xl p-8 border border-border">
                <div className="w-12 h-12 rounded-xl bg-brass/10 flex items-center justify-center mb-6">
                  <Settings className="w-6 h-6 text-brass" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-4">System Features</h3>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-brass mt-2 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sustainability */}
              <div className="bg-card rounded-2xl p-8 border border-border">
                <div className="w-12 h-12 rounded-xl bg-verdigris/10 flex items-center justify-center mb-6">
                  <Leaf className="w-6 h-6 text-verdigris" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-4">Sustainability Impact</h3>
                <ul className="space-y-3">
                  {product.sustainabilityImpact.map((impact, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-verdigris mt-2 shrink-0" />
                      {impact}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Compatibility */}
              <div className="bg-card rounded-2xl p-8 border border-border">
                <div className="w-12 h-12 rounded-xl bg-teal-glow/10 flex items-center justify-center mb-6">
                  <Building2 className="w-6 h-6 text-teal-glow" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-4">Heritage Compatibility</h3>
                <ul className="space-y-3">
                  {product.compatibility.map((compat, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-glow mt-2 shrink-0" />
                      {compat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Installation Video placeholder */}
        <section className="py-16 lg:py-24 bg-slate">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-ivory mb-4">See It In Action</h2>
              <p className="text-ivory/70">Watch a real installation at a heritage property.</p>
            </div>

            <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate border border-ivory/10">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${product.images[0]}')` }}
              />
              <div className="absolute inset-0 bg-slate/60 flex items-center justify-center">
                <Button
                  size="lg"
                  className="w-20 h-20 rounded-full bg-teal-glow/90 hover:bg-teal-glow text-slate shadow-[0_0_40px_rgba(63,255,215,0.4)]"
                >
                  <Play className="w-8 h-8 ml-1" />
                  <span className="sr-only">Play installation video</span>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Amazon CTA */}
        {product.amazonUrl && (
          <section className="py-16 lg:py-20 bg-muted">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold mb-4">Ready to Preserve Your Heritage?</h2>
              <p className="text-muted-foreground mb-8">
                Available through our trusted partner Amazon with professional installation options.
              </p>
              <Button
                size="lg"
                className="bg-brass hover:bg-brass/90 text-slate group relative overflow-hidden"
                asChild
              >
                <a href={product.amazonUrl} target="_blank" rel="noopener noreferrer">
                  <span className="relative z-10 flex items-center">
                    View on Amazon
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </span>
                  {/* Glowing line reveal on hover */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-glow/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </a>
              </Button>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  )
}
