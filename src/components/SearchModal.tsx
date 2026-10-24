'use client'

import { useState } from 'react'
import { Search, X, ArrowRight, Sparkles } from 'lucide-react'
import { CATEGORIES, COLLECTIONS } from '@/data/mockData'

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
  onSelectResult?: (name: string) => void
}

export default function SearchModal({
  isOpen,
  onClose,
  onSelectResult,
}: SearchModalProps) {
  const [query, setQuery] = useState('')

  if (!isOpen) return null

  const filteredCategories = CATEGORIES.filter(
    (c) =>
      c.name.toLowerCase().includes(query.toLowerCase()) ||
      c.woodType.toLowerCase().includes(query.toLowerCase())
  )

  const filteredCollections = COLLECTIONS.filter(
    (col) =>
      col.title.toLowerCase().includes(query.toLowerCase()) ||
      col.wood.toLowerCase().includes(query.toLowerCase())
  )

  const handleItemClick = (name: string) => {
    onClose()
    if (onSelectResult) {
      onSelectResult(name)
    } else {
      const el = document.getElementById('categories')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 md:p-20 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-2xl text-gray-900">
        {/* Search Input Bar */}
        <div className="relative flex items-center border-b border-gray-200 pb-4">
          <Search className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search catalog: Teak, Dining Table, Lounger, Mahoni, OEM..."
            className="w-full bg-transparent text-gray-900 placeholder-gray-400 text-base sm:text-lg outline-none font-medium"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-full text-gray-400 hover:text-gray-900 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-[60vh] overflow-y-auto mt-4 space-y-4 no-scrollbar">
          {query.trim() === '' ? (
            <div className="py-8 text-center text-xs text-gray-500">
              <Sparkles className="w-4 h-4 text-[#8C6239] mx-auto mb-2" />
              <span>Cari kategori produk mebel, koleksi, atau jenis kayu (Jati, Mahoni, Sungkai)</span>
            </div>
          ) : (
            <>
              {filteredCategories.length > 0 && (
                <div>
                  <div className="text-[11px] font-semibold tracking-wider uppercase text-gray-400 mb-2">
                    Categories ({filteredCategories.length})
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {filteredCategories.map((c) => (
                      <div
                        key={c.id}
                        onClick={() => handleItemClick(c.name)}
                        className="p-3 rounded-xl bg-gray-50 hover:bg-amber-50/60 border border-gray-100 hover:border-amber-200 transition-all cursor-pointer flex items-center justify-between"
                      >
                        <div>
                          <div className="text-xs font-semibold text-gray-900">{c.name}</div>
                          <div className="text-[10px] text-gray-500">{c.woodType}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#8C6239]" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {filteredCollections.length > 0 && (
                <div className="pt-2">
                  <div className="text-[11px] font-semibold tracking-wider uppercase text-gray-400 mb-2">
                    Collections ({filteredCollections.length})
                  </div>
                  <div className="space-y-2">
                    {filteredCollections.map((col) => (
                      <div
                        key={col.id}
                        onClick={() => handleItemClick(col.title)}
                        className="p-3 rounded-xl bg-gray-50 hover:bg-amber-50/60 border border-gray-100 hover:border-amber-200 transition-all cursor-pointer flex items-center justify-between"
                      >
                        <div>
                          <div className="text-xs font-semibold text-gray-900">{col.title}</div>
                          <div className="text-[10px] text-gray-500">{col.wood}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#8C6239]" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {filteredCategories.length === 0 && filteredCollections.length === 0 && (
                <div className="py-8 text-center text-xs text-gray-500">
                  Tidak ada produk ditemukan untuk kata kunci &ldquo;{query}&rdquo;.
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
