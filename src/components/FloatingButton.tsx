'use client'

import { ArrowDown, ArrowUp } from 'lucide-react'

interface FloatingButtonProps {
  currentSection: number
  totalSections: number
  onNavigateSection: (index: number) => void
}

export default function FloatingButton({
  currentSection,
  totalSections,
  onNavigateSection,
}: FloatingButtonProps) {
  // When at top half (sections 0, 1), scroll to bottom (section 4)
  // When at bottom half (sections 2, 3, 4), scroll to top (section 0)
  const isTopHalf = currentSection < Math.floor(totalSections / 2)

  const handleClick = () => {
    if (isTopHalf) {
      onNavigateSection(totalSections - 1)
    } else {
      onNavigateSection(0)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={handleClick}
        className="w-11 h-11 rounded-full bg-black/80 hover:bg-black text-white shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer border border-white/20 backdrop-blur-sm group"
        aria-label={isTopHalf ? 'Scroll to bottom' : 'Scroll to top'}
        title={isTopHalf ? 'Scroll to bottom' : 'Scroll to top'}
      >
        {isTopHalf ? (
          <ArrowDown className="w-4 h-4 text-white group-hover:translate-y-0.5 transition-transform" />
        ) : (
          <ArrowUp className="w-4 h-4 text-white group-hover:-translate-y-0.5 transition-transform" />
        )}
      </button>
    </div>
  )
}
