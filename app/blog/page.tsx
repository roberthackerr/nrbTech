import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, User, ArrowRight, Search, TrendingUp } from "lucide-react"
import Image from "next/image"

const blogPosts = [
  {
    id: 1,
    title: "L'Intelligence Artificielle Transforme la Cybersécurité en 2024",
    excerpt: "Découvrez comment l'IA révolutionne la détection des menaces et la protection des données d'entreprise.",
    content: "L'intelligence artificielle redéfinit les standards de la cybersécurité moderne...",
    author: "Sophie Laurent",
    date: "15 Mars 2024",
    readTime: "8 min",
    category: "Cybersécurité",
    tags: ["IA", "Sécurité", "Innovation"],
    image: "/cybersecurity-ai-dashboard-with-threat-detection.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "5G et IoT : L'Avenir des Télécommunications",
    excerpt: "Comment la 5G accélère l'adoption de l'IoT et transforme les industries.",
    content: "La convergence entre la 5G et l'Internet des Objets ouvre de nouvelles possibilités...",
    author: "Jean-Pierre Martin",
    date: "10 Mars 2024",
    readTime: "6 min",
    category: "Télécommunications",
    tags: ["5G", "IoT", "Connectivité"],
    image: "/5g-network-infrastructure-towers.jpg",
    featured: false,
  },
  {
    id: 3,
    title: "Développement Low-Code : Révolution ou Évolution ?",
    excerpt: "Analyse des plateformes low-code et leur impact sur le développement d'applications.",
    content: "Les plateformes de développement low-code gagnent en popularité...",
    author: "Ahmed Ben Ali",
    date: "5 Mars 2024",
    readTime: "10 min",
    category: "Développement",
    tags: ["Low-Code", "Productivité", "Innovation"],
    image: "/modern-ecommerce-dashboard.png",
    featured: false,
  },
  {
    id: 4,
    title: "Edge Computing : Rapprocher l'Intelligence des Données",
    excerpt: "Pourquoi l'edge computing devient essentiel pour les applications temps réel.",
    content: "L'edge computing transforme la façon dont nous traitons les données...",
    author: "Marie Dubois",
    date: "1 Mars 2024",
    readTime: "7 min",
    category: "Infrastructure",
    tags: ["Edge Computing", "Performance", "IoT"],
    image: "/iot-smart-home-mobile-app-interface.jpg",
    featured: false,
  },
]

const categories = ["Tous", "Cybersécurité", "Télécommunications", "Développement", "IA", "Infrastructure"]

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Blog & Actualités
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Restez informé des dernières tendances technologiques et découvrez nos insights d'experts
              </p>

              {/* Search Bar */}
              <div className="max-w-md mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input placeholder="Rechercher un article..." className="pl-10" />
                </div>
              </div>

              {/* Categories */}
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                  <Badge
                    key={category}
                    variant={category === "Tous" ? "default" : "secondary"}
                    className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
                <TrendingUp className="h-8 w-8 text-primary" />
                Article à la Une
              </h2>
            </div>

            {blogPosts
              .filter((post) => post.featured)
              .map((post) => (
                <Card key={post.id} className="overflow-hidden hover-lift mb-12">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="relative h-64 lg:h-auto">
                      <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                      <Badge className="absolute top-4 left-4 bg-primary">{post.category}</Badge>
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {post.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {post.readTime}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{post.title}</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                          {post.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <Button>
                          Lire l'Article
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Derniers Articles</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts
                .filter((post) => !post.featured)
                .map((post) => (
                  <Card key={post.id} className="overflow-hidden hover-lift">
                    <div className="relative h-48">
                      <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                      <Badge className="absolute top-4 left-4 bg-primary/90">{post.category}</Badge>
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {post.date}
                        </div>
                      </div>
                      <CardTitle className="text-lg leading-tight">{post.title}</CardTitle>
                      <CardDescription>{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex gap-1">
                          {post.tags.slice(0, 2).map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </div>
                      </div>
                      <Button variant="ghost" className="w-full mt-4 justify-between">
                        Lire la Suite
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-gradient-to-r from-primary to-accent">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Restez Informé</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Recevez nos derniers articles et insights directement dans votre boîte mail
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <Input
                placeholder="Votre adresse email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
              />
              <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">
                S'abonner
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
