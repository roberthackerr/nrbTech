import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Quote, Users, TrendingUp, Shield, Zap } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Marie Dubois",
    position: "Directrice Technique",
    company: "TechMart Solutions",
    avatar: "/marie-dubois-avatar.jpg",
    rating: 5,
    service: "Développement Web",
    project: "Plateforme E-commerce",
    testimonial:
      "NRBTech a complètement transformé notre présence en ligne. Leur équipe a non seulement livré une plateforme e-commerce exceptionnelle, mais a aussi fourni un support continu remarquable. Les résultats parlent d'eux-mêmes : +300% de ventes en ligne !",
    results: ["300% d'augmentation des ventes", "50% de réduction du temps de traitement", "99.9% de disponibilité"],
    date: "Mars 2024",
  },
  {
    id: 2,
    name: "Jean-Pierre Martin",
    position: "CEO",
    company: "Telecom Innovate",
    avatar: "/placeholder-qyrq1.png",
    rating: 5,
    service: "Télécommunications",
    project: "Infrastructure 5G",
    testimonial:
      "L'expertise de NRBTech en télécommunications est impressionnante. Ils ont déployé notre infrastructure 5G en respectant les délais et le budget, tout en dépassant nos attentes en termes de performance. Une équipe vraiment professionnelle.",
    results: ["95% de couverture urbaine", "40% moins d'interruptions", "60% d'amélioration de vitesse"],
    date: "Janvier 2024",
  },
  {
    id: 3,
    name: "Sophie Laurent",
    position: "CISO",
    company: "SecureBank Corp",
    avatar: "/placeholder-zw2aw.png",
    rating: 5,
    service: "Cybersécurité",
    project: "Système de Sécurité IA",
    testimonial:
      "La solution de cybersécurité basée sur l'IA développée par NRBTech a révolutionné notre approche de la sécurité. La détection proactive des menaces et la réduction drastique des faux positifs nous ont permis de renforcer considérablement notre posture sécuritaire.",
    results: ["99.8% de détection des menaces", "70% moins de faux positifs", "< 2min de temps de réponse"],
    date: "Février 2024",
  },
  {
    id: 4,
    name: "Ahmed Ben Ali",
    position: "Directeur Innovation",
    company: "Smart Industries",
    avatar: "/ahmed-ben-ali-avatar.jpg",
    rating: 5,
    service: "Intelligence Artificielle",
    project: "Système de Prédiction IoT",
    testimonial:
      "NRBTech a développé pour nous un système IoT intelligent qui prédit les pannes d'équipement avec une précision remarquable. Cela nous a permis de passer d'une maintenance corrective à une maintenance prédictive, générant des économies substantielles.",
    results: ["85% de réduction des pannes", "40% d'économies maintenance", "95% de précision prédictive"],
    date: "Avril 2024",
  },
]

const stats = [
  { icon: Users, label: "Clients Satisfaits", value: "150+" },
  { icon: TrendingUp, label: "Projets Réussis", value: "200+" },
  { icon: Shield, label: "Taux de Satisfaction", value: "98%" },
  { icon: Zap, label: "Années d'Expérience", value: "10+" },
]

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Témoignages Clients
            </h1>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              Découvrez ce que nos clients disent de leur expérience avec NRBTech et les résultats exceptionnels que
              nous avons obtenus ensemble
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id} className="p-8 hover-lift">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4 mb-6">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={80}
                        height={80}
                        className="rounded-full"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                          <Badge variant="outline">{testimonial.service}</Badge>
                        </div>
                        <p className="text-muted-foreground text-sm">{testimonial.position}</p>
                        <p className="text-muted-foreground text-sm">{testimonial.company}</p>
                        <div className="flex items-center gap-1 mt-2">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                          <span className="text-sm text-muted-foreground ml-2">{testimonial.date}</span>
                        </div>
                      </div>
                    </div>

                    <div className="relative mb-6">
                      <Quote className="h-8 w-8 text-primary/20 absolute -top-2 -left-2" />
                      <p className="text-muted-foreground leading-relaxed pl-6">{testimonial.testimonial}</p>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm">Résultats Obtenus :</h4>
                      <div className="space-y-2">
                        {testimonial.results.map((result, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm">
                            <div className="h-1.5 w-1.5 bg-primary rounded-full" />
                            <span className="text-muted-foreground">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-primary">Projet: {testimonial.project}</span>
                        <Badge variant="secondary" className="text-xs">
                          {testimonial.service}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-accent">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Rejoignez Nos Clients Satisfaits</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Faites confiance à notre expertise pour transformer vos défis technologiques en succès mesurables
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Demander un Devis Gratuit
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
              >
                Planifier une Consultation
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
