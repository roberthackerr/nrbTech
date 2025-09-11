import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Check, ArrowRight, Calculator, Clock, Users, Zap } from "lucide-react"

const pricingPlans = [
  {
    name: "Consultation",
    price: "Gratuit",
    description: "Évaluation initiale de vos besoins",
    features: [
      "Analyse de vos besoins",
      "Recommandations personnalisées",
      "Estimation budgétaire",
      "Roadmap technique",
      "Support par email",
    ],
    cta: "Réserver une Consultation",
    popular: false,
  },
  {
    name: "Projet Standard",
    price: "À partir de 15 000€",
    description: "Pour les projets de taille moyenne",
    features: [
      "Développement sur mesure",
      "Tests et validation",
      "Documentation complète",
      "Formation utilisateurs",
      "Support 3 mois inclus",
      "Maintenance préventive",
    ],
    cta: "Demander un Devis",
    popular: true,
  },
  {
    name: "Projet Enterprise",
    price: "Sur mesure",
    description: "Solutions complexes et intégrations",
    features: [
      "Architecture sur mesure",
      "Intégrations multiples",
      "Sécurité renforcée",
      "Support 24/7",
      "SLA garantis",
      "Équipe dédiée",
      "Maintenance évolutive",
    ],
    cta: "Nous Contacter",
    popular: false,
  },
]

const services = [
  { name: "Développement Web", basePrice: "8 000€", icon: "💻" },
  { name: "Application Mobile", basePrice: "12 000€", icon: "📱" },
  { name: "Système IoT", basePrice: "20 000€", icon: "🌐" },
  { name: "Solution IA", basePrice: "25 000€", icon: "🤖" },
  { name: "Infrastructure Cloud", basePrice: "15 000€", icon: "☁️" },
  { name: "Cybersécurité", basePrice: "18 000€", icon: "🔒" },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Tarifs & Devis
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Des solutions technologiques adaptées à votre budget. Transparence et flexibilité pour tous vos projets
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2">
                <Calculator className="mr-2 h-4 w-4" />
                Devis Gratuit
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <Clock className="mr-2 h-4 w-4" />
                Réponse 24h
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <Users className="mr-2 h-4 w-4" />
                Équipe Dédiée
              </Badge>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Formules</h2>
              <p className="text-xl text-muted-foreground">Choisissez la formule qui correspond à vos besoins</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <Card
                  key={index}
                  className={`relative ${plan.popular ? "border-primary shadow-lg scale-105" : ""} hover-lift`}
                >
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                      Plus Populaire
                    </Badge>
                  )}
                  <CardHeader className="text-center pb-8">
                    <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                    <div className="text-4xl font-bold text-primary mb-2">{plan.price}</div>
                    <CardDescription>{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <Check className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full ${plan.popular ? "bg-primary hover:bg-primary/90" : ""}`}
                      variant={plan.popular ? "default" : "outline"}
                    >
                      {plan.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Pricing */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Tarifs par Service</h2>
              <p className="text-xl text-muted-foreground">Prix indicatifs pour nos principaux services</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <Card key={index} className="text-center hover-lift">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                    <div className="text-2xl font-bold text-primary mb-4">À partir de {service.basePrice}</div>
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      Demander un Devis
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Form */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Demande de Devis Personnalisé</h2>
                <p className="text-xl text-muted-foreground">
                  Décrivez votre projet et recevez un devis détaillé sous 24h
                </p>
              </div>

              <Card className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="company">Entreprise *</Label>
                      <Input id="company" placeholder="Nom de votre entreprise" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact">Contact *</Label>
                      <Input id="contact" placeholder="Votre nom complet" required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" placeholder="votre@email.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Téléphone</Label>
                      <Input id="phone" placeholder="+33 1 23 45 67 89" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Type de Service *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez un service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="web">Développement Web</SelectItem>
                        <SelectItem value="mobile">Application Mobile</SelectItem>
                        <SelectItem value="ai">Intelligence Artificielle</SelectItem>
                        <SelectItem value="iot">Système IoT</SelectItem>
                        <SelectItem value="cyber">Cybersécurité</SelectItem>
                        <SelectItem value="telecom">Télécommunications</SelectItem>
                        <SelectItem value="other">Autre</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget Estimé</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez votre budget" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5k-15k">5 000€ - 15 000€</SelectItem>
                        <SelectItem value="15k-50k">15 000€ - 50 000€</SelectItem>
                        <SelectItem value="50k-100k">50 000€ - 100 000€</SelectItem>
                        <SelectItem value="100k+">Plus de 100 000€</SelectItem>
                        <SelectItem value="discuss">À discuter</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="timeline">Délai Souhaité</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Quand souhaitez-vous démarrer ?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asap">Dès que possible</SelectItem>
                        <SelectItem value="1month">Dans le mois</SelectItem>
                        <SelectItem value="3months">Dans les 3 mois</SelectItem>
                        <SelectItem value="6months">Dans les 6 mois</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description du Projet *</Label>
                    <Textarea
                      id="description"
                      placeholder="Décrivez votre projet, vos objectifs, les fonctionnalités souhaitées..."
                      rows={6}
                      required
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="newsletter" />
                    <Label htmlFor="newsletter" className="text-sm">
                      Je souhaite recevoir les actualités et offres de NRBTech
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" required />
                    <Label htmlFor="terms" className="text-sm">
                      J'accepte les conditions générales et la politique de confidentialité *
                    </Label>
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Zap className="mr-2 h-5 w-5" />
                    Envoyer ma Demande de Devis
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
