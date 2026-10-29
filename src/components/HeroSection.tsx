'use client'

import { ArrowDown, Compass, MessageCircle, Play } from 'lucide-react'

interface HeroSectionProps {
  onExploreClick: () => void
  onWatchVideo?: () => void
}

export default function HeroSection({ onExploreClick, onWatchVideo }: HeroSectionProps) {
  return (
    <section className="relative w-full h-full min-h-screen flex flex-col justify-between items-center overflow-hidden bg-black flex-shrink-0 pt-20 sm:pt-24 pb-6 sm:pb-8">
      {/* Background Visual (Curated Cinematic Factory Video Loop) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/video/hero-poster.jpg"
          className="w-full h-full object-cover scale-105"
        >
          <source src="/video/kmi-hero-loop.mp4" type="video/mp4" />
        </video>
        {/* Soft, warm atmospheric gradient overlay for crisp text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/35" />
      </div>

      {/* Spacer to balance vertical centering */}
      <div className="hidden sm:block h-2" />

      {/* Main Hero Content (Clean, editorial, no AI clutter) */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto py-4">
        {/* Main Title (Clean, bold editorial typography with PP Neue Montreal) */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.12] mb-8 sm:mb-10 drop-shadow-md">
          Mastering The Art of <br />
          <span className="italic font-normal text-[#F4E3D7]">
            Quality Furniture & Woodcraft
          </span>
        </h1>

        {/* Actions (Clean button row with Watch Video) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto px-7 py-3 bg-white hover:bg-gray-100 text-gray-950 font-semibold text-xs tracking-widest uppercase rounded-full shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center justify-center space-x-2 cursor-pointer"
          >
            <Compass className="w-4 h-4" />
            <span>Explore Products</span>
          </button>

          {onWatchVideo && (
            <button
              onClick={onWatchVideo}
              className="w-full sm:w-auto px-6 py-3 bg-white/15 hover:bg-white/25 border border-white/30 text-white font-semibold text-xs tracking-widest uppercase rounded-full backdrop-blur-md transition-all transform hover:-translate-y-0.5 flex items-center justify-center space-x-2 cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-current text-[#F4E3D7]" />
              <span>Watch Factory Film</span>
            </button>
          )}

          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-7 py-3 bg-black/40 hover:bg-black/60 border border-white/40 text-white font-semibold text-xs tracking-widest uppercase rounded-full backdrop-blur-sm transition-all transform hover:-translate-y-0.5 flex items-center justify-center space-x-2 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Direct WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Animated Bouncing Arrow */}
      <div className="relative z-10 flex flex-col items-center pt-2">
        <button
          onClick={onExploreClick}
          className="flex flex-col items-center group cursor-pointer"
          aria-label="Scroll to Categories"
        >
          <span className="text-[10px] tracking-[0.25em] uppercase text-white/80 group-hover:text-white transition-colors mb-1.5">
            Discover
          </span>
          <div className="w-8 h-8 rounded-full border border-white/40 group-hover:border-white bg-black/25 backdrop-blur-sm flex items-center justify-center transition-all animate-bounce">
            <ArrowDown className="w-3.5 h-3.5 text-white" />
          </div>
        </button>
      </div>
    </section>
  )
}
