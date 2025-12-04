export interface Product {
  slug: string
  title: string
  category: "Energy" | "Water" | "Monitoring" | "Preservation Tech"
  shortDescription: string
  description: string
  features: string[]
  sustainabilityImpact: string[]
  compatibility: string[]
  images: string[]
  amazonUrl?: string
}

export const products: Product[] = [
  {
    slug: "heritage-solar-tiles",
    title: "Heritage Solar Tiles",
    category: "Energy",
    shortDescription: "Victorian-style roof tiles with integrated photovoltaic cells",
    description:
      "Our Heritage Solar Tiles are meticulously crafted to replicate authentic Victorian and Georgian roof tiles while secretly housing high-efficiency photovoltaic cells. Each tile is hand-finished to match period aesthetics, ensuring your historic home generates clean energy without compromising its architectural integrity.",
    features: [
      "Hand-crafted ceramic finish matching period originals",
      "22% solar efficiency with monocrystalline cells",
      "Weatherproof rating: IP68 certified",
      "25-year performance warranty",
      "Smart grid integration capability",
    ],
    sustainabilityImpact: [
      "Generates up to 4kW per 20m² roof area",
      "Reduces carbon footprint by 2.5 tonnes annually",
      "100% recyclable materials",
      "Zero visible environmental impact",
    ],
    compatibility: [
      "Georgian townhouses (1714-1830)",
      "Victorian mansions (1837-1901)",
      "Edwardian estates (1901-1910)",
      "Grade I & II listed buildings",
    ],
    images: ["/victorian-roof-tiles-solar-panels-integrated-herit.jpg", "/solar-tile-installation-historic-mansion-close-up.jpg", "/heritage-roof-completed-solar-tile-project-aerial.jpg"],
    amazonUrl: "https://amazon.com",
  },
  {
    slug: "invisible-geothermal-system",
    title: "Invisible Geothermal System",
    category: "Energy",
    shortDescription: "Underground heating with zero visual footprint on heritage grounds",
    description:
      "The Invisible Geothermal System utilizes horizontal loop technology specifically designed for heritage properties. Our installation process preserves lawns, gardens, and archaeological features while providing efficient ground-source heating and cooling year-round.",
    features: [
      "Horizontal loop design for minimal ground disruption",
      "400% efficiency rating (COP 4.0)",
      "Silent operation - no visible outdoor units",
      "Compatible with existing radiator systems",
      "Reversible for summer cooling",
    ],
    sustainabilityImpact: [
      "Reduces heating costs by up to 70%",
      "Zero on-site emissions",
      "50-year system lifespan",
      "Preserves garden heritage",
    ],
    compatibility: [
      "Properties with 200m² minimum garden space",
      "All heritage building classifications",
      "Listed garden preservation zones",
      "Archaeological sensitivity areas",
    ],
    images: ["/geothermal-installation-heritage-garden-undergroun.jpg", "/heat-pump-hidden-cellar-historic-building.jpg", "/heritage-garden-lawn-perfect-after-geothermal.jpg"],
  },
  {
    slug: "smart-slate-rainwater",
    title: "Smart Slate Rainwater Harvester",
    category: "Water",
    shortDescription: "Slate roof collection system with AI-powered distribution",
    description:
      "Our Smart Slate Rainwater Harvester transforms traditional slate roofing into an intelligent water collection network. Micro-sensors monitor rainfall quality, storage levels, and distribute harvested water for irrigation, toilet flushing, and laundry.",
    features: [
      "Integrated micro-guttering invisible from ground",
      "AI quality monitoring and filtration",
      "5,000L underground storage tanks",
      "Automatic irrigation scheduling",
      "Mobile app monitoring",
    ],
    sustainabilityImpact: [
      "Saves 50,000L potable water annually",
      "Reduces water bills by 40%",
      "Prevents roof runoff erosion",
      "Supports heritage garden ecosystems",
    ],
    compatibility: ["Welsh slate roofs", "Westmorland slate", "Burlington stone", "Cotswold stone tiles"],
    images: ["/slate-roof-rainwater-collection-heritage-close-up.jpg", "/underground-water-tank-historic-property-installat.jpg", "/heritage-garden-irrigation-smart-system.jpg"],
  },
  {
    slug: "masonry-leak-sentinel",
    title: "Masonry Leak Sentinel",
    category: "Monitoring",
    shortDescription: "Non-invasive moisture detection for historic stonework",
    description:
      "The Masonry Leak Sentinel employs proprietary micro-sensor technology that monitors moisture levels within historic stonework without drilling or damaging original materials. Early detection prevents costly water damage while preserving irreplaceable heritage fabric.",
    features: [
      "Non-invasive wireless sensors",
      "Real-time moisture mapping",
      "Predictive damage algorithms",
      "Heritage-grade adhesive mounting",
      "Battery life: 10 years",
    ],
    sustainabilityImpact: [
      "Prevents 95% of water-related damage",
      "Extends building lifespan by decades",
      "Reduces emergency repair costs",
      "Preserves original building materials",
    ],
    compatibility: ["Limestone facades", "Sandstone construction", "Brick and mortar", "Granite structures"],
    images: ["/moisture-sensor-historic-stone-wall-close-up.jpg", "/heritage-building-moisture-monitoring-screen.jpg", "/conservator-installing-sensor-manor-house.jpg"],
  },
  {
    slug: "victorian-smart-vents",
    title: "Victorian Smart Vents",
    category: "Energy",
    shortDescription: "Period-accurate vents with AI climate control",
    description:
      "Our Victorian Smart Vents are exact replicas of 19th-century cast iron ventilation grilles, concealing sophisticated AI-controlled climate management. Each vent learns occupancy patterns and optimizes heating and cooling for comfort and efficiency.",
    features: [
      "Cast iron reproduction finish",
      "Occupancy-sensing automation",
      "Zoned temperature control",
      "Voice assistant compatible",
      "Historical pattern library",
    ],
    sustainabilityImpact: [
      "Reduces energy waste by 35%",
      "Eliminates cold spots",
      "Maintains optimal humidity for antiques",
      "Smart scheduling reduces peak load",
    ],
    compatibility: [
      "Victorian heating systems",
      "Georgian fireplaces",
      "Edwardian radiator networks",
      "Modern HVAC retrofits",
    ],
    images: ["/victorian-ornate-heating-vent-cast-iron-smart.jpg", "/period-room-heating-vent-floor-heritage.jpg", "/smart-vent-app-control-heritage-home.jpg"],
  },
  {
    slug: "heritage-pressure-monitor",
    title: "Heritage Pressure Monitor",
    category: "Water",
    shortDescription: "Smart water pressure management for aging pipes",
    description:
      "The Heritage Pressure Monitor protects fragile historic plumbing by continuously monitoring and regulating water pressure. Prevent pipe bursts and water damage while extending the life of original lead and copper pipework.",
    features: [
      "Continuous pressure monitoring",
      "Automatic pressure regulation",
      "Burst detection and auto-shutoff",
      "Lead pipe compatible",
      "Period-style meter housing",
    ],
    sustainabilityImpact: [
      "Prevents 90% of pipe failures",
      "Extends original pipework lifespan",
      "Reduces water waste from leaks",
      "Minimizes invasive pipe replacement",
    ],
    compatibility: ["Lead pipework (pre-1970)", "Copper systems", "Cast iron mains", "Mixed material networks"],
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "All") return products
  return products.filter((p) => p.category === category)
}
