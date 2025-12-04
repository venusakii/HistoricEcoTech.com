"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Search, Sun, Cog, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isTechView, setIsTechView] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/solutions", label: "Solutions" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <svg viewBox="0 0 40 40" className="w-full h-full">
                {/* Keyhole shape */}
                <circle
                  cx="20"
                  cy="14"
                  r="8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-brass"
                />
                <path
                  d="M16 18 L16 32 L24 32 L24 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-brass"
                />
                {/* Circuit pattern */}
                <circle
                  cx="20"
                  cy="14"
                  r="3"
                  className="fill-teal-glow opacity-60 group-hover:opacity-100 transition-opacity"
                />
                <line
                  x1="20"
                  y1="22"
                  x2="20"
                  y2="28"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-teal-glow opacity-60 group-hover:opacity-100 transition-opacity"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-semibold tracking-tight text-foreground">
                Historic<span className="text-teal-glow">EcoTech</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brass group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Search */}
            <Button variant="ghost" size="icon" className="hidden sm:flex hover:bg-brass/10">
              <Search className="w-5 h-5 text-brass" />
              <span className="sr-only">Search</span>
            </Button>

            {/* View Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsTechView(!isTechView)}
              className="hidden sm:flex items-center gap-2 text-xs font-medium hover:bg-brass/10"
            >
              {isTechView ? (
                <>
                  <Sun className="w-4 h-4 text-brass" />
                  <span>Classic</span>
                </>
              ) : (
                <>
                  <Cog className="w-4 h-4 text-teal-glow" />
                  <span>Tech</span>
                </>
              )}
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border/50">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-muted rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
