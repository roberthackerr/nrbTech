import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Cpu, Wifi, Code } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-background via-background to-muted py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Solutions Technologiques
            <span className="text-primary block">Innovantes</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            NRBTech est votre partenaire de confiance pour les télécommunications, la cybersécurité, l'intelligence
            artificielle et le développement. Nous transformons vos défis technologiques en opportunités de croissance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" asChild>
              <Link href="/contact">
                Commencer un projet
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/services">Découvrir nos services</Link>
            </Button>
          </div>

          {/* Services Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow">
              <Wifi className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-semibold text-card-foreground">Télécommunications</h3>
            </div>
            <div className="flex flex-col items-center p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-semibold text-card-foreground">Cybersécurité</h3>
            </div>
            <div className="flex flex-col items-center p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow">
              <Cpu className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-semibold text-card-foreground">Intelligence Artificielle</h3>
            </div>
            <div className="flex flex-col items-center p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow">
              <Code className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-semibold text-card-foreground">Développement</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
