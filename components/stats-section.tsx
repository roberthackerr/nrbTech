import { Card, CardContent } from "@/components/ui/card"

export function StatsSection() {
  const stats = [
    { number: "50+", label: "Projets réalisés" },
    { number: "10+", label: "Clients satisfaits" },
    { number: "24/7", label: "Support technique" },
    { number: "99.9%", label: "Disponibilité" },
  ]

  return (
    <section className="py-20 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">NRBTech en Chiffres</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            La confiance de nos clients se mesure en résultats concrets
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-0 bg-background/50 backdrop-blur">
              <CardContent className="pt-8 pb-6">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
