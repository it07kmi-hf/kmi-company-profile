'use client'

import { useState } from 'react'
import { X, Sparkles, Send, CheckCircle2, ShieldCheck, PhoneCall } from 'lucide-react'
import { submitInquiry } from '@/lib/actions'

interface QuoteModalProps {
  isOpen: boolean
  onClose: () => void
  initialProductName?: string
}

export default function QuoteModal({
  isOpen,
  onClose,
  initialProductName = '',
}: QuoteModalProps) {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [company, setCompany] = useState('')
  const [woodType, setWoodType] = useState('Grade A Teak (Tectona grandis)')
  const [productName, setProductName] = useState(initialProductName)
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [resultMessage, setResultMessage] = useState('')

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const fullMessage = `[Wood Type: ${woodType}] [Item/Catalog: ${productName || 'General Inquiry'}] \n\n${message}`
      const response = await submitInquiry({
        fullName,
        email,
        phone,
        company,
        subject: `RFQ: ${productName || 'General Furniture Catalog'}`,
        productName: productName || undefined,
        message: fullMessage,
      })

      if (response.success) {
        setIsSuccess(true)
        setResultMessage(response.message)
      }
    } catch (err) {
      console.error(err)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleResetAndClose = () => {
    setIsSuccess(false)
    setFullName('')
    setEmail('')
    setPhone('')
    setCompany('')
    setMessage('')
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl glass-card rounded-3xl p-6 sm:p-8 border border-[#C58F58]/30 shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#508D69]/20 border border-[#508D69]/50 text-[#508D69] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-white">
              Permintaan Penawaran Terkirim
            </h3>
            <p className="text-sm text-[#C8BFB5] max-w-md mx-auto leading-relaxed">
              {resultMessage ||
                'Data inquiry Anda telah tersimpan ke sistem database PT Kayu Mebel Indonesia. Tim export sales representative kami akan menghubungi Anda.'}
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/6281234567890?text=Halo%20PT%20Kayu%20Mebel%20Indonesia,%20saya%20sudah%20mengirimkan%20inquiry%20di%20website"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#D4A373] to-[#C58F58] text-black font-semibold text-xs tracking-wider uppercase flex items-center justify-center space-x-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Chat Sales via WhatsApp</span>
              </a>
              <button
                onClick={handleResetAndClose}
                className="px-6 py-2.5 rounded-full border border-white/20 hover:border-white/40 text-white text-xs tracking-wider uppercase"
              >
                Tutup
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center space-x-2 text-[#D4A373] text-xs font-semibold tracking-[0.2em] uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Inquiry / RFQ System</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
              Request a Quotation
            </h3>
            <p className="text-xs text-[#A89F94] mb-6 font-light">
              Hubungkan proyek hospitality atau retail Anda dengan pabrik langsung di Jepara.
              Data tersimpan aman ke database perusahaan.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold text-[#E0D7CC] uppercase tracking-wider mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Budi Santoso / John Doe"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#14100C] border border-white/10 focus:border-[#D4A373] text-sm text-white placeholder-white/30 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-[#E0D7CC] uppercase tracking-wider mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="budi@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#14100C] border border-white/10 focus:border-[#D4A373] text-sm text-white placeholder-white/30 outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold text-[#E0D7CC] uppercase tracking-wider mb-1.5">
                    WhatsApp / Phone Number
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+62 812 xxxx xxxx"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#14100C] border border-white/10 focus:border-[#D4A373] text-sm text-white placeholder-white/30 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-[#E0D7CC] uppercase tracking-wider mb-1.5">
                    Company / Firm Name
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="PT Interior Asia / Arch Studio"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#14100C] border border-white/10 focus:border-[#D4A373] text-sm text-white placeholder-white/30 outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold text-[#E0D7CC] uppercase tracking-wider mb-1.5">
                    Preferred Hardwood / Timber
                  </label>
                  <select
                    value={woodType}
                    onChange={(e) => setWoodType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#14100C] border border-white/10 focus:border-[#D4A373] text-sm text-white outline-none transition-colors"
                  >
                    <option value="Grade A Teak (Tectona grandis)">Grade A Teak (Tectona grandis)</option>
                    <option value="FSC Plantation Teak">FSC Plantation Teak</option>
                    <option value="Solid Indonesian Mahogany">Solid Indonesian Mahogany</option>
                    <option value="Sonokeling (Indonesian Rosewood)">Sonokeling (Rosewood)</option>
                    <option value="Sungkai (White Teak)">Sungkai Wood</option>
                    <option value="Mixed Teak & Stainless Steel / Alu">Mixed Material (Wood + Alu/Iron)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-[#E0D7CC] uppercase tracking-wider mb-1.5">
                    Collection / Project Name
                  </label>
                  <input
                    type="text"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    placeholder="e.g. Dining Table Set 2026"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#14100C] border border-white/10 focus:border-[#D4A373] text-sm text-white placeholder-white/30 outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#E0D7CC] uppercase tracking-wider mb-1.5">
                  Specification Details & Quantity *
                </label>
                <textarea
                  required
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Detail ukuran (PxLxT), jumlah kontainer / unit, finishing (natural teak oil, duco, polyurethane), dsb..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#14100C] border border-white/10 focus:border-[#D4A373] text-sm text-white placeholder-white/30 outline-none transition-colors"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-gradient-to-r from-[#D4A373] via-[#E8C29D] to-[#C58F58] hover:scale-[1.02] text-black font-semibold text-xs tracking-widest uppercase rounded-xl shadow-xl shadow-[#C58F58]/20 transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Menyimpan ke Database...' : 'Submit Request for Quote'}</span>
                </button>
              </div>

              <div className="flex items-center justify-center space-x-2 text-[10px] text-[#A69B8F] text-center pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#508D69]" />
                <span>Data tersimpan langsung ke MySQL Database PT Kayu Mebel Indonesia</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
