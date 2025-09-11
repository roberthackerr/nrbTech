"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes"
import type { ThemeProviderProps } from "next-themes"
import { useAuth } from "@/contexts/auth-context"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const { user, updateTheme } = useAuth()

  // Sync user theme preference with next-themes
  React.useEffect(() => {
    if (user?.theme) {
      // This will be handled by next-themes based on the defaultTheme prop
    }
  }, [user?.theme])

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme={user?.theme || "system"}
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}

export { useTheme }
