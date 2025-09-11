import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Wifi, Network, Phone, Settings, Shield, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function TelecomPage() {
  const solutions = [
    {
      icon: Network,
      title: "Réseaux d'Entreprise",
      description: "Conception et déploiement d'infrastructures réseau haute performance",
      features: ["Architecture réseau sur mesure", "Équipements Cisco et HP", "Redondance et haute disponibilité"],
    },
    {
      icon: Phone,
      title: "Solutions VoIP",
      description: "Téléphonie IP moderne et économique pour votre entreprise",
      features: ["Migration vers la VoIP", "Intégration CRM", "Mobilité et télétravail"],
    },
    {
      icon: Settings,
      title: "Communication Unifiée",
      description: "Plateforme intégrée pour tous vos besoins de communication",
      features: ["Messagerie instantanée", "Visioconférence", "Collaboration en temps réel"],
    },
    {
      icon: Shield,
      title: "Sécurité Réseau",
      description: "Protection avancée de votre infrastructure de communication",
      features: ["Pare-feu nouvelle génération", "VPN sécurisés", "Monitoring 24/7"],
    },
  ]

  const benefits = [
    "Réduction des coûts de communication jusqu'à 60%",
    "Amélioration de la productivité des équipes",
    "Flexibilité et mobilité accrues",
    "Support technique expert 24/7",
    "Évolutivité selon vos besoins",
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-background to-cyan-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Wifi className="h-8 w-8 text-primary" />
                  <span className="text-primary font-semibold">Télécommunications</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                  Infrastructure Réseau
                  <span className="text-primary block">Moderne</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 text-pretty">
                  Transformez votre infrastructure de communication avec nos solutions télécoms avancées. Réseaux haute
                  performance, VoIP et communication unifiée pour votre entreprise.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <Link href="/contact">
                      Audit gratuit
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/services">Tous nos services</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-primary/20 to-cyan-500/20 rounded-2xl p-8 backdrop-blur">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-background/80 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-primary">99.9%</div>
                      <div className="text-sm text-muted-foreground">Disponibilité</div>
                    </div>
                    <div className="bg-background/80 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-primary">24/7</div>
                      <div className="text-sm text-muted-foreground">Support</div>
                    </div>
                    <div className="bg-background/80 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-primary">-60%</div>
                      <div className="text-sm text-muted-foreground">Coûts</div>
                    </div>
                    <div className="bg-background/80 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-primary">100+</div>
                      <div className="text-sm text-muted-foreground">Projets</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                Nos Solutions Télécoms
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                Une gamme complète de services pour moderniser votre infrastructure de communication
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <solution.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{solution.title}</CardTitle>
                        <CardDescription>{solution.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                  Pourquoi Choisir NRBTech ?
                </h2>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-card rounded-2xl p-8 border border-border">
                <h3 className="text-2xl font-bold text-card-foreground mb-4">Audit Gratuit</h3>
                <p className="text-muted-foreground mb-6">
                  Bénéficiez d'un audit complet de votre infrastructure réseau actuelle et recevez nos recommandations
                  personnalisées.
                </p>
                <Button asChild className="w-full">
                  <Link href="/contact">
                    Planifier un audit
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
