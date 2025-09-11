import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Briefcase, Mail, ArrowRight } from "lucide-react"

export default function CareersPage() {
  const jobs = [
    {
      title: "Développeur Full-Stack Senior",
      department: "Développement",
      location: "Paris / Remote",
      type: "CDI",
      experience: "5+ ans",
      description:
        "Rejoignez notre équipe pour développer des applications web innovantes avec React, Node.js et les dernières technologies cloud.",
      skills: ["React", "Node.js", "TypeScript", "AWS", "Docker"],
      salary: "55-70k€",
    },
    {
      title: "Expert Cybersécurité",
      department: "Cybersécurité",
      location: "Lyon / Hybride",
      type: "CDI",
      experience: "3+ ans",
      description:
        "Menez des audits de sécurité, implémentez des solutions de protection et accompagnez nos clients dans leur sécurisation.",
      skills: ["Pentest", "CISSP", "ISO 27001", "SIEM", "Forensic"],
      salary: "50-65k€",
    },
    {
      title: "Ingénieur IA/ML",
      department: "Intelligence Artificielle",
      location: "Remote",
      type: "CDI",
      experience: "4+ ans",
      description:
        "Développez des modèles d'IA avancés et des solutions de machine learning pour nos clients dans divers secteurs.",
      skills: ["Python", "TensorFlow", "PyTorch", "MLOps", "Computer Vision"],
      salary: "60-75k€",
    },
    {
      title: "Architecte Télécoms",
      department: "Télécommunications",
      location: "Marseille",
      type: "CDI",
      experience: "7+ ans",
      description: "Concevez et déployez des infrastructures télécoms de nouvelle génération, incluant la 5G et l'IoT.",
      skills: ["5G", "Network Design", "Cisco", "Huawei", "IoT"],
      salary: "65-80k€",
    },
    {
      title: "Consultant Junior",
      department: "Conseil",
      location: "Multi-sites",
      type: "CDI",
      experience: "0-2 ans",
      description:
        "Accompagnez nos consultants seniors dans l'analyse des besoins clients et la mise en œuvre de solutions tech.",
      skills: ["Analyse", "Communication", "Gestion de projet", "Curiosité"],
      salary: "35-45k€",
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote",
      type: "CDI",
      experience: "3+ ans",
      description:
        "Automatisez les déploiements, gérez l'infrastructure cloud et optimisez les performances de nos applications.",
      skills: ["Kubernetes", "Terraform", "CI/CD", "Monitoring", "Cloud"],
      salary: "50-65k€",
    },
  ]

  const benefits = [
    {
      icon: "💰",
      title: "Salaire Attractif",
      description: "Rémunération compétitive avec primes de performance",
    },
    {
      icon: "🏠",
      title: "Télétravail Flexible",
      description: "Jusqu'à 3 jours de télétravail par semaine",
    },
    {
      icon: "📚",
      title: "Formation Continue",
      description: "Budget formation de 3000€/an et certifications prises en charge",
    },
    {
      icon: "🎯",
      title: "Projets Innovants",
      description: "Travaillez sur des technologies de pointe avec des clients prestigieux",
    },
    {
      icon: "🌟",
      title: "Évolution Rapide",
      description: "Opportunités d'évolution et de prise de responsabilités",
    },
    {
      icon: "🎉",
      title: "Ambiance Conviviale",
      description: "Équipe jeune, dynamique avec événements réguliers",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Rejoignez NRBTech
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Construisez l'avenir de la technologie avec une équipe passionnée et des projets qui comptent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Voir les Offres
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg">
              Candidature Spontanée
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Pourquoi Nous Rejoindre ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="text-center bg-card/50 backdrop-blur border-border/50 hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Offres d'Emploi</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {jobs.map((job, index) => (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur border-border/50 hover:shadow-xl transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{job.title}</CardTitle>
                    <Badge variant="secondary">{job.department}</Badge>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {job.type}
                    </div>
                    <div className="flex items-center">
                      <Briefcase className="h-4 w-4 mr-1" />
                      {job.experience}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{job.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Compétences requises :</h4>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="bg-primary/10 text-primary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-primary">{job.salary}</span>
                    <Button asChild>
                      <a href={`mailto:careers@nrbtech.com?subject=Candidature ${job.title}`}>
                        <Mail className="h-4 w-4 mr-2" />
                        Postuler
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-primary/10 to-blue-600/10 border-primary/20">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Vous ne trouvez pas le poste idéal ?</h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Envoyez-nous votre candidature spontanée, nous sommes toujours à la recherche de talents exceptionnels.
              </p>
              <Button size="lg" asChild>
                <a href="mailto:careers@nrbtech.com?subject=Candidature Spontanée">
                  <Mail className="h-5 w-5 mr-2" />
                  Candidature Spontanée
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
