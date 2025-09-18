import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Award, Shield, ArrowRight, CheckCircle, Star, Building } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: "Excellence",
      description:
        "Nous visons l'excellence dans chaque projet, en utilisant les meilleures pratiques et technologies.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Nous travaillons en étroite collaboration avec nos clients pour comprendre leurs besoins uniques.",
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Nous restons à la pointe de la technologie pour offrir des solutions innovantes et performantes.",
    },
    {
      icon: Award,
      title: "Intégrité",
      description: "Transparence, honnêteté et respect des engagements sont au cœur de notre approche.",
    },
  ]

  const team = [
    {
      name: "Herifaratahina Robertolinos",
      role: "CEO & Fondateur",
      expertise: "Stratégie Tech & Leadership",
      experience: "3+ ans",
    },
    {
      name: "Herllandys Amoros Christy",
      role: "CTO",
      expertise: "Architecture & Développement",
      experience: "2+ ans",
    },
    // {
    //   name: "Thomas Chen",
    //   role: "Directeur Cybersécurité",
    //   expertise: "Sécurité & Conformité",
    //   experience: "10+ ans",
    // },
  ]

  const achievements = [
    { metric: "50+", label: "Projets réalisés" },
    { metric: "10+", label: "Clients satisfaits" },
    { metric: "2 ans", label: "D'expérience" },
    { metric: "99.9%", label: "Disponibilité" },
  ]

  const certifications = [
    "ISO 27001 - Management de la sécurité",
    "RGPD - Protection des données",
    "Cisco Partner - Solutions réseau",
    "Microsoft Partner - Cloud Azure",
    "AWS Partner - Services cloud",
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
                À propos de
                <span className="text-primary block">NRBTech</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
                Depuis 2024, nous accompagnons les entreprises dans leur transformation digitale avec des solutions
                technologiques innovantes et sur mesure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Travaillons ensemble
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/services">Découvrir nos services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">Notre Mission</h2>
                <p className="text-lg text-muted-foreground mb-6 text-pretty">
                  Démocratiser l'accès aux technologies avancées pour toutes les entreprises, quelle que soit leur
                  taille. Nous croyons que chaque organisation mérite des solutions technologiques de qualité
                  entreprise.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Accompagner la transformation digitale des entreprises
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Sécuriser les infrastructures et les données</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Optimiser les performances et réduire les coûts</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <Card key={index} className="text-center">
                    <CardContent className="pt-6">
                      <div className="text-3xl font-bold text-primary mb-2">{achievement.metric}</div>
                      <div className="text-sm text-muted-foreground">{achievement.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Nos Valeurs</h2>
              <p className="text-xl text-muted-foreground text-pretty">
                Les principes qui guident notre approche et nos relations clients
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm text-pretty">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Notre Équipe</h2>
              <p className="text-xl text-muted-foreground text-pretty">
                Des experts passionnés au service de votre réussite
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-10 w-10 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <Badge variant="secondary">{member.expertise}</Badge>
                      <p className="text-sm text-muted-foreground">{member.experience}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                  Certifications & Partenariats
                </h2>
                <p className="text-lg text-muted-foreground mb-8 text-pretty">
                  Nos certifications garantissent la qualité de nos services et notre conformité aux standards les plus
                  exigeants de l'industrie.
                </p>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Star className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <Building className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">Entreprise Française</h3>
                    <p className="text-sm text-muted-foreground">
                      Basée à Madagascar, nous respectons la réglementation Malgache
                    </p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">Sécurité Garantie</h3>
                    <p className="text-sm text-muted-foreground">Conformité RGPD et standards de sécurité</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Prêt à démarrer votre projet ?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Contactez-nous pour discuter de vos besoins et découvrir comment nous pouvons vous aider à atteindre vos
              objectifs technologiques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Demander un devis gratuit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/dashboard">Voir nos réalisations</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
