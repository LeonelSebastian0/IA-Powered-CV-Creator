"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Menu, Moon, Sun, X } from "lucide-react"
import { useTheme } from "next-themes"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()
  const currentTheme = theme === 'system' ? resolvedTheme : theme

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <nav className="bg-slate-950 text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight">
              IA-Powered CV Creator
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="#cv-generation"
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              Generación de CV
            </Link>
            <Link
              href="#cover-letters"
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              Cartas de presentación
            </Link>
            <Link
              href="/signin"
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              Sign in
            </Link>
            <button
              type="button"
              onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-popover px-3 py-2 text-sm font-medium text-foreground hover:bg-popover/90 transition-colors"
              aria-label="Cambiar modo"
            >
              {mounted ? (
                currentTheme === 'dark' ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )
              ) : (
                <Moon className="w-5 h-5" />
              )}
              {mounted ? (currentTheme === 'dark' ? 'Claro' : 'Oscuro') : 'Tema'}
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg border border-border bg-popover text-foreground hover:bg-popover/90 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-slate-950">
          <div className="px-4 py-4 space-y-3">
            <Link
              href="#cv-generation"
              className="block text-gray-300 hover:text-white transition-colors text-sm font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Generación de CV
            </Link>
            <Link
              href="#cover-letters"
              className="block text-gray-300 hover:text-white transition-colors text-sm font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Cartas de presentación
            </Link>
            <Link
              href="/signin"
              className="block text-gray-300 hover:text-white transition-colors text-sm font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign in
            </Link>
            <button
              type="button"
              onClick={() => {
                setTheme(currentTheme === 'dark' ? 'light' : 'dark')
                setIsMenuOpen(false)
              }}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-border bg-popover px-4 py-2 text-sm font-medium text-foreground hover:bg-popover/90 transition-colors"
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
              {mounted ? (currentTheme === 'dark' ? 'Claro' : 'Oscuro') : 'Tema'}
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
