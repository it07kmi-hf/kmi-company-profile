'use client'

import { ShieldCheck, Trees, Globe2, ArrowUpRight, MessageCircle } from 'lucide-react'
import { COMPANY_INFO } from '@/data/mockData'

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
            Global Export & Manufacturing
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.15] max-w-3xl">
            Start Your Production Inquiry
          </h2>
        </div>

        {/* Clean 3-Column Editorial Grid (No walls of text) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 py-8 border-y border-white/10">
          {/* Column 1: Direct Inquiries */}
          <div className="md:col-span-5 space-y-4">
            <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400">
              Direct Contact
            </div>
            <div>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="group inline-flex items-center space-x-1.5 text-xl sm:text-2xl font-serif text-white hover:text-emerald-400 transition-colors"
              >
                <span>{COMPANY_INFO.email}</span>
                <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-emerald-400 transition-colors" />
              </a>
              <div className="text-xs sm:text-sm text-gray-400 mt-1 font-light">
                Phone: {COMPANY_INFO.phone}
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Halo%20PT%20Kayu%20Mebel%20Indonesia`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs tracking-wider uppercase rounded-full transition-all shadow-md hover:shadow-emerald-600/30"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>Chat via WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Column 2: Facility & Logistics */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400">
              Facility & Port
            </div>
            <div className="text-xs text-gray-300 leading-relaxed font-light space-y-1">
              <div className="font-medium text-white">Sidoarjo Integrated Plant</div>
              <div>Jl. Manunggal Jati No. KM 23, Krian</div>
              <div>Sidoarjo, East Java 61262, Indonesia</div>
              <div className="pt-1.5 text-emerald-400 text-[11px]">
                Direct export via Tanjung Perak Port (FOB / CIF)
              </div>
            </div>
          </div>

          {/* Column 3: Compliance Credential Chips */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400">
              Export Compliance
            </div>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-center space-x-2.5 text-gray-200">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="font-light">SVLK & V-Legal Certified</span>
              </div>
              <div className="flex items-center space-x-2.5 text-gray-200">
                <Trees className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="font-light">FSC Chain of Custody</span>
              </div>
              <div className="flex items-center space-x-2.5 text-gray-200">
                <Globe2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="font-light">EU Timber & US Lacey Act</span>
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
