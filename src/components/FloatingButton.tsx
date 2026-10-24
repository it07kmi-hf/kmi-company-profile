'use client'

import { useState } from 'react'
import { Plus, Download, MessageCircle, ArrowUp } from 'lucide-react'

interface FloatingButtonProps {
  onScrollToTop?: () => void
}

export default function FloatingButton({ onScrollToTop }: FloatingButtonProps) {
  const [isOpen, setIsOpen] = useState(false)

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
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3">
      {/* Expanded Action Menu */}
      {isOpen && (
        <div className="flex flex-col space-y-2.5 items-end animate-in slide-in-from-bottom-3 duration-200">
          {/* Scroll to Top */}
          <button
            onClick={handleScrollTop}
            className="flex items-center space-x-2 px-3.5 py-2 rounded-full bg-white text-gray-800 text-xs shadow-xl border border-gray-200 hover:bg-gray-50 transition-all cursor-pointer group"
          >
            <span className="text-[11px] font-medium text-gray-700 group-hover:text-black">
              Back to Top
            </span>
            <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
              <ArrowUp className="w-3.5 h-3.5 text-gray-700" />
            </div>
          </button>

          {/* Download Catalog PDF */}
          <a
            href="https://wa.me/6281234567890?text=Halo%20PT%20Kayu%20Mebel%20Indonesia,%20saya%20ingin%20meminta%20katalog%20PDF%20lengkap"
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-2 px-3.5 py-2 rounded-full bg-white text-gray-800 text-xs shadow-xl border border-gray-200 hover:bg-gray-50 transition-all cursor-pointer group"
          >
            <span className="text-[11px] font-medium text-gray-700 group-hover:text-black">
              Request PDF Catalog
            </span>
            <div className="w-6 h-6 rounded-full bg-amber-50 flex items-center justify-center">
              <Download className="w-3.5 h-3.5 text-[#8C6239]" />
            </div>
          </a>

          {/* WhatsApp Direct */}
          <a
            href="https://wa.me/6281234567890?text=Halo%20PT%20Kayu%20Mebel%20Indonesia,%20saya%20tertarik%20dengan%20katalog%20produk%20mebel%20Anda"
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-2 px-3.5 py-2 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold shadow-xl transition-all cursor-pointer"
          >
            <span className="text-[11px] font-bold">WhatsApp Direct</span>
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
              <MessageCircle className="w-3.5 h-3.5 text-white" />
            </div>
          </a>
        </div>
      )}

      {/* Main Floating Toggle Button (Black circle with + like Q-Works) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-full bg-black hover:bg-gray-800 text-white shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer border-2 border-white"
        aria-label="Quick Actions"
      >
        <Plus
          className={`w-5 h-5 transition-transform duration-300 ${
            isOpen ? 'rotate-45' : 'rotate-0'
          }`}
        />
      </button>
    </div>
  )
}
