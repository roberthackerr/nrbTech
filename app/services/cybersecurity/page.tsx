import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Lock, Eye, Users, AlertTriangle, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function CybersecurityPage() {
  const services = [
    {
      icon: Eye,
      title: "Audit de Sécurité",
      description: "Évaluation complète de votre posture de sécurité",
      features: ["Tests de pénétration", "Analyse des vulnérabilités", "Rapport détaillé avec recommandations"],
    },
    {
      icon: Lock,
      title: "Protection des Données",
      description: "Sécurisation et conformité RGPD de vos données sensibles",
      features: ["Chiffrement avancé", "Sauvegarde sécurisée", "Conformité réglementaire"],
    },
    {
      icon: Users,
      title: "Formation Équipes",
      description: "Sensibilisation et formation à la cybersécurité",
      features: ["Ateliers pratiques", "Simulations d'attaques", "Certification des équipes"],
    },
    {
      icon: AlertTriangle,
      title: "Surveillance 24/7",
      description: "Monitoring continu et réponse aux incidents",
      features: ["SOC dédié", "Détection temps réel", "Réponse aux incidents"],
    },
  ]

  const threats = [
    { name: "Ransomware", percentage: "85%" },
    { name: "Phishing", percentage: "78%" },
    { name: "Malware", percentage: "65%" },
    { name: "Attaques DDoS", percentage: "45%" },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-50 via-background to-orange-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                  <span className="text-primary font-semibold">Cybersécurité</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                  Protection Complète
                  <span className="text-primary block">Contre les Menaces</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 text-pretty">
                  Sécurisez votre entreprise avec nos solutions de cybersécurité avancées. Audit, protection, formation
                  et surveillance pour une sécurité optimale.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <Link href="/contact">
                      Audit sécurité gratuit
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/services">Tous nos services</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-foreground mb-6">Menaces les plus courantes</h3>
                  <div className="space-y-4">
                    {threats.map((threat, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm font-medium text-foreground">{threat.name}</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                            <div className="h-full bg-primary rounded-full" style={{ width: threat.percentage }} />
                          </div>
                          <span className="text-sm font-bold text-primary">{threat.percentage}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                Nos Services de Cybersécurité
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                Une approche complète pour protéger votre entreprise contre toutes les menaces
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                        <CardDescription>{service.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
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

        {/* Stats & CTA */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                La Cybersécurité en Chiffres
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <div className="text-muted-foreground">des cyberattaques sont évitables</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">4.45M€</div>
                <div className="text-muted-foreground">coût moyen d'une violation</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">287 jours</div>
                <div className="text-muted-foreground">temps moyen de détection</div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border text-center">
              <h3 className="text-2xl font-bold text-card-foreground mb-4">
                Ne laissez pas votre entreprise vulnérable
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Contactez-nous pour un audit de sécurité gratuit et découvrez comment protéger efficacement votre
                entreprise.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">
                  Planifier un audit gratuit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
