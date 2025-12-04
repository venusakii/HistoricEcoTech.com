"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { products } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { Zap, Droplets, Monitor, Shield } from "lucide-react"

const categories = [
  { name: "All", icon: null },
  { name: "Energy", icon: <Zap className="w-4 h-4" /> },
  { name: "Water", icon: <Droplets className="w-4 h-4" /> },
  { name: "Monitoring", icon: <Monitor className="w-4 h-4" /> },
  { name: "Preservation Tech", icon: <Shield className="w-4 h-4" /> },
]

export default function SolutionsPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProducts = activeCategory === "All" ? products : products.filter((p) => p.category === activeCategory)

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6">
              Our <span className="heritage-text">Solutions</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore our range of heritage-compatible sustainable technologies, each designed to preserve the past
              while powering the future.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 border-b border-border sticky top-16 lg:top-20 bg-background/95 backdrop-blur-sm z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category.name}
                  variant={activeCategory === category.name ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(category.name)}
                  className={
                    activeCategory === category.name
                      ? "bg-verdigris text-ivory hover:bg-verdigris/90"
                      : "border-brass/30 hover:border-brass hover:bg-brass/10"
                  }
                >
                  {category.icon}
                  <span className={category.icon ? "ml-2" : ""}>{category.name}</span>
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid - Masonry style */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <Link
                  key={product.slug}
                  href={`/solutions/${product.slug}`}
                  className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-brass/50 transition-all duration-500 copper-trace"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* Product image with ripple/glow animation */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url('${product.images[0]}')` }}
                    />
                    {/* Category-specific overlay effect */}
                    <div
                      className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                        product.category === "Water"
                          ? "bg-gradient-to-t from-verdigris/20 to-transparent"
                          : product.category === "Energy"
                            ? "bg-gradient-to-t from-brass/20 to-transparent"
                            : "bg-gradient-to-t from-teal-glow/10 to-transparent"
                      }`}
                    />

                    {/* Copper outline trace */}
                    <div className="absolute inset-2 border border-transparent group-hover:border-brass/50 rounded-lg transition-colors duration-500" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-xs font-medium text-brass uppercase tracking-wider mb-2">{product.category}</p>
                    <h3 className="font-serif text-xl font-semibold mb-2 group-hover:text-verdigris transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{product.shortDescription}</p>
                  </div>

                  {/* Bottom glow line on hover */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-glow scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
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
