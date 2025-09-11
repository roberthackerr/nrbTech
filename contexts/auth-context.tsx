"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  company?: string
  avatar?: string
  theme: "light" | "dark" | "system"
  preferences: {
    notifications: boolean
    emailUpdates: boolean
    language: string
  }
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  signup: (userData: any) => Promise<void>
  logout: () => void
  updateUser: (userData: Partial<User>) => void
  updateTheme: (theme: "light" | "dark" | "system") => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Simulate checking for existing session on mount
  useEffect(() => {
    const checkAuth = () => {
      const savedUser = localStorage.getItem("nrbtech_user")
      if (savedUser) {
        setUser(JSON.parse(savedUser))
      }
      setIsLoading(false)
    }

    checkAuth()
  }, [])

  const login = async (email: string, password: string) => {
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    const mockUser: User = {
      id: "1",
      email,
      firstName: "John",
      lastName: "Doe",
      company: "Tech Corp",
      theme: "system",
      preferences: {
        notifications: true,
        emailUpdates: true,
        language: "fr",
      },
    }

    setUser(mockUser)
    localStorage.setItem("nrbtech_user", JSON.stringify(mockUser))
    setIsLoading(false)
  }

  const signup = async (userData: any) => {
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const newUser: User = {
      id: Date.now().toString(),
      email: userData.email,
      firstName: userData.firstName,
      lastName: userData.lastName,
      company: userData.company,
      theme: "system",
      preferences: {
        notifications: true,
        emailUpdates: true,
        language: "fr",
      },
    }

    setUser(newUser)
    localStorage.setItem("nrbtech_user", JSON.stringify(newUser))
    setIsLoading(false)
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("nrbtech_user")
  }

  const updateUser = (userData: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...userData }
      setUser(updatedUser)
      localStorage.setItem("nrbtech_user", JSON.stringify(updatedUser))
    }
  }

  const updateTheme = (theme: "light" | "dark" | "system") => {
    if (user) {
      const updatedUser = { ...user, theme }
      setUser(updatedUser)
      localStorage.setItem("nrbtech_user", JSON.stringify(updatedUser))
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        login,
        signup,
        logout,
        updateUser,
        updateTheme,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
