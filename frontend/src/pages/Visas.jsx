import React, { useState } from 'react';
import { useSite } from '../context/SiteContext';
import { 
  ShieldCheck, 
  Search, 
  Clock, 
  Calendar, 
  FileText, 
  CheckCircle2, 
  ArrowRight, 
  AlertCircle,
  HelpCircle,
  ChevronDown,
  Sparkles
} from 'lucide-react';

export default function Visas() {
  const { visas, openEnquiryModal } = useSite();
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedDocId, setExpandedDocId] = useState(null);

  const regions = ['All', 'Europe', 'Middle East', 'Asia', 'Americas', 'Oceania'];

  const filteredVisas = visas.filter((visa) => {
    const matchesRegion = selectedRegion === 'All' || visa.region === selectedRegion;
    const matchesSearch = 
      visa.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      visa.type.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#fcfaf6] py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-[#ff6b00] text-xs font-bold tracking-wider uppercase mb-4 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-[#ff6b00]" />
            <span>EXPERT VISA CONSULTANCY</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight mb-4">
            Tourist, Business & Student Visas
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            From Schengen dossier curation to USA interview prep and instant Dubai E-visas. We handle application forms, appointment booking, and document checklists with 99.2% approval rates.
          </p>
        </div>

        {/* Search & Region Filter Bar */}
        <div className="bg-white rounded-3xl p-4 sm:p-5 shadow-sm border border-stone-200/80 mb-12 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Region Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  selectedRegion === region
                    ? 'bg-gradient-to-r from-[#ff7a00] to-[#ff5500] text-white shadow-md shadow-orange-500/25 font-bold'
                    : 'bg-stone-100 text-neutral-700 hover:bg-orange-50 hover:text-[#ff6b00]'
                }`}
              >
                {region}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search country or visa type..."
              className="w-full pl-10 pr-4 py-2.5 rounded-full text-xs sm:text-sm bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#ff6b00] focus:border-transparent"
            />
          </div>

        </div>

        {/* Visa Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {filteredVisas.map((visa) => (
            <div
              key={visa.id}
              className="bg-white rounded-3xl p-6 sm:p-7 shadow-sm border border-stone-200/80 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Top: Country, Flag, Popular Badge */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl" role="img" aria-label="flag">
                      {visa.flag || '🌍'}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-neutral-900 group-hover:text-[#ff6b00] transition-colors">
                        {visa.country}
                      </h3>
                      <span className="text-xs font-semibold text-neutral-500">
                        {visa.type}
                      </span>
                    </div>
                  </div>
                  {visa.popular && (
                    <span className="bg-[#bbf451] text-black text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider">
                      Popular
                    </span>
                  )}
                </div>

                <p className="text-xs text-neutral-600 leading-relaxed mb-6">
                  {visa.description}
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-6 p-3.5 rounded-2xl bg-stone-50 border border-stone-100 text-xs">
                  <div>
                    <span className="text-neutral-400 block text-[11px]">Processing Time</span>
                    <span className="font-bold text-neutral-800 flex items-center gap-1 mt-0.5">
                      <Clock className="w-3.5 h-3.5 text-[#ff6b00]" />
                      {visa.processingTime}
                    </span>
                  </div>
                  <div>
                    <span className="text-neutral-400 block text-[11px]">Validity</span>
                    <span className="font-bold text-neutral-800 flex items-center gap-1 mt-0.5">
                      <Calendar className="w-3.5 h-3.5 text-[#ff6b00]" />
                      {visa.validity}
                    </span>
                  </div>
                </div>

                {/* Requirements accordion / list */}
                {visa.requirements && visa.requirements.length > 0 && (
                  <div className="mb-6">
                    <button
                      onClick={() => setExpandedDocId(expandedDocId === visa.id ? null : visa.id)}
                      className="w-full flex items-center justify-between text-xs font-bold text-neutral-800 hover:text-[#ff6b00] py-1 border-b border-stone-100 transition-colors"
                    >
                      <span className="flex items-center gap-1.5">
                        <FileText className="w-3.5 h-3.5 text-[#ff6b00]" />
                        Document Checklist ({visa.requirements.length})
                      </span>
                      <ChevronDown 
                        className={`w-3.5 h-3.5 transition-transform ${
                          expandedDocId === visa.id ? 'rotate-180 text-[#ff6b00]' : ''
                        }`} 
                      />
                    </button>

                    {expandedDocId === visa.id && (
                      <ul className="mt-3 space-y-2 text-xs text-neutral-600 pl-1 animate-in fade-in duration-200">
                        {visa.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>

              {/* Bottom: Fee breakdown & Action */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-neutral-400 block">Consultancy Fee</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-lg font-extrabold text-[#ff6b00]">
                      {visa.serviceFee || '₹1,999'}
                    </span>
                    {visa.govtFee && (
                      <span className="text-[10px] text-neutral-400">
                        + govt fee
                      </span>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => openEnquiryModal({
                    interest: 'Visa Consultancy',
                    destination: visa.country,
                    notes: `Applying for ${visa.country} (${visa.type})`
                  })}
                  className="bg-gradient-to-r from-[#ff7a00] to-[#ff5500] hover:from-[#ff8800] hover:to-[#ff4500] text-white px-5 py-2.5 rounded-full text-xs font-bold transition-all shadow-[0_4px_14px_rgba(255,107,0,0.3)] hover:shadow-[0_6px_20px_rgba(255,107,0,0.45)] flex items-center gap-1.5"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Why OneLife Visa Consultancy Banner */}
        <div className="bg-[#141210] text-white rounded-3xl p-8 sm:p-12 mb-16">
          <div className="max-w-3xl">
            <span className="text-xs font-bold tracking-widest uppercase text-[#bbf451] block mb-2">
              WHY ONELIFE VISA DESK
            </span>
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              99.2% Visa Approval Track Record
            </h2>
            <p className="text-sm text-stone-300 leading-relaxed mb-8">
              We don't just fill forms. Our ex-consulate document auditors verify your financial statements, employment letters, and cover letters to eliminate any ambiguity before biometric submission.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-[#26221f]">
              <div>
                <h4 className="text-base font-bold text-white mb-1">Appointment Hunting</h4>
                <p className="text-xs text-stone-400">Automated slot monitoring for early appointment release.</p>
              </div>
              <div>
                <h4 className="text-base font-bold text-white mb-1">Tailored Cover Letters</h4>
                <p className="text-xs text-stone-400">Personalized motivation letters tailored to consular expectations.</p>
              </div>
              <div>
                <h4 className="text-base font-bold text-white mb-1">Mock Interview Drill</h4>
                <p className="text-xs text-stone-400">1-on-1 prep sessions for US B1/B2 and student visa interviews.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

