import Link from "next/link"

export function Footer() {
  return (
    <footer className="relative bg-slate text-ivory overflow-hidden">
      {/* Animated brass gears background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 400 200">
          <g className="animate-spin origin-center" style={{ animationDuration: "60s" }}>
            <circle cx="50" cy="100" r="40" fill="none" stroke="#C2A26C" strokeWidth="2" />
            <circle cx="50" cy="100" r="30" fill="none" stroke="#C2A26C" strokeWidth="1" />
          </g>
          <g className="animate-spin origin-center" style={{ animationDuration: "45s", animationDirection: "reverse" }}>
            <circle cx="350" cy="80" r="50" fill="none" stroke="#C2A26C" strokeWidth="2" />
            <circle cx="350" cy="80" r="35" fill="none" stroke="#C2A26C" strokeWidth="1" />
          </g>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="font-serif text-2xl font-semibold">
                Historic<span className="text-teal-glow">EcoTech</span>
              </span>
            </Link>
            <p className="text-ivory/70 text-sm leading-relaxed">
              Sustainable energy and water management for historic homes. Preserving heritage, embracing innovation.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-brass">Navigate</h4>
            <nav className="flex flex-col gap-2">
              {["Home", "Solutions", "Projects", "About", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="text-sm text-ivory/70 hover:text-teal-glow transition-colors"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-brass">Legal</h4>
            <nav className="flex flex-col gap-2">
              {["Terms of Service", "Privacy Policy", "Cookie Policy"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase().replace(/ /g, "-")}`}
                  className="text-sm text-ivory/70 hover:text-teal-glow transition-colors"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-brass">Connect</h4>
            <p className="text-sm text-ivory/70 mb-2">hello@historicecotech.com</p>
            <p className="text-sm text-ivory/70">+1 (555) 123-4567</p>
          </div>
        </div>

        {/* Cookie Notice - Brass plaque style */}
        

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-ivory/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-ivory/50">
            <p>© 2025 HistoricEcoTech.com. All rights reserved.</p>
            
          </div>
        </div>
      </div>

      {/* Powered by the Past tagline */}
      <div className="relative py-4 bg-slate border-t border-brass/20">
        <p className="text-center text-sm font-serif text-brass/80 tracking-widest">POWERED BY THE PAST</p>
      </div>
    </footer>
  )
}
