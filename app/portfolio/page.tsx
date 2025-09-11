import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Calendar, Users, Award } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Plateforme E-commerce Sécurisée",
    client: "TechMart Solutions",
    category: "Développement Web",
    duration: "6 mois",
    team: "8 développeurs",
    description:
      "Développement d'une plateforme e-commerce complète avec système de paiement sécurisé, gestion d'inventaire en temps réel et interface d'administration avancée.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
    results: [
      "Augmentation de 300% des ventes en ligne",
      "Réduction de 50% du temps de traitement des commandes",
      "99.9% de disponibilité système",
    ],
    image: "/modern-ecommerce-dashboard.png",
    testimonial:
      "NRBTech a transformé notre vision en réalité. Leur expertise technique et leur approche collaborative ont dépassé nos attentes.",
    clientLogo: "/techmart-logo.jpg",
  },
  {
    id: 2,
    title: "Infrastructure 5G Intelligente",
    client: "Telecom Innovate",
    category: "Télécommunications",
    duration: "12 mois",
    team: "15 ingénieurs",
    description:
      "Déploiement d'une infrastructure 5G avec optimisation IA pour la gestion automatique du trafic et la prédiction des pannes.",
    technologies: ["5G Core", "Kubernetes", "TensorFlow", "OpenStack", "Prometheus"],
    results: [
      "Couverture 5G étendue à 95% de la zone urbaine",
      "Réduction de 40% des interruptions de service",
      "Amélioration de 60% de la vitesse de connexion",
    ],
    image: "/5g-network-infrastructure-towers.jpg",
    testimonial:
      "L'expertise de NRBTech en télécommunications nous a permis de devancer la concurrence avec notre réseau 5G.",
    clientLogo: "/telecom-innovate-logo.jpg",
  },
  {
    id: 3,
    title: "Système de Cybersécurité IA",
    client: "SecureBank Corp",
    category: "Cybersécurité",
    duration: "8 mois",
    team: "12 experts",
    description:
      "Implémentation d'un système de détection d'intrusion basé sur l'IA avec analyse comportementale et réponse automatique aux menaces.",
    technologies: ["Python", "TensorFlow", "Elasticsearch", "Splunk", "SIEM"],
    results: [
      "Détection de 99.8% des tentatives d'intrusion",
      "Réduction de 70% des faux positifs",
      "Temps de réponse aux incidents < 2 minutes",
    ],
    image: "/cybersecurity-ai-dashboard-with-threat-detection.jpg",
    testimonial: "Grâce à NRBTech, notre sécurité informatique est maintenant à la pointe de la technologie.",
    clientLogo: "/securebank-logo.png",
  },
]

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Nos Réalisations
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Découvrez comment nous avons aidé nos clients à transformer leurs défis technologiques en succès
                mesurables
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <Badge variant="secondary" className="px-4 py-2">
                  50+ Projets Réalisés
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  98% Satisfaction Client
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  4 Domaines d'Expertise
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="space-y-20">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
                >
                  <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <div className="space-y-4">
                      <Badge variant="outline" className="w-fit">
                        {project.category}
                      </Badge>
                      <h2 className="text-3xl font-bold">{project.title}</h2>
                      <p className="text-lg text-muted-foreground">{project.description}</p>
                    </div>

                    <div className="grid grid-cols-3 gap-4 py-6 border-y">
                      <div className="text-center">
                        <Calendar className="h-6 w-6 mx-auto mb-2 text-primary" />
                        <p className="text-sm font-medium">{project.duration}</p>
                        <p className="text-xs text-muted-foreground">Durée</p>
                      </div>
                      <div className="text-center">
                        <Users className="h-6 w-6 mx-auto mb-2 text-primary" />
                        <p className="text-sm font-medium">{project.team}</p>
                        <p className="text-xs text-muted-foreground">Équipe</p>
                      </div>
                      <div className="text-center">
                        <Award className="h-6 w-6 mx-auto mb-2 text-primary" />
                        <p className="text-sm font-medium">{project.client}</p>
                        <p className="text-xs text-muted-foreground">Client</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold">Technologies Utilisées</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold">Résultats Obtenus</h3>
                      <ul className="space-y-2">
                        {project.results.map((result, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <div className="h-2 w-2 bg-primary rounded-full" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-muted/50 p-6 rounded-lg">
                      <p className="italic mb-4">"{project.testimonial}"</p>
                      <div className="flex items-center gap-4">
                        <Image
                          src={project.clientLogo || "/placeholder.svg"}
                          alt={`${project.client} logo`}
                          width={120}
                          height={60}
                          className="opacity-70"
                        />
                      </div>
                    </div>
                  </div>

                  <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                    <div className="relative group">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="rounded-lg shadow-2xl group-hover:shadow-3xl transition-all duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-accent">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Prêt à Démarrer Votre Projet ?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Rejoignez nos clients satisfaits et transformez vos idées en solutions technologiques innovantes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Demander un Devis
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Voir Plus de Projets
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
