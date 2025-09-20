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
  // theme: "light" | "dark" | "system"
  // preferences: {
  //   notifications: boolean
  //   emailUpdates: boolean
  //   language: string
  // }
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<{ success: boolean; message?: string }>
  signup: (userData: any) => Promise<{ success: boolean; message?: string }>
  logout: () => void
  updateUser: (userData: Partial<User>) => void
  updateTheme: (theme: "light" | "dark" | "system") => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Check for existing session on mount
  useEffect(() => {
    const checkAuth = () => {
      try {
        const savedUser = localStorage.getItem("user")
        const token = localStorage.getItem("token")
        
        if (savedUser && token) {
          setUser(JSON.parse(savedUser))
        }
      } catch (error) {
        console.error("Error parsing user data from localStorage:", error)
        // Clear invalid data
        localStorage.removeItem("user")
        localStorage.removeItem("token")
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [])

  const login = async (email: string, password: string): Promise<{ success: boolean; message?: string }> => {
    setIsLoading(true)
    
    try {
      const response = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })

      const result = await response.json()

      if (result.success) {
        const userData = {
          id: result.user.id,
          email: result.user.email,
          firstName: result.user.firstName,
          lastName: result.user.lastName,
          company: result.user.company || "",
          // theme: "system",
          // preferences: {
          //   notifications: true,
          //   emailUpdates: true,
          //   language: "fr",
          // },
        }

        setUser(userData)
        localStorage.setItem("user", JSON.stringify(userData))
        localStorage.setItem("token", result.token)
        
        return { success: true }
      } else {
        return { success: false, message: result.message }
      }
    } catch (error) {
      console.error("Login error:", error)
      return { success: false, message: "Erreur de connexion au serveur" }
    } finally {
      setIsLoading(false)
    }
  }

  const signup = async (userData: any): Promise<{ success: boolean; message?: string }> => {
    setIsLoading(true)

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      })

      const result = await response.json()

      if (result.success) {
        // After successful signup, automatically log the user in
        const loginResult = await login(userData.email, userData.password)
        return loginResult
      } else {
        return { success: false, message: result.message }
      }
    } catch (error) {
      console.error("Signup error:", error)
      return { success: false, message: "Erreur de connexion au serveur" }
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
    localStorage.removeItem("token")
    
    // Redirect to home page after logout
    if (typeof window !== "undefined") {
      window.location.href = "/"
    }
  }

  const updateUser = (userData: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...userData }
      setUser(updatedUser)
      localStorage.setItem("user", JSON.stringify(updatedUser))
    }
  }

  const updateTheme = (theme: "light" | "dark" | "system") => {
    if (user) {
      const updatedUser = { ...user, theme }
      setUser(updatedUser)
      localStorage.setItem("user", JSON.stringify(updatedUser))
    }
    
    // Also update the theme in the theme provider if you have one
    document.documentElement.classList.toggle("dark", theme === "dark")
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