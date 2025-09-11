import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Cpu, Brain, Bot, BarChart3, Zap, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function AIPage() {
  const solutions = [
    {
      icon: Brain,
      title: "IA Personnalisée",
      description: "Développement de solutions d'intelligence artificielle sur mesure",
      features: ["Analyse de besoins spécifiques", "Algorithmes personnalisés", "Intégration système existant"],
    },
    {
      icon: Zap,
      title: "Automatisation",
      description: "Automatisation intelligente de vos processus métier",
      features: ["RPA avancé", "Workflows intelligents", "Optimisation continue"],
    },
    {
      icon: BarChart3,
      title: "Analyse Prédictive",
      description: "Machine learning pour anticiper et optimiser vos décisions",
      features: ["Modèles prédictifs", "Analyse de données", "Tableaux de bord IA"],
    },
    {
      icon: Bot,
      title: "Chatbots & Assistants",
      description: "Assistants virtuels intelligents pour votre entreprise",
      features: ["Chatbots conversationnels", "Support client 24/7", "Intégration multicanal"],
    },
  ]

  const useCases = [
    {
      industry: "E-commerce",
      application: "Recommandations personnalisées",
      benefit: "+35% de conversion",
    },
    {
      industry: "Finance",
      application: "Détection de fraude",
      benefit: "99.8% de précision",
    },
    {
      industry: "Logistique",
      application: "Optimisation des routes",
      benefit: "-25% de coûts",
    },
    {
      industry: "RH",
      application: "Tri automatique des CV",
      benefit: "80% de temps économisé",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-50 via-background to-pink-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Cpu className="h-8 w-8 text-primary" />
                  <span className="text-primary font-semibold">Intelligence Artificielle</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                  Solutions IA
                  <span className="text-primary block">Personnalisées</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 text-pretty">
                  Transformez votre entreprise avec l'intelligence artificielle. Automatisation, analyse prédictive et
                  solutions sur mesure pour optimiser vos performances.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <Link href="/contact">
                      Consultation IA gratuite
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/services">Tous nos services</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-8">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-background/80 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-primary">85%</div>
                      <div className="text-sm text-muted-foreground">Gain productivité</div>
                    </div>
                    <div className="bg-background/80 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-primary">60%</div>
                      <div className="text-sm text-muted-foreground">Réduction coûts</div>
                    </div>
                    <div className="bg-background/80 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-primary">24/7</div>
                      <div className="text-sm text-muted-foreground">Disponibilité</div>
                    </div>
                    <div className="bg-background/80 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-primary">ROI</div>
                      <div className="text-sm text-muted-foreground">Mesurable</div>
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
                Nos Solutions d'Intelligence Artificielle
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                De l'automatisation simple aux algorithmes complexes, nous créons l'IA qui correspond à vos besoins
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

        {/* Use Cases */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Cas d'Usage Concrets</h2>
              <p className="text-xl text-muted-foreground text-pretty">
                Découvrez comment l'IA transforme différents secteurs d'activité
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((useCase, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-primary">{useCase.industry}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">{useCase.application}</p>
                    <div className="text-2xl font-bold text-foreground">{useCase.benefit}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Discuter de votre projet IA
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
