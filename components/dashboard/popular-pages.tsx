import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye } from "lucide-react"

const pages = [
  { path: "/", title: "Accueil", views: 3420, change: "+12%" },
  { path: "/services", title: "Services", views: 2180, change: "+8%" },
  { path: "/services/cybersecurity", title: "Cybersécurité", views: 1650, change: "+15%" },
  { path: "/services/ai", title: "Intelligence Artificielle", views: 1420, change: "+22%" },
  { path: "/services/development", title: "Développement", views: 1280, change: "+5%" },
  { path: "/services/telecom", title: "Télécommunications", views: 980, change: "+3%" },
  { path: "/about", title: "À propos", views: 750, change: "-2%" },
  { path: "/contact", title: "Contact", views: 680, change: "+18%" },
]

export function PopularPages() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Pages Populaires</CardTitle>
        <CardDescription>Pages les plus visitées ce mois-ci</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {pages.map((page, index) => (
            <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Eye className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-foreground">{page.title}</div>
                  <div className="text-sm text-muted-foreground">{page.path}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-medium text-foreground">{page.views.toLocaleString()}</div>
                <Badge variant={page.change.startsWith("+") ? "default" : "secondary"} className="text-xs">
                  {page.change}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
