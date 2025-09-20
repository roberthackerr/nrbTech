"use client"

import { useEffect, useState } from "react"
import { useAuth } from "@/contexts/auth-context"
import { X, Sparkles, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function WelcomePopup() {
  const { user } = useAuth()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Vérifier si l'utilisateur vient de se connecter
    const hasSeenWelcome = localStorage.getItem("hasSeenWelcome")
    
    if (user && !hasSeenWelcome) {
      setIsVisible(true)
    }
  }, [user])

  const handleClose = () => {
    setIsVisible(false)
    localStorage.setItem("hasSeenWelcome", "true")
  }

  if (!isVisible || !user) return null

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="relative w-full max-w-md overflow-hidden border-0 shadow-2xl">
        {/* Fond décoratif */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-50"></div>
        
        {/* Effet de brillance */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"></div>
        
        <CardContent className="relative p-8">
          {/* Bouton de fermeture */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-1 rounded-full hover:bg-muted transition-colors"
          >
            <X className="h-5 w-5 text-muted-foreground" />
          </button>

          {/* Icône décorative */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <Sparkles className="h-10 w-10 text-white" />
              </div>
              <div className="absolute -top-1 -right-1">
                <div className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <Check className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Contenu */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Bienvenue sur NRBTech!
            </h2>
            
            <p className="text-lg text-muted-foreground">
              Ravis de vous revoir,{" "}
              <span className="font-semibold text-foreground">
                {user.firstName} {user.lastName}
              </span>
              !
            </p>
            
            <p className="text-sm text-muted-foreground">
              Votre espace personnel est maintenant prêt. Explorez vos analytics et suivez les performances de votre site.
            </p>

            <div className="pt-4">
              <Button 
                onClick={handleClose}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Commencer l'exploration
              </Button>
            </div>
          </div>

          {/* Élément décoratif en bas */}
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-50"></div>
        </CardContent>
      </Card>
    </div>
  )
}