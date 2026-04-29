"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight">
              IA-Powered CV Creator
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
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
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-white/10">
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
          </div>
        </div>
      )}
    </nav>
  )
}
