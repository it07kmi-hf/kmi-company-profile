'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import CategoriesCarousel from '@/components/CategoriesCarousel'
import NewCollectionsSection from '@/components/NewCollectionsSection'
import CraftsmanshipSplitSection from '@/components/CraftsmanshipSplitSection'
import FooterSection from '@/components/FooterSection'
import FloatingButton from '@/components/FloatingButton'
import SearchModal from '@/components/SearchModal'
import VideoModal from '@/components/VideoModal'

const TOTAL_SECTIONS = 5

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0)
  const [searchOpen, setSearchOpen] = useState(false)
  const [videoModalOpen, setVideoModalOpen] = useState(false)
  const isAnimatingRef = useRef(false)
  const currentSectionRef = useRef(0)

  useEffect(() => {
    currentSectionRef.current = currentSection
  }, [currentSection])

  const goToSection = useCallback((index: number) => {
    if (index < 0 || index >= TOTAL_SECTIONS) return
    if (index === currentSectionRef.current) return

    isAnimatingRef.current = true
    setCurrentSection(index)

    // Lock further scrolls until 1000ms smooth animation completes
    setTimeout(() => {
      isAnimatingRef.current = false
    }, 1050)
  }, [])

  // Wheel listener for single-scroll precision slide (like fullPage.js)
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Allow horizontal scroll on category carousel without triggering vertical slide
      const target = e.target as HTMLElement | null
      if (
        target?.closest('#categories') &&
        Math.abs(e.deltaX) > Math.abs(e.deltaY)
      ) {
        return
      }

      if (isAnimatingRef.current) return

      // Threshold to prevent micro-jitters
      if (Math.abs(e.deltaY) < 30) return

      if (e.deltaY > 0) {
        // Scroll down
        if (currentSectionRef.current < TOTAL_SECTIONS - 1) {
          goToSection(currentSectionRef.current + 1)
        }
      } else {
        // Scroll up
        if (currentSectionRef.current > 0) {
          goToSection(currentSectionRef.current - 1)
        }
      }
    }

    let touchStartY = 0
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY
    }

    const handleTouchEnd = (e: TouchEvent) => {
      if (isAnimatingRef.current) return
      const diff = touchStartY - e.changedTouches[0].clientY
      if (Math.abs(diff) < 45) return

      if (diff > 0) {
        if (currentSectionRef.current < TOTAL_SECTIONS - 1) {
          goToSection(currentSectionRef.current + 1)
        }
      } else {
        if (currentSectionRef.current > 0) {
          goToSection(currentSectionRef.current - 1)
        }
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (['ArrowDown', 'PageDown'].includes(e.code)) {
        e.preventDefault()
        if (currentSectionRef.current < TOTAL_SECTIONS - 1) {
          goToSection(currentSectionRef.current + 1)
        }
      } else if (['ArrowUp', 'PageUp'].includes(e.code)) {
        e.preventDefault()
        if (currentSectionRef.current > 0) {
          goToSection(currentSectionRef.current - 1)
        }
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: true })
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchend', handleTouchEnd, { passive: true })
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend', handleTouchEnd)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [goToSection])

  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden bg-white text-gray-900 select-none">
      {/* Navigation Header */}
      <Header
        currentSection={currentSection}
        onNavigateSection={goToSection}
        onOpenSearch={() => setSearchOpen(true)}
      />

      {/* FullPage Slide Container with exact 1000ms cubic-bezier (matching Q-Works fullPage.js) */}
      <div
        className="w-full h-full flex flex-col will-change-transform"
        style={{
          transform: `translateY(-${currentSection * 100}%)`,
          transition: 'transform 1000ms cubic-bezier(0.645, 0.045, 0.355, 1)',
        }}
      >
        {/* SECTION 0: HERO (100vh) */}
        <div className="w-full h-screen flex-shrink-0 relative overflow-hidden">
          <HeroSection
            onExploreClick={() => goToSection(1)}
            onWatchVideo={() => setVideoModalOpen(true)}
          />
        </div>

        {/* SECTION 1: EXPLORE OUR CATEGORIES (100vh - Pure White & Carousel) */}
        <div className="w-full h-screen flex-shrink-0 relative overflow-hidden">
          <CategoriesCarousel />
        </div>

        {/* SECTION 2: SEASONS NEW COLLECTIONS (100vh - Full Banner Slider) */}
        <div className="w-full h-screen flex-shrink-0 relative overflow-hidden">
          <NewCollectionsSection />
        </div>

        {/* SECTION 3: CRAFTSMANSHIP & SIDOARJO FACILITY (100vh - Split Screen) */}
        <div className="w-full h-screen flex-shrink-0 relative overflow-hidden">
          <CraftsmanshipSplitSection
            onWatchVideo={() => setVideoModalOpen(true)}
          />
        </div>

        {/* SECTION 4: COMPLIANCE, FACTORY LOCATION & FOOTER (100vh) */}
        <div className="w-full h-screen flex-shrink-0 relative overflow-hidden">
          <FooterSection />
        </div>
      </div>

      {/* Floating Action Button (Dynamic Scroll to Top / Bottom) */}
      <FloatingButton
        currentSection={currentSection}
        totalSections={TOTAL_SECTIONS}
        onNavigateSection={goToSection}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectResult={() => goToSection(1)}
      />

      {/* Full Company Profile Video Cinema Modal */}
      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        videoSrc="/video/video_company_profile.mp4"
      />
    </div>
  )
}
