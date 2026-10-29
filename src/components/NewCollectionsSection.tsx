'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { COLLECTIONS } from '@/data/mockData'

export default function NewCollectionsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? COLLECTIONS.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev === COLLECTIONS.length - 1 ? 0 : prev + 1))
  }

  const activeCollection = COLLECTIONS[activeIndex]

  return (
    <section
      id="collections"
      className="relative w-full h-full min-h-screen bg-gray-900 text-white overflow-hidden flex items-center justify-center flex-shrink-0"
    >
      {/* Fullscreen Background Banner Image */}
      <div className="absolute inset-0 z-0">
        <img
          key={activeCollection.id}
          src={activeCollection.image}
          alt={activeCollection.title}
          className="w-full h-full object-cover animate-in fade-in duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />
      </div>

      {/* Navigation Arrow Left (Like Q-Works White Arrow) */}
      <button
        onClick={handlePrev}
        className="absolute left-4 sm:left-10 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/35 hover:bg-black/75 hover:border-emerald-400/50 border border-white/20 text-white hover:text-emerald-300 flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-7 h-7" />
      </button>

      {/* Navigation Arrow Right (Like Q-Works White Arrow) */}
      <button
        onClick={handleNext}
        className="absolute right-4 sm:right-10 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/35 hover:bg-black/75 hover:border-emerald-400/50 border border-white/20 text-white hover:text-emerald-300 flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-7 h-7" />
      </button>

      {/* Clean Bottom Text Overlay (Exactly like Q-Works Section 3) */}
      <div className="absolute bottom-10 left-0 right-0 z-10 text-center px-4">
        <div className="inline-flex items-center space-x-1.5 text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-emerald-400 uppercase mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>New Season Showcase</span>
        </div>
        <h3 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold tracking-wide drop-shadow-lg mb-2">
          {activeCollection.title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-200 uppercase tracking-[0.25em] font-light drop-shadow-md">
          {activeCollection.subtitle}
        </p>

        {/* Small Dot Indicators */}
        <div className="flex items-center justify-center space-x-2 mt-4">
          {COLLECTIONS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                activeIndex === idx ? 'w-7 bg-emerald-400' : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
