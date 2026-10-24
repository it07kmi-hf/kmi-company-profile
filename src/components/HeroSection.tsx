'use client'

import { ArrowDown, Compass, MessageCircle } from 'lucide-react'

interface HeroSectionProps {
  onExploreClick: () => void
}

export default function HeroSection({ onExploreClick }: HeroSectionProps) {
  return (
    <section className="relative w-full h-full min-h-screen flex flex-col justify-between items-center overflow-hidden bg-white flex-shrink-0 pt-20 sm:pt-24 pb-6 sm:pb-8">
      {/* Background Visual (Clean, Warm Wood Atmosphere) */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2200&auto=format&fit=crop"
          alt="PT Kayu Mebel Indonesia Sidoarjo"
          className="w-full h-full object-cover"
        />
        {/* Soft, warm atmospheric gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/25" />
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

        {/* Actions (Clean button row) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto px-7 py-3 bg-white hover:bg-gray-100 text-gray-950 font-semibold text-xs tracking-widest uppercase rounded-full shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center justify-center space-x-2 cursor-pointer"
          >
            <Compass className="w-4 h-4" />
            <span>Explore Products</span>
          </button>

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

      {/* Animated Bouncing Arrow (Placed in natural bottom flow, NEVER overlapping buttons) */}
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
