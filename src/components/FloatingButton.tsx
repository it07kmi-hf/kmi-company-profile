'use client'

import { ArrowUp } from 'lucide-react'

interface FloatingButtonProps {
  onScrollToTop?: () => void
}

export default function FloatingButton({ onScrollToTop }: FloatingButtonProps) {
  const handleScrollTop = () => {
    if (onScrollToTop) {
      onScrollToTop()
    } else {
      const container = document.getElementById('fullpage-main')
      if (container) {
        container.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={handleScrollTop}
        className="w-11 h-11 rounded-full bg-black/80 hover:bg-black text-white shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer border border-white/20 backdrop-blur-sm group"
        aria-label="Back to top"
      >
        <ArrowUp className="w-4 h-4 text-white group-hover:-translate-y-0.5 transition-transform" />
      </button>
    </div>
  )
}
