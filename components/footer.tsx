import { siteConfig } from '@/config/site'

export function Footer() {
  return (
    <footer className="border-t-2 border-cyan-400/50 py-10 px-6 bg-black/80 backdrop-blur-md shadow-[0_0_30px_rgba(0,255,255,0.3)] relative z-10">
      <div className="max-w-7xl mx-auto flex justify-center items-center">
        <div
          className="text-lg text-gray-200 font-bold tracking-wider pixelated-font"
          style={{ textShadow: '0 0 10px rgba(0, 255, 255, 0.5)' }}
        >
          © {siteConfig.creator} {siteConfig.year}
        </div>
      </div>
    </footer>
  )
}
