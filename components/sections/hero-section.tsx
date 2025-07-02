import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/config/site'

interface HeroSectionProps {
  onScrollToSection: (sectionId: string) => void
}

export function HeroSection({ onScrollToSection }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center relative px-6 text-center hero-bg"
      style={{
        backgroundImage: 'url(/hero.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex flex-col items-center">
        <h1
          className="text-8xl md:text-[150px] font-black text-transparent bg-gradient-to-r from-green-400 via-cyan-400 to-pink-500 bg-clip-text tracking-wider pixelated-font"
          style={{
            textShadow: `0 0 15px rgba(0, 255, 255, 1), 0 0 30px rgba(255, 0, 255, 0.8), 0 0 80px rgba(0, 255, 0, 0.6)`,
          }}
        >
          {siteConfig.sections.hero.title}
        </h1>
        <p
          className="text-2xl md:text-3xl text-gray-200 font-bold tracking-widest pixelated-font mt-8"
          style={{ textShadow: '0 0 15px rgba(0, 255, 255, 0.7), 0 0 30px rgba(255, 0, 255, 0.5)' }}
        >
          {siteConfig.sections.hero.subtitle}
        </p>
        <Button
          onClick={() => onScrollToSection('rappers')}
          className="mt-16 bg-transparent border-4 border-cyan-400 text-cyan-400 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-pink-500 hover:text-black transition-all duration-500 px-12 py-6 text-xl font-black tracking-wider shadow-[0_0_30px_rgba(0,255,255,0.8)] hover:shadow-[0_0_50px_rgba(0,255,255,1)] group pixelated-font"
        >
          {siteConfig.sections.hero.cta}
          <ChevronDown className="ml-3 w-6 h-6 group-hover:animate-bounce" />
        </Button>
      </div>
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <ChevronDown
          className="w-10 h-10 text-cyan-400 opacity-80"
          style={{ filter: 'drop-shadow(0 0 10px rgba(0, 255, 255, 0.8))' }}
        />
      </div>
    </section>
  )
}
