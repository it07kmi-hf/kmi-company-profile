'use client'

import { ShieldCheck, Trees, Globe2, MapPin } from 'lucide-react'

export default function FooterSection() {
  return (
    <section
      id="contact-footer"
      className="relative w-full h-full min-h-screen bg-[#0d0f12] text-gray-300 flex flex-col justify-between pt-20 sm:pt-24 pb-8 px-6 sm:px-10 lg:px-16 flex-shrink-0 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full my-auto flex flex-col justify-center">
        {/* Bold Architectural Headline */}
        <div className="mb-8 sm:mb-12">
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-emerald-400 uppercase block mb-3">
            Global Manufacturing & Export Standards
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.15] max-w-3xl">
            Certified Legal Woodcraft <br className="hidden sm:inline" />
            <span className="text-gray-400 font-normal italic">For International Markets</span>
          </h2>
        </div>

        {/* Clean 2-Column Editorial Grid (Direct Contact removed) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14 py-8 border-y border-white/10">
          {/* Column 1: Manufacturing Facility & Logistics */}
          <div className="md:col-span-6 space-y-4">
            <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400">
              Manufacturing Facility & Port
            </div>
            <div className="space-y-2 text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
              <div className="font-serif text-lg sm:text-xl font-bold text-white tracking-wide">
                PT Kayu Mebel Indonesia
              </div>
              <div className="flex items-start space-x-2 text-gray-300 pt-1">
                <MapPin className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>
                  Jl. Manunggal Jati No. KM 23, Krian, Sidoarjo, Jawa Timur 61262, Indonesia
                </span>
              </div>
              <div className="pt-2 text-emerald-400 text-xs font-medium">
                Direct sea export container dispatch via Tanjung Perak Port (Surabaya) · FOB / CIF
              </div>
            </div>
          </div>

          {/* Column 2: Export Compliance Credentials */}
          <div className="md:col-span-6 space-y-4">
            <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400">
              Export Compliance & Sustainability
            </div>
            <div className="space-y-3.5 text-xs sm:text-sm">
              <div className="flex items-start space-x-3 text-gray-200">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <div className="font-semibold text-white">SVLK & V-Legal Certified</div>
                  <div className="text-gray-400 text-xs font-light mt-0.5">
                    100% verified legal timber sourced according to Indonesian national standards.
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-gray-200">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Trees className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <div className="font-semibold text-white">FSC Chain of Custody</div>
                  <div className="text-gray-400 text-xs font-light mt-0.5">
                    Strict environmental traceability from sustainably managed teak & mahogany plantations.
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-gray-200">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Globe2 className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <div className="font-semibold text-white">EU Timber & US Lacey Act Compliant</div>
                  <div className="text-gray-400 text-xs font-light mt-0.5">
                    Full regulatory clearance for smooth customs entry into European, US, and Japanese ports.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Corporate Minimalist Footer Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-3">
          <div className="flex items-center space-x-3">
            <img
              src="/logo-kmi.png"
              alt="PT Kayu Mebel Indonesia"
              className="h-7 w-auto object-contain opacity-85"
            />
            <span className="font-serif font-semibold text-gray-300 text-sm">
              PT Kayu Mebel Indonesia
            </span>
          </div>

          <div className="flex items-center space-x-3 text-[11px] text-gray-400">
            <span>© 2026 PT Kayu Mebel Indonesia</span>
            <span>·</span>
            <span>kayumebel.net</span>
          </div>
        </div>
      </div>
    </section>
  )
}
