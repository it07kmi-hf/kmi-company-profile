'use client'

import {
  MapPin,
  Mail,
  Phone
} from 'lucide-react'

export default function Footer() {
  return (
    <footer id="footer" className="fullpage-auto relative bg-[#141414] text-gray-400 pt-16 pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-gray-800">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/logo-kmi.png"
                alt="Logo PT Kayu Mebel Indonesia"
                className="h-10 w-auto object-contain bg-white/10 p-1 rounded-lg"
              />
              <div>
                <span className="font-serif text-base font-bold text-white tracking-wider block">
                  PT KAYU MEBEL INDONESIA
                </span>
                <span className="text-[9px] tracking-[0.2em] text-emerald-400 uppercase font-light block">
                  SIDOARJO · EAST JAVA · INDONESIA
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed font-light">
              Pabrik manufaktur dan eksportir mebel kayu solid premium (Jati & Mahoni).
              Melayani pesanan OEM, private label, dan proyek hospitality global
              dengan standar legalitas kayu SVLK & FSC bersertifikat.
            </p>

            <div className="flex items-center space-x-3 pt-2 text-emerald-400">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-gray-700 hover:border-emerald-400 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-gray-700 hover:border-emerald-400 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.6 5H18V0h-3.808C10.595 0 9 1.583 9 4.615V8z"/>
                </svg>
              </a>
              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-gray-700 hover:border-emerald-400 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-white">
              Navigation
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#categories" className="hover:text-white transition-colors">
                  Product Categories
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-white transition-colors">
                  New Collections
                </a>
              </li>
              <li>
                <a href="#craftsmanship" className="hover:text-white transition-colors">
                  OEM Capabilities
                </a>
              </li>
              <li>
                <a href="#certifications" className="hover:text-white transition-colors">
                  SVLK & Sustainability
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Timber Materials */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-white">
              Timber Materials
            </div>
            <ul className="space-y-2 text-xs">
              <li>Grade A Indonesian Teak</li>
              <li>Kiln-Dried Mahogany</li>
              <li>Sonokeling (Rosewood)</li>
              <li>Sungkai Wood</li>
              <li>Outdoor Weatherproof Teak</li>
            </ul>
          </div>

          {/* Col 4: Facility Address & Contacts */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-white">
              Factory & Contacts
            </div>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>
                  Kawasan Industri Sidoarjo, Jawa Timur 61254, Indonesia
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>info@kayumebel.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>+62 291 591 888 / +62 812-3456-7890</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500 space-y-3 sm:space-y-0">
          <div>
            © 2026 PT Kayu Mebel Indonesia. All Rights Reserved.
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              Direct Contact
            </a>
            <span>·</span>
            <span>SVLK Certificate: VL-082/KMI</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
