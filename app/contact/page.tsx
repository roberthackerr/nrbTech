import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MessageSquare } from "lucide-react"

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Téléphone",
      description: "Appelez-nous directement",
      value: "+261 33 33 326 42",
      action: "tel:+261333332642",
    },
    {
      icon: Mail,
      title: "Email",
      description: "Écrivez-nous",
      value: "roberto@nrbtech.mg",
      action: "mailto:roberto@nrbtech.fr",
    },
    {
      icon: MessageSquare,
      title: "Chat en ligne",
      description: "Support instantané",
      value: "Disponible 9h-18h",
      action: "#",
    },
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
                Contactez
                <span className="text-primary block">NRBTech</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
                Prêt à transformer votre entreprise ? Discutons de vos besoins et découvrons comment nos solutions
                peuvent vous aider à atteindre vos objectifs.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-12 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6">
              {contactMethods.map((method, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <method.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{method.title}</CardTitle>
                    <CardDescription>{method.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <a
                      href={method.action}
                      className="text-primary font-medium hover:text-primary/80 transition-colors"
                    >
                      {method.value}
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Main Contact Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6 text-balance">Demandez un devis gratuit</h2>
                <p className="text-muted-foreground mb-8 text-pretty">
                  Remplissez ce formulaire et notre équipe vous contactera sous 24h pour discuter de votre projet.
                </p>
                <ContactForm />
              </div>

              {/* Contact Info */}
              <div>
                <ContactInfo />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4 text-balance">Questions Fréquentes</h2>
              <p className="text-xl text-muted-foreground text-pretty">
                Trouvez rapidement les réponses à vos questions
              </p>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quels sont vos délais de réponse ?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Nous nous engageons à répondre à toute demande sous 24h en jours ouvrés. Pour les urgences, notre
                    support technique est disponible 24/7.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Proposez-vous des audits gratuits ?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Oui, nous offrons des audits gratuits pour évaluer vos besoins en cybersécurité, infrastructure
                    réseau et transformation digitale.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Travaillez-vous avec des PME ?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Absolument ! Nous adaptons nos solutions aux besoins et budgets des PME, TPE et grandes entreprises.
                    Chaque projet est personnalisé.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
