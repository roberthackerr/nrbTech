import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ServicesOverview } from "@/components/services-overview"
import { ProjectsSection } from "@/components/projects-section"
import { StatsSection } from "@/components/stats-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ServicesOverview />
        <ProjectsSection />
        <StatsSection />
      </main>
      <Footer />
    </div>
  )
}
