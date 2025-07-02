'use client'

import type React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/#rappers', label: 'Rappers' },
    { href: '/#links', label: 'Links' },
  ]

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    if (pathname !== '/') {
      // If not on the homepage, navigate first, then scroll will be handled by URL hash
      return
    }
    e.preventDefault()
    const element = document.getElementById(sectionId.substring(1)) // remove #
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false) // Close mobile menu after navigation
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b-2 border-cyan-400/50 shadow-[0_0_20px_rgba(0,255,255,0.3)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl sm:text-3xl font-black tracking-wider pixelated-font text-transparent bg-gradient-to-r from-green-400 via-cyan-400 to-pink-500 bg-clip-text drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]"
          onClick={closeMobileMenu}
        >
          AI MAFIJA
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map(({ href, label }) => {
            const isAnchor = href.startsWith('/#')
            return (
              <Link
                key={label}
                href={href}
                onClick={isAnchor ? e => scrollToSection(e, href) : undefined}
                className="text-gray-300 hover:text-cyan-400 transition-all duration-300 font-bold tracking-wide text-lg relative group pixelated-font"
                style={{ textShadow: '0 0 10px rgba(0, 255, 255, 0.5)' }}
              >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-green-400 to-pink-500 group-hover:w-full transition-all duration-300 shadow-[0_0_10px_rgba(0,255,255,0.8)]"></span>
              </Link>
            )
          })}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-cyan-400 hover:text-pink-500 transition-colors duration-300 p-2"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X
              className="w-6 h-6"
              style={{ filter: 'drop-shadow(0 0 10px rgba(0, 255, 255, 0.8))' }}
            />
          ) : (
            <Menu
              className="w-6 h-6"
              style={{ filter: 'drop-shadow(0 0 10px rgba(0, 255, 255, 0.8))' }}
            />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b-2 border-cyan-400/30 shadow-[0_0_30px_rgba(0,255,255,0.4)]">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map(({ href, label }) => {
              const isAnchor = href.startsWith('/#')
              return (
                <Link
                  key={label}
                  href={href}
                  onClick={isAnchor ? e => scrollToSection(e, href) : closeMobileMenu}
                  className="block text-gray-300 hover:text-cyan-400 transition-all duration-300 font-bold tracking-wide text-xl relative group pixelated-font py-3 px-2 border-l-4 border-transparent hover:border-cyan-400"
                  style={{ textShadow: '0 0 10px rgba(0, 255, 255, 0.5)' }}
                >
                  {label}
                  <span className="absolute -bottom-1 left-2 w-0 h-1 bg-gradient-to-r from-green-400 to-pink-500 group-hover:w-full transition-all duration-300 shadow-[0_0_10px_rgba(0,255,255,0.8)]"></span>
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </nav>
  )
}
