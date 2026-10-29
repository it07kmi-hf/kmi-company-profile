'use client'

import { ChevronDown } from 'lucide-react'

interface HeroSectionProps {
  onExploreClick: () => void
  onWatchVideo?: () => void
}

export default function HeroSection({ onExploreClick }: HeroSectionProps) {
  return (
    <section className="relative w-full h-full min-h-screen flex flex-col justify-between items-center overflow-hidden bg-black flex-shrink-0 pt-20 sm:pt-24 pb-8 sm:pb-10">
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
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.12] drop-shadow-md">
          Mastering The Art of <br />
          <span className="italic font-normal text-[#F4E3D7]">
            Quality Furniture & Woodcraft
          </span>
        </h1>
      </div>

      {/* Luxury Editorial Scroll Cue (No clunky button box) */}
      <div className="relative z-10 flex flex-col items-center">
        <button
          onClick={onExploreClick}
          className="group flex flex-col items-center cursor-pointer transition-all duration-300 select-none"
          aria-label="Discover PT Kayu Mebel Indonesia"
        >
          <span className="text-[10px] sm:text-[11px] tracking-[0.35em] uppercase text-white/80 group-hover:text-emerald-300 transition-colors font-medium mb-2.5">
            Discover
          </span>

          {/* Minimalist Architectural Hairline Indicator */}
          <div className="relative flex flex-col items-center">
            {/* Fine hairline track with travelling light beam */}
            <div className="w-[1.5px] h-9 bg-white/25 group-hover:bg-emerald-400/30 overflow-hidden relative rounded-full transition-colors">
              <div className="w-full h-4 bg-gradient-to-b from-transparent via-emerald-300 to-white animate-scroll-beam" />
            </div>

            {/* Subtle hovering chevron */}
            <ChevronDown className="w-4 h-4 text-white/70 group-hover:text-emerald-300 transition-all transform group-hover:translate-y-1 mt-0.5" />
          </div>
        </button>
      </div>
    </section>
  )
}

