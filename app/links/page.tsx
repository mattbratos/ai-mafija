import { Music, Youtube, Instagram, Twitter, Disc, Mic, ShoppingCart } from "lucide-react"

const socialLinks = [
  { icon: Music, label: "Spotify", href: "#" },
  { icon: Disc, label: "Apple Music", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Twitter, label: "Twitter / X", href: "#" },
  { icon: Mic, label: "TikTok", href: "#" },
  { icon: ShoppingCart, label: "Merch Store", href: "#" },
]

export default function LinksPage() {
  return (
    <div className="min-h-screen pt-32 pb-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1
          className="text-7xl md:text-9xl font-black text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-green-400 bg-clip-text tracking-wider pixelated-font mb-16"
          style={{ textShadow: `0 0 15px rgba(255, 0, 255, 1), 0 0 30px rgba(0, 255, 0, 0.8)` }}
        >
          CONNECT
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {socialLinks.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm border-2 border-gray-700 rounded-lg hover:border-cyan-400 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] glitch-subtle"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 via-cyan-400/10 to-pink-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Icon
                className="w-10 h-10 mr-6 text-cyan-400 group-hover:text-pink-400 transition-colors duration-300"
                style={{ filter: "drop-shadow(0 0 10px currentColor)" }}
              />
              <span
                className="text-3xl pixelated-font text-gray-200 group-hover:text-white transition-colors duration-300"
                style={{ textShadow: "0 0 10px rgba(255,255,255,0.3)" }}
              >
                {label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
