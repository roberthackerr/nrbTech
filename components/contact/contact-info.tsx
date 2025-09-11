import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Clock, Phone, Mail, Shield, Award } from "lucide-react"

export function ContactInfo() {
  return (
    <div className="space-y-6">
      {/* Office Info */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MapPin className="h-5 w-5 text-primary" />
            <span>Notre Bureau</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="font-medium text-foreground">NRBTech - Antsirabe</p>
            <p className="text-muted-foreground">Rue Mahazoarivo</p>
            <p className="text-muted-foreground">Antsirabe, Madagascar</p>
          </div>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>Lundi - Vendredi : 9h00 - 18h00</span>
          </div>
        </CardContent>
      </Card>

      {/* Contact Details */}
      <Card>
        <CardHeader>
          <CardTitle>Coordonnées</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-3">
            <Phone className="h-4 w-4 text-primary" />
            <div>
              <p className="font-medium">+261 33 326 42</p>
              <p className="text-sm text-muted-foreground">Support 24/7 disponible</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Mail className="h-4 w-4 text-primary" />
            <div>
              <p className="font-medium">contact@nrbtech.fr</p>
              <p className="text-sm text-muted-foreground">Réponse sous 24h garantie</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Certifications */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Award className="h-5 w-5 text-primary" />
            <span>Certifications</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center space-x-2">
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-sm">ISO 27001 - Sécurité de l'information</span>
          </div>
          <div className="flex items-center space-x-2">
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-sm">RGPD - Protection des données</span>
          </div>
          <div className="flex items-center space-x-2">
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-sm">Cisco Partner - Réseaux</span>
          </div>
        </CardContent>
      </Card>

      {/* Emergency Contact */}
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="text-primary">Support d'Urgence</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-2">
            Pour les urgences critiques (pannes système, incidents de sécurité)
          </p>
          <p className="font-bold text-primary">+261 33 326 42</p>
          <p className="text-xs text-muted-foreground">Disponible 24h/24, 7j/7</p>
        </CardContent>
      </Card>
    </div>
  )
}
