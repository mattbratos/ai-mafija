import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t-2 border-cyan-400/50 py-10 px-6 bg-black/80 backdrop-blur-md shadow-[0_0_30px_rgba(0,255,255,0.3)] relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <div
          className="text-lg text-gray-400 font-bold tracking-wider pixelated-font"
          style={{ textShadow: "0 0 10px rgba(0, 255, 255, 0.5)" }}
        >
          © AI MAFIJA 2025
        </div>
        <div className="flex space-x-8">
          <Link
            href="/"
            className="text-lg text-gray-400 hover:text-cyan-400 transition-all duration-300 font-bold tracking-wide hover:shadow-[0_0_15px_rgba(0,255,255,0.8)] pixelated-font"
            style={{ textShadow: "0 0 8px rgba(0, 255, 255, 0.4)" }}
          >
            Home
          </Link>
          <Link
            href="/links"
            className="text-lg text-gray-400 hover:text-cyan-400 transition-all duration-300 font-bold tracking-wide hover:shadow-[0_0_15px_rgba(0,255,255,0.8)] pixelated-font"
            style={{ textShadow: "0 0 8px rgba(0, 255, 255, 0.4)" }}
          >
            Links
          </Link>
        </div>
      </div>
    </footer>
  )
}
