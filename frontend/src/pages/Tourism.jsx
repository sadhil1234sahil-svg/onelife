import React, { useState } from 'react';
import { useSite } from '../context/SiteContext';
import { 
  Sparkles, 
  Search, 
  MapPin, 
  Clock, 
  Check, 
  ArrowRight, 
  ChevronRight,
  Filter,
  Layers,
  Heart
} from 'lucide-react';

export default function Tourism() {
  const { packages, openEnquiryModal } = useSite();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activePackageModal, setActivePackageModal] = useState(null);

  const categories = ['All', 'Honeymoon', 'Family', 'Adventure', 'Luxury', 'Culture'];

  const filteredPackages = packages.filter((pkg) => {
    const matchesCategory = selectedCategory === 'All' || pkg.category?.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch = 
      pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.destination.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#fcfaf6] py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-[#ff6b00] text-xs font-bold tracking-wider uppercase mb-4 shadow-sm">
            <Sparkles className="w-4 h-4 text-[#ff6b00]" />
            <span>HANDPICKED HOLIDAY PACKAGES</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight mb-4">
            Curated Stays & Seamless Itineraries
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            Every holiday package includes vetted 4-star & 5-star boutique stays, private chauffeured transfers, curated experiences, and complete visa documentation handled by our in-house team.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="bg-white rounded-3xl p-4 sm:p-5 shadow-sm border border-stone-200/80 mb-12 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-[#ff7a00] to-[#ff5500] text-white shadow-md shadow-orange-500/25 font-bold'
                    : 'bg-stone-100 text-neutral-700 hover:bg-orange-50 hover:text-[#ff6b00]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search destination, city, country..."
              className="w-full pl-10 pr-4 py-2.5 rounded-full text-xs sm:text-sm bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#ff6b00] focus:border-transparent"
            />
          </div>

        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-3xl overflow-hidden border border-stone-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Photo & Badges */}
                <div className="relative h-60 overflow-hidden bg-stone-100">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#bbf451] text-black font-bold text-xs px-3 py-1 rounded-full shadow">
                    {pkg.badge || pkg.category}
                  </div>
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white font-bold text-xs px-3 py-1 rounded-full flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#bbf451]" />
                    <span>{pkg.duration}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-1.5 text-xs text-[#ff6b00] font-bold uppercase tracking-wider mb-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{pkg.destination}</span>
                  </div>

                  <h3 className="text-xl font-bold text-neutral-900 group-hover:text-[#ff6b00] transition-colors mb-2">
                    {pkg.title}
                  </h3>

                  <p className="text-xs text-neutral-600 leading-relaxed mb-6 line-clamp-2">
                    {pkg.description}
                  </p>

                  {/* Highlights / Inclusions tags */}
                  {pkg.inclusions && pkg.inclusions.length > 0 && (
                    <div className="space-y-1.5 mb-4">
                      {pkg.inclusions.slice(0, 3).map((inc, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-neutral-700">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span className="truncate">{inc}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <button
                    onClick={() => setActivePackageModal(pkg)}
                    className="text-xs font-bold text-neutral-900 hover:text-[#ff6b00] inline-flex items-center gap-1 pt-2"
                  >
                    <span>View full itinerary & inclusions</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Bottom Price Strip */}
              <div className="px-6 py-4 bg-stone-50 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-neutral-400 block font-normal">Starting from</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl font-extrabold text-[#ff6b00]">
                      {pkg.currency}{pkg.price?.toLocaleString()}
                    </span>
                    <span className="text-[11px] text-neutral-500">/ person</span>
                  </div>
                </div>

                <button
                  onClick={() => openEnquiryModal({
                    interest: 'Holiday Package',
                    destination: pkg.destination || pkg.title,
                    notes: `Inquiry for package: ${pkg.title} (${pkg.duration})`
                  })}
                  className="bg-[#ff6b00] hover:bg-[#e65900] text-white px-5 py-2.5 rounded-full text-xs font-bold transition-all shadow-sm"
                >
                  Book Trip
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Tailor-Made Itinerary Banner */}
        <div className="bg-[#e4f9b8] rounded-3xl p-8 sm:p-12 border border-[#cfee92] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#ff6b00] block mb-1">
              TAILOR-MADE EXPERIENCES
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 mb-2">
              Want a customized multi-city itinerary?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
              Tell our destination designers your preferred dates, party size, and bucket-list stops. We create customized day-by-day itineraries with private villa options and visa guidance.
            </p>
          </div>
          <button
            onClick={() => openEnquiryModal({
              interest: 'Both (Visa + Package)',
              notes: 'Requesting a customized tailor-made itinerary.'
            })}
            className="bg-neutral-900 hover:bg-black text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-md transition-all shrink-0"
          >
            Design Custom Itinerary
          </button>
        </div>

        {/* Modal for Full Itinerary */}
        {activePackageModal && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
            <div className="relative bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl my-8">
              <button
                onClick={() => setActivePackageModal(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-neutral-700"
              >
                ✕
              </button>

              <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
                <img
                  src={activePackageModal.image}
                  alt={activePackageModal.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#bbf451] text-black text-xs font-bold px-3 py-1 rounded-full">
                  {activePackageModal.badge || activePackageModal.category}
                </div>
              </div>

              <div className="flex items-baseline justify-between mb-2">
                <h3 className="text-2xl font-extrabold text-neutral-900">{activePackageModal.title}</h3>
                <span className="text-sm font-bold text-[#ff6b00]">{activePackageModal.duration}</span>
              </div>

              <p className="text-sm text-neutral-600 mb-6 leading-relaxed">
                {activePackageModal.description}
              </p>

              {activePackageModal.inclusions && (
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 mb-3">
                    All Package Inclusions:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-neutral-700">
                    {activePackageModal.inclusions.map((inc, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activePackageModal.highlights && (
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 mb-3">
                    Key Highlights:
                  </h4>
                  <ul className="space-y-1.5 text-xs text-neutral-700">
                    {activePackageModal.highlights.map((hl, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] mt-1.5 shrink-0"></span>
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
                <div>
                  <span className="text-xs text-neutral-500 block">Pricing from</span>
                  <span className="text-2xl font-extrabold text-[#ff6b00]">
                    {activePackageModal.currency}{activePackageModal.price?.toLocaleString()}
                  </span>
                  <span className="text-xs text-neutral-500 ml-1">/ person</span>
                </div>
                <button
                  onClick={() => {
                    const pkg = activePackageModal;
                    setActivePackageModal(null);
                    openEnquiryModal({
                      interest: 'Holiday Package',
                      destination: pkg.destination || pkg.title,
                      notes: `Booking enquiry for ${pkg.title}`
                    });
                  }}
                  className="bg-[#ff6b00] hover:bg-[#e65900] text-white px-8 py-3 rounded-full font-bold text-sm shadow transition-all"
                >
                  Book / Request Quote
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

