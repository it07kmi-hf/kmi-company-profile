'use client'

import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  videoSrc?: string
}

export default function VideoModal({
  isOpen,
  onClose,
  videoSrc = '/video/video_company_profile.mp4',
}: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
      if (videoRef.current) {
        videoRef.current.currentTime = 0
        videoRef.current.play().catch(() => {})
      }
    } else {
      document.body.style.overflow = ''
      if (videoRef.current) {
        videoRef.current.pause()
      }
    }

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/95 backdrop-blur-2xl p-4 sm:p-6 md:p-8 animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Top Floating Cinema Bar */}
      <div
        className="w-full max-w-4xl flex items-center justify-between pb-3 sm:pb-4 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center space-x-2.5">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-white/90">
            Factory Tour & Craftsmanship Film
          </span>
          <span className="hidden sm:inline text-xs text-white/40">·</span>
          <span className="hidden sm:inline text-xs text-white/50 tracking-wider">
            PT Kayu Mebel Indonesia
          </span>
        </div>

        <button
          onClick={onClose}
          className="flex items-center space-x-1.5 px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-all cursor-pointer border border-white/15 active:scale-95"
          aria-label="Close cinema mode"
        >
          <span className="text-[10px] tracking-widest uppercase font-mono">ESC</span>
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Main Video Cinema Frame */}
      <div
        className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/20"
        onClick={(e) => e.stopPropagation()}
      >
        <video
          ref={videoRef}
          src={videoSrc}
          controls
          autoPlay
          playsInline
          className="w-full h-full object-contain bg-black"
        >
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Subtle Bottom Caption */}
      <div
        className="w-full max-w-4xl flex items-center justify-between pt-3 text-[11px] text-white/40"
        onClick={(e) => e.stopPropagation()}
      >
        <span>Full Company Profile (5:35)</span>
        <button
          onClick={onClose}
          className="hover:text-white/80 transition-colors cursor-pointer"
        >
          Click anywhere outside to close ✕
        </button>
      </div>
    </div>
  )
}
