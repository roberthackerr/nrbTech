import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Phone, Mail } from "lucide-react"

export default function FAQPage() {
  const faqs = [
    {
      category: "Services Généraux",
      questions: [
        {
          question: "Quels types de services propose NRBTech ?",
          answer:
            "NRBTech propose quatre domaines d'expertise principaux : les télécommunications (infrastructure réseau, 5G), la cybersécurité (audit, protection des données), l'intelligence artificielle (chatbots, analyse prédictive) et le développement (applications web/mobile, systèmes sur mesure).",
        },
        {
          question: "Dans quelles régions intervenez-vous ?",
          answer:
            "Nous intervenons principalement en France, avec des projets internationaux en Europe et en Afrique du Nord. Nous proposons également des services de consultation à distance pour certains projets.",
        },
        {
          question: "Combien de temps prend un projet typique ?",
          answer:
            "La durée varie selon la complexité : de 2-4 semaines pour des projets simples à 6-12 mois pour des transformations digitales complètes. Nous fournissons toujours un planning détaillé lors de la phase de devis.",
        },
      ],
    },
    {
      category: "Processus et Méthodologie",
      questions: [
        {
          question: "Comment se déroule un projet chez NRBTech ?",
          answer:
            "Notre processus comprend 5 étapes : 1) Analyse des besoins et audit, 2) Conception et architecture, 3) Développement agile par sprints, 4) Tests et validation, 5) Déploiement et formation. Vous êtes impliqué à chaque étape.",
        },
        {
          question: "Proposez-vous de la maintenance après livraison ?",
          answer:
            "Oui, nous proposons des contrats de maintenance et support technique adaptés à vos besoins : maintenance corrective, évolutive, et support utilisateur. Nos équipes restent disponibles pour assurer la pérennité de vos solutions.",
        },
        {
          question: "Utilisez-vous des méthodologies agiles ?",
          answer:
            "Absolument. Nous appliquons les méthodologies Scrum et DevOps pour garantir flexibilité, qualité et livraisons régulières. Vous recevez des démonstrations toutes les 2 semaines et pouvez ajuster les priorités.",
        },
      ],
    },
    {
      category: "Tarification et Devis",
      questions: [
        {
          question: "Comment sont calculés vos tarifs ?",
          answer:
            "Nos tarifs dépendent de la complexité, de la durée et des technologies utilisées. Nous proposons des forfaits pour les projets définis et de la régie pour les missions au long cours. Un devis détaillé est toujours fourni gratuitement.",
        },
        {
          question: "Proposez-vous des paiements échelonnés ?",
          answer:
            "Oui, nous adaptons les modalités de paiement à vos contraintes : paiement par jalons, mensuel, ou selon vos cycles budgétaires. Un acompte de 30% est généralement demandé au démarrage.",
        },
        {
          question: "Y a-t-il des coûts cachés ?",
          answer:
            "Non, nos devis sont transparents et incluent tous les coûts : développement, tests, documentation, formation et mise en production. Seules les demandes de modifications majeures en cours de projet peuvent générer des avenants.",
        },
      ],
    },
    {
      category: "Sécurité et Conformité",
      questions: [
        {
          question: "Comment garantissez-vous la sécurité des données ?",
          answer:
            "Nous appliquons les standards de sécurité les plus stricts : chiffrement end-to-end, authentification multi-facteurs, audits de sécurité réguliers, et conformité RGPD. Nos équipes sont certifiées en cybersécurité.",
        },
        {
          question: "Êtes-vous conformes au RGPD ?",
          answer:
            "Oui, toutes nos solutions respectent le RGPD. Nous intégrons la privacy by design, documentons les traitements de données, et vous accompagnons dans vos obligations de conformité.",
        },
        {
          question: "Proposez-vous des audits de sécurité ?",
          answer:
            "Oui, nos experts en cybersécurité réalisent des audits complets : tests d'intrusion, analyse de vulnérabilités, audit de code, et recommandations de sécurisation. Nous proposons aussi des formations de sensibilisation.",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Questions Fréquentes
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Trouvez rapidement les réponses à vos questions sur nos services, processus et méthodologies.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {faqs.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="mb-8 bg-card/50 backdrop-blur border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem key={faqIndex} value={`item-${categoryIndex}-${faqIndex}`}>
                      <AccordionTrigger className="text-left font-semibold">{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-primary/10 to-blue-600/10 border-primary/20">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Vous ne trouvez pas votre réponse ?</h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Notre équipe est là pour répondre à toutes vos questions spécifiques.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="/contact">
                    <Mail className="h-5 w-5 mr-2" />
                    Nous Contacter
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:+33123456789">
                    <Phone className="h-5 w-5 mr-2" />
                    Appeler Maintenant
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
