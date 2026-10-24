'use client'

import { ShieldCheck, Trees, ThermometerSun, Box, Globe2, Award } from 'lucide-react'

const CERTS = [
  {
    icon: ShieldCheck,
    title: 'SVLK Certified',
    subtitle: 'V-Legal Timber',
    desc: 'Indonesian Timber Legality Assurance System complying with EU Timber Regulations and US Lacey Act.',
  },
  {
    icon: Trees,
    title: 'FSC Chain of Custody',
    subtitle: 'Sustainable Forests',
    desc: 'Timber harvested from responsibly managed state plantations (Perum Perhutani) ensuring zero deforestation.',
  },
  {
    icon: ThermometerSun,
    title: 'Kiln-Dried Standards',
    subtitle: '8% - 12% Moisture Content',
    desc: 'Computerized moisture stabilization preventing cracking and warping in European & US winters.',
  },
  {
    icon: Box,
    title: 'Export Packaging',
    subtitle: 'Drop-Test Compliant',
    desc: 'ISTA-3A compliant 5-ply corrugated carton with corner foam edge protection and desiccant packs.',
  },
  {
    icon: Globe2,
    title: 'Global Logistics',
    subtitle: 'FOB / CIF Available',
    desc: 'Direct container stuffing from Sidoarjo facility to Tanjung Perak Port (Surabaya) and Tanjung Emas.',
  },
  {
    icon: Award,
    title: 'Quality Warranty',
    subtitle: 'Structural Guarantee',
    desc: 'Comprehensive structural integrity warranty for contract hospitality installations.',
  },
]

export default function CertificationsSection() {
  return (
    <section
      id="certifications"
      className="fullpage-auto relative w-full py-20 sm:py-28 bg-[#FBF9F5] text-gray-900 border-t border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#8C6239] uppercase block mb-1">
            Global Compliance & Integrity
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-950 mt-1">
            Standards Built For Global Exporters
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-2 font-light">
            Every product manufactured by PT Kayu Mebel Indonesia adheres to rigorous international legal and environmental benchmarks.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTS.map((cert, idx) => {
            const Icon = cert.icon
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-gray-200/80 hover:border-[#8C6239]/50 shadow-sm hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-[#8C6239] mb-4 group-hover:scale-105 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-[11px] uppercase tracking-wider text-[#8C6239] font-mono font-semibold">
                  {cert.subtitle}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mt-1 mb-2 font-serif">
                  {cert.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed font-light">
                  {cert.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
