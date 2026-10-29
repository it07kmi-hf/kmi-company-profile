'use client'

import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { CATEGORIES } from '@/data/mockData'

export default function CategoriesCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current
      const scrollAmount = clientWidth * 0.7
      scrollContainerRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section
      id="categories"
      className="relative w-full h-full min-h-screen bg-white text-gray-900 pt-20 sm:pt-24 pb-6 sm:pb-8 overflow-hidden flex flex-col justify-center flex-shrink-0"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        {/* Section Header (Clean, bold, compact so it NEVER collides with navbar) */}
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <div>
            <div className="inline-flex items-center space-x-1.5 text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-emerald-700 uppercase mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              <span>Export Portfolio</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-gray-950 tracking-tight">
              Explore our Categories
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center space-x-2.5">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full border border-gray-300 hover:border-emerald-600 bg-white hover:bg-emerald-50 text-gray-700 hover:text-emerald-800 flex items-center justify-center transition-all cursor-pointer shadow-sm active:scale-95"
              aria-label="Previous Category"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full border border-gray-300 hover:border-emerald-600 bg-white hover:bg-emerald-50 text-gray-700 hover:text-emerald-800 flex items-center justify-center transition-all cursor-pointer shadow-sm active:scale-95"
              aria-label="Next Category"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Categories Horizontal Carousel (Proportional card height for any laptop screen) */}
        <div
          ref={scrollContainerRef}
          className="flex space-x-4 sm:space-x-5 overflow-x-auto no-scrollbar pb-3 pt-1 scroll-smooth"
        >
          {CATEGORIES.map((category) => (
            <div
              key={category.id}
              className="flex-shrink-0 w-[240px] sm:w-[270px] md:w-[300px] group cursor-pointer"
            >
              <div className="relative h-[270px] sm:h-[300px] md:h-[330px] rounded-2xl overflow-hidden bg-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
                {/* Product Photo */}
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Soft gradient bottom overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Clean Category Title at Bottom (Like Q-Works <h4>Dining Chairs</h4>) */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 z-10 text-white text-center">
                  <h4 className="font-serif text-lg sm:text-xl font-bold tracking-wide leading-snug">
                    {category.name}
                  </h4>
                  <div className="text-[10px] text-gray-300 mt-0.5 uppercase tracking-wider font-light">
                    {category.woodType}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
