import { socialLinks } from '@/config/links'
import { siteConfig } from '@/config/site'

export function LinksSection() {
  return (
    <section id="links" className="py-24 relative">
      <div className="max-w-7xl mx-auto text-center">
        <h2
          className="text-5xl md:text-7xl font-black text-center mb-20 text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-green-400 bg-clip-text tracking-wider pixelated-font px-6"
          style={{
            textShadow: `0 0 15px rgba(255, 0, 255, 1), 0 0 30px rgba(0, 255, 0, 0.8), 0 0 60px rgba(0, 255, 255, 0.6)`,
          }}
        >
          {siteConfig.sections.links.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {socialLinks.map(({ icon: Icon, label, href, description }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center justify-center p-8 bg-black/60 backdrop-blur-sm border-2 border-gray-700 rounded-lg hover:border-cyan-400 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] glitch-subtle"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 via-cyan-400/10 to-pink-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Icon
                className="w-12 h-12 mb-4 text-cyan-400 group-hover:text-pink-400 transition-colors duration-300"
                style={{ filter: 'drop-shadow(0 0 10px currentColor)' }}
              />
              <span
                className="text-2xl pixelated-font text-gray-100 group-hover:text-white transition-colors duration-300 mb-2"
                style={{ textShadow: '0 0 10px rgba(255,255,255,0.3)' }}
              >
                {label}
              </span>
              {description && (
                <p className="text-sm text-gray-300 group-hover:text-gray-100 transition-colors duration-300 pixelated-font text-center">
                  {description}
                </p>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
