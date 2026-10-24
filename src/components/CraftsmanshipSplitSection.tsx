'use client'

export default function CraftsmanshipSplitSection() {
  return (
    <section
      id="craftsmanship"
      className="relative w-full h-full min-h-screen bg-white overflow-hidden flex flex-col lg:flex-row flex-shrink-0"
    >
      {/* Left Column (Desktop: Kiri, Mobile: Bawah) - Pure White with Clean Bold Typography like Q-Works */}
      <div className="w-full lg:w-5/12 flex flex-col justify-center px-8 sm:px-14 lg:px-20 py-16 bg-white z-10 order-2 lg:order-1">
        <div className="max-w-md mx-auto lg:mx-0 text-center lg:text-left">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-950 tracking-tight leading-tight mb-4">
            Masterpiece Furniture in Motion
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed mb-6">
            Where timeless Indonesian craftsmanship meets modern precision manufacturing.
            Crafted from our integrated facility in Sidoarjo, East Java.
          </p>

          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noreferrer"
            className="inline-block px-7 py-3 bg-black hover:bg-gray-800 text-white font-semibold text-xs tracking-wider uppercase rounded transition-all shadow-sm"
          >
            Discover the lifestyle collection
          </a>
        </div>
      </div>

      {/* Right Column (Desktop: Kanan, Mobile: Atas) - Showcase Visual */}
      <div className="w-full lg:w-7/12 h-72 sm:h-96 lg:h-full relative overflow-hidden order-1 lg:order-2 bg-gray-100">
        <img
          src="https://images.unsplash.com/photo-1540518614846-7ede433c4550?q=80&w=1600&auto=format&fit=crop"
          alt="Indonesian Furniture Craftsmanship Sidoarjo"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  )
}
