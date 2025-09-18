"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Plateforme E-commerce Sécurisée",
    description:
      "Solution complète de commerce électronique avec système de paiement intégré et protection anti-fraude avancée.",
    image: "/modern-ecommerce-dashboard.png",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
    category: "Développement Web",
    client: "RetailTech Solutions",
    duration: "4 mois",
  },
  {
    id: 2,
    title: "Infrastructure Réseau 5G",
    description:
      "Déploiement d'infrastructure 5G pour opérateur télécom avec optimisation de couverture et gestion intelligente du trafic.",
    image: "/5g-network-infrastructure-towers.jpg",
    technologies: ["5G", "SDN", "NFV", "Kubernetes", "OpenStack"],
    category: "Télécommunications",
    client: "TelecomCorp",
    duration: "8 mois",
  },
  {
    id: 3,
    title: "Système de Détection d'Intrusion IA",
    description:
      "Solution de cybersécurité basée sur l'IA pour détecter et prévenir les menaces en temps réel avec analyse comportementale.",
    image: "/cybersecurity-ai-dashboard-with-threat-detection.jpg",
    technologies: ["Python", "TensorFlow", "Elasticsearch", "Kibana", "Docker"],
    category: "Cybersécurité",
    client: "SecureBank",
    duration: "6 mois",
  },
  {
    id: 4,
    title: "Assistant IA Conversationnel",
    description:
      "Chatbot intelligent multilingue avec traitement du langage naturel pour service client automatisé 24/7.",
    image: "/ai-chatbot-interface-conversation.jpg",
    technologies: ["GPT-4", "Python", "FastAPI", "Redis", "WebSocket"],
    category: "Intelligence Artificielle",
    client: "CustomerFirst",
    duration: "3 mois",
  },
  {
    id: 5,
    title: "Application Mobile IoT",
    description:
      "Application de contrôle et monitoring d'objets connectés pour la domotique avec interface intuitive et sécurisée.",
    image: "/iot-smart-home-mobile-app-interface.jpg",
    technologies: ["React Native", "MQTT", "InfluxDB", "Node.js", "Firebase"],
    category: "Développement Mobile",
    client: "SmartHome Inc",
    duration: "5 mois",
  },
  {
    id: 6,
    title: "Plateforme Analytics Big Data",
    description:
      "Solution d'analyse de données massives en temps réel avec tableaux de bord interactifs et prédictions IA.",
    image: "/big-data-analytics-dashboard-charts.jpg",
    technologies: ["Apache Spark", "Kafka", "Hadoop", "D3.js", "Python"],
    category: "Data Science",
    client: "DataCorp Analytics",
    duration: "7 mois",
  },
]

export function ProjectsSection() {
  return (
    <section className="py-24 from-background via-background to-muted bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-balance">Nos Réalisations</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            Découvrez quelques-uns de nos projets les plus innovants qui ont transformé les activités de nos clients
            dans différents secteurs technologiques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 shadow-lg overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Badge className="absolute top-4 left-4 bg-blue-600 hover:bg-blue-700 text-white">
                  {project.category}
                </Badge>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="font-medium">Client:</span>
                    <span className="ml-2">{project.client}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="font-medium">Durée:</span>
                    <span className="ml-2">{project.duration}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs bg-blue-50 text-blue-700 hover:bg-blue-100"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-600">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>

                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" variant="outline" className="flex-1 text-xs bg-transparent">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Voir le projet
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 text-xs bg-transparent">
                    <Github className="w-3 h-3 mr-1" />
                    Code source
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
            Voir tous nos projets
          </Button>
        </div>
      </div>
    </section>
  )
}
