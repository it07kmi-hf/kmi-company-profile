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
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#8C6239] block mb-2">
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
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-block text-center px-7 py-3 bg-black hover:bg-gray-800 text-white font-semibold text-xs tracking-wider uppercase rounded-full transition-all shadow-sm"
            >
              Contact Specialist
            </a>

            {onWatchVideo && (
              <button
                onClick={onWatchVideo}
                className="w-full sm:w-auto flex items-center justify-center space-x-2 px-5 py-3 border border-gray-300 hover:border-gray-950 text-gray-900 hover:text-black font-semibold text-xs tracking-wider uppercase rounded-full transition-all cursor-pointer bg-white"
              >
                <Play className="w-3.5 h-3.5 fill-current text-gray-900" />
                <span>Watch Full Film</span>
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

        {/* Floating Play Full Film Trigger Overlay */}
        {onWatchVideo && (
          <button
            onClick={onWatchVideo}
            className="absolute bottom-6 right-6 z-20 flex items-center space-x-3 px-4 py-2.5 rounded-full bg-black/60 hover:bg-black/85 text-white border border-white/25 backdrop-blur-md transition-all transform hover:scale-105 cursor-pointer shadow-lg"
          >
            <div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center">
              <Play className="w-3 h-3 fill-current ml-0.5" />
            </div>
            <div className="text-left">
              <div className="text-[11px] font-semibold tracking-wider uppercase leading-none">
                Play Company Video
              </div>
              <div className="text-[9px] text-gray-300 tracking-wider font-light mt-0.5">
                Full 5 Min Documentary
              </div>
            </div>
          </button>
        )}
      </div>
    </section>
  )
}
