import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Cpu, Wifi, Code, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      icon: Wifi,
      title: "Télécommunications",
      description: "Infrastructure réseau moderne et solutions de communication unifiées",
      features: [
        "Conception et déploiement de réseaux d'entreprise",
        "Solutions VoIP et téléphonie IP",
        "Systèmes de communication unifiés",
        "Optimisation des performances réseau",
        "Maintenance et support 24/7",
      ],
      href: "/services/telecom",
      color: "from-blue-500/10 to-cyan-500/10",
    },
    {
      icon: Shield,
      title: "Cybersécurité",
      description: "Protection complète contre les menaces et mise en conformité",
      features: [
        "Audit de sécurité et tests de pénétration",
        "Protection des données et RGPD",
        "Formation et sensibilisation des équipes",
        "Surveillance et détection des menaces",
        "Plan de continuité d'activité",
      ],
      href: "/services/cybersecurity",
      color: "from-red-500/10 to-orange-500/10",
    },
    {
      icon: Cpu,
      title: "Intelligence Artificielle",
      description: "Solutions IA personnalisées et automatisation intelligente",
      features: [
        "Développement de solutions IA sur mesure",
        "Automatisation des processus métier",
        "Analyse prédictive et machine learning",
        "Chatbots et assistants virtuels",
        "Intégration d'APIs d'IA existantes",
      ],
      href: "/services/ai",
      color: "from-purple-500/10 to-pink-500/10",
    },
    {
      icon: Code,
      title: "Développement",
      description: "Applications web et mobile, systèmes sur mesure",
      features: [
        "Applications web modernes (React, Next.js)",
        "Applications mobiles natives et hybrides",
        "Systèmes de gestion sur mesure",
        "Intégrations API et microservices",
        "Maintenance et évolutions",
      ],
      href: "/services/development",
      color: "from-green-500/10 to-emerald-500/10",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-background via-background to-muted py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Nos Services
                <span className="text-primary block">Technologiques</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
                Découvrez notre gamme complète de services pour accompagner votre transformation digitale
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                >
                  <div className={`h-2 bg-gradient-to-r ${service.color}`} />
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <service.icon className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{service.title}</CardTitle>
                        <CardDescription className="text-base mt-1">{service.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-primary mr-3 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    >
                      <Link href={service.href}>
                        Découvrir ce service
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Prêt à transformer votre entreprise ?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Contactez-nous pour discuter de vos besoins et découvrir comment nos solutions peuvent vous aider
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Demander un devis gratuit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/about">En savoir plus sur NRBTech</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
