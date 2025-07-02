import { Instagram, Music, Youtube } from 'lucide-react'
import { Rapper } from '@/config/rappers'

export function RapperCard({ rapper }: { rapper: Rapper }) {
  return (
    <div className="group relative bg-black/60 backdrop-blur-sm border-2 border-gray-700 rounded-lg p-6 hover:border-cyan-400 transition-all duration-700 hover:shadow-[0_0_40px_rgba(0,255,255,0.6)] glitch-subtle w-full max-w-sm aspect-square flex flex-col justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 via-cyan-400/20 to-pink-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-green-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
      <div className="relative z-10 text-center space-y-4 flex flex-col justify-center h-full">
        <div className="relative mx-auto w-32 h-32 md:w-40 md:h-40">
          <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-pink-500 rounded-full blur-xl opacity-0 group-hover:opacity-80 transition-opacity duration-700 shadow-[0_0_40px_rgba(0,255,255,0.8)]"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-500 animate-ping"></div>
          <img
            src={rapper.image || '/placeholder.svg'}
            alt={rapper.nickname}
            className="relative w-full h-full rounded-full border-3 border-gray-600 group-hover:border-cyan-400 transition-all duration-500 object-cover shadow-[0_0_20px_rgba(0,255,255,0.5)] group-hover:shadow-[0_0_40px_rgba(0,255,255,1)] glitch-image"
          />
        </div>
        <h3
          className="text-xl md:text-2xl font-black text-transparent bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text tracking-wider pixelated-font"
          style={{ textShadow: '0 0 10px rgba(0, 255, 255, 0.8), 0 0 20px rgba(0, 255, 0, 0.6)' }}
        >
          {rapper.nickname}
        </h3>
        <p className="text-gray-100 text-sm md:text-base group-hover:text-white transition-colors duration-500 font-bold tracking-wide pixelated-font px-2">
          {rapper.description}
        </p>
        <div className="flex justify-center space-x-3 pt-2">
          {[Instagram, Music, Youtube].map((Icon, index) => (
            <button
              key={index}
              className="p-1.5 text-gray-200 hover:text-pink-400 transition-all duration-500 hover:scale-110 border border-gray-500 rounded-full hover:border-pink-400 hover:shadow-[0_0_20px_rgba(236,72,153,1)] glitch-icon flex-shrink-0"
            >
              <Icon className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
