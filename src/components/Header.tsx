'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Menu,
  X,
  Search,
  ChevronDown,
  Phone,
  Building,
  ShieldCheck,
  Sparkles,
  TreePine,
  Factory,
  Boxes
} from 'lucide-react'

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
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const isScrolled = currentSection > 0

  const handleNavClick = (sectionIndex: number) => {
    setMobileMenuOpen(false)
    setActiveDropdown(null)
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

          {/* Grouped Desktop Navigation Dropdowns */}
          <nav className="hidden lg:flex items-center space-x-8 text-xs font-semibold tracking-widest uppercase">
            {/* 1. PRODUCTS Dropdown */}
            <div
              className="relative py-2 group"
              onMouseEnter={() => setActiveDropdown('products')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`flex items-center space-x-1.5 transition-colors cursor-pointer ${
                  isScrolled
                    ? 'text-gray-700 hover:text-black'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                <span>PRODUCTS</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform" />
              </button>
              {activeDropdown === 'products' && (
                <div className="absolute top-full left-0 w-72 bg-white text-gray-800 rounded-xl shadow-xl border border-gray-100 p-2 animate-in fade-in slide-in-from-top-2 duration-150">
                  <button
                    onClick={() => handleNavClick(1)}
                    className="w-full text-left p-2.5 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2.5 cursor-pointer"
                  >
                    <Boxes className="w-4 h-4 text-[#8C6239]" />
                    <div>
                      <div className="font-semibold text-xs text-gray-900">Interior & Dining Furniture</div>
                      <div className="text-[10px] text-gray-500 font-normal">Tables, Chairs & Sofas</div>
                    </div>
                  </button>
                  <button
                    onClick={() => handleNavClick(1)}
                    className="w-full text-left p-2.5 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2.5 cursor-pointer"
                  >
                    <Building className="w-4 h-4 text-[#8C6239]" />
                    <div>
                      <div className="font-semibold text-xs text-gray-900">Housing Components</div>
                      <div className="text-[10px] text-gray-500 font-normal">Architectural Wood Components</div>
                    </div>
                  </button>
                  <button
                    onClick={() => handleNavClick(1)}
                    className="w-full text-left p-2.5 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2.5 cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4 text-[#8C6239]" />
                    <div>
                      <div className="font-semibold text-xs text-gray-900">Profile Mouldings</div>
                      <div className="text-[10px] text-gray-500 font-normal">Precision Moulding Profiles</div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* 2. COLLECTIONS */}
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

            {/* 3. TECHNOLOGY & FACILITY Dropdown */}
            <div
              className="relative py-2 group"
              onMouseEnter={() => setActiveDropdown('facility')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`flex items-center space-x-1.5 transition-colors cursor-pointer ${
                  isScrolled
                    ? 'text-gray-700 hover:text-black'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                <span>FACILITY & TECH</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform" />
              </button>
              {activeDropdown === 'facility' && (
                <div className="absolute top-full left-0 w-72 bg-white text-gray-800 rounded-xl shadow-xl border border-gray-100 p-2 animate-in fade-in slide-in-from-top-2 duration-150">
                  <button
                    onClick={() => handleNavClick(3)}
                    className="w-full text-left p-2.5 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2.5 cursor-pointer"
                  >
                    <Factory className="w-4 h-4 text-[#8C6239]" />
                    <div>
                      <div className="font-semibold text-xs text-gray-900">Japanese & German Machinery</div>
                      <div className="text-[10px] text-gray-500 font-normal">High Precision CNC Woodworking</div>
                    </div>
                  </button>
                  <button
                    onClick={() => handleNavClick(4)}
                    className="w-full text-left p-2.5 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2.5 cursor-pointer"
                  >
                    <ShieldCheck className="w-4 h-4 text-[#2e7d32]" />
                    <div>
                      <div className="font-semibold text-xs text-gray-900">SVLK & V-Legal Timber</div>
                      <div className="text-[10px] text-gray-500 font-normal">Certified Sustainable Supply</div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* 4. ABOUT */}
            <button
              onClick={() => handleNavClick(3)}
              className={`transition-colors cursor-pointer ${
                isScrolled
                  ? 'text-gray-700 hover:text-black'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              ABOUT KMI
            </button>

            {/* 5. CONTACT */}
            <button
              onClick={() => handleNavClick(4)}
              className={`transition-colors cursor-pointer ${
                isScrolled
                  ? 'text-gray-700 hover:text-black'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              CONTACT
            </button>
          </nav>

          {/* Right Action: Clean Search Button + Direct Contact */}
          <div className="flex items-center space-x-3">
            <button
              onClick={onOpenSearch}
              className={`flex items-center space-x-1 px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                isScrolled
                  ? 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  : 'bg-white/15 hover:bg-white/25 text-white backdrop-blur-sm'
              }`}
            >
              <Search className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Search</span>
            </button>

            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noreferrer"
              className={`hidden sm:inline-flex items-center space-x-1.5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                isScrolled
                  ? 'bg-[#1A1A1A] text-white hover:bg-[#8C6239]'
                  : 'bg-white text-gray-950 hover:bg-[#F3EFE6]'
              }`}
            >
              <Phone className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            {/* Mobile Hamburger Menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
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
              onClick={() => handleNavClick(1)}
              className="w-full text-left py-2 border-b border-gray-100 flex justify-between items-center"
            >
              <span>PRODUCTS</span>
              <span className="text-xs font-normal text-gray-500">Furniture & Housing</span>
            </button>
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
              <span>FACILITY & TECH</span>
              <span className="text-xs font-normal text-gray-500">Sidoarjo Factory</span>
            </button>
            <button
              onClick={() => handleNavClick(4)}
              className="w-full text-left py-2 border-b border-gray-100 flex justify-between items-center"
            >
              <span>CONTACT</span>
              <span className="text-xs font-normal text-gray-500">Krian, Sidoarjo</span>
            </button>
          </div>

          <div className="pt-2">
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 bg-[#1A1A1A] hover:bg-[#8C6239] text-white text-xs font-semibold tracking-wider uppercase rounded-xl flex items-center justify-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>Hubungi via WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
