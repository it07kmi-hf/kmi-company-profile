'use client'

import { ShieldCheck, Trees, Globe2, MapPin, Mail, Phone } from 'lucide-react'
import { COMPANY_INFO } from '@/data/mockData'

export default function FooterSection() {
  return (
    <section
      id="contact-footer"
      className="relative w-full h-full min-h-screen bg-[#111111] text-gray-300 flex flex-col justify-between pt-20 sm:pt-24 pb-6 px-4 sm:px-6 lg:px-8 flex-shrink-0 overflow-y-auto no-scrollbar"
    >
      <div className="max-w-7xl mx-auto w-full my-auto">
        {/* Compliance Badges Row */}
        <div className="mb-6 sm:mb-8">
          <div className="text-center max-w-xl mx-auto mb-4 sm:mb-6">
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] text-emerald-400 uppercase block mb-1">
              Export Compliance & Sustainability
            </span>
            <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-white">
              Certified Legal Wood For Global Markets
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/40 transition-colors flex items-start space-x-3">
              <ShieldCheck className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-xs font-bold text-white">SVLK & V-Legal Certified</div>
                <div className="text-[11px] text-gray-400 mt-0.5 leading-snug">
                  100% legal timber certified for EU Timber Regulations & US Lacey Act.
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/40 transition-colors flex items-start space-x-3">
              <Trees className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-xs font-bold text-white">FSC Chain of Custody</div>
                <div className="text-[11px] text-gray-400 mt-0.5 leading-snug">
                  Responsible timber sourcing with strict environmental traceability.
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/40 transition-colors flex items-start space-x-3">
              <Globe2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-xs font-bold text-white">Direct Sea Export</div>
                <div className="text-[11px] text-gray-400 mt-0.5 leading-snug">
                  Direct FOB/CIF export shipping via Tanjung Perak Port (Surabaya).
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Corporate Address & Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 py-6 border-t border-white/10">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center space-x-3">
              <img
                src="/logo-kmi.png"
                alt="PT Kayu Mebel Indonesia"
                className="h-10 w-auto object-contain bg-white/10 p-1 rounded-lg"
              />
              <div>
                <span className="font-serif text-base font-bold text-white tracking-wider block">
                  {COMPANY_INFO.name}
                </span>
                <span className="text-[9px] tracking-[0.2em] text-emerald-400 uppercase font-light block">
                  ESTABLISHED {COMPANY_INFO.foundedYear} · SIDOARJO, INDONESIA
                </span>
              </div>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed font-light max-w-sm">
              Produsen dan eksportir mebel kayu solid, interior living, housing components,
              dan profil cetakan kayu berkualitas tinggi untuk pasar Jepang, Amerika Serikat, dan Eropa.
            </p>
          </div>

          {/* Official Factory Address */}
          <div className="md:col-span-4 space-y-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-white">
              Factory & Office Location
            </div>
            <div className="flex items-start space-x-2 text-xs text-gray-300">
              <MapPin className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
              <span className="leading-relaxed">
                {COMPANY_INFO.address}
              </span>
            </div>
          </div>

          {/* Direct Communication */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-white">
              Direct Inquiries
            </div>
            <div className="space-y-1.5 text-xs text-gray-300">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>{COMPANY_INFO.phone}</span>
              </div>
              <div className="pt-2">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Halo%20PT%20Kayu%20Mebel%20Indonesia`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-[#25D366] hover:bg-[#20bd5a] text-black font-semibold text-xs rounded-lg transition-all"
                >
                  <span>Chat WhatsApp Sales</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto w-full pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500">
        <div>
          © 2026 PT Kayu Mebel Indonesia. All Rights Reserved.
        </div>
        <div className="flex items-center space-x-4 mt-2 sm:mt-0">
          <span>Official Domain: kayumebel.net</span>
          <span>·</span>
          <span>Sidoarjo, Jawa Timur</span>
        </div>
      </div>
    </section>
  )
}
