'use client'

import { useState, useEffect } from 'react'
import { HeroSection } from '@/components/sections/hero-section'
import { RappersSection } from '@/components/sections/rappers-section'
import { LinksSection } from '@/components/sections/links-section'
import { siteConfig } from '@/config/site'

export default function HomePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-black text-white font-mono overflow-x-hidden relative crt-subtle">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b-2 border-cyan-400/50 shadow-[0_0_20px_rgba(0,255,255,0.3)]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-3xl font-black tracking-wider pixelated-font text-transparent bg-gradient-to-r from-green-400 via-cyan-400 to-pink-500 bg-clip-text drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]">
            {siteConfig.name}
          </div>
          <div className="flex space-x-8">
            {siteConfig.navigation.map(item => (
              <button
                key={item.title}
                onClick={() => scrollToSection(item.href.replace('#', ''))}
                className="text-gray-100 hover:text-cyan-400 transition-all duration-300 font-bold tracking-wide text-lg relative group pixelated-font pixelated-hover"
                style={{
                  textShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
                }}
              >
                {item.title}
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-green-400 to-pink-500 group-hover:w-full transition-all duration-300 shadow-[0_0_10px_rgba(0,255,255,0.8)]"></span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection onScrollToSection={scrollToSection} />

      {/* Rappers Section */}
      <RappersSection />

      {/* Links Section */}
      <LinksSection />

      <style jsx>{`
        .pixelated-font {
          font-family: 'VT323', 'Courier New', monospace;
          image-rendering: pixelated;
          image-rendering: -moz-crisp-edges;
          image-rendering: crisp-edges;
          font-weight: 400; /* VT323 is best at 400 */
          letter-spacing: 0.1em;
        }

        .crt-subtle {
          position: relative;
        }

        .crt-subtle::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          z-index: 9999;
          background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.05) 50%);
          background-size: 100% 4px;
          animation: crt-scanline-subtle 20s linear infinite;
          opacity: 0.3;
        }

        @keyframes crt-scanline-subtle {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 0 100%;
          }
        }

        .hero-bg {
          position: relative;
        }

        .glitch-card:hover {
          animation: glitch-subtle 0.5s infinite;
        }

        @keyframes glitch-subtle {
          0%,
          100% {
            transform: translate(0);
          }
          50% {
            transform: translate(-1px, 1px);
          }
        }

        .glitch-image:hover {
          animation: glitch-image 0.8s infinite;
        }

        @keyframes glitch-image {
          0%,
          100% {
            filter: hue-rotate(0deg);
          }
          25% {
            filter: hue-rotate(90deg);
          }
          50% {
            filter: hue-rotate(180deg);
          }
          75% {
            filter: hue-rotate(270deg);
          }
        }

        .glitch-icon:hover {
          animation: glitch-icon 0.4s infinite;
        }

        @keyframes glitch-icon {
          0%,
          100% {
            transform: rotate(0deg) scale(1);
          }
          25% {
            transform: rotate(-5deg) scale(1.1);
          }
          50% {
            transform: rotate(5deg) scale(1.2);
          }
          75% {
            transform: rotate(-3deg) scale(1.1);
          }
        }
      `}</style>
    </div>
  )
}
