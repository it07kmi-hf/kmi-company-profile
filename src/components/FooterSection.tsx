'use client'

import { MapPin, ArrowUpRight } from 'lucide-react'

export default function FooterSection() {
  return (
    <section
      id="contact-footer"
      className="relative w-full h-full min-h-screen bg-[#0d0f12] text-gray-300 flex flex-col justify-between pt-24 sm:pt-28 pb-8 sm:pb-10 px-6 sm:px-10 lg:px-16 flex-shrink-0 overflow-hidden"
    >
      {/* Centered Main Editorial Content */}
      <div className="max-w-5xl mx-auto w-full my-auto flex flex-col justify-center">
        {/* Editorial Subtitle & Main Title */}
        <div className="mb-8 sm:mb-10 text-center sm:text-left">
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-emerald-400 uppercase block mb-3">
            Global Manufacturing & Export
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.15]">
            Precision Woodcraft Built <br className="hidden sm:inline" />
            <span className="text-gray-400 font-normal italic">For International Markets</span>
          </h2>
        </div>

        {/* Facility & Careers Quick Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10 py-6 sm:py-8 border-y border-white/10">
          {/* Manufacturing Facility Info */}
          <div className="md:col-span-7 space-y-3">
            <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400">
              Manufacturing Facility
            </div>
            <div className="space-y-1.5 text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
              <div className="font-serif text-base sm:text-lg font-bold text-white tracking-wide">
                PT Kayu Mebel Indonesia
              </div>
              <div className="flex items-start space-x-2 text-gray-300">
                <MapPin className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>
                  Jl. Manunggal Jati No. KM 23, Krian, Sidoarjo, Jawa Timur 61262, Indonesia
                </span>
              </div>
            </div>
          </div>

          {/* Careers & Talent Portal Link */}
          <div className="md:col-span-5 flex flex-col justify-center sm:items-start md:items-end">
            <a
              href="https://recruitment.kayumebel.net/careers"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center space-x-2.5 px-6 py-3 rounded-md bg-white/5 hover:bg-emerald-500/15 border border-white/15 hover:border-emerald-400/50 text-white transition-all shadow-sm cursor-pointer"
            >
              <div className="text-left">
                <div className="text-[10px] text-emerald-400 uppercase tracking-widest font-semibold">
                  Join Our Team
                </div>
                <div className="text-xs sm:text-sm font-medium tracking-wide">
                  Explore Careers at KMI
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform ml-1" />
            </a>
          </div>
        </div>
      </div>

      {/* Corporate Bottom Bar - Permanently In-View */}
      <div className="max-w-5xl mx-auto w-full pt-4 sm:pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-3 border-t border-white/5">
        <div className="flex items-center space-x-3">
          <img
            src="/logo-kmi.png"
            alt="PT Kayu Mebel Indonesia"
            className="h-7 w-auto object-contain opacity-90"
          />
          <span className="font-serif font-semibold text-gray-300 text-sm">
            PT Kayu Mebel Indonesia
          </span>
        </div>

        <div className="flex items-center space-x-3 text-[11px] text-gray-500">
          <span>© 2026 PT Kayu Mebel Indonesia</span>
          <span>·</span>
          <span>kayumebel.net</span>
        </div>
      </div>
    </section>
  )
}
