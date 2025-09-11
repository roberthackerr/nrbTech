import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Smartphone, Globe, Database, Layers, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function DevelopmentPage() {
  const services = [
    {
      icon: Globe,
      title: "Applications Web",
      description: "Sites web et applications web modernes et performantes",
      features: ["React, Next.js, Vue.js", "Design responsive", "Performance optimisée", "SEO intégré"],
    },
    {
      icon: Smartphone,
      title: "Applications Mobile",
      description: "Apps natives et hybrides pour iOS et Android",
      features: ["React Native, Flutter", "Interface intuitive", "Performance native", "Publication stores"],
    },
    {
      icon: Database,
      title: "Systèmes sur Mesure",
      description: "Solutions logicielles personnalisées pour votre métier",
      features: ["Architecture scalable", "Base de données optimisée", "Sécurité renforcée", "Documentation complète"],
    },
    {
      icon: Layers,
      title: "Intégrations API",
      description: "Connexion et synchronisation de vos systèmes",
      features: ["APIs REST/GraphQL", "Microservices", "Synchronisation temps réel", "Monitoring avancé"],
    },
  ]

  const technologies = [
    { name: "React/Next.js", category: "Frontend", color: "bg-blue-500" },
    { name: "Node.js", category: "Backend", color: "bg-green-500" },
    { name: "Python/Django", category: "Backend", color: "bg-yellow-500" },
    { name: "React Native", category: "Mobile", color: "bg-purple-500" },
    { name: "PostgreSQL", category: "Database", color: "bg-indigo-500" },
    { name: "AWS/Azure", category: "Cloud", color: "bg-orange-500" },
  ]

  const process = [
    { step: "1", title: "Analyse", description: "Étude de vos besoins et spécifications" },
    { step: "2", title: "Conception", description: "Architecture et maquettes détaillées" },
    { step: "3", title: "Développement", description: "Codage avec méthodologie agile" },
    { step: "4", title: "Tests", description: "Tests complets et validation qualité" },
    { step: "5", title: "Déploiement", description: "Mise en production et formation" },
    { step: "6", title: "Maintenance", description: "Support continu et évolutions" },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 via-background to-emerald-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Code className="h-8 w-8 text-primary" />
                  <span className="text-primary font-semibold">Développement</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                  Applications
                  <span className="text-primary block">Sur Mesure</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 text-pretty">
                  Créons ensemble les solutions digitales qui propulseront votre entreprise. Applications web, mobile et
                  systèmes personnalisés avec les dernières technologies.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <Link href="/contact">
                      Devis gratuit
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/services">Tous nos services</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-foreground mb-6">Technologies Maîtrisées</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {technologies.map((tech, index) => (
                      <div key={index} className="flex items-center space-x-2 bg-background/80 rounded-lg p-3">
                        <div className={`w-3 h-3 rounded-full ${tech.color}`} />
                        <div>
                          <div className="text-sm font-medium text-foreground">{tech.name}</div>
                          <div className="text-xs text-muted-foreground">{tech.category}</div>
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
                Nos Services de Développement
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                Du concept à la mise en production, nous accompagnons tous vos projets digitaux
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

        {/* Process */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                Notre Processus de Développement
              </h2>
              <p className="text-xl text-muted-foreground text-pretty">
                Une méthodologie éprouvée pour garantir le succès de votre projet
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((item, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-primary-foreground font-bold">{item.step}</span>
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <div className="bg-card rounded-2xl p-8 border border-border max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-card-foreground mb-4">Prêt à démarrer votre projet ?</h3>
                <p className="text-muted-foreground mb-6">
                  Discutons de vos besoins et recevez un devis personnalisé sous 48h
                </p>
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Demander un devis
                    <ArrowRight className="ml-2 h-5 w-5" />
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
