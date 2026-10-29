'use client'

import { Play } from 'lucide-react'

interface CraftsmanshipSplitSectionProps {
  onWatchVideo?: () => void
}

export default function CraftsmanshipSplitSection({
  onWatchVideo,
}: CraftsmanshipSplitSectionProps) {
  return (
    <section
      id="craftsmanship"
      className="relative w-full h-full min-h-screen bg-white overflow-hidden flex flex-col lg:flex-row flex-shrink-0"
    >
      {/* Left Column (Desktop: Kiri, Mobile: Bawah) - Pure White with Clean Bold Typography like Q-Works */}
      <div className="w-full lg:w-5/12 flex flex-col justify-center px-8 sm:px-14 lg:px-20 py-12 lg:py-16 bg-white z-10 order-2 lg:order-1">
        <div className="max-w-md mx-auto lg:mx-0 text-center lg:text-left">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-medium text-emerald-700 block mb-2">
            Integrated Woodworking Facility
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-950 tracking-tight leading-tight mb-4">
            Masterpiece Furniture in Motion
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed mb-6">
            Where timeless Indonesian hand craftsmanship meets modern precision manufacturing.
            Engineered and handcrafted from our integrated facility in Sidoarjo, East Java.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
            {onWatchVideo && (
              <button
                onClick={onWatchVideo}
                className="w-full sm:w-auto flex items-center justify-center space-x-2.5 px-8 py-3.5 bg-black hover:bg-emerald-700 text-white font-semibold text-xs tracking-wider uppercase rounded-full transition-all cursor-pointer shadow-sm group"
              >
                <Play className="w-3.5 h-3.5 fill-current text-white transition-colors" />
                <span>Watch Factory Film</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Right Column (Desktop: Kanan, Mobile: Atas) - Showcase Video Loop with Interactive Badge */}
      <div className="w-full lg:w-7/12 h-80 sm:h-96 lg:h-full relative overflow-hidden order-1 lg:order-2 bg-neutral-900 group">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/video/craftsmanship-poster.jpg"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        >
          <source src="/video/craftsmanship-loop.mp4" type="video/mp4" />
        </video>

        {/* Soft gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
      </div>
    </section>
  )
}
