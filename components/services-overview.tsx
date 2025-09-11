import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Cpu, Wifi, Code, ArrowRight } from "lucide-react"
import Link from "next/link"

export function ServicesOverview() {
  const services = [
    {
      icon: Wifi,
      title: "Télécommunications",
      description:
        "Infrastructure réseau, solutions VoIP, systèmes de communication unifiés et optimisation des performances.",
      features: ["Réseaux d'entreprise", "Solutions VoIP", "Communication unifiée", "Maintenance réseau"],
      href: "/services/telecom",
    },
    {
      icon: Shield,
      title: "Cybersécurité",
      description: "Protection complète contre les menaces, audit de sécurité, formation et mise en conformité.",
      features: ["Audit de sécurité", "Protection des données", "Formation équipes", "Conformité RGPD"],
      href: "/services/cybersecurity",
    },
    {
      icon: Cpu,
      title: "Intelligence Artificielle",
      description:
        "Solutions IA personnalisées, automatisation des processus et analyse prédictive pour votre entreprise.",
      features: ["IA personnalisée", "Automatisation", "Analyse prédictive", "Machine Learning"],
      href: "/services/ai",
    },
    {
      icon: Code,
      title: "Développement",
      description: "Applications web et mobile, systèmes sur mesure, intégrations API et maintenance technique.",
      features: ["Applications web", "Apps mobiles", "Systèmes sur mesure", "Intégrations API"],
      href: "/services/development",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Nos Domaines d'Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Quatre piliers technologiques pour accompagner votre transformation digitale
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-pretty">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  asChild
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                >
                  <Link href={service.href}>
                    En savoir plus
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
