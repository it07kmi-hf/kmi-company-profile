'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Search } from 'lucide-react'

interface HeaderProps {
  currentSection: number
  onNavigateSection: (index: number) => void
  onOpenSearch: () => void
}

export default function Header({
  currentSection,
  onNavigateSection,
  onOpenSearch,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isScrolled = currentSection > 0

  const handleNavClick = (sectionIndex: number) => {
    setMobileMenuOpen(false)
    onNavigateSection(sectionIndex)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'header-scrolled py-3' : 'header-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Official Logo Brand */}
          <Link
            href="/"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick(0)
            }}
            className="flex items-center space-x-3 group cursor-pointer"
          >
            <img
              src="/logo-kmi.png"
              alt="PT Kayu Mebel Indonesia"
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <div className="hidden sm:flex flex-col">
              <span
                className={`font-serif text-sm sm:text-base font-bold tracking-wider leading-tight ${
                  isScrolled ? 'text-gray-950' : 'text-white'
                }`}
              >
                PT KAYU MEBEL INDONESIA
              </span>
              <span
                className={`text-[9px] tracking-[0.2em] uppercase font-light ${
                  isScrolled ? 'text-gray-500' : 'text-gray-300'
                }`}
              >
                FURNITURE & HOUSING COMPONENTS · SIDOARJO
              </span>
            </div>
          </Link>

          {/* Desktop Navigation: Only COLLECTIONS, ABOUT, and SEARCH */}
          <div className="hidden lg:flex items-center space-x-8 text-xs font-semibold tracking-widest uppercase">
            <button
              onClick={() => handleNavClick(2)}
              className={`transition-colors cursor-pointer ${
                isScrolled
                  ? 'text-gray-700 hover:text-black'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              COLLECTIONS
            </button>

            <button
              onClick={() => handleNavClick(3)}
              className={`transition-colors cursor-pointer ${
                isScrolled
                  ? 'text-gray-700 hover:text-black'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              ABOUT
            </button>

            <button
              onClick={onOpenSearch}
              className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                isScrolled
                  ? 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  : 'bg-white/15 hover:bg-white/25 text-white backdrop-blur-sm'
              }`}
            >
              <Search className="w-3.5 h-3.5" />
              <span>Search</span>
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={onOpenSearch}
              className={`p-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                isScrolled
                  ? 'bg-gray-100 text-gray-700'
                  : 'bg-white/15 text-white backdrop-blur-sm'
              }`}
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white text-gray-900 border-t border-gray-100 px-6 py-6 space-y-4 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="space-y-3 text-sm font-semibold tracking-wider">
            <button
              onClick={() => handleNavClick(2)}
              className="w-full text-left py-2 border-b border-gray-100 flex justify-between items-center"
            >
              <span>COLLECTIONS</span>
              <span className="text-xs font-normal text-gray-500">Export Series</span>
            </button>
            <button
              onClick={() => handleNavClick(3)}
              className="w-full text-left py-2 border-b border-gray-100 flex justify-between items-center"
            >
              <span>ABOUT</span>
              <span className="text-xs font-normal text-gray-500">Craftsmanship & Factory</span>
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
