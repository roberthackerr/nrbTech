"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, X, Send, Bot, User, Minimize2, Maximize2 } from "lucide-react"

interface Message {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
}

const predefinedResponses = {
  greeting: "Bonjour ! Je suis l'assistant virtuel de NRBTech. Comment puis-je vous aider aujourd'hui ?",
  services:
    "NRBTech propose 4 domaines d'expertise : Télécommunications, Cybersécurité, Intelligence Artificielle et Développement. Quel service vous intéresse ?",
  telecom:
    "Nos services de télécommunications incluent l'infrastructure réseau, la 5G, l'IoT et les solutions de connectivité. Voulez-vous plus de détails ?",
  cybersecurity:
    "En cybersécurité, nous offrons l'audit de sécurité, la protection contre les menaces, la conformité RGPD et la formation. Comment puis-je vous aider ?",
  ai: "Nos solutions IA comprennent le machine learning, l'analyse de données, les chatbots et l'automatisation. Quel projet avez-vous en tête ?",
  development:
    "Nous développons des applications web, mobiles, des API et des solutions sur mesure. Quel type de projet souhaitez-vous réaliser ?",
  contact:
    "Vous pouvez nous contacter au +33 1 23 45 67 89 ou par email à contact@nrbtech.fr. Voulez-vous programmer un rendez-vous ?",
  pricing:
    "Nos tarifs dépendent de vos besoins spécifiques. Je peux vous mettre en relation avec notre équipe commerciale pour un devis personnalisé.",
  default:
    "Je ne suis pas sûr de comprendre. Pouvez-vous reformuler votre question ? Ou tapez 'services' pour voir nos domaines d'expertise.",
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: predefinedResponses.greeting,
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase()

    if (message.includes("bonjour") || message.includes("salut") || message.includes("hello")) {
      return predefinedResponses.greeting
    }
    if (message.includes("service") || message.includes("que faites-vous")) {
      return predefinedResponses.services
    }
    if (
      message.includes("telecom") ||
      message.includes("télécommunication") ||
      message.includes("réseau") ||
      message.includes("5g")
    ) {
      return predefinedResponses.telecom
    }
    if (message.includes("cyber") || message.includes("sécurité") || message.includes("protection")) {
      return predefinedResponses.cybersecurity
    }
    if (
      message.includes("ia") ||
      message.includes("intelligence artificielle") ||
      message.includes("machine learning") ||
      message.includes("ai")
    ) {
      return predefinedResponses.ai
    }
    if (
      message.includes("développement") ||
      message.includes("application") ||
      message.includes("site web") ||
      message.includes("mobile")
    ) {
      return predefinedResponses.development
    }
    if (
      message.includes("contact") ||
      message.includes("téléphone") ||
      message.includes("email") ||
      message.includes("rendez-vous")
    ) {
      return predefinedResponses.contact
    }
    if (
      message.includes("prix") ||
      message.includes("tarif") ||
      message.includes("coût") ||
      message.includes("devis")
    ) {
      return predefinedResponses.pricing
    }

    return predefinedResponses.default
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate bot typing delay
    setTimeout(
      () => {
        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          content: getBotResponse(inputValue),
          sender: "bot",
          timestamp: new Date(),
        }

        setMessages((prev) => [...prev, botResponse])
        setIsTyping(false)
      },
      1000 + Math.random() * 1000,
    )
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-primary hover:bg-primary/90 animate-pulse-slow"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
        <Badge className="absolute -top-2 -left-2 bg-red-500 text-white animate-bounce">1</Badge>
      </div>
    )
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className={`w-80 shadow-2xl transition-all duration-300 ${isMinimized ? "h-16" : "h-96"} glass-card`}>
        <CardHeader className="flex flex-row items-center justify-between p-4 bg-primary text-primary-foreground rounded-t-lg">
          <CardTitle className="text-sm font-medium flex items-center gap-2">
            <Bot className="h-4 w-4" />
            Assistant NRBTech
            <Badge variant="secondary" className="text-xs">
              En ligne
            </Badge>
          </CardTitle>
          <div className="flex gap-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMinimized(!isMinimized)}
              className="h-6 w-6 p-0 hover:bg-primary-foreground/20"
            >
              {isMinimized ? <Maximize2 className="h-3 w-3" /> : <Minimize2 className="h-3 w-3" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="h-6 w-6 p-0 hover:bg-primary-foreground/20"
            >
              <X className="h-3 w-3" />
            </Button>
          </div>
        </CardHeader>

        {!isMinimized && (
          <CardContent className="p-0 flex flex-col h-80">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.sender === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      {message.sender === "bot" && <Bot className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                      {message.sender === "user" && <User className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                      <div className="text-sm">{message.content}</div>
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-muted text-muted-foreground p-3 rounded-lg max-w-[80%]">
                    <div className="flex items-center gap-2">
                      <Bot className="h-4 w-4" />
                      <div className="flex gap-1">
                        <div
                          className="w-2 h-2 bg-current rounded-full animate-bounce"
                          style={{ animationDelay: "0ms" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-current rounded-full animate-bounce"
                          style={{ animationDelay: "150ms" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-current rounded-full animate-bounce"
                          style={{ animationDelay: "300ms" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            <div className="p-2 border-t border-border">
              <div className="flex gap-1 mb-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs bg-transparent"
                  onClick={() => setInputValue("Quels sont vos services ?")}
                >
                  Services
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs bg-transparent"
                  onClick={() => setInputValue("Je veux un devis")}
                >
                  Devis
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs bg-transparent"
                  onClick={() => setInputValue("Contact")}
                >
                  Contact
                </Button>
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Tapez votre message..."
                  className="flex-1"
                />
                <Button onClick={handleSendMessage} size="sm">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  )
}
