"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Send } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
    newsletter: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: formData.service,
          budget: formData.budget,
          message: formData.message,
        }),
      })

      const result = await response.json()

      if (result.success) {
        alert(result.message)
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          budget: "",
          message: "",
          newsletter: false,
        })
      } else {
        alert(result.message || "Erreur lors de l'envoi du message")
      }
    } catch (error) {
      console.error("[v0] Contact form submission error:", error)
      alert("Erreur lors de l'envoi du message. Veuillez réessayer.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Formulaire de Contact</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">Prénom *</Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Nom *</Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Téléphone</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">Entreprise</Label>
            <Input
              id="company"
              value={formData.company}
              onChange={(e) => handleInputChange("company", e.target.value)}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="service">Service d'intérêt</Label>
              <Select onValueChange={(value) => handleInputChange("service", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez un service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="telecom">Télécommunications</SelectItem>
                  <SelectItem value="cybersecurity">Cybersécurité</SelectItem>
                  <SelectItem value="ai">Intelligence Artificielle</SelectItem>
                  <SelectItem value="development">Développement</SelectItem>
                  <SelectItem value="audit">Audit gratuit</SelectItem>
                  <SelectItem value="other">Autre</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="budget">Budget estimé</Label>
              <Select onValueChange={(value) => handleInputChange("budget", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez une fourchette" />
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
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              placeholder="Décrivez votre projet et vos besoins..."
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              rows={4}
              required
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="newsletter"
              checked={formData.newsletter}
              onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
            />
            <Label htmlFor="newsletter" className="text-sm text-muted-foreground">
              Je souhaite recevoir la newsletter NRBTech avec les dernières actualités tech
            </Label>
          </div>

          <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
            <Send className="mr-2 h-4 w-4" />
            {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            En soumettant ce formulaire, vous acceptez notre politique de confidentialité. Vos données sont sécurisées
            et ne seront jamais partagées.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
