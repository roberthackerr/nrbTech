import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github } from "lucide-react"
import Image from "next/image"
import { Navigation } from "@/components/navigation"

export default function TeamPage() {
  const team = [
    {
      name: "RAZAFIMANDIMBY Tojo Herifaratahina Robertolinos",
      role: "CEO & Fondateur",
      bio: "Expert en télécommunications et informatique avec plus de 3 ans d'expérience dans l'industrie tech.",
      image: "/Robertolinos.jpg",
      skills: ["Leadership", "Stratégie", "Télécoms", "Innovation","Informatique"],
      email: "tojolinos@gmail.com",
      linkedin: "#",
      github: "#",
    },
       {
      name: "RAZAFIMANDIMBY Herllandys Amoros Christy",
      role: "Developer Fullstack",
      bio: "Web, Desktop and Mobile Developer",
      image: "/amoros.jpg",
      skills: ["Next js", "Node js","Express js","React js","JavaFX" , "PostgreSQL","UI / UX Design","Tailwind CSS"],
      email: "herllandysamoroschristy@gmail.com",
      linkedin: "https://www.linkedin.com/in/herllandys-amoros-christy-razafimandimby",
      github: "#",
    },
    {
      name: "RASOLOMANDIMBY Tafita Nantenaina",
      role: "Developer",
      bio: "Web Developer et expert en Télécommunication ",
      image: "/Nantenaina.jpg",
      skills: ["Télécoms","Informatique"],
      email: "tafitanantenaina.ras@gmail.com",
      linkedin: "#",
      github: "#",
    },
    {
      name: "RAMAROSON Sitrakiniaina Mbolatiana",
      role: " Developer Python",
      bio: "Web Developer et expert en Télécommunication ",
      image: "/ai-developer-portrait.png",
      skills: ["Html","Css","Python","Mysql","MERN"],
      email: "",
      linkedin: "#",
      github: "#",
    },
    {
      name: "RANJANIRINA Rahaja",
      role: "Developer PHP",
      bio: "Web Developer",
      image: "/Rahaja.jpg",
      skills: ["Html","Css","Laravel","Python","Mysql","Sql"],
      email: "rahaja.ranjanirina@gmail.com",
      linkedin: "#",
      github: "#",
    }
  ]

  return (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
          <Navigation />
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Notre Équipe
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Rencontrez les experts passionnés qui font de NRBTech un leader dans les solutions technologiques
            innovantes.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur border-border/50"
              >
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative w-32 h-32 mb-6">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        fill
                        className="rounded-full object-cover border-4 border-primary/20"
                      />
                    </div>

                    <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                    <p className="text-primary font-semibold mb-4">{member.role}</p>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{member.bio}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {member.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="bg-primary/10 text-primary">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex space-x-4">
                      <Button variant="outline" size="sm" asChild>
                        <a href={`mailto:${member.email}`}>
                          <Mail className="h-4 w-4 mr-2" />
                          Email
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-4 w-4 mr-2" />
                          LinkedIn
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href={member.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          GitHub
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-to-r from-primary/10 to-blue-600/10 border-primary/20">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-4">Rejoignez Notre Équipe</h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Nous recherchons constamment des talents exceptionnels pour renforcer notre équipe.
              </p>
              <Button size="lg" asChild>
                <a href="/careers">Voir les Opportunités</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
    </div>
  )
}
