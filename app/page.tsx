import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { VisionSection } from "@/components/sections/vision-section"
import { EnergySection } from "@/components/sections/energy-section"
import { WaterSection } from "@/components/sections/water-section"
import { TimelineSection } from "@/components/sections/timeline-section"
import { VideoSection } from "@/components/sections/video-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { AboutSection } from "@/components/sections/about-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <VisionSection />
        <EnergySection />
        <WaterSection />
        <TimelineSection />
        <VideoSection />
        <ProjectsSection />
        <TestimonialsSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  )
}
