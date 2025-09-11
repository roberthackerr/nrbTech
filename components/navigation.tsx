"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Shield, Cpu, Wifi, Code, LogOut, Settings, Sun, Moon, Palette } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"
import { useTheme } from "@/components/theme-provider"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { user, logout } = useAuth()
  const { theme, setTheme } = useTheme()

  const services = [
    { name: "Télécommunications", href: "/services/telecom", icon: Wifi },
    { name: "Cybersécurité", href: "/services/cybersecurity", icon: Shield },
    { name: "Intelligence Artificielle", href: "/services/ai", icon: Cpu },
    { name: "Développement", href: "/services/development", icon: Code },
  ]

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
    } else if (theme === "dark") {
      setTheme("system")
    } else {
      setTheme("light")
    }
  }

  const getThemeIcon = () => {
    switch (theme) {
      case "light":
        return <Sun className="h-4 w-4" />
      case "dark":
        return <Moon className="h-4 w-4" />
      default:
        return <Palette className="h-4 w-4" />
    }
  }

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-10 h-10">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT_Image_4_sept._2025__09_07_19-removebg-preview-XjBwlfJuA9h3NPNX9pOnuLwnfL5Mmb.png"
                alt="NRBTech Logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold text-foreground">NRBTech</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Accueil
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="text-foreground hover:text-primary transition-colors flex items-center">
                Services
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-2">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="flex items-center p-3 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      <service.icon className="h-5 w-5 mr-3 text-primary" />
                      <span className="text-sm font-medium">{service.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Business Pages Dropdown */}
            <div className="relative group">
              <button className="text-foreground hover:text-primary transition-colors flex items-center">
                Entreprise
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-2">
                  <Link
                    href="/about"
                    className="block p-3 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors text-sm"
                  >
                    À propos
                  </Link>
                  <Link
                    href="/team"
                    className="block p-3 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors text-sm"
                  >
                    Équipe
                  </Link>
                  <Link
                    href="/careers"
                    className="block p-3 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors text-sm"
                  >
                    Carrières
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/portfolio" className="text-foreground hover:text-primary transition-colors">
              Portfolio
            </Link>
            <Link href="/blog" className="text-foreground hover:text-primary transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>

            {user && (
              <Link href="/dashboard" className="text-foreground hover:text-primary transition-colors">
                Dashboard
              </Link>
            )}

            {/* Theme Toggle Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="w-9 h-9 p-0"
              title={`Thème actuel: ${theme === "light" ? "Clair" : theme === "dark" ? "Sombre" : "Système"}`}
            >
              {getThemeIcon()}
            </Button>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              // User menu when authenticated
              <div className="relative group">
                <button className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground text-sm font-medium">
                      {user.firstName[0]}
                      {user.lastName[0]}
                    </span>
                  </div>
                  <span className="text-sm font-medium">{user.firstName}</span>
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="p-2">
                    <Link
                      href="/settings"
                      className="flex items-center p-3 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      <Settings className="h-4 w-4 mr-3 text-primary" />
                      <span className="text-sm">Paramètres</span>
                    </Link>
                    <button
                      onClick={logout}
                      className="w-full flex items-center p-3 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors text-left"
                    >
                      <LogOut className="h-4 w-4 mr-3 text-primary" />
                      <span className="text-sm">Déconnexion</span>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              // Login/Signup buttons when not authenticated
              <div className="flex items-center space-x-3">
                <Button variant="ghost" asChild>
                  <Link href="/login">Connexion</Link>
                </Button>
                <Button asChild>
                  <Link href="/signup">S'inscrire</Link>
                </Button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Theme Toggle Button */}
            <Button variant="ghost" size="sm" onClick={toggleTheme} className="w-9 h-9 p-0">
              {getThemeIcon()}
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card border-t border-border">
              <Link
                href="/"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Accueil
              </Link>

              {services.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="flex items-center px-3 py-2 text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <service.icon className="h-4 w-4 mr-2 text-primary" />
                  {service.name}
                </Link>
              ))}

              <Link
                href="/portfolio"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                href="/testimonials"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Témoignages
              </Link>
              <Link
                href="/pricing"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Tarifs
              </Link>
              <Link
                href="/blog"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                À propos
              </Link>
              <Link
                href="/team"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Équipe
              </Link>
              <Link
                href="/careers"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Carrières
              </Link>
              <Link
                href="/faq"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>

              {user ? (
                <>
                  <Link
                    href="/dashboard"
                    className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <Link
                    href="/settings"
                    className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Paramètres
                  </Link>
                  <button
                    onClick={() => {
                      logout()
                      setIsOpen(false)
                    }}
                    className="block w-full text-left px-3 py-2 text-foreground hover:text-primary transition-colors"
                  >
                    Déconnexion
                  </button>
                </>
              ) : (
                <div className="px-3 py-2 space-y-2">
                  <Button variant="ghost" asChild className="w-full justify-start">
                    <Link href="/login" onClick={() => setIsOpen(false)}>
                      Connexion
                    </Link>
                  </Button>
                  <Button asChild className="w-full">
                    <Link href="/signup" onClick={() => setIsOpen(false)}>
                      S'inscrire
                    </Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
