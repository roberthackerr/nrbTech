import Link from "next/link"
import { Shield, Cpu, Wifi, Code, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8  rounded-lg flex items-center justify-center">
                 <Image
                                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT_Image_4_sept._2025__09_07_19-removebg-preview-XjBwlfJuA9h3NPNX9pOnuLwnfL5Mmb.png"
                                alt="NRBTech Logo"
                                width={30}
                                height={30}
                                className="object-contain"
                              />
              </div>
              <span className="text-xl font-bold text-card-foreground">NRBTech</span>
            </div>
            <p className="text-muted-foreground text-sm text-pretty">
              Votre partenaire technologique de confiance pour transformer vos défis en opportunités de croissance.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center text-sm text-muted-foreground">
                <Phone className="h-4 w-4 mr-2" />
                +261 33 33 326 42
              </div>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Mail className="h-4 w-4 mr-2" />
              contact@nrbtech.com
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-card-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/telecom"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center"
                >
                  <Wifi className="h-4 w-4 mr-2" />
                  Télécommunications
                </Link>
              </li>
              <li>
                <Link
                  href="/services/cybersecurity"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center"
                >
                  <Shield className="h-4 w-4 mr-2" />
                  Cybersécurité
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ai"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center"
                >
                  <Cpu className="h-4 w-4 mr-2" />
                  Intelligence Artificielle
                </Link>
              </li>
              <li>
                <Link
                  href="/services/development"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center"
                >
                  <Code className="h-4 w-4 mr-2" />
                  Développement
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-card-foreground mb-4">Entreprise</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Dashboard Client
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Carrières
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-card-foreground mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                <span>
                  Rue Mahazoarivo
                  <br />
                  Antsirabe Madagascar
                </span>
              </div>
              <div className="text-sm text-muted-foreground">
                <strong>Horaires :</strong>
                <br />
                Lun - Ven : 9h00 - 18h00
                <br />
                Support 24/7 disponible
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 NRBTech. Tous droits réservés. |
            <Link href="/privacy" className="hover:text-primary transition-colors ml-1">
              Politique de confidentialité
            </Link>{" "}
            |
            <Link href="/terms" className="hover:text-primary transition-colors ml-1">
              Conditions d'utilisation
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
