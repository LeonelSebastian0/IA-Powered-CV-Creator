"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function FormNavbar() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()
  const currentTheme = theme === 'system' ? resolvedTheme : theme

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="bg-background border-b border-border text-foreground">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1">
            <span className="text-2xl font-bold">
              <span className="text-foreground">IA-Powered CV Creator </span>
              <span className="text-blue-600">CV</span>
            </span>
          </Link>
          
          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-4">
            <Link
              href="#"
              className="text-foreground hover:text-blue-600 transition-colors text-sm font-semibold"
            >
              PLANTILLAS
            </Link>
            <Link
              href="#"
              className="text-foreground hover:text-blue-600 transition-colors text-sm font-semibold"
            >
              RECURSOS
            </Link>
            <Link
              href="#"
              className="text-foreground hover:text-blue-600 transition-colors text-sm font-semibold"
            >
              MI CUENTA
            </Link>
            <button
              type="button"
              onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
              className="inline-flex items-center justify-center rounded-full border border-border bg-popover px-3 py-2 text-sm font-medium text-foreground hover:bg-popover/90 transition-colors"
              aria-label="Cambiar modo"
            >
              {mounted ? (
                currentTheme === 'dark' ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>
          </nav>
        </div>
      </div>
      
      {/* Blue accent line */}
      <div className="h-1 bg-linear-to-r from-blue-600 to-sky-500" />
    </header>
  )
}
