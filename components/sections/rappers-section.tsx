import { rappers } from '@/config/rappers'
import { siteConfig } from '@/config/site'
import { RapperCard } from '@/components/rapper-card'

export function RappersSection() {
  return (
    <section id="rappers" className="py-24 relative">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-5xl md:text-7xl font-black text-center mb-20 text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-green-400 bg-clip-text tracking-wider pixelated-font px-6"
          style={{
            textShadow: `0 0 15px rgba(255, 0, 255, 1), 0 0 30px rgba(0, 255, 0, 0.8), 0 0 60px rgba(0, 255, 255, 0.6)`,
          }}
        >
          {siteConfig.sections.rappers.title}
        </h2>

        {/* Responsive grid: 1 column on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 px-6">
          {rappers.map(rapper => (
            <div key={rapper.id} className="flex justify-center">
              <RapperCard rapper={rapper} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
