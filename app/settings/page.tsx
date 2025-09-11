"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { useTheme } from "@/components/theme-provider"
import { Palette, Bell, Volume2, Globe, Shield, Monitor, Moon, Sun } from "lucide-react"

export default function SettingsPage() {
   const { theme, setTheme } = useTheme()
  const [notifications, setNotifications] = useState(true)
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [volume, setVolume] = useState([75])
  const [language, setLanguage] = useState("fr")
  const [twoFactor, setTwoFactor] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Paramètres</h1>
          <p className="text-muted-foreground">Personnalisez votre expérience NRBTech selon vos préférences.</p>
        </div>

        <div className="grid gap-6">
          {/* Apparence */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5 text-primary" />
                Apparence
              </CardTitle>
              <CardDescription>Personnalisez l'apparence de l'interface utilisateur.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Thème</Label>
                  <div className="text-sm text-muted-foreground">Choisissez votre thème préféré</div>
                </div>
                <Select value={theme} onValueChange={setTheme}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">
                      <div className="flex items-center gap-2">
                        <Sun className="h-4 w-4" />
                        Clair
                      </div>
                    </SelectItem>
                    <SelectItem value="dark">
                      <div className="flex items-center gap-2">
                        <Moon className="h-4 w-4" />
                        Sombre
                      </div>
                    </SelectItem>
                    <SelectItem value="system">
                      <div className="flex items-center gap-2">
                        <Monitor className="h-4 w-4" />
                        Système
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-primary" />
                Notifications
              </CardTitle>
              <CardDescription>Gérez vos préférences de notifications.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Notifications push</Label>
                  <div className="text-sm text-muted-foreground">Recevoir des notifications en temps réel</div>
                </div>
                <Switch checked={notifications} onCheckedChange={setNotifications} />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Notifications email</Label>
                  <div className="text-sm text-muted-foreground">Recevoir des mises à jour par email</div>
                </div>
                <Switch checked={emailNotifications} onCheckedChange={setEmailNotifications} />
              </div>
            </CardContent>
          </Card>

          {/* Audio */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Volume2 className="h-5 w-5 text-primary" />
                Audio
              </CardTitle>
              <CardDescription>Configurez les paramètres audio.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Sons activés</Label>
                  <div className="text-sm text-muted-foreground">Activer les sons de l'interface</div>
                </div>
                <Switch checked={soundEnabled} onCheckedChange={setSoundEnabled} />
              </div>

              {soundEnabled && (
                <>
                  <Separator />
                  <div className="space-y-2">
                    <Label className="text-base">Volume</Label>
                    <Slider value={volume} onValueChange={setVolume} max={100} step={1} className="w-full" />
                    <div className="text-sm text-muted-foreground text-right">{volume[0]}%</div>
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          {/* Langue */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                Langue et région
              </CardTitle>
              <CardDescription>Sélectionnez votre langue préférée.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Langue</Label>
                  <div className="text-sm text-muted-foreground">Langue de l'interface utilisateur</div>
                </div>
                <Select value={language} onValueChange={setLanguage}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fr">Français</SelectItem>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Español</SelectItem>
                    <SelectItem value="de">Deutsch</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Sécurité */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Sécurité
              </CardTitle>
              <CardDescription>Gérez vos paramètres de sécurité et confidentialité.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Authentification à deux facteurs</Label>
                  <div className="text-sm text-muted-foreground">
                    Sécurisez votre compte avec 2FA
                    {twoFactor && (
                      <Badge variant="secondary" className="ml-2">
                        Activé
                      </Badge>
                    )}
                  </div>
                </div>
                <Switch checked={twoFactor} onCheckedChange={setTwoFactor} />
              </div>

              <Separator />

              <div className="space-y-4">
                <Button variant="outline" className="w-full bg-transparent">
                  Changer le mot de passe
                </Button>
                <Button variant="outline" className="w-full bg-transparent">
                  Télécharger mes données
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex gap-4">
            <Button className="flex-1">Sauvegarder les modifications</Button>
            <Button variant="outline">Réinitialiser</Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
